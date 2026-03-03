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

### A. Create Your User Profile ✅ DONE
- [x] Log into GHL → Settings → My Staff → Add/Edit yourself
- [x] Name: Ryan Pietrzak
- [x] Email: ryan@faceless.media
- [x] Role: Admin
- [x] Profile photo: Added

### B. Set Your Availability ✅ DONE
- [x] Calendar configured (ID: `W1dbJlvrGJ63xPRg9pZV`)
- [x] Duration, buffer, availability hours set
- [x] Assigned to Ryan Pietrzak
- [x] Google Calendar connected for conflict checking
- [x] Meeting location: Google Meet (auto-generated via Google Calendar connection)

### C. Create the Sales Pipeline ✅ DONE
- [x] Pipeline created: **OnlyPlumbingSites.com/call**
- [x] Pipeline ID: `Sz4ygw9yiobnhZhXeBpc` (added to `.env.local`)
- [x] Stages created:

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

### D. Create Custom Fields in GHL ✅ DONE (Created via API)
All 10 custom fields created automatically:

| Field Name | GHL Key | Type |
|-----------|---------|------|
| Company Website | `contact.company_website` | Text |
| Service Area | `contact.service_area` | Text |
| Truck Count | `contact.truck_count` | Text |
| Annual Revenue | `contact.annual_revenue` | Text |
| Current Marketing Spend | `contact.current_marketing_spend` | Text |
| Willing To Invest | `contact.willing_to_invest` | Text |
| Biggest Challenge | `contact.biggest_challenge` | Large Text |
| Lead Source | `contact.lead_source` | Text |
| Caller Name | `contact.caller_name` | Text |
| Pre-Qual Score | `contact.prequal_score` | Number |

### E. Create Tags ✅ DONE (Created via API)
All 15 tags created automatically:

- [x] `website-lead` — came from the website
- [x] `cold-call-lead` — came from outbound calling
- [x] `referral` — came from referral program
- [x] `qualified` — passed pre-qualification
- [x] `disqualified` — didn't meet criteria
- [x] `call-booked` — has a strategy call scheduled
- [x] `call-completed` — strategy call happened
- [x] `proposal-sent` — received a proposal
- [x] `won` — became a client
- [x] `lost` — didn't close
- [x] `no-budget` — wants to grow but has no budget
- [x] `not-ready` — not interested right now
- [x] `follow-up-30` — follow up in 30 days
- [x] `follow-up-90` — follow up in 90 days
- [x] `book-form` — submitted the pre-qualification booking form

---

## 2. Website Booking Flow

The website now has a **multi-step qualification form** that gates access to the calendar.

### Flow:
```
User lands on /call
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

The link to send: **https://onlyplumbingsites.com/call**

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

### Automation 1: New Website Lead → Notify Ryan ⬜ BUILD THIS
- **Trigger:** Contact tag added = `book-form`
- **Action 1:** Internal Notification → Send SMS to Ryan's phone
  - Message: `🔔 New lead: {{contact.name}} from {{contact.company_name}} — Willing to invest: {{contact.willing_to_invest}} — {{contact.phone}}`
- **Action 2:** Internal Notification → Send Email to ryan@faceless.media
  - Subject: `New Lead: {{contact.name}} — {{contact.company_name}}`
  - Body:
```
New pre-qualification form submitted:

Name: {{contact.name}}
Company: {{contact.company_name}}
Phone: {{contact.phone}}
Email: {{contact.email}}
Website: {{contact.company_website}}
Service Area: {{contact.service_area}}
Trucks: {{contact.truck_count}}
Revenue: {{contact.annual_revenue}}
Current Spend: {{contact.current_marketing_spend}}
Willing to Invest: {{contact.willing_to_invest}}
Biggest Challenge: {{contact.biggest_challenge}}
Source: {{contact.lead_source}}

Qualification: Check tags (qualified or disqualified)
View in GHL: https://app.gohighlevel.com/v2/location/rU5VfOC451ZI6SPNYmAu/contacts/{{contact.id}}
```

### Automation 2: Call Booked → Confirmation ⬜ BUILD THIS
- **Trigger:** Appointment Status
  - Workflow Trigger Name: `Call Booked`
  - Filter 1: Event Type → `Normal`
  - Filter 2 (click + Add filters): Appointment status is → `confirmed`
  - Filter 3 (click + Add filters): In calendar → `Free Strategy Session - Only Plumbing Sites`
- **Action 1:** Send Email to contact
  - Subject: `Your Free Strategy Call is Confirmed ✅`
  - Body:
```
Hey {{contact.first_name}},

