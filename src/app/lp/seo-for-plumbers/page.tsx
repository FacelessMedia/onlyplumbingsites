import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Shield,
  TrendingUp,
  MapPin,
  Star,
  ArrowRight,
  Search,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SEO for Plumbers — Get Found on Google | Only Plumbing Sites",
  description:
    "Plumbing SEO by a licensed plumber. Page 1 rankings, Map Pack dominance, and 100-200+ calls per month. No contracts. Results-driven.",
};

const results = [
  { metric: "Page 1", label: "Google Rankings", icon: TrendingUp },
  { metric: "100-200+", label: "Calls Per Month", icon: Phone },
  { metric: "Top 3", label: "Map Pack Positions", icon: MapPin },
  { metric: "5-Star", label: "Review Growth", icon: Star },
];

const whatWeDoItems = [
  {
    title: "Keyword Research",
    description: "We find the exact terms homeowners use to find plumbers in your area — emergency, service-specific, and location-based keywords.",
  },
  {
    title: "On-Page SEO",
    description: "Every page optimized with proper title tags, meta descriptions, header hierarchy, internal links, and schema markup.",
  },
  {
    title: "Service Area Pages",
    description: "Dedicated pages for every city you serve. Each one optimized to rank for '[service] in [city]' searches.",
  },
  {
    title: "Google Business Profile",
    description: "Full optimization of your GBP listing — categories, services, photos, posts, and review strategy for Map Pack dominance.",
  },
  {
    title: "Content Strategy",
    description: "Blog posts targeting the questions homeowners ask before they call a plumber. Builds authority and captures top-of-funnel traffic.",
  },
  {
    title: "Technical SEO",
    description: "Site speed, mobile optimization, crawlability, structured data, and Core Web Vitals — the foundation search engines require.",
  },
];

export default function SEOLandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Plumbing SEO by a Licensed Plumber
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Stop Losing Calls to Competitors{" "}
              <span className="text-orange">Who Rank Above You</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              If homeowners can&apos;t find you on Google, they&apos;re calling
              someone else. We put plumbing companies on page 1 — and keep them
              there.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-orange px-8 text-lg font-bold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Your Free SEO Strategy Session
                </Link>
              </Button>
              <p className="mt-3 text-sm text-slate-400">
                We&apos;ll show you exactly where you rank and what it&apos;s
                costing you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="text-center">
                <r.icon className="mx-auto h-6 w-6 text-orange" />
                <p className="mt-2 text-2xl font-extrabold text-navy">
                  {r.metric}
                </p>
                <p className="text-sm text-slate-500">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What Plumbing SEO Actually Looks Like
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-500">
            Not vague promises. Here&apos;s exactly what we do to get your
            plumbing company ranking on Google.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDoItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-3 inline-flex rounded-lg bg-orange/10 p-2.5">
                  <Search className="h-5 w-5 text-orange" />
                </div>
                <h3 className="font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Why Plumbers Trust Us With Their SEO
          </h2>
          <div className="mt-10 space-y-4">
            {[
              "Built by a licensed plumber who understands your business from the inside",
              "We only work with plumbing companies — no HVAC, no electricians, no dentists",
              "No long-term contracts — we earn your business every month",
              "Transparent reporting — you see exactly what we do and what results it generates",
              "250+ plumbing websites built with SEO foundations that actually rank",
              "We understand plumbing search intent — emergency vs. scheduled, residential vs. commercial",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <p className="text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <BarChart3 className="mx-auto h-10 w-10 text-orange" />
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Find Out What Page 1 Rankings Would{" "}
            <span className="text-orange">Mean for Your Business</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Book a free strategy session and we&apos;ll show you your current
            rankings, your competitors&apos; rankings, and exactly what it would
            take to outrank them.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange px-8 text-lg font-bold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Strategy Session
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:border-white hover:bg-transparent hover:text-white"
            >
              <Link href="/growth-report">
                Get Free Growth Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
