import{c as f,a as o,f as p,d as u,j as e,S as $,m as s,L as C,x as G,p as H,A,k as U,X,y as K,z as Z,I as J,g as Q,B as ee,T as te,P as se,o as ae,n as ie,F as ne}from"./index-DF2nmw98.js";import{C as re}from"./chevron-left-trjNjfiy.js";import{C as g}from"./chevron-right-BS2MTjv9.js";import{C as oe}from"./cpu-LYuG7DkD.js";import{Z as R}from"./zap-CWgv_O3-.js";import{P as le}from"./printer-CrkWylFZ.js";

/**
 * Reworkzone — About Us / Vision
 * Redesigned using taste-skill 2.5 standards:
 * - Anti-slop, plain-spoken editorial copy
 * - Real photography from executed projects
 * - One section per screen rhythm, equal edges
 * - Quiet micro-interactions & high visual craft
 */

const DISCIPLINES = [
  {
    num: "01",
    title: "Spatial & Event Fabrication",
    subtitle: "Turnkey Stalls & Venue Architecture",
    description: "From custom 3D pavilion modeling to complete on-site carpentry, truss engineering, electrical compliance, and crowd orchestration.",
    image: "/Image/Gallery/ONGC/DSC_6410.jpg",
    proof: "ONGC Navratri, JMCL Stadium & Government Pavilions",
    link: "/services/event-mgmt"
  },
  {
    num: "02",
    title: "Brand Strategy & Identity",
    subtitle: "Visual Architecture & Design Systems",
    description: "Designing memorable logo systems, comprehensive brand books, luxury packaging, and print collateral that build durable business equity.",
    image: "/Image/Gallery/Brand-Activations/brand-activation-identity-display-07.webp",
    proof: "Royal Albert Palace, Murlidhar Sweets & Aster 360",
    link: "/services/branding"
  },
  {
    num: "03",
    title: "Digital Products & Web Platforms",
    subtitle: "Bespoke React Engineering",
    description: "High-performance corporate websites, customer self-service portals, and custom QR-code digital ticketing systems built with zero bloat.",
    image: "/Image/Web1.webp",
    proof: "0.4s Interactive Speeds & Automated Check-in Tech",
    link: "/services/web-dev"
  },
  {
    num: "04",
    title: "Cinematic Film & Motion",
    subtitle: "In-House Commercial Production",
    description: "Multi-camera 4K stage coverage, aerial drone cinematography, and motion graphics that communicate enterprise capability and vision.",
    image: "/Image/Gallery/Techexpo/20251220_153544.webp",
    proof: "Tech Expo Gujarat, Corporate Documentaries & Ad Films",
    link: "/services/film-prod"
  }
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "Discovery & Strategy",
    title: "Defining Distinct Positioning",
    desc: "Before sketching or drafting, we analyze market positioning, audience friction, and core commercial objectives so every decision serves business growth."
  },
  {
    step: "02",
    phase: "3D Spatial & Visual Design",
    title: "Precision Prototyping",
    desc: "We generate complete 3D structural CAD layouts with lighting simulations for stalls, and interactive Figma component systems for digital interfaces."
  },
  {
    step: "03",
    phase: "In-House Fabrication & Code",
    title: "Zero-Outsourcing Build",
    desc: "Built directly in our Ahmedabad workshop with finished woods, structural metals, and certified electrical planning—ensuring total quality control."
  },
  {
    step: "04",
    phase: "Live Showtime Execution",
    title: "Flawless On-Ground Delivery",
    desc: "Our on-site crew orchestrates AV setups, attendee entry clearance, and technical handovers well before doors open, guaranteeing zero downtime."
  }
];

