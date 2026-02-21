# Site Enhancement Roadmap — 100+ Buildable Improvements

> **Purpose:** Everything in this document can be built by Cascade. No manual tasks.  
> **Status:** PROPOSAL — Awaiting Ryan's review and approval before any work begins.  
> **Created:** February 21, 2026  
> **Total Items:** 112

---

## How to Use This Document
- Review each phase and item
- Mark items you want built with ✅
- Mark items you want to skip with ❌
- Mark items you want to modify with 🔄 and add notes
- Once approved, we'll execute phase by phase

---

## Phase 1: New Free Tools (High-Value Lead Magnets)
*Each tool = a reason for plumbers to visit, use, and remember your site. Tools capture emails and drive strategy session bookings.*

| # | Enhancement | Description |
|---|---|---|
| 1 | **Schema Markup Generator** | Plumber enters business info → we generate copy-paste LocalBusiness JSON-LD schema code. Huge SEO value, no one else offers this for plumbers specifically. |
| 2 | **Google Ads Cost Estimator** | Enter city + services → estimate monthly Google Ads spend, expected clicks, calls, and cost-per-lead. Uses market size data. |
| 3 | **Competitor Spy Tool** | Enter your domain + a competitor's domain → side-by-side Website Grader comparison. Shows where you're winning and losing vs. the competition. |
| 4 | **Service Area Page Generator** | Enter business name, city list, and services → generates SEO-optimized service area page copy they can use. Proves our expertise, shows what they're missing. |
| 5 | **Google Business Profile Audit** | Enter business name → uses Places API to pull GBP data and audit completeness (categories, hours, website, photos count, reviews, description). |
| 6 | **Meta Tag Generator** | Enter page type (homepage, service page, area page) + business info → generate optimized title tags and meta descriptions for every page type. |
| 7 | **Plumbing Hashtag Generator** | Enter platform (Instagram, TikTok, Facebook) → get a curated list of plumbing-specific hashtags sorted by reach. Copy button for each set. |
| 8 | **Response Time Calculator** | Enter average response time to leads → shows how many leads they're losing. Data: 78% of customers hire the first plumber who answers. |
| 9 | **Review Response Template Generator** | Select review type (positive 5-star, negative 1-star, neutral 3-star) → generates professional response templates they can customize and paste. |
| 10 | **Plumbing Business Name Generator** | Enter city + specialty → generates 20+ creative plumbing business name ideas with .com domain availability check. Fun viral tool. |

---

## Phase 2: Website Grader Upgrades
*Make the grader even more impressive and useful.*

| # | Enhancement | Description |
|---|---|---|
| 11 | **PDF Report Export** | "Download Full Report as PDF" button — generates a branded PDF of their grader results they can share with partners/team. |
| 12 | **Email Report Delivery** | "Email me this report" — captures email + sends formatted HTML report. Great lead capture. |
| 13 | **Before/After Score Tracking** | Store scores by domain (localStorage or API). When they re-grade, show improvement: "Your score improved from 45 → 62 since last check!" |
| 14 | **Category Accordion Grouping** | Group the 68 checks by category (Security, Mobile, SEO, etc.) with expandable accordion sections. Show pass/fail count per category. |
| 15 | **Score Comparison Benchmarks** | "Your score of 52 is better than 35% of plumbing websites we've analyzed." Show a bell curve distribution chart. |
| 16 | **Priority Action Plan** | After results, generate a numbered "Do This First" list — the top 5 highest-impact fixes ordered by difficulty and SEO value. |
| 17 | **Shareable Results Page** | Generate a unique URL for their results (e.g., /website-grader/results/abc123) that they can share. Good for social proof. |
| 18 | **Competitor Comparison Mode** | "Compare with a competitor" — run the grader on two sites side by side. Creates urgency when they see a competitor scoring higher. |
| 19 | **Historical Trend Chart** | If they've graded before, show a sparkline chart of their score over time. |
| 20 | **Social Share Buttons on Results** | "Share your score" buttons for Twitter/LinkedIn/Facebook with pre-written copy. |

