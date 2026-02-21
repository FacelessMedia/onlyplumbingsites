import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Shield,
  CheckCircle,
  TrendingUp,
  MapPin,
  BarChart3,
  Target,
  Zap,
  ArrowRight,
  ChevronDown,
  Globe,
  Users,
  PhoneCall,
  Search,
  Star,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title:
    "Plumbing Lead Generation — Exclusive Plumber Leads That Book Jobs",
  description:
    "Plumbing lead generation systems built by a licensed plumber. SEO, PPC, and marketing strategies that generate exclusive plumbing calls — not shared leads from a marketplace.",
  keywords: [
    "plumbing lead generation",
    "plumber leads",
    "how to get more plumbing leads",
    "plumbing leads online",
    "exclusive plumbing leads",
    "plumber lead generation",
  ],
};

const leadChannels = [
  {
    icon: Search,
    title: "SEO & Organic Rankings",
    description:
      "Rank on page 1 for plumbing searches in your service area. Free, high-intent traffic that compounds month over month. The highest-ROI lead source for plumbing companies long-term.",
    link: "/services/seo-for-plumbers",
    linkText: "Learn about Plumbing SEO",
  },
  {
    icon: Target,
    title: "Google Ads & LSAs",
    description:
      "Paid ads at the top of Google for instant lead flow. Local Service Ads with the Google Guaranteed badge generate the cheapest leads. Search Ads give you keyword-level control.",
    link: "/services/ppc-for-plumbers",
    linkText: "Learn about PPC for Plumbers",
  },
  {
    icon: Globe,
    title: "High-Converting Website",
    description:
      "A mobile-first plumbing website with emergency CTAs, service area pages, and trust signals. Your website is the hub — every lead channel drives traffic here to convert.",
    link: "/services/plumbing-websites",
    linkText: "Learn about Plumbing Web Design",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "An optimized GBP listing with reviews, posts, and accurate service info is the #1 driver of map pack leads. Most homeowners call directly from Google Maps.",
    link: "/services/local-seo",
    linkText: "Learn about Local SEO",
  },
  {
    icon: Star,
    title: "Review Generation",
    description:
      "More 5-star reviews = more map pack visibility = more calls. We build systematic review collection into your workflow so your reputation grows on autopilot.",
    link: "/services/seo-for-plumbers",
    linkText: "Review strategy included in SEO",
  },
  {
    icon: Users,
    title: "Social Media & GBP Posts",
    description:
      "Daily content on Google Business Profile and Facebook keeps your plumbing company visible and builds trust with homeowners before they even need a plumber.",
    link: "/services/social-posting",
    linkText: "Learn about Social Growth",
  },
];

const stats = [
  { value: "95%", label: "of plumbing leads come from Google" },
  { value: "$0", label: "Cost per organic SEO lead once ranked" },
  { value: "14.6%", label: "Close rate on inbound SEO leads" },
  { value: "1.7%", label: "Close rate on outbound leads (for comparison)" },
];

const exclusiveVsShared = [
  ["Lead ownership", "100% yours", "Shared with 3-5 competitors"],
  ["Source", "Your website & ads", "Third-party marketplace"],
  ["Customer experience", "Calls you directly", "Gets multiple callbacks"],
  ["Close rate", "14-20%+", "5-8%"],
  ["Cost per lead", "Decreases over time (SEO)", "Fixed or increasing"],
  ["Brand building", "Builds your reputation", "Builds their platform"],
  ["Long-term value", "Compounds — you own the asset", "Zero — rent forever"],
];

const faqItems = [
  {
    question: "How do I get more plumbing leads?",
    answer:
      "The most effective plumbing lead sources in 2026 are: (1) Google organic rankings via SEO — free, high-intent traffic that compounds, (2) Google Local Service Ads — pay per lead with a Google Guaranteed badge, (3) Google Search Ads — instant visibility for specific services and areas, and (4) Google Business Profile optimization for map pack calls. We build all four channels into a comprehensive lead generation system for plumbing companies.",
  },
  {
    question: "Should I buy plumbing leads from a lead service?",
    answer:
      "Lead marketplaces (HomeAdvisor, Angi, Thumbtack, etc.) sell the same lead to 3-5 plumbers. You're competing on price from the first second. The close rates are low (5-8%) and you're building their brand, not yours. We build lead generation systems you own — your website, your rankings, your Google Ads — so every lead is exclusive to you with close rates of 14-20%+.",
  },
  {
    question: "How much does plumbing lead generation cost?",
    answer:
      "It depends on the channels. SEO costs $997-$2,497/month in management fees but generates free organic leads once you rank — the cost per lead drops every month. Google Ads requires ad spend ($1,500-$5,000/month typical) plus management. The combined cost per exclusive lead is typically $15-$75, and it decreases over time as your SEO rankings grow.",
  },
  {
    question: "How fast can I start getting plumbing leads?",
    answer:
      "Google Ads and LSAs can generate calls within 24-48 hours. SEO takes 3-6 months to build significant organic traffic, but it produces the highest-ROI leads long-term. We recommend running PPC for immediate leads while simultaneously building SEO for sustainable growth.",
  },
  {
    question: "What's a good cost per lead for plumbing?",
    answer:
      "From SEO: effectively $0-$15 per lead once ranked (the management fee divided by lead volume). From Google Ads: $25-$75 per lead depending on market competition. From lead marketplaces: $30-$80 per shared lead. The key metric is cost per booked job, not cost per lead — exclusive leads from your own channels close at 2-3x the rate of shared marketplace leads.",
  },
  {
    question: "Why aren't my current marketing efforts generating leads?",
    answer:
      "The most common issues we see: (1) Your website isn't optimized for conversions — no click-to-call, no emergency CTAs, slow load times, (2) You're not ranking for the right keywords — 'plumbing services' is too broad; you need '[City] + [Service]' terms, (3) Your Google Business Profile is incomplete or has few reviews, (4) You're spending on the wrong channels. We start every engagement with a free audit to identify exactly what's broken.",
  },
];