Your strategy call with Ryan is confirmed for:
📅 {{appointment.start_date}} at {{appointment.start_time}}

Here's what will happen on the call:
1. Ryan will pull up your Google rankings LIVE and show you where you stand
2. He'll review your website and compare it to your top competitors
3. You'll get 3 specific action items you can implement immediately

🔗 Google Meet Link: {{appointment.meeting_location}}

To make the most of your 45 minutes, have these ready:
• Your website URL (if you have one)
• The cities/areas you serve
• Your biggest marketing frustration

Need to reschedule? No problem: https://onlyplumbingsites.com/call

Talk soon,
Ryan Pietrzak
Licensed Plumber & Founder, Only Plumbing Sites
```
- **Action 2:** Send SMS to contact
  - Message: `Hey {{contact.first_name}}, your strategy call with Ryan is confirmed for {{appointment.start_date}} at {{appointment.start_time}}. Check your email for the Zoom link and prep tips. Talk soon! - Only Plumbing Sites`
- **Action 3:** Add Contact Tag
  - Action Name: `Add call-booked tag`
  - Tag: `call-booked`
- **Action 4:** Update Opportunity (NOT the deprecated "Create Or Update Opportunity")
  - Action Name: `Move to Call Booked`
  - Leave "Allow opportunity to move to any previous stage in pipeline" toggle **OFF**
  - Leave "Duplicate opportunity" as **Disabled**
  - Click **+ Add field** → select **Pipeline** → choose `OnlyPlumbingSites.com/call` **(must be first!)**
  - Click **+ Add field** → select **Pipeline Stage** → choose `Call Booked` **(only works after Pipeline is set)**
  - Save Action
- **Action 5:** Internal Notification → SMS to Ryan (Particular User → Ryan Pietrzak)
  - Message: `📅 Call booked: {{contact.name}} — {{contact.company_name}} — {{appointment.start_date}} {{appointment.start_time}}`

### Automation 3: Appointment Reminders ✅ USE CALENDAR SETTINGS (not a workflow)
**Do NOT build this as a workflow.** Use the calendar's built-in notification settings instead — they're more reliable and simpler.

1. Go to **Calendars** → **Free Strategy Session - Only Plumbing Sites** → **Notifications** tab
2. Set up these reminders:

**24 hours before → Email:**
  - Subject: `Reminder: Your Strategy Call is Tomorrow`
  - Body:
```
Hey {{contact.first_name}},

Just a reminder — your free strategy call with Ryan is tomorrow:
📅 {{appointment.start_date}} at {{appointment.start_time}}
🔗 Google Meet: {{appointment.meeting_location}}

Have your website URL and service areas ready. Ryan will already have researched your market before the call.

See you tomorrow!
Ryan Pietrzak
```

**1 hour before → SMS:**
  - Message: `Hey {{contact.first_name}}, your strategy call starts in 1 hour. Google Meet link: {{appointment.meeting_location}}`

**15 minutes before → SMS:**
  - Message: `Starting in 15 min! Join here: {{appointment.meeting_location}} — Ryan`

3. If you already created the "Appointment Reminders" workflow, delete it or leave it as Draft (don't publish).

### Automation 4: No-Show Follow-Up ⬜ BUILD THIS
- **Trigger:** Appointment Status
  - Workflow Trigger Name: `No-Show Follow-Up`
  - Filter 1: Event Type → `Normal`
  - Filter 2 (click + Add filters): Appointment status is → `No-show`
  - Filter 3 (click + Add filters): In calendar → `Free Strategy Session - Only Plumbing Sites`
- **NOTE:** You mark a contact as "No-show" manually in GHL after waiting 10 min past the appointment time. That triggers this workflow.

**Wait 30 min → SMS:**
  - Message: `Hey {{contact.first_name}}, looks like we missed each other for our strategy call. No worries! Want to reschedule? Pick a new time here: https://onlyplumbingsites.com/call`

**Wait 1 day → Email:**
  - Subject: `We Missed You — Want to Reschedule?`
  - Body:
```
Hey {{contact.first_name}},

We had a strategy call scheduled but it looks like we missed each other. Totally understand — things come up.

I'd still love to show you where your plumbing business stands online. The call is free and only takes 45 minutes.

Reschedule here: https://onlyplumbingsites.com/call

If you're no longer interested, no hard feelings at all.

Ryan Pietrzak
Only Plumbing Sites
```

**Wait 3 days → SMS (final):**
  - Message: `Hey {{contact.first_name}}, last message from me — still happy to do a free strategy call if you're interested. Book here: https://onlyplumbingsites.com/call — Ryan`

