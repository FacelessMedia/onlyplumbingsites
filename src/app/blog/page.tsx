import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, strategies, and insights on plumbing websites, local SEO, and marketing — from a licensed plumber who's built 250+ plumbing sites.",
};

const blogPosts = [
  {
    slug: "why-your-plumbing-website-isnt-generating-calls",
    title: "Why Your Plumbing Website Isn't Generating Calls",
    excerpt:
      "If your website looks great but the phone isn't ringing, there's a reason. Here are the 6 most common conversion killers on plumbing websites — and how to fix them.",
    date: "2026-02-15",
    readTime: "5 min read",
    category: "Website Strategy",
  },
  {
    slug: "service-area-pages-seo-strategy-plumbers",
    title: "Service Area Pages: The SEO Strategy Most Plumbers Miss",
    excerpt:
      "Want to rank for 'plumber in [City]' for every city you serve? You need dedicated service area pages. Here's exactly how to structure them.",
    date: "2026-02-10",
    readTime: "7 min read",
    category: "Local SEO",
  },
  {
    slug: "real-cost-of-not-having-a-plumbing-website",
    title: "The Real Cost of Not Having a Plumbing Website",
    excerpt:
      "Think you don't need a website because you get enough referrals? Let's do the math on how many calls you're losing every single month.",
    date: "2026-02-05",
    readTime: "4 min read",
    category: "Business Growth",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing Marketing{" "}
              <span className="text-orange">Insights</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Practical tips on plumbing websites, local SEO, and growing your
              business online — from someone who&apos;s actually in the trade.
            </p>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-md sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-medium text-orange">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mt-3 text-xl font-bold text-navy sm:text-2xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-orange"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-slate-500">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange transition-colors hover:text-orange-hover"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>

          {/* More coming */}
          <div className="mt-12 text-center">
            <p className="text-slate-500">
              More articles coming every week. Stay tuned.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
