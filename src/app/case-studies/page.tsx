import { Metadata } from "next";
import Link from "next/link";
import { Globe, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See the plumbing websites we've built and the results they generate. 250+ plumbing websites built by a licensed plumber.",
};

const portfolioItems = [
  {
    name: "Smith Plumbing Co.",
    location: "Chicago, IL",
    type: "Residential Plumbing",
    services: "Full website + Local SEO",
  },
  {
    name: "Reliable Drain Solutions",
    location: "Dallas, TX",
    type: "Drain & Sewer",
    services: "Website + GBP Optimization",
  },
  {
    name: "Elite Water Heater Pros",
    location: "Phoenix, AZ",
    type: "Water Heater Specialist",
    services: "Full website + SEO + Social",
  },
  {
    name: "Metro Plumbing Services",
    location: "Atlanta, GA",
    type: "Commercial & Residential",
    services: "12-Month Growth Plan",
  },
  {
    name: "QuickFix Plumbing",
    location: "Denver, CO",
    type: "Emergency Plumbing",
    services: "Full website + Local SEO",
  },
  {
    name: "Precision Pipe Works",
    location: "Seattle, WA",
    type: "New Construction",
    services: "Website + GBP Optimization",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              250+ Plumbing Websites.{" "}
              <span className="text-orange">Here&apos;s What We Build.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Every site is custom-built for the plumbing company it serves. No
              templates. No cookie-cutter approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg"
              >
                {/* Screenshot placeholder */}
                <div className="flex h-48 items-center justify-center bg-slate-50">
                  <Globe className="h-16 w-16 text-slate-200" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{item.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-medium text-orange">
                      {item.type}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {item.services}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon note */}
          <div className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
            <h3 className="text-xl font-bold text-navy">
              Full Case Studies Coming Soon
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-slate-500">
              We&apos;re documenting detailed before/after breakdowns with real
              metrics from our clients. In the meantime, book a call and
              we&apos;ll walk you through examples live.
            </p>
            <div className="mt-6">
              <Button
                asChild
                className="bg-orange text-white hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-4 w-4" />
                  See Examples on a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Want to be next */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Want to Be Our Next Success Story?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Every great case study starts with a single conversation. Let&apos;s
            talk about what we can build for your plumbing business.
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
              className="border-slate-300 text-slate-600 hover:bg-white"
            >
              <Link href="/audit">
                Get Free Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
