import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Search,
  FileText,
  BarChart3,
  Building,
  TrendingUp,
  Phone,
  Shield,
  CheckCircle,
  Globe,
  Target,
  Users,
  ArrowRight,
  ChevronDown,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Local SEO for Plumbers — Dominate the Google Map Pack",
  description:
    "Local SEO services for plumbing companies. Google Business Profile optimization, service area pages, and local rankings built by a licensed plumber. Get found when homeowners search.",
  keywords: [
    "local seo for plumbers",
    "plumber local seo",
    "google business profile for plumbers",
    "plumber google maps",
    "local seo plumbing company",
  ],
};

const features = [
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description:
      "Full setup and ongoing optimization of your GBP listing. Categories, services, photos, posts, Q&A, and response management — all dialed in for maximum map pack visibility.",
  },
  {
    icon: FileText,
    title: "Service Area Page Expansion",
    description:
      "Dedicated pages for every city and neighborhood you serve. This is how you rank for '[City] plumber' searches — and it's the strategy most plumbing websites miss.",
  },
  {
    icon: Search,
    title: "Local Keyword Targeting",
    description:
      "We research and target the exact phrases homeowners in your area are searching. '[City] emergency plumber,' '[City] drain cleaning' — the keywords that generate calls.",
  },
  {
    icon: Building,
    title: "Citation Building & Cleanup",
    description:
      "Consistent NAP (Name, Address, Phone) across every directory — Yelp, BBB, Yellow Pages, plumbing directories. Inconsistencies kill your local rankings.",
  },
  {
    icon: Star,
    title: "Review Generation System",
    description:
      "Systematic review collection after every job. More 5-star reviews = higher map pack rankings = more calls. We build review generation into your workflow.",
  },
  {
    icon: TrendingUp,
    title: "Monthly SEO Content",
    description:
      "Blog posts and new service area pages every month targeting local plumbing searches. Each piece of content is another opportunity to rank and generate calls.",
  },
];

const phases = [
  {
    phase: "Phase 1",
    title: "Local Keyword Strategy",
    desc: "Research every plumbing keyword + city combination in your service area. Identify the highest-value targets based on search volume, competition, and commercial intent.",
  },
  {
    phase: "Phase 2",
    title: "Website Structure for Local SEO",
    desc: "Build or restructure your site with individual service pages and service area pages. Each page targets a specific keyword + location combination for maximum ranking potential.",
  },
  {
    phase: "Phase 3",
    title: "On-Page Optimization",
    desc: "Optimize every page with proper title tags, meta descriptions, headers, schema markup, internal linking, and locally-relevant content that Google trusts.",
  },
  {
    phase: "Phase 4",
    title: "Google Business Profile",
    desc: "Complete GBP optimization — categories, services, photos, weekly posts, Q&A management, and review response. The #1 factor in map pack rankings.",
  },
  {
    phase: "Phase 5",
    title: "Win the Google 3-Pack",
    desc: "Combine GBP optimization, reviews, citations, and local link building to push your plumbing company into the top 3 map results for your key service areas.",
  },
  {
    phase: "Phase 6",
    title: "Local Link Building",
    desc: "Earn links from local suppliers, plumbing associations, chambers of commerce, and community organizations. Real local authority signals Google trusts.",
  },
];

const faqItems = [
  {
    question: "What is local SEO for plumbers?",
    answer:
      "Local SEO is the process of optimizing your plumbing company's online presence to rank in Google's local results — the map pack (top 3 map listings) and local organic results. It includes Google Business Profile optimization, service area pages on your website, local keyword targeting, citation building, review management, and locally-relevant content creation.",
  },
  {
    question: "How long does local SEO take for plumbing companies?",
    answer:
      "Google Business Profile improvements can show results in 2-4 weeks. Map pack ranking improvements typically take 2-4 months. Full local organic ranking dominance takes 4-8 months depending on your market competition. The good news: once you rank in the map pack, it's much more stable than organic rankings.",
  },
  {
    question: "What's the difference between local SEO and regular SEO?",
    answer:
      "Regular SEO focuses on ranking in organic search results nationwide. Local SEO focuses on ranking in the Google Map Pack and local organic results for your specific service areas. For plumbing companies, local SEO is typically more important because your customers are all within a geographic radius. Our comprehensive plumbing SEO service includes both local and organic strategies.",
  },
  {
    question: "How important are Google reviews for local SEO?",
    answer:
      "Extremely important. Google reviews are the #2 ranking factor for the map pack (after GBP relevance). More reviews, higher average rating, and recent reviews all boost your visibility. We build review generation systems that help you consistently collect 5-star reviews after every job.",
  },
  {
    question: "How many service area pages do I need?",
    answer:
      "One page for every city and major neighborhood you serve. If you serve 15 cities, you need 15 service area pages minimum. We typically build 10-20 pages at launch and add 2-4 new ones every month. Each page targets '[City] plumber,' '[City] + [specific service]' keywords for that location.",
  },
  {
    question: "Can I do local SEO myself?",
    answer:
      "You can do the basics — claim your GBP, add photos, respond to reviews. But competitive local SEO requires keyword research, technical optimization, content creation, citation management, and ongoing strategy adjustments that most plumbers don't have time for. Our clients focus on running their plumbing business while we handle their local visibility.",
  },
];

