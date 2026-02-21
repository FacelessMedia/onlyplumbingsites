import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Shield,
  Globe,
  TrendingUp,
  Star,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Get a Plumbing Website That Generates Calls | Only Plumbing Sites",
  description:
    "Custom plumbing websites built by a licensed plumber. 250+ sites built. Designed to convert visitors into booked service calls.",
};

const benefits = [
  "Built specifically for your plumbing company and market",
  "Designed to convert visitors into phone calls",
  "Mobile-first — looks perfect on every device",
  "Built-in SEO foundation for Google rankings",
  "Click-to-call buttons on every page",
  "Service area pages for every city you serve",
  "Google Business Profile optimization included",
  "You own the website — take it if you ever leave",
];

const objections = [
  {
    question: "How is this different from Wix or Squarespace?",
    answer:
      "Those are generic website builders. We build plumbing-specific sites with conversion psychology, emergency CTAs, service area SEO, and trust signals that make homeowners pick up the phone.",
  },
  {
    question: "Do I really need a new website?",
    answer:
      "If your current site isn't generating 50+ calls per month from organic search, it's leaving money on the table. Most plumbing websites we audit have 5-10 critical conversion issues.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most plumbing websites are live within 2-3 weeks. We handle everything — content, design, SEO setup, and launch.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We'll audit your current site for free during our strategy session and show you exactly what's wrong and what it's costing you in lost calls.",
  },
];

export default function PlumbingWebsiteLandingPage() {
  return (
    <>
      {/* Hero — single focus */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Built by a Licensed Plumber — Not a Marketing Agency
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Get a Plumbing Website That{" "}
              <span className="text-orange">Actually Generates Calls</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              250+ plumbing websites built. Every one designed to turn Google
              searches into booked service calls. Tailored to your market. No contracts.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-orange px-8 text-lg font-bold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Your Free Strategy Session
                </Link>
              </Button>
              <p className="mt-3 text-sm text-slate-400">
                Free 30-minute call. No pressure. No contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-slate-200 bg-slate-50 py-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Globe className="h-5 w-5 text-orange" />
            250+ Sites Built
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <TrendingUp className="h-5 w-5 text-orange" />
            15+ Years in Plumbing
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Star className="h-5 w-5 text-orange" />
            In the Trade Since 2009
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Clock className="h-5 w-5 text-orange" />
            2-3 Week Turnaround
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What You Get
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-lg bg-slate-50 p-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <span className="text-sm font-medium text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-orange text-white hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Your Free Strategy Session
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Objection handling */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Common Questions
          </h2>
          <div className="mt-10 space-y-6">
            {objections.map((obj) => (
              <div
                key={obj.question}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-bold text-navy">{obj.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {obj.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Get a Website That{" "}
            <span className="text-orange">Actually Works?</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Book a free 30-minute strategy session. We&apos;ll review your
            current online presence and show you exactly how to start generating
            more calls.
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
