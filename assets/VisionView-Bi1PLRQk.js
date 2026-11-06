import { j as e, L as C } from "./index-DF2nmw98.js";

/**
 * Reworkzone — About Us / Company Profile & Story
 * Authored using design-taste-frontend (taste-skill 2.5) standards:
 * - Direct, authentic company copy without artificial fluff
 * - Equal-edge 1200px max-width layout rhythm
 * - 6 interconnected creative disciplines
 * - Interactive micro-transitions and clean typography
 */

const DISCIPLINES = [
  {
    num: "01",
    title: "Event Management",
    tag: "EXPERIENCES & SPATIAL",
    description: "Creating memorable experiences and bringing ambitious events to life.",
    bullets: [
      "Large-scale cultural festivals & corporate summits",
      "Full turnkey venue staging, lighting & truss rigging",
      "High-capacity crowd coordination & safety orchestration"
    ],
    link: "/services/event-mgmt"
  },
  {
    num: "02",
    title: "Creative Design",
    tag: "VISUAL COMMUNICATION",
    description: "Transforming ideas into compelling visual communication.",
    bullets: [
      "3D spatial modeling, architectural stall renders",
      "Brand collateral, signage & large-format graphics",
      "Packaging, print media & publication systems"
    ],
    link: "/services/design"
  },
  {
    num: "03",
    title: "Website Development",
    tag: "DIGITAL ARCHITECTURE",
    description: "Building functional, engaging digital experiences.",
    bullets: [
      "High-performance custom web applications & portals",
      "Event digital ticketing & QR code check-in tech",
      "Responsive, ultra-clean UI/UX engineered for speed"
    ],
    link: "/services/web-dev"
  },
  {
    num: "04",
    title: "Branding & Strategy",
    tag: "IDENTITY & POSITIONING",
    description: "Shaping distinctive identities and meaningful brand connections.",
    bullets: [
      "Core brand positioning & narrative frameworks",
      "Comprehensive design systems & identity guidelines",
      "Durable market positioning across physical & digital"
    ],
    link: "/services/branding"
  },
  {
    num: "05",
    title: "Film Production",
    tag: "CINEMATIC STORYTELLING",
    description: "Bringing stories to life through powerful visual storytelling.",
    bullets: [
      "Cinematic 4K multi-camera event & stage coverage",
      "Brand commercial films & corporate documentaries",
      "Post-production grading, sound design & motion"
    ],
    link: "/services/film-prod"
  },
  {
    num: "06",
    title: "Digital Marketing",
    tag: "GROWTH & ENGAGEMENT",
    description: "Helping brands connect, engage, and grow in the digital world.",
    bullets: [
      "Multi-channel performance & awareness campaigns",
      "Targeted audience acquisition & community engagement",
      "Data-backed content strategy with measurable ROI"
    ],
    link: "/services/digital-marketing"
  }
];

const PILLARS = [
  {
    step: "01",
    title: "Think Beyond",
    subtitle: "Curiosity & Vision",
    body: "We look beyond standard templates and predictable paths. By questioning conventional industry boundaries, we find bolder, smarter ways for brands to stand out and lead."
  },
  {
    step: "02",
    title: "Create With Purpose",
    subtitle: "Functional Meaning",
    body: "Creativity without intention is mere decoration. Every design, platform, and physical environment we produce solves a concrete problem and genuinely serves its audience."
  },
  {
    step: "03",
    title: "Deliver With Precision",
    subtitle: "Execution Integrity",
    body: "Ambitious concepts only matter when executed flawlessly. From on-ground rigging to production code, we manage every detail so handover is punctual and without compromise."
  }
];

const ROLES = [
  {
    role: "Designers & Art Directors",
    desc: "Shaping visual languages, spatial 3D models, typography, and enduring brand identities."
  },
  {
    role: "Developers & Engineers",
    desc: "Architecting high-speed web apps, QR ticketing engines, and frictionless digital touchpoints."
  },
  {
    role: "Fabricators & Riggers",
    desc: "Translating architectural plans into physical staging, precision carpentry, and robust structures."
  },
  {
    role: "Strategists & Producers",
    desc: "Harmonizing client objectives, production timelines, and on-ground execution with zero friction."
  }
];