---

## Phase 3: Citation Checker Upgrades
*Turn the citation checker into the most powerful free citation tool for plumbers.*

| # | Enhancement | Description |
|---|---|---|
| 21 | **GBP Auto-Fill via Places API** | Enter business name → autocomplete from Google Places → select "Is this you?" → auto-populate all fields from GBP data. |
| 22 | **Missing Website on GBP Alert** | If GBP has no website linked, show a massive red alert: "Your Google Business Profile has NO website linked — this is critical." |
| 23 | **GBP vs Website NAP Comparison** | After pulling GBP data, fetch the website and compare business name, address, phone between GBP and site. Flag mismatches. |
| 24 | **PDF Citation Report** | Generate a downloadable branded PDF showing all citation results, scores, and fix recommendations. |
| 25 | **Email Citation Report** | "Email me this report" — lead capture + sends formatted citation audit. |
| 26 | **Citation Fix Priority Queue** | After results, show a numbered list: "Fix these 5 citations first for maximum impact" based on importance × status. |
| 27 | **Claim URL Deep Links** | For each missing citation, provide a direct "Claim Now" link to the exact signup/claim page of each directory. |
| 28 | **Citation Progress Tracker** | Let them check off citations as they fix them. Save progress in localStorage. Shows completion percentage. |
| 29 | **Duplicate Listing Detection** | Flag when multiple listings for the same business are found on the same directory (common NAP problem). |
| 30 | **Industry-Specific Directories** | Add plumbing-specific directories: ThePlumbingDirectory.com, Plumber Magazine, PHCC member directory, etc. |

---

## Phase 4: Homepage & Core Page Improvements
*Polish the main conversion pages.*

| # | Enhancement | Description |
|---|---|---|
| 31 | **Animated Stats Counter** | Homepage stats (calls generated, websites built, etc.) animate/count up when scrolled into view. More engaging. |
| 32 | **Live Social Proof Ticker** | Scrolling banner: "🔔 Mike from Dallas just booked a strategy session" — real-time (or simulated) social proof notifications. |
| 33 | **Interactive Process Timeline** | Replace static process section with an interactive step-by-step timeline with hover/click details and animations. |
| 34 | **Video Embed Placeholder** | Add a video hero option on homepage for when Ryan records intro video. Placeholder with play button now. |
| 35 | **Dynamic Testimonial Rotation** | Auto-rotating testimonials with fade animation. Show fresh ones each visit. |
| 36 | **"As Seen In" Logo Bar** | Add a trust bar with logos of publications/platforms (even if just "Google Partner", "BBB", industry associations). |
| 37 | **Interactive Pricing Toggle** | Monthly vs annual pricing toggle on pricing page. Show savings for annual commitment. |
| 38 | **Service Page "What's Included" Checklist** | Each service page gets a visual checklist of exactly what's included with checkmarks. |
| 39 | **Sticky CTA Sidebar on Long Pages** | On guide/blog pages, a sticky sidebar CTA that follows as you scroll (desktop only). |
| 40 | **Page Load Skeleton Screens** | Add skeleton loading states to dynamic pages (grader, citation checker) for a more polished feel. |

---

## Phase 5: Blog & Content Enhancements
*Make the blog a traffic machine.*

