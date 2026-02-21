import { Metadata } from "next";
import Link from "next/link";
import {
  Share2,
  Calendar,
  BarChart3,
  Star,
  Facebook,
  MapPin,
  Phone,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "SEO + Social Growth for Plumbers",
  description:
    "Daily Google Business Profile posts, Facebook content, and ongoing local SEO. Keep your plumbing business visible every single day.",
};

const features = [
  {
    icon: MapPin,
    title: "Daily Google Business Profile Posts",
    description:
      "Fresh content on your GBP listing every single day. Updates, tips, promotions, and seasonal content that keeps you active and visible.",
  },
  {
    icon: Facebook,
    title: "Daily Facebook Posts",
    description:
      "Consistent social presence with job photos, tips, reviews, and content that builds trust with homeowners in your area.",
  },
  {
    icon: Share2,
    title: "Local SEO Content Creation",
    description:
      "Blog posts and service pages targeting local plumbing searches. Every piece of content is another chance to rank.",
  },
  {
    icon: Star,
    title: "Review Generation Strategy",
    description:
      "We help you systematically collect more 5-star reviews — the #1 trust signal for homeowners choosing a plumber.",
  },
  {
    icon: BarChart3,
    title: "Monthly Performance Tracking",
    description:
      "Clear reports showing your rankings, traffic, engagement, and what's working. No vanity metrics — just call-driving data.",
  },
  {
    icon: Calendar,
    title: "Content Calendar Management",
    description:
      "We plan, create, and schedule everything. You focus on running your plumbing business.",
  },
];

export default function SocialPostingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Done-For-You Content
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Stay Visible{" "}
              <span className="text-orange">Every Single Day</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Daily GBP posts, daily Facebook content, and ongoing SEO — so your
              plumbing business never goes quiet online.
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
                <Link href="/pricing">Book Free Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Your Competitors Are Posting. Are You?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Google rewards businesses that stay active. Homeowners trust plumbers
            with a visible, updated online presence. If your last GBP post was 6
            months ago and your Facebook is crickets — you&apos;re losing trust
            and rankings to plumbers who show up consistently.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What You Get Every Month
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

      {/* What Content Looks Like */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What Your Content Looks Like
          </h2>
          <div className="mt-8 space-y-4">
            {[
              "Job completion photos with captions that build credibility",
              "Seasonal tips (winterization, spring maintenance, etc.)",
              "Review highlights and customer appreciation posts",
              "Service spotlights (drain cleaning, water heaters, etc.)",
              "Local community engagement content",
              "Before/after project showcases",
              "Emergency service reminders and availability updates",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <p className="text-slate-600">{point}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            All content is written in a plumber&apos;s voice — no generic marketing
            fluff.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
