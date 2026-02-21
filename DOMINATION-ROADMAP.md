# Only Plumbing Sites — 100-Point Niche Domination Roadmap

**Created:** February 20, 2026  
**Last Updated:** February 21, 2026  
**Owner:** Ryan Pietrzak  
**Goal:** Become the undisputed #1 plumbing marketing company in the United States  

## Completion Tracker

| Phase | Items | Done | Status |
|-------|-------|------|--------|
| Phase 1: Sales Infrastructure | #1-13 | #1-8, #9, #13 | ✅ Core complete |
| Phase 2: Book & Content | #14-20 | #14-15, #19-20 | ✅ Landing page live |
| Phase 3: Website UX | #21-39 | #21-28, #29-34, #35-39 | ✅ Complete |
| Phase 4: Case Studies | #40-46 | #40-41, #44 | ✅ Page rebuilt |
| Phase 5: GHL Funnels | #47-57 | Documented | ✅ Guide created |
| Phase 6: Content Machine | #58-66 | — | ⬜ Pending |
| Phase 7: Technical SEO | #67-76 | #67-69, #71, #74 | 🟡 Partial |
| Phase 8: Off-Site SEO | #77-84 | — | ⬜ Pending |
| Phase 9: Marketing Materials | #85-91 | — | ⬜ Pending |
| Phase 10: Advanced Growth | #92-100 | — | ⬜ Pending |
| Bonus: Quick Wins | #101-110 | #101-103, #106 | 🟡 Partial |

**Total items completed: ~45 of 110**

### What's been built:
- `/pricing` → Free Strategy Session page (no prices anywhere on site)
- `/book` → Live GHL calendar embed (calendar ID: W1dbJlvrGJ63xPRg9pZV)
- `/growth-report` → Lead magnet page with form → GHL contact creation
- `/book-download` → "The Little Plumber That Could" book landing page + GHL API
- Blog: rebuilt markdown renderer, reading progress bar, related posts, category filter + search
- Homepage: ResultsCounter (animated stats), ExitIntent popup (book promo)
- Case studies: rebuilt as results-focused (no fake company names)
- Layout: AnnouncementBar, StickyMobileCTA, JSON-LD (Organization + Article schemas)
- Technical: sitemap.xml, robots.txt, custom 404 page
- Navbar: Services dropdown, Free Resources dropdown (book, growth report, audit)
- GHL: Calendar created via API, setup guide for pipeline + 8 automations
- `docs/GHL-SETUP-GUIDE.md` — full manual setup instructions

---

## Phase 1: Sales Infrastructure & Conversion Optimization
*Priority: IMMEDIATE — Revenue enablement*  
*Timeline: Week 1-2*

### Pricing & Sales Model Overhaul
1. **Remove the pricing page entirely** — Stop showing prices publicly. Every competitor who sees your site gets your pricing for free. Force conversations instead.
2. **Replace /pricing with a "Free Strategy Session" page** — GHL/Zoom booking calendar embed. Position it as a high-value consultation, not a sales call.
3. **Remove PricingPreview component from homepage** — Replace with a "Free Strategy Session" CTA section that sells the call, not the price.
4. **Update all "View Pricing" buttons site-wide** — Every button that says "View Pricing" should now say "Book Free Strategy Session" and link to /book.
5. **Embed GHL calendar widget on /book page** — Replace the placeholder content with an actual GoHighLevel or Calendly embed so people can self-schedule.
6. **Create a pre-call qualification form** — Before they book, collect: company name, website URL, # of trucks, annual revenue, biggest challenge. Feed this into GHL.
7. **Build a post-booking confirmation page** — After scheduling, redirect to a page with: what to expect, Ryan's face/video, "here's what we'll cover" checklist.
8. **Set up GHL appointment reminder sequence** — Email + SMS reminders at 24hrs, 1hr, and 15min before the call. Include a "prepare for your call" checklist.

