// Animated topographic-line background for the hero card.
// Progressive enhancement only: if WebGL isn't available, the user prefers
// reduced motion, or the module fails to load, the static CSS background
// (assets/img/hero-bg.webp) stays visible and nothing here runs.
(() => {
  "use strict";

  const hero = document.querySelector(".hero");
  if (!hero) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canProbe = document.createElement("canvas");
  const hasWebGL = !!(canProbe.getContext("webgl2") || canProbe.getContext("webgl"));
  if (!hasWebGL) return;

  const VERT = /* glsl */ `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `;

  const FRAG = /* glsl */ `
    precision highp float;
    uniform float uTime;
    uniform vec2 uResolution;

    vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                          -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                      + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
                    dot(x12.zw, x12.zw)), 0.0);
      m = m * m; m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution.xy;
      vec2 p = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0) * 1.6;
      float t = uTime * 0.025;

      float warpX = snoise(p * 0.5 + vec2(t * 0.6, -t * 0.4));
      float warpY = snoise(p * 0.5 + vec2(-t * 0.4, t * 0.5) + 8.2);
      vec2 warped = p + 0.22 * vec2(warpX, warpY);

      float n = snoise(warped * 0.75 + vec2(0.0, t * 0.35)) * 0.7
              + snoise(warped * 1.6 - vec2(t * 0.3, 0.0)) * 0.3;

      float bands = fract(n * 2.6);
      float d = min(bands, 1.0 - bands);
      float contour = 1.0 - smoothstep(0.0, 0.018, d);

      vec3 base = vec3(0.035, 0.035, 0.035);
      vec3 lineColor = vec3(1.0, 1.0, 1.0);
      vec3 col = base + contour * lineColor * 0.42;

      float vign = smoothstep(1.15, 0.1, length((uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0)));
      col *= mix(0.6, 1.0, vign);

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  let renderer, scene, camera, material, canvas;
  let raf = null;
  let running = false;
  const clock = { start: performance.now() };

  function size() {
    const rect = hero.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));
    renderer.setSize(w, h, false);
    material.uniforms.uResolution.value.set(w, h);
  }

  function frame(now) {
    if (!running) return;
    material.uniforms.uTime.value = (now - clock.start) / 1000;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (running) return;
    running = true;
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = null;
  }

  async function init() {
    let THREE;
    try {
      THREE = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
    } catch {
      return; // offline / CDN blocked — static background stays
    }

    renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    canvas = renderer.domElement;
    canvas.className = "hero-canvas";
    canvas.setAttribute("aria-hidden", "true");
    hero.prepend(canvas);

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
      },
    });

    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    size();
    new ResizeObserver(size).observe(hero);

    const io = new IntersectionObserver(
      (entries) => (entries[0].isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(hero);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else if (hero.getBoundingClientRect().bottom > 0) start();
    });
  }

  if ("requestIdleCallback" in window) {
    requestIdleCallback(init, { timeout: 2000 });
  } else {
    setTimeout(init, 200);
  }
})();
