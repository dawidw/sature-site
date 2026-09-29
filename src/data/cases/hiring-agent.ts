/**
 * The hiring agent case study, word for word from Figma file
 * SDAlLcbZJQNTwPG4In2AxB, frame 247:41705 ("agent").
 *
 * Figma breaks lines by hand to fit its fixed columns. Those breaks are dropped
 * here — the page wraps its own lines — and only the breaks between paragraphs
 * are kept, as separate blocks.
 */

import { shot as frameShot, type Asset, type Block, type Card } from "./types";

/* Every shot here is a 922px-wide frame, exported at 3x; the page shows 2x. */
function shot(src: string, full: string, height: number, alt: string): Asset {
  return frameShot(src, full, 922, height, alt);
}

export const SECTIONS = [
  { id: "context", label: "Context" },
  { id: "impact", label: "Impact" },
  { id: "role", label: "My role" },
  { id: "alignment", label: "Strategic alignment" },
  { id: "design", label: "Design" },
  { id: "afterword", label: "Afterword" },
] as const;

export const HERO = {
  eyebrow: "tellent.com",
  titleAccent: "Designing hiring agent",
  titleRest: "for a leading HR platform in EU",
  badges: ["AI agent", "2026", "UX", "Vibe-coded prototype"],
  visual: "/assets/img/cases/hiring-agent/hero/visual.webp",
  visualAlt:
    "The hiring agent chat panel open over the Tellent candidate pipeline",
};

export const CONTEXT: Card[] = [
  {
    title: "Context",
    body: [
      {
        p: "Tellent is a B2B SAAS for HR teams covering wide spectrum of HR needs such as: Recruitment | Core HR | Performance HR. Tellent has always been at the forefront of providing premium product and great user experience.",
      },
      {
        p: "In order to come forward customers expectations we worked on creating truly exceptional agentic experience",
      },
    ],
  },
  {
    title: "Problem to solve",
    body: [
      {
        p: "Tellent provides a lot of information throughout the entire recruitment lifecycle and it’s often difficult for our users to keep track of everything available for them. Relying on email or system notifications can be not enough in their everyday work as they:",
      },
      {
        bullets: [
          "Have to prepare for interviews",
          "Chase hiring managers to exchange information or fill in relevant forms",
          "Manually add notes for candidates",
          "Ensure great candidate experience",
        ],
      },
      {
        p: "With hiring agent we wanted to have an impact on each of these.",
        gap: true,
      },
    ],
  },
];

export const IMPACT = {
  heading: "Impact",
  cards: [
    {
      title: "Creation of new revenue stream",
      tone: "dark",
      tag: "Business outcome",
      body: [
        {
          p: "Unlocked a new stream of business allowing us to advertise as a more innovative company in the realm of AI.",
        },
        {
          p: "As a result Tellent can now sell usage based AI agents unlocking new stream of recurring revenue driving their business.",
        },
      ],
    },
    {
      title: "Becoming AI native SAAS",
      tag: "Business outcome",
      body: [
        {
          p: "First significant step towards becoming an ai native company allowing us to market as such",
        },
        {
          p: "Allowing us to market as ai native company unlocks potential to generate a new funnel of potential business for the company.",
        },
      ],
    },
    {
      title: "Reusable UX patterns",
      tag: "Design system outcome",
      body: [
        {
          p: "Creating scalable agentic UI patterns allowing our users to use LLM to accomplish their goals in Tellent.",
        },
        {
          p: "New patterns will allow us to shape new user behaviors and bridge new ways of interacting with Tellent allowing our users to save time and money.",
        },
      ],
    },
    {
      title: "System is always on",
      tag: "Product outcome",
      body: [
        {
          p: "Proactive system of action blending traditional UI and LLM enabled capabilities.",
        },
        {
          p: "Most of the systems in HR approach AI reactively, we designed a framework that allowed us to anticipate user needs before their actions.",
        },
      ],
    },
  ] satisfies Card[],
};

export const ROLE = {
  heading: "My role",
  cards: [
    {
      title: "Lead designer",
      tone: "dark",
      body: [
        {
          arrows: [
            "Stakeholder alignment",
            "In-depth user interviews",
            "Defining project scope",
            "End-to-end design",
          ],
        },
      ],
    },
    {
      title: "Team involved",
      body: [
        {
          arrows: [
            "Lead Product Designer",
            "Senior Product Designer",
            "2 fullstack engineers",
          ],
        },
      ],
    },
  ] satisfies Card[],
};