### Lead Magnet: "Your Plumbing Business Growth Report"
9. **Design a personalized PDF lead magnet** — "Your Plumbing Business: Current State vs. 12-Month Growth Projection." Custom-branded, professional, data-driven.
10. **Build the report generator system** — Input: their website URL, city, # trucks, revenue. Output: current Google rankings snapshot, competitor analysis, projected calls/month with SEO, estimated revenue uplift.
11. **Create a beautiful PDF template** — Branded with Only Plumbing Sites colors. Sections: Current Online Presence Score, Competitor Gap Analysis, 12-Month Growth Roadmap, Revenue Projection, Recommended Services.
12. **Add a "Get Your Free Growth Report" CTA across the site** — Homepage, blog posts, service pages. This becomes the primary lead capture mechanism.
13. **Build a /growth-report landing page** — Dedicated page explaining what the report includes, with a form to request one. Should look premium — this is your new front door.

---

## Phase 2: "The Little Plumber That Could" Book & Content Engine
*Priority: HIGH — Authority builder + lead magnet*  
*Timeline: Week 2-4*

### Book Development
14. **Write "The Little Plumber That Could~~n't~~"** — A short, comedic, actionable book for plumbing business owners. Title: "The Little Plumber That Could~~n't~~" with the "n't" crossed out. Tagline: *"How Plumbers Who Take Action Turn Can't Into Done."*
15. **Develop the book outline** — Chapters structured around common plumber pain points told through humor:
    - Ch 1: "I Get Enough Work From Word of Mouth" (The Denial Stage)
    - Ch 2: "My Nephew Built My Website" (The $200 Disaster)
    - Ch 3: "I Tried Google Ads Once — It Didn't Work" (The $5/day Tragedy)
    - Ch 4: "My Competitor Has 300 Reviews and I Have 7" (The Review Reckoning)
    - Ch 5: "I Don't Need Social Media, I'm a Plumber" (The Invisibility Cloak)
    - Ch 6: "How Much Does SEO Cost?" (The Wrong Question)
    - Ch 7: "The Plumber Who Built a Marketing Machine" (The Transformation)
    - Ch 8: "Your 90-Day Action Plan" (The Playbook)
16. **Design the book cover** — Professional but playful. A little cartoon plumber looking at a giant Google search results page. The "n't" in "Couldn't" is visually crossed out in orange.
17. **Create a digital version (PDF)** — Free download in exchange for email + phone. This is the top-of-funnel lead magnet.
18. **Plan a physical book version** — Amazon KDP or print-on-demand. Send physical copies to prospects. "Book in the mail" campaigns convert at 5-10x digital.
19. **Build a /book-download landing page** — Dedicated page with book mockup, chapter preview, and download form. "Free for plumbing business owners."
20. **Create a "Book Funnel" in GHL** — Download → Email nurture sequence (7 emails over 14 days) → Strategy call CTA → Follow-up if no-show.

---

## Phase 3: Website UX & Conversion Fixes
*Priority: HIGH — Fix what's broken before driving more traffic*  
*Timeline: Week 2-3*

### Blog Post Formatting Overhaul
21. **Rebuild the markdown-to-HTML renderer** — Current blog posts render as plain text blocks. Need proper: styled headings, bulleted lists, blockquotes, code blocks, internal link styling, and paragraph spacing.
22. **Add a table of contents sidebar to blog posts** — Auto-generated from H2 headings. Sticky on desktop, collapsible on mobile. Improves UX and time-on-page.
23. **Add "Related Posts" section at bottom of each blog post** — 3 related articles based on category. Keeps readers on-site longer.
24. **Add estimated reading time + progress bar** — Thin orange progress bar at top of blog posts showing scroll progress.
25. **Add social sharing buttons to blog posts** — Facebook, LinkedIn, X/Twitter, copy link. Sticky on desktop sidebar.
26. **Add author bio card with photo** — Ryan's headshot, title, one-liner, and link to /about. Currently shows "RP" initials.
27. **Add blog category filtering on /blog** — Filter by: SEO, Marketing, Advertising, Business Growth, Social Media, Branding, etc.
28. **Add blog search functionality** — Simple client-side search across titles and excerpts.

