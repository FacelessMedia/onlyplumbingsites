"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  DollarSign,
  TrendingUp,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ROICalculatorPage() {
  const [spend, setSpend] = useState("");
  const [ticket, setTicket] = useState("");
  const [closeRate, setCloseRate] = useState("40");
  const [calculated, setCalculated] = useState(false);

  const monthlySpend = Number(spend) || 0;
  const avgTicket = Number(ticket) || 0;
  const rate = Number(closeRate) || 40;

  // Conservative estimates based on plumbing industry averages
  const estimatedCalls = Math.round(monthlySpend * 0.08); // ~$12.50/call blended
  const estimatedJobs = Math.round(estimatedCalls * (rate / 100));
  const estimatedRevenue = estimatedJobs * avgTicket;
  const roi = monthlySpend > 0 ? ((estimatedRevenue - monthlySpend) / monthlySpend * 100).toFixed(0) : "0";
  const annualRevenue = estimatedRevenue * 12;

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    if (monthlySpend > 0 && avgTicket > 0) {
      setCalculated(true);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Calculator className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Free Tool — See Your Potential ROI
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing Marketing{" "}
              <span className="text-orange">ROI Calculator</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Enter your numbers and see how much revenue a proper marketing
              system could generate for your plumbing business.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Inputs */}
            <div>
              <h2 className="text-xl font-bold text-navy">Your Numbers</h2>
              <form onSubmit={handleCalculate} className="mt-6 space-y-6">
                <div>
                  <Label htmlFor="spend">Monthly Marketing Budget ($)</Label>
                  <div className="relative mt-1">
                    <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="spend"
                      type="number"
                      min="0"
                      placeholder="2000"
                      value={spend}
                      onChange={(e) => {
                        setSpend(e.target.value);
                        setCalculated(false);
                      }}
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    How much you plan to spend on website + SEO + ads per month
                  </p>
                </div>

                <div>
                  <Label htmlFor="ticket">Average Job Ticket ($)</Label>
                  <div className="relative mt-1">
                    <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="ticket"
                      type="number"
                      min="0"
                      placeholder="450"
                      value={ticket}
                      onChange={(e) => {
                        setTicket(e.target.value);
                        setCalculated(false);
                      }}
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Your average revenue per completed plumbing job
                  </p>
                </div>

                <div>
                  <Label htmlFor="close">Close Rate (%)</Label>
                  <Input
                    id="close"
                    type="number"
                    min="1"
                    max="100"
                    placeholder="40"
                    value={closeRate}
                    onChange={(e) => {
                      setCloseRate(e.target.value);
                      setCalculated(false);
                    }}
                    className="mt-1"
                  />
                  <p className="mt-1 text-xs text-slate-400">
                    % of calls that turn into booked jobs (industry avg: 30-50%)
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange text-white hover:bg-orange-hover"
                  size="lg"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate My ROI
                </Button>
              </form>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                Projected Monthly Results
              </h2>
              {calculated ? (
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Estimated Calls/Month</p>
                    <p className="text-3xl font-extrabold text-navy">
                      {estimatedCalls}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Estimated Booked Jobs</p>
                    <p className="text-3xl font-extrabold text-navy">
                      {estimatedJobs}
                    </p>
                  </div>
                  <div className="rounded-xl border border-orange/30 bg-orange/5 p-5">
                    <p className="text-sm text-orange">
                      Estimated Monthly Revenue
                    </p>
                    <p className="text-3xl font-extrabold text-navy">
                      ${estimatedRevenue.toLocaleString()}
                    </p>
                  </div>
                  <div className="rounded-xl bg-navy p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-300">
                          Annual Revenue Potential
                        </p>
                        <p className="text-2xl font-extrabold text-white">
                          ${annualRevenue.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-300">ROI</p>
                        <p className="text-2xl font-extrabold text-orange">
                          {roi}%
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                    <p className="text-sm text-green-700">
                      <strong>For every $1 you invest,</strong> you could see $
                      {monthlySpend > 0
                        ? (estimatedRevenue / monthlySpend).toFixed(1)
                        : "0"}{" "}
                      back in revenue. That&apos;s a{" "}
                      <strong>{roi}% return</strong> on your marketing
                      investment.
                    </p>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-orange text-white hover:bg-orange-hover"
                    size="lg"
                  >
                    <Link href="/book">
                      <Phone className="mr-2 h-4 w-4" />
                      Book Strategy Session to Hit These Numbers
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="mt-6 flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50">
                  <div className="text-center">
                    <TrendingUp className="mx-auto h-8 w-8 text-slate-300" />
                    <p className="mt-2 text-sm text-slate-400">
                      Enter your numbers and click &ldquo;Calculate&rdquo; to
                      see your projected results.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 text-center text-xs text-slate-400">
            * Estimates based on plumbing industry averages. Actual results vary
            based on market, competition, service quality, and execution. These
            projections assume a properly built website with SEO and paid
            advertising working together.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Want a <span className="text-orange">Real</span> Projection Based on
            Your Market?
          </h2>
          <p className="mt-4 text-slate-300">
            The calculator above uses industry averages. On a strategy session,
            I&apos;ll pull real data on your specific market, competitors, and
            keywords to give you an accurate projection.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange px-8 text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
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
