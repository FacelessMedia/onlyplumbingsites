import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: "why-your-plumbing-website-isnt-generating-calls",
    title: "Why Your Plumbing Website Isn't Generating Calls",
    excerpt:
      "If your website looks great but the phone isn't ringing, there's a reason.",
    date: "2026-02-15",
    readTime: "5 min read",
    category: "Website Strategy",
    content: `
## The Problem Most Plumbers Don't Realize

You spent $3,000–$5,000 on a website. It looks professional. Your logo's up there. Your services are listed. But the phone isn't ringing from it.

Here's the truth: **a pretty website and a profitable website are two completely different things.**

Most plumbing websites are built by designers who have never dispatched a truck, answered an emergency call at 2 AM, or understood why a homeowner chooses one plumber over another.

## The 6 Conversion Killers

### 1. Your Phone Number Is Buried

On mobile (where 70%+ of your visitors are), your phone number should be ONE TAP away from every single page. Not hidden in a hamburger menu. Not at the bottom of the page. Front and center, always visible.

### 2. No Emergency Call-to-Action

When someone has a burst pipe, they don't want to browse your "About" page. They need a big, obvious, impossible-to-miss button that says "CALL NOW — 24/7 Emergency Service." If that doesn't exist above the fold on your homepage, you're losing emergency calls.

### 3. No Service Area Pages

If your website says "We serve the greater Chicago area" on one page, Google has no idea how to rank you for "plumber in Naperville" or "drain cleaning in Evanston." You need dedicated pages for every city and neighborhood you serve.

### 4. Slow Load Times

Your site needs to load in under 3 seconds. Every second of delay costs you 7% of conversions. If your site takes 5+ seconds on mobile, half your visitors are gone before they see anything.

### 5. No Social Proof

Where are your Google reviews? Where are your before/after photos? Where's the evidence that you've done this before? Homeowners need to trust you before they call — reviews and photos build that trust.

### 6. No Follow-Up System

Someone fills out your contact form on Saturday at 10 PM. When do they hear back? Monday at 9 AM? That's 35 hours later. By then, they've called three other plumbers. You need automated responses — confirmation email, text message, and a system that follows up.

## The Fix

Every one of these problems is solvable. And they don't require a full website rebuild — sometimes it's a few strategic changes that make all the difference.

That's exactly what we do. We audit your site, identify the conversion killers, and either fix them or build you something that works from day one.

**Want to see what's killing your conversions?** [Get a free website audit](/audit) — we'll record a personalized video walking through exactly what to fix.
    `,
  },
  {
    slug: "service-area-pages-seo-strategy-plumbers",
    title: "Service Area Pages: The SEO Strategy Most Plumbers Miss",
    excerpt:
      "Want to rank for 'plumber in [City]' for every city you serve? You need dedicated service area pages.",
    date: "2026-02-10",
    readTime: "7 min read",
    category: "Local SEO",
    content: `
## Why One "Service Areas" Page Doesn't Work

Here's what most plumbing websites have: a single page that lists every city they serve in a bullet list. Maybe a Google Map with a shaded area.

**This doesn't work for SEO.** Here's why:

Google ranks *pages*, not websites. If you want to rank for "plumber in Naperville," you need a dedicated page about your plumbing services in Naperville. A bullet point on a list page won't cut it.

## What a Service Area Page Should Include

Each service area page should be unique and include:

### 1. City-Specific Headline
"Plumbing Services in [City], [State]" — simple, clear, and exactly what people search.

### 2. Local Content
Mention specific neighborhoods, landmarks, or areas within that city. This signals to Google that you actually know and serve this area.

### 3. Services Offered in That Area
List your services with brief descriptions. "Emergency plumbing in [City]," "Drain cleaning in [City]," "Water heater repair in [City]."

### 4. Your Phone Number + CTA
Click-to-call button specific to that service area. Make it dead simple to contact you.

### 5. Reviews from Customers in That Area
If you have Google reviews mentioning that city, feature them. This builds local trust and signals relevance.

### 6. NAP Consistency
Your Name, Address, Phone — consistent with your Google Business Profile and every other listing.

## The Math

Let's say you serve 15 cities. That's 15 service area pages. Each one targets keywords like:
- "[City] plumber"
- "[City] emergency plumber"  
- "[City] drain cleaning"
- "[City] water heater repair"

That's 60+ keyword opportunities from just 15 pages. And we add 2 new pages every month.

## How We Build Them

We don't use generic templates with the city name swapped out. Google catches that. Each page gets unique content that's relevant to that specific market.

We research what people in each city are actually searching for, what competitors are ranking, and what it takes to break into the top results.

**Want to see how this would work for your service area?** [Book a free strategy call](/book) and we'll map out a service area expansion plan for your plumbing business.
    `,
  },
  {
    slug: "real-cost-of-not-having-a-plumbing-website",
    title: "The Real Cost of Not Having a Plumbing Website",
    excerpt:
      "Think you don't need a website because you get enough referrals? Let's do the math.",
    date: "2026-02-05",
    readTime: "4 min read",
    category: "Business Growth",
    content: `
## "I Get Enough Work From Word of Mouth"

I hear this all the time. And right now, it might be true. But here's what you're not seeing:

**People who get your name from a referral still Google you before calling.**

85% of consumers search online before making a purchase decision — even for local services. When someone gets your name from a neighbor and then searches for you, what do they find?

- If you don't have a website: they might find your competitors instead
- If you have a bad website: they question the referral
- If you have a great website: the referral is confirmed and they call

## Let's Do the Math

The average plumbing job generates $300–$500 in revenue. Some are more, some are less, but let's use $400 as an average.

### Without a Website
- You're invisible to the 97% of people who search online first
- You lose referral conversions when people can't verify you online
- Estimated lost calls: 10–20 per month (conservative)
- **Lost revenue: $4,000–$8,000/month**

### With a Proper Website
- You show up for local searches in your service area
- Referrals convert at a higher rate because they can verify you
- Emergency searches find you at 2 AM
- Service area pages rank you in multiple cities
- **Cost: $1,000/month (our 12-month plan) or $2,500 one-time**

The ROI isn't even close. You need **2–3 extra jobs per month** to cover the investment — and a properly built plumbing website generates 15–30+ calls per month once it's ranking.

## The Hidden Cost

Beyond lost revenue, not having a website means:
- **No reviews displayed**: Your 4.8-star Google rating is invisible
- **No service area authority**: Google doesn't know where you work
- **No 24/7 presence**: Your business is dark when you go home
- **No competitive advantage**: Every plumber who DOES have a site is winning the calls you should be getting

## The Opportunity

Here's the good news: most plumbing websites are terrible. The bar is low. If you get a properly built site with service area pages, emergency CTAs, and a follow-up system — you're instantly ahead of 80% of your competition.

That's not hype. That's what I've seen across 250+ plumbing websites.

**Ready to stop leaving money on the table?** [Get a free audit](/audit) or [book a strategy call](/book) — no pressure, just an honest look at what you're missing.
    `,
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="rounded-full bg-orange/20 px-3 py-1 text-xs font-medium text-orange">
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

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-navy prose-h2:text-2xl prose-h3:text-xl prose-a:text-orange prose-a:no-underline hover:prose-a:text-orange-hover prose-strong:text-navy">
            <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
          </article>

          {/* Author & CTA */}
          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange/10">
                <span className="text-2xl font-bold text-orange">RP</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-navy">Written by Ryan Pietrzak</p>
                <p className="text-sm text-slate-500">
                  Licensed Illinois Plumber &middot; 250+ Plumbing Websites Built
                  &middot; Co-Owner ThePlumbingDirectory.com
                </p>
                <div className="mt-4">
                  <Button
                    asChild
                    className="bg-orange text-white hover:bg-orange-hover"
                  >
                    <Link href="/book">
                      <Phone className="mr-2 h-4 w-4" />
                      Book a Call With Ryan
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^\*\*(.+?)\*\*/gm, '<strong>$1</strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hulo])/gm, (match) => match ? `<p>${match}` : match)
    .replace(/^<p><\/p>/gm, '')
    .replace(/^<p>(<[hulo])/gm, '$1')
    .replace(/(<\/[hulo][l]?>)<\/p>/gm, '$1');
}
