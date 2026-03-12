# GHL Automations Reference — Only Plumbing Sites

Complete reference for all Go High Level automations. Use this doc when building or debugging workflows in the GHL dashboard.

---

## Data Flow

```
User fills prequal form on /call
  → API creates/updates contact in GHL with ALL data + custom fields + tags
  → Tags applied: website-lead, book-form, qualified OR disqualified
  → Pipeline opportunity created (qualified leads only)
  → If qualified → calendar shown → user books (or doesn't)
  → If disqualified → rejection page shown
```

**Key**: The contact is created BEFORE the calendar loads. Even if they never book, all data is saved.

### Tag Cheat Sheet
| Tag | Meaning |
|-----|---------|
| `book-form` | Filled out the prequal form |
| `qualified` | Passed qualification logic |
| `disqualified` | Failed qualification (budget too low) |
| `no-budget` | Specifically flagged as no budget |
| `call-booked` | Actually booked on the calendar (added by Call Booked automation) |
| `cold-call-lead` | Source was "Someone called me" |
| `referral` | Source was "Referral from a friend" |
| `website-lead` | Came through the website |
| `contact-form` | Used the contact form |
| `newsletter` | Newsletter signup |

---

## Merge Tag Reference

Use these in GHL automation email/SMS templates.

### Standard Contact Fields
| Data | Merge Tag |
|------|-----------|
| First name | `{{contact.first_name}}` |
| Last name | `{{contact.last_name}}` |
| Full name | `{{contact.name}}` |
| Company | `{{contact.company_name}}` |
| Phone | `{{contact.phone}}` |
| Email | `{{contact.email}}` |
| Contact ID | `{{contact.id}}` |

### Custom Fields
| Data | Merge Tag |
|------|-----------|
| Website | `{{contact.company_website}}` |
| Service Area | `{{contact.service_area}}` |
| Truck Count | `{{contact.truck_count}}` |
| Annual Revenue | `{{contact.annual_revenue}}` |
| Marketing Spend | `{{contact.current_marketing_spend}}` |
| Willing to Invest | `{{contact.willing_to_invest}}` |
| Biggest Challenge | `{{contact.biggest_challenge}}` |
| Lead Source | `{{contact.lead_source}}` |
| Pre-Qual Score | `{{contact.pre_qual_score}}` |
| Contact Message | `{{contact.contact_message}}` |
| Referrer Name | `{{contact.referrer_name}}` |
| Referrer Email | `{{contact.referrer_email}}` |
| Referral Notes | `{{contact.referral_notes}}` |

### Appointment Fields (only available in appointment-triggered automations)
| Data | Merge Tag |
|------|-----------|
| Appointment date | `{{appointment.start_date}}` |
| Appointment time | `{{appointment.start_time}}` |
| Meeting link | `{{appointment.meeting_location}}` |
| Calendar name | `{{appointment.calendar_name}}` |

---

## Automation 1: "Call Booked"

**Status**: Exists — needs minor fix on internal email

### Trigger
- Type: Appointment Status
- Filter: Event Type = Normal, Status = confirmed
- Calendar: Free Strategy Session - Only Plumbing Sites

### Steps

**Step 1 — Send Email To Contact**
- From Name: Ryan Pietrzak
- From Email: ryan@onlyplumbingsites.com
- Subject: Your Free Strategy Call is Confirmed ✅
- Body:
```
Hey {{contact.first_name}},

Your strategy call with Ryan is confirmed for:
📅 {{appointment.start_date}} at {{appointment.start_time}}

Here's what will happen on the call:
1. Ryan will pull up your Google rankings LIVE and show you where you stand
2. He'll review your website and compare it to your top competitors
3. You'll get 3 specific action items you can implement immediately

🔗 Zoom Link: {{appointment.meeting_location}}

To make the most of your 45 minutes, have these ready:
• Your website URL (if you have one)
• The cities/areas you serve
• Your biggest marketing frustration

Need to reschedule? No problem: https://onlyplumbingsites.com/book

Talk soon,
Ryan Pietrzak
Licensed Plumber & Founder, Only Plumbing Sites
```

