// Switches the header between its light and dark variants.
//
// The bar has no surface of its own, so it sits directly on whatever section is
// behind it. Which variant applies is decided by the surface under the bar's
// own midline — not by scroll position, which would need re-tuning every time a
// section's height changed.
(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  if (!header) return;

  const darkSections = Array.from(
    document.querySelectorAll(".hero, .section-dark, .cta-band, .site-footer")
  );
  if (!darkSections.length) return;

  let queued = false;

  function update() {
    const line = header.getBoundingClientRect().height / 2;
    const onDark = darkSections.some((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= line && rect.bottom >= line;
    });
    header.classList.toggle("is-on-dark", onDark);

    // The bar carries no surface, which is fine while the page is at rest but
    // leaves the wordmark sitting on whatever is travelling underneath it. The
    // flag drives the frosted plate below 1024 — see the media query. Eight
    // pixels rather than zero so a rubber-band overscroll does not flicker it.
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      update();
    });
  }

  update();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);

  // A hidden tab freezes rAF, which would leave the flag stuck and stop
  // updates from ever resuming; clearing it here restores them.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      queued = false;
      update();
    }
  });
})();
