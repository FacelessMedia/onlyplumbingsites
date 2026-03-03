"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle,
  Shield,
  Users,
  Target,
  ArrowRight,
  ArrowLeft,
  Loader2,
  XCircle,
  Building2,
  Globe,
  MapPin,
  DollarSign,
  Phone,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Form Data Shape ─── */
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  serviceArea: string;
  truckCount: string;
  annualRevenue: string;
  currentSpend: string;
  willingToInvest: string;
  biggestChallenge: string;
  howDidYouHear: string;
};

const INITIAL: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  website: "",
  serviceArea: "",
  truckCount: "",
  annualRevenue: "",
  currentSpend: "",
  willingToInvest: "",
  biggestChallenge: "",
  howDidYouHear: "",
};

/* ─── Dropdown Options ─── */
const TRUCK_OPTIONS = ["1", "2-5", "6-10", "10+"];
const REVENUE_OPTIONS = [
  "Less than $250K",
  "$250K – $500K",
  "$500K – $1M",
  "$1M – $3M",
  "$3M+",
];
const SPEND_OPTIONS = [
  "$0 — I don't spend anything on marketing",
  "Less than $500/mo",
  "$500 – $1,500/mo",
  "$1,500 – $3,000/mo",
  "$3,000 – $5,000/mo",
  "$5,000+/mo",
];
const INVEST_OPTIONS = [
  "I'm not willing to invest right now",
  "Less than $500/mo",
  "$500 – $1,500/mo",
  "$1,500 – $3,000/mo",
  "$3,000 – $5,000/mo",
  "$5,000+/mo",
];
const HEAR_OPTIONS = [
  "Google search",
  "Someone called me",
  "Referral from a friend",
  "Social media",
  "Blog / article",
  "Other",
];

/* ─── Qualification Logic ─── */
function isQualified(data: FormData): boolean {
  // Qualify if willing to invest $500+/mo
  const dominated = [
    "I'm not willing to invest right now",
  ];
  if (dominated.includes(data.willingToInvest)) return false;

  // If they said "Less than $500/mo" AND current spend is $0, disqualify
  if (
    data.willingToInvest === "Less than $500/mo" &&
    data.currentSpend === "$0 — I don't spend anything on marketing"
  ) {
    return false;
  }

  return true;
}

/* ─── Styled Select Component ─── */
function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
      >
        <option value="">{placeholder || "Select..."}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ─── Text Input Component ─── */
function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
      />
    </div>
  );
}

