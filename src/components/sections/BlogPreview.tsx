import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const featuredPosts = [
  {
    slug: "why-your-plumbing-website-isnt-generating-calls",
    title: "Why Your Plumbing Website Isn't Generating Calls",
    excerpt:
      "If your website looks great but the phone isn't ringing, there's a reason. Here are the 6 most common conversion killers.",
    readTime: "5 min read",
    category: "Website Strategy",
  },
  {
    slug: "plumber-keywords",
    title: "The Complete Plumbing Keywords List for SEO & Ads",
    excerpt:
      "The definitive list of plumbing keywords organized by service type, search intent, and volume.",
    readTime: "11 min read",
    category: "SEO",
  },
  {
    slug: "service-area-pages-seo-strategy-plumbers",
    title: "Service Area Pages: The SEO Strategy Most Plumbers Miss",
    excerpt:
      "Want to rank for 'plumber in [City]' for every city you serve? You need dedicated service area pages.",
    readTime: "7 min read",
    category: "Local SEO",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              From the Blog
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Plumbing Marketing Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-orange transition-colors hover:text-orange-hover"
          >
            View all articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl bg-slate-50 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Category badge */}
              <span className="mb-4 inline-flex w-fit rounded-full bg-orange/10 px-3 py-1 text-xs font-medium text-orange">
                {post.category}
              </span>

              <h3 className="text-base font-bold leading-snug text-navy transition-colors group-hover:text-orange">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {post.excerpt}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange opacity-0 transition-opacity group-hover:opacity-100">
                  Read
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
