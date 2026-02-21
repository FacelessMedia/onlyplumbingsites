import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Phone,
  TrendingUp,
  Globe,
  Search,
  DollarSign,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Free Plumbing Marketing Guides — Ultimate Resources",
  description:
    "In-depth guides on plumbing marketing, SEO, websites, advertising, and business growth. Written by a licensed plumber with 250+ sites built.",
};

const guides = [
  {
    title: "The Complete Guide to Plumber Marketing",
    description:
      "Everything you need to know about marketing your plumbing business in 2026 — from SEO to social media to paid ads.",
    href: "/blog/plumber-marketing",
    readTime: "15 min",
    icon: TrendingUp,
    tag: "Most Popular",
  },
  {
    title: "Digital Marketing for Plumbers",
    description:
      "The digital marketing playbook for plumbing companies. Covers websites, Google Business Profile, content marketing, and more.",
    href: "/blog/digital-marketing-for-plumbers",
    readTime: "18 min",
    icon: Globe,
    tag: null,
  },
  {
    title: "Plumber Advertising: 13 Strategies That Work",
    description:
      "The 13 most effective advertising strategies for plumbing companies, ranked by ROI. From LSAs to direct mail.",
    href: "/blog/plumber-advertising",
    readTime: "12 min",
    icon: DollarSign,
    tag: null,
  },
  {
    title: "Plumbing Marketing Ideas",
    description:
      "Creative marketing ideas specifically for plumbing businesses. Actionable tactics you can implement this week.",
    href: "/blog/plumbing-marketing-ideas",
    readTime: "10 min",
    icon: Search,
    tag: null,
  },
  {
    title: "Local Citations for Plumbers: The Complete Guide",
    description:
      "The definitive guide to local citations for plumbing businesses. 18 priority citations, step-by-step fix instructions, Yext comparison, and free citation checker.",
    href: "/guides/local-citations-for-plumbers",
    readTime: "25 min",
    icon: Globe,
    tag: "Pillar Content",
  },
  {
    title: "How to Start a Plumbing Business",
    description:
      "Step-by-step guide to starting a plumbing company. Licensing, insurance, marketing, and getting your first customers.",
    href: "/blog/how-to-start-a-plumbing-business",
    readTime: "14 min",
    icon: Users,
    tag: null,
  },
  {
    title: "Service Area Pages: The SEO Strategy for Plumbers",
    description:
      "Why service area pages are the most important SEO asset for plumbing companies, and exactly how to build them.",
    href: "/blog/service-area-pages-seo-strategy-plumbers",
    readTime: "8 min",
    icon: Search,
    tag: "SEO Essential",
  },
  {
    title: "Facebook Ads for Plumbers",
    description:
      "How to run Facebook ads that generate plumbing leads. Targeting, creative, budgets, and campaign structure.",
    href: "/blog/facebook-ads-for-plumbers",
    readTime: "10 min",
    icon: DollarSign,
    tag: null,
  },
  {
    title: "Reputation Management for Plumbers",
    description:
      "How to get more Google reviews, respond to negative reviews, and build a 5-star reputation online.",
    href: "/blog/reputation-management-for-plumbers",
    readTime: "9 min",
    icon: TrendingUp,
    tag: null,
  },
];

export default function GuidesPage() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <BookOpen className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                In-Depth Guides
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing Marketing{" "}
              <span className="text-orange">Guides</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Comprehensive, actionable guides written by a licensed plumber
              who&apos;s built 250+ plumbing websites. No fluff — just
              strategies that generate calls.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex items-start gap-5 rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-md"
              >
                <div className="shrink-0 rounded-lg bg-orange/10 p-3">
                  <guide.icon className="h-6 w-6 text-orange" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-bold text-navy group-hover:text-orange">
                      {guide.title}
                    </h2>
                    {guide.tag && (
                      <span className="shrink-0 rounded-full bg-orange/10 px-2.5 py-0.5 text-xs font-semibold text-orange">
                        {guide.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {guide.description}
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="h-3 w-3" />
                      {guide.readTime} read
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-orange opacity-0 transition-opacity group-hover:opacity-100">
                      Read Guide
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-navy p-8 text-center">
            <h2 className="text-xl font-bold text-white">
              Want Personalized Advice?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              These guides give you the knowledge. A strategy session gives you
              the plan — custom-built for your plumbing business.
            </p>
            <Button
              asChild
              className="mt-6 bg-orange text-white hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-4 w-4" />
                Book Free Strategy Session
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