/* ─── Main Page ─── */
export default function BookPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [outcome, setOutcome] = useState<"qualified" | "disqualified" | null>(null);

  function update(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance1() {
    return data.firstName && data.email && data.phone && data.companyName;
  }

  function canAdvance2() {
    return data.truckCount && data.annualRevenue;
  }

  function canSubmit() {
    return data.willingToInvest;
  }

  async function handleSubmit() {
    setSubmitting(true);

    const qualified = isQualified(data);

    // Push to GHL
    try {
      await fetch("/api/book-qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, qualified }),
      });
    } catch {
      // Don't block the user if GHL fails
    }

    setSubmitting(false);
    setOutcome(qualified ? "qualified" : "disqualified");
    setStep(4);
  }

  /* ─── Step Indicator ─── */
  const steps = ["Your Info", "Your Business", "Budget & Goals"];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Clock className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                45 Minutes — Free — No Obligation
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Book Your Free{" "}
              <span className="text-orange">Strategy Call</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Answer a few quick questions so Ryan can research your market before your call.
              Then pick a time that works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Form / Calendar / Outcome */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

            {/* Left sidebar */}
            <div className="hidden lg:col-span-2 lg:block">
              {step < 4 && (
                <>
                  <h2 className="text-xl font-bold text-navy">What to Expect</h2>
                  <div className="mt-6 space-y-5">
                    {[
                      { icon: Target, title: "Audit Your Online Presence", desc: "We'll review your website, Google rankings, and local competition." },
                      { icon: Users, title: "Understand Your Goals", desc: "How many calls you want, what areas matter, where you're struggling." },
                      { icon: CheckCircle, title: "Get a Custom Plan", desc: "Walk away with 3 specific things you can do immediately — whether you work with us or not." },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange/10">
                          <item.icon className="h-5 w-5 text-orange" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                          <p className="mt-0.5 text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-3">
                      <Shield className="h-7 w-7 text-orange" />
                      <div>
                        <p className="text-sm font-bold text-navy">Ryan Pietrzak</p>
                        <p className="text-xs text-slate-500">Licensed Plumber · 250+ Websites Built</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right: Form / Calendar / Outcome */}
            <div className="lg:col-span-3">

              {/* ─── STEP INDICATOR ─── */}
              {step >= 1 && step <= 3 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {steps.map((s, i) => (
                      <div key={s} className="flex flex-1 items-center">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                          i + 1 < step ? "bg-green-500 text-white" :
                          i + 1 === step ? "bg-orange text-white" :
                          "bg-slate-200 text-slate-500"
                        }`}>
                          {i + 1 < step ? <CheckCircle className="h-4 w-4" /> : i + 1}
                        </div>
                        <span className={`ml-2 text-xs font-medium ${
                          i + 1 === step ? "text-navy" : "text-slate-400"
                        }`}>
                          {s}
                        </span>
                        {i < steps.length - 1 && (
                          <div className={`mx-3 h-px flex-1 ${i + 1 < step ? "bg-green-300" : "bg-slate-200"}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ─── STEP 1: Contact Info ─── */}
              {step === 1 && (
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Building2 className="h-5 w-5 text-orange" />
                    <h2 className="text-lg font-bold text-navy">Your Info</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <TextField label="First Name" value={data.firstName} onChange={(v) => update("firstName", v)} placeholder="Ryan" required />
                      <TextField label="Last Name" value={data.lastName} onChange={(v) => update("lastName", v)} placeholder="Pietrzak" />
                    </div>
                    <TextField label="Email" value={data.email} onChange={(v) => update("email", v)} placeholder="ryan@yourplumbing.com" type="email" required />
                    <TextField label="Phone" value={data.phone} onChange={(v) => update("phone", v)} placeholder="(555) 123-4567" type="tel" required />
                    <TextField label="Company Name" value={data.companyName} onChange={(v) => update("companyName", v)} placeholder="ABC Plumbing LLC" required />
                    <TextField label="Website (if you have one)" value={data.website} onChange={(v) => update("website", v)} placeholder="www.abcplumbing.com" />
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!canAdvance1()}
                      className="bg-orange text-white hover:bg-orange-hover disabled:opacity-40"
                    >
                      Next: Your Business
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* ─── STEP 2: Business Details ─── */}
              {step === 2 && (
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin className="h-5 w-5 text-orange" />
                    <h2 className="text-lg font-bold text-navy">Your Business</h2>
                  </div>
                  <div className="space-y-4">
                    <TextField label="Service Area (cities you serve)" value={data.serviceArea} onChange={(v) => update("serviceArea", v)} placeholder="Dallas, Fort Worth, Plano, Arlington..." />
                    <SelectField label="How many trucks/techs?" value={data.truckCount} onChange={(v) => update("truckCount", v)} options={TRUCK_OPTIONS} placeholder="Select..." required />
                    <SelectField label="Approximate annual revenue" value={data.annualRevenue} onChange={(v) => update("annualRevenue", v)} options={REVENUE_OPTIONS} placeholder="Select..." required />
                    <SelectField label="How did you hear about us?" value={data.howDidYouHear} onChange={(v) => update("howDidYouHear", v)} options={HEAR_OPTIONS} placeholder="Select..." />
                  </div>
                  <div className="mt-6 flex justify-between">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={!canAdvance2()}
                      className="bg-orange text-white hover:bg-orange-hover disabled:opacity-40"
                    >
                      Next: Budget & Goals
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* ─── STEP 3: Budget & Goals ─── */}
              {step === 3 && (
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <DollarSign className="h-5 w-5 text-orange" />
                    <h2 className="text-lg font-bold text-navy">Budget & Goals</h2>
                  </div>
                  <div className="space-y-4">
                    <SelectField
                      label="How much do you currently spend on marketing per month?"
                      value={data.currentSpend}
                      onChange={(v) => update("currentSpend", v)}
                      options={SPEND_OPTIONS}
                      placeholder="Select..."
                    />
                    <SelectField
                      label="How much are you willing to invest to grow your business?"
                      value={data.willingToInvest}
                      onChange={(v) => update("willingToInvest", v)}
                      options={INVEST_OPTIONS}
                      placeholder="Select..."
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-navy">
                        What&apos;s your biggest marketing challenge right now?
                      </label>
                      <textarea
                        value={data.biggestChallenge}
                        onChange={(e) => update("biggestChallenge", e.target.value)}
                        rows={3}
                        placeholder="E.g., not showing up on Google, website is outdated, competitors are outranking me..."
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!canSubmit() || submitting}
                      className="bg-orange text-white hover:bg-orange-hover disabled:opacity-40"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          See Available Times
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {/* ─── STEP 4: QUALIFIED → Calendar ─── */}
              {step === 4 && outcome === "qualified" && (
                <div>
                  <div className="mb-6 rounded-xl border-2 border-green-200 bg-green-50 p-5 text-center">
                    <CheckCircle className="mx-auto h-8 w-8 text-green-500" />
                    <h2 className="mt-2 text-lg font-bold text-navy">
                      You&apos;re a great fit! Pick a time below.
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Ryan will research your market, competitors, and website before your call.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/booking/W1dbJlvrGJ63xPRg9pZV"
                      style={{ width: "100%", height: "700px", border: "none" }}
                      scrolling="no"
                      title="Book a Free Strategy Session"
                    />
                  </div>
                </div>
              )}

              {/* ─── STEP 4: DISQUALIFIED → At Capacity ─── */}
              {step === 4 && outcome === "disqualified" && (
                <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <Briefcase className="h-8 w-8 text-slate-400" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-navy">
                    We&apos;re Currently at Capacity
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-slate-500">
                    Thanks for your interest! We&apos;re currently focused on working with plumbing companies
                    that are ready to invest in growth. But we&apos;ve got free resources that can help
                    you right now:
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <Link
                      href="/website-grader"
                      className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-left transition-colors hover:border-orange/30 hover:bg-orange/5"
                    >
                      <Globe className="h-5 w-5 shrink-0 text-orange" />
                      <div>
                        <p className="text-sm font-bold text-navy">Free Website Grader</p>
                        <p className="text-xs text-slate-500">68-point analysis of your site</p>
                      </div>
                    </Link>
                    <Link
                      href="/tools/citation-checker"
                      className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-left transition-colors hover:border-orange/30 hover:bg-orange/5"
                    >
                      <MapPin className="h-5 w-5 shrink-0 text-orange" />
                      <div>
                        <p className="text-sm font-bold text-navy">Citation Audit</p>
                        <p className="text-xs text-slate-500">Check your directory listings</p>
                      </div>
                    </Link>
                    <Link
                      href="/book-download"
                      className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-left transition-colors hover:border-orange/30 hover:bg-orange/5"
                    >
                      <Briefcase className="h-5 w-5 shrink-0 text-orange" />
                      <div>
                        <p className="text-sm font-bold text-navy">Free Book Download</p>
                        <p className="text-xs text-slate-500">Marketing guide for plumbers</p>
                      </div>
                    </Link>
                    <Link
                      href="/tools/plumbing-keywords"
                      className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-left transition-colors hover:border-orange/30 hover:bg-orange/5"
                    >
                      <DollarSign className="h-5 w-5 shrink-0 text-orange" />
                      <div>
                        <p className="text-sm font-bold text-navy">Keyword Database</p>
                        <p className="text-xs text-slate-500">150+ plumbing keywords</p>
                      </div>
                    </Link>
                  </div>
                  <p className="mt-6 text-xs text-slate-400">
                    When you&apos;re ready to invest in growth, we&apos;d love to chat.
                    Reach out anytime at{" "}
                    <a href="mailto:hello@onlyplumbingsites.com" className="text-orange">
                      hello@onlyplumbingsites.com
                    </a>
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
