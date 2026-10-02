/**
 * The Throne case study, word for word from Figma file
 * SDAlLcbZJQNTwPG4In2AxB, frame 423:94337 ("Throne — case study v4").
 *
 * That frame is drawn on a dark ground with photographic cards; the copy and
 * the screens are carried over here into the template the other two case
 * studies use, so the three read as one series.
 */

import { shot as frameShot, type Asset, type Card, type HeroContent } from "./types";

const DIR = "/assets/img/cases/throne";

/* Every shot is a 922px-wide frame exported at 3x; the page shows 2x. */
function shot(name: string, height: number, alt: string): Asset {
  return frameShot(`${DIR}/shots/${name}.jpg`, `${DIR}/full/${name}.jpg`, 922, height, alt);
}

export const HERO: HeroContent & { shot: Asset } = {
  eyebrow: "thronescience.com",
  titleAccent: "Designing the first consumer product",
  titleRest: "that reads gut, hydration and urinary health automatically",
  badges: ["Consumer health", "2026", "UX", "From pivot to Seed A"],
  shot: shot(
    "trends-1",
    600,
    "Two phones showing the gut health trend: a gauge reading 93 beside the same screen at 69",
  ),
};

export const CONTEXT: Card[] = [
  {
    title: "Context",
    body: [
      {
        p: "Throne is building a sensor that clips onto a toilet rim and reads what the body leaves behind — gut health, hydration, urinary flow and bathroom habits — with no wearable, no test strip and nothing to log by hand. We have worked with the founder since before the product looked like this, through the pivot that made it what it is today.",
      },
      {
        p: "Consumer health hardware lives or dies on whether people understand what they are being told. The hard problem was never the sensor. It was the sentence the sensor produces.",
      },
    ],
  },
  {
    title: "Problem to solve",
    body: [
      {
        p: "Everything the device measures is clinical. Urine osmolality in mOsm/kg. Stool form on the Bristol Scale. Flow rate in mL/s. None of it means anything to the person holding the phone.",
      },
      {
        p: "Three things made it harder. The domain is one people avoid discussing, so the tone had to stay plain without ever becoming a joke. The signal is delayed — what you eat today shows up two days from now — so cause and effect are almost impossible to see unaided. And the sensor measures the outcome but never the reason, so the product has to ask for the half it cannot see.",
      },
    ],
  },
];

export const IMPACT = {
  heading: "Impact",
  cards: [
    {
      title: "A design that raised a round",
      tone: "dark",
      tag: "Business outcome",
      body: [
        {
          p: "The product design went into a Seed A that closed at over $10M. Investors were not assessing a sensor spec. They were deciding whether a stranger could open the app and immediately understand what their body was telling them.",
        },
      ],
    },
    {
      title: "A category made presentable",
      tag: "Business outcome",
      body: [
        {
          p: "Bathroom data is the easiest thing in consumer health to turn into a joke or a scare. The interface treats it as ordinary — plain, calm, slightly dry — which is what makes the product sellable to a household rather than to a patient.",
        },
      ],
    },
    {
      title: "One skeleton, three health pillars",
      tag: "Design system outcome",
      body: [
        {
          p: "Gut health, hydration and bathroom habits share a single trend architecture: same layout, same drill-down, same education pattern. A fourth pillar becomes a content exercise rather than a redesign.",
        },
      ],
    },
    {
      title: "Useful before it has data",
      tag: "Product outcome",
      body: [
        {
          p: "The first week is normally dead time — no baseline, no trends, nothing to say. We turned it into a guided week that teaches one score at a time, exactly as each one starts to appear.",
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
            "Founder collaboration",
            "Product definition through the pivot",
            "Visual language and system",
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
            "Founder",
            "Lead Product Designer",
            "Product Designer",
            "Client-side engineering",
          ],
        },
      ],
    },
  ] satisfies Card[],
};

