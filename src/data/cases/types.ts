/**
 * The shape of a case study's content.
 *
 * Carried over from the portfolio these two cases were first built in, because
 * the pages are reproductions of Figma frames 247:41705 and 247:42698 and the
 * data has to say everything those frames say. Components read only from these
 * types, so the copy can move to a CMS without a component changing.
 */

/**
 * A picture, at the size it was exported. The page shows the 2x file and the
 * viewer opens the 3x one, so a shot carries both.
 */
export interface Asset {
  src: string;
  width: number;
  height: number;
  full: { src: string; width: number; height: number };
  alt: string;
}

/**
 * A stretch of copy: a paragraph, a bulleted list, an arrowed list, or an
 * example in italics. A paragraph straight after a list follows it directly;
 * `gap` puts Figma's blank line between them where the frame has one. A line
 * break inside a string is a line break on the page.
 */
export type Block =
  | { p: string; gap?: boolean }
  | { bullets: string[] }
  | { arrows: string[] }
  | { example: string };

export interface Card {
  title: string;
  /** Empty for a card that is all title, as the video platform's impact cards are. */
  body: Block[];
  /** The small chip at the foot of an impact card. */
  tag?: string;
  /** Figma inverts one card in most groups to lead the eye. */
  tone?: "dark";
}

export interface HeroContent {
  eyebrow: string;
  titleAccent: string;
  titleRest: string;
  badges: string[];
}

/** A project as the cards show it: its picture, its name, what it was. */
export interface Project {
  slug: string;
  title: string;
  body: string;
  image: Asset;
  /** Where the card goes. Without a case study of its own, a card is not a link. */
  href?: string;
}

/**
 * A shot exported from its Figma frame at 3x: the page shows it at 2x, the
 * viewer opens the 3x file. Sizes are the frame's own, in CSS pixels.
 */
export function shot(
  src: string,
  full: string,
  width: number,
  height: number,
  alt: string,
): Asset {
  return {
    src,
    width: width * 2,
    height: height * 2,
    full: { src: full, width: width * 3, height: height * 3 },
    alt,
  };
}
