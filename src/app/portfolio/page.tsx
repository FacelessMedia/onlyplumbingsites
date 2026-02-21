import { Metadata } from "next";
import Link from "next/link";
import { Phone, Globe, TrendingUp, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Portfolio — 250+ Plumbing Websites Built",
  description:
    "See the plumbing websites we've built. Custom designs, SEO foundations, and conversion-optimized pages that generate calls for plumbing companies nationwide.",
};

const portfolioItems = [
  {
    title: "Full-Service Plumbing Company",
    location: "Chicago Metro Area",
    services: "Website + SEO + Google Ads",
    result: "150+ calls/month from organic search",
    features: ["Service area pages for 15 cities", "Emergency CTA system", "Google Business Profile optimization"],
  },
  {
    title: "Residential Plumbing Contractor",
    location: "Houston, TX",
    services: "Website + Local SEO",
    result: "Top 3 Map Pack in 8 cities",
    features: ["Mobile-first design", "Click-to-call on every page", "Review integration"],
  },
  {
    title: "Commercial Plumbing Company",
    location: "Phoenix, AZ",
    services: "Website + SEO + Social",
    result: "3x increase in commercial leads",
    features: ["Commercial service focus pages", "Project portfolio section", "Quote request system"],
  },
  {
    title: "Emergency Plumbing Service",
    location: "Atlanta, GA",
    services: "Website + Google Ads",
    result: "200+ emergency calls/month",
    features: ["24/7 emergency CTAs", "Fast-loading mobile pages", "Location-based landing pages"],
  },
  {
    title: "Drain Cleaning Specialist",
    location: "Denver, CO",
    services: "Website + SEO",
    result: "Page 1 for 20+ drain keywords",
    features: ["Service-specific content", "Before/after gallery", "Pricing transparency pages"],
  },
  {
    title: "New Construction Plumber",
    location: "Dallas, TX",
    services: "Website + Local SEO",
    result: "$500K+ in new project revenue",
    features: ["Builder partnership pages", "Project showcase", "Specification request forms"],
  },
  {
    title: "Multi-Location Plumbing Co.",
    location: "Miami, FL Area",
    services: "Website + SEO + Ads",
    result: "4 locations, all in Map Pack top 3",
    features: ["Multi-location management", "Per-location service pages", "Centralized booking system"],
  },
  {
    title: "Plumbing & HVAC Company",
    location: "Los Angeles, CA",
    services: "Website + Full Marketing",
    result: "100+ calls/month per service line",
    features: ["Dual-service architecture", "Seasonal campaign pages", "Review generation system"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              250+ Plumbing Websites{" "}
              <span className="text-orange">Built & Ranked</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Every project is custom-built for the plumbing company it serves.
              No templates. No shortcuts. Here are some representative results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-10 px-4">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-navy">250+</p>
            <p className="text-sm text-slate-500">Websites Built</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-navy">50+</p>
            <p className="text-sm text-slate-500">Cities Ranked</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-navy">15+</p>
            <p className="text-sm text-slate-500">Years in Plumbing</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-navy">100%</p>
            <p className="text-sm text-slate-500">Client-Owned Sites</p>
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-orange/30 hover:shadow-lg"
              >
                {/* Placeholder screenshot area */}
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                  <Globe className="h-12 w-12 text-orange/30" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {item.location}
                  </p>
                  <div className="mt-3 rounded-lg bg-orange/5 px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5 text-orange" />
                      <p className="text-xs font-bold text-orange">
                        {item.result}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1">
                    {item.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs text-slate-500"
                      >
                        • {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-slate-400">
                    {item.services}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-400">
            Screenshots and live URLs available upon request. Client names
            shared with permission during strategy sessions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Want Results Like These?
          </h2>
          <p className="mt-4 text-slate-500">
            Book a free strategy session and I&apos;ll show you exactly what we
            can build for your plumbing business.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
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
              className="border-slate-300 text-slate-600 hover:bg-slate-100"
            >
              <Link href="/case-studies">
                See Detailed Results
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