export const FOUNDER = {
  intro: {
    title: "Working with the founder",
    body: [
      {
        p: "We have been with Throne since before the product looked like this. The pivot, the visual language and the interface all came out of the same working relationship: a small team, direct access to the founder, and decisions taken in the room rather than in a handover document. That is the part of this project no screen can show, and it is the reason the design held together through a change of audience.",
      },
    ],
  } satisfies Card,
  stats: [
    { figure: "1", label: "pivot", note: "from the clinical use case to the household" },
    { figure: "3", label: "design style iterations", note: "before the visual language was settled" },
    { figure: "100", label: "hours of product design", note: "from first wireframe to the round" },
  ],
  statement: {
    eyebrow: "SEED A",
    figure: "$10M+",
    note: "raised in the round this design went into.",
  },
};

export const ALIGNMENT = {
  heading: "Strategic alignment",
  lead: "Before anything was drawn we worked with the founder to settle who the product was for. The pivot came out of that work: Throne stopped building for the clinical use case and started building for the household — one sensor, up to six people, no medical framing.\nThat single decision set every constraint that followed. It is why the copy is plain rather than clinical, why bathroom habits are scored in words instead of percentages, and why no screen in the product carries a diagnosis.",
  why: {
    title: "Why?",
    body: [
      {
        p: "Because a consumer health product cannot be designed and then repositioned. The audience decides the vocabulary, which thresholds are worth showing, and how much uncertainty you are allowed to admit out loud. Settling it before the first screen is the reason the interface never had to be rebuilt around it later.",
      },
    ],
  } satisfies Card,
  research: {
    title: "Research phase",
    body: [
      { p: "Three strands ran in parallel." },
      {
        p: "We worked through the clinical basis of every metric the sensor produces — the Bristol Stool Scale, urine osmolality bands, uroflowmetry — to find which part of each one a person can actually act on. We put early screens in front of people and watched what they did with a number about their own body, which is where most of the interface decisions came from. And we looked at what the category already trains people to expect, because a sensor on a toilet arrives with no mental model attached to it.",
      },
      {
        p: "The output was not a report. It was a short set of rules the interface still follows: never show a figure without a reference, never round away the uncertainty, and never say anything the product cannot stand behind.",
      },
    ],
  } satisfies Card,
  takeaways: {
    heading: "Research takeaways",
    cards: [
      {
        title: "A number alone changes nothing",
        body: [
          {
            p: "Shown a score with no reference, people either ignored it or over-reacted to it. Every reading in the product now carries two anchors — the last session and the person’s own normal — plus a sentence in plain language underneath. There is no screen where a bare figure has to defend itself.",
          },
        ],
      },
      {
        title: "People will not log what they do not owe",
        tone: "dark",
        body: [
          {
            p: "Manual journalling collapses within a week unless the cost is close to zero. That is why the daily entry is a pre-filled list of the factors you usually report, reduced to confirming or dismissing, with free text offered rather than demanded.",
          },
        ],
      },
      {
        title: "Admitting uncertainty buys trust",
        body: [
          {
            p: "Wherever the product hedged — signal strength, number of logs, the note that B vitamins distort hydration readings — confidence went up rather than down. Overstating precision in a health product is the fastest way to lose someone permanently.",
          },
        ],
      },
    ] satisfies Card[],
  },
  scope: {
    heading: "Project scope",
    intro: [
      {
        p: "The scope was set by what the sensor can and cannot know. It measures outcomes continuously and accurately, and it has no access to cause. So the work split three ways: make every measurement legible on its own, build one structure that holds three health pillars without becoming three designs, and create a way to capture the context the hardware will never see.",
      },
    ],
    sensor: {
      title: "What the sensor can and cannot know",
      body: [
        {
          p: "The device measures outcomes continuously and accurately, and has no access to cause. The scope followed from that: make every measurement legible on its own, hold three pillars in one structure, and capture the context the hardware will never see.",
        },
      ],
    } satisfies Card,
    focus: {
      title: "Our focus",
      body: [
        {
          p: "We deliberately did not build a symptom checker, and we did not let the product say anything that reads as a diagnosis. Users asked for it and the data would technically support a version of it. We refused, because a consumer device that appears to diagnose inherits a regulatory and trust burden it cannot carry. Instead the Coach is framed as guidance throughout — “it doesn’t diagnose or give medical advice” sits on the consent screen, and “general wellness information only” sits under every conversation. Saying no to that one feature is what let us say everything else with confidence.",
        },
      ],
    } satisfies Card,
  },
};

