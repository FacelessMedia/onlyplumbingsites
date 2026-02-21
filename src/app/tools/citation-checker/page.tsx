"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Phone,
  ArrowRight,
  Shield,
  MapPin,
  Building2,
  Globe,
  ChevronDown,
  AlertOctagon,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type CitationResult = {
  source: {
    name: string;
    url: string;
    category: string;
    importance: string;
  };
  found: boolean;
  napMatch: "consistent" | "inconsistent" | "partial" | "not_found";
  details?: string;
};

type CategorySummary = {
  category: string;
  label: string;
  total: number;
  found: number;
  consistent: number;
  inconsistent: number;
  partial: number;
  notFound: number;
  results: CitationResult[];
};

type CheckerResult = {
  overallScore: number;
  grade: string;
  presenceScore: number;
  consistencyScore: number;
  totalSources: number;
  totalFound: number;
  totalConsistent: number;
  totalInconsistent: number;
  totalPartial: number;
  napIssues: string[];
  categories: CategorySummary[];
};

const ANALYSIS_STEPS = [
  { label: "Extracting NAP data from your website...", duration: 1500 },
  { label: "Comparing website NAP vs Google Business Profile...", duration: 1200 },
  { label: "Checking plumbing-specific directories...", duration: 2000 },
  { label: "Scanning review sites...", duration: 1500 },
  { label: "Checking mapping & navigation platforms...", duration: 1200 },
  { label: "Scanning social media profiles...", duration: 1400 },
  { label: "Checking home services directories...", duration: 2000 },
  { label: "Scanning general business directories...", duration: 2500 },
  { label: "Checking data aggregators...", duration: 1800 },
  { label: "Scanning local & regional directories...", duration: 1500 },
  { label: "Checking government & BBB listings...", duration: 1200 },
  { label: "Analyzing NAP consistency across all sources...", duration: 1800 },
  { label: "Calculating your citation score...", duration: 1200 },
];

