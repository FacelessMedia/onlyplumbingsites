# Manual Action Items — Only Plumbing Sites

**Last Updated:** February 21, 2026  
**Owner:** Ryan Pietrzak  

Use this checklist to track everything that needs manual setup outside of code.  
Check items off as you complete them.

---

## 🔴 Priority 1: GHL Setup (Do First)

### GHL Sales Pipeline
- [ ] Log into GoHighLevel → Opportunities → Pipelines
- [ ] Create pipeline: "Only Plumbing Sites Sales Pipeline"
- [ ] Add these 8 stages in order:
  1. New Lead
  2. Growth Report Sent
  3. Strategy Call Booked
  4. Strategy Call Completed
  5. Proposal Sent
  6. Follow-Up
  7. Won (Closed)
  8. Lost
- [ ] Set "Won" and "Lost" as terminal stages
- [ ] Full details in `docs/GHL-SETUP-GUIDE.md`

### GHL Automation Workflows (Build These 8)
- [ ] **1. Appointment Confirmation** — Trigger: calendar booking → Send confirmation email with prep checklist + calendar invite
- [ ] **2. Appointment Reminders** — 24hr before: email + SMS → 1hr before: SMS → 15min before: SMS
- [ ] **3. No-Show Follow-Up** — Trigger: appointment marked no-show → Day 1: "We missed you" email → Day 3: SMS → Day 7: final email with reschedule link
- [ ] **4. Post-Call Nurture** — Trigger: appointment completed + no deal → Day 1: recap email → Day 3: case study email → Day 7: growth report offer → Day 14: strategy call re-offer
- [ ] **5. Long-Term Nurture** — Trigger: Lost stage → Monthly email for 12 months with blog content + seasonal tips + offers
- [ ] **6. Growth Report Follow-Up** — Trigger: growth report form submitted → Immediate: confirmation email → Day 2: "Here's your report" email → Day 5: strategy call invite
- [ ] **7. Missed Call Text-Back** — Trigger: inbound call missed → Immediate SMS: "Sorry we missed your call. How can we help?"
- [ ] **8. Google Review Request** — Trigger: manual (after project completion) → Day 1: email with direct Google review link → Day 3: SMS reminder if no review
- [ ] Full workflow details and email copy in `docs/GHL-SETUP-GUIDE.md`

### GHL Integrations
- [ ] **Zoom:** Settings → Integrations → Connect Zoom account → Enable auto-generated meeting links for calendar bookings
- [ ] **Google Calendar:** Settings → Integrations → Connect Google Calendar → Enable two-way sync to prevent double-booking
- [ ] **Stripe (optional):** Settings → Integrations → Connect Stripe for future payment collection

---

## 🟡 Priority 2: Analytics & Tracking

