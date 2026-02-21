import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  TrendingUp,
  MapPin,
  Star,
  BarChart3,
  Globe,
  Users,
  CheckCircle,
  Wrench,
  Zap,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Results & Portfolio",
  description:
    "See the types of results we deliver for plumbing companies — from page 1 rankings to 200+ calls per month. 250+ plumbing websites built by a licensed plumber.",
};

const resultTypes = [
  {
    icon: TrendingUp,
    metric: "Page 1 Rankings",
    description:
      "Clients consistently ranking on page 1 of Google for competitive plumbing keywords in their service areas within 3-6 months.",
    details: [
      "Targeted local keywords like 'plumber in [city]'",
      "Service-specific terms like 'water heater repair [city]'",
      "Emergency keywords like '24-hour plumber near me'",
    ],
  },
  {
    icon: Phone,
    metric: "100-200+ Calls/Month",
    description:
      "Plumbing companies going from handful of internet leads to 100-200+ inbound calls per month through organic search and Google Ads.",
    details: [
      "Organic calls from SEO (free, long-term)",
      "Paid calls from Google Ads (immediate)",
      "Google Business Profile calls from Map Pack",
    ],
  },
  {
    icon: MapPin,
    metric: "Google Map Pack Dominance",
    description:
      "Clients showing up in the top 3 Google Map Pack results across multiple cities in their service area.",
    details: [
      "Optimized Google Business Profiles",
      "Local citation building and cleanup",
      "Review generation strategy",
    ],
  },
  {
    icon: Star,
    metric: "5-Star Review Growth",
    description:
      "Plumbing companies going from single-digit reviews to 50, 100, even 200+ Google reviews with our review generation system.",
    details: [
      "Automated post-job review requests",
      "SMS + email review reminders",
      "Review response management",
    ],
  },
  {
    icon: BarChart3,
    metric: "$500K+ Revenue Growth",
    description:
      "Clients attributing $500K+ in additional annual revenue directly to their online marketing system within 12 months.",
    details: [
      "Higher call volume from organic search",
      "Better conversion rates from optimized websites",
      "Increased average ticket from positioning",
    ],
  },
  {
    icon: Users,
    metric: "2-Truck to 8-Truck Growth",
    description:
      "Owner-operators scaling from 1-2 trucks to full teams because they finally have a predictable lead generation machine.",
    details: [
      "Consistent inbound call flow",
      "Reduced dependence on referrals",
      "Ability to hire and keep trucks busy",
    ],
  },
];

const projectTypes = [
  {
    type: "Residential Plumbing Companies",
    description: "Full-service residential plumbers — drain cleaning, water heaters, repiping, fixture installation.",
    services: "Website + SEO + GBP Optimization",
    icon: Wrench,
  },
  {
    type: "Emergency & 24/7 Plumbing",
    description: "Companies that need calls at 2 AM. Emergency-focused CTAs and after-hours conversion systems.",
    services: "Website + PPC + Click-to-Call",
    icon: Zap,
  },
  {
    type: "Drain & Sewer Specialists",
    description: "Niche specialists targeting high-value keywords like sewer line replacement and trenchless repair.",
    services: "Website + SEO + Service Area Pages",
    icon: Globe,
  },
  {
    type: "Commercial Plumbing",
    description: "B2B-focused sites targeting property managers, GCs, and commercial building owners.",
    services: "Website + LinkedIn + Local SEO",
    icon: Users,
  },
  {
    type: "New Construction Plumbing",
    description: "Companies working with builders and developers. Portfolio-focused sites that close contracts.",
    services: "Website + Portfolio + GBP",
    icon: Shield,
  },
  {
    type: "Multi-Location Plumbing",
    description: "Growing companies with multiple service areas that need SEO dominance across entire regions.",
    services: "Website + 50+ Service Area Pages + SEO",
    icon: MapPin,
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
              <span className="text-orange">Real Results.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              We don&apos;t just build websites — we build marketing systems that
              generate booked service calls. Here&apos;s what that looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Results We Deliver */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            The Results We Deliver
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-500">
            These are the types of outcomes our plumbing clients consistently
            achieve. Want to see specific examples? We&apos;ll walk you through
            them on a call.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resultTypes.map((result) => (
              <div
                key={result.metric}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3">
                  <result.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy">{result.metric}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {result.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {result.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange" />
                      <span className="text-xs text-slate-500">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Projects */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Types of Plumbing Companies We Work With
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((project) => (
              <div
                key={project.type}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-3 inline-flex rounded-lg bg-orange/10 p-2.5">
                  <project.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="font-bold text-navy">{project.type}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {project.description}
                </p>
                <p className="mt-3 text-xs font-medium text-orange">
                  {project.services}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See Real Examples CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Want to See Specific Examples?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            We protect our clients&apos; privacy, so we share detailed case
            studies and live examples during strategy sessions. Book a free call
            and we&apos;ll show you real websites, real rankings, and real
            results from plumbing companies like yours.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange text-white hover:bg-orange-hover"
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
              className="border-slate-300 text-slate-600 hover:bg-white"
            >
              <Link href="/growth-report">
                Get Your Growth Report
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