function CategorySection({ cat, defaultOpen }: { cat: CategorySummary; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-left hover:bg-slate-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-navy">{cat.label}</h3>
          <span className="text-xs text-slate-400">
            {cat.total} directories
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-xs">
            <span className="text-green-600 font-medium">{cat.found} found</span>
            <span className="text-slate-400">|</span>
            <span className="text-red-500 font-medium">{cat.notFound} missing</span>
            {cat.inconsistent > 0 && (
              <>
                <span className="text-slate-400">|</span>
                <span className="text-yellow-600 font-medium">{cat.inconsistent} inconsistent</span>
              </>
            )}
          </div>
          <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
        </div>
      </button>

      {open && (
        <div className="divide-y divide-slate-100">
          {cat.results.map((r) => (
            <div
              key={r.source.name}
              className={`flex items-center gap-3 px-5 py-3 text-sm ${
                r.napMatch === "not_found" ? "bg-white" :
                r.napMatch === "consistent" ? "bg-green-50/30" :
                r.napMatch === "inconsistent" ? "bg-red-50/30" :
                "bg-yellow-50/30"
              }`}
            >
              {r.napMatch === "consistent" ? (
                <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
              ) : r.napMatch === "inconsistent" ? (
                <XCircle className="h-4 w-4 shrink-0 text-red-500" />
              ) : r.napMatch === "partial" ? (
                <AlertTriangle className="h-4 w-4 shrink-0 text-yellow-500" />
              ) : (
                <XCircle className="h-4 w-4 shrink-0 text-slate-300" />
              )}

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-navy">{r.source.name}</span>
                  <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                    r.source.importance === "critical" ? "bg-red-100 text-red-700" :
                    r.source.importance === "high" ? "bg-orange-100 text-orange-700" :
                    r.source.importance === "medium" ? "bg-blue-100 text-blue-700" :
                    "bg-slate-100 text-slate-500"
                  }`}>
                    {r.source.importance}
                  </span>
                </div>
                {r.details && (
                  <p className="mt-0.5 text-xs text-slate-500">{r.details}</p>
                )}
              </div>

              <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                r.napMatch === "consistent" ? "bg-green-100 text-green-700" :
                r.napMatch === "inconsistent" ? "bg-red-100 text-red-700" :
                r.napMatch === "partial" ? "bg-yellow-100 text-yellow-700" :
                "bg-slate-100 text-slate-500"
              }`}>
                {r.napMatch === "consistent" ? "Consistent" :
                 r.napMatch === "inconsistent" ? "Inconsistent" :
                 r.napMatch === "partial" ? "Partial" :
                 "Not Found"}
              </span>

              {r.source.url && !r.source.url.startsWith("varies") && (
                <a
                  href={`https://${r.source.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-slate-300 hover:text-orange transition-colors"
                  title={`Visit ${r.source.name}`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CitationCheckerPage() {
  const [step, setStep] = useState<"form" | "loading" | "results">("form");
  const [result, setResult] = useState<CheckerResult | null>(null);
  const [error, setError] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [showGBP, setShowGBP] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const pendingResult = useRef<CheckerResult | null>(null);
  const [animDone, setAnimDone] = useState(false);

  // Form fields
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [gbpName, setGbpName] = useState("");
  const [gbpPhone, setGbpPhone] = useState("");
  const [gbpAddress, setGbpAddress] = useState("");
  const [gbpCity, setGbpCity] = useState("");
  const [gbpState, setGbpState] = useState("");
  const [gbpZip, setGbpZip] = useState("");

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  const runAnimation = useCallback(() => {
    let s = 0;
    setCurrentStep(0);
    const advance = () => {
      if (s < ANALYSIS_STEPS.length - 1) {
        s++;
        setCurrentStep(s);
        setTimeout(advance, ANALYSIS_STEPS[s].duration);
      } else {
        setAnimDone(true);
      }
    };
    setTimeout(advance, ANALYSIS_STEPS[0].duration);
  }, []);

  useEffect(() => {
    if (animDone && pendingResult.current) {
      setResult(pendingResult.current);
      pendingResult.current = null;
      setStep("results");
      setAnimDone(false);
    }
  }, [animDone]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!businessName.trim() || !phone.trim()) return;

    setStep("loading");
    setResult(null);
    setError("");
    setAnimDone(false);
    pendingResult.current = null;

    runAnimation();

    try {
      const res = await fetch("/api/citation-checker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          websiteUrl: websiteUrl.trim(),
          businessName: businessName.trim(),
          phone: phone.trim(),
          address: address.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          gbpName: gbpName.trim() || undefined,
          gbpPhone: gbpPhone.trim() || undefined,
          gbpAddress: gbpAddress.trim() || undefined,
          gbpCity: gbpCity.trim() || undefined,
          gbpState: gbpState.trim() || undefined,
          gbpZip: gbpZip.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setStep("form");
      } else {
        pendingResult.current = data;
        if (animDone) {
          setResult(data);
          pendingResult.current = null;
          setStep("results");
          setAnimDone(false);
        }
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setStep("form");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Free Tool — No Email Required
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing Citation{" "}
              <span className="text-orange">Checker</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Check your plumbing business&apos;s NAP (Name, Address, Phone) consistency
              across {250}+ directories. Inconsistent citations kill your local SEO rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      {step === "form" && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Website Info */}
              <div>
                <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <Globe className="h-5 w-5 text-orange" />
                  Your Website Info
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Enter your business details exactly as they appear on your website.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-navy">Website URL</label>
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="yourplumbingsite.com"
                    className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-navy">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="ABC Plumbing LLC"
                    required
                    className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                    className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy">Street Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main St"
                    className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Dallas"
                    className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy">State</label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="TX"
                      maxLength={2}
                      className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy">ZIP</label>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      placeholder="75001"
                      className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                    />
                  </div>
                </div>
              </div>

              {/* GBP section */}
              <div className="border-t border-slate-200 pt-6">
                <button
                  type="button"
                  onClick={() => setShowGBP(!showGBP)}
                  className="flex items-center gap-2 text-sm font-medium text-orange hover:text-orange-hover transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  {showGBP ? "Hide" : "Add"} Google Business Profile Info (Recommended)
                  <ChevronDown className={`h-4 w-4 transition-transform ${showGBP ? "rotate-180" : ""}`} />
                </button>
                <p className="mt-1 text-xs text-slate-400">
                  If your GBP info differs from your website, we&apos;ll flag it — this is one of the biggest local SEO mistakes.
                </p>

                {showGBP && (
                  <div className="mt-4 grid gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-navy">GBP Business Name</label>
                      <input
                        type="text"
                        value={gbpName}
                        onChange={(e) => setGbpName(e.target.value)}
                        placeholder="As it appears on Google"
                        className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy">GBP Phone</label>
                      <input
                        type="tel"
                        value={gbpPhone}
                        onChange={(e) => setGbpPhone(e.target.value)}
                        placeholder="(555) 123-4567"
                        className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy">GBP Address</label>
                      <input
                        type="text"
                        value={gbpAddress}
                        onChange={(e) => setGbpAddress(e.target.value)}
                        placeholder="123 Main St"
                        className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy">GBP City</label>
                      <input
                        type="text"
                        value={gbpCity}
                        onChange={(e) => setGbpCity(e.target.value)}
                        placeholder="Dallas"
                        className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy">GBP State</label>
                        <input
                          type="text"
                          value={gbpState}
                          onChange={(e) => setGbpState(e.target.value)}
                          placeholder="TX"
                          maxLength={2}
                          className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy">GBP ZIP</label>
                        <input
                          type="text"
                          value={gbpZip}
                          onChange={(e) => setGbpZip(e.target.value)}
                          placeholder="75001"
                          className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <p className="text-sm font-medium text-red-700">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-orange text-white hover:bg-orange-hover"
              >
                <Building2 className="mr-2 h-5 w-5" />
                Check My Citations
              </Button>
            </form>
          </div>
        </section>
      )}

      {/* Loading */}
      {step === "loading" && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="mb-6 text-center">
                <p className="text-sm font-medium text-slate-500">
                  Checking citations for{" "}
                  <span className="font-bold text-navy">{businessName}</span>
                </p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-orange transition-all duration-1000 ease-out"
                    style={{
                      width: `${Math.min(98, ((currentStep + 1) / ANALYSIS_STEPS.length) * 100)}%`,
                    }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Checking {250}+ directories — Step {currentStep + 1} of {ANALYSIS_STEPS.length}
                </p>
              </div>

              <div className="space-y-2">
                {ANALYSIS_STEPS.map((s, idx) => (
                  <div
                    key={s.label}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-500 ${
                      idx < currentStep
                        ? "text-green-600 opacity-60"
                        : idx === currentStep
                        ? "bg-white font-medium text-navy shadow-sm"
                        : "text-slate-400 opacity-40"
                    }`}
                  >
                    {idx < currentStep ? (
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
                    ) : idx === currentStep ? (
                      <div className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-orange border-t-transparent" />
                    ) : (
                      <div className="h-4 w-4 shrink-0 rounded-full border border-slate-300" />
                    )}
                    {s.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {step === "results" && result && (
        <section ref={resultRef} className="scroll-mt-8 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Score header */}
            <div className="mb-10 text-center">
              <div
                className={`mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 shadow-lg ${
                  result.overallScore >= 70
                    ? "border-green-500 shadow-green-100"
                    : result.overallScore >= 50
                    ? "border-yellow-500 shadow-yellow-100"
                    : "border-red-500 shadow-red-100"
                }`}
              >
                <div>
                  <p className={`text-4xl font-extrabold ${
                    result.overallScore >= 70 ? "text-green-600" :
                    result.overallScore >= 50 ? "text-yellow-600" :
                    "text-red-600"
                  }`}>
                    {result.grade}
                  </p>
                  <p className="text-sm font-medium text-slate-500">
                    {result.overallScore}/95
                  </p>
                </div>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-navy">
                Citation Score for {businessName}
              </h2>

              {/* Score breakdown */}
              <div className="mx-auto mt-6 grid max-w-md gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 p-4 text-center">
                  <p className="text-3xl font-extrabold text-navy">{result.presenceScore}%</p>
                  <p className="mt-1 text-sm text-slate-500">Presence Score</p>
                  <p className="text-xs text-slate-400">
                    {result.totalFound} of {result.totalSources} directories
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 text-center">
                  <p className="text-3xl font-extrabold text-navy">{result.consistencyScore}%</p>
                  <p className="mt-1 text-sm text-slate-500">Consistency Score</p>
                  <p className="text-xs text-slate-400">
                    {result.totalConsistent} of {result.totalFound} consistent
                  </p>
                </div>
              </div>

              {/* Quick stats */}
              <div className="mx-auto mt-6 flex max-w-lg flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium text-slate-600">{result.totalConsistent} Consistent</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium text-slate-600">{result.totalPartial} Partial</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="font-medium text-slate-600">{result.totalInconsistent} Inconsistent</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <XCircle className="h-4 w-4 text-slate-300" />
                  <span className="font-medium text-slate-600">{result.totalSources - result.totalFound} Not Found</span>
                </div>
              </div>
            </div>

            {/* NAP Issues (website vs GBP) */}
            {result.napIssues.length > 0 && (
              <div className="mb-8 rounded-xl border-2 border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-2">
                  <AlertOctagon className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-bold text-red-700">
                    NAP Consistency Issues Detected
                  </h3>
                </div>
                <p className="mt-1 text-sm text-red-600">
                  These mismatches between your website and Google Business Profile are hurting your local SEO. Fix these immediately.
                </p>
                <div className="mt-4 space-y-2">
                  {result.napIssues.map((issue, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      <p className="text-red-700">{issue}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category sections */}
            <div className="space-y-4">
              {result.categories.map((cat, i) => (
                <CategorySection key={cat.category} cat={cat} defaultOpen={i === 0} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-xl bg-navy p-8 text-center">
              <h3 className="text-xl font-bold text-white">
                Want Help Fixing Your Citations?
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Cleaning up citations across {250}+ directories is tedious work. On a
                free strategy session, I&apos;ll prioritize which ones to fix first
                and show you the fastest path to consistent NAP across the web.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button asChild className="bg-orange text-white hover:bg-orange-hover">
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
                  <Link href="/website-grader">
                    Grade My Website Too
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Explainer (shown before results) */}
      {step === "form" && (
        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-navy">
              Why Citations Matter for Plumbers
            </h2>
            <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
              <p>
                <strong className="text-navy">Citations are online mentions of your business name, address, and phone number (NAP).</strong>{" "}
                Google uses these to verify your business is real and to determine your local search rankings.
              </p>
              <p>
                <strong className="text-navy">Inconsistent citations confuse Google.</strong>{" "}
                If your address says &ldquo;123 Main St&rdquo; on your website but &ldquo;123 Main Street&rdquo; on Yelp
                and &ldquo;123 Main St, Suite 1&rdquo; on your Google Business Profile — Google doesn&apos;t know which is correct.
                This directly hurts your Map Pack rankings.
              </p>
              <p>
                <strong className="text-navy">We check {250}+ directories</strong> across 9 categories:
                plumbing-specific directories (starting with{" "}
                <a href="https://theplumbingdirectory.com" target="_blank" rel="noopener noreferrer" className="font-medium text-orange hover:text-orange-hover">
                  ThePlumbingDirectory.com
                </a>
                ), review sites, maps, social media, home services directories, general directories,
                data aggregators, local directories, and government/BBB listings.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
