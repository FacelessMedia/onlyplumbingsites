export type Competitor = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  pros: string[];
  cons: string[];
  features: { feature: string; us: boolean | string; them: boolean | string }[];
};

export const competitors: Competitor[] = [
  {
    slug: "scorpion",
    name: "Scorpion",
    tagline: "Large national agency vs plumbing-only specialist",
    description:
      "Scorpion is a large national marketing agency serving home services, legal, medical, and more. They have big teams and name recognition — but that comes with tradeoffs for plumbing companies.",
    pros: [
      "Large team with dedicated account managers",
      "Well-known brand in home services marketing",
      "Full-service offering (SEO, PPC, web design, social)",
    ],
    cons: [
      "You're one of thousands of clients across many industries",
      "Long-term contracts (often 12+ months)",
      "Account managers have never worked in plumbing",
      "Generic websites shared across industries",
      "High monthly minimums ($3,000-$10,000+)",
      "You don't own your website if you leave",
    ],
    features: [
      { feature: "Built by a licensed plumber", us: true, them: false },
      { feature: "Plumbing-only focus", us: true, them: false },
      { feature: "No long-term contracts", us: true, them: false },
      { feature: "You own your website", us: true, them: false },
      { feature: "Direct access to the builder", us: true, them: false },
      { feature: "Custom website design (using proven frameworks)", us: true, them: "Varies" },
      { feature: "Service area page strategy", us: true, them: true },
      { feature: "Google Ads management", us: true, them: true },
      { feature: "Monthly reporting", us: true, them: true },
    ],
  },
  {
    slug: "plumbing-webmasters",
    name: "Plumbing Webmasters",
    tagline: "Plumbing marketing agency vs licensed plumber who builds sites",
    description:
      "Plumbing Webmasters focuses on plumbing company marketing with SEO and web design. They understand the plumbing industry — but they're marketers, not plumbers.",
    pros: [
      "Plumbing industry focus",
      "SEO knowledge for home services",
      "Established track record",
    ],
    cons: [
      "Not built by an actual licensed plumber",
      "Template-based website designs",
      "May not own your website outright",
      "Less understanding of plumbing customer psychology",
      "Long-term contracts reported by some clients",
    ],
    features: [
      { feature: "Built by a licensed plumber", us: true, them: false },
      { feature: "Plumbing industry focus", us: true, them: true },
      { feature: "Website tailored to your plumbing business", us: true, them: false },
      { feature: "You own your website", us: true, them: "Varies" },
      { feature: "No long-term contracts", us: true, them: "Varies" },
      { feature: "Direct access to the builder", us: true, them: false },
      { feature: "Local SEO expertise", us: true, them: true },
      { feature: "Content marketing", us: true, them: true },
    ],
  },
  {
    slug: "hook-agency",
    name: "Hook Agency",
    tagline: "General contractor marketing agency vs plumbing specialist",
    description:
      "Hook Agency serves roofing, HVAC, plumbing, and other contractor niches. They're a solid agency — but their attention is split across multiple trades.",
    pros: [
      "Home services industry experience",
      "Strong content marketing approach",
      "Good reputation in contractor space",
    ],
    cons: [
      "Not plumbing-only — serves roofers, HVAC, electricians too",
      "Not built by someone who's worked in plumbing",
      "Generalist approach across multiple trades",
      "May not understand plumbing-specific customer journeys",
    ],
    features: [
      { feature: "Built by a licensed plumber", us: true, them: false },
      { feature: "Plumbing-only focus", us: true, them: false },
      { feature: "Custom website design", us: true, them: true },
      { feature: "Content marketing", us: true, them: true },
      { feature: "No long-term contracts", us: true, them: "Varies" },
      { feature: "SEO expertise", us: true, them: true },
      { feature: "Direct founder access", us: true, them: "Varies" },
    ],
  },
  {
    slug: "strictly-plumbers",
    name: "Strictly Plumbers",
    tagline: "Plumbing marketing company vs licensed plumber-owned agency",
    description:
      "Strictly Plumbers markets to plumbing companies with web design and SEO services. While they focus on plumbing, there's a key difference — we're the only agency actually owned by a licensed plumber.",
    pros: [
      "Plumbing-focused marketing",
      "Industry-specific content",
      "Understands plumbing terminology",
    ],
    cons: [
      "Not owned by a licensed plumber",
      "Less hands-on trade experience",
      "Smaller portfolio compared to 250+ sites",
      "May use templated approaches",
    ],
    features: [
      { feature: "Owner is a licensed plumber", us: true, them: false },
      { feature: "15+ years in the plumbing trade", us: true, them: false },
      { feature: "250+ plumbing websites built", us: true, them: false },
      { feature: "Plumbing industry focus", us: true, them: true },
      { feature: "Custom website design", us: true, them: "Varies" },
      { feature: "You own your website", us: true, them: "Varies" },
      { feature: "Local SEO", us: true, them: true },
    ],
  },
];
