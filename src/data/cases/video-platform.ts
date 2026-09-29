/**
 * The video platform case study, word for word from Figma file
 * SDAlLcbZJQNTwPG4In2AxB, frame 247:42698 ("loomCase").
 *
 * Figma breaks lines by hand to fit its fixed columns. Those breaks are dropped
 * here — the page wraps its own lines — and only the breaks between paragraphs
 * are kept.
 */

import { shot, type Asset, type Card, type HeroContent } from "./types";

export const SECTIONS = [
  { id: "context", label: "Context" },
  { id: "impact", label: "Impact" },
  { id: "role", label: "My role" },
  { id: "process", label: "Process" },
  { id: "design", label: "Design" },
  { id: "thoughts", label: "Thoughts" },
] as const;

export const HERO: HeroContent & {
  shot: { src: string; width: number; height: number; alt: string };
} = {
  eyebrow: "telle.me",
  titleAccent: "Boosting internal productivity",
  titleRest: "Video recording platform for sales",
  badges: ["2026", "UX", "UI", "Vibe-coded prototype"],
  shot: {
    src: "/assets/img/cases/video-platform/hero/shot.webp",
    width: 922,
    height: 500,
    alt: "The telle recorder with camera and audio toggles beside its screen picker, over a landscape",
  },
};

export const CONTEXT: Card[] = [
  {
    title: "Context",
    body: [
      {
        p: "Tellent had been spending ~$30k year for a video recording solution allowing them to share knowledge internally and create demo walkthroughs for their prospects and clients.",
      },
    ],
  },
  {
    title: "Problem to solve",
    body: [
      {
        p: "Create a solution that would allow our sales reps to easily record videos and share them with customers or prospective leads to ensure continuous interaction and a successful sales experience.",
      },
    ],
  },
];

/* All title, as Figma sets them: each outcome is one bold sentence. */
export const IMPACT = {
  heading: "Impact",
  cards: [
    {
      title:
        "With 133 users recording 28 videos on average company had opportunity to skip hundreds of meetings to communicate more efficiently",
      tone: "dark",
      tag: "Business outcome",
      body: [],
    },
    {
      title:
        "For the last year the bill for a video recording solution was $32,880, a cost of our custom made solution would be only infrastructure cost of $114 per annum.",
      tag: "Business outcome",
      body: [],
    },
    {
      title:
        "Your recordings stay safe. Encrypted storage on S3 and access-controlled playback via CloudFront signed URLs ensure enterprise-level protection.",
      tag: "Security and data governance",
      body: [],
    },
    {
      title:
        "Near-instant page loads (~400 ms) and a scalable architecture that keeps everything fast. Way faster than the multi-second delays you are used to",
      tag: "Performance",
      body: [],
    },
  ] satisfies Card[],
};

export const ROLE = {
  heading: "My role",
  cards: [
    {
      title: "Designer & Frontend development",
      tone: "dark",
      body: [
        {
          p: "I designed entire experience and implemented my own UI ensuring great user experience for the desktop app",
        },
      ],
    },
    {
      title: "Team involved",
      body: [
        { arrows: ["Product Designer & Vibecode dev", "Full stack developer"] },
      ],
    },
  ] satisfies Card[],
};

export const PROCESS = {
  heading: "Process",
  cards: [
    {
      title: "Alignment",
      body: [
        {
          p: "Together with full stack developer we aligned through number of brainstorms what our goal is and how we want to get. We agreed that Simon will deal with developing infrastructure plus app shell for the entire application.",
        },
      ],
    },
    {
      title: "Visual design & development",
      tone: "dark",
      body: [
        {
          p: "After alignment and brief research of problem solution we moved on to development phase - Simon focusing on feasible technical solution and I focused on delightful, user - friendly interface of the app",
        },
      ],
    },
  ] satisfies Card[],
};

type Story = { heading: string; shot: Asset; note: Card };

export const SHELL: Story = {
  heading: "I got an app shell to restyle from Simon",
  shot: shot(
    "/assets/img/cases/video-platform/shots/shell-restyle.jpg",
    "/assets/img/cases/video-platform/full/shell-restyle.jpg",
    922,
    600,
    "The original Tellent Video recorder and its capture settings, before the restyle",
  ),
  note: {
    title: "Everything was there, but...",
    body: [
      {
        p: "Even when working on internal projects it was important for Tellent that the experience of video recording app matches their product level, so I jumped in as a frontend developer.",
      },
    ],
  },
};