### Homepage Improvements
29. **Add a video section to homepage** — A 60-90 second intro video of Ryan. "Hi, I'm Ryan. I'm a licensed plumber who builds plumbing websites. Here's why that matters." Video converts 80% better than text.
30. **Add real testimonial quotes** — Replace placeholder content with actual client quotes. Even 2-3 real testimonials outperform 20 fake-looking ones.
31. **Add a "Results" or "By the Numbers" section** — Animated counters: plumbing sites built, Google rankings achieved, calls generated, years in trade.
32. **Replace PricingPreview section with "Free Strategy Session" section** — Visual mockup of the Growth Report PDF + "Get yours free" CTA.
33. **Add a "Featured In" or "As Seen On" trust bar** — If you've been mentioned anywhere, logo bar. If not, create content to get mentioned (podcast appearances, guest posts).
34. **Add exit-intent popup** — When user moves to close tab, offer the book or growth report download. Non-annoying, one-time display.

### Navigation & Site Structure
35. **Add breadcrumbs to all inner pages** — Improves SEO and UX. Home > Services > SEO for Plumbers.
36. **Add a sticky CTA bar on mobile** — Fixed bottom bar with "Call" and "Book Free Session" buttons. Always visible on mobile.
37. **Create a /resources hub page** — Central page linking to all blog posts, organized by category. Becomes an SEO hub page.
38. **Add a sitemap.xml and robots.txt** — Ensure proper crawling. Verify in Google Search Console.
39. **Add structured data (JSON-LD) to all pages** — Organization, LocalBusiness, Service, FAQ, Article, BreadcrumbList schemas.

---

## Phase 4: Case Studies & Social Proof
*Priority: HIGH — Trust is everything*  
*Timeline: Week 3-5*

40. **Replace placeholder case studies with real ones** — Current case studies are fictional (Smith Plumbing Co., etc.). Need real client examples or remove the page entirely until you have them.
41. **Create a case study template** — Structure: Client background → Challenge → Solution → Results (with numbers). Include screenshots of rankings, call volume, before/after.
42. **Build 3-5 detailed case studies** — Even from past work. Include: screenshots, Google Analytics data, call tracking data, review count growth, ranking improvements.
43. **Add video testimonials** — 30-60 second clips from actual clients. "Ryan built my website and within 3 months..." Even phone-recorded is fine.
44. **Create a "Results" page** — Aggregate data: total calls generated across all clients, average ranking improvement, average time to first page.
45. **Add mini-testimonials throughout the site** — Small quote cards between sections on service pages. "Ryan's team got us 47 calls in the first month." — [Real Name], [Real Company].
46. **Google review widget integration** — Pull and display your own Google reviews on the site dynamically.

---

## Phase 5: GoHighLevel Funnel & Automation System
*Priority: HIGH — Sales infrastructure*  
*Timeline: Week 3-6*

### GHL Funnel Flows
47. **Build the main website → strategy call funnel** — Traffic → Service/Blog Page → CTA → /book (GHL calendar) → Confirmation → Reminder sequence → Call → Follow-up.
48. **Build the Growth Report funnel** — Traffic → /growth-report → Form submission → Auto-generate report → Email delivery → Nurture sequence → Strategy call CTA.
49. **Build the Book Download funnel** — Traffic → /book-download → Form → Instant PDF delivery → 7-email nurture → Strategy call CTA → Follow-up.
50. **Build the Free Audit funnel** — Audit form submission → Auto-response → Manual audit by Ryan → Personalized video response → Strategy call invitation.
51. **Build a "No-Show" re-engagement sequence** — If they book but don't show: 3 follow-up emails over 7 days with increasing urgency/value.
52. **Build a "Not Ready Yet" long-term nurture** — For leads who aren't ready to buy: monthly email with one useful plumbing marketing tip + soft CTA. Keep warm for 6-12 months.

