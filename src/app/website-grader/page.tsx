"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Globe,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Phone,
  ArrowRight,
  Shield,
  ChevronDown,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type GradeCheck = {
  label: string;
  status: "pass" | "fail" | "warn";
  note: string;
  recommendation?: string;
  details?: Record<string, string>;
};

type GradeResult = {
  score: number;
  grade: string;
  checks: GradeCheck[];
  domain?: string;
  detectedCity?: string;
};

// The staged loading steps
const ANALYSIS_STEPS = [
  { label: "Connecting to your website...", duration: 1500 },
  { label: "Checking SSL certificate & HTTPS...", duration: 1200 },
  { label: "Analyzing mobile responsiveness...", duration: 1400 },
  { label: "Scanning for click-to-call links...", duration: 1000 },
  { label: "Evaluating SEO title tag...", duration: 1800 },
  { label: "Analyzing meta description...", duration: 1200 },
  { label: "Checking schema markup & structured data...", duration: 1500 },
  { label: "Measuring server response speed...", duration: 2000 },
  { label: "Analyzing H1 heading for SEO value...", duration: 1400 },
  { label: "Auditing image alt text...", duration: 1200 },
  { label: "Checking reviews & social proof...", duration: 1000 },
  { label: "Evaluating service area strategy...", duration: 1500 },
  { label: "Analyzing internal linking structure...", duration: 1200 },
  { label: "Comparing against Google's benchmarks...", duration: 1800 },
  { label: "Generating your report...", duration: 1200 },
];

const TOTAL_ANALYSIS_TIME = ANALYSIS_STEPS.reduce((sum, s) => sum + s.duration, 0);

