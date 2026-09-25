/**
 * The worked example: a hiring agent for Tellent.
 *
 * It is here to show the template carrying a real case, and to be the thing a
 * second case study is copied from. Nothing about the layout lives in this
 * file — swap the copy and the pictures and the next case is written.
 */

import type { CaseStudy } from "./types";

const DIR = "/assets/img/cases/hiring-agent";

export const hiringAgent: CaseStudy = {
  slug: "hiring-agent",
  meta: {
    title: "Hiring agent for a leading HR platform — Sature",
    description:
      "How we designed an agentic experience for Tellent: the alignment, the research, and the patterns it left behind.",
  },

  hero: {
    eyebrow: "tellent.com",
    titleAccent: "Designing a hiring agent",
    titleRest: "for a leading HR platform in EU",
    badges: ["AI agent", "2026", "UX", "Vibe-coded prototype"],
    image: {
      src: `${DIR}/final-pipeline.jpg`,
      width: 1844,
      height: 1200,
      alt: "The hiring agent open over the Tellent candidate pipeline, offering to report on the role",
    },
  },

  sections: [
    {
      kind: "prose",
      id: "context",
      label: "Context",
      cards: [
        {
          title: "Context",
          body: [
            {
              p: "Tellent is a B2B SaaS for HR teams covering a wide spectrum of HR needs: recruitment, core HR and performance. Tellent has always been at the forefront of providing a premium product and great user experience.",
            },
            {
              p: "In order to come forward of customers' expectations we worked on creating a truly exceptional agentic experience.",
            },
          ],
        },
        {
          title: "Problem to solve",
          body: [
            {
              p: "Tellent provides a lot of information throughout the entire recruitment lifecycle and it is often difficult for users to keep track of everything available to them. Email and system notifications are not enough in their everyday work, as they:",
            },
            {
              bullets: [
                "Have to prepare for interviews",
                "Chase hiring managers to exchange information or fill in relevant forms",
                "Manually add notes for candidates",
                "Ensure great candidate experience",
              ],
            },
            { p: "With the hiring agent we wanted to have an impact on each of these." },
          ],
        },
      ],
    },

    {
      kind: "cards",
      id: "impact",
      label: "Impact",
      heading: "Impact",
      cards: [
        {
          title: "Creation of new revenue stream",
          tone: "dark",
          tag: "Business outcome",
          body: [
            {
              p: "Unlocked a new stream of business allowing the company to advertise as a more innovative one in the realm of AI.",
            },
            {
              p: "Tellent can now sell usage-based AI agents, unlocking a new stream of recurring revenue.",
            },
          ],
        },
        {
          title: "Becoming an AI-native SaaS",
          tag: "Business outcome",
          body: [
            { p: "The first significant step towards becoming an AI-native company." },
            {
              p: "Marketing as an AI-native company unlocks the potential to generate a new funnel of business.",
            },
          ],
        },
        {
          title: "Reusable UX patterns",
          tag: "Design system outcome",
          body: [
            {
              p: "Scalable agentic UI patterns, so users can reach their goals in Tellent through an LLM.",
            },
            {
              p: "The new patterns shape new user behaviours and bridge new ways of interacting with the product.",
            },
          ],
        },
        {
          title: "The system is always on",
          tag: "Product outcome",
          body: [
            { p: "A proactive system of action, blending traditional UI and LLM-enabled capabilities." },
            {
              p: "Most systems in HR approach AI reactively; we designed a framework that anticipates user needs before their actions.",
            },
          ],
        },
      ],
    },

    {
      kind: "cards",
      id: "role",
      label: "Our role",
      heading: "Our role",
      cards: [
        {
          title: "Lead design",
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
            { arrows: ["Lead Product Designer", "Senior Product Designer", "2 fullstack engineers"] },
          ],
        },
      ],
      note: "A slice of the work is left out here — the wireframes, the flows, the usual craft behind the screens.",
    },

    {
      kind: "story",
      id: "alignment",
      label: "Alignment",
      heading: "We started with a workshop, not a screen",
      beats: [
        {
          shot: {
            src: `${DIR}/alignment-board.jpg`,
            width: 1844,
            height: 1003,
            alt: "Workshop board of recruiter problems and proposed solutions, sorted into priorities and painkillers",
          },
        },
        {
          note: {
            title: "Why?",
            body: [
              {
                p: "To answer stakeholders' expectations we ran a workshop on the customer journey, to understand which areas of a recruiter's work can benefit from agentic assistance. It earned us the buy-in to interview users, which kept the work on problems that were real.",
              },
            ],
          },
        },
      ],
    },

    {
      kind: "story",
      id: "design",
      label: "Design",
      heading: "Final designs",
      beats: [
        {
          shot: {
            src: `${DIR}/final-overview.jpg`,
            width: 1844,
            height: 1200,
            alt: "A spread of the agent's windows: its greeting, the drafts it produces and its recent conversations",
          },
        },
        {
          shot: {
            src: `${DIR}/final-actions.jpg`,
            width: 1844,
            height: 1200,
            alt: "The agent drafting interview ice-breakers, and asking what to do with them",
          },
        },
        {
          note: {
            title: "One agent, two ways in",
            body: [
              {
                p: "The agent answers where the work already happens — in the pipeline and on the candidate — rather than asking anyone to go somewhere else to ask a question. What it drafts lands back in the record, not in a chat log.",
              },
            ],
          },
        },
        {
          shot: {
            src: `${DIR}/proactive-dashboard.jpg`,
            width: 1844,
            height: 1200,
            alt: "The proactive dashboard surfacing what the recruiter should look at next",
          },
        },
        {
          card: {
            title: "Proactive, within reason",
            tone: "dark",
            body: [
              {
                p: "Anticipating a need is worth little if the suggestion cannot be dismissed. Every proactive card carries an action, a reason, and a way out.",
              },
            ],
          },
        },
      ],
    },
  ],
};
