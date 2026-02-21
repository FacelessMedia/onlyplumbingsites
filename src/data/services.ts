import { Globe, Search, Share2, MessageSquare, Star, Bot, TrendingUp } from "lucide-react";

export const services = [
  {
    title: "SEO for Plumbers",
    description:
      "Dominate Google in your local market. We build the rankings, content, and authority that turn search traffic into booked service calls.",
    icon: TrendingUp,
    href: "/services/seo-for-plumbers",
    features: [
      "Local SEO & Google Map Pack",
      "On-page optimization & content",
      "Technical SEO & site speed",
      "Link building & authority",
      "Review generation & management",
      "Monthly reporting & analytics",
    ],
  },
  {
    title: "Plumbing Website Design",
    description:
      "Custom websites built specifically for plumbing companies. Mobile-first, emergency CTA optimized, structured for your service area.",
    icon: Globe,
    href: "/services/plumbing-websites",
    features: [
      "Custom design — no templates",
      "Mobile-first & lightning fast",
      "Emergency click-to-call CTAs",
      "Service area page structure",
      "Schema markup for local SEO",
      "Review integration",
    ],
  },
  {
    title: "Local SEO for Plumbers",
    description:
      "Rank in your service area. We build the pages, optimize your Google Business Profile, and create content that drives calls.",
    icon: Search,
    href: "/services/local-seo",
    features: [
      "Google Business Profile optimization",
      "Service area page expansion",
      "Local keyword targeting",
      "Monthly SEO content creation",
      "Citation building & cleanup",
      "Monthly performance reports",
    ],
  },
  {
    title: "SEO + Social Growth",
    description:
      "Daily Google Business Profile posts, Facebook content, and ongoing SEO — keeping your business visible every single day.",
    icon: Share2,
    href: "/services/social-posting",
    features: [
      "Daily GBP posts",
      "Daily Facebook posts",
      "Local SEO content creation",
      "Review generation strategy",
      "Monthly performance tracking",
      "Consistent brand presence",
    ],
  },
];

export const addOns = [
  {
    title: "Missed Call Text-Back",
    description: "Automatically text back missed calls so you never lose a lead.",
    icon: MessageSquare,
    price: 100,
  },
  {
    title: "Review Automation",
    description: "Automatically request reviews after every job.",
    icon: Star,
    price: 150,
  },
  {
    title: "AI Chat Assistant",
    description: "24/7 AI chatbot on your site to capture leads while you work.",
    icon: Bot,
    price: 150,
  },
];
