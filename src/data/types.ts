/**
 * The shape every page's content must satisfy.
 *
 * Components read only from this type — never from a hardcoded string — so a
 * CMS can be dropped in later by writing one adapter that returns SiteContent.
 * Copy that used to carry inline markup (<br>, <em>, <strong>, <span>) is split
 * into named fields instead, because a CMS field can hold a sentence but not a
 * tag.
 */

export type TeamMemberId = "dawid" | "maciej" | "magdalena";

export interface Action {
  label: string;
  href: string;
  /** Maps to the .btn-* modifier in global.css */
  variant: "light" | "outline-light" | "dark" | "dark-sm";
}

export interface HeroLogo {
  /** Text shown in the row; each logo has its own type treatment in CSS. */
  label: string;
  /** The .logo-* class carrying that treatment. */
  className: string;
  /** BBC renders as three separate boxed letters rather than one word. */
  letters?: string[];
}

export interface Hero {
  badge: string;
  /** Title is two lines: the second is set in italic serif. */
  titleLead: string;
  titleAccent: string;
  /**
   * One entry per line. Left to wrap on its own, the copy breaks mid-sentence
   * and strands the next sentence's first word on the line above, so where the
   * break falls is a copy decision, not the browser's.
   */
  sub: string[];
  actions: Action[];
  logosLabel: string;
  logos: HeroLogo[];
}

export interface CheckGroup {
  label: string;
  items: string[];
}

export interface MiniQuote {
  /** Whose avatars sit next to the quote. */
  people: TeamMemberId[];
  text: string;
}

export interface Service {
  /** Anchor id — also the scroll-spy target. */
  id: string;
  /** Label in the side nav, which is shorter than the heading. */
  navLabel: string;
  title: string;
  intro: string;
  groups: CheckGroup[];
  quotes: MiniQuote[];
}

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  company: string;
  /** The .logo-* class used to set the company name. */
  companyClassName: string;
}

export interface WorkImage {
  src: string;
  alt: string;
}

export interface Faq {
  question: string;
  /** One entry per paragraph in the answer. */
  answer: string[];
  open?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  hero: Hero;
  about: {
    eyebrow: string;
    title: string;
  };
  industries: {
    lead: string;
    tags: string[];
  };
  team: {
    title: string;
    /**
     * The founders arrive as one frame rather than three portraits: the design
     * supplies a single composite with the panel seams already in it.
     */
    photo: {
      src: string;
      alt: string;
      /** One per panel, left to right, laid over the picture. */
      names: string[];
      /**
       * The same three people as single portraits, in the same order. The
       * composite is one wide frame; below 720px there is no width to seat
       * three panels side by side, so the stack is used instead.
       */
      portraits: { src: string; alt: string; name: string }[];
    };
    story: {
      heading: string;
      body: string;
    };
    stats: Stat[];
  };
  services: {
    title: string;
    /** Tail of the heading, set in muted grey. */
    titleMuted: string;
    items: Service[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  work: {
    title: string;
    hint: string;
    caption?: {
      title: string;
      body: string;
    };
    images: WorkImage[];
  };
  cta: {
    titleLead: string;
    titleRest: string;
    titleStrong: string;
    action: Action;
  };
  faq: {
    title: string;
    items: Faq[];
  };
  contact: {
    titleLead: string;
    titleRest: string;
    body: string;
    note: string;
  };
  footer: {
    paragraphs: string[];
    socials: { label: string; href: string; icon: "linkedin" | "x" }[];
    /** Rendered as columns; two columns switch the nav to its compact grid. */
    columns: FooterLink[][];
    copyright: string;
    legal: FooterLink;
  };
}

/** Photo + display name for each person, shared by every page. */
export const TEAM: Record<TeamMemberId, { name: string; photo: string }> = {
  dawid: { name: "Dawid Woźniak", photo: "/assets/img/team/david.webp" },
  maciej: { name: "Maciej Kownacki", photo: "/assets/img/team/maciej.webp" },
  magdalena: { name: "Magdalena Kercz", photo: "/assets/img/team/magdalena.webp" },
};
