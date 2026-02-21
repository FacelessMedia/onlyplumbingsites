# Only Plumbing Sites — V2: 100-Point Next-Level Roadmap

**Created:** February 21, 2026  
**Owner:** Ryan Pietrzak  
**Prerequisite:** V1 Roadmap (~75/110 items complete)  
**Goal:** Transform from "good plumbing marketing site" into the undisputed authority that dominates every search result, converts at 2-3x industry average, and runs on autopilot.

---

## V2 Completion Tracker (Updated Feb 21, 2026 — Session 3)

| Phase | Items | Done | Status |
|-------|-------|------|--------|
| Phase 1: Conversion & Trust | #1-20 | #1-12, #16, #18-20 | ✅ ~85% done |
| Phase 2: SEO Domination | #21-40 | #21-23, #25, #26-30 | ✅ Canonical URLs + Areas + TOC + OG |
| Phase 3: Interactive Tools | #41-49 | #41-49 (grader rebuilt, budget calc) | ✅ All tools live |
| Phase 4: Competitor Content | #50-60 | #50-56 | ✅ 4 comparisons live |
| Phase 5: Video & Multimedia | #61-68 | #61 (podcast page) | 🟡 Needs recordings |
| Phase 6: CRO | #69-80 | #70, #73, #77, #79-80 | 🟡 Skeletons + ErrorBoundary + UTM |
| Phase 7: Authority Content | #81-90 | #81, #83-84, #87 | ✅ Guides + Stats + Budget calc |
| Phase 8: Technical Excellence | #91-97 | #92, #94-96 | ✅ Security + a11y |
| Phase 9: Scale & Automation | #98-107 | #98, #100-102 | ✅ Portal + Referral + Partners |
| Phase 10: Market Domination | #108-120 | #108 (local-seo LP) | 🟡 1 new LP |

**Total V2 items completed: ~65 of 120 code items across 3 sessions**

### Session 3 additions (content honesty overhaul + continued V2):

**MAJOR: Content Honesty Overhaul (22 files changed)**
- About page: **Complete rewrite** with real backstory — YouTube marketing education while plumbing (2009-2019), Amazon FBA/t-shirts/dropshipping journey, power of focus, ThePlumbingDirectory.com real mission (anti-lead-selling, all-in-one resource)
- License dates fixed across **19 files**: "Since 2014" removed everywhere → now "In the Trade Since 2009" / "Licensed Illinois Plumber" (apprentice 2014, official 2019)
- Template claims fixed across **12 instances**: "No templates" → "Tailored to your plumbing business" / "Built on proven frameworks, customized for your market"
- False numbers removed: Newsletter "500+ members" → no number. Tools "500+ keywords" → "50+"
- Exclusivity messaging added: "I Don't Take Every Client" section, Hero badge "Selective Clientele", values "Selective by Design" / "Local Market Focus" / "Honesty Over Hype"
- Chatbot knowledge: correct dates, one-person operation, selective clients, consulting option, local focus

**New Pages (5):**
- `/podcast` — coming soon page with 8 episode topics, newsletter signup
- `/lp/local-seo` — Google Ads landing page for local SEO / Map Pack
- `/partners` — 4 partnership types (suppliers, franchises, SaaS, associations)
- `/guides` — 8 pillar content guides hub with read times and tags
- `/tools/budget-calculator` — marketing budget allocation tool (3 tiers, progress bars)
- `/stats` — 24 plumbing industry statistics across 6 categories with sources
- `/portal` — client portal placeholder with coming-soon messaging

**New API Routes (2):**
- `/api/website-grader` — **REBUILT FROM SCRATCH.** Real server-side HTML analysis (10 deterministic checks)
- `/api/og` — dynamic Open Graph image generation (edge runtime, branded 1200×630)

**New Components (6):**
- `TableOfContents` — collapsible TOC on blog posts with anchor links
- `TrustBadgeBar` — 4 trust signals on homepage after Hero
- `ErrorBoundary` — class component with try-again + go-home fallback
- `RelatedPosts` — internal linking component for blog sidebar
- `Skeleton` — loading state UI primitive
- `NewsletterSignup` — now also in footer CTA column

**New Utilities (1):**
- `src/lib/utm.ts` — captureUTM(), getUTM(), appendUTM() for Google Ads attribution

