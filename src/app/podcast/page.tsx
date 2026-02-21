import { Metadata } from "next";
import Link from "next/link";
import { Mic, Phone, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export const metadata: Metadata = {
  title: "Plumbing Marketing Podcast — Coming Soon",
  description:
    "The only plumbing marketing podcast hosted by a licensed plumber. Tips, strategies, and interviews for plumbing business owners who want to grow.",
};

const upcomingTopics = [
  "Why Most Plumbing Marketing Fails (And What Actually Works)",
  "The SEO Playbook for Plumbing Companies",
  "From Plumber to Marketing Agency — Ryan's Story",
  "Google Ads vs SEO: Where Should Plumbers Spend?",
  "How to Get 100+ Google Reviews in 12 Months",
  "The $500K Plumbing Website: What Makes It Different",
  "Why Your Plumbing Website Isn't Generating Calls",
  "Service Area Pages: The Secret SEO Weapon for Plumbers",
];

export default function PodcastPage() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Mic className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Coming Soon
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The Plumbing Marketing{" "}
              <span className="text-orange">Podcast</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Real marketing strategies from a licensed plumber who&apos;s built
              250+ plumbing websites. No fluff. No jargon. Just actionable
              advice for plumbing business owners.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Upcoming topics */}
          <h2 className="text-2xl font-bold text-navy">
            Upcoming Episode Topics
          </h2>
          <div className="mt-6 space-y-3">
            {upcomingTopics.map((topic, i) => (
              <div
                key={topic}
                className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange/10 text-sm font-bold text-orange">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-navy">{topic}</p>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-12 rounded-xl border border-orange/20 bg-orange/5 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-orange" />
              <h2 className="text-lg font-bold text-navy">
                Get Notified When We Launch
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              Be the first to know when new episodes drop. Plus get weekly
              plumbing marketing tips.
            </p>
            <div className="mt-4">
              <NewsletterSignup />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400">
              Can&apos;t wait for the podcast?
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
                className="border-slate-300 text-slate-600 hover:bg-slate-100"
              >
                <Link href="/blog">
                  Read Our Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
