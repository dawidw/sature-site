// The portrait loop in the industries row.
//
// The markup carries no `autoplay`: at 2.3MB the file is worth fetching only
// for a reader who actually reaches the row, and a loop that starts itself is
// the wrong default for anyone who has asked the system for less movement.
// The poster stands in until both of those are settled.
(() => {
  "use strict";

  const video = document.querySelector(".about-video");
  if (!video) return;

  const stillPreferred = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (stillPreferred.matches) return; // poster only, nothing downloaded

  // Playing off-screen costs decode for something nobody is looking at, so the
  // loop is tied to visibility in both directions.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (video.preload !== "auto") video.preload = "auto";
          // Autoplay policies still apply; muted + playsinline satisfies them,
          // and a rejection just leaves the poster showing.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { rootMargin: "200px 0px" }
  );
  observer.observe(video);

  // The setting can change while the page is open.
  stillPreferred.addEventListener("change", (event) => {
    if (event.matches) {
      observer.unobserve(video);
      video.pause();
      video.currentTime = 0;
    } else {
      observer.observe(video);
    }
  });
})();
