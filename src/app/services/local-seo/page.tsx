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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Local SEO for Plumbers",
  description:
    "Dominate your local search results. Service area pages, Google Business Profile optimization, and monthly SEO content — built by a licensed plumber.",
};

const features = [
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description:
      "Full setup and ongoing optimization of your GBP listing. Categories, services, photos, posts, and Q&A — all dialed in.",
  },
  {
    icon: FileText,
    title: "Service Area Page Expansion",
    description:
      "Dedicated pages for every city and neighborhood you serve. This is how you rank for '[City] plumber' searches.",
  },
  {
    icon: Search,
    title: "Local Keyword Targeting",
    description:
      "We research and target the exact phrases homeowners in your area are searching. Not vanity keywords — call-generating ones.",
  },
  {
    icon: BarChart3,
    title: "Monthly Performance Reports",
    description:
      "See exactly what's working. Rankings, traffic, calls, and what we're doing next. No mystery.",
  },
  {
    icon: Building,
    title: "Citation Building & Cleanup",
    description:
      "Consistent business information across every directory. Inconsistencies kill your local rankings.",
  },
  {
    icon: TrendingUp,
    title: "Monthly SEO Content",
    description:
      "4 blog posts per month targeting local plumbing searches. Each post is a new opportunity to rank and generate calls.",
  },
];

export default function LocalSEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Built by a Licensed Plumber
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Local SEO That Puts Your Plumbing Business{" "}
              <span className="text-orange">on the Map</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Rank in your service area. Get found when homeowners search for a
              plumber. Turn Google into your #1 lead source.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange text-white hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Strategy Call
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:border-white hover:bg-transparent hover:text-white"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local SEO */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Why Local SEO Is the #1 Investment for Plumbers
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              97% of consumers search online for local services. If you&apos;re not
              showing up in the top 3 on Google Maps for your service area,
              you&apos;re handing calls to your competitors every single day.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3">
            {[
              { stat: "97%", label: "of people search online for local services" },
              { stat: "46%", label: "of Google searches have local intent" },
              { stat: "78%", label: "of local searches lead to a purchase within 24hrs" },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <p className="text-4xl font-extrabold text-orange">{item.stat}</p>
                <p className="mt-2 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What&apos;s Included
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
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
          <div className="mt-8 space-y-4">
            {[
              "Most plumbing websites have one page that says 'We serve the greater metro area'",
              "Google can't rank a single page for 20 different cities",
              "We build dedicated pages for each city you serve — optimized for that specific market",
              "Each page targets '[City] plumber', '[City] drain cleaning', '[City] water heater repair'",
              "Result: you show up in Google Maps AND organic results for every service area",
              "We add 2 new service area pages every month so your reach keeps growing",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <p className="text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
