# GHL Sales Playbook — Only Plumbing Sites

> **Purpose:** Everything your 3 callers need + everything you need to set up in GHL to start booking calls.  
> **Created:** March 2, 2026  
> **Owner:** Ryan Pietrzak

---

## Table of Contents
1. [GHL Setup Checklist (Ryan)](#1-ghl-setup-checklist-ryan)
2. [Website Booking Flow](#2-website-booking-flow)
3. [Pipeline & Stages](#3-pipeline--stages)
4. [Automations to Build in GHL](#4-automations-to-build-in-ghl)
5. [Caller Operations](#5-caller-operations)
6. [Getting Your Call Lists](#6-getting-your-call-lists)
7. [Caller Scripts](#7-caller-scripts)
8. [Objection Handling](#8-objection-handling)
9. [Daily Workflow for Callers](#9-daily-workflow-for-callers)
10. [Compensation & Tracking](#10-compensation--tracking)

---

## 1. GHL Setup Checklist (Ryan)

Do these in order. Everything else depends on this being done first.

### A. Create Your User Profile
- [ ] Log into GHL → Settings → My Staff → Add/Edit yourself
- [ ] Name: Ryan Pietrzak
- [ ] Email: ryan@faceless.media (or whatever you want calendar invites sent to)
- [ ] Role: Admin
- [ ] Profile photo: Add your headshot (shows on calendar booking page)

### B. Set Your Availability
- [ ] Go to **Calendars** → Find "Free Strategy Session" (ID: `W1dbJlvrGJ63xPRg9pZV`)
- [ ] Or create a new calendar if starting fresh:
  - Name: **Free Strategy Call — Only Plumbing Sites**
  - Duration: **30 minutes**
  - Buffer between appointments: **15 minutes** (gives you time to prep)
  - Minimum scheduling notice: **2 hours** (so nobody books 5 minutes from now)
  - Maximum days in advance: **14 days**
  - Assigned team member: **Ryan Pietrzak**
- [ ] Set your availability hours:
  - **Monday–Friday:** 9:00 AM – 4:00 PM (Central)
  - **Saturday:** OFF (or 10 AM – 1 PM if you want)
  - **Sunday:** OFF
- [ ] Max appointments per day: **4-6** (leaves time for actual work)
- [ ] Connect Google Calendar for conflict checking (prevents double-booking)
- [ ] Connect Zoom for auto-generated meeting links

### C. Create the Sales Pipeline
- [ ] Go to **Opportunities** → **Pipelines** → **+ Create Pipeline**
- [ ] Name: **Plumbing Client Pipeline**
- [ ] Stages (in order):

| Stage | What It Means | Who Moves It |
|-------|---------------|--------------|
| **New Lead** | Just came in from website/form/caller. Not contacted yet. | Auto (from forms) |
| **Contacted** | Caller or Ryan has spoken to them or sent first outreach. | Caller |
| **Qualified** | Confirmed: has budget, wants growth, is a real plumbing company. | Caller / Ryan |
| **Call Booked** | Strategy call is scheduled on the calendar. | Auto (calendar booking) |
| **Call Completed** | Had the strategy call. | Ryan |
| **Proposal Sent** | Custom proposal/pricing sent. | Ryan |
| **Negotiation** | They're thinking about it, have questions, need follow-up. | Ryan |
| **Won** | Signed + first payment received. | Ryan |
| **Lost** | Didn't close. Add a loss reason. | Ryan |

- [ ] After creating, copy the Pipeline ID and add to `.env.local` as `GHL_PIPELINE_ID`

### D. Create Custom Fields in GHL
These fields capture data from the pre-qualification form:

- [ ] Go to **Settings** → **Custom Fields** → **+ Add Field**
- [ ] Create these fields:

| Field Name | Type | Purpose |
|-----------|------|---------|
| `company_website` | Text | Their website URL |
| `service_area` | Text | Cities/areas they serve |
| `truck_count` | Dropdown: 1, 2-5, 6-10, 10+ | Size of their operation |
| `annual_revenue` | Dropdown: <$250K, $250K-$500K, $500K-$1M, $1M-$3M, $3M+ | Revenue bracket |
| `current_marketing_spend` | Dropdown: $0, <$500/mo, $500-$1500/mo, $1500-$3000/mo, $3000+/mo | Current spend |
| `willing_to_invest` | Dropdown: <$500/mo, $500-$1500/mo, $1500-$3000/mo, $3000-$5000/mo, $5000+/mo | Budget willingness |
| `biggest_challenge` | Text Area | Their biggest marketing pain point |
| `lead_source` | Dropdown: Website Form, Cold Call, Referral, Google, Social Media | How they found us |
| `caller_name` | Text | Which caller brought them in |
| `pre_qual_score` | Number | Calculated qualification score |

### E. Create Tags
Tags help you segment and trigger automations:

- [ ] `website-lead` — came from the website
- [ ] `cold-call-lead` — came from outbound calling
- [ ] `referral` — came from referral program
- [ ] `qualified` — passed pre-qualification
- [ ] `disqualified` — didn't meet criteria
- [ ] `call-booked` — has a strategy call scheduled
- [ ] `call-completed` — strategy call happened
- [ ] `proposal-sent` — received a proposal
- [ ] `won` — became a client
- [ ] `lost` — didn't close
- [ ] `no-budget` — wants to grow but has no budget
- [ ] `not-ready` — not interested right now
- [ ] `follow-up-30` — follow up in 30 days
- [ ] `follow-up-90` — follow up in 90 days

---

## 2. Website Booking Flow

The website now has a **multi-step qualification form** that gates access to the calendar.

### Flow:
```
User lands on /book
  → Step 1: Contact Info (name, email, phone, company, website)
  → Step 2: Business Details (service area, trucks, revenue)
  → Step 3: Budget & Goals (current spend, willing to invest, biggest challenge)
  → Qualification Check:
      ✅ PASS (willing to invest $500+/mo) → Show calendar embed → Book a call
      ❌ FAIL (not willing to invest) → "We're at capacity" page with alternatives
```

### What Gets Sent to GHL:
- Contact created with all form data
- Tags applied: `website-lead`, `qualified` or `disqualified`
- Custom fields populated: website, trucks, revenue, spend, etc.
- If qualified → pipeline stage set to "Qualified"
- If disqualified → tagged `no-budget` or `not-ready`, NOT added to pipeline

### Qualification Criteria (built into the form):
- **Auto-qualify** if willing to invest $500+/mo
- **Auto-disqualify** if they select "$0" or "<$500/mo" AND current spend is "$0"
- This filters out tire-kickers while keeping anyone with real intent

### For Callers:
When a caller gets a plumber interested, they should say:
> "Great, I'm going to send you a link. It takes about 60 seconds to fill out — it just asks a few questions about your business so Ryan can do his research before your call. Once you fill it out, you'll pick a time on his calendar."

The link to send: **https://onlyplumbingsites.com/book**

---

## 3. Pipeline & Stages

### How Leads Move Through the Pipeline:

```
Cold Call / Website Visit / Referral
  ↓
[New Lead] — Auto-created when form submitted or caller logs in GHL
  ↓
[Contacted] — Caller has spoken to them (move manually)
  ↓
[Qualified] — Auto or manual: they meet budget criteria
  ↓
[Call Booked] — Auto: they booked on calendar
  ↓
[Call Completed] — Ryan marks after the strategy call
  ↓
[Proposal Sent] — Ryan sends proposal
  ↓
[Won] or [Lost]
```

---

## 4. Automations to Build in GHL

Build these in **Automations** → **+ Create Workflow**:

### Automation 1: New Website Lead → Notify Ryan
- **Trigger:** Contact tag added = `website-lead`
- **Action 1:** Send internal notification (email or SMS) to Ryan
  - Subject: "New Lead: {contact.firstName} {contact.lastName} — {contact.companyName}"
  - Body: Include all form data, qualification status, and link to contact in GHL
- **Action 2:** Wait 2 minutes → Send internal Slack/SMS to callers if you want them to follow up

### Automation 2: Call Booked → Confirmation + Prep
- **Trigger:** Calendar event created
- **Action 1:** Send email to the plumber:
  - Subject: "Your Strategy Call is Confirmed — {appointment.date}"
  - Body: What to expect, Zoom link, "Have your website URL ready"
- **Action 2:** Send SMS to the plumber:
  - "Hey {contact.firstName}, your strategy call with Ryan is confirmed for {appointment.date}. Check your email for details."
- **Action 3:** Move opportunity to "Call Booked" stage
- **Action 4:** Send internal email to Ryan with all contact data for prep

### Automation 3: Appointment Reminders
- **Trigger:** Calendar event approaching
- **Action 1:** 24 hours before → Email reminder
- **Action 2:** 1 hour before → SMS reminder
- **Action 3:** 15 minutes before → SMS: "Starting in 15 min. Zoom link: {zoom_link}"

### Automation 4: No-Show Follow-Up
- **Trigger:** Appointment status = no-show (mark manually in GHL after 10 min)
- **Action 1:** Wait 30 minutes → SMS: "Hey {firstName}, looks like we missed each other. Want to reschedule? {calendar_link}"
- **Action 2:** Wait 1 day → Email: "We had a strategy call scheduled..." with reschedule link
- **Action 3:** Wait 3 days → Final SMS with reschedule link
- **Action 4:** If no response → Tag `follow-up-30`, move to Lost

### Automation 5: Post-Call Nurture (didn't close immediately)
- **Trigger:** Tag added = `call-completed` AND NOT tagged `won`
- **Action 1:** Wait 1 day → Email: "Great talking with you. Here's a recap..."
- **Action 2:** Wait 3 days → Email: Case study of a similar plumbing company
- **Action 3:** Wait 7 days → Email: "Still thinking about it? Here's what plumbers who wait typically miss..."
- **Action 4:** Wait 14 days → Final offer or check-in

### Automation 6: Disqualified Lead → Long-Term Nurture
- **Trigger:** Tag added = `disqualified` or `no-budget`
- **Action 1:** Immediately → Email: "Thanks for your interest. We're focused on plumbers who are ready to invest in growth. In the meantime, here are free resources..."
- **Action 2:** Add to monthly newsletter list
- **Action 3:** Wait 90 days → Re-engagement email: "Has anything changed?"

### Automation 7: Cold Call Lead → Caller Logged
- **Trigger:** Tag added = `cold-call-lead`
- **Action 1:** Move to "Contacted" pipeline stage
- **Action 2:** Notify Ryan of new cold call lead

---

## 5. Caller Operations

### What Your 3 Callers Need From You:

1. **GHL Access** — Create user accounts for each caller (limited role)
   - Go to Settings → My Staff → + Add User
   - Role: "User" (not admin) — limit access to Contacts + Opportunities only
   - Each caller gets their own login

2. **Call Lists** — See section 6 below

3. **A Script** — See section 7 below

4. **The Booking Link** — `https://onlyplumbingsites.com/book`

5. **Training on GHL** — 15-minute walkthrough:
   - How to search for a contact
   - How to create a new contact (if calling cold)
   - How to update contact fields after a call
   - How to move contacts between pipeline stages
   - How to add notes to a contact
   - How to tag contacts (e.g., `interested`, `callback-requested`, `not-interested`)

6. **Daily Target** — Recommend 50-80 calls/day per caller. Expect:
   - ~30% pick up rate (15-25 conversations)
   - ~10% of conversations express interest (2-3 interested leads)
   - ~50% of interested leads actually book (1-2 bookings per day per caller)

### Caller Process:
```
1. Open GHL → Go to Contacts
2. Pick a contact from their assigned list (or call new numbers)
3. Make the call using their personal phone or a VoIP tool
4. Log the outcome:
   - Interested → Create/update contact, tag "interested", send booking link
   - Not interested → Tag "not-interested", add note
   - Callback → Tag "callback-requested", set follow-up task
   - No answer → Tag "no-answer", schedule retry in 2 days
   - Wrong number → Tag "bad-number"
5. Move to next contact
6. End of day: Report to Ryan with count of calls, conversations, bookings
```

---

## 6. Getting Your Call Lists

### Option A: Google Maps Scraping (Free, DIY)
1. Search Google Maps for "plumber in [city]" 
2. Use a Chrome extension like **Instant Data Scraper** or **Data Miner**
3. Export to CSV: business name, phone, website, city, state
4. Import into GHL as contacts with tag `cold-call-list`
5. Repeat for every major city you want to target
6. **Target:** Start with 500-1000 contacts per caller

### Option B: Yelp / HomeAdvisor Manual Collection
1. Search Yelp for plumbers in target cities
2. Note: Name, phone, website, city
3. Focus on businesses with outdated websites or no website at all
4. These are your best prospects — they clearly need help

### Option C: State Licensing Boards (High Quality)
1. Most states publish plumber license databases online
2. Search "[state] plumber license lookup" 
3. Export or manually collect licensed plumber contact info
4. These are verified, active plumbing businesses
5. **Best states to start:** TX, FL, CA, IL, OH, PA, GA, NC, AZ, CO

### Option D: Paid Data Providers ($)
- **Apollo.io** — $49/mo, good B2B data, filter by industry "Plumbing"
- **ZoomInfo** — Enterprise pricing but best data
- **D7 Lead Finder** — $49/mo, specifically for local businesses
- **Uplead** — $74/mo, B2B contact database
- **Lusha** — Free tier available, $29/mo for more
- **BrightLocal** — Can export lists from competitor analysis

### Option E: Your Own Website Traffic (Best Quality)
- Website Grader users who scored low → immediate outreach opportunity
- Growth Report requesters who haven't booked → warm leads
- Newsletter subscribers → already interested
- These are in GHL already with tags

### How to Assign Lists to Callers:
1. Import contacts into GHL
2. Tag them: `caller-list-1`, `caller-list-2`, `caller-list-3`
3. Each caller filters by their tag
4. No overlap = no duplicate calls

---

## 7. Caller Scripts

### Cold Call Script (Outbound):

> **Caller:** "Hi, is this [Name]? This is [Caller Name], I'm calling from Only Plumbing Sites. We work exclusively with plumbing companies on their online marketing — websites, Google rankings, getting more calls. I'm not trying to sell you anything right now, I just had a quick question.
>
> **[Pause — let them respond]**
>
> "When homeowners in [their city] search Google for a plumber, are you showing up in the top results?"
>
> **If YES:** "That's great. A lot of plumbing companies think they're ranking well but they're actually only showing up for their company name and not for things like 'plumber near me' or 'water heater repair [city].' Would you be open to a free 15-minute check where our founder — he's actually a licensed plumber himself — pulls up your rankings live and shows you exactly where you stand?"
>
> **If NO / NOT SURE:** "That's actually really common. Most plumbing companies are losing 20-30 calls a month just because their website isn't showing up for the right searches. Our founder Ryan is a licensed plumber who got into marketing — he does a free strategy call where he pulls up your Google rankings, your website, and your competitors and shows you exactly what's going on. Takes about 20 minutes. Would you be open to that?"
>
> **If they're interested:** "Great — I'm going to text you a link right now. It takes about 60 seconds to fill out a few questions about your business, and then you pick a time that works on Ryan's calendar. Sound good?"
>
> **Send them:** `https://onlyplumbingsites.com/book`

### Warm Call Script (Website leads who haven't booked):

> "Hi [Name], this is [Caller Name] from Only Plumbing Sites. I saw you [downloaded our book / requested a growth report / used our website grader] — I just wanted to check in and see if you had any questions. Ryan, our founder, does a free strategy call where he actually pulls up your website and rankings live — totally free, no obligation. Would that be helpful?"

### Objection Responses: See section 8.

---

## 8. Objection Handling

| Objection | Response |
|-----------|----------|
| **"I'm not interested"** | "Totally understand. Just so you know, Ryan does these calls for free — no pitch, no obligation. He literally pulls up your Google rankings and shows you what's happening. Even if you never work with us, you'll walk away knowing exactly where you stand online. Can I at least send you the link in case you change your mind?" |
| **"I already have a marketing company"** | "Got it — that's actually even better. A lot of plumbers we talk to have someone doing their marketing but they're not sure if they're getting their money's worth. Ryan can do a free second opinion — he'll show you what's working and what's not. No switching required, just an honest look. Would that be useful?" |
| **"I don't have the budget"** | "I hear you. The strategy call itself is completely free. And honestly, some of the stuff Ryan shows people are things they can do themselves for $0. It's worth 20 minutes just for the free intel. Want me to send you the link?" |
| **"How much does this cost?"** | "Great question — the strategy call is 100% free. If Ryan sees an opportunity where he can help, he'll let you know what that looks like, but there's absolutely no obligation. Most plumbers say the free call alone was worth it." |
| **"I get these calls all the time"** | "I totally get that, and I know it's annoying. Here's what makes us different — Ryan is actually a licensed plumber himself. He's not some agency guy reading a script. He's built 250+ plumbing websites because he understands the trade. That's why the call is free — he'd rather show you than tell you." |
| **"Send me an email instead"** | "Absolutely, I can do that. What's the best email? [Get email.] I'll send over some info and a link to book a call if you want to. No pressure at all." *Then send an email from GHL with booking link.* |
| **"Call me back later"** | "Sure thing. When's a better time? [Get time.] I'll put a reminder in and call you back then. Talk soon." *Set follow-up task in GHL.* |

---

## 9. Daily Workflow for Callers

### Morning (Start of Shift):
1. Log into GHL
2. Check for follow-up tasks due today
3. Check for callback requests
4. Make follow-up calls first (these are warmer)

### Calling Block (Main Work):
5. Work through assigned contact list
6. Make 50-80 calls
7. After each call, update contact in GHL:
   - Add call notes
   - Update tags
   - Set follow-up tasks if needed
   - If interested → send booking link via SMS from GHL or manually

### End of Day:
8. Report to Ryan (text or Slack):
   - Total calls made
   - Total conversations (someone picked up)
   - Total interested
   - Total bookings (sent to website)
   - Notable leads (anyone exciting)

### Sample Daily Report:
```
📊 Daily Report — [Caller Name] — March 2, 2026
Calls: 65
Conversations: 18
Interested: 4
Booking Links Sent: 3
Confirmed Bookings: 1
Notable: "ABC Plumbing in Houston — 8 trucks, no website, very interested. Booked for Thursday."
```

---

## 10. Compensation & Tracking

### Option A: Hourly + Bonus
- Base: $15-20/hr
- Bonus: $25-50 per booked call that shows up
- Bonus: $100-200 per closed deal (from their lead)

### Option B: Commission Only
- $50 per qualified booked call
- $200-500 per closed deal
- No base pay — purely performance

### Option C: Hybrid
- $12-15/hr base
- $25 per booked call
- $150 per closed deal

### Tracking:
- Each caller has a `caller_name` field on contacts they create
- Run GHL reports filtered by `caller_name` to see:
  - How many leads each caller generated
  - How many booked calls
  - How many closed deals
  - Conversion rate at each stage
- Review weekly with each caller

---

## Quick Reference

| Item | Value |
|------|-------|
| **Booking URL (send to plumbers)** | `https://onlyplumbingsites.com/book` |
| **GHL Login** | `https://app.gohighlevel.com` |
| **Calendar ID** | `W1dbJlvrGJ63xPRg9pZV` |
| **Location ID** | `rU5VfOC451ZI6SPNYmAu` |
| **Pipeline** | Create in GHL (see section 1C) |

---

*This playbook should be reviewed and updated monthly as you learn what's working.*
