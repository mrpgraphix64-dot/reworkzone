// server.ts
import express from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import multer from "multer";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// src/data.ts
var JOURNAL_ARTICLES = [
  {
    id: "why-strong-brands-are-built",
    title: "WHY STRONG BRANDS ARE BUILT, NOT JUST DESIGNED",
    category: "BRAND STRATEGY",
    excerpt: "A practical look at how positioning, identity and consistency turn a business into a recognizable brand.",
    date: "AUGUST 28, 2026",
    readTime: "5 MIN READ",
    image: "/Image/Gallery/Brand-Activations/brand-activation-identity-display-07.webp",
    author: "Rework Strategy Team",
    tags: ["BRANDING", "STRATEGY", "POSITIONING"],
    content: `
# Why Strong Brands Are Built, Not Just Designed

Many organizations confuse visual identity with brand strategy. While a logo or color palette serves as an immediate identifier, a true brand is built over time through strategic positioning, operational consistency, and authentic customer experiences.

## The Foundations of Brand Architecture

### 1. Positioning Precedes Visuals
Before opening design tools, a brand must define its distinct place in the market. What specific problem do you solve better than anyone else? Who is your ideal customer, and what values drive their purchasing decisions? Without clear positioning, even the most beautiful design becomes visual noise.

### 2. Consistency Is Credibility
Every touchpoint\u2014from a digital interface or printed collateral to an exhibition booth or executive presentation\u2014must communicate with a unified voice. Inconsistency creates friction in the customer journey, whereas strategic repetition builds trust and enterprise value.

### 3. Turning Identity Into Brand Equity
A strong brand enables a business to transcend price competition. When customers resonate with your core narrative and experience flawless execution at every touchpoint, your brand transforms from an operational name into a durable business asset.
    `
  },
  {
    id: "what-makes-digital-experience-effortless",
    title: "WHAT MAKES A DIGITAL EXPERIENCE FEEL EFFORTLESS?",
    category: "DIGITAL EXPERIENCE",
    excerpt: "From interface decisions to performance, explore the details that make websites and digital products easier to use and harder to forget.",
    date: "AUGUST 15, 2026",
    readTime: "6 MIN READ",
    image: "/Image/Web1.webp",
    author: "Rework Digital Team",
    tags: ["DIGITAL", "DESIGN", "UI/UX"],
    content: `
# What Makes a Digital Experience Feel Effortless?

An effortless digital experience is rarely accidental. It is the result of relentless refinement, strategic interface hierarchy, and technical optimization designed to remove cognitive friction between the user and their goal.

## Key Pillars of Seamless Digital Design

### 1. Clarity Over Complexity
The primary goal of digital design is to guide users smoothly toward value. Intuitive layouts, intentional whitespace, and precise typography allow visitors to process information effortlessly without visual fatigue.

### 2. Performance as a Design Feature
Speed and responsiveness are fundamental design requirements. A beautiful layout that lags during scroll or takes seconds to load breaks user trust immediately. Sub-second response times, optimized media, and fluid transitions create an impression of precision and quality.

### 3. Micro-Interactions and Tactile Feedback
Subtle visual cues\u2014such as refined hover states, responsive touch targets, and natural scroll behaviors\u2014reassure users that the interface is responsive to their intent.
    `
  },
  {
    id: "from-booth-to-brand-experience",
    title: "FROM BOOTH TO BRAND EXPERIENCE: DESIGNING EVENTS THAT GET REMEMBERED",
    category: "EVENTS & EXPERIENCES",
    excerpt: "How thoughtful spatial design, storytelling and interaction can transform an exhibition presence into a meaningful brand experience.",
    date: "JULY 30, 2026",
    readTime: "5 MIN READ",
    image: "/Image/Gallery/Exhibitions/exhibition-booth-design-reworkzone-26.webp",
    author: "Rework Experiential Team",
    tags: ["EVENTS", "SPATIAL DESIGN", "EXHIBITIONS"],
    content: `
# From Booth to Brand Experience: Designing Events That Get Remembered

In crowded trade shows and corporate expos, standard modular booths often blur into the background. To capture meaningful attention, organizations must approach event environments not as temporary displays, but as three-dimensional brand installations.

## Transforming Exhibition Spaces

### 1. Spatial Flow and Architecture
Effective spatial design guides attendees naturally into your brand environment. Open sightlines, strategic lighting, and clear zoning for demonstrations and private discussions create an inviting, professional atmosphere.

### 2. Tactile Storytelling
Physical environments engage senses that digital screens cannot match. Materials, finishes, structural scale, and ambient lighting reinforce your brand positioning before a conversation even begins.

### 3. Integrating Digital Interaction
Combining physical structures with responsive digital displays, live tech demos, and interactive storytelling deepens visitor engagement and leaves a lasting impression.
    `
  },
  {
    id: "when-should-a-business-rebrand",
    title: "WHEN SHOULD A BUSINESS REBRAND?",
    category: "BRANDING & BUSINESS",
    excerpt: "The signs that your existing identity may be holding growth back\u2014and how to approach a rebrand without losing what already works.",
    date: "JULY 12, 2026",
    readTime: "5 MIN READ",
    image: "/Image/Gallery/Brand-Activations/brand-activation-identity-display-08.webp",
    author: "Rework Editorial Team",
    tags: ["BRANDING", "STRATEGY", "REBRANDING"],
    content: `
# When Should a Business Rebrand?

A rebrand is one of the most strategic investments an established organization can make. However, it should never be pursued merely for cosmetic novelty. A successful rebrand solves a fundamental alignment problem between where a company is heading and how it is perceived.

## Strategic Triggers for a Rebrand

### 1. Market and Product Evolution
When a business expands into new markets, introduces higher-tier corporate offerings, or shifts its core business model, legacy visual identities often fail to reflect the new scale and sophistication of the enterprise.

### 2. Loss of Differentiation
If your visual identity looks indistinguishable from competitors in your sector, your brand loses pricing leverage and market authority. A targeted rebrand restores distinctiveness.

### 3. Preserving Core Brand Equity
Rebranding does not mean throwing away established equity. The goal is to modernize and strengthen what already works while shedding outdated elements that hold growth back.
    `
  },
  {
    id: "elements-modern-business-website",
    title: "7 Elements Every Modern Business Website Must Have",
    category: "DIGITAL",
    excerpt: "Your website is often the first impression customers have of your business. Discover the essential features every high-performing website needs to attract visitors and convert them into customers.",
    date: "JUNE 28, 2026",
    readTime: "6 MIN READ",
    image: "/Image/Web2jpg.jpg",
    author: "Rework Digital Team",
    tags: ["DIGITAL", "WEB DESIGN", "UI/UX"],
    content: `
# 7 Elements Every Modern Business Website Must Have

Your website is often the first impression customers have of your business. In a fast-moving market, a generic website layout is equivalent to an empty storefront. To convert modern visitors, your platform must be an engineered engine of trust.

## Core Performance Pillars
- **Mobile responsiveness**: Adapting seamlessly to all viewports\u2014from extra-wide monitors down to compact smartphones.
- **Fast loading speed**: Visitors abandon slow pages. Every millisecond of delay directly reduces conversion rates.
- **SEO optimization**: Building clean HTML semantic hierarchies so search engines can easily index and list your brand.
- **User experience (UI/UX)**: Intuitive navigation paths that direct users to value without visual noise.
    `
  },
  {
    id: "creative-design-business-growth",
    title: "The Role of Creative Design in Business Growth",
    category: "DESIGN",
    excerpt: "Great design doesn't just look good\u2014it communicates, builds trust, and influences decisions. Learn how strategic creative design helps businesses stand out in competitive markets.",
    date: "JUNE 15, 2026",
    readTime: "4 MIN READ",
    image: "/Image/Gallery/Event-Design/3d-event-spatial-design-concept-15.webp",
    author: "Rework Creative Team",
    tags: ["DESIGN", "CREATIVE", "BRANDING"],
    content: `
# The Role of Creative Design in Business Growth

Great design doesn't just look good\u2014it communicates, builds trust, and directly drives decisions. In saturated markets, businesses that invest in custom creative assets capture more attention and establish a premium reputation.

## Connecting Creativity with Revenue
- **Visual communication**: Presenting complex values, products, and ideas through clean layouts, infographics, and elegant typography.
- **Brand recognition**: Building an uncopyable aesthetic palette that is immediately recognizable across print, packaging, and digital interfaces.
    `
  }
];
var SERVICES_DATA = [
  {
    id: "event-mgmt",
    num: "01",
    title: "Event Management",
    subtitle: "Spatial Exhibitions & Fabrication",
    heroImage: "/Image/event-banner.webp",
    description: "Bespoke corporate exhibition stall design, custom 3D spatial planning, and high-impact stage fabrication execution.",
    details: [
      "Bespoke Exhibition Stall Design & 3D Planning",
      "Custom Stalls Fabrication & Venue Setup",
      "Interactive Expotech & AR/VR Booths",
      "Government Stage and Pavilion Logistics",
      "Corporate Event Concept & Production",
      "Seamless Multi-Day Management & Crew"
    ],
    benefits: [
      "Stand out in congested tradeshows with landmark modular architecture.",
      "Attract massive footfall with custom technology-infused spatial stages.",
      "Flawless end-to-end event setup letting you focus entirely on sales."
    ],
    process: [
      { step: "01", title: "3D Spatial Planning", desc: "Modeling custom structural pavilions in CAD with lighting and screen overlays." },
      { step: "02", title: "Engineering & Material Selection", desc: "Validating build safety and choosing premium tactile materials (finished woods, metals)." },
      { step: "03", title: "On-site Fabrication", desc: "Erecting structures on the exhibition floor with precise alignment." },
      { step: "04", title: "Showtime Orchestration", desc: "Managing AV systems, interactive panels, and logistics during event days." }
    ],
    faqs: [
      { q: "Do you manage the approval paperwork with the venue?", a: "Yes, we take care of all safety validations, structural approvals, electrical planning, and layout clearance forms with the venue organizers." }
    ],
    showcaseEvents: [
      {
        id: "jmcl-2026",
        title: "JMCL Cricket Tournament 2026",
        location: "VIVENZA by Gopi Farm",
        scope: "Sports Event Setup & Brand Activation",
        iconType: "trophy"
      },
      {
        id: "opai-2026",
        title: "OPAI 2026",
        location: "Pandit Deendayal Upadhyay Auditorium",
        scope: "Auditorium Event Setup & Execution",
        iconType: "auditorium"
      },
      {
        id: "laracon-2526",
        title: "Laracon 2025 & 2026",
        location: "GMDC, Ahmedabad",
        scope: "Event Infrastructure Planning & Execution",
        iconType: "stage"
      },
      {
        id: "gov-expo-2026",
        title: "Government Exhibition 2026",
        location: "Gujarat Agro Industries Corporation",
        scope: "Government Booth Design & Exhibition Execution",
        iconType: "gov"
      },
      {
        id: "tech-retreat-2025",
        title: "Tech Expo Retreat 2025",
        location: "Neonz Resort & Club",
        scope: "Venue Transformation & Live Execution",
        iconType: "resort"
      },
      {
        id: "iovista-2024",
        title: "IOvista 2024 (Annual Event)",
        location: "Madhuban Resort",
        scope: "End-to-End Event Setup & Execution",
        iconType: "annual"
      },
      {
        id: "webnet-2024",
        title: "Webnet Solution Event 2024",
        location: "Ahmedabad",
        scope: "Corporate Event Setup & Execution",
        iconType: "corporate"
      },
      {
        id: "siddhashram-2023",
        title: "Siddhashram UK Navratri 2023",
        location: "United Kingdom",
        scope: "Cultural Event Setup & Execution",
        iconType: "cultural"
      }
    ],
    caseStudy: {
      title: "Exhibitions & Expos",
      description: "Designing and fabricating high-impact 3D stalls and managing brand activations for major international trade exhibitions.",
      image: "/Image/Gallery/Exhibitions/exhibition-booth-design-reworkzone-26.webp",
      metrics: "3x Footfall Increase vs Booth Averages"
    }
  },
  {
    id: "ui-ux",
    num: "02",
    title: "Creative Design",
    subtitle: "Premium Digital Interfaces",
    heroImage: "/Image/design-banner.webp",
    description: "Bespoke interface designs and wireframes focused on fluid interactive experiences, micro-animations, and verified AI user-flow testing.",
    details: [
      "B2B SaaS Portal & Dashboard Interface Design",
      "High-Converting Landing Page Frameworks",
      "Interactive Prototypes & Wireframing",
      "Fluid Micro-interaction Design Schema",
      "AI-Powered Predictive Eyetracking & Heatmaps",
      "Comprehensive Design Systems (Figma Native)"
    ],
    benefits: [
      "Boost platform trust with a design that feels like Apple and Stripe.",
      "Reduce user friction and increase platform engagement rates.",
      "Deliver developer-ready Figma component structures for instant implementation."
    ],
    process: [
      { step: "01", title: "User Research & Mapping", desc: "Mapping user journeys and utilizing predictive AI heatmaps to locate friction zones." },
      { step: "02", title: "Wireframe Structuring", desc: "Laying out high-level content structure and responsive container grids." },
      { step: "03", title: "Visual Theme Synthesis", desc: "Applying luxurious typography, smooth color systems, and dark/light modes." },
      { step: "04", title: "Figma Delivery", desc: "Assembling documented developer-friendly component libraries." }
    ],
    faqs: [
      { q: "What is the role of AI in your UI/UX testing?", a: "We run wireframes through eye-tracking AI models that simulate hundreds of user sessions in seconds, showing where attention is held and optimizing layout hierarchy before writing code." }
    ],
    caseStudy: {
      title: "SaaS Platform Redesign",
      description: "Rebuilding a complex enterprise analytics console into a simplified, luxury-grade, high-converting product dashboard.",
      image: "/Image/Web1.webp",
      metrics: "42% User Friction Reduction"
    }
  },
  {
    id: "web-dev",
    num: "03",
    title: "Website Development",
    subtitle: "Custom High-Performance Code",
    heroImage: "/Image/web-banner.webp",
    description: "Custom React, Next.js, and Vite web applications crafted for blistering performance, flawless responsive grids, and clean visual layouts.",
    details: [
      "Bespoke React/Next.js/Vite Web Apps",
      "Stunning Web Animations & Page Transitions",
      "API Orchestration & Headless Architectures",
      "Ultra-optimized Loading Speed (Lighthouse 95+)",
      "CMS Panel Custom Integrations",
      "Enterprise-grade Security & CSP Protocols"
    ],
    benefits: [
      "blazing-fast load times that boost SEO rankings and visitor retention.",
      "Clean, custom, modular codebases free of heavy plugins or template bloat.",
      "Perfect responsive fidelity from mobile screens up to 4K displays."
    ],
    process: [
      { step: "01", title: "Architecture Planning", desc: "Selecting appropriate frameworks (Vite/Next) and configuring development parameters." },
      { step: "02", title: "Core UI Implementation", desc: "Translating design mockups into semantic, highly-performing code components." },
      { step: "03", title: "Animations Tuning", desc: "Integrating GSAP or Motion animations, verifying 60FPS fluid movements." },
      { step: "04", title: "SEO & Performance Pre-flight", desc: "Optimizing media assets, configuring headers, and testing security parameters." }
    ],
    faqs: [
      { q: "Do you use WordPress or generic builders?", a: "No, we build completely custom web applications using modern javascript architectures (React, Vite, Next) to guarantee elite loading speeds and custom designs." }
    ],
    caseStudy: {
      title: "Digital Architectures",
      description: "Designing and building high-converting corporate portals and seamless client dashboards with native responsiveness.",
      image: "/Image/Web2jpg.jpg",
      metrics: "0.4s Interactive Loading Speed"
    }
  },
  {
    id: "branding",
    num: "04",
    title: "Branding & Strategy",
    subtitle: "High-End Brand Mythology",
    heroImage: "/Image/brand-banner.webp",
    description: "We craft comprehensive brand visual identities, custom core values, and corporate styling schemas powered by strategic AI market insights.",
    details: [
      "Visual Identity & Logo Engineering",
      "Corporate Design Styling & Guidelines",
      "Aesthetic Brand Positioning Strategy",
      "Custom Brand Mythology & Typography",
      "AI-Driven Market & Competitor Analysis",
      "Unified Touchpoint Collaterals"
    ],
    benefits: [
      "Establish premium market positioning that outshines generic templates.",
      "Create emotional resonance with your exact enterprise clientele.",
      "Future-proof multi-channel visual guidelines built to scale.",
      "Accelerate branding discovery cycle times through automated AI market clustering."
    ],
    process: [
      { step: "01", title: "Discovery & DNA Extraction", desc: "We probe the core vision of the enterprise and extract the strategic narrative spine." },
      { step: "02", title: "Aesthetic Mapping", desc: "Drafting visual concepts, custom typographic pairings, and premium color palettes." },
      { step: "03", title: "System Synthesis", desc: "Crafting the logo, secondary visual marks, assets, and comprehensive styleguides." },
      { step: "04", title: "Prestige Rollout", desc: "Delivering unified multi-channel assets designed to command premium respect." }
    ],
    faqs: [
      { q: "What is included in a complete branding package?", a: "Our package includes strategic positioning, primary and secondary logo marks, custom typographic hierarchy, a curated color library, office/stationery templates, and a digital style manual." },
      { q: "How does AI help in the branding process?", a: "We use proprietary AI models to parse global industry registries, identifying layout trends, semantic gaps, and visual white spaces to ensure your brand stands unique." }
    ],
    caseStudy: {
      title: "Identity Evolution",
      description: "Developing a unified brand architecture, logo system, and cohesive design guidelines for high-growth enterprises.",
      image: "/Image/Gallery/Brand-Activations/brand-activation-identity-display-07.webp",
      metrics: "280% Brand Recall Increase"
    }
  },
  {
    id: "film-prod",
    num: "05",
    title: "Film Production",
    subtitle: "Cinematic Visual Manifesto",
    heroImage: "/Image/film-banner.webp",
    description: "In-house cinematic film shoots, drone cinematography, CGI layouts, and motion graphics designed to showcase enterprise size and vision.",
    details: [
      "Corporate Brand Manifesto Films",
      "Drone Shoots & Large-Scale Facility Cinematography",
      "Product Showcases & Explainer Motion Videos",
      "TV Commercial (TVC) Screenplays & Shoots",
      "VFX, CGI, & 3D Render Animations",
      "Professional Audio Scoring & Sound Engineering"
    ],
    benefits: [
      "Validate your scale and quality with movie-grade visual composition.",
      "Explain dense technical solutions in minutes using polished 3D motion graphs.",
      "Elevate presentations with bespoke audio design and crisp cinematography."
    ],
    process: [
      { step: "01", title: "Script & Storyboarding", desc: "Drafting narrational pacing, shot layouts, and scene flows." },
      { step: "02", title: "Cinematography Phase", desc: "Directing on-site shoots utilizing professional cinema cameras and drone crews." },
      { step: "03", title: "VFX & CGI Addition", desc: "Developing custom 3D animations and visual layout elements in-house." },
      { step: "04", title: "Master Post-Production", desc: "Assembling elements with sound designs, color-grading, and rendering." }
    ],
    faqs: [
      { q: "What is the standard timeline for a brand film?", a: "High-production brand films usually require 4 to 8 weeks, covering comprehensive scripting, editing, coloring, and final rendering." }
    ],
    caseStudy: {
      title: "Storytelling in Motion",
      description: "Producing a high-concept corporate video combining aerial drone footage with motion graphics.",
      image: "/Image/Gallery/Events/20251220_153727.webp",
      metrics: "2M+ Cinematic Video Views"
    }
  },
  {
    id: "digital-marketing",
    num: "06",
    title: "Digital Marketing",
    subtitle: "Performance Distribution Systems",
    heroImage: "/Image/digital-marketing-banner.webp",
    heroAccent: "GROWTH",
    description: "Data-driven digital strategies that turn attention into measurable growth \u2014 across search, paid media, content, social and performance marketing.",
    details: [
      "Search Engine Optimization (SEO & Content Strategy)",
      "Meta Ad Campaigns & Google Search Ads",
      "LinkedIn Account-Based B2B Campaigns",
      "Automated Lead Nurturing Email Frameworks",
      "Marketing Analytics & Heatmap Implementations",
      "Conversion Rate Optimization (CRO)"
    ],
    benefits: [
      "Generate a reliable inflow of qualified B2B leads.",
      "Elevate domain authority to capture search queries before competitors.",
      "Detailed analytical dashboards providing absolute clarity on budget return."
    ],
    process: [
      { step: "01", title: "Audit & Analysis", desc: "Auditing keyword structures, link profiles, and competitor traffic streams." },
      { step: "02", title: "Asset Development", desc: "Creating landing page copies, ad graphics, and high-value blogs." },
      { step: "03", title: "Funnel Launch", desc: "Deploying targeted B2B Google/Meta/LinkedIn ad structures." },
      { step: "04", title: "Analytics Review", desc: "Iterating lead forms and copy variations based on traffic analytics." }
    ],
    faqs: [
      { q: "How long does it take for SEO to show results?", a: "Enterprise SEO strategies generally display notable organic traffic gains within 3 to 6 months of structural optimization." }
    ],
    caseStudy: {
      title: "Integrated Performance",
      description: "Executing high-converting digital advertising campaigns and SEO strategies to scale qualified leads.",
      image: "/Image/Gallery/Marketing-Events/marketing-event-brand-activation-05.webp",
      metrics: "340% Organic Lead Expansion"
    }
  },
  {
    id: "graphic-design",
    num: "07",
    title: "Graphic Design",
    subtitle: "Avant-Garde Art Direction",
    description: "Elite layout designs, custom corporate publishing, and physical collateral designs combining human artistry with AI asset enhancement.",
    details: [
      "High-End Corporate Brochures",
      "Company Profile Design & Publishing",
      "Interactive Annual Reports Layouts",
      "Generative AI Enhanced Key Visuals",
      "Print Ads & Premium Signage Graphics",
      "Exhibition Graphic Backdrops"
    ],
    benefits: [
      "Present your business profile with Awwwards-level graphic craftsmanship.",
      "Blend hyper-detailed generated elements with clean typographic spacing.",
      "Consistent design styling across digital presentation layers and physical prints."
    ],
    process: [
      { step: "01", title: "Creative Briefing", desc: "Understanding your narrative goals, target context, and structural bounds." },
      { step: "02", title: "Conceptual Layouts", desc: "Creating structural grid mockups and positioning text assets." },
      { step: "03", title: "Asset Integration", desc: "Enhancing layouts with customized AI key-visual assets and high-end vectors." },
      { step: "04", title: "Pre-flight Check", desc: "Rigorous layout quality checks and print-ready prep." }
    ],
    faqs: [
      { q: "Do you manage printing services?", a: "Yes, we collaborate with elite print houses globally to ensure our layouts are fabricated with luxury textures, finishes, and paper selections." }
    ],
    caseStudy: {
      title: "Print Precision",
      description: "Designing and publishing an elite company catalog and outdoor signage systems for major brand rollouts.",
      image: "/Image/Gallery/Event-Design/3d-event-spatial-design-concept-15.webp",
      metrics: "150k+ Catalogues Distributed Globally"
    }
  },
  {
    id: "app-dev",
    num: "08",
    title: "Mobile App Development",
    subtitle: "Sleek Native & Hybrid Apps",
    description: "We build custom native and hybrid mobile applications for iOS & Android that extend your business capabilities. Combining responsive UI architectures, secure biometric gateways, offline-capable databases, and lightweight local AI agent integrations to deliver a seamless pocket experience.",
    details: [
      "Native iOS & Android App Engineering",
      "Cross-Platform Hybrid SDKs (React Native)",
      "Local CoreML / TensorFlow Mobile AI Modules",
      "Biometric Secure Integrations",
      "Smooth Touch Gesture Interactive Animations",
      "App Store Optimization & Submissions"
    ],
    benefits: [
      "Bring your enterprise capabilities directly into your client's pocket.",
      "Integrate offline-capable local AI features directly on mobile chips.",
      "Slick responsive touch interactions that mirror premium hardware feel."
    ],
    process: [
      { step: "01", title: "Interface Blueprinting", desc: "Structuring mobile views for touch dynamics and user accessibility." },
      { step: "02", title: "Engine Configuration", desc: "Setting up cross-platform modules and connecting secure API endpoints." },
      { step: "03", title: "AI Integration", desc: "Deploying lightweight local models for voice or visual analysis." },
      { step: "04", title: "Console Submission", desc: "Iterating internal beta phases and releasing to Apple and Google Stores." }
    ],
    faqs: [
      { q: "Can you implement offline capabilities?", a: "Yes, we structure database synchronization so that user data is kept secure on device and syncs seamlessly when connection is established." }
    ],
    caseStudy: {
      title: "Executive Portal Mobile App",
      description: "Designing and coding a secure hybrid mobile app with native biometrics and real-time report analysis tools.",
      image: "/Image/Web3.webp",
      metrics: "4.9 App Store Rating"
    }
  },
  {
    id: "advertising",
    num: "09",
    title: "Advertising",
    subtitle: "Strategic Creative Campaigns",
    description: "High-concept marketing campaigns and copy across print, digital, and television channels, built using AI predictive click data.",
    details: [
      "Cross-Channel Creative Ad Strategy",
      "SEO Copywriting & Headline Generation",
      "High-Conversion Video Ad Scripting",
      "Predictive Campaign Ad Placement",
      "Corporate Signage and Billboard Campaigns",
      "ROI-focused Ad Funnel Orchestration"
    ],
    benefits: [
      "Launch campaigns with message angles mathematically optimized for enterprise segments.",
      "Unified brand presence across digital feeds, print pages, and highways.",
      "Maximize media budgets with intelligent predictive audience modeling."
    ],
    process: [
      { step: "01", title: "Target Insight Gathering", desc: "Analyzing consumer language models to find critical emotional triggers." },
      { step: "02", title: "Concept Formulation", desc: "Developing core hooks, headlines, and visual advertising directives." },
      { step: "03", title: "Campaign Assembly", desc: "Deploying ad variants across physical billboards and digital channels." },
      { step: "04", title: "Performance Optimization", desc: "Analyzing click patterns and adjusting placements for higher conversions." }
    ],
    faqs: [
      { q: "Do you handle the actual media buying?", a: "Yes, we orchestrate and purchase programmatic ads, social media placements, and premium physical billboard spaces." }
    ],
    caseStudy: {
      title: "Global Product Launch Campaign",
      description: "Deploying an omni-channel ad framework for a brand roll-out combining video ads, print inserts, and targeted programmatic banners.",
      image: "/Image/Gallery/Brand-Activations/brand-activation-identity-display-06.webp",
      metrics: "3.4x Campaign ROI Scale"
    }
  },
  {
    id: "ai-automation",
    num: "10",
    title: "AI Automation",
    subtitle: "Sovereign Digital Infrastructure",
    description: "Designing and launching custom LLM integrations, automatic workflow triggers, data handlers, and smart agents to maximize operational speed.",
    details: [
      "Custom LLM API (OpenAI/Anthropic/Gemini) Integrations",
      "Automatic Operations Workflows (Make/Zapier/N8N)",
      "Customer Support Chatbots with Vector DBs (RAG)",
      "Document Parsing & Auto-Extraction Agents",
      "Business Intelligence Data Pipelines",
      "Sovereign Automation Infrastructure Setup"
    ],
    benefits: [
      "Cut internal response and operational bottleneck times by up to 90%.",
      "Deploy intelligent support agents trained on your exact business documents.",
      "Free highly skilled staff from repetitive manual administrative work."
    ],
    process: [
      { step: "01", title: "Workflow Auditing", desc: "Mapping manual operational steps and locating bottleneck zones." },
      { step: "02", title: "Agent Assembly", desc: "Writing integrations connecting custom databases with LLM endpoints." },
      { step: "03", title: "Safety Validations", desc: "Setting up filters and guards to prevent hallucinations or data leaks." },
      { step: "04", title: "Production Launch", desc: "Connecting webhooks and monitoring pipeline execution stats." }
    ],
    faqs: [
      { q: "Is our corporate data safe with LLM integrations?", a: "Yes, we implement enterprise-grade API data compliance, utilizing zero-data-retention APIs and localized database structures so your internal records are never used for public model training." }
    ],
    caseStudy: {
      title: "Operation Automation",
      description: "Streamlining customer support and backend data routing for a multinational logistics client using custom LLM agents.",
      image: "/Image/Gallery/Event-Design/3d-event-spatial-design-concept-10.webp",
      metrics: "92% Manual Workload Reduction"
    }
  },
  {
    id: "ai-content",
    num: "11",
    title: "AI Content Creation",
    subtitle: "Next-Gen Media Synthesis",
    description: "High-speed generative image compilation, intelligent brand copywriting, and localized model tuning tailored to corporate brand voice.",
    details: [
      "Tailored Brand-Specific Image Generation",
      "Scalable Social Media & Marketing Ad Copywriting",
      "AI Voice Over and Avatar Videos Production",
      "Custom Stable Diffusion / Midjourney Asset Engineering",
      "Generative Image Post-Processing and Touchups",
      "Consistent Multi-Channel Visual Asset Creation"
    ],
    benefits: [
      "Generate hundreds of premium, custom-branded marketing assets in minutes.",
      "Retain absolute consistency in brand voice across thousands of ad variants.",
      "Cut dependency on standard stock asset platforms with personalized imagery."
    ],
    process: [
      { step: "01", title: "Voice & Style Calibration", desc: "Feeding brand assets to models to define stylistic parameters." },
      { step: "02", title: "Prompt Engineering", desc: "Creating optimal structured prompts for consistent product placement and characters." },
      { step: "03", title: "Render & Polish", desc: "Generating primary assets and refining details using graphic software editors." },
      { step: "04", title: "Multi-Format Export", desc: "Exporting assets formatted for banners, print pages, and digital feeds." }
    ],
    faqs: [
      { q: "Can the generated images be legally copyrighted?", a: "We construct mixed-media pipelines where AI is used for raw asset generation and refined by human designers, helping secure legal copyright protection for final outputs." }
    ],
    caseStudy: {
      title: "Generative Marketing Pipeline",
      description: "Creating a custom image generator and automated copywriting assistant that powers a global retail brand's social presence.",
      image: "/Image/Gallery/Marketing-Events/marketing-event-brand-activation-12.webp",
      metrics: "10x Faster Asset Creation"
    }
  }
];
var PORTFOLIO_DATA = [
  {
  "id": "ongc-navratri-2026",
  "title": "ONGC Navratri 2026",
  "category": "Events",
  "description": "Executed the flagship 9-night Navratri Garba festival for ONGC at Malaviya Cricket Ground, Ahmedabad. Delivered end-to-end event infrastructure, grand thematic stage fabrication, traditional festive ambiance, high-capacity crowd management, and an innovative Digital E-Pass with QR Code entry system.",
  "client": "ONGC (Oil and Natural Gas Corporation)",
  "year": "2026",
  "image": "/Image/Gallery/ONGC/DSC_6410.jpg",
  "services": [
    "Cultural Event Setup",
    "Stage & Venue Fabrication",
    "Digital E-Pass & QR Entry System",
    "Crowd & Sound Orchestration"
  ],
  "challenge": "Executing a premier 9-night celebration for thousands of attendees requiring seamless digital ticketing, high-security gate clearance, and grand cultural ambiance.",
  "solution": "Architected custom festive stages, traditional fabrications, atmospheric lighting arrays, and deployed an automated QR code E-pass verification system at all entry checkpoints.",
  "results": [
    "Flawless 9-night continuous event execution with zero downtime.",
    "100% digital check-in eliminating queue congestion.",
    "High commendation from ONGC leadership and thousands of attendees."
  ],
  "gallery": [
    "/Image/Gallery/ONGC/DSC_6410.jpg",
    "/Image/Gallery/ONGC/DSC_6328.jpg",
    "/Image/Gallery/ONGC/DSC_6447.jpg",
    "/Image/Gallery/ONGC/DSC_6474.jpg",
    "/Image/Gallery/ONGC/YOGI4834.jpg",
    "/Image/Gallery/ONGC/YOGI5125.jpg",
    "/Image/Gallery/ONGC/YOGI7841.jpg",
    "/Image/Gallery/ONGC/DSC_6356.jpg"
  ]
},
  {
    id: "jmcl-tournament",
    title: "JMCL Cricket Tournament 2026",
    category: "Events",
    description: "Successfully managed the branding and execution of the JMCL Cricket Tournament, delivering event planning, sponsor branding, venue setup, player kits, promotional materials, and complete on-ground event management for a memorable sporting experience.",
    client: "JMCL Committee",
    year: "2026",
    image: "/Image/Gallery/JMCL/SMP_9863.webp",
    services: ["Sports Event", "Event Management", "Tournament Branding"],
    challenge: "The JMCL cricket tournament required a highly engaging sports brand, corporate sponsor booths, and team kits to present a high-prestige tournament.",
    solution: "We managed on-ground stadium branding, player jersey graphics, sponsor display stands, and promotional social cards.",
    results: [
      "Successfully executed venue setups on-time.",
      "Secured high visual presence for sponsors.",
      "Highly praised player kits and event souvenirs."
    ],
    gallery: [
      "/Image/Gallery/JMCL/SMP_9863.webp",
      "/Image/Gallery/JMCL/SMP_9862.webp",
      "/Image/Gallery/JMCL/SMP_9861.webp",
      "/Image/Gallery/JMCL/PSP_0407.webp"
    ]
  },
  {
    id: "laracon-2026",
    title: "Laracon 2026",
    category: "Events",
    description: "Delivered complete event branding and creative support for Laracon 2026, including stage visuals, attendee experience, event graphics, promotional assets, and on-ground branding to create a seamless conference experience.",
    client: "Laracon India Committee",
    year: "2026",
    image: "/Image/Gallery/Laracon/IMG20260131045356.webp",
    services: ["Conference", "Event Branding", "Creative Design"],
    challenge: "Laracon needed to scale its conference brand presence for the 2026 edition, demanding high-end stage fabrication, uniform visitor guides, and cohesive spatial event assets.",
    solution: "We designed and fabricated all event venue branding, backdrop stages, attendee credentials, and digital marketing graphics.",
    results: [
      "100% attendee satisfaction with conference navigation.",
      "Flawloss stage visuals delivered ahead of schedule.",
      "Unprecedented social media check-ins using key hashtag backdrops."
    ],
    gallery: [
      "/Image/Gallery/Laracon/IMG20260131045356.webp",
      "/Image/Gallery/Events/DSC_1061.webp",
      "/Image/Gallery/Events/20251220_153544.webp",
      "/Image/Gallery/Events/20251220_153727.webp"
    ]
  },
  {
    id: "murlidhar-sweets",
    title: "Murlidhar Sweets Branding",
    category: "Branding",
    description: "Created a premium corporate branding system for Murlidhar Sweets, including a modern visual identity, custom logo design, elegant menus, and high-impact promotion banners.",
    client: "Murlidhar Sweets",
    year: "2026",
    image: "/Image/Gallery/Brand-Activations/brand-activation-identity-display-08.webp",
    services: ["Logo Design", "Menu Design", "Banners"],
    challenge: "Murlidhar Sweets required a cohesive, premium brand presence that blends heritage tastes with clean, modern digital and physical touchpoints.",
    solution: "We crafted a customized typographic logo, designed elegant print menus showcasing product hierarchies, and created social advertising banners.",
    results: [
      "Substantially elevated brand recall and trust.",
      "Successfully launched physical menus and banner placements.",
      "Unified visual guidelines across all sweet shop outlets."
    ],
    gallery: [
      "/Image/Gallery/Brand-Activations/brand-activation-identity-display-08.webp",
      "/Image/Gallery/Brand-Activations/brand-activation-identity-display-07.webp"
    ]
  },
  {
    id: "chintu-2025",
    title: "Chintu Event Branding",
    category: "Events",
    description: "Developed a complete event brand identity including visual language, marketing creatives, invitation cards, and spatial branding to establish a strong presence.",
    client: "Chintu",
    year: "2025",
    image: "/Image/Gallery/Chintu/Picture123.webp",
    services: ["Event Branding", "Visual Identity", "Event Experience"],
    challenge: "Establishing an authority brand presence for the event launch, requiring a modern and high-impact identity system.",
    solution: "We engineered a bespoke visual identity, digital collateral, event banners, and venue signages.",
    results: [
      "Created a strong and memorable brand presence.",
      "High engagement across event attendees.",
      "Establishment of standard event branding guidelines."
    ],
    gallery: [
      "/Image/Gallery/Chintu/Picture123.webp",
      "/Image/Gallery/Chintu/Picture114.webp",
      "/Image/Gallery/Chintu/Picture121.webp",
      "/Image/Gallery/Chintu/Picture127.webp"
    ]
  },
  {
    id: "royal-albert-palace",
    title: "Royal Albert Palace Brand Communication",
    category: "Branding",
    description: "Created premium branding assets including event creatives, digital promotions, luxury marketing materials, and visual campaigns that reflect the elegance of the venue.",
    client: "Royal Albert Palace",
    year: "2026",
    image: "/Image/Gallery/Brand-Activations/brand-activation-identity-display-07.webp",
    services: ["Luxury Branding", "Event Creatives", "Marketing Design"],
    challenge: "The venue needed premium branding assets and visual campaigns that align with the high-prestige elegance of their halls.",
    solution: "We compiled dynamic digital assets, high-concept visual guidelines, and physical marketing cards.",
    results: [
      "Substantially boosted local corporate bookings.",
      "Cohesive presentation visual language across all portals.",
      "Highly praised event creative catalog layouts."
    ],
    gallery: [
      "/Image/Gallery/Brand-Activations/brand-activation-identity-display-07.webp",
      "/Image/Gallery/Brand-Activations/brand-activation-identity-display-08.webp"
    ]
  },
  {
    id: "kingdom-recruitments",
    title: "Kingdom Recruitments Platform",
    category: "Websites",
    description: "Built a modern recruitment platform with job listings, employer dashboards, candidate management, and an intuitive hiring workflow designed for recruitment agencies.",
    client: "Kingdom Recruitments Ltd",
    year: "2025",
    image: "/Image/Web1.webp",
    services: ["Laravel", "Recruitment Portal", "Dashboard"],
    challenge: "Kingdom Recruitments needed a robust system to handle thousands of job applications and coordinate hiring pipelines for multiple enterprise clients.",
    solution: "We designed and programmed a fast, database-driven hiring portal with candidate management, dynamic tracking boards, and employer portals.",
    results: [
      "Processed 10,000+ candidate applications successfully.",
      "Hiring cycle speed reduced by 30%.",
      "Highly praised dashboard usability by recruiters."
    ],
    gallery: [
      "/Image/Web1.webp",
      "/Image/Web2jpg.jpg",
      "/Image/Web3.webp"
    ]
  }
];
var TESTIMONIALS_DATA = [
  {
    id: "1",
    name: "Veera Thakur",
    role: "Aster360 London (UK)",
    company: "Aster360 London (UK)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    quote: "Aster360 London (UK) have had an excellent experience with this business. The team at Reworkzone was professional and genuinely committed to delivering high quality service from start to finish. Communicating with the whole team was clear, and timelines were adhered to and respected, at every stage. It is rare to find a business that combines expertise with reliability. We would highly recommend Reworkzone."
  },
  {
    id: "2",
    name: "Rita Gaherwar",
    role: "Event Management Client",
    company: "Reworkzone Event Client",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    quote: "Highly recommend Reworkzone, Ahmedabad for Event Management! Their professionalism, attention to detail, and execution were truly impressive. From planning to on-ground coordination, everything was handled smoothly and seamlessly. Special thanks to Mehul Bhai and Sejal, their dedication, responsiveness, and problem-solving skills made a huge difference. They went above and beyond to ensure everything ran perfectly and were always available whenever needed. If you\u2019re looking for a reliable and well-organized event team, Reworkzone is a fantastic choice!"
  },
  {
    id: "3",
    name: "Gurupritsingh Saini",
    role: "Tech Expo & Laracon India",
    company: "Tech Expo Gujarat / Laracon India",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    quote: "Have been working with Reworkzone since Tech Expo Gujarat 2024 and then worked in Laracon India 2025 and then Laracon India 2026. Also worked during Tech Expo Gujarat Retreat 2025. Over all amazing experience. They are understanding client requirements thoroughly and execute the things flawlessly. Amazing agency to work if you are planning small to big level event or you are looking for branding, booth designing and booth setup for the event then highly recommending Mehul Bhai and team Reworkzone."
  },
  {
    id: "4",
    name: "Hetztronics Ltd",
    role: "Digital Partner",
    company: "Hetztronics Ltd",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    quote: "ReworkZone is our Digital partner now, there team is fabulous and full of Creative ideas, we HETZTRONICS LTD recommend to try them or take an advice to take your project next level"
  },
  {
    id: "5",
    name: "Shailesh Sargara",
    role: "Product Labeling Client",
    company: "Labeling & Branding Client",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    quote: "Great team! Very creative approach and outstanding design work for our product labeling."
  },
  {
    id: "6",
    name: "Manthan Khatsuriya",
    role: "Exhibition Setup Client",
    company: "Exhibition Management Client",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    quote: "Excellent service. They managed very well our exhibition."
  },
  {
    id: "7",
    name: "P & O International",
    role: "International Partner",
    company: "P & O International",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    quote: "Excelant comitment inovative creative desighner genuine price everything great \u{1F64F} ..."
  }
];
var JOB_LISTINGS = [
  {
    id: "ai-prompt-engineer",
    title: "Senior AI Prompt Engineer & Stylist",
    department: "Creative AI Lab",
    location: "Ahmedabad (Hybrid) / Remote",
    type: "Full-Time",
    description: "We are seeking an avant-garde AI visual specialist who can bridge Midjourney, Stable Diffusion, and manual post-production software to design bespoke enterprise visual assets.",
    requirements: [
      "3+ years experience with generative image tools, prompt structuring, and model tuning.",
      "Expert level in Photoshop editing, color grading, and asset layout cleanups.",
      "Strong eye for composition, negative space, and premium visual branding systems.",
      "Portfolio displaying commercial-grade generated designs and art direction."
    ],
    benefits: [
      "Top-tier competitive base salary + yearly design bonuses.",
      "Full equipment allowance (high-end GPU workstation, tablet).",
      "Learning budget for specialized AI and design courses.",
      "Flexible hybrid work options (2 days on-site, 3 days remote)."
    ]
  },
  {
    id: "fullstack-react-developer",
    title: "Full-Stack React Developer (Vite / Next.js)",
    department: "Digital Engineering",
    location: "Ahmedabad (Hybrid)",
    type: "Full-Time",
    description: "Looking for a performance-focused developer who writes clean TypeScript, implements smooth GSAP/Motion animations, and optimizes pages for blazing fast load times.",
    requirements: [
      "4+ years React experience with solid knowledge of TS, Tailwind CSS, and CSS animations.",
      "Expertise in Vite compilation parameters, code splitting, and bundle optimization.",
      "Familiarity with node.js API integrations, server security headers, and SEO schemas.",
      "Obsession with visual perfection\u2014you treat design layouts with high respect."
    ],
    benefits: [
      "Competitive compensation package with performance incentives.",
      "Premium workspace (dual displays, ergonomic chair, developer gear).",
      "Private health insurance coverage for employee and dependents.",
      "Generous paid leaves and mental health wellness days."
    ]
  },
  {
    id: "lead-brand-strategist",
    title: "Lead Brand Strategist & Copywriter",
    department: "Narrative Strategy",
    location: "Ahmedabad (On-Site) / Remote",
    type: "Full-Time",
    description: "Join Aarav Mehta's strategy group, constructing brand myths, core value systems, and high-impact copywriting for elite corporate portfolios.",
    requirements: [
      "5+ years experience in brand strategy, copy direction, or agency consulting.",
      "Flawless capability to capture tone of voice, writing high-end, Stripe-like texts.",
      "Experience running client workshops and interviewing C-suite leaders.",
      "Familiarity with B2B industries and corporate governance structures."
    ],
    benefits: [
      "Top-tier compensation package + performance bonuses.",
      "Opportunities to represent the agency at national branding summits.",
      "Annual paid retreats and team building trips.",
      "Complimentary organic meals and premium coffee at the office."
    ]
  }
];
var DEFAULT_SEO_DATA = {
  home: {
    title: "Reworkzone \u2014 AI Branding Agency & Digital Studio",
    description: "Reworkzone is an AI-first premium creative agency in Ahmedabad, specializing in high-end branding, custom React websites, apps, and experiential event stalls.",
    keywords: "AI agency, branding agency Ahmedabad, custom website development, graphic design, UI/UX, B2B event management, cinematic film production, performance marketing"
  },
  "about-us": {
    title: "Reworkzone \u2014 Manifesto & Leadership | About Us",
    description: "Read the Reworkzone manifesto. Discover our journey from boutique identity design to an elite agency bridging structural business ROI with luxury aesthetics.",
    keywords: "Aarav Mehta, Reworkzone team, Ahmedabad creative agency, agency manifesto, Mr Otis, design principles"
  },
  services: {
    title: "Reworkzone \u2014 Creative Services & AI Solutions",
    description: "Explore Reworkzone's 11 creative services, including branding, UI/UX, app dev, event stall fabrication, digital marketing, and custom AI automations.",
    keywords: "AI automation, web design services, expo stall designers, B2B marketing, film production"
  },
  portfolio: {
    title: "Reworkzone \u2014 Elite Portfolio & Creative Work",
    description: "Browse our dynamic design portfolio. Explore our award-winning work in branding, custom React apps, spatial expo fabrication, and cinematic video storytelling.",
    keywords: "design portfolio, B2B portfolio, SaaS dashboard design, event booths gallery"
  },
  career: {
    title: "Reworkzone \u2014 Join the Creative Council | Careers",
    description: "Build the future of B2B design and technology. Explore open positions in our Creative AI Lab, Digital Engineering, and Narrative Strategy teams.",
    keywords: "jobs Ahmedabad, AI jobs, React developer vacancy, prompt engineer jobs, agency culture"
  },
  contact: {
    title: "Reworkzone \u2014 Initiate a Project | Contact Us",
    description: "Get in touch with Reworkzone. Reach out via contact form, phone, email, or WhatsApp, and visit our Ahmedabad headquarters for design consultation.",
    keywords: "office address Ahmedabad, hire creative agency, project inquiry, agency phone number"
  },
  blog: {
    title: "Reworkzone \u2014 Analytical Essays & Strategy Insights | Journal",
    description: "Explore the Reading Room. Read strategic essays examining the intersection of enterprise business models, luxury aesthetics, and artificial intelligence.",
    keywords: "corporate branding tips, web performance optimization, spatial design theory, AI marketing"
  },
  cms: {
    title: "Reworkzone \u2014 Dashboard Console | CMS",
    description: "Secure client-side administration panel to manage services data, blogs, listings, team metrics, client logs, and meta configs.",
    keywords: "cms dashboard, control panel, site admin"
  },
  gallery: {
    title: "Reworkzone \u2014 Events, Exhibition Stalls & Brand Activations | Gallery",
    description: "Explore Reworkzone\u2019s event portfolio featuring custom exhibition stall design, corporate events, stage fabrications, brand activations, and experiential marketing environments.",
    keywords: "event management gallery, exhibition booth design, corporate events India, brand activation setup, trade show stall fabrication, event stage design"
  }
};

