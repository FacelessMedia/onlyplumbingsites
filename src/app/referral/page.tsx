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
  ChevronDown,
  TrendingUp,
  Shield,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/* ─── EARNING EXAMPLES ─── */
const EARNINGS_EXAMPLES = [
  { referrals: 1, label: "1 referral", monthly: "$500", annual: "$500" },
  { referrals: 3, label: "3 referrals", monthly: "$1,500", annual: "$1,500" },
  { referrals: 5, label: "5 referrals", monthly: "$2,500", annual: "$2,500" },
  { referrals: 10, label: "10 referrals", monthly: "$5,000", annual: "$5,000" },
  { referrals: 20, label: "20 referrals", monthly: "$10,000", annual: "$10,000" },
];

/* ─── FAQ ─── */
const FAQ = [
  { q: "Who can participate in the referral program?", a: "Anyone! You don't need to be a current client. Plumbers, contractors, suppliers, real estate agents, property managers — anyone who knows a plumbing business that could use better marketing." },
  { q: "How much do I earn per referral?", a: "You earn a $500 referral bonus for each referred plumbing company that signs up as a client. Payment is issued within 30 days of the referred client's first payment to us." },
  { q: "Is there a limit to how many referrals I can make?", a: "No limit. Refer as many plumbing companies as you want. Each successful referral earns the full $500 bonus. Some of our top referrers earn $5,000+ per year just from referrals." },
  { q: "When do I get paid?", a: "Payment is issued within 30 days of the referred client's first payment. We pay via check, Zelle, Venmo, or PayPal — your choice." },
  { q: "What if the person I refer doesn't sign up right away?", a: "Referrals are tracked for 12 months. If the person you refer signs up anytime within 12 months of your referral, you still get the bonus." },
  { q: "Do they know I referred them?", a: "Only if you want them to. We'll mention your name unless you tell us to keep it anonymous. Either way, we'll reach out with a friendly, no-pressure conversation." },
  { q: "What qualifies as a 'successful' referral?", a: "The referred plumbing company must sign a service agreement and make their first payment. Free consultations or strategy sessions alone do not qualify — they must become a paying client." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-4 text-left">
        <span className="pr-4 text-sm font-medium text-navy">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm leading-relaxed text-slate-600">{a}</p>}
    </div>
  );
}

