import { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Phone,
  Search,
  Globe,
  DollarSign,
  Users,
  Clock,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Plumbing Industry Statistics 2026 — Marketing Data for Plumbers",
  description:
    "Key plumbing industry statistics every plumbing business owner should know. Market size, digital marketing benchmarks, consumer behavior data, and more.",
};

const stats = [
  {
    category: "Industry Size",
    items: [
      { stat: "$130B+", label: "U.S. plumbing industry market size (2025)", source: "IBISWorld" },
      { stat: "175,000+", label: "Plumbing businesses operating in the U.S.", source: "Bureau of Labor Statistics" },
      { stat: "4.2%", label: "Annual industry growth rate", source: "IBISWorld" },
      { stat: "$50-75K", label: "Average revenue per plumbing employee", source: "Industry Average" },
    ],
    icon: TrendingUp,
  },
  {
    category: "Consumer Search Behavior",
    items: [
      { stat: "97%", label: "of homeowners search online before hiring a plumber", source: "BrightLocal" },
      { stat: "72%", label: "of plumbing searches happen on mobile devices", source: "Google" },
      { stat: "46%", label: "of all Google searches have local intent", source: "Google" },
      { stat: "78%", label: "of local mobile searches result in an offline purchase within 24hrs", source: "Google" },
    ],
    icon: Search,
  },
  {
    category: "Google & Local SEO",
    items: [
      { stat: "42%", label: "of searchers click a result in the Google Map Pack", source: "Moz" },
      { stat: "0.63%", label: "of Google searchers click a result on page 2", source: "Backlinko" },
      { stat: "88%", label: "of consumers trust online reviews as much as personal recommendations", source: "BrightLocal" },
      { stat: "4.1", label: "Minimum star rating consumers consider before calling", source: "BrightLocal" },
    ],
    icon: Globe,
  },
  {
    category: "Plumbing Marketing Costs",
    items: [
      { stat: "$25-75", label: "Average cost per lead from Google Ads for plumbing", source: "WordStream" },
      { stat: "$15-40", label: "Average cost per lead from Google Local Service Ads", source: "Google LSA Data" },
      { stat: "$300-500+", label: "Average plumbing service ticket value", source: "Industry Average" },
      { stat: "5-8%", label: "of revenue recommended for marketing spend", source: "SBA" },
    ],
    icon: DollarSign,
  },
  {
    category: "Website & Conversion",
    items: [
      { stat: "3 sec", label: "Max load time before 40% of visitors leave", source: "Google" },
      { stat: "57%", label: "of consumers won't recommend a business with a bad mobile site", source: "Google" },
      { stat: "70%", label: "of small business websites lack a call-to-action on their homepage", source: "HubSpot" },
      { stat: "200%+", label: "Conversion increase when phone number is click-to-call", source: "Google" },
    ],
    icon: Phone,
  },
  {
    category: "Workforce & Demand",
    items: [
      { stat: "525,000+", label: "Licensed plumbers in the U.S.", source: "BLS" },
      { stat: "68,000", label: "New plumbing jobs projected by 2032", source: "BLS" },
      { stat: "16%", label: "Projected plumber job growth rate (faster than average)", source: "BLS" },
      { stat: "$60,090", label: "Median plumber salary in 2024", source: "BLS" },
    ],
    icon: Users,
  },
];

export default function StatsPage() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <BarChart3 className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Data-Driven Decisions
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing Industry{" "}
              <span className="text-orange">Statistics</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              The numbers every plumbing business owner should know. Use this
              data to make smarter marketing decisions and understand where the
              industry is headed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {stats.map((group) => (
              <div key={group.category}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-orange/10 p-2">
                    <group.icon className="h-5 w-5 text-orange" />
                  </div>
                  <h2 className="text-xl font-bold text-navy">
                    {group.category}
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-slate-200 p-5"
                    >
                      <p className="text-3xl font-extrabold text-orange">
                        {item.stat}
                      </p>
                      <p className="mt-1 text-sm font-medium text-navy">
                        {item.label}
                      </p>
                      <p className="mt-2 text-xs text-slate-400">
                        Source: {item.source}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-xl bg-navy p-8 text-center">
            <Clock className="mx-auto h-8 w-8 text-orange" />
            <h2 className="mt-4 text-xl font-bold text-white">
              What Do These Numbers Mean for Your Business?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Every stat on this page represents an opportunity — or a threat.
              On a free strategy session, I&apos;ll show you exactly which ones
              apply to your market and what to do about them.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                className="bg-orange text-white hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Free Strategy Session
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-600 text-slate-300 hover:border-white hover:bg-transparent hover:text-white"
              >
                <Link href="/roi-calculator">
                  Calculate Your ROI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