### Google Analytics 4
- [ ] Go to [analytics.google.com](https://analytics.google.com)
- [ ] Create property for "onlyplumbingsites.com"
- [ ] Get your Measurement ID (starts with `G-`)
- [ ] Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- [ ] Redeploy the site (Vercel will pick it up automatically)
- [ ] Verify data is flowing in GA4 Real-Time reports

### Google Search Console
- [ ] Go to [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Add property: `https://onlyplumbingsites.com`
- [ ] Verify ownership (DNS TXT record or HTML file method)
- [ ] Submit sitemap: `https://onlyplumbingsites.com/sitemap.xml`
- [ ] Check for any crawl errors after 24-48 hours

### Microsoft Clarity (Optional — Free Heatmaps)
- [ ] Go to [clarity.microsoft.com](https://clarity.microsoft.com)
- [ ] Create project for onlyplumbingsites.com
- [ ] Add the tracking script to `.env.local` as `NEXT_PUBLIC_CLARITY_ID`
- [ ] (Note: Clarity snippet support can be added to layout.tsx — ask Cascade)

---

## 🟡 Priority 3: Content & Assets

### Ryan's Photo
- [ ] Get a professional headshot (or good quality photo)
- [ ] Add to `/public/ryan.jpg` (or similar)
- [ ] Update About page to use real photo instead of "RP" avatar
- [ ] Update book download page author section
- [ ] Update any other avatar placeholders

### Growth Report PDF Template
- [ ] Design branded PDF template with Only Plumbing Sites colors (navy + orange)
- [ ] Sections to include:
  - Current Online Presence Score
  - Google Rankings Snapshot
  - Competitor Gap Analysis
  - 12-Month Growth Roadmap
  - Revenue Projection
  - Recommended Services
- [ ] Tools: Canva, Figma, or Adobe InDesign
- [ ] Save as template so you can customize per lead

### Book: "The Little Plumber That Couldn't"
- [ ] ⚠️ **Being handled in a separate project**
- [ ] When ready, drop the PDF into `/public/book/` 
- [ ] Update `/book-download` page download link to point to actual PDF
- [ ] (Optional) Set up Amazon KDP for physical copies

### Real Testimonials
- [ ] Collect 3-5 written testimonials from actual clients
- [ ] Get permission to use their name + company name
- [ ] (Optional) Record 1-2 short video testimonials (phone is fine)
- [ ] Add to case studies page and homepage

### Real Case Study Data
- [ ] Pick 2-3 best client results
- [ ] Document: before state, what you did, results (rankings, calls, revenue)
- [ ] Get client permission to share
- [ ] Add to `/case-studies` page

---

## 🟢 Priority 4: Domain & Hosting

### Email Setup
- [ ] Set up `hello@onlyplumbingsites.com` (if not already done)
- [ ] Set up `ryan@onlyplumbingsites.com` (if not already done)
- [ ] Configure SPF, DKIM, DMARC records for deliverability

### DNS Records (if needed)
- [ ] Verify domain is pointed to Vercel/hosting provider
- [ ] Add Google Search Console verification TXT record
- [ ] Add email SPF/DKIM records

---

## 🟢 Priority 5: Ongoing / Monthly Tasks

### Content Calendar (Weekly)
- [ ] Publish 1 new blog post per week
- [ ] Share each post on Facebook, LinkedIn, Instagram
- [ ] Repurpose blog content into social media snippets

### Review Generation (After Each Project)
- [ ] Trigger the Google Review Request automation in GHL
- [ ] Follow up personally if no review after 5 days
- [ ] Respond to every review (positive and negative) within 24 hours

### Google Business Profile (Monthly)
- [ ] Post 2-4 Google Business updates per month
- [ ] Add new photos of projects/team
- [ ] Respond to all new reviews
- [ ] Update services/hours if anything changes

### Directory Listings (One-Time Setup)
- [ ] Claim/update listing on:
  - [ ] Google Business Profile
  - [ ] Yelp
  - [ ] BBB
  - [ ] Angi (formerly Angie's List)
  - [ ] HomeAdvisor
  - [ ] ThePlumbingDirectory.com (you co-own this!)
  - [ ] Clutch.co
  - [ ] DesignRush
  - [ ] UpCity
- [ ] Ensure NAP (Name, Address, Phone) is consistent across all listings

---

## 🔵 V2 Roadmap — New Manual Tasks

### Content & Assets (V2 Phase 1)
- [ ] Collect 5+ real client testimonials (written quotes with permission to use name + company)
- [ ] Take screenshots of 10+ best client websites for portfolio page
- [ ] Get Ryan's professional headshot — replace all "RP" avatar placeholders site-wide

### SEO & Search (V2 Phase 2)
- [ ] Submit updated sitemap to Google Search Console (after new pages built)
- [ ] Set up Google Search Console — verify domain ownership, monitor indexing

### Competitor Research (V2 Phase 4)
- [ ] Research competitor pricing and features for comparison pages (use publicly available info only)

### Video & Multimedia (V2 Phase 5)
- [ ] Record 3 "Live Website Audit" videos — screen-record auditing real plumbing websites (with permission)
- [ ] Record 5 short educational videos — "5 Things Wrong With Your Plumbing Website", "Why SEO Takes 3-6 Months", etc.
- [ ] Launch "Plumbing Marketing Podcast" — record first 3 episodes
- [ ] Submit podcast to Apple Podcasts, Spotify, Google Podcasts

### Conversion Optimization (V2 Phase 6)
- [ ] Set up GA4 custom events for CTA clicks — track strategy session, growth report, book download, audit button clicks

### Email Marketing (V2 Phase 7)
- [ ] Create 12-email welcome sequence in GHL — triggered on newsletter signup, 6 weeks of value
- [ ] Create monthly newsletter template — blog roundup + industry news + featured tool

### Scale & Automation (V2 Phase 9)
- [ ] Plan client portal features — project tracker, invoice history, analytics dashboard, support tickets
- [x] ~~Design referral reward structure — payout amounts, tracking method, and terms~~ ✅ Done — $500/referral, 12-month tracking, T&C published on /referral page
- [ ] Build n8n workflow: New GHL contact → Slack notification
- [ ] Build n8n workflow: Weekly lead report email
- [ ] Build n8n workflow: Stripe payment → GHL pipeline stage update
- [ ] Set up automated monthly SEO report generation

### Market Domination (V2 Phase 10)
- [ ] Launch Google Ads campaigns — $50-100/day targeting "plumbing marketing company", "plumbing SEO services"
- [ ] Launch Facebook retargeting campaign — retarget website visitors, $20/day budget
- [ ] Create private Facebook Group — "Plumbing Business Owners Who Want to Grow"
- [ ] Launch LinkedIn content strategy — 3 posts/week: insights, case studies, behind-the-scenes
- [ ] Apply to speak at plumbing trade shows — PHCC Connect, AHR Expo, Service World Expo
- [ ] Write guest articles for 5 industry publications — Plumbing & Mechanical, PHC News, Contractor Magazine

---

## 🟣 Citation Checker — GBP API Integration (Future Enhancement)

### Google Cloud Console Setup
- [ ] Create a Google Cloud project for Only Plumbing Sites
- [ ] Enable the **Google My Business API** (now "Business Profile API") 
- [ ] Enable the **Google Places API** (for business search/autocomplete)
- [ ] Create OAuth 2.0 credentials (for GBP read access) OR API key (for Places)
- [ ] Add API key to `.env.local`: `GOOGLE_PLACES_API_KEY=<your-key>`
- [ ] Note: Places API allows searching for businesses by name without OAuth
- [ ] GBP API requires OAuth + business ownership verification for full data access

### How It Will Work
1. User enters company name → we call Places API autocomplete
2. User selects their business from dropdown ("Is this you?")
3. We pull: business name, address, phone, website, hours, categories
4. If website field is empty → BIG RED FLAG: "Your GBP has no website linked!"
5. If website IS linked → we auto-fill the citation checker form with GBP data
6. We also fetch the website and compare NAP: GBP vs Website discrepancies
7. **Important:** If no website on GBP and we find one via Google search, we ask "Is this your website?" — NEVER assume

### Budget Note
- Places API: $17/1000 requests (Autocomplete) + $17/1000 (Place Details)
- At 100 checks/month = ~$3.40/month — very affordable
- GBP API: Free but requires OAuth flow + Google approval for production access

---

## 🟣 Pillar Content — Guide Pages to Build

See `PILLAR-CONTENT-ROADMAP.md` for the full 35-guide roadmap. Priority order:

- [ ] **Schema Markup for Plumbers** — `/guides/schema-markup-for-plumbers` (Phase 1, Critical)
- [ ] **Google Business Profile for Plumbers** — `/guides/google-business-profile-for-plumbers` (Phase 1, Critical)
- [ ] **SEO for Plumbers** — `/guides/seo-for-plumbers` (Phase 1, Critical)
- [ ] **Plumbing Website Design Guide** — `/guides/plumbing-website-design` (Phase 1, Critical)
- [ ] **Google LSA for Plumbers** — `/guides/google-lsa-for-plumbers` (Phase 2, High)
- [ ] **Google Ads for Plumbers** — `/guides/google-ads-for-plumbers` (Phase 2, High)
- [ ] **Social Media for Plumbers** — `/guides/social-media-for-plumbers` (Phase 3, High)
- [ ] **Google Reviews for Plumbers** — `/guides/google-reviews-for-plumbers` (Phase 3, High)

---

## 🟣 Referral Program — Operational Setup

- [ ] Set up referral tracking in GHL (tag referrals, track attribution for 12 months)
- [ ] Set up payment process for referral bonuses (Zelle/Venmo/PayPal/check)
- [ ] Create W-9 collection process for referrers earning $600+ in a calendar year
- [ ] Create email templates: referral received confirmation, status update, payment confirmation
- [ ] Build GHL automation: referral form submission → create contact → tag as referral → notify Ryan

---

## 🟣 Keyword Database — Data Verification

- [ ] Cross-reference keyword volume data with Google Keyword Planner (requires active Google Ads account)
- [ ] Verify CPC ranges against current Google Ads auction data
- [ ] Consider adding quarterly update schedule to re-pull keyword data
- [ ] Note: Current data sourced from Google Keyword Planner, Ahrefs, and Semrush aggregates (Feb 2026)

---

## 🟣 Citation Cleanup Service — Operational Setup

- [ ] Define pricing for one-time citation cleanup service
- [ ] Create service agreement / contract template for citation cleanup clients
- [ ] Build process checklist for citation cleanup fulfillment (claim listings, fix NAP, submit to aggregators)
- [ ] Set up GHL pipeline stage for citation cleanup clients
- [ ] Create follow-up email: 90-day citation propagation audit report

---

## Quick Reference: Environment Variables

Your `.env.local` should contain:

```
GHL_API_KEY=pit-6f4303d3-28a7-49be-ac57-1cdd2e9b76a9
GHL_LOCATION_ID=rU5VfOC451ZI6SPNYmAu
GHL_CALENDAR_ID=W1dbJlvrGJ63xPRg9pZV
NEXT_PUBLIC_GA_MEASUREMENT_ID=   # ← Add your GA4 measurement ID here
NEXT_PUBLIC_CLARITY_ID=          # ← Add your Clarity project ID here (optional)
GOOGLE_PLACES_API_KEY=           # ← Required for Review Link Generator + Citation Checker GBP search
```

### How to get your Google Places API key:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use existing)
3. Enable the **Places API (New)** 
4. Go to Credentials → Create Credentials → API Key
5. Restrict the key to Places API only (recommended)
6. Add the key to `.env.local` as `GOOGLE_PLACES_API_KEY`
7. Redeploy — the Review Link Generator will auto-detect the key
8. Budget: ~$17 per 1,000 searches (at typical usage ~$2-5/month)

---

*This document is auto-maintained. Check items off as you complete them.*
