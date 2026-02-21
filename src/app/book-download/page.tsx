"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle,
  Phone,
  Shield,
  Star,
  ArrowRight,
  Download,
  Lightbulb,
  TrendingUp,
  MessageCircle,
  Search,
  ThumbsUp,
  Zap,
  Target,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const chapters = [
  {
    number: 1,
    title: '"I Get Enough Work From Word of Mouth"',
    subtitle: "The Denial Stage",
    icon: MessageCircle,
    teaser:
      "Word of mouth built your business. But it won't scale it. Here's why the plumbers who rely solely on referrals are slowly losing market share to competitors who show up on Google.",
  },
  {
    number: 2,
    title: '"My Nephew Built My Website"',
    subtitle: "The $200 Disaster",
    icon: Zap,
    teaser:
      "Your nephew is great at TikTok. That doesn't mean he can build a website that converts emergency plumbing searches into booked calls at 2 AM.",
  },
  {
    number: 3,
    title: '"I Tried Google Ads Once — It Didn\'t Work"',
    subtitle: "The $5/Day Tragedy",
    icon: Target,
    teaser:
      "Spending $5/day on Google Ads and wondering why it didn't work is like sending one truck to a 10-story commercial job. The budget wasn't the strategy — it was the problem.",
  },
  {
    number: 4,
    title: '"My Competitor Has 300 Reviews and I Have 7"',
    subtitle: "The Review Reckoning",
    icon: Star,
    teaser:
      "Google doesn't care how good your work is if nobody's saying it online. Here's the simple system that gets you 5-10 new reviews every single month.",
  },
  {
    number: 5,
    title: '"I Don\'t Need Social Media, I\'m a Plumber"',
    subtitle: "The Invisibility Cloak",
    icon: Search,
    teaser:
      "You don't need to dance on TikTok. But if a homeowner Googles your company and finds nothing but a dead Facebook page from 2019, you just lost the job to someone they trust more.",
  },
  {
    number: 6,
    title: '"How Much Does SEO Cost?"',
    subtitle: "The Wrong Question",
    icon: BarChart3,
    teaser:
      "The right question isn't how much SEO costs. It's how much it costs you to NOT be on page 1 when homeowners in your area search for a plumber.",
  },
  {
    number: 7,
    title: '"The Plumber Who Built a Marketing Machine"',
    subtitle: "The Transformation",
    icon: TrendingUp,
    teaser:
      "Meet the plumber who went from 2 trucks and word-of-mouth to 8 trucks and 200+ calls per month. Here's exactly what he did, step by step.",
  },
  {
    number: 8,
    title: '"Your 90-Day Action Plan"',
    subtitle: "The Playbook",
    icon: Lightbulb,
    teaser:
      "Stop reading. Start doing. Here's your week-by-week action plan for the next 90 days — no agency required. Just you, this book, and a willingness to take action.",
  },
];

const bookBenefits = [
  "Why 90% of plumbing websites fail to generate calls (and the 5 things that fix it)",
  "The exact review strategy that gets 5-10 new Google reviews per month",
  "How to rank on the first page of Google without spending $5K/month on SEO",
  "The real cost of NOT marketing your plumbing business (with actual math)",
  "A complete 90-day action plan you can implement yourself — no agency needed",
  "Why your competitors are getting the calls that should be going to you",
];

