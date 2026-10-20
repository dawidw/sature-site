// The visitor's answer to the cookie banner.
//
// The page sets no cookies of its own. The one thing that does is the Cal.com
// booking calendar in #contact, which runs on app.cal.com and drops that
// site's cookies the moment its script loads — so "consent" here means one
// thing: may the calendar load. Nothing else waits on it.
//
// Kept in localStorage, not a cookie: remembering a "no" must not itself need
// a yes. Storage that throws (private mode, blocked site data) reads as "not
// answered yet", so the banner simply asks again on the next visit.

const KEY = "sature-consent";
const EVENT = "sature:consent";

/** "accepted", "rejected", or null when the visitor hasn't answered. */
export function getConsent() {
  try {
    const value = localStorage.getItem(KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    // Not remembered, but still honoured for the rest of this page view.
  }
  document.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
}

/** Runs `fn` once, as soon as the visitor has accepted — now or later. */
export function whenAccepted(fn) {
  if (getConsent() === "accepted") {
    fn();
    return;
  }
  const onChange = (event) => {
    if (event.detail !== "accepted") return;
    document.removeEventListener(EVENT, onChange);
    fn();
  };
  document.addEventListener(EVENT, onChange);
}

/** Asks the banner to show itself again (the footer's "Cookie settings"). */
export function reopenConsent() {
  document.dispatchEvent(new CustomEvent("sature:consent-open"));
}