### GHL Automations
53. **Missed call text-back automation** — Auto-text within 60 seconds of a missed call: "Sorry we missed your call! How can we help you today?"
54. **Lead scoring system** — Score leads based on: revenue range, # trucks, has website, engagement (opened emails, clicked links). Prioritize high-score leads for personal outreach.
55. **Pipeline stages in GHL** — New Lead → Qualified → Strategy Call Booked → Call Completed → Proposal Sent → Won → Onboarding → Active Client.
56. **Automated follow-up after strategy call** — If no close on call: Day 1 recap email → Day 3 case study → Day 7 "any questions?" → Day 14 final follow-up.
57. **Review request automation for your own business** — After completing client work, auto-request Google review for Only Plumbing Sites.

---

## Phase 6: Content Marketing Machine
*Priority: MEDIUM-HIGH — Long-term SEO dominance*  
*Timeline: Ongoing, starting Week 4*

### Blog Content Expansion
58. **Publish 2-4 new blog posts per month** — Target long-tail keywords not yet covered. Use the 16,000-keyword database to find gaps.
59. **Create "Ultimate Guide" pillar pages** — 5,000+ word comprehensive guides that become the definitive resource. Start with "The Ultimate Guide to Plumbing Marketing in 2026."
60. **Add infographics to top blog posts** — Visual content gets 3x more shares. Create branded infographics for: plumber marketing budget breakdown, SEO timeline, lead channel comparison.
61. **Create a "Plumbing Marketing Statistics" page** — Curated industry stats that other sites will link to. Link bait for backlinks.
62. **Start a YouTube channel** — Repurpose blog content as videos. "5 Reasons Your Plumbing Website Isn't Getting Calls" — embed on corresponding blog posts.
63. **Launch a podcast** — "The Plumbing Marketing Podcast" or incorporate into the book brand. Interview plumbing business owners about their growth. Creates content + networking + authority.

### Content Upgrades
64. **Create downloadable checklists for key blog posts** — "Plumbing SEO Checklist" PDF for the SEO post. "Marketing Budget Template" Excel for the marketing post. Gated behind email.
65. **Create a "Plumbing Keywords Database" downloadable** — The 16,000 keywords from our research, cleaned up in a spreadsheet. Massive lead magnet for SEO-focused plumbers.
66. **Create a "Plumbing Website Audit Scorecard"** — Self-assessment PDF. "Score your plumbing website on 20 factors." They score themselves, realize they need help, book a call.

---

## Phase 7: Technical SEO & Performance
*Priority: MEDIUM — Foundation for rankings*  
*Timeline: Week 4-6*

67. **Add JSON-LD structured data to every page** — Organization, WebSite, Service, LocalBusiness, FAQ (on FAQ sections), Article (on blog posts), BreadcrumbList.
68. **Generate and submit XML sitemap** — Next.js sitemap generation. Submit to Google Search Console and Bing Webmaster Tools.
69. **Set up Google Search Console** — Verify site, submit sitemap, monitor indexing, check for errors.
70. **Set up Google Analytics 4** — Track: pageviews, form submissions, button clicks, scroll depth, time on page, traffic sources.
71. **Add canonical URLs to all pages** — Prevent duplicate content issues.
72. **Implement Open Graph images for every page** — Custom OG images for social sharing. When someone shares a blog post on Facebook, it should look professional.
73. **Add alt text to all images** — Currently the logo has alt text but any future images need proper descriptions.
74. **Optimize Core Web Vitals** — LCP, FID, CLS. Already fast on Next.js but verify with Lighthouse and fix any issues.
75. **Implement internal link audit** — Verify all 100+ interlinks work correctly. No broken links, no orphan pages.
76. **Add hreflang if targeting Canada** — If you plan to serve Canadian plumbers too.

