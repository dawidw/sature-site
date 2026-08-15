// Animated topographic-line background, applied to every dark card
// (hero, team/story, CTA, footer). Progressive enhancement only: if WebGL
// isn't available, the user prefers reduced motion, or the module fails to
// load, the static CSS background (assets/img/hero-bg.webp) stays visible
// on each card and nothing here runs.
(() => {
  "use strict";

  const targets = Array.from(document.querySelectorAll(".hero, .section-dark, .cta-band, .site-footer"));
  if (!targets.length) return;

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
    uniform float uSeed;
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
      vec2 p = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0) * 1.6 + uSeed;
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

  const clockStart = performance.now();
  const instances = [];
  let raf = null;

  function tick(now) {
    const t = (now - clockStart) / 1000;
    for (const inst of instances) {
      if (!inst.running) continue;
      inst.material.uniforms.uTime.value = t;
      inst.renderer.render(inst.scene, inst.camera);
    }
    raf = requestAnimationFrame(tick);
  }

  function ensureLoop() {
    if (raf === null) raf = requestAnimationFrame(tick);
  }

  function makeInstance(THREE, el, seed) {
    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    const canvas = renderer.domElement;
    canvas.className = "topo-canvas";
    canvas.setAttribute("aria-hidden", "true");
    el.prepend(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uSeed: { value: seed },
        uResolution: { value: new THREE.Vector2(1, 1) },
      },
    });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    const inst = { el, renderer, scene, camera, material, running: true };

    const resize = () => {
      const rect = el.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      renderer.setSize(w, h, false);
      material.uniforms.uResolution.value.set(w, h);
    };
    resize();
    new ResizeObserver(resize).observe(el);

    const io = new IntersectionObserver(
      (entries) => { inst.running = entries[0].isIntersecting; },
      { threshold: 0 }
    );
    io.observe(el);

    return inst;
  }

  async function init() {
    let THREE;
    try {
      THREE = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
    } catch {
      return; // offline / CDN blocked — static backgrounds stay
    }

    targets.forEach((el, index) => {
      instances.push(makeInstance(THREE, el, index * 12.5));
    });

    ensureLoop();

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (raf) cancelAnimationFrame(raf);
        raf = null;
      } else {
        ensureLoop();
      }
    });
  }

  if ("requestIdleCallback" in window) {
    requestIdleCallback(init, { timeout: 2000 });
  } else {
    setTimeout(init, 200);
  }
})();
