import { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Phone,
  MapPin,
  Code2,
  Star,
  Zap,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Plumbing Website Design",
  description:
    "Custom plumbing websites built by a licensed plumber. Mobile-first, emergency CTA optimized, structured for your service area. 250+ sites built.",
};

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Over 70% of plumbing searches happen on mobile. Your site will look and work perfectly on every device.",
  },
  {
    icon: Phone,
    title: "Emergency Click-to-Call CTAs",
    description:
      "One-tap calling from every page. Sticky phone buttons. Urgency-driven design that converts visitors into calls.",
  },
  {
    icon: MapPin,
    title: "Service Area Page Structure",
    description:
      "Dedicated pages for every city you serve. This is how you show up when someone searches '[City] plumber.'",
  },
  {
    icon: Code2,
    title: "Schema Markup & Technical SEO",
    description:
      "LocalBusiness schema, service schema, and proper technical setup so Google understands exactly what you do.",
  },
  {
    icon: Star,
    title: "Review Integration",
    description:
      "Your best Google reviews displayed prominently on your site. Social proof that builds trust instantly.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Load Times",
    description:
      "Optimized images, clean code, and modern hosting. Your site loads in under 3 seconds.",
  },
];

export default function PlumbingWebsitesPage() {
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
              Plumbing Websites That Actually{" "}
              <span className="text-orange">Generate Calls</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Not just a pretty website — a conversion system built specifically
              for how plumbing customers search and make decisions.
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

      {/* Why It Matters */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Your Website Is Your 24/7 Salesperson
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              When a homeowner has a burst pipe at 2 AM, they&apos;re searching
              on their phone. If your site doesn&apos;t load fast, look
              professional, and make it dead simple to call you — they&apos;re
              calling your competitor.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What&apos;s Included in Every Website
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

      {/* What Makes Us Different */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              Why a Plumber-Built Website Is Different
            </h2>

            <div className="mt-10 space-y-4">
              {[
                "I know which services to feature prominently based on margin and demand",
                "I understand emergency vs. scheduled service page structure",
                "I build service area pages that actually rank — not generic templates",
                "I know what a homeowner looks for before calling a plumber",
                "I structure CTAs around how dispatch and booking actually work",
                "I've built 250+ of these — I know what converts",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <p className="text-slate-600">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