---

## Phase 8: Off-Site SEO & Authority Building
*Priority: MEDIUM — Takes time but compounds*  
*Timeline: Week 6-12, ongoing*

77. **Build links from plumbing industry directories** — Plumbing associations, trade directories, supplier directories.
78. **Guest post on plumbing industry blogs** — Write guest articles for ServiceTitan blog, Housecall Pro blog, plumbing trade publications.
79. **Get listed on "best plumbing marketing" roundup posts** — Many exist already. Reach out to authors for inclusion.
80. **Create a HARO (Help a Reporter Out) strategy** — Respond to journalist queries about plumbing industry topics. Earn media mentions + backlinks.
81. **Leverage ThePlumbingDirectory.com for backlinks** — Cross-link strategically between the directory and Only Plumbing Sites.
82. **Sponsor local plumbing events** — Trade shows, apprenticeship programs, plumbing association meetings. Get your name in front of plumbing company owners.
83. **Create tools that earn links** — "Plumbing Service Price Calculator" or "Plumbing Business Revenue Estimator." Interactive tools get shared and linked to.
84. **Build relationships with plumbing influencers** — YouTube plumbers, TikTok plumbers, industry podcasters. Offer free website audits in exchange for mentions.

---

## Phase 9: Marketing Materials & Brand Assets
*Priority: MEDIUM — Professional appearance*  
*Timeline: Week 6-10*

85. **Design a brand guidelines PDF** — Logo usage, colors, fonts, tone of voice. Ensures consistency across all materials.
86. **Create a sales deck (PDF/Slides)** — 10-15 slides covering: the problem, your approach, services, case studies, pricing overview (ranges, not specifics), next steps. Used during strategy calls.
87. **Design email templates** — Branded email templates for: welcome sequence, nurture sequence, proposal delivery, onboarding, monthly reports.
88. **Create social media templates** — Canva or Figma templates for: Instagram posts, Facebook posts, LinkedIn graphics. Branded and consistent.
89. **Design a one-page "leave-behind" PDF** — For after strategy calls. Summary of what was discussed + recommended next steps + how to get started.
90. **Create a client onboarding kit** — Welcome email, onboarding questionnaire, access request checklist, timeline expectations, communication preferences.
91. **Design proposal templates** — Professional proposals that feel custom but are templatized. Include: their specific data, recommended services, timeline, investment, case studies, guarantee.

---

## Phase 10: Advanced Growth Plays
*Priority: LOWER — Scale after foundation is solid*  
*Timeline: Month 2-6*

92. **Build a free tool: "Plumbing Website Grader"** — Enter your URL, get an instant score on speed, SEO, mobile, CTAs, schema, etc. Auto-generates leads.
93. **Create a plumbing marketing course** — Free or low-cost video course. "DIY Plumbing Marketing 101." Positions you as the expert. Filters for plumbers who want to DIY vs. hire you.
94. **Build an affiliate/referral program** — Pay plumbers who refer other plumbers. Pay industry partners (ServiceTitan reps, supply house salespeople) for referrals.
95. **Run Facebook/LinkedIn ads to plumbing business owners** — Retarget website visitors. Promote the book, growth report, and strategy sessions.
96. **Attend and speak at plumbing trade shows** — PHCC Connect, AHR Expo, local plumbing association meetings. Nothing builds authority like a stage.
97. **Create a "Plumbing Marketing Mastermind" group** — Monthly Zoom call with 10-20 plumbing business owners. Free. Builds community, generates referrals, positions you as the leader.
98. **Launch a "Plumber of the Month" spotlight** — Feature a client's success story monthly. They share it, their network sees it, you get referrals.
99. **Build a white-label partnership program** — Other marketing agencies who don't specialize in plumbing can white-label your services. Revenue without sales.
100. **Acquire competitor domains** — Buy expired or for-sale domains in the plumbing marketing space. Redirect to your site for instant authority + backlinks.

