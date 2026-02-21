import { Metadata } from "next";
import { Rocket, Wrench, Star, Zap, Shield, Search, Globe, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog — What's New on Only Plumbing Sites",
  description:
    "See the latest updates, new features, and improvements to Only Plumbing Sites. We're constantly building new tools and resources for plumbing businesses.",
};

type ChangelogEntry = {
  date: string;
  title: string;
  description: string;
  type: "feature" | "improvement" | "tool" | "content";
  items?: string[];
};

const changelog: ChangelogEntry[] = [
  {
    date: "February 21, 2026",
    title: "Citation Audit Tool — Complete Redesign",
    type: "tool",
    description:
      "Rebuilt the Citation Checker from the ground up. Now scans your website for real NAP data, compares it against what you enter, and provides a prioritized directory checklist with direct 'Find My Listing' and 'Claim' links for each directory.",
    items: [
      "Real website NAP extraction from HTML and schema markup",
      "Side-by-side comparison: your data vs what's on your website",
      "Green/red match indicators for each NAP field",
      "45+ curated directories (removed junk/impossible ones)",
      "Direct deep links to search and claim each listing",
      "Removed simulated data — everything shown is real or clearly a checklist",
    ],
  },
  {
    date: "February 21, 2026",
    title: "Review Link Generator — Google Places Search",
    type: "tool",
    description:
      "No more hunting for Place IDs. Search for your business by name, click it, and get your review link instantly.",
    items: [
      "Google Places autocomplete search (requires API key setup)",
      "Auto-generates review link from selected business",
      "Ready-to-send SMS template with your business name",
      "QR code download for invoices, business cards, and van wraps",
      "Flags businesses with no website linked to GBP",
      "Graceful fallback to manual Place ID entry",
    ],
  },
  {
    date: "February 21, 2026",
    title: "Referral Program — Terms, Earnings & Legal",
    type: "feature",
    description:
      "Complete referral program overhaul with full Terms & Conditions, earnings calculator, FAQ, and legal compliance.",
    items: [
      "$500 per referral — clearly stated everywhere",
      "Earnings calculator: 1-20 referrals with relatable comparisons",
      "7 FAQ items covering eligibility, payment, tracking, limits",
      "Full 13-section Terms & Conditions (W-9, governing law, etc.)",
      "12-month referral tracking window",
    ],
  },
  {
    date: "February 21, 2026",
    title: "Plumbing Keywords Database — Major Expansion",
    type: "tool",
    description:
      "Expanded from 50 to 150+ keywords with city localization and better data transparency.",
    items: [
      "150+ keywords across 12 categories (was 50 across 8)",
      "Enter your city — LOCAL keywords auto-append 'in Dallas' etc.",
      "LOCAL badge on city-targetable keywords",
      "'Copy All' button for easy export",
      "Data sourcing note: Google Keyword Planner, Ahrefs, Semrush (Feb 2026)",
      "New categories: Gas Line, Specialty, Cost, How-To",
    ],
  },
  {
    date: "February 21, 2026",
    title: "Website Grader — 68-Point Inspection",
    type: "improvement",
    description:
      "Expanded from 12 checks to 68 across 11 categories. Much more comprehensive analysis.",
    items: [
      "68 checks across 11 categories (was 12)",
      "New: Social media link detection (FB, IG, YT, LinkedIn, Nextdoor, TikTok)",
      "New: Chatbot/live chat detection, financing options, trust badges",
      "New: Dedicated service page detection, FAQ schema, content depth",
      "50-step loading animation at faster pace",
      "Score displayed as /100",
    ],
  },
  {
    date: "February 2026",
    title: "Local Citations Guide Published",
    type: "content",
    description:
      "Comprehensive guide covering everything plumbers need to know about local citations — what they are, why they matter, and step-by-step instructions for claiming the top 18 priority directories.",
  },
  {
    date: "February 2026",
    title: "Site-Wide Improvements",
    type: "improvement",
    description: "Various polish and infrastructure improvements across the entire site.",
    items: [
      "Back to top button on all pages",
      "WebSite schema with SearchAction for sitelinks search box",
      "Extended breadcrumb labels for all pages",
      "Resources page updated with all new tools",
      "Pillar content roadmap: 35 guides planned",
    ],
  },
];

const typeConfig = {
  feature: { label: "New Feature", color: "bg-green-100 text-green-700", icon: Star },
  improvement: { label: "Improvement", color: "bg-blue-100 text-blue-700", icon: Zap },
  tool: { label: "Tool Update", color: "bg-orange-100 text-orange-700", icon: Wrench },
  content: { label: "New Content", color: "bg-purple-100 text-purple-700", icon: Globe },
};

export default function ChangelogPage() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Rocket className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Build in Public
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              What&apos;s <span className="text-orange">New</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              We&apos;re constantly building new tools, features, and resources
              for plumbing businesses. Here&apos;s what&apos;s been shipping.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {changelog.map((entry, i) => {
              const config = typeConfig[entry.type];
              const Icon = config.icon;
              return (
                <div key={i} className="relative pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-slate-200 first:before:top-3 last:before:h-3">
                  <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-orange">
                    <Icon className="h-3 w-3 text-orange" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-slate-400">{entry.date}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${config.color}`}>
                        {config.label}
                      </span>
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-navy">{entry.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{entry.description}</p>
                    {entry.items && (
                      <ul className="mt-2 space-y-1">
                        {entry.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
