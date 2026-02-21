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
    slug: "plumber-advertising",
    title: "Plumber Advertising: 13 Proven Ways to Advertise Your Plumbing Business in 2026",
    excerpt:
      "From Google Ads to yard signs, here are the 13 most effective advertising channels for plumbing companies — ranked by ROI and ease of implementation.",
    date: "2026-02-18",
    readTime: "12 min read",
    category: "Advertising",
    content: `
## Why Plumber Advertising Has Changed

The Yellow Pages are dead. Door hangers alone won't cut it anymore. In 2026, **97% of homeowners search online before hiring a plumber** — and the plumbing companies winning the most jobs are the ones with a strategic advertising mix.

But "advertising" for plumbers isn't just Google Ads. It's a combination of digital and traditional channels that work together to keep your phone ringing.

Here are the 13 most effective plumbing advertising strategies, ranked by ROI.

## 1. Google Local Service Ads (LSAs)

**ROI: Highest** — Pay per lead, not per click. The Google Guaranteed badge appears at the very top of search results and builds instant trust. Most plumbing companies see $15-$40 per lead from LSAs.

## 2. Google Search Ads (PPC)

Pay-per-click ads that appear above organic results for plumbing searches. Target specific services and cities. Typical cost: $25-$75 per lead. [Learn more about PPC for plumbers](/services/ppc-for-plumbers).

## 3. Search Engine Optimization (SEO)

The highest long-term ROI channel. Once you rank on page 1, every lead is essentially free. Takes 3-6 months to build but compounds forever. [See our plumbing SEO services](/services/seo-for-plumbers).

## 4. Google Business Profile Optimization

A fully optimized GBP listing with photos, posts, and reviews drives map pack calls — often more than your website. This is part of [local SEO for plumbers](/services/local-seo).

## 5. Your Plumbing Website

Not traditionally "advertising," but your [plumbing website](/services/plumbing-websites) is the hub everything else feeds into. Without a fast, mobile-first site with emergency CTAs, every other ad dollar is wasted.

## 6. Facebook Ads

Targeted ads to homeowners in your service area. Best for brand awareness, seasonal promotions, and retargeting website visitors. Lower intent than Google but cheaper cost per impression.

## 7. Nextdoor

Homeowner-focused social platform. Claim your business page, collect recommendations, and engage with local conversations. Free organic reach plus paid ad options.

## 8. Yard Signs & Vehicle Wraps

Old school but still effective. Every job site is a billboard. Professional truck wraps generate thousands of impressions daily. Include your phone number and website prominently.

## 9. Email Marketing

Stay top-of-mind with past customers. Seasonal maintenance reminders, service promotions, and referral requests. Low cost, high retention value.

## 10. Referral Programs

Formalize your word-of-mouth. Offer $50 off their next service for every referral that books. Track it, promote it, and make it easy for happy customers to refer you.

## 11. Direct Mail

Postcards to targeted neighborhoods still work — especially for seasonal services (winterization, spring plumbing checks). Best when combined with digital follow-up.

## 12. Social Media Content

Daily posts on Facebook and Google Business Profile showing your work, team, and tips. Builds trust and keeps your business visible between searches.

## 13. Cross Promotions

Partner with other home service providers (HVAC, electricians, realtors) to refer each other. No cost, mutual benefit, warm leads.

## The Bottom Line

The most successful plumbing companies don't rely on a single advertising channel. They combine SEO for long-term growth, PPC for immediate leads, and reputation marketing for social proof.

**Want a custom advertising strategy for your plumbing business?** [Book a free strategy call](/book) — we'll audit your current marketing and build a plan that fits your budget and market.
    `,
  },
  {
    slug: "plumber-marketing",
    title: "Plumber Marketing: The Complete Guide to Marketing Your Plumbing Business",
    excerpt:
      "Everything you need to know about marketing a plumbing company in 2026 — from websites and SEO to social media and reputation management.",
    date: "2026-02-17",
    readTime: "15 min read",
    category: "Marketing",
    content: `
## Part I: The Foundations of Plumber Marketing

Marketing a plumbing business is different from marketing a restaurant or a retail store. Your customers have **urgent, location-specific needs** — a burst pipe at 2 AM, a backed-up sewer before a holiday, a water heater that died on a cold morning.

Effective plumber marketing meets homeowners at the exact moment they need help and makes it dead simple to choose you.

### Your Website Is Your Marketing Hub

Every marketing channel — Google Ads, social media, reviews, referrals — ultimately sends people to your website. If your site is slow, hard to navigate, or doesn't have a prominent phone number, you're losing leads from every channel.

A proper [plumbing website](/services/plumbing-websites) should load in under 3 seconds, have click-to-call buttons on every page, and include dedicated service and service area pages.

### Google Is Your #1 Lead Source

Over 95% of plumbing leads originate from Google — either through organic search results, the Map Pack, or paid ads. Your entire plumber marketing strategy should be built around Google visibility.

This means investing in [SEO for plumbers](/services/seo-for-plumbers) and [local SEO](/services/local-seo) as the backbone of your marketing.

## Part II: Digital Marketing Channels for Plumbers

### Search Engine Optimization (SEO)

SEO is the process of ranking your plumbing website on page 1 of Google for relevant searches. It's the highest-ROI marketing channel because once you rank, the traffic is free.

Key components:
- **On-page optimization**: Keyword-targeted service and area pages
- **Google Business Profile**: The #1 local ranking factor
- **Content creation**: Blog posts that target long-tail keywords
- **Link building**: Local authority signals from relevant sites
- **Technical SEO**: Site speed, mobile optimization, schema markup

### Pay-Per-Click Advertising (PPC)

[Google Ads for plumbers](/services/ppc-for-plumbers) provides instant visibility while SEO builds over time. You pay per click (Search Ads) or per lead (Local Service Ads). Best for new businesses or anyone wanting immediate lead flow.

### Social Media Marketing

Facebook and Google Business Profile posts keep your business visible and build trust. It's not about going viral — it's about consistency. Daily posts showing your work, team, and expertise establish you as the local authority.

### Reputation & Review Marketing

Your Google review count and rating directly impact your map pack rankings and click-through rates. A systematic review collection process after every job is one of the highest-impact marketing activities a plumber can do.

## Part III: Building Your Plumber Marketing Plan

### Step 1: Get Your Foundation Right
- Professional plumbing website with service area pages
- Claimed and optimized Google Business Profile
- Review collection process in place

### Step 2: Turn on Paid Traffic
- Google Local Service Ads for cheapest leads
- Google Search Ads for specific service targeting
- Budget: Start at $1,500-$3,000/month

### Step 3: Build Long-Term SEO
- Monthly content creation (blog posts + area pages)
- Local link building
- Technical optimization

### Step 4: Maintain & Grow
- Daily social media and GBP posts
- Monthly performance review
- Scale budget toward what's working

## How We Help

At Only Plumbing Sites, we handle all of this for plumbing companies. We're not a generic marketing agency — we're a [plumber-owned marketing company](/about) that exclusively serves plumbing businesses.

From [websites](/services/plumbing-websites) and [SEO](/services/seo-for-plumbers) to [PPC](/services/ppc-for-plumbers) and [lead generation](/services/plumbing-lead-generation), we build complete marketing systems that generate booked calls.

**Ready to grow your plumbing business?** [Book a free strategy call](/book) with a licensed plumber who understands your business.
    `,
  },
  {
    slug: "digital-marketing-for-plumbers",
    title: "Digital Marketing for Plumbers: Top Strategies to Boost Your Leads",
    excerpt:
      "13 digital marketing tips for plumbing companies that want to increase their customer base without relying on word-of-mouth alone.",
    date: "2026-02-16",
    readTime: "10 min read",
    category: "Digital Marketing",
    content: `
## What Is Digital Marketing for Plumbers?

Digital marketing for plumbers encompasses every online strategy used to attract, engage, and convert homeowners into booked plumbing jobs. It includes your website, SEO, Google Ads, social media, email marketing, and online reputation management.

Unlike traditional advertising (yard signs, direct mail, Yellow Pages), digital marketing is measurable, targetable, and scalable. You can track exactly which channels generate calls and double down on what works.

## Why Plumbers Are Investing in Digital Marketing

- **97%** of consumers search online before hiring local services
- **70%+** of plumbing searches happen on mobile devices
- **46%** of all Google searches have local intent
- **78%** of local mobile searches lead to a purchase within 24 hours

The plumbing companies growing fastest in 2026 are the ones that have shifted their marketing budgets from traditional to digital channels.

## 13 Digital Marketing Tips for Plumbing Companies

### 1. Build a Mobile-First Website

Your [plumbing website](/services/plumbing-websites) must load fast and work perfectly on phones. Click-to-call buttons, emergency CTAs, and easy navigation are non-negotiable.

### 2. Invest in SEO

[Search engine optimization](/services/seo-for-plumbers) is the highest-ROI digital marketing channel for plumbers. Once you rank on page 1, every lead is essentially free.

### 3. Optimize Your Google Business Profile

Your GBP listing drives map pack visibility. Complete every field, add photos weekly, post updates, respond to reviews, and keep your information accurate. [Local SEO](/services/local-seo) is essential.

### 4. Run Google Ads for Immediate Leads

[PPC advertising](/services/ppc-for-plumbers) puts you at the top of Google instantly. Start with Local Service Ads for the cheapest cost per lead.

### 5. Build Service Area Pages

Create dedicated pages for every city you serve. Each page targets '[City] plumber' and related searches, giving you multiple ranking opportunities.

### 6. Collect Google Reviews Systematically

After every job, send a review request. More reviews = higher map pack rankings = more calls. Automate this process.

### 7. Create Blog Content

Blog posts targeting long-tail keywords bring in search traffic and establish your expertise. Topics like 'when to replace a water heater' or 'signs of a sewer line problem' attract homeowners actively researching.

### 8. Post on Social Media Daily

Facebook and Google Business Profile posts keep your business visible. Share job photos, tips, reviews, and seasonal content.

### 9. Use Email Marketing for Retention

Send seasonal maintenance reminders to past customers. A simple email campaign drives repeat business and referrals at almost zero cost.

### 10. Implement Call Tracking

Track which marketing channels generate phone calls. Without call tracking, you're guessing where to spend your budget.

### 11. Set Up Retargeting Ads

Show ads to people who visited your website but didn't call. Retargeting keeps your plumbing company top-of-mind until they're ready.

### 12. Manage Your Online Reputation

Respond to every Google review — positive and negative. Monitor your ratings across Yelp, BBB, and other directories.

### 13. Track Everything and Optimize

Use Google Analytics, call tracking, and monthly reporting to understand what's working. Shift budget toward high-performing channels.

## How to Manage Digital Marketing Without Paying an Agency

You can handle some of this yourself: claim your GBP, respond to reviews, post on social media. But SEO, Google Ads, and website optimization require expertise and consistent time investment.

Most plumbers find that the hours spent learning and managing digital marketing are better spent running their business. That's exactly why we exist — to handle the entire digital marketing strategy while you focus on serving customers.

**Want a custom digital marketing plan?** [Book a free strategy call](/book) with a licensed plumber who builds plumbing marketing systems.
    `,
  },
  {
    slug: "plumber-keywords",
    title: "Plumber Keywords: The Complete Plumbing Keywords List for SEO & Ads",
    excerpt:
      "The definitive list of plumbing keywords for SEO and Google Ads — organized by service type, search intent, and volume. Plus how to build a keyword strategy.",
    date: "2026-02-14",
    readTime: "11 min read",
    category: "SEO",
    content: `
## The Power of Plumbing Keywords

Keywords are the foundation of every plumbing SEO and PPC strategy. They're the exact phrases homeowners type into Google when they need a plumber — and ranking for the right ones is the difference between a busy call board and crickets.

We've analyzed over **16,000 plumbing-related keywords** using data from our competitor research across 17 plumbing marketing companies. Here's everything you need to know.

## Emergency Plumbing Keywords (Highest Intent)

These keywords signal someone who needs a plumber RIGHT NOW. They have the highest conversion rates:

- emergency plumber near me
- 24 hour plumber
- plumber near me
- emergency plumbing service
- burst pipe repair
- emergency drain cleaning
- plumber open now
- after hours plumber

**Tip:** These should be your top [Google Ads](/services/ppc-for-plumbers) targets and featured prominently on your [plumbing website](/services/plumbing-websites).

## Service-Specific Keywords

### Drain Cleaning Keywords
- drain cleaning near me
- clogged drain repair
- drain cleaning service
- sewer drain cleaning
- main drain cleaning
- drain snake service

### Water Heater Keywords
- water heater repair near me
- water heater installation
- tankless water heater installation
- water heater replacement cost
- hot water heater repair

### Sewer Keywords
- sewer line repair
- sewer camera inspection
- sewer line replacement
- trenchless sewer repair
- sewer backup

### General Service Keywords
- leak repair
- pipe repair
- toilet repair
- faucet installation
- garbage disposal installation
- sump pump installation

## Location-Based Keywords (Local SEO)

These are the keywords that drive [local SEO](/services/local-seo) results and Google Map Pack rankings:

- plumber in [city]
- [city] plumber
- plumbing company [city]
- [city] drain cleaning
- [city] water heater repair
- best plumber in [city]
- plumber near [neighborhood]

**Strategy:** Build a dedicated service area page for every city you serve, targeting these keyword patterns. This is the single most effective [local SEO strategy](/services/local-seo) for plumbers.

## Keyword Research Tools

- **Google Keyword Planner** — Free with a Google Ads account. Shows search volume and competition.
- **Google Search Console** — Shows which keywords your site already ranks for.
- **Google Autocomplete** — Type a keyword and see what Google suggests.
- **Answer The Public** — Shows questions people ask about plumbing topics.

## Building Your Keyword Strategy

### Step 1: Start with Services × Locations
Combine every service you offer with every city you serve. This creates your keyword matrix.

### Step 2: Prioritize by Intent
Emergency and service-specific keywords convert highest. Focus on these first for both [SEO](/services/seo-for-plumbers) and [PPC](/services/ppc-for-plumbers).

### Step 3: Build Pages for Each Keyword Group
Each service + location combination should have its own page on your website. Don't try to target 20 keywords on one page.

### Step 4: Create Content for Long-Tail Keywords
Blog posts targeting questions like 'how much does drain cleaning cost in [city]' capture researching homeowners.

## Common Keyword Mistakes Plumbers Make

- **Targeting too broad**: "plumbing" is impossible to rank for. Target "[city] drain cleaning" instead.
- **Ignoring long-tail**: "signs my sewer line needs replacement" has fewer searches but extremely high conversion.
- **Same keyword on multiple pages**: This causes keyword cannibalization. One page per keyword target.
- **Not tracking rankings**: If you're not measuring, you're guessing.

**Want us to build a custom keyword strategy for your market?** [Book a free strategy call](/book) — we'll research your specific service area and show you exactly which keywords to target first.
    `,
  },
  {
    slug: "plumbing-marketing-ideas",
    title: "15 Plumbing Marketing Ideas That Actually Generate Calls",
    excerpt:
      "Actionable plumbing marketing ideas you can implement this week — from free strategies to paid campaigns that generate real calls.",
    date: "2026-02-12",
    readTime: "9 min read",
    category: "Marketing",
    content: `
## Plumbing Marketing Ideas That Work in 2026

Not every marketing idea requires a huge budget. Here are 15 proven strategies ranked from free/easy to paid/advanced — all tested on real plumbing businesses.

## Free / Low-Cost Ideas

### 1. Optimize Your Google Business Profile

This is the single highest-impact free marketing activity. Complete every field, add 10+ photos, post weekly updates, respond to every review, and add all your services. [Learn about local SEO](/services/local-seo).

### 2. Ask Every Customer for a Google Review

After every job, send a text with your Google review link. More reviews = higher rankings = more calls. Aim for 5+ new reviews per month.

### 3. Post Job Photos on Social Media

Before/after photos, team photos, completed projects. Post daily on Facebook and Google Business Profile. Real content > stock photos.

### 4. Claim Every Online Directory Listing

Yelp, BBB, Angi, HomeAdvisor, Yellow Pages, and plumbing-specific directories. Consistent Name/Address/Phone across all of them.

### 5. Start a Referral Program

"$50 off your next service for every friend you refer." Print cards, mention it after every job, and add it to your follow-up emails.

## Website & SEO Ideas

### 6. Add Service Area Pages to Your Website

One page per city you serve. Each one targets '[City] plumber' keywords. This is the most impactful SEO strategy most plumbers miss. [See our plumbing web design](/services/plumbing-websites).

### 7. Write Blog Posts Targeting Customer Questions

"How much does drain cleaning cost?" "When should I replace my water heater?" Each blog post is a new Google ranking opportunity.

### 8. Make Your Phone Number Impossible to Miss

Sticky click-to-call button on mobile. Phone number in the header on desktop. Emergency CTA above the fold on every page.

### 9. Add Schema Markup to Your Website

LocalBusiness schema, Service schema, FAQ schema — these help Google understand your business and can improve your search result appearance.

### 10. Focus on Site Speed

Your site should load in under 3 seconds. Compress images, use modern hosting, and ditch heavy plugins. Every second of delay costs conversions.

## Paid Advertising Ideas

### 11. Run Google Local Service Ads

Pay per lead (not per click). Google Guaranteed badge builds instant trust. Best ROI advertising channel for most plumbers. [Learn about PPC](/services/ppc-for-plumbers).

### 12. Target Emergency Keywords with Google Ads

"Emergency plumber near me" and "24 hour plumber [city]" convert at the highest rates. Bid aggressively on these during nights and weekends.

### 13. Send Seasonal Direct Mail

Postcards before winter (winterization services) and spring (maintenance checkups). Target neighborhoods in your service area.

### 14. Run Facebook Retargeting Ads

Show ads to people who visited your website but didn't call. Low cost, high reminder value. Keeps your company top-of-mind.

### 15. Invest in Professional Photography

Professional photos of your trucks, team, and completed work. Use them everywhere — website, social media, Google Business Profile, ads. Real photos outperform stock every time.

## The Marketing Budget Framework

Most successful plumbing companies spend **5-10% of revenue on marketing**. For a company doing $500K/year, that's $2,000-$4,000/month.

Recommended allocation:
- **40%** — SEO & website ($800-$1,600)
- **35%** — Google Ads ($700-$1,400)
- **15%** — Social media & content ($300-$600)
- **10%** — Everything else ($200-$400)

**Want a custom marketing plan?** [Book a free strategy call](/book) — we'll build a marketing roadmap based on your budget, market, and goals.
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