function AboutUsView() {
  return e.jsxs("main", {
    className: "w-full bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-red-500 selection:text-white pt-24 pb-20",
    children: [

      /* 1. HERO SECTION */
      e.jsx("section", {
        className: "relative border-b border-zinc-200/80 bg-white py-16 lg:py-24",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            // Kicker
            e.jsxs("div", {
              className: "inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-red-200 bg-red-50/70 text-xs font-semibold tracking-wider text-red-600 uppercase mb-8",
              children: [
                e.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" }),
                "EST. 2023 — BUILT TO CREATE. DRIVEN TO DELIVER."
              ]
            }),

            // H1
            e.jsx("h1", {
              className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 max-w-4xl leading-[1.1] mb-6",
              children: "Every Great Idea Deserves to Become Something Real."
            }),

            // Subhead
            e.jsx("p", {
              className: "text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed mb-10",
              children: "Reworkzone began in 2023 with a simple belief: creativity should never stop at an idea. In a world where brands need more than just visibility, we built a creative company that brings imagination and execution closer together—where strategy meets design, technology meets creativity, and ambitious concepts become meaningful experiences."
            }),

            // Actions & Metrics
            e.jsxs("div", {
              className: "flex flex-col sm:flex-row sm:items-center gap-4 mb-16",
              children: [
                e.jsx(C, {
                  to: "/contact",
                  className: "inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-zinc-950 text-white font-medium text-sm hover:bg-zinc-800 transition-colors shadow-sm",
                  children: "Start a Conversation"
                }),
                e.jsx(C, {
                  to: "/portfolio",
                  className: "inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-zinc-300 bg-white text-zinc-800 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-400 transition-colors",
                  children: "Explore Our Work"
                })
              ]
            }),

            // Metrics Bar
            e.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-zinc-200/90",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("div", { className: "text-3xl lg:text-4xl font-extrabold text-zinc-950", children: "2023" }),
                    e.jsx("div", { className: "text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1", children: "Established In" })
                  ]
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("div", { className: "text-3xl lg:text-4xl font-extrabold text-zinc-950", children: "6" }),
                    e.jsx("div", { className: "text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1", children: "Creative Disciplines" })
                  ]
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("div", { className: "text-3xl lg:text-4xl font-extrabold text-red-600", children: "100%" }),
                    e.jsx("div", { className: "text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1", children: "Concept to Execution" })
                  ]
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("div", { className: "text-3xl lg:text-4xl font-extrabold text-zinc-950", children: "Gujarat" }),
                    e.jsx("div", { className: "text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1", children: "Operations Base" })
                  ]
                })
              ]
            })
          ]
        })
      }),

      /* 2. THE FOUNDING STORY & VISION */
      e.jsx("section", {
        className: "py-20 lg:py-28 border-b border-zinc-200/80 bg-[#FAFAFA]",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
              children: [
                // Left Column: The Narrative
                e.jsxs("div", {
                  className: "lg:col-span-7",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-bold tracking-widest text-red-600 uppercase mb-3 block",
                      children: "OUR STORY"
                    }),
                    e.jsx("h2", {
                      className: "text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-6",
                      children: "Bringing Imagination and Execution Closer Together."
                    }),
                    e.jsx("div", {
                      className: "space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed",
                      children: [
                        e.jsx("p", {
                          children: "From shaping brand identities and developing digital experiences to producing events, creating visual content, and building engaging physical environments, our approach brings different creative disciplines together with one shared purpose: to create work that makes an impact."
                        }),
                        e.jsx("p", {
                          children: "In typical industries, brands have to juggle design agencies, web developers, fabrication workshops, and event managers separately. Ideas get diluted across every handover. At Reworkzone, strategy meets design, technology meets creativity, and ambitious concepts become tangible realities without compromise."
                        })
                      ]
                    })
                  ]
                }),

                // Right Column: Architectural Highlight Card
                e.jsx("div", {
                  className: "lg:col-span-5",
                  children: e.jsxs("div", {
                    className: "bg-zinc-950 text-white rounded-2xl p-8 lg:p-10 shadow-xl border border-zinc-800 relative overflow-hidden",
                    children: [
                      e.jsxs("div", {
                        className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400 mb-6",
                        children: [
                          e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-red-400" }),
                          "The Reworkzone Standard"
                        ]
                      }),
                      e.jsx("blockquote", {
                        className: "text-xl sm:text-2xl font-semibold leading-snug tracking-tight text-zinc-100 mb-6",
                        children: "“We don’t believe in creativity for the sake of appearance. Every design, campaign, digital platform, and experience should serve a purpose, solve a problem, and connect with the people it was created for.”"
                      }),
                      e.jsx("div", {
                        className: "pt-6 border-t border-zinc-800 text-xs font-mono uppercase tracking-wider text-zinc-400",
                        children: "Purpose-Driven Execution — Est. 2023"
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      }),

      /* 3. DIFFERENT MINDS. ONE CREATIVE DIRECTION */
      e.jsx("section", {
        className: "py-20 lg:py-28 border-b border-zinc-200/80 bg-white",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            e.jsxs("div", {
              className: "max-w-3xl mb-16",
              children: [
                e.jsx("span", {
                  className: "text-xs font-bold tracking-widest text-red-600 uppercase mb-3 block",
                  children: "COLLECTIVE CULTURE"
                }),
                e.jsx("h2", {
                  className: "text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4",
                  children: "Different Minds. One Creative Direction."
                }),
                e.jsx("p", {
                  className: "text-base sm:text-lg text-zinc-600 leading-relaxed",
                  children: "At Reworkzone, we believe the strongest ideas emerge when different perspectives work together. Designers, developers, strategists, creators, and execution teams contribute their expertise to turn challenges into possibilities."
                })
              ]
            }),

            // 4 Role Pillars
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
              children: ROLES.map((r, i) =>
                e.jsxs("div", {
                  key: i,
                  className: "p-6 rounded-xl border border-zinc-200/80 bg-zinc-50/60 hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all",
                  children: [
                    e.jsx("div", {
                      className: "w-8 h-8 rounded-lg bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center mb-4",
                      children: "0" + (i + 1)
                    }),
                    e.jsx("h3", {
                      className: "text-base font-bold text-zinc-900 mb-2",
                      children: r.role
                    }),
                    e.jsx("p", {
                      className: "text-sm text-zinc-600 leading-relaxed",
                      children: r.desc
                    })
                  ]
                })
              )
            })
          ]
        })
      }),

      /* 4. THE CREATIVE ECOSYSTEM — 6 DISCIPLINES */
      e.jsx("section", {
        id: "ecosystem",
        className: "py-20 lg:py-28 border-b border-zinc-200/80 bg-[#FAFAFA]",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            e.jsxs("div", {
              className: "max-w-3xl mb-16",
              children: [
                e.jsx("span", {
                  className: "text-xs font-bold tracking-widest text-red-600 uppercase mb-3 block",
                  children: "THE ECOSYSTEM"
                }),
                e.jsx("h2", {
                  className: "text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4",
                  children: "More Than an Agency. A Creative Ecosystem."
                }),
                e.jsx("p", {
                  className: "text-base sm:text-lg text-zinc-600 leading-relaxed",
                  children: "Reworkzone brings together six interconnected creative disciplines. Each discipline brings a different strength. Together, they allow us to approach every project with a broader creative perspective."
                })
              ]
            }),

            // 6 Grid
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: DISCIPLINES.map((d, i) =>
                e.jsxs("div", {
                  key: i,
                  className: "flex flex-col justify-between p-8 rounded-2xl border border-zinc-200/90 bg-white hover:border-zinc-300 hover:shadow-lg transition-all",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            e.jsx("span", {
                              className: "text-xs font-bold text-red-600 uppercase tracking-wider",
                              children: d.tag
                            }),
                            e.jsx("span", {
                              className: "text-xs font-mono font-semibold text-zinc-400",
                              children: d.num
                            })
                          ]
                        }),
                        e.jsx("h3", {
                          className: "text-xl font-bold text-zinc-950 mb-3",
                          children: d.title
                        }),
                        e.jsx("p", {
                          className: "text-sm text-zinc-600 leading-relaxed mb-6 font-medium",
                          children: d.description
                        }),
                        e.jsx("ul", {
                          className: "space-y-2 mb-8",
                          children: d.bullets.map((b, bi) =>
                            e.jsxs("li", {
                              key: bi,
                              className: "flex items-start gap-2 text-xs text-zinc-600 leading-normal",
                              children: [
                                e.jsx("span", { className: "text-red-500 font-bold mt-0.5", children: "•" }),
                                e.jsx("span", { children: b })
                              ]
                            })
                          )
                        })
                      ]
                    }),
                    e.jsx(C, {
                      to: d.link,
                      className: "inline-flex items-center text-xs font-bold uppercase tracking-wider text-zinc-900 hover:text-red-600 transition-colors pt-4 border-t border-zinc-100",
                      children: [
                        "Explore Discipline",
                        e.jsx("span", { className: "ml-1.5", children: "→" })
                      ]
                    })
                  ]
                })
              )
            })
          ]
        })
      }),

      /* 5. OUR PHILOSOPHY */
      e.jsx("section", {
        className: "py-20 lg:py-28 border-b border-zinc-200/80 bg-white",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            e.jsxs("div", {
              className: "max-w-3xl mb-16",
              children: [
                e.jsx("span", {
                  className: "text-xs font-bold tracking-widest text-red-600 uppercase mb-3 block",
                  children: "OPERATING CODE"
                }),
                e.jsx("h2", {
                  className: "text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4",
                  children: "Think Beyond. Create With Purpose. Deliver With Precision."
                }),
                e.jsx("p", {
                  className: "text-base sm:text-lg text-zinc-600 leading-relaxed",
                  children: "We believe great work is built on curiosity, collaboration, attention to detail, and the courage to explore new possibilities. For us, success isn't simply completing a project — it's creating something that genuinely serves the brand, connects with its audience, and continues to deliver value beyond launch."
                })
              ]
            }),

            // 3 Philosophy Pillars
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: PILLARS.map((p, i) =>
                e.jsxs("div", {
                  key: i,
                  className: "p-8 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 transition-all",
                  children: [
                    e.jsx("div", {
                      className: "text-xs font-mono font-bold text-red-600 uppercase tracking-widest mb-3",
                      children: "Principle " + p.step
                    }),
                    e.jsx("h3", {
                      className: "text-2xl font-bold text-zinc-950 mb-1",
                      children: p.title
                    }),
                    e.jsx("div", {
                      className: "text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4",
                      children: p.subtitle
                    }),
                    e.jsx("p", {
                      className: "text-sm text-zinc-600 leading-relaxed",
                      children: p.body
                    })
                  ]
                })
              )
            })
          ]
        })
      }),

      /* 6. OUR JOURNEY & FINAL CTA BANNER */
      e.jsx("section", {
        className: "py-20 lg:py-24 bg-zinc-950 text-white relative overflow-hidden",
        children: e.jsx("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: e.jsxs("div", {
            className: "max-w-3xl",
            children: [
              e.jsxs("div", {
                className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-6",
                children: [
                  e.jsx("span", { className: "w-2 h-2 rounded-full bg-red-500 animate-ping" }),
                  "OUR JOURNEY IS JUST BEGINNING"
                ]
              }),
              e.jsx("h2", {
                className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]",
                children: "“We don’t just imagine what’s next. We work to create it.”"
              }),
              e.jsx("p", {
                className: "text-base sm:text-lg text-zinc-300 leading-relaxed mb-10",
                children: "Since 2023, our ambition has remained the same: to keep exploring, keep evolving, and keep creating work that matters. We're building Reworkzone around a simple idea — that when creativity, technology, and execution work together, extraordinary possibilities emerge."
              }),
              e.jsxs("div", {
                className: "flex flex-col sm:flex-row sm:items-center gap-4",
                children: [
                  e.jsx(C, {
                    to: "/contact",
                    className: "inline-flex items-center justify-center px-7 py-4 rounded-lg bg-red-600 text-white font-semibold text-sm hover:bg-red-500 transition-colors shadow-lg",
                    children: "Get in Touch"
                  }),
                  e.jsx(C, {
                    to: "/portfolio",
                    className: "inline-flex items-center justify-center px-7 py-4 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-200 font-semibold text-sm hover:bg-zinc-800 hover:text-white transition-colors",
                    children: "View Our Work"
                  })
                ]
              })
            ]
          })
        })
      })

    ]
  });
}

export { AboutUsView as default };