| # | Enhancement | Description |
|---|---|---|
| 41 | **Reading Time Estimates on Blog Cards** | Show "5 min read" on each blog card in the listing page. |
| 42 | **Blog Search with Instant Results** | Real-time search-as-you-type for blog posts with highlighted matches. |
| 43 | **Blog Tag/Topic Pages** | Create tag pages (/blog/tag/seo, /blog/tag/google-ads) that aggregate posts by topic. Good for SEO. |
| 44 | **Author Page** | /blog/author/ryan-pietrzak — shows all posts by Ryan with bio, photo, social links. E-E-A-T signal. |
| 45 | **Blog Post Series Navigation** | For multi-part series, add "Part 1 of 3" navigation with prev/next links. |
| 46 | **Newsletter Signup Inline in Blog Posts** | Add a styled email capture box that appears mid-article (after ~40% scroll). |
| 47 | **Estimated Traffic Value on Blog Posts** | Show "This post targets keywords worth ~$X,XXX/mo in Google Ads" — demonstrates SEO value. |
| 48 | **Print-Friendly Blog Posts** | Add a "Print This Article" button with print-optimized CSS. Plumbers love printable checklists. |
| 49 | **Blog Post "Last Updated" Dates** | Show when each post was last updated for freshness signals (Google cares about this). |
| 50 | **Copy Code Block Buttons** | On technical blog posts (schema, etc.), add "Copy" buttons to code snippets. |

---

## Phase 6: SEO & Technical Improvements
*Maximize search engine performance.*

| # | Enhancement | Description |
|---|---|---|
| 51 | **Dynamic JSON-LD Schema on Every Page** | Auto-generate Organization, WebSite, BreadcrumbList, Article, FAQPage, and Service schema on relevant pages. |
| 52 | **Breadcrumb Navigation on All Pages** | Add visible breadcrumbs (Home > Services > SEO for Plumbers) — improves UX and enables BreadcrumbList schema. |
| 53 | **Automatic Internal Link Suggestions** | On blog posts, auto-detect keywords that match other pages and suggest/add internal links. |
| 54 | **Image Optimization Pipeline** | Auto-convert uploaded images to WebP, generate responsive srcset sizes, and add blur placeholder. |
| 55 | **404 Page with Smart Suggestions** | Custom 404 page that suggests similar pages based on the attempted URL. "Looking for our Website Grader?" |
| 56 | **Robots.txt Generation** | Dynamic robots.txt that includes sitemap URL and appropriate crawl directives. |
| 57 | **RSS Feed for Blog** | Generate /blog/feed.xml for RSS readers and podcast apps to syndicate content. |
| 58 | **Pagination for Blog** | If blog grows past 20+ posts, add paginated listing (page 1, 2, 3...) instead of loading all. |
| 59 | **Canonical Tags on All Pages** | Ensure every page has a proper canonical URL to prevent duplicate content. |
| 60 | **Hreflang Tags** | Add hreflang="en-US" for international SEO signals (minor but easy). |

---

## Phase 7: Conversion Rate Optimization
*Squeeze more leads from existing traffic.*

| # | Enhancement | Description |
|---|---|---|
| 61 | **Exit Intent Popup Upgrade** | Make exit intent smarter: different offers based on which page they're leaving (grader page → "Email your results", blog → "Download our free book"). |
| 62 | **Scroll-Triggered CTAs** | Different CTAs appear based on scroll depth: 25% = soft CTA, 50% = email capture, 75% = book a call. |
| 63 | **Floating "Book a Call" Button** | Persistent floating action button (bottom-right) on all pages. Expands on hover with calendar preview. |
| 64 | **Multi-Step Lead Forms** | Convert single-step forms to multi-step (Step 1: name/email, Step 2: company info, Step 3: what do you need?). Higher completion rates. |
| 65 | **Thank You Page Upsells** | After any form submission, the thank you page offers the next logical step (grader → book call, book download → growth report). |
| 66 | **Social Proof Counters** | "Join 250+ plumbing companies" counter near form submissions. Updates automatically. |
| 67 | **Urgency Elements** | "Only 3 strategy session slots left this week" (dynamic based on calendar availability). |
| 68 | **Mobile-Specific CTAs** | Different CTA text on mobile ("Tap to Call") vs desktop ("Book Your Free Strategy Session"). |
| 69 | **A/B Test Framework** | Simple A/B testing system for headlines, CTAs, and form layouts. Track conversions per variant. |
| 70 | **Micro-Commitments Quiz** | "What's your biggest marketing challenge?" quiz → personalized recommendation → CTA. Higher engagement than static forms. |

