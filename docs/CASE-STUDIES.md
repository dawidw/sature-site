# Case studies and project cards

The two case studies are reproductions of Figma frames 247:41705 (the hiring
agent) and 247:42698 (the video platform), first built in Maciej's portfolio
and carried over whole: the same 922px column, the same cards, the same
spacing between groups.

## Where things are

- `src/pages/portfolio/index.astro` — the work, one card per project.
- `src/pages/portfolio/<slug>.astro` — one page per case study. Each page is
  the frame's own sequence of sections; the pieces it is built from live in
  `src/components/case/`.
- `src/data/cases/<slug>.ts` — everything the frame says, as data. No copy and
  no picture is written into a component.
- `src/data/cases/index.ts` — the projects, and which of them have a page.
- `src/styles/case-study.css` — the portfolio's stylesheet, every rule scoped
  under `.cs-page` so none of it reaches the header, the footer, or the
  landing page. It carries its own tokens for the same reason.

## Writing the next one

1. Export the pictures at 3x from the frame and put them under
   `public/assets/img/cases/<slug>/{shots,full}`; the page shows the 2x file,
   the viewer opens the 3x one.
2. Copy `src/data/cases/video-platform.ts` and rewrite it. `shot()` takes the
   frame's own width and height, so the browser knows the ratio before the
   file lands.
3. Copy the page beside it and arrange the sections the frame has.
4. Add the project to `src/data/cases/index.ts` with its `href`. That is what
   turns its card into a link, on the portfolio page and at the foot of every
   other case study.

## The pieces

`CsHero`, `CsContext`, `CsCardGrid`, `CsCard`, `CsNotes`, `CsParagraph`,
`CsCopy`, `CsHeading`, `CsShot`, `CsBars`, `CsOtherProjects`, and `CaseLayout`
around all of them. A picture is a `CsShot`, which is a button: the viewer in
`Lightbox.astro` reads the full file off its dataset, so nothing has to be
registered up front.

## Styling

Change the portfolio's stylesheet and re-scope it, or edit
`src/styles/case-study.css` knowing the two have parted ways. Values here come
from the Figma frames, not from the landing page's style guide — that is the
point of the scope.

## The password

The work is private, and GitHub Pages has no server to check a password
against — so the pages are encrypted instead of merely hidden.
`scripts/protect.mjs` runs at the end of every build and replaces
`/portfolio` and the two case studies with ciphertext (AES-GCM, key derived
from the password with PBKDF2) plus a form. Nothing of the page is in the
source until the password is typed, and the password itself is in neither the
repository nor the deploy.

Build it with the password in the environment:

```
SITE_PASSWORD='...' npm run build
```

Without `SITE_PASSWORD` the three pages are **removed** from `dist` rather
than published in the clear, so a deploy that forgets it loses the work pages
instead of leaking them. In CI the value comes from the repository secret of
the same name — see `.github/workflows/deploy.yml`.

One password opens all three pages: the first one decrypted keeps it in
`sessionStorage` for that tab, so the links between them do not ask again.

What this does not cover: the pictures are ordinary files on the same host.
Someone who knows or guesses their paths can fetch them. It is the pages —
the story, the numbers, the client's names — that are protected.
