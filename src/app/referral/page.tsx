"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Gift,
  CheckCircle,
  DollarSign,
  Users,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ReferralPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const honeypot = (document.getElementById("_hp_ref") as HTMLInputElement)?.value;

    await fetch("/api/referral", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        referrerName: form.get("referrerName"),
        referrerEmail: form.get("referrerEmail"),
        referredName: form.get("referredName"),
        referredEmail: form.get("referredEmail"),
        referredPhone: form.get("referredPhone"),
        referredCompany: form.get("referredCompany"),
        notes: form.get("notes"),
        _honeypot: honeypot || "",
      }),
    });
    setLoading(false);
    setSubmitted(true);
  }

  const steps = [
    {
      icon: Users,
      title: "Refer a Plumber",
      description: "Fill out the form below with their info. Takes 60 seconds.",
    },
    {
      icon: CheckCircle,
      title: "We Reach Out",
      description: "We'll contact them for a free strategy session — no pressure.",
    },
    {
      icon: DollarSign,
      title: "You Get Paid",
      description: "If they become a client, you earn a referral bonus.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Gift className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Referral Program
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Know a Plumber Who Needs{" "}
              <span className="text-orange">Better Marketing?</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Refer a plumbing company to us and earn a referral bonus when they
              sign up. Everyone wins.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                  <step.icon className="h-6 w-6 text-orange" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-bold text-navy">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-navy">
                Referral Submitted!
              </h2>
              <p className="mt-3 text-slate-500">
                Thanks for the referral! We&apos;ll reach out to them within 24
                hours for a friendly, no-pressure conversation.
              </p>
              <Button
                asChild
                className="mt-8 bg-orange text-white hover:bg-orange-hover"
              >
                <Link href="/">
                  Back to Homepage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-navy">
                Submit a Referral
              </h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <input
                  type="text"
                  id="_hp_ref"
                  name="_hp_ref"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Info
                  </p>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="referrerName">Your Name *</Label>
                      <Input
                        id="referrerName"
                        name="referrerName"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="referrerEmail">Your Email *</Label>
                      <Input
                        id="referrerEmail"
                        name="referrerEmail"
                        type="email"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Plumber You&apos;re Referring
                  </p>
                  <div className="mt-3 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="referredName">Their Name *</Label>
                        <Input
                          id="referredName"
                          name="referredName"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="referredCompany">Company Name</Label>
                        <Input
                          id="referredCompany"
                          name="referredCompany"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="referredEmail">Their Email</Label>
                        <Input
                          id="referredEmail"
                          name="referredEmail"
                          type="email"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="referredPhone">Their Phone</Label>
                        <Input
                          id="referredPhone"
                          name="referredPhone"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="notes">Anything we should know?</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        className="mt-1"
                        placeholder="E.g., they're looking for a new website, they mentioned wanting more calls..."
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange text-white hover:bg-orange-hover"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Referral"
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