**Step 2 — Send SMS To Contact**
```
Hey {{contact.first_name}}, our strategy call is confirmed for {{appointment.start_date}} {{appointment.start_time}}. Check your email for the Google Meet link. Talk soon! - Ryan, Only Plumbing Sites
```

**Step 3 — Add Contact Tag**
- Tag: `call-booked`

**Step 4 — Update Opportunity**
- Pipeline: OnlyPlumbingSites.com
- Stage: Call Booked

**Step 5 — Internal Notification → SMS to Ryan**
```
📅 Call booked: {{contact.name}} — {{contact.company_name}} — {{appointment.start_date}} {{appointment.start_time}}
```

**Step 6 — Internal Notification → Email to Ryan**
- ⚠️ **FIX**: Change From Name from "Alex (Booked Call)" → "Only Plumbing Sites"
- ⚠️ **FIX**: Change From Email from alex@faceless.media → ryan@onlyplumbingsites.com
- To: Ryan Pietrzak
- Subject: Free Booking Call Has Been Booked
- Body:
```
📅 Call booked: {{contact.name}} — {{contact.company_name}} — {{appointment.start_date}} {{appointment.start_time}}
```

---

## Automation 2: "New Lead Notification"

**Status**: Exists — needs minor fix on internal email

### Trigger
- Type: Contact Tag
- Filter: Tag Added = `book-form`

### Steps

**Step 1 — Internal Notification → SMS to Ryan**
```
🔔 New lead: {{contact.name}} from {{contact.company_name}} — Willing to invest: {{contact.willing_to_invest}} — {{contact.phone}}
```

**Step 2 — Internal Notification → Email to Ryan**
- ⚠️ **FIX**: Change From Name from "Booked Appointment" → "New Lead Alert"
- ⚠️ **FIX**: Change From Email from ryan@faceless.media → ryan@onlyplumbingsites.com
- ⚠️ **FIX**: Remove CC to alex@faceless.media (or keep if Alex needs notifications)
- ⚠️ **FIX**: Change Subject from "New Appointment Booked" → "New Pre-Qual Lead Submitted"
- To: Ryan Pietrzak
- Body:
```
New Lead: {{contact.name}} — {{contact.company_name}}

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

---

## Automation 3: "Disqualified Lead"

**Status**: Exists — verify trigger and steps

### Trigger
- Type: Contact Tag
- Filter: Tag Added = `disqualified`

### Expected behavior
Send a softer follow-up or internal notification when a lead doesn't qualify.

---

## Automation 4: "Qualified But Didn't Book" ← NEW

**Status**: Needs to be created in GHL

### Purpose
Catches qualified leads who completed the prequal form but never booked a calendar slot.

### Trigger
- Type: Contact Tag
- Filter: Tag Added = `qualified`

### Steps

**Step 1 — Wait**
- Duration: 30 minutes

**Step 2 — If/Else Condition**
- Condition: Contact has tag `call-booked`
- **YES branch** → End (they booked, nothing to do)
- **NO branch** → Continue:

**Step 3 — Send SMS to Contact**
```
Hey {{contact.first_name}}, you qualified for a free strategy call with Ryan but didn't pick a time yet. Slots fill up fast — grab yours here: https://onlyplumbingsites.com/book
```

**Step 4 — Send Email to Contact**
- From Name: Ryan Pietrzak
- From Email: ryan@onlyplumbingsites.com
- Subject: You're Qualified — Pick Your Time, {{contact.first_name}}
- Body:
```
Hey {{contact.first_name}},

You just completed the pre-qualification form on OnlyPlumbingSites.com and you're a great fit for a free strategy call.

But it looks like you didn't pick a time yet.

I'd love to pull up your Google rankings live, review your website vs. your competitors, and give you 3 action items you can use right away.

It's free. No pitch. Just value.

👉 Pick your time: https://onlyplumbingsites.com/book

