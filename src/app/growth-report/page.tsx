"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileSearch,
  BarChart3,
  TrendingUp,
  Target,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  MapPin,
  Globe,
  Phone,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const reportSections = [
  {
    icon: FileSearch,
    title: "Online Presence Score",
    description:
      "We grade your current website on speed, mobile-friendliness, SEO, calls-to-action, and conversion elements. You see exactly where you stand.",
  },
  {
    icon: BarChart3,
    title: "Competitor Gap Analysis",
    description:
      "We pull your top 5 local competitors and show you where they outrank you — and more importantly, where they're vulnerable.",
  },
  {
    icon: MapPin,
    title: "Local SEO Snapshot",
    description:
      "Your Google Business Profile health, Map Pack rankings, review count vs. competitors, and citation consistency across directories.",
  },
  {
    icon: TrendingUp,
    title: "12-Month Growth Projection",
    description:
      "Based on your market data, we project: estimated monthly calls, revenue potential, and ROI timeline with a proper marketing system.",
  },
  {
    icon: Target,
    title: "Custom Recommendations",
    description:
      "A prioritized action plan specific to YOUR business — not generic advice. What to fix first, what to invest in, and what to ignore.",
  },
  {
    icon: Globe,
    title: "Keyword Opportunity Map",
    description:
      "The top plumbing keywords homeowners in your area are searching for — with volume data and difficulty scores.",
  },
];

const socialProof = [
  "Personalized to your specific market and competitors",
  "Built by a licensed plumber who understands the business",
  "Includes actual ranking data and search volume",
  "Delivered as a professional branded PDF",
  "100% free — no credit card, no obligation",
];

export default function GrowthReportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      businessName: formData.get("businessName") as string,
      website: formData.get("website") as string,
      city: formData.get("city") as string,
      trucks: formData.get("trucks") as string,
      revenue: formData.get("revenue") as string,
    };

    try {
      await fetch("/api/growth-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Still show success — form data will be in GHL
    }

    setSubmitted(true);
    setLoading(false);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
                <Sparkles className="h-4 w-4 text-orange" />
                <span className="text-sm font-medium text-slate-300">
                  Free &middot; Personalized &middot; No Obligation
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                See What Your Plumbing Business{" "}
                <span className="text-orange">Could Look Like in 12 Months</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Get a personalized Growth Report showing your current online
                presence score, how you stack up against local competitors, and a
                data-driven projection of what a proper marketing system could
                generate for your business.
              </p>
              <div className="mt-8 space-y-3">
                {socialProof.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-orange" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Report Visual Mockup */}
            <div className="relative">
              <div className="rounded-2xl border border-slate-700 bg-navy-light p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-orange/20 p-2">
                    <BarChart3 className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Your Personalized</p>
                    <p className="text-lg font-bold text-white">Plumbing Business Growth Report</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-navy p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Online Presence Score</span>
                      <span className="text-2xl font-bold text-orange">??/100</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-700">
                      <div className="h-2 w-1/3 rounded-full bg-orange/50" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-navy p-4">
                      <p className="text-xs text-slate-400">Google Rankings</p>
                      <p className="mt-1 text-xl font-bold text-white">??</p>
                      <p className="text-xs text-slate-500">keywords on page 1</p>
                    </div>
                    <div className="rounded-lg bg-navy p-4">
                      <p className="text-xs text-slate-400">Review Gap</p>
                      <p className="mt-1 text-xl font-bold text-white">??</p>
                      <p className="text-xs text-slate-500">behind top competitor</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-navy p-4">
                    <p className="text-xs text-slate-400">12-Month Revenue Projection</p>
                    <p className="mt-1 text-2xl font-bold text-green-400">+$???K</p>
                    <p className="text-xs text-slate-500">estimated additional annual revenue</p>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-slate-500">
                  Request yours free — we build it by hand for your specific market
                </p>
              </div>
              <div className="absolute -right-2 -top-2 rounded-full bg-orange px-3 py-1 text-xs font-bold text-white shadow-lg">
                FREE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              What&apos;s Inside Your Growth Report
            </h2>
            <p className="mt-4 text-slate-500">
              This isn&apos;t a generic template. We research your specific market,
              pull real data, and build a custom report by hand.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reportSections.map((section) => (
              <div
                key={section.title}
                className="rounded-xl border border-slate-200 p-6 transition-all hover:border-orange/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3">
                  <section.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request" className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center sm:p-12">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h2 className="mt-6 text-2xl font-bold text-navy">
                Your Growth Report Is Being Built!
              </h2>
              <p className="mt-4 text-slate-600">
                We&apos;re researching your market, pulling competitor data, and
                building your personalized report. You&apos;ll receive it via email
                within 24-48 hours.
              </p>
              <div className="mt-8 rounded-lg bg-white p-6">
                <p className="font-bold text-navy">While You Wait...</p>
                <p className="mt-2 text-sm text-slate-500">
                  Want to jump straight to a live strategy session? Book a free call
                  and we&apos;ll walk through your report together.
                </p>
                <Button
                  asChild
                  className="mt-4 bg-orange text-white hover:bg-orange-hover"
                >
                  <Link href="/book">
                    <Phone className="mr-2 h-4 w-4" />
                    Book Free Strategy Session
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:p-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  Request Your Free Growth Report
                </h2>
                <p className="mt-3 text-slate-500">
                  Fill out the form below. We&apos;ll build your personalized
                  report and deliver it within 24-48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Ryan"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Smith"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ryan@smithplumbing.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    required
                    placeholder="Smith Plumbing Co."
                    className="mt-1"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="website">Current Website URL</Label>
                    <Input
                      id="website"
                      name="website"
                      placeholder="www.smithplumbing.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Primary City / Service Area *</Label>
                    <Input
                      id="city"
                      name="city"
                      required
                      placeholder="Chicago, IL"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="trucks">Number of Trucks</Label>
                    <select
                      id="trucks"
                      name="trucks"
                      className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                    >
                      <option value="">Select...</option>
                      <option value="1">1 (Just me)</option>
                      <option value="2-3">2-3 trucks</option>
                      <option value="4-6">4-6 trucks</option>
                      <option value="7-10">7-10 trucks</option>
                      <option value="10+">10+ trucks</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="revenue">Annual Revenue Range</Label>
                    <select
                      id="revenue"
                      name="revenue"
                      className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                    >
                      <option value="">Select...</option>
                      <option value="under-300k">Under $300K</option>
                      <option value="300k-500k">$300K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-3m">$1M - $3M</option>
                      <option value="3m-5m">$3M - $5M</option>
                      <option value="5m+">$5M+</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover disabled:opacity-50"
                >
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Get My Free Growth Report
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-slate-400">
                  Your information is secure and will never be shared. We&apos;ll
                  use it only to build your personalized report.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:gap-8 sm:p-8">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange/10">
              <Shield className="h-8 w-8 text-orange" />
            </div>
            <div>
              <p className="font-bold text-navy">Built by Ryan Pietrzak</p>
              <p className="mt-1 text-sm text-slate-500">
                Licensed Illinois plumber since 2014. 250+ plumbing websites built.
                Co-owner of ThePlumbingDirectory.com. Every Growth Report is
                researched and built by hand — not auto-generated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