export const ALIGNMENT = {
  heading: "Strategic alignment",
  lead: "In order to answer stakeholders’ expectations we conducted a workshop focusing on customer journey to understand better, which areas of users’ work can benefit from agentic assistance.",
  board: shot(
    "/assets/img/cases/hiring-agent/shots/alignment-board.jpg",
    "/assets/img/cases/hiring-agent/full/alignment-board.jpg",
    501,
    "Workshop board of recruiter problems and proposed solutions, sorted into priorities and painkillers",
  ),
  why: {
    title: "Why?",
    body: [
      {
        p: "It allowed us get important buy in for conducting interviews with our users to ensure that whatever we work on solves relevant user problems.",
      },
    ],
  } satisfies Card,
  research: shot(
    "/assets/img/cases/hiring-agent/shots/research-notebook.jpg",
    "/assets/img/cases/hiring-agent/full/research-notebook.jpg",
    475,
    "NotebookLM summarising interview transcripts beside its studio of generated reports",
  ),
  researchPhase: {
    title: "Research phase",
    body: [
      {
        p: "We conducted 7 IDI sessions to understand AI literacy and where AI can really help our users. Each of the interviews was recorded with a transcript. We built a brain using NotebookLM that helped us create executive summary and surface relevant insights from these conversations.",
      },
    ],
  } satisfies Card,
  takeaways: {
    heading: "Research takeaways",
    cards: [
      {
        title: "Agent as a proactive aid",
        body: [
          {
            p: "Our users clearly indicated that they anticipate AI to be assistive and proactive in the process pointing out they struggle with chasing other system users, tracking their notifications or just remembering everything to do.",
          },
        ],
      },
      {
        title: "High demand for conversational analytics",
        tone: "dark",
        body: [
          {
            p: "Even though we offer a robust analytics module our users unanimously indicated they are looking for easier way to interact with analytics and anticipate AI to help them act and understand it.",
          },
        ],
      },
      {
        title: "Chat history",
        body: [
          {
            p: "Having access to chat history is a high priority requirement, this was not initially included in a lo-fi prototype we used during interviews.",
          },
        ],
      },
    ] satisfies Card[],
  },
  scope: {
    heading: "Project scope",
    intro: [
      {
        p: "We relied on tested research methods to understand what should be delivered for our users, including:",
      },
      {
        arrows: [
          "Competitors market",
          "Fosway research",
          "In-depth interviews conclusions",
        ],
      },
      {
        p: "This allowed us to move faster and commit to a direction we believed in.",
      },
    ] satisfies Block[],
    findings: {
      title: "The 5 core findings",
      items: [
        {
          title: "1. Native AI note-taking is the #1 user request:",
          body: "Users strongly prefer an integrated solution over third-party tools to reduce manual entry and objective bias.",
        },
        {
          title:
            "2. Hiring manager collaboration is an operational bottleneck:",
          body: 'Recruiters a lot of time "chasing" managers who often arrive at interviews unprepared.',
        },
        {
          title: "3. Customers want its assistance, not autonomy:",
          body: 'AI is viewed as a high-risk liability; users demand an "advisor" they can verify, rejecting any autonomous decision-making.',
        },
        {
          title: "4. From reactive data to proactive signalling system:",
          body: 'Recruiters want to stop acting like "detectives" and want a system that automatically flags stalled requisitions and workload imbalances.',
        },
        {
          title: "5. High demand for conversational analytics:",
          body: 'Users loved "chatting" with their data in our prototype but demand total transparency in how charts are mathematically calculated.',
        },
      ],
    },
    focus: {
      title: "Our focus",
      body: [
        {
          p: "We decided that we shouldn’t focus on Native AI note-taking app, because we learnt that even though our users request this they are already using great solutions in the market. Along with stakeholders we postponed this request and dived deep into agentic AI experience. It was a long shot, but we have seen an opportunity that our competitors didn’t use.",
        },
      ],
    } satisfies Card,
  },
};

