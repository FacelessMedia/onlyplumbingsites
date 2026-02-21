import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Shield,
  CheckCircle,
  FileSearch,
  TrendingUp,
  Target,
  BarChart3,
  ArrowRight,
  Clock,
  Globe,
  MapPin,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Free Strategy Session — Custom Growth Plan for Your Plumbing Business",
  description:
    "Book a free 30-minute strategy session with a licensed plumber who's built 250+ plumbing websites. Get a custom growth plan — no sales pitch, no obligation.",
};

const sessionIncludes = [
  {
    icon: FileSearch,
    title: "Full Online Presence Audit",
    description:
      "We review your website, Google Business Profile, reviews, and local rankings. You see exactly where you stand today.",
  },
  {
    icon: BarChart3,
    title: "Competitor Gap Analysis",
    description:
      "We show you what the top-ranking plumbers in your market are doing — and where you can beat them.",
  },
  {
    icon: TrendingUp,
    title: "12-Month Growth Projection",
    description:
      "Based on your market, competition, and services, we project how many calls and how much revenue a proper marketing system could generate.",
  },
  {
    icon: Target,
    title: "Custom Action Plan",
    description:
      "You walk away with a clear, step-by-step plan — whether you work with us or implement it yourself.",
  },
];

const qualifiers = [
  "You own or manage a plumbing company (1-10+ trucks)",
  "You want more booked service calls from the internet",
  "Your website is outdated, underperforming, or nonexistent",
  "You're doing $300K-$5M+/year (or want to be)",
  "You're ready to invest in growth, not just expense",
];

const notFor = [
  "Plumbers looking for the cheapest option",
  "Companies not willing to invest in marketing",
  "Anyone looking for overnight results with zero effort",
  "Businesses outside the plumbing industry",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Clock className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                30 Minutes — Free — No Obligation
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Get a Custom Growth Plan{" "}
              <span className="text-orange">for Your Plumbing Business</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Book a free strategy session with a licensed plumber who&apos;s built
              250+ plumbing websites. We&apos;ll audit your online presence, analyze
              your competitors, and give you a clear plan to generate more calls.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Strategy Session
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              What You Get in Your Free Strategy Session
            </h2>
            <p className="mt-4 text-slate-500">
              This isn&apos;t a sales pitch. It&apos;s a working session where you
              walk away with real, actionable insights — whether you hire us or not.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {sessionIncludes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3">
                  <item.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Book Your Session",
                desc: "Pick a time that works. Takes 30 seconds. You'll get a confirmation email with what to prepare.",
              },
              {
                step: "02",
                title: "We Do the Homework",
                desc: "Before we meet, we research your market, audit your online presence, and analyze your top competitors.",
              },
              {
                step: "03",
                title: "Get Your Custom Plan",
                desc: "On the call, we walk through everything we found and give you a clear action plan with specific next steps.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-200 bg-white p-8 text-center"
              >
                <span className="text-4xl font-extrabold text-orange/20">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                This Session Is Perfect For You If...
              </h2>
              <div className="mt-6 space-y-4">
                {qualifiers.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-orange text-white hover:bg-orange-hover"
                >
                  <Link href="/book">
                    Book Free Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                This Probably Isn&apos;t For You If...
              </h2>
              <div className="mt-6 space-y-4">
                {notFor.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Zap className="mt-0.5 h-5 w-5 shrink-0 text-slate-300" />
                    <p className="text-slate-400">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                We keep our client roster intentional so we can deliver results.
                If you&apos;re serious about growth, we&apos;re serious about
                helping you get there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Strategy Session Instead of Pricing */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Why We Don&apos;t List Prices Online
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              Every plumbing company is different. Your market, competition, service
              area, and goals are unique. A one-size-fits-all price would mean
              either overcharging some clients or underdelivering for others.
            </p>
            <p>
              Instead, we build <strong>custom strategies</strong> based on your
              specific situation. That means the investment is tailored to what will
              actually move the needle for YOUR business — not a generic package.
            </p>
            <p>
              The strategy session is where we figure that out together. And if
              we&apos;re not the right fit, we&apos;ll tell you that too. No hard
              feelings, no pressure.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Strategy Session
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Services We&apos;ll Discuss on Your Call
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SEO for Plumbers",
                desc: "Rank on page 1 of Google for plumbing keywords in your market.",
                href: "/services/seo-for-plumbers",
                icon: TrendingUp,
              },
              {
                title: "Plumbing Websites",
                desc: "A custom website designed to convert plumbing searches into booked calls.",
                href: "/services/plumbing-websites",
                icon: Globe,
              },
              {
                title: "PPC for Plumbers",
                desc: "Google Ads management for instant leads while SEO builds.",
                href: "/services/ppc-for-plumbers",
                icon: Target,
              },
              {
                title: "Local SEO",
                desc: "Dominate the Google Map Pack for your service area.",
                href: "/services/local-seo",
                icon: MapPin,
              },
              {
                title: "Lead Generation",
                desc: "Build a system that generates exclusive plumbing leads you own.",
                href: "/services/plumbing-lead-generation",
                icon: Users,
              },
              {
                title: "Social Media",
                desc: "Daily GBP + Facebook posts that keep your brand visible.",
                href: "/services/social-posting",
                icon: Shield,
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-lg bg-orange/10 p-2.5">
                  <service.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="font-bold text-navy">{service.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{service.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange">
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
