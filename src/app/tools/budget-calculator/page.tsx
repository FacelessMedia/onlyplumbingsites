"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  DollarSign,
  Phone,
  ArrowRight,
  Calculator,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Allocation = { channel: string; pct: number; min: number; note: string };

const tiers: { label: string; range: string; allocations: Allocation[] }[] = [
  {
    label: "Starter",
    range: "$500–$1,500/mo",
    allocations: [
      { channel: "Website (one-time build)", pct: 0, min: 0, note: "One-time: $3,000–$8,000 depending on size. Then $0/mo if you own it." },
      { channel: "SEO + Content", pct: 60, min: 300, note: "Blog posts, service area pages, Google Business Profile optimization." },
      { channel: "Google Ads (PPC)", pct: 30, min: 150, note: "Target emergency + high-intent keywords in your top 2-3 cities." },
      { channel: "Review Generation", pct: 10, min: 50, note: "Automated review requests via text/email after completed jobs." },
    ],
  },
  {
    label: "Growth",
    range: "$1,500–$4,000/mo",
    allocations: [
      { channel: "SEO + Content", pct: 45, min: 675, note: "Expanded keyword targeting, 4+ blog posts/month, service area page buildout." },
      { channel: "Google Ads (PPC)", pct: 35, min: 525, note: "LSAs + Search Ads targeting 5-10 cities. Retargeting campaigns." },
      { channel: "Social Media", pct: 10, min: 150, note: "3-5 posts/week on Facebook + Google Business Profile." },
      { channel: "Review + Reputation", pct: 10, min: 150, note: "Automated review campaigns + monitoring + response management." },
    ],
  },
  {
    label: "Domination",
    range: "$4,000–$10,000+/mo",
    allocations: [
      { channel: "SEO + Content", pct: 35, min: 1400, note: "Full content team. Pillar pages, video content, link building." },
      { channel: "Google Ads (PPC + LSA)", pct: 40, min: 1600, note: "Full-funnel: LSAs, Search, Display, YouTube. 15+ cities." },
      { channel: "Social + Video", pct: 15, min: 600, note: "Daily content, video production, Facebook/Instagram ads." },
      { channel: "Review + Email + CRO", pct: 10, min: 400, note: "Review automation, email nurture, A/B testing, conversion optimization." },
    ],
  },
];

export default function BudgetCalculatorPage() {
  const [budget, setBudget] = useState("");
  const monthlyBudget = Number(budget) || 0;

  const activeTier = useMemo(() => {
    if (monthlyBudget < 1500) return tiers[0];
    if (monthlyBudget < 4000) return tiers[1];
    return tiers[2];
  }, [monthlyBudget]);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Calculator className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Free Tool
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing Marketing{" "}
              <span className="text-orange">Budget Calculator</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Enter your monthly marketing budget and see exactly how to
              allocate it across channels for maximum ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <Label htmlFor="budget" className="text-base font-bold text-navy">
              Your Monthly Marketing Budget
            </Label>
            <div className="relative mt-2">
              <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                id="budget"
                type="number"
                min="0"
                placeholder="2000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="pl-10 text-lg"
              />
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Don&apos;t include one-time costs like website builds. Just your
              recurring monthly spend.
            </p>
          </div>

          {monthlyBudget > 0 && (
            <div className="mt-12">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-navy">
                    Recommended: {activeTier.label} Plan
                  </h2>
                  <p className="text-sm text-slate-500">
                    Typical range: {activeTier.range}
                  </p>
                </div>
                <div className="rounded-lg bg-orange/10 px-4 py-2 text-right">
                  <p className="text-sm text-slate-500">Your budget</p>
                  <p className="text-xl font-bold text-orange">
                    ${monthlyBudget.toLocaleString()}/mo
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {activeTier.allocations.map((a) => {
                  const amount = Math.round(monthlyBudget * (a.pct / 100));
                  return (
                    <div
                      key={a.channel}
                      className="rounded-xl border border-slate-200 p-5"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-navy">{a.channel}</h3>
                        <div className="text-right">
                          <p className="text-lg font-bold text-navy">
                            ${amount.toLocaleString()}
                          </p>
                          <p className="text-xs text-slate-400">{a.pct}% of budget</p>
                        </div>
                      </div>
                      {/* Progress bar */}
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-orange transition-all"
                          style={{ width: `${a.pct}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-slate-500">{a.note}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-10 rounded-xl bg-navy p-8 text-center">
                <TrendingUp className="mx-auto h-8 w-8 text-orange" />
                <h2 className="mt-4 text-xl font-bold text-white">
                  Want a Custom Budget Plan?
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  This calculator uses industry averages. On a strategy session,
                  I&apos;ll build a custom allocation plan based on your market,
                  competitors, and goals.
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
                      See ROI Calculator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Tier overview (shown before calculation) */}
          {!monthlyBudget && (
            <div className="mt-12">
              <h2 className="text-center text-2xl font-bold text-navy">
                Budget Tiers for Plumbing Companies
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {tiers.map((tier) => (
                  <div
                    key={tier.label}
                    className="rounded-xl border border-slate-200 p-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-orange">
                      {tier.label}
                    </p>
                    <p className="mt-1 text-lg font-bold text-navy">
                      {tier.range}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {tier.allocations.map((a) => (
                        <li
                          key={a.channel}
                          className="text-xs text-slate-500"
                        >
                          {a.pct}% — {a.channel}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