export default function PlumbingLeadGenerationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Exclusive Leads — Not Shared Marketplace Junk
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Plumbing Lead Generation That{" "}
              <span className="text-orange">You Own</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Stop renting leads from marketplaces. We build lead generation systems
              that your plumbing company owns — your website, your rankings, your
              ads, your reputation. Every lead is exclusive to you.
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
                <Link href="/audit">Get Free Lead Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
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

      {/* The Problem with Lead Marketplaces */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            The Problem with Buying Plumbing Leads
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              HomeAdvisor, Angi, Thumbtack — they sell the same lead to 3-5
              plumbing companies. You&apos;re competing on price before you even
              pick up the phone. Close rates are dismal (5-8%), and you&apos;re
              building their brand, not yours.
            </p>
            <p>
              The smartest plumbing companies have figured out that owning your
              lead generation is the path to sustainable growth. When a homeowner
              finds you through Google, lands on your{" "}
              <Link
                href="/services/plumbing-websites"
                className="font-medium text-orange underline decoration-orange/30 hover:decoration-orange"
              >
                plumbing website
              </Link>
              , reads your reviews, and calls you directly — that&apos;s an
              exclusive lead with a 14-20%+ close rate.
            </p>
            <p>
              We build the systems that make that happen. No lead marketplaces, no
              shared leads, no renting someone else&apos;s platform. You own
              everything.
            </p>
          </div>
        </div>
      </section>

      {/* Exclusive vs Shared Leads Comparison */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Exclusive Leads vs. Shared Marketplace Leads
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 bg-navy text-center text-sm font-semibold text-white">
              <div className="p-4">Metric</div>
              <div className="border-x border-slate-700 p-4">
                Exclusive (Your System)
              </div>
              <div className="p-4">Shared (Marketplace)</div>
            </div>
            {exclusiveVsShared.map(([metric, exclusive, shared]) => (
              <div
                key={metric}
                className="grid grid-cols-3 border-t border-slate-100 text-sm"
              >
                <div className="p-4 font-medium text-navy">{metric}</div>
                <div className="border-x border-slate-100 bg-orange/5 p-4 text-center font-medium text-orange">
                  {exclusive}
                </div>
                <div className="p-4 text-center text-slate-400">{shared}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Channels */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              How We Generate Exclusive Plumbing Leads
            </h2>
            <p className="mt-4 text-slate-500">
              Six integrated channels working together to fill your call board.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadChannels.map((channel) => (
              <div
                key={channel.title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3">
                  <channel.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy">
                  {channel.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {channel.description}
                </p>
                <Link
                  href={channel.link}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
                >
                  {channel.linkText}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Proven System */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              The Proven Plumbing Lead Generation System
            </h2>
            <p className="mt-4 text-slate-400">
              How we build a lead machine you own.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Audit & Strategy",
                desc: "We analyze your market, competitors, current lead sources, and identify the highest-ROI opportunities for your specific service area.",
              },
              {
                step: "02",
                title: "Build the Foundation",
                desc: "A fast, mobile-optimized plumbing website with service pages, area pages, CTAs, and conversion tracking. The hub everything feeds into.",
              },
              {
                step: "03",
                title: "Turn on Lead Flow",
                desc: "Launch Google Ads for immediate calls. Optimize your GBP for map pack leads. Begin the SEO campaign for long-term organic growth.",
              },
              {
                step: "04",
                title: "Optimize & Scale",
                desc: "Monthly optimization of every channel. As SEO rankings grow, shift ad spend to new keywords. Continuously increase lead volume while decreasing cost per lead.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-700 bg-navy-light p-6"
              >
                <span className="text-3xl font-extrabold text-orange/30">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">
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

      {/* Why Us */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Why Plumbers Trust Us With Their Lead Generation
          </h2>
          <div className="mt-10 space-y-4">
            {[
              "Licensed plumber, in the trade since 2009 — we understand your business from the inside",
              "250+ plumbing websites built and generating leads nationwide",
              "We only work with plumbing companies — not HVAC, not electrical, just plumbing",
              "Every lead is exclusive to you — we never sell shared leads",
              "We own ThePlumbingDirectory.com — the largest plumbing business database",
              "Transparent reporting: you see every call, every lead, every dollar",
              "No long-term contracts — we earn your business every month",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <p className="text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Plumbing Lead Generation FAQ
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
            Ready to Own Your Plumbing Lead Generation?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Book a free strategy call. We&apos;ll audit your current lead sources,
            show you where you&apos;re leaving money on the table, and build a plan
            to generate exclusive plumbing leads you own.
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
              <Link href="/audit">Get Free Lead Audit</Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