export default function ReferralPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
      description:
        "We'll contact them for a free strategy session — no pressure, no hard sell.",
    },
    {
      icon: DollarSign,
      title: "You Earn $500",
      description:
        "When they become a client, you get a $500 referral bonus. Paid within 30 days.",
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
                Referral Program — Earn $500 Per Referral
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Know a Plumber Who Needs{" "}
              <span className="text-orange">Better Marketing?</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Refer a plumbing company to Only Plumbing Sites and earn{" "}
              <strong className="text-white">$500 for every referral</strong> that becomes a client.
              No limit on referrals. No strings attached.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1"><DollarSign className="h-4 w-4 text-orange" /> $500 per referral</span>
              <span className="flex items-center gap-1"><TrendingUp className="h-4 w-4 text-orange" /> No limit</span>
              <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-orange" /> 12-month tracking</span>
            </div>
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

      {/* Earnings Calculator */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calculator className="mx-auto h-8 w-8 text-orange" />
            <h2 className="mt-3 text-2xl font-bold text-navy">How Much Can You Earn?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Every successful referral = $500. There&apos;s no cap.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-2 pr-4 text-left font-semibold text-navy">Referrals</th>
                  <th className="py-2 pr-4 text-left font-semibold text-navy">Your Earnings</th>
                  <th className="py-2 text-left font-semibold text-navy">That&apos;s Like...</th>
                </tr>
              </thead>
              <tbody>
                {EARNINGS_EXAMPLES.map((e) => (
                  <tr key={e.referrals} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-navy">{e.label}</td>
                    <td className="py-3 pr-4 font-bold text-green-600">{e.monthly}</td>
                    <td className="py-3 text-slate-500">
                      {e.referrals === 1 && "A nice dinner out"}
                      {e.referrals === 3 && "A weekend getaway"}
                      {e.referrals === 5 && "Half a mortgage payment"}
                      {e.referrals === 10 && "A vacation fund"}
                      {e.referrals === 20 && "A serious side income"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            Some referrers earn $5,000+ per year. There is no maximum.
          </p>
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
                hours for a friendly, no-pressure conversation. We&apos;ll email you
                updates on the status of your referral.
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
              <p className="mt-1 text-sm text-slate-500">
                By submitting this form, you agree to our{" "}
                <button onClick={() => setShowTerms(true)} className="font-medium text-orange hover:text-orange-hover underline">
                  Referral Program Terms &amp; Conditions
                </button>.
              </p>
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
                    Your Info (the referrer)
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
                    "Submit Referral — Earn $500"
                  )}
                </Button>
                <p className="text-center text-xs text-slate-400">
                  By submitting, you agree to our Referral Program Terms &amp; Conditions below.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy">Frequently Asked Questions</h2>
          <div className="mt-8 rounded-xl border border-slate-200 bg-white px-5">
            {FAQ.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section id="terms" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy">Referral Program Terms &amp; Conditions</h2>
            <p className="mt-1 text-xs text-slate-400">Effective: February 21, 2026 &middot; Last Updated: February 21, 2026</p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
              <div>
                <p className="font-bold text-navy">1. Program Overview</p>
                <p>The Only Plumbing Sites Referral Program (&ldquo;Program&rdquo;) allows participants (&ldquo;Referrers&rdquo;) to earn a cash bonus for each new plumbing business they refer that becomes a paying client of Only Plumbing Sites (&ldquo;Company&rdquo;). By submitting a referral, you agree to these Terms &amp; Conditions.</p>
              </div>

              <div>
                <p className="font-bold text-navy">2. Eligibility</p>
                <p>The Program is open to any individual or business entity. You do not need to be an existing client. Current employees, contractors, or immediate family members of the Company are not eligible. The referred business must be a plumbing company (or closely related trade) operating in the United States.</p>
              </div>

              <div>
                <p className="font-bold text-navy">3. Referral Bonus Amount</p>
                <p>Referrers earn a <strong>$500 one-time referral bonus</strong> for each referred plumbing company that signs a service agreement and makes their first payment to the Company. The bonus amount is subject to change with 30 days&apos; notice; however, any referrals submitted before the change will be honored at the original rate.</p>
              </div>

              <div>
                <p className="font-bold text-navy">4. Qualifying Referral</p>
                <p>A referral qualifies for a bonus when ALL of the following conditions are met:</p>
                <ul className="mt-1 ml-4 list-disc space-y-1 text-slate-600">
                  <li>The referral is submitted through the official referral form on this page.</li>
                  <li>The referred company is a new prospect — not an existing client or someone already in our pipeline.</li>
                  <li>The referred company signs a service agreement with the Company.</li>
                  <li>The referred company makes their first payment to the Company.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-navy">5. Referral Tracking &amp; Attribution</p>
                <p>Referrals are tracked for <strong>12 months</strong> from the date of submission. If the referred company signs up within 12 months of your referral, you receive the bonus. If multiple people refer the same company, the <strong>first referral submitted</strong> receives the bonus. We will notify you via email when your referral is received, when they schedule a strategy session, and when they become a client.</p>
              </div>

              <div>
                <p className="font-bold text-navy">6. Payment Terms</p>
                <p>Referral bonuses are paid within <strong>30 days</strong> of the referred client&apos;s first payment. Payment methods available: check, Zelle, Venmo, or PayPal. Referrers are responsible for any taxes owed on referral income. If your total referral earnings exceed $600 in a calendar year, you may be required to provide a W-9 form for tax reporting purposes (IRS 1099-NEC).</p>
              </div>

              <div>
                <p className="font-bold text-navy">7. No Limit on Referrals</p>
                <p>There is no maximum number of referrals you can submit. Each qualifying referral earns the full bonus amount. You may refer plumbing companies from any state or market.</p>
              </div>

              <div>
                <p className="font-bold text-navy">8. Prohibited Activities</p>
                <p>The following activities will result in disqualification and forfeiture of any pending bonuses:</p>
                <ul className="mt-1 ml-4 list-disc space-y-1 text-slate-600">
                  <li>Submitting false, misleading, or fabricated referral information.</li>
                  <li>Referring yourself or a company you own or operate.</li>
                  <li>Spamming, harassing, or using deceptive practices to generate referrals.</li>
                  <li>Misrepresenting the Company&apos;s services, pricing, or guarantees to potential referrals.</li>
                  <li>Any activity that violates applicable laws or regulations.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-navy">9. Program Modifications &amp; Termination</p>
                <p>The Company reserves the right to modify, suspend, or terminate the Program at any time with 30 days&apos; written notice to active referrers. Any referrals submitted before termination will be honored under the existing terms. The Company reserves the right to disqualify any referral or referrer at its sole discretion if fraud or abuse is suspected.</p>
              </div>

              <div>
                <p className="font-bold text-navy">10. Privacy</p>
                <p>Referral information is used solely for the purpose of contacting the referred company and tracking the referral. We will not sell or share your personal information or the referred party&apos;s information with third parties. See our <Link href="/privacy" className="text-orange hover:text-orange-hover underline">Privacy Policy</Link> for full details.</p>
              </div>

              <div>
                <p className="font-bold text-navy">11. Limitation of Liability</p>
                <p>The Company&apos;s total liability under this Program shall not exceed the referral bonus amount owed. The Company is not liable for any indirect, incidental, or consequential damages arising from participation in the Program.</p>
              </div>

              <div>
                <p className="font-bold text-navy">12. Governing Law</p>
                <p>These Terms are governed by the laws of the State of Illinois. Any disputes arising under this Program shall be resolved through binding arbitration in the state of Illinois.</p>
              </div>

              <div>
                <p className="font-bold text-navy">13. Contact</p>
                <p>Questions about the Referral Program? Contact us at <a href="mailto:hello@onlyplumbingsites.com" className="text-orange hover:text-orange-hover">hello@onlyplumbingsites.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Modal (triggered from form) */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setShowTerms(false)}>
          <div className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-navy">Referral Program Terms &amp; Conditions</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Please scroll down on this page to read the full Terms &amp; Conditions, or{" "}
              <a href="#terms" onClick={() => setShowTerms(false)} className="text-orange underline">click here to jump to them</a>.
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              <strong>Summary:</strong> You earn $500 for each plumbing company you refer that becomes a paying client.
              No cap on referrals. Referrals are tracked for 12 months. Payment within 30 days via check, Zelle, Venmo, or PayPal.
              You&apos;re responsible for taxes on earnings. Don&apos;t submit fake referrals.
            </p>
            <Button onClick={() => setShowTerms(false)} className="mt-4 bg-orange text-white hover:bg-orange-hover" size="sm">
              Got It
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
