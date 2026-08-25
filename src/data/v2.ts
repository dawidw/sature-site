import type { SiteContent } from "./types";

/**
 * Version 2 — the agentic-AI positioning (was index2.html).
 *
 * TODO markers from the original HTML are kept as comments on the field they
 * belong to, so nothing pending verification gets published by accident.
 */
export const v2: SiteContent = {
  meta: {
    title: "Sature — Product design studio for startups, scaleups & B2B SaaS",
    description:
      "Sature is a boutique design studio helping startups, scaleups and B2B SaaS companies design and ship agentic AI products and great digital experiences.",
  },

  hero: {
    badge: "Accepting projects",
    titleLead: "Product design for",
    titleAccent: "the agentic AI era",
    // One line: this copy is a single clause, so it wraps to the column rather
    // than breaking at a point nobody chose.
    sub: [
      "We help startups and B2B SaaS teams design, prototype and ship agentic AI products — from first workshop to a working, coded prototype.",
    ],
    actions: [
      { label: "Work with us", href: "#contact", variant: "light" },
      { label: "Our services", href: "#services", variant: "outline-light" },
    ],
    // TODO [DO WERYFIKACJI Z ZESPOŁEM]: sekcja miesza Throne (realny klient
    // Magdy) z BBC/WIRED/Gulf News/Washington Post/ZAWYA/WSJ pod wspólnym
    // nagłówkiem. Ustalić czy to prawdziwi klienci, wzmianki prasowe, czy
    // pozostałość szablonu demo — zanim strona pójdzie do klientów.
    // Patrz sature-website-copy.md.
    //   - Jeśli klienci: "Trusted by teams at:" + logotypy
    //   - Jeśli prasa: "As featured in:" + logotypy prasowe, osobno od klientów
    //   - Jeśli szablon demo: usunąć sekcję całkowicie
    logosLabel: "Our designers worked with these companies:",
    logos: [
      { label: "Throne", className: "logo-throne" },
      { label: "BBC", className: "logo-bbc", letters: ["B", "B", "C"] },
      { label: "WIRED", className: "logo-wired" },
      { label: "Gulf News", className: "logo-gulfnews" },
      { label: "The Washington Post", className: "logo-wapo" },
      { label: "ZAWYA", className: "logo-zawya" },
    ],
  },

  about: {
    eyebrow: "We're a design partner you can trust",
    title: "Sature helps companies deliver great experiences that drive business outcomes.",
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
    photo: {
      src: "/assets/img/team/founders.webp",
      alt: "Dawid Woźniak, Maciej Kownacki and Magda Kerczyńska",
      names: ["Dawid Woźniak", "Maciej Kownacki", "Magda Kerczyńska"],
      portraits: [
        { src: "/assets/img/team/founder-dawid.webp", alt: "Dawid Woźniak", name: "Dawid Woźniak" },
        { src: "/assets/img/team/founder-maciej.webp", alt: "Maciej Kownacki", name: "Maciej Kownacki" },
        { src: "/assets/img/team/founder-magda.webp", alt: "Magda Kerczyńska", name: "Magda Kerczyńska" },
      ],
    },
    story: {
      heading: "Our story",
      body: "Sature is led by Dawid, Maciej and Magdalena — we met years ago working in product design across Europe and the US. Over the last two years, as AI moved from a feature checkbox to the backbone of new products, we kept seeing the same gap: teams shipping agentic AI features without the research, interaction patterns, or design process built for a technology that doesn't behave the same way twice. We started Sature to close that gap — pairing classic product design craft with hands-on experience designing agentic AI experiences, so founders don't have to figure out AI UX through trial and error on their own users.",
    },
    // TODO [POTWIERDŹ AKTUALNOŚĆ LICZB] — statystyki wymagają weryfikacji
    // przed publikacją.
    stats: [
      { value: "25+ years", label: "Combined experience across UX, UI, product design & research" },
      { value: "100 M", label: "Money businesses we designed have raised from investors" },
      { value: "100+", label: "Unique features designed, and counting" },
    ],
  },

  services: {
    title: "We take products from discovery to launch for",
    titleMuted: "startups, scaleups and B2B SaaS",
    items: [
      {
        id: "svc-discovery",
        navLabel: "Product discovery",
        title: "Product Discovery",
        intro:
          "Before we design anything, we make sure we're solving the right problem. Discovery pairs structured workshops with real user interviews, so you commit budget to build only once you know it's worth building.",
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
        intro:
          "We design the interfaces your users actually touch — from first wireframe to a design system your team can keep building on for years, not just for one release.",
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
        intro:
          "Speed matters more than polish in the first weeks of a product. We build working no-code and low-code prototypes so you can test with real users and investors before hiring a single engineer.",
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
          "Agentic AI breaks the rules of traditional interface design — it's non-deterministic and can fail in a new way every time. We design the guardrails, feedback loops and trust signals that make AI features usable instead of unpredictable.",
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
          "Your website is often the first — and sometimes only — product experience a prospect has with your company before they book a call. We design and ship fast, responsive sites built to convert.",
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
            // TODO [POTWIERDŹ LICZBĘ] — [X] to placeholder, nie publikować.
            people: ["dawid"],
            text: "Dawid has designed and shipped [X] marketing and product websites for startups and B2B SaaS companies over the last decade.",
          },
        ],
      },
    ],
  },

  testimonials: {
    title: "What are they saying about us?",
    // TODO: sloty 2 i 3 czekają na prawdziwe cytaty od innych klientów — NIE
    // wymyślać treści. Do czasu ich zebrania pokazujemy jeden testimonial
    // zamiast karuzeli trzech identycznych (patrz sature-website-copy.md,
    // sekcja "Testimoniale"). Dodanie drugiego wpisu tutaj automatycznie
    // przełącza siatkę z układu pojedynczego na wielokolumnowy.
    items: [
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
    // TODO: Tellent to obecny pracodawca Maćka — potwierdzić zgodę na
    // pokazywanie tej pracy jako portfolio studia, zanim to opublikujecie.
    caption: {
      title: "Tellent — video screening for hiring teams",
      body: "We designed Tellent's video interview experience end to end — from screen recording setup to review and collaborative feedback — helping hiring teams evaluate candidates without scheduling a live call.",
    },
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
          "Each of our services is priced individually according to client needs. For discovery we operate with a fixed pricing range, and for all other services we use time & material with an agreed hourly rate plus a retainer fee.",
        ],
        open: true,
      },
      {
        question: "How long will my project take?",
        // TODO [POTWIERDŹ RANGE]
        answer: [
          "Most engagements run 4–8 weeks for a discovery sprint, and 2–4 months for a full product design engagement, depending on scope. We'll give you a specific timeline after our first call.",
        ],
      },
      {
        question: "When can you start?",
        // TODO [POTWIERDŹ]
        answer: [
          "We're currently accepting new projects — kickoff is typically within 1–2 weeks of signing.",
        ],
      },
      {
        question: "How fast do you respond?",
        // TODO [POTWIERDŹ SLA]
        answer: [
          "We respond to client messages within one business day, usually faster once an engagement is active.",
        ],
      },
      {
        question: "What does the process actually look like?",
        answer: [
          "Every engagement starts with a discovery call, followed by a structured workshop to align on the problem. From there we move into design sprints with regular check-ins, ending each phase with a working, often coded, prototype.",
        ],
      },
      {
        question: "Who will actually do the work?",
        answer: [
          "You work directly with the three of us — Dawid, Maciej and Magdalena. No account managers, no junior hand-offs. Whoever scopes the project is who designs it.",
        ],
      },
      {
        question: "How do you communicate?",
        answer: [
          "Async updates over Slack or email, plus a weekly call to review progress — fitted to whatever workflow your team already uses.",
        ],
      },
    ],
  },

  contact: {
    titleLead: "Need designs?",
    titleRest: "Let's talk",
    body: "30-minute call. No strings attached. Refreshing your product? Creating new product? Need help with DS or ongoing work?",
    note: "We can help with these, and many more 🙌",
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
    // TODO: "Our roadmap", "Newsletter", "Help centre" usunięte jako
    // nierelewantne dla 3-osobowego, dopiero startującego studia. "Career"
    // zostawić tylko jeśli faktycznie planujecie rekrutację w najbliższym
    // czasie — inaczej usunąć.
    columns: [
      [
        { label: "About us", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "Career", href: "#contact" },
      ],
      [
        { label: "Services", href: "#services" },
        { label: "LinkedIn", href: "#" },
      ],
    ],
    copyright: "Sature Studio. All rights reserved.",
    legal: { label: "Privacy Policy", href: "#" },
  },
};
