/**
 * The shape of a case study and of the cards that link to one.
 *
 * Same division of labour as `SiteContent`: components read only from these
 * types, never from a hardcoded string, so the copy can come from a CMS later
 * without touching a component. Copy carries no markup — a break between
 * paragraphs is a separate block, a list is a list.
 */

/** A picture at its exported size. The page draws it at half of that. */
export interface CaseImage {
  /** Path under `public/`; run it through `asset()` before it reaches the DOM. */
  src: string;
  width: number;
  height: number;
  alt: string;
}

/** A stretch of copy: a paragraph, a plain list, or an arrowed list. */
export type CaseBlock = { p: string } | { bullets: string[] } | { arrows: string[] };

export interface CaseCard {
  title: string;
  /** Empty for a card that is all title — one bold sentence, as an outcome. */
  body: CaseBlock[];
  /** The small chip at the foot of the card, e.g. "Business outcome". */
  tag?: string;
  /** One card in a group is usually inverted, to lead the eye. */
  tone?: "dark";
}

/**
 * One moment in a design story: a picture, a note about what it taught, or a
 * card. They are read in order, so the story is the order of this array.
 */
export type CaseBeat = { shot: CaseImage } | { note: CaseCard } | { card: CaseCard };

/** The sections a case study is built from. Each renders itself from its data. */
export type CaseSection =
  /** Two short pieces of prose, a hairline between: the setting and the brief. */
  | { kind: "prose"; id: string; label: string; cards: CaseCard[] }
  /** A titled grid of cards, with an aside under it if the story needs one. */
  | { kind: "cards"; id: string; label: string; heading: string; cards: CaseCard[]; note?: string }
  /** A titled run of pictures and notes. */
  | { kind: "story"; id: string; label: string; heading: string; beats: CaseBeat[]; centered?: boolean };

export interface CaseHero {
  /** The client or product, over the title. */
  eyebrow: string;
  /** Two lines: the first is set in italic serif, as the site's hero is. */
  titleAccent: string;
  titleRest: string;
  /** Year, craft, anything else worth a pill. */
  badges: string[];
  image: CaseImage;
}

export interface CaseStudy {
  /** The URL is /portfolio/<slug>. */
  slug: string;
  meta: { title: string; description: string };
  hero: CaseHero;
  sections: CaseSection[];
}

/** A project as the cards show it: its picture, its name, what it was. */
export interface Project {
  slug: string;
  title: string;
  body: string;
  image: CaseImage;
  /**
   * Where the card goes. Left out, the card is not a link — a project whose
   * case study is not written yet reads as a project rather than a 404.
   */
  href?: string;
}