export const DESIGN = {
  phases: [
    {
      heading: "UX work",
      cards: [
        {
          title: "In-depth interviews",
          body: [
            { p: "We wanted to best understand:" },
            {
              bullets: [
                "How AI fluent are our users",
                "What problems we can solve",
              ],
            },
          ],
        },
        {
          title: "UX work",
          body: [
            {
              arrows: [
                "Framework of interaction",
                "User flow",
                "Lo-fi prototypes",
              ],
            },
          ],
        },
      ] satisfies Card[],
    },
    {
      heading: "Execution",
      cards: [
        {
          title: "Agentic UI",
          body: [
            {
              p: "Agentic chat based UI that allows users to interact with it in entire platform in a flexible and user friendly way",
            },
          ],
        },
        {
          title: "Proactive agent",
          body: [
            {
              p: "Agent that proactively thinks for users surfacing relevant actions contextually.",
            },
          ],
        },
        {
          title: "Management layer",
          body: [
            {
              p: "Settings to manage company preferences towards AI with an ability to turn it off whatsoever.",
            },
          ],
        },
      ] satisfies Card[],
    },
  ],

  explorations: {
    heading: "Agentic UI explorations",
    shots: [
      shot(
        "/assets/img/cases/hiring-agent/shots/explore-copilot.jpg",
        "/assets/img/cases/hiring-agent/full/explore-copilot.jpg",
        600,
        "Two early Co-Pilot chat panels with suggested actions",
      ),
      shot(
        "/assets/img/cases/hiring-agent/shots/explore-slack.jpg",
        "/assets/img/cases/hiring-agent/full/explore-slack.jpg",
        600,
        "Full-width agent chat inviting the team to connect Slack",
      ),
    ],
    notes: [
      {
        title: "Slack integration",
        body: [
          {
            p: "We are looking to integrate our agent with slack and in the process of early explorations I was looking for a way to walk our users through that process in a user-friendly way with minimal hassle. For now we ditched doing this.",
          },
        ],
      },
      {
        title: "Liquid glass",
        body: [
          {
            p: "While it was fun to explore and see in action we decided not to pursue this direction as with existing solutions we couldn’t achieve macOS like result in the browser.",
          },
        ],
      },
    ] satisfies Card[],
    shotAfterNotes: shot(
      "/assets/img/cases/hiring-agent/shots/explore-illustrations.jpg",
      "/assets/img/cases/hiring-agent/full/explore-illustrations.jpg",
      600,
      "HR assistant home with illustrated quick actions and recent chats",
    ),
    notesAfterShot: [
      {
        title: "Illustration and visual direction",
        body: [
          {
            p: "Through a series of design brainstorms and discussions with stakeholders we decided that we don’t want to go with a very visual style and keep illustrative elements to minimum.",
          },
        ],
      },
      {
        title: "Conversation starters",
        body: [
          {
            p: "Through brainstorms and user tests we discovered that the best conversation starters aren’t broad action, but rather outcome oriented contextual interactions that express user’s intent.",
          },
          {
            p: "while it’s difficult to anticipate users intent we designed the use cases based on user interviews",
          },
        ],
      },
    ] satisfies Card[],
  },

  final: {
    heading: "Final designs",
    /* A screen recording at 3444x2160, 34 seconds, no sound. */
    video: {
      src: "/assets/video/agent-prototype.mp4",
      poster: "/assets/video/agent-prototype-poster.webp",
      width: 3444,
      height: 2160,
      label:
        "Screen recording of the hiring agent prototype surfacing top-priority tasks on the Recruitee dashboard",
      caption:
        "A prototype vibe-coded in Claude Code and used during user testing.",
    },
    shots: [
      shot(
        "/assets/img/cases/hiring-agent/shots/final-mark.jpg",
        "/assets/img/cases/hiring-agent/full/final-mark.jpg",
        600,
        "The agent’s mark, a four-petalled flower in pink and violet",
      ),
      shot(
        "/assets/img/cases/hiring-agent/shots/final-overview.jpg",
        "/assets/img/cases/hiring-agent/full/final-overview.jpg",
        600,
        "Agent panels in their final visual style, laid out at an angle",
      ),
      shot(
        "/assets/img/cases/hiring-agent/shots/final-actions.jpg",
        "/assets/img/cases/hiring-agent/full/final-actions.jpg",
        600,
        "Agent suggesting ice-breakers and asking what to do with them",
      ),
    ],
    note: {
      title: "Action based agent",
      body: [
        {
          p: "Initially we focused on an agent assisting recruiters by providing relevant information when needed, but for a second milestone we designed interactions allowing it to perform certain, low-risk actions in the system.",
        },
      ],
    } satisfies Card,
    pipeline: shot(
      "/assets/img/cases/hiring-agent/shots/final-pipeline.jpg",
      "/assets/img/cases/hiring-agent/full/final-pipeline.jpg",
      600,
      "The agent panel docked over the candidate pipeline",
    ),
  },

  proactive: {
    heading: "Proactive signaling agent",
    shot: shot(
      "/assets/img/cases/hiring-agent/shots/proactive-dashboard.jpg",
      "/assets/img/cases/hiring-agent/full/proactive-dashboard.jpg",
      600,
      "Recruitee dashboard with a top-priority tasks banner and the agent listing tasks",
    ),
    framework: {
      title: "Proactive agent",
      intro:
        "Using a framework of interaction we co-created with developers we created an agent that surfaces relevant areas of the app to come and help when needed. This framework includes:",
      cards: [
        {
          title: "Trigger definition",
          tone: "dark",
          body: [
            {
              p: "We define a heuristic that observes users intent expressed by an event in the system.",
            },
            {
              example:
                "Example: user logged in for the first time since 24 hours and there are more than 3 new notifications",
            },
          ],
        },
        {
          title: "AI suggestion",
          body: [
            { p: "We define what should be suggested for this trigger." },
            {
              example:
                "Example: Top-priority tasks for you: I checked your pending notifications and found out 3 things that you should do right away.",
            },
          ],
        },
        {
          title: "Display slot",
          body: [
            {
              p: "We define an area in the UI where a suggestion can be shown.",
            },
            {
              example:
                "Example: Dashboard top banner right below recent interactions.",
            },
          ],
        },
        {
          title: "Prompt on click",
          body: [
            { p: "We engineer prompts:" },
            {
              bullets: [
                "What prompt is sent to agent on click",
                "What kind of output should this prompt generate",
              ],
            },
            {
              p: "This allows us to provide better UX and ensure model really understands what is the desired outcome.",
            },
          ],
        },
      ] satisfies Card[],
    },
  },

  settings: {
    heading: "Settings",
    shots: [
      shot(
        "/assets/img/cases/hiring-agent/shots/settings-agent.jpg",
        "/assets/img/cases/hiring-agent/full/settings-agent.jpg",
        600,
        "Tellent Agent settings for core, hiring and analytics capabilities",
      ),
      shot(
        "/assets/img/cases/hiring-agent/shots/settings-sources.jpg",
        "/assets/img/cases/hiring-agent/full/settings-sources.jpg",
        600,
        "Onboarding dialog explaining how to add information sources",
      ),
      shot(
        "/assets/img/cases/hiring-agent/shots/settings-terms.jpg",
        "/assets/img/cases/hiring-agent/full/settings-terms.jpg",
        600,
        "Consent dialog for connecting documents and Notion to the agent",
      ),
    ],
  },
};