Talk soon,
Ryan Pietrzak
Licensed Plumber & Founder, Only Plumbing Sites
```

**Step 5 — Wait**
- Duration: 24 hours

**Step 6 — If/Else Condition**
- Condition: Contact has tag `call-booked`
- **YES branch** → End
- **NO branch** → Continue:

**Step 7 — Send SMS to Contact (final nudge)**
```
{{contact.first_name}}, just checking in — still have a couple strategy call slots open this week. Want me to review your plumbing marketing for free? Book here: https://onlyplumbingsites.com/book — Ryan
```

**Step 8 — Internal Notification → SMS to Ryan**
```
⚠️ Qualified lead {{contact.name}} ({{contact.company_name}}) hasn't booked after 24h. Phone: {{contact.phone}} Email: {{contact.email}}
```

---

## Automation 5: "Appointment Reminders" ← NEW

**Status**: Needs to be created in GHL

### Purpose
Send reminders at 24 hours, 1 hour, and 15 minutes before the appointment to both the client and Ryan.

### Trigger
- Type: Appointment Status
- Filter: Event Type = Normal, Status = confirmed
- Calendar: Free Strategy Session - Only Plumbing Sites

### Steps

**Step 1 — Wait**
- Type: Wait until event start time
- Before: 24 hours

**Step 2 — Send SMS to Contact (24h reminder)**
```
Hey {{contact.first_name}}, reminder: your strategy call with Ryan is tomorrow at {{appointment.start_time}}. Zoom link: {{appointment.meeting_location}} — Talk soon!
```

**Step 3 — Send Email to Contact (24h reminder)**
- From Name: Ryan Pietrzak
- From Email: ryan@onlyplumbingsites.com
- Subject: Tomorrow: Your Free Strategy Call ✅
- Body:
```
Hey {{contact.first_name}},

Quick reminder — your strategy call with Ryan is tomorrow!

📅 {{appointment.start_date}} at {{appointment.start_time}}
🔗 {{appointment.meeting_location}}

Have these ready:
• Your website URL
• The cities/areas you serve
• Your biggest marketing frustration

Need to reschedule? https://onlyplumbingsites.com/book

See you tomorrow,
Ryan Pietrzak
```

**Step 4 — Internal SMS to Ryan (24h)**
```
📅 Tomorrow: {{contact.name}} — {{contact.company_name}} at {{appointment.start_time}}
```

**Step 5 — Wait**
- Type: Wait until event start time
- Before: 1 hour

**Step 6 — Send SMS to Contact (1h reminder)**
```
{{contact.first_name}}, your strategy call starts in 1 hour! Zoom: {{appointment.meeting_location}}
```

**Step 7 — Internal SMS to Ryan (1h)**
```
⏰ 1 hour: {{contact.name}} call at {{appointment.start_time}}
```

**Step 8 — Wait**
- Type: Wait until event start time
- Before: 15 minutes

**Step 9 — Send SMS to Contact (15min reminder)**
```
Starting in 15 min! Click to join: {{appointment.meeting_location}}
```

**Step 10 — Internal SMS to Ryan (15min)**
```
🔔 15 min: {{contact.name}} — join now: {{appointment.meeting_location}}
```

---

## Automation 6: "No-Show Follow-Up"

**Status**: Exists — verify working

### Expected Trigger
- Appointment Status → no-show (or missed)

### Expected behavior
Follow up with the contact to reschedule.

---

## Automation 7: "Post-Call Nurture"

**Status**: Exists — verify working

### Expected behavior
After a call is completed, nurture the lead with follow-up content.

---

## GHL Environment Reference

| Key | Value |
|-----|-------|
| Location ID | `rU5VfOC451ZI6SPNYmAu` |
| Calendar ID | `W1dbJlvrGJ63xPRg9pZV` |
| Pipeline ID | `Sz4ygw9yiobnhZhXeBpc` |
| Calendar Name | Free Strategy Session - Only Plumbing Sites |
| Pipeline Name | OnlyPlumbingSites.com |
| Book URL | https://onlyplumbingsites.com/book |