**Infrastructure:**
- Canonical URLs: metadataBase + alternates in root layout (every page gets rel=canonical)
- Blog posts: heading IDs in markdown renderer + extractHeadings() for TOC
- Homepage: TrustBadgeBar added after Hero
- Footer: Newsletter + 6 new links (Guides, Partners, All Free Tools, Referral), /pricing→/book fixed
- Navbar: Portfolio link, "All Free Tools" in resources dropdown, Strategy Session → /book
- Resources page: added Budget Calculator + Marketing Guides links
- Tools hub: added Budget Calculator card
- Sitemap: expanded to **~100 URLs** (tools/budget-calculator, partners, guides, stats, compare pages)

---

### Session 1 build log:

**New Pages (15):**
- `/thank-you/strategy-session` — post-booking confirmation with prep checklist
- `/thank-you/growth-report` — post-request confirmation with timeline + upsell
- `/thank-you/book-download` — post-download with chapter preview + share
- `/portfolio` — 8-card website portfolio showcase with stats bar
- `/roi-calculator` — interactive ROI tool (spend × ticket × close rate = revenue)
- `/areas` — index page listing 20 metro areas by state
- `/areas/[slug]` — 20 dynamic service area pages with Service JSON-LD
- `/tools` — free tools hub linking to all 4 tools
- `/tools/plumbing-keywords` — 50+ keyword database with search/filter
- `/tools/review-link-generator` — Google review link generator
- `/compare` — competitor comparison hub
- `/compare/[slug]` — 4 comparison pages (Scorpion, Plumbing Webmasters, Hook Agency, Strictly Plumbers)
- `/resources` — central resource hub (tools, lead magnets, learning)
- `/referral` — referral program with 3-step form

**New API Routes (3):**
- `/api/contact` — GHL contact creation from contact form with honeypot
- `/api/newsletter` — GHL contact creation for newsletter signups
- `/api/referral` — GHL contact creation for referred plumbers with referrer tracking

**New Components (6):**
- `TestimonialCarousel` — auto-rotating testimonials with nav arrows + dots
- `NewsletterSignup` — email capture with honeypot + GHL integration
- `CookieConsent` — GDPR-compliant banner with localStorage persistence
- `Breadcrumbs` — path navigation with BreadcrumbList JSON-LD on all pages
- `ScrollCTA` — scroll-triggered growth report CTA on blog posts (60% depth)
- Skip-to-content link for keyboard accessibility

**New Data Files (2):**
- `src/data/service-areas.ts` — 20 metro areas with city, state, slug, population
- `src/data/competitors.ts` — 4 competitors with features, pros, cons

**Infrastructure:**
- Contact form now submits to `/api/contact` (was console.log only)
- Honeypot spam protection on contact, newsletter, and referral forms
- FAQ section now emits FAQPage JSON-LD schema
- Security headers middleware (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy)
- /pricing → /book redirect via next.config.ts
- Homepage: TestimonialCarousel added between ResultsCounter and ServicesGrid
- Footer: Portfolio + ROI Calculator added to links
- Sitemap: auto-generates entries for 20 service area pages

---

## Audit Summary (What We Have Now — Post V2)

| Category | Count | Details |
|----------|-------|---------|
| Pages | 25 | Homepage, About, Pricing/Strategy, Book, Book-Download, Growth-Report, Case Studies, Contact, Blog (23 posts), Why-Us, Glossary, Website Grader, 6 Service Pages, 2 LP Pages, Privacy, Terms, Audit |
| Components | 28 | 4 blog, 4 layout, 10 sections, 10 UI |
| API Routes | 2 | /api/growth-report, /api/book-download |
| Docs | 4 | GHL Setup, Email Templates, Off-Site SEO, Manual Action Items |
| SEO | ✅ | Sitemap, robots.txt, JSON-LD (Org + Article), GA4, Clarity, OG metadata |
| GHL | ✅ | Calendar created, contact creation on 2 forms |

## What's Missing (Gaps Found in Audit)

