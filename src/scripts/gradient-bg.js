// Animated warped-gradient background for the hero.
//
// The renderer is the module supplied for this feature, kept as-is apart from
// dropping its React wrapper — the factory below was already framework-free,
// so nothing needed porting. Two things are added to match how the other
// background behaves here: it stops drawing when the tab is hidden or the card
// scrolls out of view, and it bails out entirely when WebGL is missing.
//
// It layers above the contour canvas and below the hero's content; both sit
// under `.bg-canvas`, which the content rule excludes from its z-index.
(() => {
  "use strict";

  const host = document.querySelector(".hero");
  if (!host) return;

  const VERT = `attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }`;

  const FRAG = `precision highp float;

uniform vec2  uRes;
uniform float uTime;
uniform float uScale;
uniform float uWarp;
uniform float uContrast;
uniform float uAngle;
uniform float uGrain;
uniform float uVignette;
uniform float uBlend;
uniform float uSeed;
uniform int   uCount;
uniform vec3  uCol[6];
uniform float uPos[6];

float hash(vec2 p){
  p = fract(p * vec2(443.897, 441.423));
  p += dot(p, p + 19.19);
  return fract((p.x + p.y) * p.x);
}

float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  mat2 m = mat2(1.62, 1.18, -1.18, 1.62);
  for (int i = 0; i < 5; i++){
    v += a * vnoise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

vec3 ramp(float t){
  t = clamp(t, 0.0, 1.0);
  vec3 c = uCol[0];
  for (int i = 0; i < 5; i++){
    if (i + 1 >= uCount) break;
    float d = max(uPos[i + 1] - uPos[i], 0.0001);
    float k = clamp((t - uPos[i]) / d, 0.0, 1.0);
    c = mix(c, uCol[i + 1], k * k * (3.0 - 2.0 * k));
  }
  return c;
}

void main(){
  vec2 p  = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
  vec2 sd = vec2(uSeed * 3.71, uSeed * 1.93);
  vec2 q  = p * uScale + sd;
  float t = uTime;

  vec2 w = vec2(
    fbm(q + vec2(0.0, t * 0.18)),
    fbm(q + vec2(5.2, 1.3) - t * 0.13)
  );
  vec2 r = q + uWarp * w + uWarp * 0.6 * vec2(
    fbm(q * 1.7 + 3.0 * w + t * 0.07),
    fbm(q * 1.4 - 3.0 * w - t * 0.05)
  );

  float n   = fbm(r);
  float lin = dot(p, vec2(cos(uAngle), sin(uAngle))) * 0.85 + 0.5;
  float v   = mix(lin, n, uBlend);
  v = (v - 0.5) * uContrast + 0.5;

  vec3 col = ramp(v);
  col *= 1.0 - uVignette * smoothstep(0.35, 1.15, length(p));

  float g = hash(gl_FragCoord.xy + fract(t) * vec2(37.0, 17.0)) - 0.5;
  col += g * uGrain;
  col += (hash(gl_FragCoord.xy * 1.37 + 0.5) - 0.5) / 255.0;

  gl_FragColor = vec4(col, 1.0);
}`;

  const PARAMS = {
    stops: [
      { c: "#000000", p: 0 },
      { c: "#121212", p: 0.4 },
      { c: "#2A2A2A", p: 0.72 },
      { c: "#545454", p: 1 },
    ],
    scale: 1.3,
    warp: 1.1,
    speed: 0.18,
    contrast: 1.25,
    angle: 118,
    grain: 0.022,
    vignette: 0.32,
    blend: 0.91,
    seed: 20,
  };

  function createGradientRenderer(canvas, vertSrc, fragSrc, initialParams) {
    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });
    if (!gl) return null;

    let params = initialParams;
    let raf = 0;
    let time = 0;
    let last = 0;
    let dead = false;
    let visible = true;

    function compile(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(s));
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertSrc));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragSrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const names = [
      "uRes", "uTime", "uScale", "uWarp", "uContrast", "uAngle", "uGrain",
      "uVignette", "uBlend", "uSeed", "uCount", "uCol[0]", "uPos[0]",
    ];
    const U = {};
    for (const name of names) U[name] = gl.getUniformLocation(prog, name);

    function toRGB(hex) {
      let h = hex.replace("#", "");
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      const n = parseInt(h, 16);
      return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round((canvas.clientWidth || 1) * dpr));
      const h = Math.max(1, Math.round((canvas.clientHeight || 1) * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    const reduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function frame(now) {
      if (dead) return;
      if (!last) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!reduced && !document.hidden) time += dt * params.speed;

      resize();
      gl.useProgram(prog);

      const stops = params.stops;
      const count = Math.min(stops.length, 6);
      const cols = new Float32Array(18);
      const poss = new Float32Array(6);
      for (let j = 0; j < 6; j++) {
        const s = stops[Math.min(j, count - 1)];
        const c = toRGB(s.c);
        cols[j * 3] = c[0];
        cols[j * 3 + 1] = c[1];
        cols[j * 3 + 2] = c[2];
        poss[j] = s.p;
      }

      gl.uniform2f(U["uRes"], canvas.width, canvas.height);
      gl.uniform1f(U["uTime"], time);
      gl.uniform1f(U["uScale"], params.scale);
      gl.uniform1f(U["uWarp"], params.warp);
      gl.uniform1f(U["uContrast"], params.contrast);
      gl.uniform1f(U["uAngle"], (params.angle * Math.PI) / 180);
      gl.uniform1f(U["uGrain"], params.grain);
      gl.uniform1f(U["uVignette"], params.vignette);
      gl.uniform1f(U["uBlend"], params.blend);
      gl.uniform1f(U["uSeed"], params.seed);
      gl.uniform1i(U["uCount"], count);
      gl.uniform3fv(U["uCol[0]"], cols);
      gl.uniform1fv(U["uPos[0]"], poss);

      gl.drawArrays(gl.TRIANGLES, 0, 3);

      // Off-screen or backgrounded: stop burning frames. `last` is reset so the
      // first frame back doesn't jump the clock forward.
      if (!visible || document.hidden) {
        raf = 0;
        last = 0;
        return;
      }
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (!dead && !raf) raf = requestAnimationFrame(frame);
    }

    return {
      start,
      setVisible(next) {
        visible = next;
        if (next) start();
      },
      setParams(next) {
        params = next;
      },
      destroy() {
        dead = true;
        cancelAnimationFrame(raf);
        gl.deleteProgram(prog);
        gl.deleteBuffer(buf);
      },
    };
  }

  const canvas = document.createElement("canvas");
  canvas.className = "bg-canvas gradient-canvas";
  canvas.setAttribute("aria-hidden", "true");
  // Appended, not prepended: it has to sit over the contour canvas, and both
  // carry the same z-index, so document order settles it.
  host.appendChild(canvas);

  const renderer = createGradientRenderer(canvas, VERT, FRAG, PARAMS);
  if (!renderer) {
    canvas.remove();
    return;
  }

  renderer.start();

  new IntersectionObserver(
    (entries) => renderer.setVisible(entries[0].isIntersecting),
    { threshold: 0 }
  ).observe(host);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) renderer.start();
  });

  new ResizeObserver(() => renderer.start()).observe(host);
})();
