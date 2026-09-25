# Case studies and project cards

A case study is content, not markup. `src/components/case/` holds the template;
`src/data/cases/` holds what goes through it.

## Writing one

1. Copy `src/data/cases/hiring-agent.ts` to `src/data/cases/<slug>.ts` and
   rewrite the copy. The shape it must satisfy is `CaseStudy` in
   `src/data/cases/types.ts` — the editor will say what is missing.
2. Put the pictures under `public/assets/img/cases/<slug>/`. Export them at
   1844px wide (twice the 922px column) and write their real pixel size into
   the data: the page draws them at half, so the ratio is known before they
   load and nothing jumps.
3. Add it to `caseStudies` in `src/data/cases/index.ts`.

Its page is then live at `/work/<slug>` — `src/pages/work/[slug].astro` builds
one page per entry. The project card for it becomes a link everywhere the
moment the case study is in that list, and not before.

## Sections

A case study is a list of sections, rendered in order:

- `prose` — short pieces of prose in a reading column, a hairline between.
  The opening: what the situation was, what the brief was.
- `cards` — a heading over a two-column grid of cards, with an optional
  centred `note` under it. Outcomes, roles, phases. One card per group can be
  `tone: "dark"`.
- `story` — a heading over a run of `beats`: a `shot` (a picture), a `note`
  (a full-width card that says what the picture taught), or a `card`.

## Project cards

`ProjectGrid.astro` takes any list of `Project` and draws the cards. The foot
of every case study uses it for the other projects; a page can use it too:

```astro
---
import ProjectGrid from "../components/case/ProjectGrid.astro";
import { projects } from "../data/cases";
---

<ProjectGrid projects={projects} heading="Selected work" id="work" />
```

A project with a case study is a link — the whole card, lifting on hover and
pressing on click. One without is the same card and nothing more.

## Styling

`src/styles/case-study.css`, built entirely from the tokens in `global.css`.
If a case study needs a colour or a radius that is not there, add it to the
style guide in Figma first, then to `global.css` — not here.
