/**
 * Every project, and the case studies among them.
 *
 * One list: the cards on the portfolio page and the row at the foot of a case
 * study read from it, so a project gains its link everywhere the moment its
 * case study exists — and nowhere before that.
 */

import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "hiring-agent",
    title: "Designing hiring agent for a leading HR platform in EU",
    body: "Tellent has always been at the forefront of providing premium product and great user experience. In order to come forward customers expectations we worked on creating truly exceptional agentic experience",
    image: {
      src: "/assets/img/cases/covers/hiring-agent.jpg",
      width: 822,
      height: 610,
      full: {
        src: "/assets/img/cases/covers/hiring-agent.jpg",
        width: 822,
        height: 610,
      },
      alt: "The hiring agent's chat panel open beside a candidate pipeline",
    },
    href: "/portfolio/hiring-agent",
  },
  {
    slug: "video-platform",
    title:
      "Design & Frontend implementation of a video platform for sales team.",
    body: "Tellent had been spending ~$30k year for a video recording solution allowing them to share knowledge internally and create demo walkthroughs.",
    image: {
      src: "/assets/img/cases/covers/video-platform.jpg",
      width: 822,
      height: 610,
      full: {
        src: "/assets/img/cases/covers/video-platform.jpg",
        width: 822,
        height: 610,
      },
      alt: "The telle recorder with its camera and audio toggles beside a screen picker",
    },
    href: "/portfolio/video-platform",
  },
];

/** Every project but the one being read. */
export function otherProjects(currentSlug: string): Project[] {
  return projects.filter((project) => project.slug !== currentSlug);
}

export const OTHER_PROJECTS_HEADING = "Wanna see our other projects?";

/** The copy at the head of the portfolio page. */
export const portfolioPage = {
  meta: {
    title: "Our work — Sature",
    description:
      "Case studies from Sature: what we were asked for, what we designed, and what it changed.",
  },
  title: "Our work",
  lead: "A handful of the products we have designed, and what changed once they shipped.",
};