export const UX_WORK = {
  heading: "UX work",
  cards: [
    {
      title: "Understanding the numbers",
      tone: "dark",
      body: [
        {
          p: "We wanted to establish: which measurements a person can actually act on, and how far each one can be simplified before it stops being true.",
        },
      ],
    },
    {
      title: "UX work",
      body: [
        {
          arrows: [
            "Metric hierarchy",
            "Trend architecture",
            "Score-to-sentence framework",
            "Lo-fi prototypes",
          ],
        },
      ],
    },
  ] satisfies Card[],
  execution: {
    heading: "Execution",
    notes: [
      {
        title: "Scores that explain themselves",
        body: [
          {
            p: "Every reading carries two reference points and a sentence in plain language that changes tone with the data.",
          },
        ],
      },
      {
        title: "A coach that collects what the sensor can’t",
        body: [
          {
            p: "A journalling layer that gathers life context at near-zero cost and turns it into correlations the hardware could never see.",
          },
        ],
      },
      {
        title: "A first week that teaches",
        body: [
          {
            p: "Seven cards released across the first week, each explaining one score at the moment it starts appearing.",
          },
        ],
      },
    ] satisfies Card[],
  },
};

/** A part of the product: what it is, the screens, and what they taught. */
type Part = { heading: string; intro: Card; shots: Asset[]; notes: Card[] };