export const AFTERWORD = {
  finalVersion: {
    heading: "Final version",
    cards: [
      {
        title: "End to end product design",
        tone: "dark",
        body: [
          {
            arrows: [
              "Created framework for interaction that helped us design relevant, contextual conversation starters for our users.",
              "Visual design for agent\nSmall viewport\nFullscreen\nDraggable interaction\nMinimized interaction\nVisual representation of the agent",
              "Handoff through a vibecoded prototype using our design tokens.",
            ],
          },
        ],
      },
      {
        title: "Beta program",
        body: [
          {
            arrows: [
              "Identified high profile companies to join our beta program to test our agentic experience and improve it before rollout",
              "Gathered feedback and prioritized further improvements to deliver a better version of Tellent’s agent to our users",
            ],
          },
        ],
      },
    ] satisfies Card[],
  },
  afterword: {
    heading: "Afterword",
    cards: [
      {
        title: "Lessons learnt",
        body: [
          {
            p: "When designing agentic UI - fundamentals matter more than before, because user trust is easily lost when something doesn’t work.",
          },
          {
            p: "To minimize risks of using user trust we collaboratively created a framework and safe approach towards prompt engineering focusing on delivering great user experience.",
          },
        ],
      },
      {
        title: "Challenges",
        body: [
          {
            p: "Our stakeholders had a vague idea of what we should do except for doing agentic AI and it required us to align and challenge them to help us understand better what their goals are and what we really need to do to make it relevant for our business.",
          },
        ],
      },
    ] satisfies Card[],
  },
};
