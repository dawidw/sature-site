import type { SiteContent } from "./types";

/**
 * Version 1 — the original "makes headlines" positioning (was index.html).
 *
 * Deliberately a standalone copy rather than an override of v2: the two
 * versions are worked on side by side, and an edit to one must not surface in
 * the other.
 */
export const v1: SiteContent = {
  meta: {
    title: "Sature — Product design studio for startups, scaleups & B2B SaaS",
    description:
      "Sature is a boutique design studio helping startups, scaleups and B2B SaaS companies deliver great experiences that drive business outcomes.",
  },

  hero: {
    badge: "Accepting projects",
    titleLead: "Our design",
    titleAccent: "makes headlines",
    sub: [
      "We help companies from conception to launch and beyond.",
      "We are your trusted design partner.",
    ],
    actions: [
      { label: "Work with us", href: "#contact", variant: "light" },
      { label: "Our services", href: "#services", variant: "outline-light" },
    ],
    logosLabel: "Our designers worked with these companies:",
    logos: [
      { label: "Throne", className: "logo-throne" },
      { label: "BBC", className: "logo-bbc", letters: ["B", "B", "C"] },
      { label: "WIRED", className: "logo-wired" },
      { label: "Gulf News", className: "logo-gulfnews" },
      { label: "The Washington Post", className: "logo-wapo" },
      { label: "ZAWYA", className: "logo-zawya" },
      { label: "The Wall Street Journal", className: "logo-wsj" },
    ],
  },

  about: {
    eyebrow: "We're a design partner you can trust",
    title: "Sature helps companies deliver great experiences driving business outcomes.",
  },

  industries: {
    lead: "Sature is a boutique design studio with combined 30 years of experience designing for:",
    tags: [
      "HR",
      "Property tech",
      "Medtech",
      "B2B SAAS",
      "Consulting",
      "Lawtech",
      "Automotive",
      "Marketplaces",
    ],
  },

  team: {
    title: "Nice to meet you 👋, we're",
    members: ["dawid", "maciej", "magdalena"],
    story: {
      heading: "Our story",
      body: "Sature is led by Dawid, Maciej & Magdalena, we met years ago and through working together we discovered that our shared passion is solving problems for people and businesses.",
    },
    stats: [
      { value: "25+ years", label: "Combined experience across UX, UI, product design & research" },
      { value: "100 M", label: "Money businesses we designed have raised from investors" },
      { value: "100+", label: "Unique features designed, and counting" },
    ],
  },

  services: {
    title:
      "Discovery, product design, design systems, AI experience design and no-code development for",
    titleMuted: "startups, scaleups and b2b saas",
    items: [
      {
        id: "svc-discovery",
        navLabel: "Product discovery",
        title: "Product Discovery",
        intro:
          "We work alongside your team to align and understand what problem needs to be solved and how we want to solve it. Outcome of this phase is a prototype in Claude Code.",
        groups: [
          {
            label: "Design workshops",
            items: [
              "Agenda tailored to your needs",
              "In-depth interviews with users / potential users",
              "Rapid prototyping with Claude Code",
            ],
          },
          {
            label: "Research",
            items: [
              "User interviews",
              "Stakeholder interviews",
              "In-depth interviews with users / potential users",
              "Rapid prototyping with Claude Code",
            ],
          },
        ],
        quotes: [
          {
            people: ["dawid"],
            text: "Dawid is a workshop expert who's helped >50 companies across Europe, USA and Asia discover successful projects.",
          },
          {
            people: ["maciej"],
            text: "Maciej has conducted >100 user interviews at leading B2B SaaS serving over 6000 companies.",
          },
        ],
      },
      {
        id: "svc-design",
        navLabel: "Product Design",
        title: "Product Design",
        intro: "We design new products as well as contribute to existing ones.",
        groups: [
          {
            label: "UX & UI Design",
            items: [
              "Wireframing",
              "Sitemap",
              "Desktop App",
              "Mobile app",
              "Design System",
              "Prototype",
            ],
          },
        ],
        quotes: [
          {
            people: ["dawid", "maciej", "magdalena"],
            text: "We've been in the field for a decade, we collaborate closely to deliver unmatched quality and drive your business to success. Our complimentary skillsets allow us to move further together.",
          },
        ],
      },
      {
        id: "svc-nocode",
        navLabel: "No - code development",
        title: "No-code development",
        intro: "We design new products as well as contribute to existing ones.",
        groups: [
          { label: "Vibecoding", items: ["Redesign in code", "Claude Code prototyping"] },
          { label: "Low code tools", items: ["Framer development"] },
        ],
        quotes: [
          {
            people: ["dawid", "maciej", "magdalena"],
            text: "We have experience with design, dev, QA and customer facing work in agencies, b2b saas and startups. We know how to build scalable, lasting systems.",
          },
        ],
      },
      {
        id: "svc-ai",
        navLabel: "AI experience design",
        title: "AI experience design",
        intro:
          "Designing AI features and products requires thoughtful approach mitigating business risks and hallucinations.",
        groups: [
          {
            label: "UX Design",
            items: ["Prompt engineering", "Interaction system design", "Use case evaluation"],
          },
          {
            label: "UI & Interaction design",
            items: ["Conversational design", "High fidelity coded prototypes"],
          },
        ],
        quotes: [
          {
            people: ["maciej", "magdalena"],
            text: "Maciej & Magda have experience designing B2B and B2C conversational agentic interfaces in med-tech and HR serving thousands of businesses.",
          },
        ],
      },
      {
        id: "svc-website",
        navLabel: "Website design",
        title: "Website design",
        intro:
          "Designing AI features and products requires thoughtful approach mitigating business risks and hallucinations.",
        groups: [
          {
            label: "Web design",
            items: [
              "Landing pages",
              "Pattern libraries",
              "Responsive web design",
              "Sitemaps",
              "UI / UX Design",
            ],
          },
        ],
        quotes: [
          {
            people: ["maciej", "magdalena"],
            text: "Maciej & Magda have experience designing B2B and B2C conversational agentic interfaces in med-tech and HR serving thousands of businesses.",
          },
        ],
      },
    ],
  },

  testimonials: {
    title: "What are they saying about us?",
    // Three slots, all currently holding the same Throne quote — the original
    // page shipped it that way. Two of them need real quotes before launch.
    items: [
      {
        quote:
          '"Working with Maciej and Magda was a game changer for our design needs. Their expertise in creating conversational interfaces for both B2B and B2C sectors in med-tech and HR has truly transformed our approach.',
        initials: "SH",
        name: "Scott Hickle",
        company: "Throne",
        companyClassName: "logo-throne",
      },
      {
        quote:
          '"Working with Maciej and Magda was a game changer for our design needs. Their expertise in creating conversational interfaces for both B2B and B2C sectors in med-tech and HR has truly transformed our approach.',
        initials: "SH",
        name: "Scott Hickle",
        company: "Throne",
        companyClassName: "logo-throne",
      },
      {
        quote:
          '"Working with Maciej and Magda was a game changer for our design needs. Their expertise in creating conversational interfaces for both B2B and B2C sectors in med-tech and HR has truly transformed our approach.',
        initials: "SH",
        name: "Scott Hickle",
        company: "Throne",
        companyClassName: "logo-throne",
      },
    ],
  },

  work: {
    title: "Our design work",
    hint: "Click or swipe right",
    images: [
      { src: "/assets/img/work/work1.webp", alt: "Telle video library interface" },
      { src: "/assets/img/work/work2.webp", alt: "Telle screen recording setup screen" },
      { src: "/assets/img/work/work3.webp", alt: "Telle video review and comments interface" },
      { src: "/assets/img/work/work4.webp", alt: "Telle recording controls and window picker" },
    ],
  },

  cta: {
    titleLead: "Your product experience",
    titleRest: "matters for ",
    titleStrong: "your business",
    action: { label: "Book a call", href: "#contact", variant: "light" },
  },

  faq: {
    title: "Questions?",
    items: [
      {
        question: "What does a project cost?",
        answer: [
          "Each of our services is priced individually according to client needs.",
          "For discovery we operate with a fixed pricing range and for all other services we use time & material with an agreed upon hourly rate + retainer fee.",
        ],
        open: true,
      },
      {
        question: "How long will my project take?",
        answer: [
          "It depends on scope — a focused discovery sprint can wrap in two weeks, while a full product design engagement typically runs six to twelve weeks.",
        ],
      },
      {
        question: "When can you start?",
        answer: [
          "Most engagements kick off within one to two weeks of signing. For urgent scopes we can often start sooner — ask us on the call.",
        ],
      },
      {
        question: "How fast do you respond?",
        answer: [
          "We reply to new inquiries within one business day, and stay just as responsive throughout the engagement.",
        ],
      },
      {
        question: "What does the process actually look like?",
        answer: [
          "We start with a short discovery call, scope the engagement together, then work in focused sprints with regular check-ins until we hand off a finished, documented deliverable.",
        ],
      },
      {
        question: "Who will actually do the work?",
        answer: [
          "Dawid, Maciej and Magdalena work directly on every engagement — no account managers, no handoffs to a team you haven't met.",
        ],
      },
      {
        question: "How do you communicate?",
        answer: [
          "Mostly async over Slack or email, with a weekly call to review progress — whatever fits your team's existing workflow.",
        ],
      },
    ],
  },

  contact: {
    titleLead: "Need designs?",
    titleRest: "Let's talk",
    body: "30-minute call. No strings attached. Refreshing your product? Creating new product? Need help with DS or ongoing work?",
    note: "We can help with these, and many more 🙌",
    action: { label: "Book a call", href: "mailto:hello@sature.studio", variant: "dark" },
    placeholderLabel: "Scheduling widget placeholder",
  },

  footer: {
    paragraphs: [
      "We discover what business needs to succeed, create exceptional product design & ai experiences for startups, scaleups and large organizations.",
      "Our projects are loved by their users and succeed in the market.",
    ],
    socials: [
      { label: "Sature on LinkedIn", href: "#", icon: "linkedin" },
      { label: "Sature on X", href: "#", icon: "x" },
    ],
    columns: [
      [
        { label: "About us", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "Career", href: "#contact" },
      ],
      [
        { label: "Services", href: "#services" },
        { label: "Linkedin", href: "#" },
      ],
      [
        { label: "Our roadmap", href: "#" },
        { label: "Newsletter", href: "#" },
        { label: "Help centre", href: "#" },
      ],
    ],
    copyright: "Sature Studio. All rights reserved.",
    legal: { label: "Privacy Policy", href: "#" },
  },
};
