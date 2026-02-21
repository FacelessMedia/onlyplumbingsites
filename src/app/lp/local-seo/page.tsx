import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Shield,
  MapPin,
  Star,
  ArrowRight,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Local SEO for Plumbers — Dominate the Google Map Pack",
  description:
    "Local SEO services built by a licensed plumber. Get your plumbing company in the Google Map Pack top 3 and generate 100+ calls per month from local search.",
};

const results = [
  { metric: "Top 3", label: "Map Pack Rankings", icon: MapPin },
  { metric: "100+", label: "Calls Per Month", icon: Phone },
  { metric: "50+", label: "Cities Ranked", icon: Globe },
  { metric: "5-Star", label: "Review Growth", icon: Star },
];

const includes = [
  "Google Business Profile full optimization",
  "Service area pages for every city you serve",
  "Local citation building and cleanup",
  "Review generation strategy and automation",
  "Geo-targeted keyword research",
  "Monthly local ranking reports",
  "Competitor gap analysis",
  "NAP consistency audit across all directories",
];

export default function LocalSEOLandingPage() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Local SEO by a Licensed Plumber
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Get Your Plumbing Company in the{" "}
              <span className="text-orange">Google Map Pack</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              90% of plumbing customers choose from the top 3 results in Google
              Maps. We put you there — and keep you there.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-orange px-8 text-lg font-bold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Your Free Local SEO Audit
                </Link>
              </Button>
              <p className="mt-3 text-sm text-slate-400">
                Free 30-minute call. We&apos;ll show you where you rank locally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="text-center">
                <r.icon className="mx-auto h-6 w-6 text-orange" />
                <p className="mt-2 text-2xl font-extrabold text-navy">{r.metric}</p>
                <p className="text-sm text-slate-500">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What&apos;s Included
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg bg-white p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-orange text-white hover:bg-orange-hover">
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Your Free Local SEO Audit
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <TrendingUp className="mx-auto h-10 w-10 text-orange" />
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Every Day You&apos;re Not in the Map Pack,{" "}
            <span className="text-orange">Your Competitors Are Getting Those Calls</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Book a free strategy session and I&apos;ll show you exactly where you rank,
            who&apos;s beating you, and what it takes to flip the script.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-orange px-8 text-white shadow-lg shadow-orange/25 hover:bg-orange-hover">
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Strategy Session
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:border-white hover:bg-transparent hover:text-white">
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