export default function BookDownloadPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      businessName: formData.get("businessName") as string,
    };

    try {
      await fetch("/api/book-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Still show success
    }

    setSubmitted(true);
    setLoading(false);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Copy */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
                <BookOpen className="h-4 w-4 text-orange" />
                <span className="text-sm font-medium text-slate-300">
                  Free Book for Plumbing Business Owners
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                The Little Plumber That{" "}
                <span className="relative inline-block">
                  <span className="text-orange">Could</span>
                  <span className="absolute -right-8 top-0 text-lg font-normal text-slate-500 line-through decoration-orange decoration-2">
                    n&apos;t
                  </span>
                </span>
              </h1>
              <p className="mt-6 text-xl font-medium italic text-slate-400">
                &ldquo;How Plumbers Who Take Action Turn Can&apos;t Into Done.&rdquo;
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                A short, funny, brutally honest book about why most plumbing
                companies struggle to grow online — and the simple playbook that
                actually works. Written by a licensed plumber who&apos;s built 250+
                plumbing websites.
              </p>
              <div className="mt-6 space-y-3">
                {bookBenefits.slice(0, 3).map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    <span className="text-sm text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
                >
                  <a href="#download">
                    <Download className="mr-2 h-5 w-5" />
                    Download Free Book
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Book Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Book cover mockup */}
                <div className="relative w-72 rounded-lg bg-gradient-to-br from-slate-800 via-slate-900 to-navy shadow-2xl sm:w-80">
                  {/* Spine effect */}
                  <div className="absolute left-0 top-0 h-full w-3 rounded-l-lg bg-gradient-to-r from-slate-700 to-slate-800" />
                  <div className="px-8 py-12 text-center">
                    <div className="mb-4 inline-flex rounded-full bg-orange/20 px-3 py-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange">
                        Free Book
                      </span>
                    </div>
                    <p className="text-sm font-medium uppercase tracking-widest text-slate-400">
                      The Little Plumber That
                    </p>
                    <div className="mt-2 relative inline-block">
                      <span className="text-5xl font-extrabold text-white">
                        Could
                      </span>
                      <span className="absolute -right-10 top-0 text-2xl font-bold text-slate-500 line-through decoration-orange decoration-2">
                        n&apos;t
                      </span>
                    </div>
                    <div className="mt-8 h-px bg-gradient-to-r from-transparent via-orange to-transparent" />
                    <p className="mt-4 text-xs italic leading-relaxed text-slate-400">
                      How Plumbers Who Take Action
                      <br />
                      Turn Can&apos;t Into Done
                    </p>
                    <div className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                    <p className="mt-4 text-sm font-semibold text-slate-300">
                      Ryan Pietrzak
                    </p>
                    <p className="text-xs text-slate-500">
                      Licensed Plumber &middot; 250+ Websites Built
                    </p>
                  </div>
                </div>
                {/* Shadow/reflection */}
                <div className="absolute -bottom-4 left-1/2 h-8 w-4/5 -translate-x-1/2 rounded-full bg-black/30 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What You&apos;ll Learn Inside
          </h2>
          <div className="mt-10 space-y-3">
            {bookBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Preview */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Chapter Preview
          </h2>
          <p className="mt-4 text-center text-slate-500">
            8 chapters. No fluff. Just the truth about plumbing marketing — with a
            side of humor.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange/10 text-sm font-bold text-orange">
                    {chapter.number}
                  </span>
                  <chapter.icon className="h-5 w-5 text-slate-400" />
                </div>
                <h3 className="mt-3 text-sm font-bold leading-snug text-navy">
                  {chapter.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-orange">
                  {chapter.subtitle}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  {chapter.teaser}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form */}
      <section id="download" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center sm:p-12">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h2 className="mt-6 text-2xl font-bold text-navy">
                Your Book Is On Its Way!
              </h2>
              <p className="mt-4 text-slate-600">
                Check your email — we&apos;re sending you a download link for
                &ldquo;The Little Plumber That Could.&rdquo; If you don&apos;t see
                it in a few minutes, check your spam folder.
              </p>
              <div className="mt-8 space-y-4">
                <p className="text-sm font-medium text-navy">
                  Want to fast-track your growth?
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    className="bg-orange text-white hover:bg-orange-hover"
                  >
                    <Link href="/book">
                      <Phone className="mr-2 h-4 w-4" />
                      Book Free Strategy Session
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/growth-report">
                      Get Your Growth Report
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:p-12">
              <div className="text-center">
                <Download className="mx-auto h-10 w-10 text-orange" />
                <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
                  Download Your Free Copy
                </h2>
                <p className="mt-3 text-slate-500">
                  Enter your info below and we&apos;ll send the book straight to
                  your inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Ryan"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Smith"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ryan@smithplumbing.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder="Smith Plumbing Co."
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover disabled:opacity-50"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Download className="mr-2 h-5 w-5" />
                      Send Me the Free Book
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-slate-400">
                  Free. No credit card. Unsubscribe anytime.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* About the Author */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-orange/10">
              <span className="text-3xl font-bold text-orange">RP</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy">About the Author</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                <strong>Ryan Pietrzak</strong> is a licensed Illinois plumber who
                started in the trade in 2009. After years of seeing plumbing
                companies get burned by marketing agencies who didn&apos;t understand
                the business, he started building websites for plumbers himself. 250+
                plumbing websites later, he wrote this book to help plumbing business
                owners understand what actually works online — without the agency
                jargon and empty promises.
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Ryan is also the co-owner of ThePlumbingDirectory.com, the largest
                plumbing business directory online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
