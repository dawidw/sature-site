(() => {
  "use strict";

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // FAQ accordion
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });

  // Where a section has to reach to count as current: a single line, kept high
  // in the viewport so the highlight waits until the reader is actually into
  // the section rather than flipping the moment its top edge appears. 0.4 is
  // where the old observer band ended, so sections still become current at the
  // same moment on the way down.
  const SPY_LINE = 0.4;

  // Scroll-spy: highlights the nav link matching whichever section is in view,
  // and updates instantly on click rather than waiting for scroll to settle.
  //
  // Measured on scroll rather than observed. An IntersectionObserver reports
  // only the targets whose intersection *changed*, so a batch could arrive
  // carrying nothing but sections that had just left; the old handler looked
  // for an incoming section, found none, and returned without setting
  // anything, leaving the previous item lit. That is what stranded the pill on
  // the way back up — this page leaves 1839px between #testimonials and #faq,
  // and 2296px between #about and #services, so climbing out of a section
  // meant a long stretch with nothing arriving to correct the highlight.
  //
  // Ratio ranking was the other half. intersectionRatio divides by the
  // target's own height, so against a 135px band #testimonials (396px tall)
  // scored 0.34 while #services (3792px) scored 0.036 — the shorter section
  // won whenever both were in the band. #services could not reach the 0.25
  // threshold at all, so in its entire 3792px it only ever reported twice.
  //
  // One line, and the last section whose top has passed it wins: symmetric in
  // both directions, unaffected by how tall a section is, and there is always
  // an answer.
  function setupScrollSpy(linkSelector) {
    const links = Array.from(document.querySelectorAll(linkSelector));
    const items = links
      .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
      .filter((item) => item.section)
      // "Last one past the line" only means anything in document order, which
      // is not something the markup owes us.
      .sort((a, b) =>
        a.section.compareDocumentPosition(b.section) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
      );

    if (!items.length) return;

    let current = null;
    const setActive = (link) => {
      if (link === current) return;
      current = link;
      links.forEach((other) => other.classList.toggle("is-active", other === link));
    };

    function update() {
      const line = window.innerHeight * SPY_LINE;
      // At the foot of the page the last section is the one being read, and it
      // may be too short to ever bring its own top up to the line.
      const atEnd =
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.documentElement.scrollHeight - 2;

      let found = null;
      if (atEnd) {
        found = items[items.length - 1];
      } else {
        for (const item of items) {
          if (item.section.getBoundingClientRect().top <= line) found = item;
        }
      }
      // Above the first section there is nothing past the line yet; the first
      // item is where the reader is heading.
      setActive((found || items[0]).link);
    }

    links.forEach((link) => {
      link.addEventListener("click", () => setActive(link));
    });

    let queued = false;
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
    // updates from ever resuming — the same guard header-theme.js needs.
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        queued = false;
        update();
      }
    });
    // Web fonts land after first paint and move every section down the page.
    if (document.fonts) document.fonts.ready.then(update);
  }

  setupScrollSpy("#services-nav-list a");
  setupScrollSpy("#main-nav a");

  // Work carousel — click advances by one card, wraps back to start at the end
  const workViewport = document.querySelector(".work-carousel-viewport");
  const workCarousel = document.getElementById("work-carousel");
  const workNext = document.getElementById("work-next");
  if (workViewport && workCarousel && workNext) {
    workNext.addEventListener("click", () => {
      const card = workCarousel.querySelector(".work-card");
      if (!card) return;
      const step = card.getBoundingClientRect().width + 20; // card width + gap
      const atEnd = workViewport.scrollLeft + workViewport.clientWidth >= workViewport.scrollWidth - 10;
      workViewport.scrollTo({
        left: atEnd ? 0 : workViewport.scrollLeft + step,
        behavior: "smooth",
      });
    });
  }
})();