const LANDMARKS = [
  {
    year: "2026",
    title: "ONGC Navratri & JMCL Sports Arena",
    location: "Malaviya Cricket Ground & VIVENZA, Ahmedabad",
    scope: "Executed a flagship 9-night Navratri Garba festival with automated QR e-pass entry alongside complete stadium tournament branding."
  },
  {
    year: "2025",
    title: "Tech Expo Gujarat Retreat & Digital Scale",
    location: "Neonz Resort & Club, Gujarat",
    scope: "Turnkey venue transformation, keynote stage fabrication, sponsor pavilions, and enterprise SaaS analytics interfaces."
  },
  {
    year: "2024",
    title: "IOvista & Webnet Solutions Summits",
    location: "Madhuban Resort & Ahmedabad",
    scope: "Delivered comprehensive annual corporate summits, high-impact keynote stage architecture, and executive attendee experiences."
  },
  {
    year: "2023",
    title: "Siddhashram UK Navratri Festival",
    location: "United Kingdom",
    scope: "International cultural stage fabrication, traditional festive ambiance, and seamless cross-border production management."
  }
];

const PRINCIPLES = [
  {
    title: "In-House Workshop & Crew",
    subtitle: "Direct makers, no contractor markups",
    desc: "We operate our own physical fabrication workshop and design studio in Ahmedabad. Clients work directly with the architects and builders who physically erect the structures and write the code."
  },
  {
    title: "Dual Fluency: Physical + Digital",
    subtitle: "Bridging architectural stalls and modern software",
    desc: "Most agencies only design digital screens; most exhibition fabricators only cut timber. We master both, integrating live QR access systems, smart screens, and interactive tech into custom physical environments."
  },
  {
    title: "Zero-Delay Delivery Standard",
    subtitle: "Built, certified, and handed over early",
    desc: "Live events and product launches have immovable deadlines. Every booth, exhibition structure, and web platform is audited, safety-certified, and handed over hours before showtime."
  }
];