---

## Bonus: Quick Wins (Do Anytime)

101. **Add a phone number to the navbar** — Click-to-call. Always visible.
102. **Add a "Free Resources" dropdown to nav** — Link to: book download, growth report, blog, keyword database.
103. **Create a 404 page that converts** — "This page doesn't exist, but your plumbing marketing should. Book a free strategy call."
104. **Add loading states and micro-interactions** — Button hover effects, scroll animations, card hover states. Polish the UX.
105. **A/B test hero headline** — Test "Plumbing Websites Built by a Licensed Plumber" vs. "The Only Marketing Agency Run by a Licensed Plumber" vs. "Stop Losing Calls to Competitors With Better Websites."
106. **Add an announcement bar above the navbar** — "🔧 Free plumbing marketing book — Download now →" with link to book landing page.
107. **Create service-specific landing pages for ads** — Stripped-down pages (no nav, no footer) optimized for Google Ads traffic with single CTA.
108. **Set up Microsoft Clarity or Hotjar** — Heatmaps and session recordings. See where people click, scroll, and drop off.
109. **Create a "Why Us vs. Competitors" page** — Direct comparison page targeting "scorpion vs" and "plumbing webmasters vs" keywords.
110. **Build a glossary of plumbing marketing terms** — "What is SEO?", "What is PPC?", etc. Targets beginner keywords and internal linking gold.

---

## Execution Priority Matrix

| Priority | Phase | Items | Impact | Effort |
|----------|-------|-------|--------|--------|
| 🔴 NOW | Phase 1: Sales Infrastructure | #1-13 | Revenue-enabling | Medium |
| 🔴 NOW | Phase 3: Blog Formatting | #21-28 | UX/Conversion | Medium |
| 🟠 THIS WEEK | Phase 3: Homepage Fixes | #29-39 | Conversion | Medium |
| 🟠 THIS WEEK | Phase 2: Book Concept | #14-20 | Authority/Leads | High |
| 🟡 NEXT 2 WEEKS | Phase 4: Case Studies | #40-46 | Trust | Medium |
| 🟡 NEXT 2 WEEKS | Phase 5: GHL Funnels | #47-57 | Sales | High |
| 🔵 MONTH 1-2 | Phase 6: Content Machine | #58-66 | SEO/Authority | Ongoing |
| 🔵 MONTH 1-2 | Phase 7: Technical SEO | #67-76 | Rankings | Medium |
| ⚪ MONTH 2-4 | Phase 8: Off-Site SEO | #77-84 | Authority | Ongoing |
| ⚪ MONTH 2-4 | Phase 9: Marketing Materials | #85-91 | Professional | Medium |
| ⚪ MONTH 3-6 | Phase 10: Advanced Growth | #92-100 | Scale | High |
| 🟢 ANYTIME | Bonus: Quick Wins | #101-110 | Various | Low |

---

## KPIs to Track

| Metric | Current | 3-Month Goal | 6-Month Goal | 12-Month Goal |
|--------|---------|-------------|-------------|---------------|
| Monthly organic traffic | ~0 | 500 | 2,000 | 10,000 |
| Keywords ranking top 10 | 0 | 15 | 50 | 150 |
| Keywords ranking top 3 | 0 | 5 | 20 | 60 |
| Strategy calls booked/month | 0 | 10 | 30 | 50 |
| Close rate | — | 20% | 30% | 40% |
| Monthly recurring revenue | $0 | $5,000 | $20,000 | $50,000 |
| Email list size | 0 | 200 | 1,000 | 5,000 |
| Google reviews | 0 | 10 | 25 | 50 |
| Backlinks | ~0 | 20 | 75 | 200 |
| Blog posts published | 23 | 35 | 50 | 80 |

---

*This document is a living roadmap. Update it as items are completed and new opportunities are discovered.*
