// The highlight behind the active menu item, as one element that travels.
//
// Each menu keeps a single pill and moves it to whichever item is current, so
// scrolling from one section to the next slides the highlight along instead of
// blinking it off one item and on at another. Works for the horizontal top bar
// and the vertical services menu alike — both are measured, neither is
// hardcoded.
//
// It listens for the class the scroll-spy already sets rather than tracking
// scroll itself, so there is one source of truth for which item is active.
(() => {
  "use strict";

  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");

  const menus = document.querySelectorAll("#main-nav, #services-nav-list");

  menus.forEach((list) => {
    const pill = document.createElement("span");
    pill.className = "nav-pill";
    pill.setAttribute("aria-hidden", "true");
    list.prepend(pill);

    // Jumping straight to the first active item on load would animate the pill
    // in from the corner, so the first placement is silent.
    let placed = false;

    function move() {
      const active = list.querySelector("a.is-active");
      if (!active) {
        pill.classList.remove("is-ready");
        return;
      }

      // offsetParent is the menu itself — both are positioned — so these are
      // already relative to the box the pill sits in.
      const { offsetLeft: x, offsetTop: y, offsetWidth: w, offsetHeight: h } = active;
      if (!w || !h) return;

      if (!placed) pill.style.transition = "none";

      pill.style.width = `${w}px`;
      pill.style.height = `${h}px`;
      pill.style.transform = `translate(${x}px, ${y}px)`;
      pill.classList.add("is-ready");

      // On a narrow screen the services menu is a track wider than the window,
      // so the item the pill just moved to can be off the side of it. Bringing
      // it to the middle is what makes the highlight readable as movement
      // rather than as something that vanished.
      if (list.scrollWidth > list.clientWidth) {
        const max = list.scrollWidth - list.clientWidth;
        const centred = x + w / 2 - list.clientWidth / 2;
        list.scrollTo({
          left: Math.max(0, Math.min(centred, max)),
          // Silent on first placement, for the same reason the pill is.
          behavior: placed && !REDUCED_MOTION.matches ? "smooth" : "auto",
        });
      }

      if (!placed) {
        void pill.offsetWidth; // flush, so the next change animates
        pill.style.transition = "";
        placed = true;
      }
    }

    // The scroll-spy retags links as sections pass; that is the cue to move.
    new MutationObserver((records) => {
      if (records.some((r) => r.target instanceof HTMLAnchorElement)) move();
    }).observe(list, { subtree: true, attributes: true, attributeFilter: ["class"] });

    // Reflows change the geometry without touching any class.
    new ResizeObserver(() => {
      placed = false;
      move();
    }).observe(list);

    move();
    // Web fonts land after first paint and shift every item's width.
    if (document.fonts) document.fonts.ready.then(() => { placed = false; move(); });
  });
})();