function ExpandableCheck({ check }: { check: GradeCheck }) {
  const [open, setOpen] = useState(false);
  const hasExtra = check.recommendation || check.details;

  return (
    <div
      className={`rounded-lg border p-4 transition-all ${
        check.status === "pass"
          ? "border-green-200 bg-green-50/50"
          : check.status === "fail"
          ? "border-red-200 bg-red-50/50"
          : "border-yellow-200 bg-yellow-50/50"
      }`}
    >
      <div
        className={`flex items-start gap-3 ${hasExtra ? "cursor-pointer" : ""}`}
        onClick={() => hasExtra && setOpen(!open)}
      >
        {check.status === "pass" ? (
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
        ) : check.status === "fail" ? (
          <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
        ) : (
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-navy">{check.label}</p>
            {hasExtra && (
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {check.note}
          </p>
        </div>
      </div>

      {open && hasExtra && (
        <div className="mt-3 ml-8 space-y-3 border-t border-slate-200 pt-3">
          {check.details && (
            <div className="rounded-md bg-white p-3">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Details
              </p>
              <div className="space-y-1">
                {Object.entries(check.details).map(([key, value]) => (
                  <div key={key} className="flex gap-2 text-sm">
                    <span className="shrink-0 font-medium text-slate-500">
                      {key}:
                    </span>
                    <span className="text-slate-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {check.recommendation && (
            <div className="flex gap-2 rounded-md bg-orange/5 p-3">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-orange">
                  Recommendation
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  {check.recommendation}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function WebsiteGraderPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GradeResult | null>(null);
  const [error, setError] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const pendingResult = useRef<GradeResult | null>(null);

  // Auto-focus the input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to results when they appear
  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  const runAnalysisAnimation = useCallback(() => {
    let step = 0;
    setCurrentStep(0);

    const advanceStep = () => {
      if (step < ANALYSIS_STEPS.length - 1) {
        step++;
        setCurrentStep(step);
        setTimeout(advanceStep, ANALYSIS_STEPS[step].duration);
      } else {
        setAnalysisComplete(true);
      }
    };

    setTimeout(advanceStep, ANALYSIS_STEPS[0].duration);
  }, []);

  // When both API and animation are done, show results
  useEffect(() => {
    if (analysisComplete && pendingResult.current) {
      setResult(pendingResult.current);
      pendingResult.current = null;
      setLoading(false);
      setAnalysisComplete(false);
    }
  }, [analysisComplete]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);
    setError("");
    setAnalysisComplete(false);
    pendingResult.current = null;

    // Start the animation
    runAnalysisAnimation();

    try {
      const res = await fetch("/api/website-grader", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        setAnalysisComplete(false);
      } else {
        // Store the result — it'll be shown when the animation finishes
        pendingResult.current = data;
        // If animation already done, show immediately
        if (analysisComplete) {
          setResult(data);
          pendingResult.current = null;
          setLoading(false);
          setAnalysisComplete(false);
        }
        // Otherwise, the useEffect above will handle it
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
      setAnalysisComplete(false);
    }
  }

  const passCount = result?.checks.filter((c) => c.status === "pass").length ?? 0;
  const warnCount = result?.checks.filter((c) => c.status === "warn").length ?? 0;
  const failCount = result?.checks.filter((c) => c.status === "fail").length ?? 0;

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
              Enter your website URL and get a detailed score on how well your
              plumbing website is set up to generate calls from Google.
            </p>

            {!loading && (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="yourplumbingsite.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-11 w-full rounded-lg border border-slate-600 bg-navy-light pl-10 pr-4 text-base text-white placeholder:text-slate-500 outline-none transition-colors focus:border-orange focus:ring-2 focus:ring-orange/30"
                    required
                    autoComplete="url"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-orange text-white hover:bg-orange-hover"
                >
                  Grade My Website
                </Button>
              </form>
            )}

            {error && !loading && (
              <div className="mx-auto mt-6 max-w-lg rounded-lg border border-red-200 bg-red-50 p-4 text-center">
                <p className="text-sm font-medium text-red-700">{error}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Loading animation */}
      {loading && (
        <section className="bg-navy pb-20">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-slate-700 bg-navy-light p-6 sm:p-8">
              <div className="mb-6 text-center">
                <p className="text-sm font-medium text-slate-400">
                  Analyzing{" "}
                  <span className="font-bold text-orange">{url.trim()}</span>
                </p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-orange transition-all duration-1000 ease-out"
                    style={{
                      width: `${Math.min(
                        98,
                        ((currentStep + 1) / ANALYSIS_STEPS.length) * 100
                      )}%`,
                    }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Step {currentStep + 1} of {ANALYSIS_STEPS.length}
                </p>
              </div>

              <div className="space-y-2">
                {ANALYSIS_STEPS.map((step, idx) => (
                  <div
                    key={step.label}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-500 ${
                      idx < currentStep
                        ? "text-green-400 opacity-60"
                        : idx === currentStep
                        ? "bg-slate-700/50 font-medium text-white"
                        : "text-slate-600 opacity-40"
                    }`}
                  >
                    {idx < currentStep ? (
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-400" />
                    ) : idx === currentStep ? (
                      <div className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-orange border-t-transparent" />
                    ) : (
                      <div className="h-4 w-4 shrink-0 rounded-full border border-slate-600" />
                    )}
                    {step.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {result && (
        <section ref={resultRef} className="scroll-mt-8 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Score header */}
            <div className="mb-10 text-center">
              <div
                className={`mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 shadow-lg ${
                  result.score >= 70
                    ? "border-green-500 shadow-green-100"
                    : result.score >= 50
                    ? "border-yellow-500 shadow-yellow-100"
                    : "border-red-500 shadow-red-100"
                }`}
              >
                <div>
                  <p
                    className={`text-4xl font-extrabold ${
                      result.score >= 70
                        ? "text-green-600"
                        : result.score >= 50
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {result.grade}
                  </p>
                  <p className="text-sm font-medium text-slate-500">
                    {result.score}/95
                  </p>
                </div>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-navy">
                {result.domain
                  ? `Score for ${result.domain}`
                  : `Your Website Score: ${result.score}/95`}
              </h2>
              <p className="mt-2 text-slate-500">
                {result.score < 35
                  ? "Your plumbing website needs serious work. You're almost certainly losing calls to competitors with better sites."
                  : result.score < 50
                  ? "Your website has several critical issues that are costing you leads. The good news: these are fixable."
                  : result.score < 70
                  ? "Your website has a decent foundation, but there are clear opportunities to generate significantly more calls."
                  : "Strong site — but even top-performing websites can improve. Here's where to focus next."}
              </p>

              {/* Score breakdown mini-bar */}
              <div className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium text-slate-600">
                    {passCount} Passed
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium text-slate-600">
                    {warnCount} Warnings
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="font-medium text-slate-600">
                    {failCount} Failed
                  </span>
                </div>
              </div>
            </div>

            {/* Failures first, then warnings, then passes */}
            <div className="space-y-3">
              {result.checks
                .sort((a, b) => {
                  const order = { fail: 0, warn: 1, pass: 2 };
                  return order[a.status] - order[b.status];
                })
                .map((check) => (
                  <ExpandableCheck key={check.label} check={check} />
                ))}
            </div>

            {/* Tip to click */}
            <p className="mt-4 text-center text-xs text-slate-400">
              Click any check to see details &amp; recommendations
            </p>

            {/* CTA */}
            <div className="mt-12 rounded-xl bg-navy p-8 text-center">
              <h3 className="text-xl font-bold text-white">
                Want a Full Professional Audit?
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                This grader covers the technical basics. On a free strategy
                session, I&apos;ll do a deep dive into your website, Google
                rankings, competitors, and show you a detailed plan to start
                generating more calls.
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
                  <Link href="/tools/citation-checker">
                    Check Your Citations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How it works (shown before results and when not loading) */}
      {!result && !loading && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              What We Analyze
            </h2>
            <p className="mt-4 text-center text-slate-500">
              Our grader evaluates your plumbing website against 12 critical
              factors that determine whether your site generates calls or just
              takes up space on the internet.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "HTTPS Security",
                "Mobile Responsiveness",
                "Click-to-Call Links",
                "SEO Title Tag Analysis",
                "Meta Description Quality",
                "Schema Markup / Structured Data",
                "Server Response Speed (TTFB)",
                "H1 Heading SEO Value",
                "Image Alt Text Coverage",
                "Reviews & Social Proof",
                "Service Area Page Strategy",
                "Internal Linking Structure",
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
            <p className="mt-6 text-center text-sm text-slate-400">
              Every check includes specific recommendations for plumbing
              businesses — not generic advice.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
