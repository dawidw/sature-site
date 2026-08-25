// Entrance motion for content arriving in the viewport.
//
// The whole point is to be barely noticed: 14px of travel and a scale of
// 0.985, so an element reads as settling onto its mark rather than flying in.
// Anything larger stops being atmosphere and becomes a wait — the reader has
// already decided to look at this thing, and motion that delays it is a tax.
//
// Four rules the rest of this file exists to keep:
//
//   Once. An element reveals on first entry and is then let go. Replaying on
//   every pass — especially scrolling back up — is what turns scroll motion
//   from texture into a nuisance.
//
//   Never below the fold at load. Whatever is already on screen when the
//   script runs is never given the hidden state at all, so nothing animates
//   just because the page opened.
//
//   Never a reason to see nothing. The hidden state is applied from here, not
//   from the stylesheet, and only after IntersectionObserver has been
//   confirmed. Without JS, or with it broken before this line, every element
//   is simply visible.
//
//   Never over a sticky element. A transform on an ancestor makes it the
//   containing block and position: sticky quietly stops working, so the
//   selectors below reach past .services-layout to the blocks inside it and
//   leave the header alone entirely.
(() => {
  "use strict";

  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Each entry is one moment in a section. `stagger` is for genuine lists,
  // where the items are siblings a reader takes in as a set; everything else
  // arrives on its own and needs no offset.
  const GROUPS = [
    // The framed headlines animate as one object. Revealing their contents
    // separately would land the border first and the words after it.
    { sel: ".headline-frame" },
    { sel: "#services > .wrap > .section-title" },
    { sel: ".about-copy p, .about-visual", stagger: true },
    { sel: ".tag-list li", stagger: true },
    { sel: ".section-dark > .section-title, .founders, .founders-stack" },
    { sel: ".story-copy, .stats", stagger: true },
    { sel: ".service-block" },
    { sel: "#testimonials .section-title" },
    { sel: ".testimonial-card", stagger: true },
    { sel: ".work-header, .work-caption", stagger: true },
    { sel: ".cta-inner" },
    { sel: "#faq .section-title" },
    { sel: ".accordion-item", stagger: true },
    { sel: ".contact-copy, .contact-visual", stagger: true },
  ];

  const STEP_MS = 60;
  const MAX_STEPS = 6; // a seven-item FAQ should not take half a second to land

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        // Once. Nothing here fires again for this element.
        observer.unobserve(entry.target);
      });
    },
    {
      // Waits until the element is properly into the frame rather than
      // triggering on the first pixel over the edge.
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.01,
    }
  );

  // Anything this far up is already on screen, or as good as.
  const alreadySeen = (el) => el.getBoundingClientRect().top < window.innerHeight * 0.9;

  GROUPS.forEach((group) => {
    const els = Array.from(document.querySelectorAll(group.sel));
    // Index within the parent, so a stagger describes one list rather than
    // running on across a section.
    const seen = new Map();

    els.forEach((el) => {
      if (alreadySeen(el)) return; // never given .reveal, so never hidden

      if (group.stagger) {
        const n = seen.get(el.parentElement) || 0;
        seen.set(el.parentElement, n + 1);
        if (n > 0) {
          el.style.setProperty("--reveal-delay", `${Math.min(n, MAX_STEPS) * STEP_MS}ms`);
        }
      }

      el.classList.add("reveal");
      observer.observe(el);
    });
  });
})();
