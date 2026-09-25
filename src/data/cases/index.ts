/**
 * Every project, and the case studies among them.
 *
 * One list: the cards on the site and the "more of our work" row at the foot
 * of a case study read from it, so a project gains its link everywhere the
 * moment its case study exists — and nowhere before that.
 */

import type { CaseStudy, Project } from "./types";
import { hiringAgent } from "./hiring-agent";

export const caseStudies: CaseStudy[] = [hiringAgent];

export const projects: Project[] = [
  {
    slug: "hiring-agent",
    title: "Designing a hiring agent for a leading HR platform in EU",
    body: "Tellent has always been at the forefront of providing premium product and great user experience. In order to come forward customers expectations we worked on creating truly exceptional agentic experience.",
    image: {
      src: "/assets/img/cases/covers/hiring-agent.jpg",
      width: 822,
      height: 610,
      alt: "The hiring agent's chat panel open beside a candidate pipeline",
    },
  },
  {
    slug: "video-platform",
    title: "Design & frontend implementation of a video platform for sales",
    body: "Tellent had been spending ~$30k a year for a video recording solution allowing them to share knowledge internally and create demo walkthroughs for their prospects and clients.",
    image: {
      src: "/assets/img/cases/covers/video-platform.jpg",
      width: 822,
      height: 610,
      alt: "The telle recorder with its camera and audio toggles beside a screen picker",
    },
  },
  {
    slug: "screening-agent",
    title: "Screening agent for recruiters",
    body: "Recruiters spend 9 to 15 hours a week screening incoming resumes. We explored how far an agent could take that work without taking the decision.",
    image: {
      src: "/assets/img/cases/covers/screening-agent.jpg",
      width: 1760,
      height: 1120,
      alt: "A candidate profile meeting 12 of 12 requirements beside an assistant offering to help with it",
    },
  },
].map((project) => ({
  ...project,
  href: caseStudies.some((study) => study.slug === project.slug) ? `/portfolio/${project.slug}` : undefined,
}));

/** Every project but the one being read. */
export function otherProjects(currentSlug: string): Project[] {
  return projects.filter((project) => project.slug !== currentSlug);
}

export const OTHER_PROJECTS_HEADING = "More of our work";

/** The copy at the head of the portfolio page. */
export const portfolioPage = {
  meta: {
    title: "Our work — Sature",
    description: "Case studies from Sature: what we were asked for, what we designed, and what it changed.",
  },
  title: "Our work",
  lead: "A handful of the products we have designed, and what changed once they shipped.",
};
