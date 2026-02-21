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
    slug: "plumber-answering-service",
    title: "Plumber Answering Service: Why Missed Calls Are Costing You Thousands",
    excerpt:
      "Every missed call is a lost job. Here's how plumber answering services work, what they cost, and whether you need one for your plumbing business.",
    date: "2026-02-20",
    readTime: "8 min read",
    category: "Business Operations",
  },
  {
    slug: "plumber-memes",
    title: "21 Hilarious Plumber Memes Every Plumbing Company Owner Will Relate To",
    excerpt:
      "The funniest plumber memes on the internet — plus how to use humor in your plumbing marketing to stand out on social media.",
    date: "2026-02-19",
    readTime: "6 min read",
    category: "Social Media",
  },
  {
    slug: "plumber-advertising",
    title: "Plumber Advertising: 13 Proven Ways to Advertise Your Plumbing Business in 2026",
    excerpt:
      "From Google Ads to yard signs, here are the 13 most effective advertising channels for plumbing companies — ranked by ROI and ease of implementation.",
    date: "2026-02-18",
    readTime: "12 min read",
    category: "Advertising",
  },
  {
    slug: "plumber-marketing",
    title: "Plumber Marketing: The Complete Guide to Marketing Your Plumbing Business",
    excerpt:
      "Everything you need to know about marketing a plumbing company in 2026 — from websites and SEO to social media and reputation management.",
    date: "2026-02-17",
    readTime: "15 min read",
    category: "Marketing",
  },
  {
    slug: "digital-marketing-for-plumbers",
    title: "Digital Marketing for Plumbers: Top Strategies to Boost Your Leads",
    excerpt:
      "13 digital marketing tips for plumbing companies that want to increase their customer base without relying on word-of-mouth alone.",
    date: "2026-02-16",
    readTime: "10 min read",
    category: "Digital Marketing",
  },
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
    slug: "plumber-keywords",
    title: "Plumber Keywords: The Complete Plumbing Keywords List for SEO & Ads",
    excerpt:
      "The definitive list of plumbing keywords for SEO and Google Ads — organized by service type, search intent, and volume. Plus how to build a keyword strategy.",
    date: "2026-02-14",
    readTime: "11 min read",
    category: "SEO",
  },
  {
    slug: "plumbing-marketing-ideas",
    title: "15 Plumbing Marketing Ideas That Actually Generate Calls",
    excerpt:
      "Actionable plumbing marketing ideas you can implement this week — from free strategies to paid campaigns that generate real calls.",
    date: "2026-02-12",
    readTime: "9 min read",
    category: "Marketing",
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
    slug: "plumbing-business-plan",
    title: "Plumbing Business Plan: How to Write One That Actually Works [2026 Guide]",
    excerpt:
      "A step-by-step guide to writing a plumbing business plan — whether you're starting from scratch or scaling an existing plumbing company.",
    date: "2026-02-08",
    readTime: "14 min read",
    category: "Business Growth",
  },
  {
    slug: "how-to-start-a-plumbing-business",
    title: "How to Start a Plumbing Business: 10 Steps to Launch in 2026",
    excerpt:
      "A step-by-step guide to starting your own plumbing business — from getting licensed to getting your first customers.",
    date: "2026-02-06",
    readTime: "11 min read",
    category: "Business Growth",
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
  {
    slug: "selling-a-plumbing-business",
    title: "Selling a Plumbing Business: How to Value, Prepare, and Sell for Maximum Price",
    excerpt:
      "Thinking about selling your plumbing company? Here's how to value it, prepare it for sale, and negotiate the best deal.",
    date: "2026-02-04",
    readTime: "13 min read",
    category: "Business Growth",
  },
  {
    slug: "facebook-ads-for-plumbers",
    title: "Facebook Ads for Plumbers: How to Generate Leads Without Wasting Money",
    excerpt:
      "A practical guide to running Facebook ads for your plumbing business — targeting, budgets, ad types, and how to avoid the most common money-wasting mistakes.",
    date: "2026-02-03",
    readTime: "9 min read",
    category: "Advertising",
  },
  {
    slug: "plumber-slogans",
    title: "Best Plumber Slogans & Taglines: 50+ Ideas for Your Plumbing Business",
    excerpt:
      "Need a catchy slogan for your plumbing company? Here are 50+ proven plumber slogans and taglines — plus tips on choosing one that actually helps your brand.",
    date: "2026-02-02",
    readTime: "7 min read",
    category: "Branding",
  },
  {
    slug: "plumber-sales-training",
    title: "Plumber Sales Training: How to Close More Jobs and Increase Your Average Ticket",
    excerpt:
      "Sales training techniques built for plumbers — from the initial phone call to presenting options on-site. Close more jobs at higher ticket prices without being pushy.",
    date: "2026-02-01",
    readTime: "10 min read",
    category: "Business Growth",
  },
  {
    slug: "social-media-for-plumbers",
    title: "Social Media for Plumbers: The Complete Guide to Building Your Online Presence",
    excerpt:
      "Which social platforms matter for plumbers, what to post, how often, and how to turn followers into booked jobs.",
    date: "2026-01-30",
    readTime: "9 min read",
    category: "Social Media",
  },
  {
    slug: "plumber-website-builder",
    title: "Plumber Website Builder: Best Options for Building a Plumbing Website in 2026",
    excerpt:
      "Comparing the top website builders for plumbing companies — from DIY options like Wix and Squarespace to custom-built solutions.",
    date: "2026-01-28",
    readTime: "8 min read",
    category: "Website Strategy",
  },
  {
    slug: "plumbing-social-media-posts",
    title: "Plumbing Social Media Posts: 30 Ideas Your Followers Will Actually Engage With",
    excerpt:
      "Stuck on what to post? Here are 30 ready-to-use social media post ideas for plumbing companies — organized by category with example captions.",
    date: "2026-01-26",
    readTime: "7 min read",
    category: "Social Media",
  },
  {
    slug: "reputation-management-for-plumbers",
    title: "Reputation Management for Plumbers: How to Build and Protect Your Online Reviews",
    excerpt:
      "Your Google reviews directly impact your rankings and whether homeowners call you. Here's how to systematically build and protect your online reputation.",
    date: "2026-01-24",
    readTime: "8 min read",
    category: "Marketing",
  },
  {
    slug: "plumber-chatbot",
    title: "AI Chatbots for Plumbers: Should Your Plumbing Website Have One?",
    excerpt:
      "AI chatbots can capture leads 24/7 on your plumbing website. Here's how they work, what they cost, and whether they're worth the investment.",
    date: "2026-01-22",
    readTime: "7 min read",
    category: "Technology",
  },
  {
    slug: "plumber-branding",
    title: "Plumber Branding: How to Build a Plumbing Brand That Homeowners Remember",
    excerpt:
      "Your brand is more than a logo. Here's how to build a plumbing brand that stands out, builds trust, and makes homeowners choose you over competitors.",
    date: "2026-01-20",
    readTime: "8 min read",
    category: "Branding",
  },
  {
    slug: "plumbing-logo-design",
    title: "Plumbing Logo Design: How to Create a Logo That Builds Trust and Recognition",
    excerpt:
      "Your plumbing logo appears on everything — trucks, uniforms, website, cards. Here's how to design one that looks professional and builds your brand.",
    date: "2026-01-18",
    readTime: "6 min read",
    category: "Branding",
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
