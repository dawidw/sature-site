(() => {
  "use strict";

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      mainNav.classList.toggle("is-open", !open);
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("is-open");
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });

  // Scroll-spy: highlights the nav link matching whichever section is in view,
  // and updates instantly on click rather than waiting for scroll to settle.
  function setupScrollSpy(linkSelector) {
    const links = Array.from(document.querySelectorAll(linkSelector));
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!links.length || !sections.length) return;

    const setActive = (id) => {
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    };

    links.forEach((link) => {
      link.addEventListener("click", () => {
        setActive(link.getAttribute("href").slice(1));
      });
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) setActive(visible.target.id);
        },
        {
          // The band a section has to reach to count as current. Kept high in
          // the viewport so the highlight waits until the reader is actually
          // into the section, rather than flipping the moment its top edge
          // appears past the middle of the screen.
          rootMargin: "-25% 0px -60% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );
      sections.forEach((section) => observer.observe(section));
    }
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