export const TERMINAL: Story = {
  heading: "I jumped into cursor and terminal",
  shot: shot(
    "/assets/img/cases/video-platform/shots/terminal.jpg",
    "/assets/img/cases/video-platform/full/terminal.jpg",
    922,
    394,
    'A terminal: cd telle video, git commit "Restyling primary color", git push origin master, git pull',
  ),
  note: {
    title: "With some prior git experience it wasn’t too hard",
    body: [
      {
        p: "I’ve spent two days restyling an app that Simon has created a shell of. In the process I relied on using Cursor with Claude Code.\nOur project setup was a next.js app using react components with tailwind.",
      },
    ],
  },
};

export const DESKTOP = {
  heading: "Desktop app designs",
  branding: {
    shots: [
      shot(
        "/assets/img/cases/video-platform/shots/brand-logo.jpg",
        "/assets/img/cases/video-platform/full/brand-logo.jpg",
        448,
        448,
        "The telle wordmark in black and on lilac",
      ),
      shot(
        "/assets/img/cases/video-platform/shots/brand-icon.jpg",
        "/assets/img/cases/video-platform/full/brand-icon.jpg",
        448,
        448,
        "The telle app icon, a violet camera mark",
      ),
    ],
    note: {
      title: "Branding and icon",
      body: [
        {
          p: "Created a minimalistic branding reflecting Tellent’s style along with the name telle by consulting it with Tellent’s CPO.\nShort and sweet name to be easily remembered by internal users.",
        },
      ],
    } satisfies Card,
  },
  app: {
    shots: [
      shot(
        "/assets/img/cases/video-platform/shots/desktop-recorder.jpg",
        "/assets/img/cases/video-platform/full/desktop-recorder.jpg",
        448,
        448,
        "The restyled recorder with its screen picker",
      ),
      shot(
        "/assets/img/cases/video-platform/shots/desktop-controls.jpg",
        "/assets/img/cases/video-platform/full/desktop-controls.jpg",
        448,
        448,
        "Recording and playback controls, recording at 00:01",
      ),
    ],
    welcome: shot(
      "/assets/img/cases/video-platform/shots/desktop-welcome.jpg",
      "/assets/img/cases/video-platform/full/desktop-welcome.jpg",
      928,
      601,
      "Welcome to Tellent Videos: the recorder with notes on full screen capture and audio",
    ),
    note: {
      title: "New feeling of desktop app",
      body: [
        {
          p: "With my restyling I had some flexibility and I’ve been able to create modern and fresh interface that feels delightful and easy to use.",
        },
      ],
    } satisfies Card,
  },
};

export const WEB = {
  heading: "Web app designs",
  shots: [
    shot(
      "/assets/img/cases/video-platform/shots/web-library-zoom.jpg",
      "/assets/img/cases/video-platform/full/web-library-zoom.jpg",
      922,
      600,
      "The video library up close: thumbnails, authors, views and reactions",
    ),
    shot(
      "/assets/img/cases/video-platform/shots/web-library.jpg",
      "/assets/img/cases/video-platform/full/web-library.jpg",
      922,
      600,
      "The web app’s video library with navigation and a feedback prompt",
    ),
    shot(
      "/assets/img/cases/video-platform/shots/web-video.jpg",
      "/assets/img/cases/video-platform/full/web-video.jpg",
      922,
      600,
      "A video page with reactions and a comment activity panel",
    ),
  ],
};

export const THOUGHTS = {
  heading: "Thoughts?",
  cards: [
    {
      title: "Lessons learnt",
      body: [
        {
          p: "To ensure smooth collaboration between designer and developer frequent touchpoints are required.\nAfterall, designer’s role isn’t to execute.",
        },
      ],
    },
    {
      title: "Challenges",
      body: [
        {
          p: "In the end the solution that took Simon month to develop would take a lot more to become fully scalable solution for the company, thus Tellent decided not to pursue this project at larger scale at this time.",
        },
      ],
    },
  ] satisfies Card[],
};
