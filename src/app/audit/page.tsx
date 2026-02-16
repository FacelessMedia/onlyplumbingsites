"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Shield, CheckCircle, FileSearch, Phone, BarChart3, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const auditSchema = z.object({
  name: z.string().min(2, "Name is required"),
  businessName: z.string().min(2, "Business name is required"),
  city: z.string().min(2, "City is required"),
  website: z.string().optional(),
  noWebsite: z.boolean().optional(),
  phone: z.string().min(7, "Phone number is required"),
  revenue: z.string().optional(),
  frustration: z.string().min(10, "Tell us a bit more about your biggest challenge"),
});

type AuditFormData = z.infer<typeof auditSchema>;

const auditBenefits = [
  {
    icon: FileSearch,
    title: "Full Website Review",
    description: "We'll analyze your current site (or lack thereof) for conversion issues.",
  },
  {
    icon: MapPin,
    title: "Local SEO Analysis",
    description: "See how you rank in your service area and what's holding you back.",
  },
  {
    icon: BarChart3,
    title: "Competitor Comparison",
    description: "Find out what the top-ranking plumbers in your area are doing differently.",
  },
  {
    icon: Phone,
    title: "Action Plan",
    description: "Get specific, actionable steps to start generating more calls.",
  },
];

export default function AuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema),
  });

  const noWebsite = watch("noWebsite");

  async function onSubmit(data: AuditFormData) {
    // TODO: Send to GHL API
    console.log("Audit form submitted:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
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
                Free — No Obligation
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Get a Free Website Audit{" "}
              <span className="text-orange">from a Licensed Plumber</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Find out exactly why your plumbing website isn&apos;t generating
              calls — and what to fix first. Delivered within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-navy">
                What You&apos;ll Get in Your Audit
              </h2>
              <div className="mt-8 space-y-6">
                {auditBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange/10">
                      <benefit.icon className="h-5 w-5 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust */}
              <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-orange" />
                  <div>
                    <p className="font-bold text-navy">
                      Reviewed by a Licensed Plumber
                    </p>
                    <p className="text-sm text-slate-500">
                      Not a generic marketing report — this is reviewed by someone
                      who understands plumbing businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center rounded-xl border border-green-200 bg-green-50 p-10 text-center">
                  <CheckCircle className="h-12 w-12 text-success" />
                  <h3 className="mt-4 text-2xl font-bold text-navy">
                    Audit Request Received!
                  </h3>
                  <p className="mt-2 text-slate-500">
                    We&apos;ll send your personalized audit within 24 hours.
                    Check your email and phone for a confirmation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
                >
                  <h3 className="text-xl font-bold text-navy">
                    Request Your Free Audit
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Takes 2 minutes. We&apos;ll deliver your audit within 24 hours.
                  </p>

                  <div className="mt-6 space-y-5">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Ryan Pietrzak"
                        className="mt-1"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        {...register("businessName")}
                        placeholder="Smith Plumbing Co."
                        className="mt-1"
                      />
                      {errors.businessName && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.businessName.message}
                        </p>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <Label htmlFor="city">City / Service Area *</Label>
                      <Input
                        id="city"
                        {...register("city")}
                        placeholder="Chicago, IL"
                        className="mt-1"
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.city.message}
                        </p>
                      )}
                    </div>

                    {/* Website */}
                    <div>
                      <Label htmlFor="website">Current Website URL</Label>
                      <Input
                        id="website"
                        {...register("website")}
                        placeholder="https://yourplumbingsite.com"
                        className="mt-1"
                        disabled={!!noWebsite}
                      />
                      <label className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                        <input
                          type="checkbox"
                          {...register("noWebsite")}
                          className="rounded border-slate-300"
                        />
                        I don&apos;t have a website yet
                      </label>
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="(312) 555-1234"
                        className="mt-1"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Revenue */}
                    <div>
                      <Label htmlFor="revenue">Monthly Revenue Range (optional)</Label>
                      <select
                        id="revenue"
                        {...register("revenue")}
                        className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select...</option>
                        <option value="under-250k">Under $250k/year</option>
                        <option value="250k-500k">$250k - $500k/year</option>
                        <option value="500k-1m">$500k - $1M/year</option>
                        <option value="1m-3m">$1M - $3M/year</option>
                        <option value="3m-5m">$3M - $5M/year</option>
                        <option value="5m-plus">$5M+/year</option>
                      </select>
                    </div>

                    {/* Frustration */}
                    <div>
                      <Label htmlFor="frustration">
                        What&apos;s your biggest marketing frustration? *
                      </Label>
                      <Textarea
                        id="frustration"
                        {...register("frustration")}
                        placeholder="e.g., My website doesn't generate any calls, I don't show up on Google Maps, etc."
                        className="mt-1"
                        rows={3}
                      />
                      {errors.frustration && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.frustration.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange text-base font-semibold text-white hover:bg-orange-hover"
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Audit"}
                    </Button>

                    <p className="text-center text-xs text-slate-400">
                      No spam. No sales pitch. Just an honest audit from a
                      licensed plumber.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
