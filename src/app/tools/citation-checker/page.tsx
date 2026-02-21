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
  ExternalLink,
  Search,
  Loader2,
  ClipboardCheck,
  AlertOctagon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Types ─── */
type NAPData = {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};

type CitationResult = {
  source: {
    name: string;
    url: string;
    category: string;
    importance: string;
    note?: string;
  };
  searchUrl: string;
  claimUrl: string;
};

type CategorySummary = {
  category: string;
  label: string;
  total: number;
  results: CitationResult[];
};

type NAPIssue = {
  field: string;
  entered: string;
  website: string;
  message: string;
};

type CheckerResult = {
  userNAP: NAPData;
  websiteNAP: Partial<NAPData> | null;
  websiteFetched: boolean;
  napIssues: (NAPIssue | string)[];
  totalSources: number;
  categories: CategorySummary[];
};

/* ─── Loading Steps ─── */
const ANALYSIS_STEPS = [
  "Fetching your website...",
  "Extracting NAP data from HTML...",
  "Checking for schema markup...",
  "Comparing your entered data vs website data...",
  "Building your personalized directory checklist...",
  "Generating search links for each directory...",
  "Preparing your citation audit report...",
];

/* ─── NAP Field Comparison Row ─── */
function NAPCompareRow({
  label,
  entered,
  website,
}: {
  label: string;
  entered: string;
  website: string | undefined;
}) {
  if (!entered && !website) return null;

  const match =
    !website || !entered
      ? null
      : entered.toLowerCase().replace(/[^a-z0-9]/g, "") ===
        website.toLowerCase().replace(/[^a-z0-9]/g, "");

  return (
    <div className="grid grid-cols-[120px_1fr_1fr_32px] items-center gap-3 py-2 text-sm border-b border-slate-100 last:border-0">
      <span className="font-medium text-slate-500 text-xs uppercase tracking-wider">{label}</span>
      <span className="text-navy font-medium truncate">{entered || <span className="text-slate-300 italic">Not provided</span>}</span>
      <span className="text-navy truncate">
        {website || <span className="text-slate-300 italic">Not found</span>}
      </span>
      <span>
        {match === null ? (
          <span className="text-slate-200">—</span>
        ) : match ? (
          <CheckCircle className="h-4 w-4 text-green-500" />
        ) : (
          <XCircle className="h-4 w-4 text-red-500" />
        )}
      </span>
    </div>
  );
}