---

## Phase 8: New Content Pages
*More pages = more keywords = more traffic = more leads.*

| # | Enhancement | Description |
|---|---|---|
| 71 | **"Plumber vs" Comparison Pages** | /compare/plumber-seo-vs-google-ads, /compare/diy-website-vs-professional — SEO-rich comparison content. |
| 72 | **Industry Benchmark Report Page** | Annual "State of Plumbing Marketing" report page with downloadable PDF. Link magnet. |
| 73 | **Success Stories / Mini Case Studies** | Templated case study pages: problem → solution → results. One per client archetype. |
| 74 | **"What Does a Plumber's Website Cost?" Page** | Dedicated pricing breakdown page targeting high-volume cost queries. |
| 75 | **Plumbing Marketing Checklist Page** | Interactive checklist: 50-point marketing checklist for plumbers. Check items off, shows completion %. |
| 76 | **Seasonal Marketing Calendar Page** | Interactive month-by-month marketing calendar for plumbers. What to promote each season. |
| 77 | **"Is Your Website Costing You Money?" Quiz** | 10-question interactive quiz → score → personalized recommendations → CTA. |
| 78 | **Plumbing Website Examples Gallery** | Filterable gallery of plumbing website screenshots (good examples from around the web). Show what good looks like. |
| 79 | **Marketing ROI Comparison Table** | Big comparison table: SEO vs PPC vs LSA vs Social vs Referrals. Cost, timeline, ROI, effort level. |
| 80 | **"What Should I Do First?" Decision Tree** | Interactive flowchart: "Do you have a website?" → yes/no branching → personalized recommendation path. |

---

## Phase 9: User Experience & Design Polish
*Make the site feel premium.*

| # | Enhancement | Description |
|---|---|---|
| 81 | **Dark Mode Toggle** | Add dark/light mode toggle. Looks modern, many users prefer dark. |
| 82 | **Page Transition Animations** | Smooth fade/slide transitions between pages using Next.js view transitions. |
| 83 | **Scroll-Triggered Animations** | Elements fade/slide in as they enter viewport. Subtle, professional motion. |
| 84 | **Improved Mobile Navigation** | Full-screen mobile menu with better categorization, icons, and search. |
| 85 | **Back to Top Button** | Floating "back to top" arrow on long pages. Appears after 500px scroll. |
| 86 | **Table of Contents on Long Pages** | Auto-generated sticky TOC sidebar on guides, blog posts, and comparison pages. |
| 87 | **Progress Bar on Long Pages** | Thin colored progress bar at top of page showing read progress (already exists on blog — extend to guides). |
| 88 | **Keyboard Navigation** | Full keyboard accessibility: Tab through all interactive elements, Enter to activate. |
| 89 | **Loading States for All Forms** | Consistent loading spinners, disabled states, and success animations on every form. |
| 90 | **Confetti on Form Success** | Small confetti animation when someone submits a form or gets a high grader score. Delightful touch. |

---

## Phase 10: Advanced Features & Integrations
*Power-user features and system integrations.*

| # | Enhancement | Description |
|---|---|---|
| 91 | **Email Sequence Preview** | On the growth report page, show "Here's what you'll receive" with a timeline of the email sequence. Sets expectations. |
| 92 | **Calendar Availability Preview** | Show next 3 available time slots directly on the /book page before they click the iframe. Reduces friction. |
| 93 | **Lead Scoring Algorithm** | Score incoming leads based on form data (revenue, truck count, service area size) → prioritize in GHL. |
| 94 | **Webhook Dashboard** | Admin page (/admin) showing recent form submissions, grader runs, citation checks. For Ryan's internal use. |
| 95 | **UTM Parameter Tracking** | Auto-capture UTM parameters on all forms and pass them to GHL for attribution tracking. |
| 96 | **Referral Dashboard** | /referral/dashboard — referrers can check their referral status, see if their referrals converted, and track earnings. |
| 97 | **Content Recommendation Engine** | "You might also like..." suggestions at the bottom of every page based on content similarity. |
| 98 | **Site Search** | Global search bar (Cmd+K) that searches across all pages, tools, blog posts, and glossary terms. |
| 99 | **Notification Center** | Bell icon in navbar for returning visitors — shows new blog posts, new tools, or special offers since last visit. |
| 100 | **Performance Monitoring Dashboard** | Internal page showing Core Web Vitals, page sizes, and Lighthouse scores for all pages. |