// server.ts
dotenv.config();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
var apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false
});
app.use("/api", apiLimiter);
var chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many chat requests. Please try again later." }
});
var formLimiter = rateLimit({
  windowMs: 60 * 60 * 1e3,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many submissions. Please try again later." }
});
var ADMIN_USER = process.env.ADMIN_USER || "admin";
var ADMIN_PASS = process.env.ADMIN_PASS || "admin@123";
var ADMIN_TOKEN_SECRET = process.env.ADMIN_TOKEN_SECRET || crypto.randomBytes(32).toString("hex");
var ADMIN_SESSION_MS = 8 * 60 * 60 * 1e3;
var safeEqual = (a, b) => {
  const ab = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
};
var signAdminToken = (expMs) => {
  const payload = `admin.${expMs}`;
  const sig = crypto.createHmac("sha256", ADMIN_TOKEN_SECRET).update(payload).digest("hex");
  return Buffer.from(`${payload}.${sig}`).toString("base64url");
};
var verifyAdminToken = (token) => {
  if (!token) return false;
  try {
    const [role, expStr, sig] = Buffer.from(token, "base64url").toString("utf8").split(".");
    const expMs = Number(expStr);
    if (role !== "admin" || !sig || !Number.isFinite(expMs) || Date.now() > expMs) return false;
    const expected = crypto.createHmac("sha256", ADMIN_TOKEN_SECRET).update(`admin.${expMs}`).digest("hex");
    return sig.length === expected.length && crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
};
var adminLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many login attempts. Please try again later." }
});
var requireAdmin = (req, res, next) => {
  const header = req.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!verifyAdminToken(token)) {
    return res.status(401).json({ error: "Admin authentication required." });
  }
  next();
};
var CMS_DB_FILE = path.join(__dirname, "cms_data.json");
var INQUIRIES_FILE = path.join(__dirname, "inquiries.json");
var APPLICATIONS_FILE = path.join(__dirname, "applications.json");
var RESUMES_DIR = path.join(__dirname, "resumes");
if (!fs.existsSync(RESUMES_DIR)) {
  fs.mkdirSync(RESUMES_DIR, { recursive: true });
}
var resumeUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, RESUMES_DIR),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `resume-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedExt = [".pdf", ".doc", ".docx"];
    if (allowedExt.includes(path.extname(file.originalname).toLowerCase())) {
      cb(null, true);
    } else {
      cb(new Error("Accepted formats: PDF, DOC, or DOCX."));
    }
  }
});
var GALLERY_BASE_DIR = path.join(__dirname, "public", "Image", "Gallery");
if (!fs.existsSync(GALLERY_BASE_DIR)) {
  fs.mkdirSync(GALLERY_BASE_DIR, { recursive: true });
}
var CATEGORY_TO_FOLDER = {
  EVENTS: "Events",
  BOOTH: "Booth",
  BRANDING: "Branding",
  DESIGNING: "Designing",
  MARKETING: "Marketing"
};
var galleryUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const rawCategory = (req.body.category || "EVENTS").toUpperCase();
      const folderName = CATEGORY_TO_FOLDER[rawCategory] || "Events";
      const targetDir = path.join(GALLERY_BASE_DIR, folderName);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      cb(null, targetDir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      const nameWithoutExt = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9]/g, "_");
      cb(null, `${nameWithoutExt}_${Date.now()}${ext}`);
    }
  }),
  limits: { fileSize: 25 * 1024 * 1024 },
  // 25MB max per image
  fileFilter: (req, file, cb) => {
    const allowedExt = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
    if (allowedExt.includes(path.extname(file.originalname).toLowerCase())) {
      cb(null, true);
    } else {
      cb(new Error("Accepted image formats: JPG, JPEG, PNG, WEBP, or AVIF."));
    }
  }
});
var cmsData = {
  heroTitle: "Where Strategy Meets Surrealism",
  heroSubtitle: "We combine editorial rigor with high-production cinema to translate complex corporate offerings into clear, beautiful stories.",
  services: SERVICES_DATA,
  blogs: JOURNAL_ARTICLES,
  portfolio: PORTFOLIO_DATA,
  testimonials: TESTIMONIALS_DATA,
  careers: JOB_LISTINGS,
  seo: DEFAULT_SEO_DATA
};
if (fs.existsSync(CMS_DB_FILE)) {
  try {
    cmsData = JSON.parse(fs.readFileSync(CMS_DB_FILE, "utf-8"));
  } catch (error) {
    console.error("Error reading cms_data.json, using defaults:", error);
  }
} else {
  try {
    fs.writeFileSync(CMS_DB_FILE, JSON.stringify(cmsData, null, 2), "utf-8");
  } catch (error) {
    console.error("Error initializing cms_data.json:", error);
  }
}
var saveCmsData = () => {
  try {
    fs.writeFileSync(CMS_DB_FILE, JSON.stringify(cmsData, null, 2), "utf-8");
  } catch (error) {
    console.error("Failed to write to cms_data.json:", error);
  }
};
app.post("/api/chat", chatLimiter, async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message parameter is required." });
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined. Falling back to mock response.");
      return res.json({
        result: `Hello! I am Rework AI. To enable full dynamic interactions, please configure the GEMINI_API_KEY environment variable. Regarding your query: "${message}", Reworkzone is a premier luxury creative agency specializing in Branding, Web Design, and Corporate Events.`
      });
    }
    const ai = new GoogleGenAI({ apiKey });
    const servicesList = cmsData.services.map((s) => `- ${s.title}: ${s.description}`).join("\n");
    const portfolioList = cmsData.portfolio.map((p) => `- ${p.title} (${p.category}): ${p.description}`).join("\n");
    const testimonialsList = cmsData.testimonials.map((t) => `- ${t.name} (${t.role}): "${t.quote}"`).join("\n");
    const systemInstruction = `You are Rework AI, the digital assistant for Reworkzone (also known as Rework), a premium luxury B2B-first creative agency.
