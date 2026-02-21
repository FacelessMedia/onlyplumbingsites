"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Phone,
  ArrowRight,
  Loader2,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type GradeResult = {
  score: number;
  grade: string;
  checks: { label: string; status: "pass" | "fail" | "warn"; note: string }[];
};

export default function WebsiteGraderPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GradeResult | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const res = await fetch("/api/website-grader", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Free Tool — No Email Required
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing Website{" "}
              <span className="text-orange">Grader</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Enter your website URL and get an instant score on how well your
              plumbing website is set up to generate calls from Google.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="text"
                  placeholder="yourplumbingsite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10 text-base"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="bg-orange text-white hover:bg-orange-hover disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Site...
                  </>
                ) : (
                  "Grade My Website"
                )}
              </Button>
            </form>

            {loading && (
              <p className="mt-4 text-sm text-slate-400">
                Fetching your website and running 10 real checks. This may take a few seconds...
              </p>
            )}

            {error && (
              <div className="mx-auto mt-6 max-w-lg rounded-lg border border-red-200 bg-red-50 p-4 text-center">
                <p className="text-sm font-medium text-red-700">{error}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      {result && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Score */}
            <div className="mb-10 text-center">
              <div
                className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 ${
                  result.score >= 60
                    ? "border-green-500"
                    : result.score >= 40
                    ? "border-yellow-500"
                    : "border-red-500"
                }`}
              >
                <div>
                  <p
                    className={`text-4xl font-extrabold ${
                      result.score >= 60
                        ? "text-green-600"
                        : result.score >= 40
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {result.grade}
                  </p>
                  <p className="text-xs text-slate-500">
                    {result.score}/100
                  </p>
                </div>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-navy">
                Your Website Score: {result.score}/100
              </h2>
              <p className="mt-2 text-slate-500">
                {result.score < 40
                  ? "Your plumbing website has significant room for improvement. You're likely losing calls to competitors."
                  : result.score < 60
                  ? "Your website is okay but has several issues that are costing you calls."
                  : "Your website has a solid foundation but there's still room to improve."}
              </p>
            </div>

            {/* Checks */}
            <div className="space-y-3">
              {result.checks.map((check) => (
                <div
                  key={check.label}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 p-4"
                >
                  {check.status === "pass" ? (
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  ) : check.status === "fail" ? (
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  ) : (
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
                  )}
                  <div>
                    <p className="font-medium text-navy">{check.label}</p>
                    <p className="mt-1 text-sm text-slate-500">{check.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-xl bg-navy p-8 text-center">
              <h3 className="text-xl font-bold text-white">
                Want a Full Professional Audit?
              </h3>
              <p className="mt-3 text-slate-300">
                This grader covers the basics. On a free strategy session,
                we&apos;ll do a deep dive into your website, Google rankings,
                competitors, and show you a detailed plan to start generating
                more calls.
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
                  <Link href="/growth-report">
                    Get Your Growth Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How it works (shown before results) */}
      {!result && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              What We Check
            </h2>
            <p className="mt-4 text-center text-slate-500">
              Our grader evaluates your plumbing website against the 10 most
              important factors that determine whether your site generates calls
              or just takes up space on the internet.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "HTTPS Security",
                "Mobile-Friendly Design",
                "Click-to-Call Buttons",
                "Service Area Pages",
                "Google Business Profile",
                "Page Load Speed",
                "Schema Markup",
                "Clear CTAs",
                "Unique Content",
                "Trust Signals",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg bg-slate-50 p-3"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-orange" />
                  <span className="text-sm font-medium text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