- No contact form API (submits client-side only, no backend)
- No spam protection on any form (no reCAPTCHA, no honeypot)
- No thank-you / confirmation pages after form submissions
- No real testimonials or video social proof
- No portfolio screenshots or live site demos
- No Table of Contents on long blog posts
- No FAQ structured data (FAQPage schema)
- No breadcrumbs on inner pages
- No newsletter/email capture beyond lead magnets
- No ROI calculator or interactive tools beyond basic website grader
- No comparison pages vs specific named competitors
- No service area pages for Ryan's own coverage
- No podcast or video content pages
- No cookie consent banner (GDPR/CCPA)
- No live chat widget integration
- No favicon or PWA manifest
- No image optimization pipeline (no next/image on most pages)
- No error boundaries for React error handling
- No loading skeletons or shimmer states
- No dark mode
- No accessibility audit (WCAG 2.1)
- No API rate limiting on form endpoints
- No Breadcrumb JSON-LD schema
- Website grader is cosmetic only (doesn't actually test the URL)

---

## Phase 1: Conversion & Trust Infrastructure
*Priority: CRITICAL — Every visitor who doesn't convert is money left on the table*  
*Timeline: Immediate*  
*🔧 = Code task | 📋 = Manual task*

### Forms & Lead Capture
1. 🔧 **Build /api/contact API route** — Submit contact form data to GHL as a new contact with tags (contact-form, website-inquiry). Currently the form is client-side only.
2. 🔧 **Add honeypot spam protection to all forms** — Hidden field that bots fill out but humans don't. Add to contact, growth-report, book-download, and audit forms.
3. 🔧 **Build /thank-you/strategy-session page** — Post-booking confirmation with "what to expect" checklist, Ryan's photo placeholder, and Zoom prep tips.
4. 🔧 **Build /thank-you/growth-report page** — Confirmation after growth report request with timeline, what's included, and strategy session upsell.
5. 🔧 **Build /thank-you/book-download page** — Confirmation after book download with chapter preview, strategy session CTA, and social share buttons.
6. 🔧 **Add newsletter signup component** — Email-only capture for blog sidebar and footer. "Get weekly plumbing marketing tips." Submit to GHL with tag (newsletter).
7. 🔧 **Build /api/newsletter API route** — Create GHL contact with newsletter tag and source tracking.
8. 🔧 **Build /api/contact API route for contact form** — POST handler that creates GHL contact with contact-form tag.

### Trust & Social Proof
9. 🔧 **Build TestimonialCarousel component** — Auto-rotating testimonial slider with star ratings, company name, and photo placeholder. Use on homepage and service pages.
10. 🔧 **Add TestimonialCarousel to homepage** — Place between ResultsCounter and ServicesGrid sections.
11. 🔧 **Build /portfolio page** — Grid of website screenshots with hover overlays showing results. Placeholder cards until real screenshots are added.
12. 🔧 **Add "As Seen On" / trust badge bar component** — Logos of publications, directories, or certifications. Place on homepage below hero.
13. 📋 **Collect 5+ real client testimonials** — Written quotes with permission to use name + company. Add to testimonial component.
14. 📋 **Take screenshots of 10+ best client websites** — Full-page screenshots for portfolio page.
15. 📋 **Get Ryan's professional headshot** — Replace all "RP" avatar placeholders site-wide.

### Conversion Optimization
16. 🔧 **Add FAQ schema (FAQPage JSON-LD) to all pages with FAQ sections** — Homepage, service pages, Why Us. Enables rich snippets in Google.
17. 🔧 **Build ROI Calculator page (/roi-calculator)** — Interactive tool: input monthly marketing spend + average ticket → shows projected calls, jobs, and revenue. Strong CTA to strategy session.
18. 🔧 **Build Breadcrumbs component** — Show path on all inner pages (Home > Services > SEO for Plumbers). Add BreadcrumbList JSON-LD schema.
19. 🔧 **Add cookie consent banner** — GDPR/CCPA compliant. Stores consent in localStorage. Only loads GA4/Clarity after consent.
20. 🔧 **Add custom favicon and web manifest** — Branded favicon (wrench/pipe icon in orange), apple-touch-icon, manifest.json for PWA basics.

---

## Phase 2: SEO Domination
*Priority: HIGH — Organic traffic is the #1 growth lever*  
*Timeline: Week 1-2*

### Technical SEO
21. 🔧 **Add canonical URLs to every page** — Explicit `<link rel="canonical">` via Next.js metadata on all 25+ pages.
22. 🔧 **Add BreadcrumbList JSON-LD to all inner pages** — Structured data for breadcrumb navigation in search results.
23. 🔧 **Add per-page OG images** — Create a dynamic OG image route using Next.js ImageResponse API. Auto-generates branded social share images with page title + logo.
24. 🔧 **Audit and fix all image alt text** — Ensure every `<Image>` and `<img>` tag has descriptive, keyword-rich alt text.
25. 🔧 **Add Table of Contents component for blog posts** — Auto-generated from H2/H3 headings with smooth scroll anchors. Sticky sidebar on desktop.

### Content SEO — Service Area Pages
26. 🔧 **Build service area page template** — Dynamic route /areas/[city] with city name, services offered, local trust signals, and map embed placeholder.
27. 🔧 **Create 10 initial service area pages** — Target top metro areas: Chicago, Houston, Phoenix, Dallas, Miami, Atlanta, Denver, Los Angeles, New York, Tampa.
28. 🔧 **Add service area pages to sitemap** — Auto-generate sitemap entries for all /areas/ pages.
29. 🔧 **Build "Areas We Serve" index page (/areas)** — Grid of all service areas with links, organized by state/region.
30. 🔧 **Add LocalBusiness JSON-LD to service area pages** — Location-specific structured data for each city page.

### Content SEO — Pillar Pages
31. 🔧 **Build pillar page: "The Ultimate Guide to Plumbing Marketing" (/guides/plumbing-marketing)** — 3,000+ word comprehensive guide with TOC, internal links to all service pages and blog posts. Targets "plumbing marketing" keyword cluster.
32. 🔧 **Build pillar page: "How to Get More Plumbing Customers" (/guides/get-more-plumbing-customers)** — Actionable guide targeting high-intent informational keywords. Links to growth report, services, and blog.
33. 🔧 **Build pillar page: "Plumbing Website Checklist" (/guides/plumbing-website-checklist)** — Interactive checklist with 50+ items. Downloadable PDF CTA. Links to website service page.
34. 🔧 **Build /guides index page** — Hub page listing all guides with descriptions and reading time.
35. 🔧 **Add guides to sitemap and navigation** — Sitemap entries + navbar resources dropdown + footer.

### Keyword Expansion
36. 🔧 **Write 10 new blog posts targeting long-tail keywords** — Topics: "how much does plumbing SEO cost", "best plumbing CRM", "plumber Google Ads budget", "how to get plumbing leads", "plumbing company branding", "plumber review management", "water heater SEO keywords", "drain cleaning marketing", "plumbing social media ideas", "commercial plumbing marketing".
37. 🔧 **Add internal linking system to blog posts** — Auto-link mentions of services, tools, and guides to their respective pages. Build a linkMap utility.
38. 🔧 **Add "Related Resources" section to service pages** — Cross-link to relevant blog posts, guides, and tools from each service page.
39. 📋 **Submit sitemap to Google Search Console** — After all new pages are built.
40. 📋 **Set up Google Search Console** — Verify domain ownership, monitor indexing.

---

## Phase 3: Advanced Interactive Tools
*Priority: HIGH — Free tools drive organic traffic and capture leads*  
*Timeline: Week 2-3*

### Website Grader V2
41. 🔧 **Upgrade Website Grader to use real checks** — Call a lightweight proxy API that checks: SSL, response time, meta tags presence, H1 tag, phone number on page, mobile viewport meta tag. Return real pass/fail results.
42. 🔧 **Build /api/website-grader API route** — Server-side URL fetching with timeout, parses HTML for key elements, returns structured results.
43. 🔧 **Add email capture to Website Grader** — After showing results, require email to see full detailed report. Create GHL contact with tag (website-grader).
44. 🔧 **Add PDF export to Website Grader results** — Generate a branded PDF report of their score that they can download/share.

### New Tools
45. 🔧 **Build SEO Keyword Tool (/tools/plumbing-keywords)** — Searchable database of 500+ plumbing keywords with search volume estimates, competition level, and CPC. Static data (no API needed).
46. 🔧 **Build Google Review Link Generator (/tools/review-link-generator)** — Input business name → generates direct Google review link. Useful free tool that drives traffic.
47. 🔧 **Build Service Area Page Generator concept (/tools/service-area-generator)** — Shows what service area pages look like and why they matter. CTA to hire us to build them.
48. 🔧 **Build /tools index page** — Hub listing all free tools with descriptions and CTAs.
49. 🔧 **Add tools to navbar, footer, and sitemap** — Full integration into site navigation.

---

## Phase 4: Competitor Domination Content
*Priority: MEDIUM-HIGH — Capture "vs" and comparison search traffic*  
*Timeline: Week 3-4*

### Competitor Comparison Pages
50. 🔧 **Build comparison template** — Reusable template for /compare/[competitor] pages with feature table, pricing comparison, and trust differentiators.
51. 🔧 **Build /compare/scorpion page** — "Only Plumbing Sites vs Scorpion" — highlight plumbing-only focus, no contracts, built by actual plumber.
52. 🔧 **Build /compare/plumbing-webmasters page** — Comparison highlighting custom builds, ownership, and direct access.
53. 🔧 **Build /compare/hook-agency page** — Comparison page vs Hook Agency.
54. 🔧 **Build /compare/strictly-plumbers page** — Comparison highlighting Ryan's actual plumbing license vs competitors.
55. 🔧 **Build /compare index page** — "How We Compare" hub page linking to all individual comparisons.
56. 🔧 **Add comparison pages to sitemap** — Auto-generate entries for /compare/* routes.
57. 📋 **Research competitor pricing and features** — Gather real data for accurate comparisons (no fabrication — use publicly available info only).

### Alternative/Listicle Pages
58. 🔧 **Build "Best Plumbing Marketing Companies" page (/best-plumbing-marketing-companies)** — Listicle-style page reviewing top options. Position Only Plumbing Sites #1 with honest competitor reviews.
59. 🔧 **Build "Best Plumbing CRM Software" page** — Review ServiceTitan, Housecall Pro, Jobber, GHL. Drive organic traffic from plumbers researching software.
60. 🔧 **Build "Best Plumbing SEO Companies" page** — Similar listicle targeting "best plumbing SEO" keyword.

---

## Phase 5: Video & Multimedia Content
*Priority: MEDIUM — Video builds trust faster than text*  
*Timeline: Week 4-5*

### Video Integration
61. 🔧 **Build VideoTestimonial component** — YouTube/Vimeo embed with custom poster, play button overlay, and client name/company below.
62. 🔧 **Build /videos page** — Video hub with categories: testimonials, tutorials, behind-the-scenes, live audits.
63. 🔧 **Add VideoSchema JSON-LD** — Structured data for video content to appear in Google video results.
64. 📋 **Record 3 "Live Website Audit" videos** — Screen-record auditing real plumbing websites (with permission). Post to YouTube, embed on site.
65. 📋 **Record 5 short educational videos** — Topics: "5 Things Wrong With Your Plumbing Website", "Why SEO Takes 3-6 Months", "Google Ads vs SEO for Plumbers", etc.

### Podcast Presence
66. 🔧 **Build /podcast page** — Placeholder page for future podcast with episode list template, subscribe buttons, and about section.
67. 📋 **Launch "Plumbing Marketing Podcast"** — Record first 3 episodes. Topics: "Why Most Plumbing Marketing Fails", "The SEO Playbook for Plumbers", "From Plumber to Marketing Agency".
68. 📋 **Submit podcast to Apple Podcasts, Spotify, Google Podcasts** — Get listed on all major platforms.

---

## Phase 6: Conversion Rate Optimization
*Priority: MEDIUM — Squeeze more value from existing traffic*  
*Timeline: Week 5-6*

### UX & Performance
69. 🔧 **Add page transition animations** — Subtle fade/slide transitions between pages using CSS animations (no heavy library needed).
70. 🔧 **Add loading skeletons for dynamic content** — Shimmer placeholders on blog filters, website grader results, and form submissions.
71. 🔧 **Add scroll-triggered animations to homepage sections** — Fade-in-up on scroll for stats, services, process steps. Use IntersectionObserver.
72. 🔧 **Optimize all images with next/image** — Replace any raw `<img>` tags with Next.js Image component for automatic optimization, lazy loading, and WebP conversion.
73. 🔧 **Add React Error Boundary** — Wrap main content in error boundary to prevent white screens. Show friendly error message with CTA to homepage.

### A/B Test Infrastructure
74. 🔧 **Build simple A/B test utility** — Cookie-based variant assignment. Support testing hero headlines, CTA copy, and button colors.
75. 🔧 **Create 2 hero headline variants** — Test "Plumbing Websites Built by a Licensed Plumber" vs "Stop Losing Calls to Competitors With Better Websites" vs "The Only Plumber Who Builds Plumbing Websites".
76. 📋 **Set up GA4 custom events for CTA clicks** — Track which buttons get clicked (strategy session, growth report, book download, audit) for conversion analysis.

### Advanced Lead Capture
77. 🔧 **Build scroll-triggered CTA banner** — Appears after 60% scroll depth on blog posts. Different from exit intent — persistent bottom banner with growth report offer.
78. 🔧 **Build multi-step lead capture form** — Replace single-page growth report form with 3-step wizard: Step 1: website URL → Step 2: business details → Step 3: contact info. Higher completion rates.
79. 🔧 **Add UTM parameter tracking** — Parse UTM params from URL and pass to GHL contact creation. Track which campaigns generate which leads.
80. 🔧 **Build /api/track API route** — Log page views and CTA clicks to a simple analytics endpoint for internal dashboards.

---

## Phase 7: Authority & Content Expansion
*Priority: MEDIUM — Long-term organic growth engine*  
*Timeline: Week 6-8*

### Resource Library
81. 🔧 **Build /resources hub page** — Central page linking to all free resources: tools, guides, templates, glossary, book, growth report.
82. 🔧 **Build downloadable checklist PDFs** — Create HTML-to-PDF templates for: "Plumbing Website Launch Checklist", "Monthly SEO Checklist", "Google Business Profile Setup Guide".
83. 🔧 **Build /templates page** — Free templates for plumbers: invoice template, estimate template, follow-up email templates. Capture email for download.

### Industry Content
84. 🔧 **Build "Plumbing Industry Statistics" page (/stats)** — Curated statistics about the plumbing industry, market size, digital marketing adoption. Great for backlinks.
85. 🔧 **Build "Plumbing Marketing Case Study Template" page** — Teach plumbers how to document their own success stories. Subtle positioning of our services.
86. 🔧 **Write 10 location-specific blog posts** — "How to Market Your Plumbing Business in [City]" for top 10 metros. Target "[city] plumbing marketing" long-tails.
87. 🔧 **Build "Plumbing Marketing Budget Calculator" (/tools/budget-calculator)** — Interactive tool: input revenue, # trucks, goals → recommended monthly marketing budget breakdown.

### Email Marketing
88. 🔧 **Build email preference center page (/email-preferences)** — Let subscribers manage what emails they receive. Links from all email footers.
89. 📋 **Create 12-email welcome sequence in GHL** — Triggered on newsletter signup. Delivers value over 6 weeks, culminates in strategy session offer.
90. 📋 **Create monthly newsletter template** — Blog roundup + industry news + featured tool + special offer. Send monthly.

---

## Phase 8: Technical Excellence
*Priority: MEDIUM — Polish and performance*  
*Timeline: Week 8-10*

### Performance & Security
91. 🔧 **Add API rate limiting** — Limit form submissions to 5/minute per IP using in-memory store. Prevent abuse.
92. 🔧 **Add Content Security Policy headers** — Protect against XSS attacks via Next.js middleware.
93. 🔧 **Add structured data testing page (dev only)** — Debug page that shows all JSON-LD on current page for validation.
94. 🔧 **Implement proper 301 redirects** — Redirect old URLs (/pricing → /book for anyone with old bookmarks) via next.config.js redirects.

### Accessibility
95. 🔧 **WCAG 2.1 AA audit and fixes** — Ensure all interactive elements have focus styles, proper ARIA labels, sufficient color contrast, and keyboard navigation.
96. 🔧 **Add skip-to-content link** — Hidden link that appears on focus for keyboard users to skip navigation.
97. 🔧 **Add aria-live regions for form submissions** — Screen readers announce form success/error states.

---

## Phase 9: Scale & Automation
*Priority: LOWER — Systems for growth*  
*Timeline: Week 10-12*

### Client Portal Concept
98. 🔧 **Build /client-login placeholder page** — "Client Portal Coming Soon" with email capture for waitlist. Position as premium feature.
99. 📋 **Plan client portal features** — Project tracker, invoice history, analytics dashboard, support tickets. Scope for future build.

### Referral & Partnership
100. 🔧 **Build /referral page** — Referral program landing page: "Refer a plumber, earn $500." Form to submit referrals → GHL contact with referral tag.
101. 🔧 **Build /api/referral API route** — Create GHL contact for referred plumber with referrer info in custom fields.
102. 🔧 **Build /partners page** — Partnership program for complementary businesses (plumbing supply houses, trade schools, software companies). Application form.
103. 📋 **Design referral reward structure** — Decide payout amounts, tracking method, and terms.

### Automation & Integration
104. 📋 **Build n8n workflow: New GHL contact → Slack notification** — Get instant alerts when new leads come in.
105. 📋 **Build n8n workflow: Weekly lead report email** — Automated summary of leads generated, source breakdown, and follow-up status.
106. 📋 **Build n8n workflow: Stripe payment → GHL pipeline stage update** — When client pays, auto-move to "Won" stage.
107. 📋 **Set up automated monthly SEO report generation** — Pull data from Google Search Console API, format into branded report, email to clients.

---

## Phase 10: Market Domination
*Priority: GROWTH — Outmaneuver every competitor*  
*Timeline: Ongoing*

### Paid Advertising
108. 🔧 **Build 3 more ad landing pages** — /lp/local-seo, /lp/plumbing-lead-generation, /lp/google-ads-for-plumbers. Focused pages for each ad campaign.
109. 🔧 **Add Google Ads conversion tracking** — gtag event snippets on thank-you pages for accurate ROAS measurement.
110. 📋 **Launch Google Ads campaigns** — $50-100/day budget targeting "plumbing marketing company", "plumbing SEO services", "plumber website design". Use LP pages.
111. 📋 **Launch Facebook retargeting campaign** — Retarget website visitors with strategy session ads. $20/day budget.

### Community & Brand
112. 📋 **Create private Facebook Group** — "Plumbing Business Owners Who Want to Grow" — share tips, answer questions, build community. Funnel to services.
113. 📋 **Launch LinkedIn content strategy** — 3 posts/week: industry insights, case studies, behind-the-scenes. Build Ryan's personal brand.
114. 📋 **Apply to speak at plumbing trade shows** — PHCC Connect, AHR Expo, Service World Expo. Topic: "Digital Marketing for Plumbing Companies."
115. 📋 **Write guest articles for 5 industry publications** — Target Plumbing & Mechanical, PHC News, Contractor Magazine.

### Advanced Features
116. 🔧 **Build live chat widget integration** — Add Tawk.to or GHL chat widget. Conditional loading (don't load on mobile to save performance).
117. 🔧 **Build "Website of the Month" showcase section** — Rotating featured client website on homepage. Fresh content signal + social proof.
118. 🔧 **Build pricing estimator (hidden/internal)** — Internal tool at /internal/estimator for Ryan to quickly generate project estimates during sales calls.
119. 🔧 **Add dark mode support** — Toggle in navbar. Persist preference in localStorage. Full theme system with Tailwind dark: variants.
120. 🔧 **Build sitemap index** — Split sitemap into multiple files (pages, blog, areas, guides) for better crawl efficiency as site grows.

---

## Summary

| Phase | Items | Code (🔧) | Manual (📋) | Focus |
|-------|-------|-----------|-------------|-------|
| Phase 1: Conversion & Trust | #1-20 | 17 | 3 | Forms, social proof, trust signals |
| Phase 2: SEO Domination | #21-40 | 18 | 2 | Technical SEO, service areas, pillar pages |
| Phase 3: Interactive Tools | #41-49 | 9 | 0 | Website grader V2, keyword tool, review link gen |
| Phase 4: Competitor Content | #50-60 | 11 | 1 | Comparison pages, listicle content |
| Phase 5: Video & Multimedia | #61-68 | 4 | 4 | Video testimonials, podcast, YouTube |
| Phase 6: CRO | #69-80 | 11 | 1 | Animations, A/B testing, advanced lead capture |
| Phase 7: Authority Content | #81-90 | 8 | 2 | Resource library, industry content, email marketing |
| Phase 8: Technical Excellence | #91-97 | 7 | 0 | Security, performance, accessibility |
| Phase 9: Scale & Automation | #98-107 | 4 | 6 | Client portal, referrals, n8n workflows |
| Phase 10: Market Domination | #108-120 | 8 | 5 | Paid ads, community, advanced features |

**Total: 120 items (97 code tasks, 23 manual tasks)**

*Note: Items #101-120 are bonus stretch goals beyond the core 100.*
