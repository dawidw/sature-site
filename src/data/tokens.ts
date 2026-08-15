/**
 * The token inventory, for the /styleguide page.
 *
 * Names and Figma sources only — every value is read from the CSS custom
 * property at render time, so this list can never drift from global.css. If a
 * swatch shows the wrong colour, the CSS is wrong, not this file.
 */

export interface TokenRow {
  /** CSS custom property name, without the leading dashes. */
  name: string;
  /** What it resolves to in the Figma guide, for cross-checking. */
  source: string;
}

export interface TokenGroup {
  title: string;
  description: string;
  rows: TokenRow[];
}

export const PRIMITIVES: TokenRow[] = [
  { name: "white", source: "white" },
  { name: "neutral-50", source: "neutral/50" },
  { name: "neutral-100", source: "neutral/100" },
  { name: "neutral-200", source: "neutral/200" },
  { name: "neutral-300", source: "neutral/300" },
  { name: "neutral-400", source: "neutral/400" },
  { name: "neutral-500", source: "neutral/500" },
  { name: "neutral-600", source: "neutral/600" },
  { name: "neutral-700", source: "neutral/700" },
  { name: "neutral-800", source: "neutral/800" },
  { name: "neutral-900", source: "neutral/900" },
  { name: "neutral-950", source: "neutral/950" },
  { name: "black", source: "black" },
];

export const SEMANTIC_COLORS: TokenGroup[] = [
  {
    title: "Background",
    description:
      "Kolory tła — primary (biały), secondary i tertiary na delikatne zróżnicowanie, dark i dark-card na ciemne sekcje.",
    rows: [
      { name: "background-primary", source: "white" },
      { name: "background-secondary", source: "neutral/50" },
      { name: "background-tertiary", source: "neutral/100" },
      { name: "background-dark", source: "neutral/950" },
      { name: "background-dark-card", source: "neutral/900" },
    ],
  },
  {
    title: "Surface",
    description: "Kolory powierzchni kart i kontenerów.",
    rows: [
      { name: "surface-primary", source: "white" },
      { name: "surface-secondary", source: "neutral/200" },
      { name: "surface-muted", source: "neutral/100" },
    ],
  },
  {
    title: "Text",
    description:
      "Kolory tekstu — primary dla nagłówków i treści, secondary i muted dla mniej istotnych informacji, on-dark na ciemnym tle.",
    rows: [
      { name: "text-primary", source: "neutral/800" },
      { name: "text-secondary", source: "neutral/500" },
      { name: "text-muted", source: "neutral/400" },
      { name: "text-on-dark", source: "white" },
      { name: "text-on-dark-muted", source: "neutral/500" },
    ],
  },
  {
    title: "Border & divider",
    description: "Obramowania — default widoczne, subtle delikatne, dark na ciemnych elementach.",
    rows: [
      { name: "border-default", source: "neutral/300" },
      { name: "border-subtle", source: "neutral/200" },
      { name: "border-dark", source: "neutral/600" },
      { name: "divider-default", source: "neutral/600" },
    ],
  },
  {
    title: "Button",
    description: "Kolory przycisków — primary ciemny na CTA, secondary biały na akcje drugorzędne.",
    rows: [
      { name: "button-primary-bg", source: "neutral/950" },
      { name: "button-primary-text", source: "white" },
      { name: "button-secondary-bg", source: "white" },
      { name: "button-secondary-text", source: "neutral/800" },
    ],
  },
  {
    title: "Nav",
    description: "Nawigacja.",
    rows: [
      { name: "nav-background", source: "neutral/200" },
      { name: "nav-item-background", source: "white" },
      { name: "nav-text", source: "neutral/800" },
    ],
  },
];

export interface TypeSpec {
  name: string;
  /** Token stem: --fs-<key>, --lh-<key>, --ls-<key>. */
  key: string;
  spec: string;
  family: "sans" | "serif";
  weight: "regular" | "medium" | "semibold";
  sample: string;
}

export const TYPE_SCALE: TypeSpec[] = [
  { name: "Display", key: "display", spec: "Geist Medium · 56px · 120% · -2.2%", family: "sans", weight: "medium", sample: "Product design for the agentic AI era" },
  { name: "Heading 1", key: "h1", spec: "Geist Medium · 40px · 120% · -2.2%", family: "sans", weight: "medium", sample: "Sature helps companies deliver" },
  { name: "Heading 2", key: "h2", spec: "Geist SemiBold · 32px · 120% · -2.2%", family: "sans", weight: "semibold", sample: "What are they saying about us?" },
  { name: "Heading 3", key: "h3", spec: "Geist Medium · 24px · 32px · -2.2%", family: "sans", weight: "medium", sample: "Product Discovery" },
  { name: "Body Large", key: "body-lg", spec: "Geist Regular · 20px · 150% · -1.5%", family: "sans", weight: "regular", sample: "We help startups and B2B SaaS teams design, prototype and ship." },
  { name: "Body", key: "body", spec: "Geist Regular · 16px · 150% · -1.9%", family: "sans", weight: "regular", sample: "Each of our services is priced individually according to client needs." },
  { name: "Label", key: "label", spec: "Geist Medium · 16px · 20px · -2.2%", family: "sans", weight: "medium", sample: "Accepting projects" },
];

export const TYPE_ACCENT: TypeSpec[] = [
  { name: "Display Accent", key: "display", spec: "Lora Medium Italic · 56px · 120% · -2.2%", family: "serif", weight: "medium", sample: "makes headlines" },
  { name: "Heading 1 Accent", key: "h1", spec: "Lora Medium Italic · 40px · 120% · -2.2%", family: "serif", weight: "medium", sample: "the agentic AI era" },
  { name: "Heading 3 Accent", key: "h3", spec: "Lora Medium Italic · 24px · 32px · -2.2%", family: "serif", weight: "medium", sample: "AI experience design" },
  { name: "Body Large Accent", key: "body-lg", spec: "Lora Medium Italic · 20px · 150% · -1.9%", family: "serif", weight: "medium", sample: "Click or swipe right" },
];

export const SPACING = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 120];

export const RADIUS = ["8", "12", "16", "24", "32", "40", "full"];

export const SHADOWS = [
  { name: "shadow-xs", use: "Delikatne podniesienie — inputy, dividery." },
  { name: "shadow-sm", use: "Karty, przyciski, elementy nawigacji." },
  { name: "shadow-md", use: "Popovery i dropdowny." },
  { name: "shadow-lg", use: "Modale i dialogi." },
];

/** Values still in the CSS that the Figma guide doesn't define. */
export const UNDOCUMENTED = [
  {
    name: "accent",
    value: "#ff5a2c",
    where: "Favicon, focus ring przycisków, nazwa firmy w testimonialu.",
  },
  {
    name: "text-on-dark-soft",
    value: "rgba(255, 255, 255, 0.6)",
    where: "Tekst drugorzędny na ciemnym tle — guide ma tu #545454, co nie przechodzi kontrastu.",
  },
  {
    name: "— (bez tokenu)",
    value: "#3ecf5e",
    where: "Zielona kropka „Accepting projects” + jej pulsująca poświata.",
  },
  {
    name: "— (bez tokenu)",
    value: "gradienty avatarów",
    where: "Inicjały w testimonialach: #f2542d→#ff8a5c, #2d3ef2→#6b7bff, #1c1c1c→#4a4a4a.",
  },
];