export default function LocalSEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Built by a Licensed Plumber Since 2014
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Local SEO That Puts Your Plumbing Business{" "}
              <span className="text-orange">on the Map</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Rank in the Google Map Pack for every city you serve. Get found when
              homeowners search &ldquo;plumber near me.&rdquo; Turn Google into your
              #1 source of booked calls.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Strategy Call
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-base text-slate-300 hover:border-white hover:bg-transparent hover:text-white"
              >
                <Link href="/pricing">Book Free Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "97%", label: "of consumers search online for local services" },
              { value: "46%", label: "of all Google searches have local intent" },
              { value: "78%", label: "of local mobile searches lead to a purchase" },
              { value: "3x", label: "more calls from Google Map Pack vs. organic" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-orange sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local SEO */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
                Why Local SEO Is Different for Plumbing Companies
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  When someone searches &ldquo;plumber near me&rdquo; or
                  &ldquo;emergency drain cleaning [city],&rdquo; Google shows three
                  things: paid ads, the Map Pack (top 3 local businesses), and organic
                  results. The Map Pack gets the most clicks — and it&apos;s
                  driven entirely by local SEO signals.
                </p>
                <p>
                  Local SEO for plumbers is different from general{" "}
                  <Link
                    href="/services/seo-for-plumbers"
                    className="font-medium text-orange underline decoration-orange/30 hover:decoration-orange"
                  >
                    plumbing SEO
                  </Link>{" "}
                  because it focuses specifically on geographic relevance — your Google
                  Business Profile, local citations, service area pages, and review
                  signals that tell Google you&apos;re the best plumber in a specific
                  area.
                </p>
                <p>
                  Most plumbing companies have a website that says &ldquo;we serve the
                  greater metro area&rdquo; — but Google can&apos;t rank one page for
                  20 different cities. You need dedicated, optimized pages for every
                  service area.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-navy">
                Google Map Pack Ranking Factors
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Google Business Profile signals", pct: "32%" },
                  { label: "On-page signals (service area pages)", pct: "19%" },
                  { label: "Review signals (quantity, quality, recency)", pct: "16%" },
                  { label: "Link signals (local backlinks)", pct: "11%" },
                  { label: "Citation signals (NAP consistency)", pct: "7%" },
                  { label: "Behavioral signals (clicks, calls)", pct: "8%" },
                  { label: "Personalization & other", pct: "7%" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{item.label}</span>
                    <span className="text-sm font-bold text-orange">{item.pct}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-400">
                Source: Whitespark Local Search Ranking Factors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              What&apos;s Included in Our Local SEO Service
            </h2>
            <p className="mt-4 text-slate-500">
              Everything you need to dominate local search in your service area.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3">
                  <feature.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Service Area Strategy */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            The Service Area Page Strategy Most Plumbers Miss
          </h2>
          <p className="mt-4 text-center text-slate-500">
            This single strategy is responsible for more local ranking wins than
            anything else we do.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Most plumbing websites have one page that says 'We serve the greater metro area'",
              "Google can't rank a single page for 20 different cities",
              "We build dedicated pages for each city you serve — optimized for that specific market",
              "Each page targets '[City] plumber', '[City] drain cleaning', '[City] water heater repair'",
              "Result: you show up in Google Maps AND organic results for every service area",
              "We add 2-4 new service area pages every month so your reach keeps growing",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <p className="text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Our Local SEO Process for Plumbers
            </h2>
            <p className="mt-4 text-slate-400">
              A phased approach to dominating local search in your market.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {phases.map((item) => (
              <div
                key={item.phase}
                className="rounded-xl border border-slate-700 bg-navy-light p-6"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-orange">
                  {item.phase}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Combine Local SEO With These Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-500">
            Local SEO is most powerful when paired with a complete digital
            marketing strategy.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "SEO for Plumbers",
                desc: "Comprehensive SEO that covers local, organic, and technical optimization.",
                href: "/services/seo-for-plumbers",
                icon: TrendingUp,
              },
              {
                title: "Plumbing Websites",
                desc: "A fast, mobile-first website built to convert local search traffic into calls.",
                href: "/services/plumbing-websites",
                icon: Globe,
              },
              {
                title: "PPC for Plumbers",
                desc: "Google Ads for instant visibility while local SEO rankings build.",
                href: "/services/ppc-for-plumbers",
                icon: Target,
              },
              {
                title: "Lead Generation",
                desc: "A complete system for generating exclusive plumbing leads you own.",
                href: "/services/plumbing-lead-generation",
                icon: Users,
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-lg bg-orange/10 p-2.5">
                  <service.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="font-bold text-navy">{service.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{service.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange">
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Local SEO for Plumbers FAQ
          </h2>
          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-bold text-navy hover:text-orange">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Ready to Dominate Local Search in Your Area?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Book a free strategy call. We&apos;ll show you exactly where you rank
            today, where the opportunities are, and how to get into the Google
            Map Pack for your service areas.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Strategy Call
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-600 hover:border-orange hover:text-orange"
            >
              <Link href="/audit">Get Free Local SEO Audit</Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