---

## Phase 11: Viral & Growth Features
*Features designed to drive sharing and organic growth.*

| # | Enhancement | Description |
|---|---|---|
| 101 | **Embeddable Website Grade Badge** | After grading, offer an embeddable badge: "Scored 72/100 on OnlyPlumbingSites.com" that links back. Free backlinks. |
| 102 | **"Grade a Competitor" Sharing** | After results, "Grade your competitor's site" CTA with pre-filled URL sharing. Viral loop. |
| 103 | **Free Plumbing Marketing Assessment PDF** | Auto-generated personalized PDF combining grader results + citation check + keyword opportunities. Premium feel, free. |
| 104 | **Blog Post Social Image Generator** | Auto-generate Open Graph images for each blog post with title, category, and branding. Better social sharing. |
| 105 | **Interactive Infographics** | Build 3-5 interactive infographics (plumbing industry stats, marketing ROI, etc.) that people embed and link to. |
| 106 | **"Build in Public" Changelog** | /changelog page showing recent site updates. "We just added 68-point Website Grader!" Builds trust and engagement. |
| 107 | **Community Submitted Questions** | "Ask a plumbing marketing question" form → best questions get blog post answers. User-generated content ideas. |
| 108 | **Plumbing Marketing Podcast Page** | Full podcast page with episode list, embedded players, show notes, and transcript pages (for SEO). |
| 109 | **Monthly Plumbing Marketing Report** | Auto-generated monthly blog post: "Plumbing Marketing Trends — March 2026" with industry data. |
| 110 | **Partner Widget** | Embeddable "Powered by Only Plumbing Sites" widget for client websites that links back. Passive backlinks. |
| 111 | **Leaderboard: Best Plumbing Websites** | Monthly curated list of the best plumbing websites. Nominated sites get featured + backlink. Creates buzz. |
| 112 | **Open Source Plumbing Schema Templates** | GitHub repo with free plumbing schema templates. Links back to your schema guide. Developer community goodwill. |

---

## Priority Recommendation

If I were executing this, here's the order I'd suggest:

### 🔴 Build First (Highest Impact)
- **#1** Schema Markup Generator (unique, high value, no one else has it)
- **#11** PDF Report Export for Website Grader
- **#12** Email Report Delivery for Website Grader  
- **#14** Category Accordion Grouping for Website Grader
- **#21** GBP Auto-Fill for Citation Checker (needs API key)
- **#51** Dynamic JSON-LD Schema on Every Page
- **#61** Exit Intent Popup Upgrade (page-specific offers)
- **#77** "Is Your Website Costing You Money?" Quiz
- **#101** Embeddable Website Grade Badge

### 🟡 Build Second (Strong ROI)
- **#3** Competitor Spy Tool
- **#5** GBP Audit Tool
- **#16** Priority Action Plan
- **#24** PDF Citation Report
- **#31** Animated Stats Counter
- **#52** Breadcrumbs on All Pages
- **#64** Multi-Step Lead Forms
- **#70** Micro-Commitments Quiz
- **#80** Decision Tree
- **#98** Site Search (Cmd+K)

### 🟢 Build Third (Polish & Growth)
- Everything else, in phase order

---

*Total buildable items: 112*  
*Estimated build time: 40-60 sessions across all phases*  
*Zero manual tasks — everything is code*

**Awaiting your review. Let me know which items to build, skip, or modify.**