function AboutUsView({ onOpenContact, setActiveView }) {
  const [activeTab, setActiveTab] = o.useState(0);

  const handleInquiry = (subject) => {
    if (typeof onOpenContact === "function") {
      onOpenContact(subject || "General Agency Inquiry");
    } else {
      window.location.href = "/contact";
    }
  };

  return e.jsxs("div", {
    className: "bg-[#FCFAF8] text-charcoal font-sans antialiased min-h-screen selection:bg-crimson selection:text-white",
    id: "about-us-page-root",
    children: [
      e.jsx($, {
        route: "vision",
        customTitle: "About Us — Creative Agency & Spatial Fabrication | Reworkzone",
        customDescription: "Reworkzone is an Ahmedabad-based creative agency specializing in turnkey exhibition stalls, brand identities, custom React websites, and commercial cinema."
      }),

      /* =========================================================================
         SCREEN 1: HERO — Plain Category H1, Hard Facts, High-Impact Real Photo
         ========================================================================= */
      e.jsx("section", {
        className: "relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-stone-200/80 overflow-hidden",
        id: "about-hero",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-6 sm:px-12",
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
              children: [
                // Left Column: Copy & Value Proposition
                e.jsxs("div", {
                  className: "lg:col-span-7 space-y-6 text-left",
                  children: [
                    e.jsxs("div", {
                      className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/10 border border-crimson/20 text-crimson font-mono text-[11px] font-bold tracking-widest uppercase",
                      children: [
                        e.jsx("span", { className: "h-2 w-2 rounded-full bg-crimson animate-pulse" }),
                        "CREATIVE AGENCY & EVENT FABRICATION // AHMEDABAD"
                      ]
                    }),
                    e.jsx("h1", {
                      className: "font-sans font-black text-4xl sm:text-6xl lg:text-7xl text-charcoal tracking-tight uppercase leading-[0.96]",
                      children: "We Build Brands, Stages & Digital Platforms."
                    }),
                    e.jsx("p", {
                      className: "text-stone-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl",
                      children: "Reworkzone is an Ahmedabad-based studio of designers, engineers, and spatial fabricators. We translate corporate offerings into memorable brand identities, custom web products, and large-scale exhibition architecture across India and abroad."
                    }),
                    
                    // Hard facts row
                    e.jsxs("div", {
                      className: "grid grid-cols-3 gap-4 pt-4 pb-2 border-y border-stone-200/80 max-w-xl",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            e.jsx("span", { className: "block font-mono font-black text-2xl sm:text-3xl text-charcoal tracking-tight", children: "240+" }),
                            e.jsx("span", { className: "block font-mono text-[10px] sm:text-xs uppercase text-stone-500 font-semibold tracking-wider", children: "Executed Projects" })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            e.jsx("span", { className: "block font-mono font-black text-2xl sm:text-3xl text-crimson tracking-tight", children: "100%" }),
                            e.jsx("span", { className: "block font-mono text-[10px] sm:text-xs uppercase text-stone-500 font-semibold tracking-wider", children: "In-House Build" })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            e.jsx("span", { className: "block font-mono font-black text-2xl sm:text-3xl text-charcoal tracking-tight", children: "Gujarat" }),
                            e.jsx("span", { className: "block font-mono text-[10px] sm:text-xs uppercase text-stone-500 font-semibold tracking-wider", children: "Workshop Base" })
                          ]
                        })
                      ]
                    }),

                    // Action buttons
                    e.jsxs("div", {
                      className: "flex flex-wrap items-center gap-4 pt-2",
                      children: [
                        e.jsxs("button", {
                          onClick: () => handleInquiry("New Partnership Inquiry"),
                          className: "px-8 py-4 bg-crimson hover:bg-[#d92d1c] text-white text-xs font-bold font-mono uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center gap-2",
                          children: [
                            "Start a Project",
                            e.jsx(U, { className: "h-4 w-4" })
                          ]
                        }),
                        e.jsxs(C, {
                          to: "/portfolio",
                          className: "px-8 py-4 bg-white hover:bg-stone-50 border border-stone-300 text-charcoal text-xs font-bold font-mono uppercase tracking-widest rounded-xl transition-all hover:border-stone-400 cursor-pointer flex items-center gap-2",
                          children: [
                            "Examine Portfolio",
                            e.jsx(U, { className: "h-4 w-4 text-stone-400" })
                          ]
                        })
                      ]
                    })
                  ]
                }),

                // Right Column: Hero Real Photograph
                e.jsx("div", {
                  className: "lg:col-span-5",
                  children: e.jsxs("div", {
                    className: "relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-2xl bg-stone-900 group aspect-[4/5] sm:aspect-square lg:aspect-[4/5]",
                    children: [
                      e.jsx("img", {
                        src: "/Image/Gallery/ONGC/DSC_6410.jpg",
                        alt: "Live event fabrication by Reworkzone",
                        loading: "eager",
                        decoding: "async",
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                      }),
                      e.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none"
                      }),
                      e.jsxs("div", {
                        className: "absolute bottom-6 left-6 right-6 text-left text-white space-y-1.5 p-4 rounded-2xl bg-stone-950/75 backdrop-blur-md border border-white/10",
                        children: [
                          e.jsx("span", {
                            className: "text-[10px] font-mono uppercase tracking-widest text-crimson font-bold block",
                            children: "ON-GROUND PRODUCTION // AHMEDABAD"
                          }),
                          e.jsx("h4", {
                            className: "font-sans font-bold text-base sm:text-lg text-white leading-snug",
                            children: "ONGC Navratri 2026 Grand Stage Fabrication"
                          }),
                          e.jsx("p", {
                            className: "text-stone-300 text-xs font-normal leading-relaxed",
                            children: "9-Night festival architecture, entrance gate setups & QR verification at Malaviya Cricket Ground."
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      }),

      /* =========================================================================
         SECTION 2: CAPABILITIES — The 4 Core Disciplines With Real Photos
         ========================================================================= */
      e.jsx("section", {
        className: "py-24 sm:py-32 border-b border-stone-200/80",
        id: "capabilities",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-6 sm:px-12 space-y-16",
          children: [
            // Head row
            e.jsxs("div", {
              className: "flex flex-col md:flex-row md:items-end justify-between gap-6 text-left",
              children: [
                e.jsxs("div", {
                  className: "space-y-3 max-w-2xl",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-mono font-bold uppercase tracking-widest text-crimson block",
                      children: "// FOUR CORE DISCIPLINES"
                    }),
                    e.jsx("h2", {
                      className: "font-sans font-black text-3xl sm:text-5xl text-charcoal tracking-tight uppercase leading-none",
                      children: "What We Design & Build"
                    })
                  ]
                }),
                e.jsx("p", {
                  className: "text-stone-600 text-sm sm:text-base max-w-md font-normal leading-relaxed",
                  children: "We deliver full-cycle creative execution. Every deliverable is produced by our dedicated in-house departments."
                })
              ]
            }),

            // Grid of 4 disciplines
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-8 text-left",
              children: DISCIPLINES.map((item, idx) => e.jsxs(C, {
                key: item.num,
                to: item.link,
                className: "group bg-white rounded-3xl border border-stone-200/80 hover:border-crimson/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer",
                children: [
                  e.jsxs("div", {
                    className: "relative aspect-[16/10] overflow-hidden bg-stone-900",
                    children: [
                      e.jsx("img", {
                        src: item.image,
                        alt: item.title,
                        loading: "lazy",
                        decoding: "async",
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      }),
                      e.jsx("div", {
                        className: "absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-white font-mono text-[11px] font-bold tracking-widest uppercase",
                        children: item.num
                      }),
                      e.jsx("div", {
                        className: "absolute bottom-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-charcoal group-hover:bg-crimson group-hover:text-white transition-colors shadow-md",
                        children: e.jsx(U, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "p-8 space-y-4 flex-1 flex flex-col justify-between",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx("span", {
                            className: "font-mono text-[10px] font-bold text-stone-400 uppercase tracking-widest block",
                            children: item.subtitle
                          }),
                          e.jsx("h3", {
                            className: "font-sans font-black text-2xl text-charcoal group-hover:text-crimson transition-colors uppercase tracking-tight",
                            children: item.title
                          }),
                          e.jsx("p", {
                            className: "text-stone-600 text-sm sm:text-base leading-relaxed font-normal pt-1",
                            children: item.description
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "pt-4 border-t border-stone-100 flex items-center gap-2 text-stone-500 font-mono text-xs font-semibold",
                        children: [
                          e.jsx(G, { className: "h-3.5 w-3.5 text-crimson shrink-0" }),
                          e.jsx("span", { className: "truncate", children: item.proof })
                        ]
                      })
                    ]
                  })
                ]
              }))
            })
          ]
        })
      }),

      /* =========================================================================
         SECTION 3: PRODUCTION METHODOLOGY — How We Work
         ========================================================================= */
      e.jsx("section", {
        className: "py-24 sm:py-32 bg-stone-950 text-white relative overflow-hidden",
        id: "production-methodology",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-6 sm:px-12 relative z-10 space-y-16",
          children: [
            e.jsxs("div", {
              className: "max-w-2xl text-left space-y-3",
              children: [
                e.jsx("span", {
                  className: "text-xs font-mono font-bold uppercase tracking-widest text-crimson block",
                  children: "// PRODUCTION FRAMEWORK"
                }),
                e.jsx("h2", {
                  className: "font-sans font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-none",
                  children: "Engineered From Concept to Floor."
                }),
                e.jsx("p", {
                  className: "text-stone-400 text-sm sm:text-base leading-relaxed font-normal pt-2",
                  children: "Whether constructing an exhibition pavilion or programming a custom web app, our linear four-stage framework prevents bottlenecks and guarantees on-time delivery."
                })
              ]
            }),

            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left",
              children: WORKFLOW_STEPS.map((step) => e.jsxs("div", {
                key: step.step,
                className: "p-8 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-crimson/50 transition-all duration-300 flex flex-col justify-between space-y-6 group",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between border-b border-stone-800 pb-4",
                    children: [
                      e.jsx("span", {
                        className: "font-mono font-black text-3xl text-crimson tracking-tight",
                        children: step.step
                      }),
                      e.jsx("span", {
                        className: "text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold",
                        children: step.phase
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "space-y-2 flex-1",
                    children: [
                      e.jsx("h3", {
                        className: "font-sans font-extrabold text-lg text-white group-hover:text-crimson transition-colors",
                        children: step.title
                      }),
                      e.jsx("p", {
                        className: "text-stone-400 text-xs sm:text-sm leading-relaxed font-normal",
                        children: step.desc
                      })
                    ]
                  })
                ]
              }))
            })
          ]
        })
      }),

      /* =========================================================================
         SECTION 4: REAL LANDMARKS & TIMELINE
         ========================================================================= */
      e.jsx("section", {
        className: "py-24 sm:py-32 border-b border-stone-200/80",
        id: "chronicles",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-6 sm:px-12 space-y-16",
          children: [
            e.jsxs("div", {
              className: "flex flex-col md:flex-row md:items-end justify-between gap-6 text-left",
              children: [
                e.jsxs("div", {
                  className: "space-y-3 max-w-2xl",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-mono font-bold uppercase tracking-widest text-crimson block",
                      children: "// DOCUMENTED MILESTONES"
                    }),
                    e.jsx("h2", {
                      className: "font-sans font-black text-3xl sm:text-5xl text-charcoal tracking-tight uppercase leading-none",
                      children: "Key Agency Landmarks"
                    })
                  ]
                }),
                e.jsx("p", {
                  className: "text-stone-600 text-sm sm:text-base max-w-md font-normal leading-relaxed",
                  children: "Our track record spans cultural festivals, sporting arenas, corporate conventions, and digital platforms."
                })
              ]
            }),

            e.jsx("div", {
              className: "space-y-4 text-left",
              children: LANDMARKS.map((lm, idx) => e.jsxs("div", {
                key: lm.year + idx,
                className: "p-8 rounded-3xl bg-white border border-stone-200/80 hover:border-stone-400 hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center",
                children: [
                  e.jsx("div", {
                    className: "lg:col-span-2",
                    children: e.jsx("span", {
                      className: "font-mono font-black text-3xl sm:text-4xl text-charcoal block",
                      children: lm.year
                    })
                  }),
                  e.jsxs("div", {
                    className: "lg:col-span-6 space-y-1",
                    children: [
                      e.jsx("h3", {
                        className: "font-sans font-black text-xl sm:text-2xl text-charcoal uppercase tracking-tight",
                        children: lm.title
                      }),
                      e.jsx("p", {
                        className: "font-serif italic text-sm text-stone-500",
                        children: lm.location
                      })
                    ]
                  }),
                  e.jsx("div", {
                    className: "lg:col-span-4",
                    children: e.jsx("p", {
                      className: "text-stone-600 text-xs sm:text-sm leading-relaxed font-normal",
                      children: lm.scope
                    })
                  })
                ]
              }))
            })
          ]
        })
      }),

      /* =========================================================================
         SECTION 5: THE REWORKZONE DIFFERENCE — Concrete Advantages
         ========================================================================= */
      e.jsx("section", {
        className: "py-24 sm:py-32 border-b border-stone-200/80 bg-stone-50/60",
        id: "principles",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-6 sm:px-12 space-y-16",
          children: [
            e.jsxs("div", {
              className: "max-w-2xl text-left space-y-3",
              children: [
                e.jsx("span", {
                  className: "text-xs font-mono font-bold uppercase tracking-widest text-crimson block",
                  children: "// THE REWORKZONE ADVANTAGE"
                }),
                e.jsx("h2", {
                  className: "font-sans font-black text-3xl sm:text-5xl text-charcoal tracking-tight uppercase leading-none",
                  children: "Why Clients Choose Us."
                }),
                e.jsx("p", {
                  className: "text-stone-600 text-sm sm:text-base leading-relaxed font-normal pt-2",
                  children: "We combine the hands-on engineering of a physical fabrication house with the design polish of a modern software studio."
                })
              ]
            }),

            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-left",
              children: PRINCIPLES.map((pr) => e.jsxs("div", {
                key: pr.title,
                className: "p-8 rounded-3xl bg-white border border-stone-200/80 hover:border-crimson/40 hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between",
                children: [
                  e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsx("div", {
                        className: "h-11 w-11 rounded-2xl bg-crimson/10 text-crimson flex items-center justify-center font-mono font-bold",
                        children: e.jsx(G, { className: "h-5 w-5" })
                      }),
                      e.jsx("h3", {
                        className: "font-sans font-black text-xl text-charcoal uppercase tracking-tight pt-2",
                        children: pr.title
                      }),
                      e.jsx("p", {
                        className: "font-mono text-xs text-crimson font-semibold uppercase tracking-wider",
                        children: pr.subtitle
                      }),
                      e.jsx("p", {
                        className: "text-stone-600 text-sm leading-relaxed font-normal pt-1",
                        children: pr.desc
                      })
                    ]
                  })
                ]
              }))
            })
          ]
        })
      }),

      /* =========================================================================
         SECTION 6: FINAL EDITORIAL CLOSE / CTA
         ========================================================================= */
      e.jsx("section", {
        className: "py-24 sm:py-32",
        id: "about-close",
        children: e.jsx("div", {
          className: "mx-auto max-w-7xl px-6 sm:px-12",
          children: e.jsxs("div", {
            className: "p-10 sm:p-16 lg:p-20 rounded-3xl bg-stone-950 text-white relative overflow-hidden text-left space-y-8",
            children: [
              e.jsx("div", {
                className: "absolute top-0 right-0 w-96 h-96 bg-crimson/15 rounded-full blur-[120px] pointer-events-none"
              }),
              e.jsxs("div", {
                className: "relative z-10 space-y-4 max-w-3xl",
                children: [
                  e.jsx("span", {
                    className: "text-xs font-mono font-bold uppercase tracking-widest text-crimson block",
                    children: "// START A COLLABORATION"
                  }),
                  e.jsx("h2", {
                    className: "font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.96]",
                    children: "Ready to Build Your Next Landmark?"
                  }),
                  e.jsx("p", {
                    className: "text-stone-300 text-base sm:text-lg leading-relaxed font-normal pt-2",
                    children: "Whether you are designing a high-converting exhibition pavilion, developing custom web architecture, or revamping your enterprise brand identity, our Ahmedabad studio is ready to build it."
                  })
                ]
              }),
              e.jsxs("div", {
                className: "relative z-10 flex flex-wrap items-center gap-4 pt-4",
                children: [
                  e.jsxs("button", {
                    onClick: () => handleInquiry("General Collaboration Inquiry"),
                    className: "px-8 py-4.5 bg-crimson hover:bg-[#d92d1c] text-white text-xs font-bold font-mono uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center gap-2",
                    children: [
                      "Contact Our Studio",
                      e.jsx(U, { className: "h-4 w-4" })
                    ]
                  }),
                  e.jsxs(C, {
                    to: "/portfolio",
                    className: "px-8 py-4.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold font-mono uppercase tracking-widest rounded-xl transition-all cursor-pointer flex items-center gap-2",
                    children: [
                      "Explore Completed Work",
                      e.jsx(U, { className: "h-4 w-4 text-stone-300" })
                    ]
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