/* ─── Category Section ─── */
function CategorySection({
  cat,
  defaultOpen,
  userNAP,
}: {
  cat: CategorySummary;
  defaultOpen: boolean;
  userNAP: NAPData;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-left hover:bg-slate-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-navy">{cat.label}</h3>
          <span className="text-xs text-slate-400">{cat.total} directories</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="divide-y divide-slate-100">
          {cat.results.map((r) => (
            <div key={r.source.name} className="px-5 py-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-navy text-sm">{r.source.name}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                        r.source.importance === "critical"
                          ? "bg-red-100 text-red-700"
                          : r.source.importance === "high"
                          ? "bg-orange-100 text-orange-700"
                          : r.source.importance === "medium"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {r.source.importance}
                    </span>
                  </div>
                  {r.source.note && (
                    <p className="mt-1 text-xs text-slate-500">{r.source.note}</p>
                  )}
                  {/* Show what data SHOULD be on this directory */}
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                    <span><strong className="text-slate-600">Name:</strong> {userNAP.name}</span>
                    {userNAP.phone && <span><strong className="text-slate-600">Phone:</strong> {userNAP.phone}</span>}
                    {userNAP.address && <span><strong className="text-slate-600">Address:</strong> {userNAP.address}, {userNAP.city}, {userNAP.state} {userNAP.zip}</span>}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex shrink-0 gap-2">
                  <a
                    href={r.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-navy hover:bg-slate-50 hover:border-orange transition-colors"
                  >
                    <Search className="h-3 w-3 text-orange" />
                    Find My Listing
                  </a>
                  <a
                    href={r.claimUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-lg bg-orange/10 px-3 py-1.5 text-xs font-medium text-orange hover:bg-orange/20 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Claim / Sign Up
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main Page ─── */
export default function CitationCheckerPage() {
  const [step, setStep] = useState<"form" | "loading" | "results">("form");
  const [result, setResult] = useState<CheckerResult | null>(null);
  const [error, setError] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
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
        setTimeout(advance, 1200 + Math.random() * 800);
      } else {
        setAnimDone(true);
      }
    };
    setTimeout(advance, 1500);
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
              <span className="text-orange">Audit</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              We scan your website for NAP data, compare it against what you enter,
              and give you a prioritized checklist of every directory you should be listed on
              — with direct links to find or claim your listing on each one.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      {step === "form" && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <Globe className="h-5 w-5 text-orange" />
                  Your Business Info
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Enter your business details exactly as they appear on your Google Business Profile.
                  This is your &ldquo;source of truth&rdquo; — every directory should match this.
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
                  <p className="mt-1 text-xs text-slate-400">We&apos;ll scan your website and extract NAP data to compare against what you enter below.</p>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-navy">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Exactly as it appears on Google"
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
                Run Citation Audit
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
                <Loader2 className="mx-auto h-8 w-8 animate-spin text-orange" />
                <p className="mt-3 text-sm font-medium text-navy">
                  Auditing citations for <strong>{businessName}</strong>
                </p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-orange transition-all duration-1000 ease-out"
                    style={{
                      width: `${Math.min(98, ((currentStep + 1) / ANALYSIS_STEPS.length) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                {ANALYSIS_STEPS.map((s, idx) => (
                  <div
                    key={s}
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
                    {s}
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

            {/* ─── YOUR NAP DATA (Source of Truth) ─── */}
            <div className="mb-8 rounded-xl border-2 border-orange/30 bg-orange/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <ClipboardCheck className="h-5 w-5 text-orange" />
                <h2 className="text-lg font-bold text-navy">Your NAP Data (Source of Truth)</h2>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                This is the data you entered. Every directory listing should match this exactly.
              </p>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white border border-slate-200 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Business Name</p>
                  <p className="mt-0.5 text-sm font-bold text-navy">{result.userNAP.name}</p>
                </div>
                <div className="rounded-lg bg-white border border-slate-200 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone</p>
                  <p className="mt-0.5 text-sm font-bold text-navy">{result.userNAP.phone}</p>
                </div>
                {result.userNAP.address && (
                  <div className="rounded-lg bg-white border border-slate-200 p-3 sm:col-span-2 lg:col-span-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Address</p>
                    <p className="mt-0.5 text-sm font-bold text-navy">
                      {result.userNAP.address}, {result.userNAP.city}, {result.userNAP.state} {result.userNAP.zip}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ─── WEBSITE NAP COMPARISON ─── */}
            {result.websiteFetched && result.websiteNAP && (
              <div className="mb-8 rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="h-5 w-5 text-orange" />
                  <h2 className="text-lg font-bold text-navy">Website NAP Scan</h2>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  We extracted this data from your website&apos;s HTML and schema markup. Green = matches what you entered. Red = mismatch.
                </p>
                <div className="rounded-lg border border-slate-200 overflow-hidden">
                  <div className="grid grid-cols-[120px_1fr_1fr_32px] gap-3 bg-slate-50 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <span>Field</span>
                    <span>You Entered</span>
                    <span>Found on Website</span>
                    <span>Match</span>
                  </div>
                  <div className="px-4">
                    <NAPCompareRow label="Name" entered={result.userNAP.name} website={result.websiteNAP.name} />
                    <NAPCompareRow label="Phone" entered={result.userNAP.phone} website={result.websiteNAP.phone} />
                    <NAPCompareRow label="Address" entered={result.userNAP.address} website={result.websiteNAP.address} />
                    <NAPCompareRow label="City" entered={result.userNAP.city} website={result.websiteNAP.city} />
                    <NAPCompareRow label="State" entered={result.userNAP.state} website={result.websiteNAP.state} />
                    <NAPCompareRow label="ZIP" entered={result.userNAP.zip} website={result.websiteNAP.zip} />
                  </div>
                </div>
              </div>
            )}

            {!result.websiteFetched && (
              <div className="mb-8 rounded-xl border border-yellow-200 bg-yellow-50 p-5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <p className="text-sm font-medium text-yellow-800">
                    {websiteUrl
                      ? "We couldn't fetch your website to extract NAP data. Make sure the URL is correct and the site is accessible."
                      : "No website URL provided. We recommend adding your website so we can verify your NAP data is displayed correctly."}
                  </p>
                </div>
              </div>
            )}

            {/* ─── NAP ISSUES ─── */}
            {result.napIssues.length > 0 && (
              <div className="mb-8 rounded-xl border-2 border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-2">
                  <AlertOctagon className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-bold text-red-700">
                    NAP Mismatches Found
                  </h3>
                </div>
                <p className="mt-1 text-sm text-red-600">
                  Your website data doesn&apos;t match what you entered. Fix these on your website FIRST — before worrying about directories.
                </p>
                <div className="mt-4 space-y-2">
                  {result.napIssues.map((issue, i) => {
                    const msg = typeof issue === "string" ? issue : issue.message;
                    return (
                      <div key={i} className="flex gap-2 text-sm">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                        <p className="text-red-700">{msg}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ─── DIRECTORY CHECKLIST ─── */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-navy">Directory Checklist</h2>
              <p className="mt-1 text-sm text-slate-500">
                {result.totalSources} directories organized by importance. Click &ldquo;Find My Listing&rdquo;
                to search for your business on each directory, or &ldquo;Claim / Sign Up&rdquo; to create a new listing.
                Make sure the NAP on each listing matches your source of truth above exactly.
              </p>
            </div>

            <div className="space-y-4">
              {result.categories.map((cat, i) => (
                <CategorySection
                  key={cat.category}
                  cat={cat}
                  defaultOpen={i === 0}
                  userNAP={result.userNAP}
                />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-xl bg-navy p-8 text-center">
              <h3 className="text-xl font-bold text-white">
                Want Help Fixing Your Citations?
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Claiming and fixing citations across {result.totalSources}+ directories is tedious work.
                On a free strategy session, I&apos;ll prioritize which ones to fix first
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
              How This Tool Works
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange/10">
                  <Globe className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-3 font-bold text-navy">1. We Scan Your Site</h3>
                <p className="mt-1 text-sm text-slate-500">
                  We fetch your website and extract the business name, phone, and address from your HTML and schema markup.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange/10">
                  <MapPin className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-3 font-bold text-navy">2. We Compare</h3>
                <p className="mt-1 text-sm text-slate-500">
                  We compare what&apos;s on your website vs what you entered. Any mismatches = red flags for local SEO.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange/10">
                  <ClipboardCheck className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-3 font-bold text-navy">3. Your Checklist</h3>
                <p className="mt-1 text-sm text-slate-500">
                  We give you a prioritized list of every directory you should be on — with direct links to find or claim your listing.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-navy">Why Citations Matter for Plumbers</h3>
              <div className="mt-3 space-y-3 text-sm text-slate-600">
                <p>
                  <strong className="text-navy">Citations are online mentions of your business name, address, and phone number (NAP).</strong>{" "}
                  Google uses these to verify your business is real and to determine your local search rankings.
                </p>
                <p>
                  <strong className="text-navy">Inconsistent citations confuse Google.</strong>{" "}
                  If your address says &ldquo;123 Main St&rdquo; on your website but &ldquo;123 Main Street&rdquo; on Yelp — Google doesn&apos;t know which is correct.
                  This directly hurts your Map Pack rankings.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
