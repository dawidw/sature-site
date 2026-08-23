// Drops the services menu once it starts holding position.
//
// On arrival the menu lines up with the first service heading. It only takes
// its offset after it has stuck to the top — that is, once the reader is
// moving between subsections rather than entering the section.
//
// A sentinel at the menu's unstuck position reports the crossing, so this
// costs nothing per scroll frame.
(() => {
  "use strict";

  const layout = document.querySelector(".services-layout");
  const nav = document.querySelector(".services-nav");
  if (!layout || !nav) return;

  const sentinel = document.createElement("span");
  sentinel.className = "services-nav-sentinel";
  sentinel.setAttribute("aria-hidden", "true");
  layout.prepend(sentinel);

  const stickyTop = parseFloat(getComputedStyle(nav).top) || 0;

  new IntersectionObserver(
    ([entry]) => {
      // Compared against the root edge carried by the entry itself. Reading the
      // sentinel's position against a constant fails at exactly the moment the
      // callback runs — the two are equal there, and no further crossing
      // follows to correct it.
      const line = entry.rootBounds ? entry.rootBounds.top : stickyTop;
      const above = entry.boundingClientRect.top <= line;
      nav.classList.toggle("is-stuck", !entry.isIntersecting && above);
    },
    { rootMargin: `-${Math.round(stickyTop) + 1}px 0px 0px 0px`, threshold: 0 }
  ).observe(sentinel);
})();