export const DESIGN: Part[] = [
  {
    heading: "Dashboard",
    intro: {
      title: "The screen that answers “so what?”",
      body: [
        {
          p: "Three scores at the top, one hero reading with its gauge, a plain-language insight that changes tone with the data, and the activity log underneath. The variants here are the states most products quietly hide — a steep drop, a milestone worth naming.",
        },
      ],
    },
    shots: [
      shot(
        "dashboard-1",
        600,
        "The onboarding screen beside the dashboard: a 92% hydration gauge under the line “You woke up a little dry”",
      ),
      shot(
        "dashboard-2",
        600,
        "The same dashboard in two harder states: a 24% reading calling out a steep drop, and a milestone naming what morning walks did",
      ),
    ],
    notes: [
      {
        title: "The sentence is the product",
        body: [
          {
            p: "Under each reading sits a line of plain language that changes with the data — praise, warning, a request for context, a milestone. Five variants of the same screen carry five different tones.",
          },
        ],
      },
    ],
  },
  {
    heading: "Trends",
    intro: {
      title: "One structure, three health pillars",
      body: [
        {
          p: "Gut health, hydration and bathroom habits, each with a daily gauge, weekly cards and a drill-down across day, week and month. The same skeleton carries three very different metric sets, and an education section closes every one of them.",
        },
      ],
    },
    shots: [
      shot(
        "trends-2",
        600,
        "Hydration in the same layout, scored 32% “Dehydrated” and 54% “Thirsty”, with osmolality under the gauge",
      ),
      shot(
        "trends-3",
        600,
        "Bathroom habits in that layout, scored in words rather than a number: Poor beside Fair",
      ),
    ],
    notes: [
      {
        title: "One skeleton, three pillars",
        body: [
          {
            p: "Gut health, hydration and bathroom habits share the same trend view: a daily gauge, weekly cards, and a drill-down with day, week and month plus a date range. Only the metric set and the scoring method differ.",
          },
          {
            p: "Every drill-down ends with a “What is…” section, so the Bristol Stool Scale becomes five named categories and hydration becomes five osmolality bands with their thresholds written out. Bathroom habits are the only pillar scored in words rather than a number — Poor, Fair, Good, Best — because “Fair” does not read as failure and 43% does.",
          },
        ],
      },
    ],
  },
  {
    heading: "Session details",
    intro: {
      title: "Everything one visit can tell you",
      body: [
        {
          p: "The densest report in the product, in two variants: a full session and a urination-only one. Stool form with its attributes, six bathroom-habit metrics, hydration with raw osmolality, a uroflow curve, and a second-by-second timeline of the visit.",
        },
      ],
    },
    shots: [
      shot(
        "session",
        600,
        "Two session reports: “Hydration and digestion were well balanced” beside a urination-only visit at 87% hydrated",
      ),
    ],
    notes: [
      {
        title: "The timeline",
        body: [
          {
            p: "It does almost no practical work. It exists because watching the device account for every second of a session is what makes a person believe the numbers around it.",
          },
        ],
      },
    ],
  },
  {
    heading: "Gut Health Coach",
    intro: {
      title: "Where the product asks instead of measuring",
      body: [
        {
          p: "Onboarding, an explicit consent screen for data and AI, and a daily entry built from pre-filled factors — the layer that collects what the sensor cannot see. Then what the coach does with it: correlations carrying their direction, their effect on the gut health score, and how sure the product is willing to claim it is.",
        },
      ],
    },
    shots: [
      shot(
        "coach-1",
        600,
        "The coach introducing itself: “There’s a pattern in your gut health. Let’s find it.” beside the intake screen",
      ),
      shot(
        "coach-2",
        600,
        "The daily entry: six pre-filled factors, each confirmed or dismissed, with free text offered underneath",
      ),
      shot(
        "coach-3",
        600,
        "What the coach found: factors ranked by their effect on the gut health score, each with its signal strength and number of logs",
      ),
    ],
    notes: [
      {
        title: "The sensor measures the outcome, never the cause",
        body: [
          {
            p: "What you eat today shows up in the data two days from now. No amount of sensor accuracy closes that gap, so the product asks — briefly, daily, and in a form cheap enough to survive past the first week. The daily entry is a pre-filled list of the factors you usually report, reduced to confirming or dismissing.",
          },
        ],
      },
      {
        title: "Correlations with their confidence attached",
        body: [
          {
            p: "Each factor shows its effect on the gut health score, the direction it pushes, how many logs support it and whether the signal is early or strong. The detail sheet states the baseline, the value when logged, and the exact number of days behind the claim.",
          },
        ],
      },
    ],
  },
  {
    heading: "First week with Throne",
    intro: {
      title: "Designing for the week with no data",
      body: [
        {
          p: "The entry card on the dashboard, and the cards released one per day. Each explains one score at the moment it starts to appear, ending with the case nobody plans for — a session that happened away from home.",
        },
      ],
    },
    shots: [
      shot(
        "first-week",
        600,
        "Two of the seven first-week cards: “Your body’s already talking” and the three key scores it will start to show",
      ),
    ],
    notes: [
      {
        title: "The week the product has nothing to say",
        body: [
          {
            p: "Without a baseline there are no trends, no correlations and no insight — which is exactly when a person decides whether to keep a $399 device on the rim. Seven cards, one per day, each explaining one score at the moment it starts to appear in the data.",
          },
        ],
      },
    ],
  },
];

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
              "Visual language for a category with no precedent",
              "Score-to-sentence framework covering praise, warning, missing data and milestone",
              "Trend architecture reused across three health pillars",
              "Coach and consent flow, from onboarding to daily entry",
              "First-week programme released across seven days",
            ],
          },
        ],
      },
      {
        title: "Taken to market",
        body: [
          {
            p: "The design went into the Seed A round that closed at over $10M, and shipped as the product now sold at thronescience.com.",
          },
        ],
      },
    ] satisfies Card[],
  },
  afterword: {
    heading: "Afterword",
    notes: [
      {
        title: "Lessons learnt",
        body: [
          {
            p: "In consumer health the copy is the interface. We spent more time on the sentence under each score than on the chart above it, and it was the right ratio — people quote the sentence back to you, never the number. Admitting what the product does not know turned out to be the strongest trust move available: every hedge we added made it feel more credible, not less.",
          },
        ],
      },
      {
        title: "Challenges",
        body: [
          {
            p: "The domain resists design in both directions. Too clinical and it frightens, too casual and it becomes a joke. Finding the register — plain, calm, slightly dry — took three visual iterations and a lot of copy that did not survive. The second challenge was time: the product is genuinely useless on day one and no interface work changes that, so we had to design for the wait rather than pretend it was not there.",
          },
        ],
      },
    ] satisfies Card[],
  },
};