Ahmedabad, India is the main headquarters, but we serve clients across the UK, USA, Europe, Kenya, and globally.
Our core pillars: Strategy, Design, and Technology.
Maintain a highly confident, authoritative, editorial, professional, and slightly futuristic tone. Keep answers concise, and do not mention that you are an LLM.

CONTEXT:
SERVICES WE OFFER:
${servicesList}

PORTFOLIO / CASE STUDIES:
${portfolioList}

CLIENT TESTIMONIALS:
${testimonialsList}

CONTACT INFO:
- Location: Ahmedabad, India
- Phone: +91 89800 04518
- Email: hello@reworkzone.com
- Link: /contact

Answer the visitor's query based on the above details. If they ask about services, explain how Reworkzone handles them. If they ask for proof, cite the testimonials or case studies.`;
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7
      }
    });
    res.json({ result: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to process request with AI Engine.", details: error?.message });
  }
});
app.post("/api/admin/login", adminLoginLimiter, (req, res) => {
  const { username, password } = req.body || {};
  if (typeof username !== "string" || typeof password !== "string" || !safeEqual(username, ADMIN_USER) || !safeEqual(password, ADMIN_PASS)) {
    return res.status(401).json({ error: "Invalid credentials." });
  }
  const expiresAt = Date.now() + ADMIN_SESSION_MS;
  res.json({ token: signAdminToken(expiresAt), expiresAt });
});
app.get("/api/cms/data", (req, res) => {
  res.json(cmsData);
});
app.post("/api/cms/data", requireAdmin, (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData) {
      return res.status(400).json({ error: "No data provided." });
    }
    if (updatedData.heroTitle !== void 0) cmsData.heroTitle = updatedData.heroTitle;
    if (updatedData.heroSubtitle !== void 0) cmsData.heroSubtitle = updatedData.heroSubtitle;
    if (updatedData.services !== void 0) cmsData.services = updatedData.services;
    if (updatedData.blogs !== void 0) cmsData.blogs = updatedData.blogs;
    if (updatedData.portfolio !== void 0) cmsData.portfolio = updatedData.portfolio;
    if (updatedData.testimonials !== void 0) cmsData.testimonials = updatedData.testimonials;
    if (updatedData.careers !== void 0) cmsData.careers = updatedData.careers;
    if (updatedData.seo !== void 0) cmsData.seo = updatedData.seo;
    saveCmsData();
    res.json({ success: true, message: "CMS data synchronized successfully." });
  } catch (error) {
    console.error("Failed to sync CMS data:", error);
    res.status(500).json({ error: "Failed to sync CMS data.", details: error?.message });
  }
});
app.post("/api/gallery/upload", requireAdmin, (req, res) => {
  galleryUpload.single("image")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message || "Gallery image upload failed." });
    }
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided." });
    }
    const rawCategory = (req.body.category || "EVENTS").toUpperCase();
    const folderName = CATEGORY_TO_FOLDER[rawCategory] || "Events";
    const relativeUrl = `/Image/Gallery/${folderName}/${req.file.filename}`;
    console.log(`[Gallery Upload] New image uploaded to ${folderName}: ${req.file.filename}`);
    res.json({
      success: true,
      message: "Gallery image uploaded successfully!",
      image: {
        id: `gallery-upload-${Date.now()}`,
        category: rawCategory,
        image: relativeUrl,
        filename: req.file.filename,
        folder: folderName
      }
    });
  });
});
app.post("/api/gallery/delete", requireAdmin, (req, res) => {
  try {
    const { imagePath } = req.body;
    if (!imagePath) {
      return res.status(400).json({ error: "imagePath is required." });
    }
    const normalizedRelPath = imagePath.replace("/public", "").replace(/\\/g, "/");
    const fullFilePath = path.join(__dirname, "public", normalizedRelPath);
    if (fs.existsSync(fullFilePath)) {
      fs.unlinkSync(fullFilePath);
      console.log(`[Gallery Delete] Deleted image file: ${fullFilePath}`);
      return res.json({ success: true, message: "Image deleted from disk." });
    } else {
      return res.status(404).json({ error: "File not found on server." });
    }
  } catch (error) {
    console.error("Error deleting gallery image:", error);
    res.status(500).json({ error: "Failed to delete gallery image." });
  }
});
app.post("/api/contact", formLimiter, (req, res) => {
  try {
    const submission = req.body;
    if (!submission || !submission.name || !submission.email) {
      return res.status(400).json({ error: "Name and email are required." });
    }
    let inquiries = [];
    if (fs.existsSync(INQUIRIES_FILE)) {
      try {
        inquiries = JSON.parse(fs.readFileSync(INQUIRIES_FILE, "utf-8"));
      } catch (err) {
        console.error("Error reading inquiries file:", err);
      }
    }
    const newInquiry = {
      id: `inq-${Date.now()}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      ...submission
    };
    inquiries.push(newInquiry);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
    console.log("New Contact Inquiry Received:", newInquiry);
    res.json({ success: true, message: "Inquiry received successfully." });
  } catch (error) {
    console.error("Failed to process contact submission:", error);
    res.status(500).json({ error: "Failed to save submission.", details: error?.message });
  }
});
app.post("/api/career", formLimiter, (req, res) => {
  resumeUpload.single("resume")(req, res, (uploadErr) => {
    if (uploadErr) {
      return res.status(400).json({ error: uploadErr.message || "Resume upload failed." });
    }
    try {
      const submission = req.body;
      if (!submission || !submission.name || !submission.email) {
        return res.status(400).json({ error: "Name and email are required." });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Resume file is required." });
      }
      let applications = [];
      if (fs.existsSync(APPLICATIONS_FILE)) {
        try {
          applications = JSON.parse(fs.readFileSync(APPLICATIONS_FILE, "utf-8"));
        } catch (err) {
          console.error("Error reading applications file:", err);
        }
      }
      const newApplication = {
        id: `app-${Date.now()}`,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        ...submission,
        resumeFilename: req.file.originalname,
        resumePath: `resumes/${req.file.filename}`
      };
      applications.push(newApplication);
      fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(applications, null, 2), "utf-8");
      console.log("New Career Application Received:", newApplication);
      res.json({ success: true, message: "Application received successfully." });
    } catch (error) {
      console.error("Failed to process career submission:", error);
      res.status(500).json({ error: "Failed to save application.", details: error?.message });
    }
  });
});
var distPath = fs.existsSync(path.join(__dirname, "dist", "index.html"))
  ? path.join(__dirname, "dist")
  : (fs.existsSync(path.join(__dirname, "index.html")) ? __dirname : path.join(__dirname, "dist"));
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}
var PORT = Number(process.env.PORT) || 3001;
function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`[Reworkzone Server] Running on http://localhost:${port}`);
  });
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.warn(`[Reworkzone Server] Port ${port} in use, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
}
startServer(PORT);
