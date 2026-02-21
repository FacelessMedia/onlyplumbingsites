# GoHighLevel Setup Guide — Only Plumbing Sites

## What's Already Done (via API)

### Calendar Created
- **Name:** Free Strategy Session - Only Plumbing Sites
- **Calendar ID:** `W1dbJlvrGJ63xPRg9pZV`
- **Duration:** 30 minutes
- **Buffer:** 15 minutes between appointments
- **Max per day:** 8 appointments
- **Booking window:** 1 hour to 30 days out
- **Assigned to:** Ryan Pietrzak
- **Meeting location:** Zoom (link provided in confirmation email)
- **Availability:**
  - Monday–Friday: 8:00 AM – 5:00 PM
  - Saturday: 10:00 AM – 5:00 PM
  - Sunday: Closed
- **Widget URL:** `https://api.leadconnectorhq.com/widget/booking/W1dbJlvrGJ63xPRg9pZV`
- **Embedded on:** `/book` page via iframe

### To Verify in GHL Dashboard
1. Go to **Calendars** → find "Free Strategy Session - Only Plumbing Sites"
2. Verify the open hours look correct for your timezone
3. Connect your Google Calendar so it checks for conflicts
4. Set up a Zoom integration so meeting links auto-generate

---

## Manual Setup Required

### 1. Create the Sales Pipeline
The API token doesn't have pipeline creation scope. Create manually:

1. Go to **Opportunities** → **Pipelines** → **+ Create Pipeline**
2. Name: **Only Plumbing Sites - Sales Pipeline**
3. Add these stages (in order):

| Stage | Purpose |
|-------|---------|
| **New Lead** | Form submissions, audit requests, book downloads |
| **Qualified** | Reviewed and confirmed as a fit (1-10 trucks, wants growth) |
| **Strategy Call Booked** | Calendar appointment confirmed |
| **Call Completed** | Had the strategy call |
| **Proposal Sent** | Custom proposal/plan delivered |
| **Won - Onboarding** | Signed and payment received |
| **Active Client** | Ongoing monthly client |
| **Lost** | Did not close (add loss reason) |

4. After creating, copy the **Pipeline ID** and update `.env.local`:
   ```
   GHL_PIPELINE_ID=<paste-id-here>
   ```

### 2. Calendar Confirmation Email
1. Go to **Calendars** → "Free Strategy Session" → **Notifications**
2. Set up confirmation email:
   - Subject: "Your Free Strategy Session is Confirmed!"
   - Body should include:
     - Date/time of appointment
     - Zoom link (auto-generated if Zoom is connected)
     - "Before our call, we'll research your market and competitors"
     - "Here's what to have ready:" list (website URL, service areas, revenue range, biggest challenge)
     - Reschedule/cancel links

### 3. Appointment Reminder Sequence
Create an automation workflow:

1. Go to **Automation** → **+ Create Workflow**
2. Name: "Strategy Session Reminders"
3. Trigger: **Appointment Status** → When status is "confirmed"
4. Actions:
   - **Wait 0 min** → Send SMS: "Hey {{contact.first_name}}! Your free strategy session with Ryan is confirmed for {{appointment.start_time}}. We'll research your market before the call. Talk soon!"
   - **Wait until 24 hours before appointment** → Send Email: "Your Strategy Session is Tomorrow" with prep checklist
   - **Wait until 1 hour before** → Send SMS: "Reminder: Your strategy session with Ryan starts in 1 hour. Here's your Zoom link: {{appointment.meeting_location}}"
   - **Wait until 15 min before** → Send SMS: "Starting in 15 minutes! {{appointment.meeting_location}}"

### 4. No-Show Sequence
1. Go to **Automation** → **+ Create Workflow**
2. Name: "Strategy Session No-Show Follow-up"
3. Trigger: **Appointment Status** → When status is "no_show"
4. Actions:
   - **Wait 30 min** → Send SMS: "Hey {{contact.first_name}}, looks like we missed each other! No worries — want to reschedule? {{appointment.reschedule_link}}"
   - **Wait 1 day** → Send Email: "We Had Your Growth Plan Ready" — include a teaser of what you found in their market research
   - **Wait 3 days** → Send SMS: "Last chance to grab your free strategy session: {{appointment.reschedule_link}}"

### 5. Post-Call Follow-up (If No Close)
1. Go to **Automation** → **+ Create Workflow**
2. Name: "Post Strategy Call Nurture"
3. Trigger: **Pipeline Stage Change** → Stage = "Call Completed" (manually triggered after call)
4. Actions:
   - **Day 0** → Send Email: Recap of what was discussed + custom action plan PDF
   - **Day 3** → Send Email: Case study relevant to their situation
   - **Day 7** → Send Email: "Any questions about the plan we discussed?"
   - **Day 14** → Send Email: Final follow-up with urgency ("We're taking on 3 new clients this month")

### 6. Long-Term Nurture (Not Ready Yet)
1. Go to **Automation** → **+ Create Workflow**
2. Name: "Long-Term Plumber Nurture"
3. Trigger: **Pipeline Stage Change** → Stage = "Lost" with reason "Not ready yet"
4. Actions:
   - **Monthly email** for 12 months with one useful plumbing marketing tip + soft CTA to rebook strategy session

### 7. Missed Call Text-Back
1. Go to **Automation** → **+ Create Workflow**
2. Name: "Missed Call Text-Back"
3. Trigger: **Call Status** → Missed call
4. Actions:
   - **Wait 1 min** → Send SMS: "Sorry we missed your call! This is Ryan from Only Plumbing Sites. How can I help you with your plumbing business marketing?"

### 8. Review Request (After Client Work)
1. Go to **Automation** → **+ Create Workflow**
2. Name: "Google Review Request"
3. Trigger: **Pipeline Stage Change** → Stage = "Active Client" (after 30 days)
4. Actions:
   - Send Email + SMS requesting Google review with direct review link

---

## Zoom Integration
1. Go to **Settings** → **Integrations** → **Zoom**
2. Connect your Zoom account
3. Go back to Calendar settings and enable "Auto-create Zoom meeting"

## Google Calendar Sync
1. Go to **Settings** → **Integrations** → **Google**
2. Connect Ryan's Google account
3. Enable two-way calendar sync to prevent double-booking

---

## Environment Variables Reference
```
GHL_API_KEY=pit-xxxxx          # Private Integration Token (v2 API)
GHL_LOCATION_ID=rU5VfOC451ZI6SPNYmAu
GHL_CALENDAR_ID=W1dbJlvrGJ63xPRg9pZV
GHL_PIPELINE_ID=               # Set after manual pipeline creation
GHL_BASE_URL=https://services.leadconnectorhq.com  # v2 API base
```
