import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Phone,
  CheckCircle,
  ArrowRight,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "10 Best Plumbing Websites in 2026 (+ What Makes Them Work)",
  description:
    "Breakdown of what the best plumbing websites do right in 2026 — emergency CTAs, service area pages, mobile design, and conversion elements that generate calls.",
};

const websiteTraits = [
  {
    rank: 1,
    trait: "Emergency CTA Above the Fold",
    description:
      "The best plumbing websites have a click-to-call button and emergency messaging visible without scrolling on every device. When someone has a burst pipe at 2 AM, they need to call you in under 3 seconds.",
    how: "Sticky header with phone number + a hero section CTA that says something like 'CALL NOW — 24/7 Emergency Service.' Not buried in a hamburger menu.",
  },
  {
    rank: 2,
    trait: "Dedicated Service Area Pages",
    description:
      "Instead of one generic 'Areas We Serve' page, top plumbing websites have individual pages for every city and neighborhood they serve. Each page targets 'plumber in [city]' searches.",
    how: "One page per city with unique content: local landmarks, common plumbing issues in that area, customer reviews from that city, and your NAP info.",
  },
  {
    rank: 3,
    trait: "Mobile-First Design",
    description:
      "72% of plumbing searches happen on mobile. The best sites are designed for phones first, desktop second. Every button is tap-friendly, text is readable without zooming, and forms are simple.",
    how: "Test your site on an actual phone. Can you call with one tap? Can you fill out a form without frustration? If not, you're losing leads.",
  },
  {
    rank: 4,
    trait: "Fast Load Times (Under 3 Seconds)",
    description:
      "Every second of delay costs you 7% of conversions. The best plumbing websites load in under 2 seconds. They use optimized images, minimal scripts, and modern hosting.",
    how: "Run your site through Google PageSpeed Insights. Aim for 90+ on mobile. Compress images, remove unused plugins, and use a CDN.",
  },
  {
    rank: 5,
    trait: "Google Reviews Displayed on Site",
    description:
      "Social proof converts. The best plumbing websites prominently display their Google review count, star rating, and individual reviews. This builds instant trust before the visitor even calls.",
    how: "Embed your Google reviews on your homepage, service pages, and service area pages. Show the star rating in your header or hero section.",
  },
  {
    rank: 6,
    trait: "Individual Service Pages",
    description:
      "One page for drain cleaning, one for water heater repair, one for sewer line services — not everything crammed onto one 'Services' page. Each page is a ranking opportunity.",
    how: "Create a dedicated page for every service you offer. Include what the service involves, pricing guidance, FAQs, and a CTA. Target '[service] + [city]' keywords.",
  },
  {
    rank: 7,
    trait: "Schema Markup (Structured Data)",
    description:
      "LocalBusiness schema tells Google exactly what your business is, what you do, and where you serve. It can enable rich results like star ratings in search listings.",
    how: "Add JSON-LD structured data to every page: LocalBusiness on the homepage, Service schema on service pages, FAQPage schema on FAQ sections.",
  },
  {
    rank: 8,
    trait: "Before & After Photos",
    description:
      "Real photos of your work build trust far better than stock images. The best plumbing websites showcase completed jobs with before/after comparisons.",
    how: "Take photos on every job. Before and after. Upload them to your site and Google Business Profile. Include the city and service type in the image alt text.",
  },
  {
    rank: 9,
    trait: "Clear Pricing Guidance",
    description:
      "You don't need to list exact prices, but the best sites give visitors a sense of cost. 'Water heater replacement starts at $X' reduces friction and pre-qualifies leads.",
    how: "Add pricing ranges or 'starting at' numbers on your service pages. This filters out price shoppers and attracts customers ready to book.",
  },
  {
    rank: 10,
    trait: "Blog Content That Answers Real Questions",
    description:
      "The best plumbing websites publish content that homeowners actually search for — 'why is my water heater making noise,' 'how to unclog a drain,' 'cost to repipe a house.' This drives organic traffic.",
    how: "Write one blog post per week answering a common plumbing question. Target long-tail keywords. Include your phone number and a CTA at the end of every post.",
  },
];

export default function BestPlumbingWebsitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Star className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Listicle Guide
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              10 Things the Best Plumbing Websites{" "}
              <span className="text-orange">All Have in Common</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              We&apos;ve built 250+ plumbing websites. Here are the 10 elements
              that separate sites that generate calls from sites that just sit
              there.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {websiteTraits.map((item) => (
              <div
                key={item.rank}
                id={`trait-${item.rank}`}
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange text-lg font-bold text-white">
                    {item.rank}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy">
                      {item.trait}
                    </h2>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                    <div className="mt-4 rounded-lg border-l-4 border-orange bg-orange/5 p-4">
                      <p className="text-sm font-medium text-navy">
                        How to implement:
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{item.how}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick checklist */}
          <div className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-bold text-navy">
              Quick Checklist: Does Your Site Have All 10?
            </h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {websiteTraits.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-orange" />
                  {item.trait}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              If you&apos;re missing more than 3 of these, your website is
              costing you calls.{" "}
              <Link
                href="/website-grader"
                className="font-medium text-orange hover:text-orange-hover"
              >
                Run our free website grader
              </Link>{" "}
              to see exactly where you stand.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-navy p-8 text-center">
            <Globe className="mx-auto h-8 w-8 text-orange" />
            <h2 className="mt-4 text-xl font-bold text-white">
              Want a Website That Checks All 10 Boxes?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              I build plumbing websites with every one of these elements baked
              in. Book a free strategy session and I&apos;ll show you exactly
              what your site is missing.
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
                <Link href="/website-grader">
                  Grade My Website First
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