**Wait 7 days → If no reschedule:**
  - Add tag `follow-up-30`
  - Move to Lost stage

### Automation 5: Post-Call Nurture ⬜ BUILD THIS
- **Trigger:** Tag added = `call-completed` AND tag `won` is NOT present

**Wait 1 day → Email:**
  - Subject: `Great Talking With You, {{contact.first_name}}`
  - Body:
```
Hey {{contact.first_name}},

Great talking with you today about {{contact.company_name}}. Here's a quick recap of what we covered:

• Where your website currently ranks on Google
• Your top competitors in your service area
• 3 things you can do right now to start getting more calls

If you're ready to move forward, just reply to this email or book a follow-up: https://onlyplumbingsites.com/call

No rush — I'm here when you're ready.

Ryan Pietrzak
Only Plumbing Sites
```

**Wait 3 days → Email:**
  - Subject: `How [Similar Plumber] Went From 20 to 150+ Calls/Month`
  - Body: A case study email showing results from a similar plumbing company.

**Wait 7 days → Email:**
  - Subject: `The Cost of Waiting`
  - Body:
```
Hey {{contact.first_name}},

I talk to a lot of plumbing companies and the #1 regret I hear is: "I wish I'd started this sooner."

Every month without a proper online presence is 20-50 calls going to your competitors.

At your average ticket of $300-500, that's $6,000-$25,000/month walking away.

I don't say this to pressure you — I say it because it's true. When you're ready, I'm here: https://onlyplumbingsites.com/call

Ryan
```

**Wait 14 days → Email (final):**
  - Subject: `Checking In`
  - Body: Short check-in. "Hey {{contact.first_name}}, just checking in. Still thinking about growing {{contact.company_name}} online? Happy to chat anytime. — Ryan"

### Automation 6: Disqualified Lead → Long-Term Nurture ⬜ BUILD THIS
- **Trigger:** Tag added = `disqualified`

**Immediately → Email:**
  - Subject: `Thanks for Your Interest, {{contact.first_name}}`
  - Body:
```
Hey {{contact.first_name}},

Thanks for taking the time to fill out our form. We're currently focused on working with plumbing companies that are ready to invest in online growth, but that doesn't mean we can't help.

Here are some free resources you can use right now:

🔧 Website Grader — See how your site stacks up: https://onlyplumbingsites.com/website-grader
📋 Citation Audit — Check your directory listings: https://onlyplumbingsites.com/tools/citation-checker
📖 Free Book — Marketing guide for plumbers: https://onlyplumbingsites.com/book-download
🔑 Keyword Database — 150+ keywords to target: https://onlyplumbingsites.com/tools/plumbing-keywords

When you're ready to invest in growth, we'd love to chat.

Ryan Pietrzak
Only Plumbing Sites
```

**Wait 90 days → Email:**
  - Subject: `Has Anything Changed, {{contact.first_name}}?`
  - Body: "It's been a few months since we last connected. Has anything changed with {{contact.company_name}}? If you're ready to talk about getting more calls from Google, I'm here: https://onlyplumbingsites.com/call"

### Automation 7: Cold Call Lead → Caller Logged ⬜ BUILD THIS
- **Trigger:** Tag added = `cold-call-lead`
- **Action 1:** Move to "Contacted" stage in pipeline
- **Action 2:** Internal notification → SMS to Ryan
  - Message: `📞 New cold call lead: {{contact.name}} — {{contact.company_name}} — {{contact.phone}}`

---

## 5. Caller Operations

### What Your 3 Callers Need From You:

1. **GHL Access** — Create user accounts for each caller (limited role)
   - Go to Settings → My Staff → + Add User
   - Role: "User" (not admin) — limit access to Contacts + Opportunities only
   - Each caller gets their own login

2. **Call Lists** — See section 6 below

3. **A Script** — See section 7 below

4. **The Booking Link** — `https://onlyplumbingsites.com/call`

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
> **Send them:** `https://onlyplumbingsites.com/call`

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
| **Booking URL (send to plumbers)** | `https://onlyplumbingsites.com/call` |
| **GHL Login** | `https://app.gohighlevel.com` |
| **Calendar ID** | `W1dbJlvrGJ63xPRg9pZV` |
| **Location ID** | `rU5VfOC451ZI6SPNYmAu` |
| **Pipeline Name** | `OnlyPlumbingSites.com/call` |
| **Pipeline ID** | `Sz4ygw9yiobnhZhXeBpc` |

---

*This playbook should be reviewed and updated monthly as you learn what's working.*
