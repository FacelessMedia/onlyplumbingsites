/**
 * Only Plumbing Sites — AI Chatbot Knowledge Base
 * 
 * This file contains all Q&A pairs for prefilling the chatbot.
 * Used as system context for the OpenAI assistant.
 * 
 * Categories:
 * 1. Company & Founder
 * 2. Services & Deliverables
 * 3. Pricing & Packages
 * 4. Process & Timeline
 * 5. Technical & Website Features
 * 6. SEO & Marketing
 * 7. Billing & Contracts
 * 8. Support & Communication
 * 9. Comparisons & Objections
 * 10. Industry-Specific (Plumbing)
 * 11. Getting Started
 * 12. Add-Ons & Extras
 */

export interface KnowledgeEntry {
  id: string;
  category: string;
  question: string;
  answer: string;
  keywords: string[];
}

export const SYSTEM_PROMPT = `You are the AI assistant for Only Plumbing Sites — a company that builds websites and marketing systems exclusively for plumbing businesses. You were created by Ryan Pietrzak, a licensed Illinois plumber since 2014 who has been in the trade since 2009 and has built 250+ plumbing websites.

Your role:
- Answer questions about our services, pricing, and process
- Help plumbing business owners understand how a professional website can generate more calls
- Qualify leads and encourage them to book a free strategy call or request a free website audit
- Be knowledgeable about plumbing industry marketing challenges
- Speak like a trade professional, not a generic marketer — direct, honest, no fluff

Tone: Professional but approachable. Think "plumber who knows digital marketing" not "agency salesperson." Be direct, use plain language, and relate to the trades.

Key CTAs to weave in naturally:
1. "Book a Free Strategy Call" → /book
2. "Get a Free Website Audit" → /audit
3. "View Our Pricing" → /pricing

Important facts:
- Company: Only Plumbing Sites (onlyplumbingsites.com)
- Founder: Ryan Pietrzak — Licensed IL plumber since 2014, in trade since 2009
- Experience: 250+ plumbing websites built
- Also co-owns ThePlumbingDirectory.com
- Location: Based in Illinois, serves plumbers nationwide
- Contact: hello@onlyplumbingsites.com
- CRM: Go High Level
- Payments: Stripe

Never discuss competitors by name negatively. Never guarantee specific rankings or call volumes. Always be honest about timelines and expectations.`;

export const knowledgeBase: KnowledgeEntry[] = [
  // ============================================
  // 1. COMPANY & FOUNDER
  // ============================================
  {
    id: "company-1",
    category: "Company & Founder",
    question: "What is Only Plumbing Sites?",
    answer: "Only Plumbing Sites is a web design and digital marketing company that works exclusively with plumbing businesses. We build high-converting websites, run local SEO campaigns, and manage social media — all specifically for plumbers. Our founder, Ryan Pietrzak, is a licensed Illinois plumber who's been in the trade since 2009 and has built over 250 plumbing websites.",
    keywords: ["about", "company", "what do you do", "who are you"]
  },
  {
    id: "company-2",
    category: "Company & Founder",
    question: "Who is Ryan Pietrzak?",
    answer: "Ryan Pietrzak is the founder of Only Plumbing Sites. He's been in the plumbing trade since 2009 and became a licensed Illinois plumber in 2014. He's built over 250 plumbing websites and also co-owns ThePlumbingDirectory.com. Ryan understands both plumbing systems AND marketing systems — which is why the websites he builds actually generate service calls, not just look pretty.",
    keywords: ["ryan", "founder", "owner", "who built this"]
  },
  {
    id: "company-3",
    category: "Company & Founder",
    question: "Why do you only work with plumbers?",
    answer: "Because plumbing is what we know. Ryan is a licensed plumber — he's crawled under houses, fixed burst pipes at 2 AM, and understands what a homeowner is thinking when they need a plumber. That knowledge goes directly into every website we build: where to put the emergency CTA, which services to highlight, how to structure service area pages. Generic web agencies don't have that insight. We stay focused on plumbing so every client gets specialized expertise, not a cookie-cutter template.",
    keywords: ["why only plumbing", "niche", "specialize", "just plumbers"]
  },
  {
    id: "company-4",
    category: "Company & Founder",
    question: "Where are you located?",
    answer: "We're based in Illinois, but we serve plumbing companies nationwide. Since everything we do is digital — website design, SEO, social media management — location doesn't matter. We've built sites for plumbers from coast to coast.",
    keywords: ["location", "where", "local", "serve", "area"]
  },
  {
    id: "company-5",
    category: "Company & Founder",
    question: "What is ThePlumbingDirectory.com?",
    answer: "ThePlumbingDirectory.com is an online directory for plumbing businesses, also co-owned by Ryan. It gives us unique insight into which plumbing companies are getting searched online and how their web presence stacks up. We use that data to inform the strategies we build for our clients.",
    keywords: ["directory", "plumbing directory", "theplumbingdirectory"]
  },
  {
    id: "company-6",
    category: "Company & Founder",
    question: "How many websites have you built?",
    answer: "Over 250 plumbing websites. That's not 250 websites for random businesses — that's 250 sites specifically for plumbing companies. We know exactly what works in this industry because we've tested, refined, and optimized across hundreds of plumbing businesses in different markets.",
    keywords: ["how many", "experience", "portfolio", "250"]
  },
  {
    id: "company-7",
    category: "Company & Founder",
    question: "How can I contact you?",
    answer: "You can reach us at hello@onlyplumbingsites.com, or you can book a free strategy call directly on our website at onlyplumbingsites.com/book. You can also request a free website audit at onlyplumbingsites.com/audit and we'll send you a personalized breakdown within 24 hours.",
    keywords: ["contact", "email", "phone", "reach", "talk"]
  },
  {
    id: "company-8",
    category: "Company & Founder",
    question: "Is Ryan actually a licensed plumber?",
    answer: "Yes — Ryan is a licensed Illinois plumber, licensed since 2014. He started working in the trade in 2009. This isn't a marketing angle — it's his actual background. That's why our websites are built differently than what a generic web agency would produce. We understand the trade from the inside.",
    keywords: ["licensed", "plumber", "real", "actually", "credentials"]
  },

  // ============================================
  // 2. SERVICES & DELIVERABLES
  // ============================================
  {
    id: "services-1",
    category: "Services & Deliverables",
    question: "What services do you offer?",
    answer: "We offer three core services, all exclusively for plumbing businesses:\n\n1. **Custom Plumbing Websites** — Mobile-first, conversion-optimized sites built to generate service calls, not just look nice.\n2. **Local SEO** — Google Business Profile optimization, service area pages, and monthly content creation to get you ranking in your local market.\n3. **SEO + Social Growth** — Daily Google Business Profile posts, daily Facebook posts, content creation, and review generation strategy to keep your business visible every single day.\n\nWe also offer add-ons like missed call text-back, review automation, CRM + lead follow-up systems, and AI chat assistants.",
    keywords: ["services", "offer", "what do you do", "help"]
  },
  {
    id: "services-2",
    category: "Services & Deliverables",
    question: "What's included in a website build?",
    answer: "Every plumbing website we build includes:\n\n- Custom design tailored to your business and brand\n- Mobile-first responsive design (over 70% of plumbing searches happen on phones)\n- Emergency CTA buttons (click-to-call, prominent phone number)\n- Service area pages optimized for your specific cities and neighborhoods\n- Individual service pages (drain cleaning, water heater repair, etc.)\n- Schema markup for rich search results\n- Google Business Profile optimization guidance\n- Contact forms that capture leads\n- Fast loading speeds (optimized images, clean code)\n- SSL certificate (security)\n- 30-day post-launch support\n\nFor our 12-month plan, you also get ongoing SEO content, monthly reports, and review integration.",
    keywords: ["included", "website", "features", "what do i get"]
  },
  {
    id: "services-3",
    category: "Services & Deliverables",
    question: "Do you build websites on WordPress?",
    answer: "We use modern web technologies (Next.js, React) to build fast, secure, and high-performing websites. Unlike WordPress, our sites don't need constant plugin updates, don't have security vulnerabilities from outdated themes, and load significantly faster — which directly impacts your Google rankings and user experience. We handle all the technical side so you don't have to worry about anything.",
    keywords: ["wordpress", "platform", "wix", "squarespace", "technology"]
  },
  {
    id: "services-4",
    category: "Services & Deliverables",
    question: "What does local SEO include?",
    answer: "Our local SEO service includes:\n\n- Google Business Profile optimization and management\n- Service area page creation (targeting each city/neighborhood you serve)\n- Monthly blog posts optimized for local plumbing keywords\n- Citation building and cleanup (business directory listings)\n- Review generation strategy\n- Monthly performance reports showing rankings, traffic, and calls\n\nThe goal is to get your business showing up in the Google Map Pack and organic results when people search for plumbers in your area.",
    keywords: ["seo", "local seo", "google", "ranking", "search"]
  },
  {
    id: "services-5",
    category: "Services & Deliverables",
    question: "What does the social media posting include?",
    answer: "Our SEO + Social Growth plan includes daily posting on both Google Business Profile and Facebook. We create plumbing-specific content — job tips, seasonal reminders, service highlights, before/after posts, and review spotlights. We post every single day (30 posts/month per platform) to keep your business visible and active. We also handle review generation strategy and monthly performance tracking.",
    keywords: ["social media", "facebook", "posting", "google business", "gbp"]
  },
  {
    id: "services-6",
    category: "Services & Deliverables",
    question: "Do you offer logo design?",
    answer: "Our primary services focus on websites, SEO, and social media management. If you need a logo, we can recommend resources or include basic branding guidance as part of your website build. The most important thing is getting your website live and generating calls — we can always refine branding as you grow.",
    keywords: ["logo", "branding", "design", "brand"]
  },
  {
    id: "services-7",
    category: "Services & Deliverables",
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely — every site we build is mobile-first. Over 70% of people searching for a plumber are on their phone, usually in an emergency. Our sites are designed for that scenario: big click-to-call buttons, easy-to-read text, fast loading, and prominent emergency CTAs. Your site will look and work perfectly on phones, tablets, and desktops.",
    keywords: ["mobile", "phone", "responsive", "tablet"]
  },
  {
    id: "services-8",
    category: "Services & Deliverables",
    question: "Do you write the content for the website?",
    answer: "Yes, we handle all the content writing. We'll need some basic info from you — your services, service areas, business story, and any specific things you want highlighted — but we write all the page copy, service descriptions, and blog posts. Since we understand the plumbing industry, our copy speaks your customers' language and addresses their actual concerns.",
    keywords: ["content", "copywriting", "writing", "text", "copy"]
  },
  {
    id: "services-9",
    category: "Services & Deliverables",
    question: "Can you help with Google Business Profile?",
    answer: "Yes — Google Business Profile optimization is included in both our 12-Month Growth plan and our SEO + Social Growth plan. We'll optimize your listing with the right categories, services, photos, and posts. For our social media clients, we post to your GBP daily. A well-optimized GBP is often the #1 driver of calls for plumbing businesses.",
    keywords: ["google business profile", "gbp", "google maps", "map pack", "listing"]
  },
  {
    id: "services-10",
    category: "Services & Deliverables",
    question: "Do you handle domain and hosting?",
    answer: "Yes, we can set up and manage your domain and hosting as part of the website build. Our sites are hosted on fast, reliable infrastructure with automatic SSL certificates. If you already have a domain, we'll work with that. If you need one, we'll help you pick and register the right domain for your plumbing business.",
    keywords: ["domain", "hosting", "url", "website address"]
  },

  // ============================================
  // 3. PRICING & PACKAGES
  // ============================================
  {
    id: "pricing-1",
    category: "Pricing & Packages",
    question: "How much does a plumbing website cost?",
    answer: "We have three main options:\n\n1. **12-Month Growth Contract** — $1,000/month. This is our flagship offer. You get a custom website built in Month 1 PLUS 12 months of local SEO content, monthly reports, GBP optimization, and ongoing updates. Best value and best results.\n\n2. **One-Time Website Build** — $2,500. Custom plumbing website with up to 10 service area pages, schema markup, and 30 days of post-launch support. Great if you just need a site.\n\n3. **SEO + Social Growth** — $1,500/month. Daily GBP and Facebook posts, local SEO content, review strategy, and monthly tracking. Perfect if you already have a site or want to add this alongside a website build.\n\nWant to see the full comparison? Check out onlyplumbingsites.com/pricing or book a free call and we'll recommend the right fit.",
    keywords: ["price", "cost", "how much", "pricing", "packages", "plans"]
  },
  {
    id: "pricing-2",
    category: "Pricing & Packages",
    question: "What is the 12-month growth contract?",
    answer: "The 12-Month Growth Contract is our flagship offering at $1,000/month. Here's what you get:\n\n**Month 1:** We build and launch your custom plumbing website — mobile-first, conversion-optimized, with service area pages and emergency CTAs.\n\n**Months 1-12:** We continuously grow your online presence with local SEO content (blog posts, service area pages), Google Business Profile optimization, monthly performance reports, review integration, and ongoing site updates.\n\nThe total value is $12,000 over 12 months. Most clients see significant increases in calls within the first 2-3 months as their SEO content starts ranking. This is the best option for plumbing businesses serious about consistent, long-term growth.",
    keywords: ["12 month", "growth contract", "flagship", "monthly", "1000"]
  },
  {
    id: "pricing-3",
    category: "Pricing & Packages",
    question: "What if I just want a website with no ongoing services?",
    answer: "That's our One-Time Website Build at $2,500. You get a fully custom plumbing website with up to 10 service area pages, schema markup, basic GBP guidance, and 30 days of post-launch support. The site is yours.\n\nFair warning though: a website without ongoing SEO is like a truck without gas — it looks great but won't take you far. If budget is a concern, I'd recommend starting with the website and adding SEO later when you're ready.",
    keywords: ["one time", "just website", "no monthly", "2500", "one-off"]
  },
  {
    id: "pricing-4",
    category: "Pricing & Packages",
    question: "Do you offer payment plans?",
    answer: "Our 12-Month Growth Contract is already structured as a monthly payment — $1,000/month for 12 months. For the One-Time Website Build ($2,500), we can discuss payment options on your strategy call. We process all payments securely through Stripe.",
    keywords: ["payment plan", "installments", "finance", "pay over time"]
  },
  {
    id: "pricing-5",
    category: "Pricing & Packages",
    question: "Is there a bundle discount?",
    answer: "Yes — if you combine the 12-Month Growth Contract with our SEO + Social Growth service, the bundle price is $2,000/month instead of $2,500/month. That saves you $500/month ($6,000 over the year). You get the full website build, 12 months of SEO, plus daily social media posting and review strategy. It's the full package for plumbing businesses that want to dominate their local market.",
    keywords: ["bundle", "discount", "combo", "save", "deal"]
  },
  {
    id: "pricing-6",
    category: "Pricing & Packages",
    question: "What's the ROI? Will I make my money back?",
    answer: "Think about it this way: what does one plumbing job net you? Typically $300-$500 for a standard service call, more for larger jobs. At $1,000/month, you only need 2-3 extra jobs per month to cover your investment — and our clients typically see much more than that.\n\nA well-built plumbing website with ongoing SEO can generate 15-30+ calls per month once it's ranking. We can't guarantee specific numbers (anyone who does is lying), but the math works strongly in your favor. On your strategy call, we can look at your specific market and give you a realistic picture.",
    keywords: ["roi", "return", "investment", "worth it", "make money", "results"]
  },
  {
    id: "pricing-7",
    category: "Pricing & Packages",
    question: "Why are you more expensive than Wix or Squarespace?",
    answer: "Wix and Squarespace give you a template. We give you a conversion system.\n\nA DIY website builder doesn't know that plumbing customers search by service area, that emergency CTAs need to be above the fold, that schema markup helps you show up in rich results, or that service area pages are the #1 SEO driver for local plumbers.\n\nWe've built 250+ plumbing websites — we know exactly what generates calls and what just sits there looking pretty. Our sites are built with modern tech that loads faster, ranks better, and converts more visitors into phone calls. The difference in results pays for itself many times over.",
    keywords: ["expensive", "cheaper", "wix", "squarespace", "diy", "template"]
  },
  {
    id: "pricing-8",
    category: "Pricing & Packages",
    question: "What are the add-on services?",
    answer: "We offer several add-ons you can layer onto any plan:\n\n- **Missed Call Text-Back** ($100/month) — When you miss a call, an automatic text is sent to the caller: 'Hey, sorry we missed your call. How can we help?' Keeps leads from going to your competitor.\n- **Review Automation** ($150/month) — Automated review request system that sends texts/emails after completed jobs to build your Google reviews.\n- **CRM + Lead Follow-Up System** ($200/month) — Full customer relationship management with automated follow-up sequences so no lead falls through the cracks.\n- **AI Chat Assistant** ($150/month) — An AI chatbot on your website that can answer questions, capture leads, and book appointments 24/7.\n\nWe can discuss which add-ons make sense for your business on a strategy call.",
    keywords: ["add-on", "extras", "additional", "text-back", "review", "crm", "chat"]
  },

  // ============================================
  // 4. PROCESS & TIMELINE
  // ============================================
  {
    id: "process-1",
    category: "Process & Timeline",
    question: "How does the process work?",
    answer: "Our process has 5 steps:\n\n1. **Free Audit** — We review your current online presence and identify gaps and opportunities.\n2. **Strategy Call** — A 30-minute call where we discuss your business goals, service areas, and recommend the right plan.\n3. **Build** — We design and develop your custom website (typically 2-3 weeks). You'll review and give feedback before we launch.\n4. **Launch** — Your site goes live. We handle all the technical setup, DNS, and configuration.\n5. **Grow** — For monthly clients, we continuously optimize with SEO content, social posts, and performance tracking.\n\nYou can get started by requesting a free audit at onlyplumbingsites.com/audit or booking a strategy call at onlyplumbingsites.com/book.",
    keywords: ["process", "how does it work", "steps", "get started"]
  },
  {
    id: "process-2",
    category: "Process & Timeline",
    question: "How long does it take to build a website?",
    answer: "Typically 2-3 weeks from kickoff to launch. Here's the general timeline:\n\n- **Week 1:** We gather your info (services, service areas, photos, preferences) and create the design.\n- **Week 2:** We build out all pages, content, and functionality. You review and provide feedback.\n- **Week 3:** We make revisions, finalize everything, and launch.\n\nThe biggest factor is how quickly you can provide your business info and feedback. The more responsive you are, the faster we launch. Some sites go live in under 2 weeks.",
    keywords: ["how long", "timeline", "when", "time", "fast", "quick"]
  },
  {
    id: "process-3",
    category: "Process & Timeline",
    question: "What do you need from me to get started?",
    answer: "To build your website, we'll need:\n\n- Your business name, phone number, and service areas\n- List of services you offer\n- Any photos of your work, team, or trucks (job site photos are great)\n- Your logo (if you have one)\n- Access to your Google Business Profile (if you have one)\n- Your preferences on design (colors, style, any sites you like)\n- A brief business story (how long you've been in business, what makes you different)\n\nWe'll send you a simple onboarding form that makes this easy. Most plumbers complete it in 15-20 minutes.",
    keywords: ["need from me", "provide", "information", "onboarding", "start"]
  },
  {
    id: "process-4",
    category: "Process & Timeline",
    question: "How many revisions do I get?",
    answer: "Website builds include 2 rounds of revisions. In practice, most of our clients only need one round because we nail the design based on your input and our 250+ plumbing website experience. If you're on a monthly plan, reasonable ongoing updates are included as part of the service.",
    keywords: ["revisions", "changes", "edits", "modify"]
  },
  {
    id: "process-5",
    category: "Process & Timeline",
    question: "When will I start seeing results?",
    answer: "For the website itself — you'll have a professional, conversion-optimized site live within 2-3 weeks. Calls from direct traffic and referrals can start immediately.\n\nFor SEO results — this takes time. Search engines need to crawl and index your new pages. Typically:\n- **Month 1-2:** Site indexed, initial rankings appearing\n- **Month 2-3:** Service area pages start ranking for local searches\n- **Month 3-6:** Noticeable increase in organic traffic and calls\n- **Month 6-12:** Compound growth as more content ranks and authority builds\n\nSEO is a long game, which is why we recommend the 12-month plan. The plumbers who commit to it see the biggest results.",
    keywords: ["results", "when", "how fast", "rankings", "calls", "traffic"]
  },
  {
    id: "process-6",
    category: "Process & Timeline",
    question: "What is the free website audit?",
    answer: "Our free website audit is a personalized review of your current online presence. We look at:\n\n- Your current website (if you have one) — design, speed, mobile-friendliness, SEO\n- Your Google Business Profile — completeness, reviews, categories\n- Your local search rankings — how you show up when people search for plumbers in your area\n- Your competitors — what they're doing online in your market\n\nWe'll send you a detailed breakdown within 24 hours with specific recommendations. No obligation, no cost. You can request one at onlyplumbingsites.com/audit.",
    keywords: ["audit", "free audit", "review", "analysis", "website review"]
  },
  {
    id: "process-7",
    category: "Process & Timeline",
    question: "What happens on the strategy call?",
    answer: "The strategy call is a free 30-minute conversation where we:\n\n1. Learn about your business — service areas, team size, current marketing\n2. Review your online presence together (we'll share our screen)\n3. Identify the biggest gaps and opportunities\n4. Recommend a specific plan based on your goals and budget\n5. Answer all your questions\n\nThere's no pressure to buy anything. If we're a good fit, great — we'll send you a proposal. If not, you'll walk away with actionable insights you can use either way. Book at onlyplumbingsites.com/book.",
    keywords: ["strategy call", "consultation", "meeting", "call", "book"]
  },

  // ============================================
  // 5. TECHNICAL & WEBSITE FEATURES
  // ============================================
  {
    id: "technical-1",
    category: "Technical & Website Features",
    question: "What makes your websites different from other agencies?",
    answer: "Three things set us apart:\n\n1. **Trade expertise.** Our founder is a licensed plumber. We understand what homeowners think when they need a plumber — and we build sites that match that urgency.\n\n2. **Plumbing-specific optimization.** Emergency click-to-call CTAs above the fold. Service area pages for every city you serve. Schema markup for plumbing services. These aren't afterthoughts — they're built into every site from day one.\n\n3. **250+ plumbing websites of experience.** We know what converts in this industry. Every layout, every CTA placement, every content structure is informed by real data from hundreds of plumbing websites.",
    keywords: ["different", "why you", "better", "unique", "advantage"]
  },
  {
    id: "technical-2",
    category: "Technical & Website Features",
    question: "What are service area pages?",
    answer: "Service area pages are individual pages on your website targeting each city or neighborhood you serve. For example, if you're a plumber in the Chicago area, you'd have pages like 'Plumber in Naperville,' 'Emergency Plumbing in Aurora,' 'Drain Cleaning in Schaumburg,' etc.\n\nThese pages are critical for local SEO because they tell Google exactly where you work. When someone searches 'plumber near me' in Naperville, your Naperville page is what shows up. Most plumbing websites are missing this entirely — it's the #1 SEO strategy most plumbers miss.",
    keywords: ["service area", "pages", "cities", "locations", "local"]
  },
  {
    id: "technical-3",
    category: "Technical & Website Features",
    question: "What is schema markup?",
    answer: "Schema markup is code that helps search engines understand your website content. For plumbing businesses, we add:\n\n- **LocalBusiness schema** — tells Google your business name, address, phone, hours\n- **Service schema** — lists your specific plumbing services\n- **FAQ schema** — can show your Q&A directly in search results\n- **Review schema** — can display star ratings in search results\n\nThis can significantly improve how your site appears in Google, making it more likely someone clicks on your listing. We add all of this automatically to every site we build.",
    keywords: ["schema", "markup", "structured data", "rich results"]
  },
  {
    id: "technical-4",
    category: "Technical & Website Features",
    question: "Will my website be fast?",
    answer: "Yes — website speed is a priority. We use modern technology (Next.js) that produces fast-loading, optimized websites. Our sites typically score 90+ on Google's PageSpeed Insights. This matters because:\n\n1. Google uses page speed as a ranking factor\n2. Visitors leave slow sites (53% abandon a page that takes more than 3 seconds)\n3. Plumbing emergencies = urgency = people won't wait for a slow site\n\nWe optimize images, minimize code, and use a global CDN (content delivery network) so your site loads fast everywhere.",
    keywords: ["speed", "fast", "slow", "loading", "performance", "pagespeed"]
  },
  {
    id: "technical-5",
    category: "Technical & Website Features",
    question: "Do I own the website?",
    answer: "Yes. Upon full payment, you own the website content and design created for your business. If you're on the 12-month plan, the site is yours after your contract is fulfilled. We retain the right to showcase the work in our portfolio (unless you request otherwise). Third-party assets like stock photos or fonts are subject to their respective licenses.",
    keywords: ["own", "ownership", "mine", "keep", "rights"]
  },
  {
    id: "technical-6",
    category: "Technical & Website Features",
    question: "Will my website have a contact form?",
    answer: "Yes — every website we build includes contact forms that capture leads. For our monthly plan clients, form submissions are routed directly into your CRM (Go High Level) so you can track and follow up with every lead. We also include click-to-call buttons and prominent phone number display so customers can reach you instantly.",
    keywords: ["contact form", "form", "leads", "capture", "submissions"]
  },
  {
    id: "technical-7",
    category: "Technical & Website Features",
    question: "Is the website secure?",
    answer: "Yes. Every site comes with an SSL certificate (the padlock icon in the browser), which encrypts data between your visitors and your website. We also use modern hosting infrastructure with DDoS protection and automatic security updates. Google also favors secure (HTTPS) websites in search results.",
    keywords: ["security", "secure", "ssl", "https", "safe", "hack"]
  },

  // ============================================
  // 6. SEO & MARKETING
  // ============================================
  {
    id: "seo-1",
    category: "SEO & Marketing",
    question: "Can you guarantee first page rankings?",
    answer: "No — and you should be wary of anyone who does. Google's algorithm considers hundreds of factors and changes regularly. What we CAN guarantee is that we'll build your site with proven SEO best practices, create content targeting your service areas, optimize your Google Business Profile, and work consistently for 12 months to improve your rankings.\n\nOur approach works — that's backed by 250+ plumbing websites of experience. But honest expectations beat false promises. On your strategy call, we can assess your specific market and give you a realistic picture of what to expect.",
    keywords: ["guarantee", "first page", "rank", "promise", "rankings"]
  },
  {
    id: "seo-2",
    category: "SEO & Marketing",
    question: "What keywords will you target?",
    answer: "We target the keywords your customers actually search for, including:\n\n- **Emergency terms:** 'emergency plumber [city],' '24/7 plumber near me'\n- **Service terms:** 'drain cleaning [city],' 'water heater repair [city],' 'sewer line repair [city]'\n- **Location terms:** 'plumber in [city],' 'plumbing company [city]'\n- **Problem terms:** 'leaking pipe,' 'clogged drain,' 'no hot water'\n\nWe do keyword research specific to your service areas and build content around the terms that will drive the most calls. Service area pages are the biggest win for most plumbing businesses.",
    keywords: ["keywords", "target", "search terms", "what people search"]
  },
  {
    id: "seo-3",
    category: "SEO & Marketing",
    question: "How is SEO different from Google Ads?",
    answer: "Google Ads (PPC) = you pay for every click. The moment you stop paying, the traffic stops.\n\nSEO = you invest in building your organic presence. Over time, you rank naturally in search results and get clicks for free. It compounds — the content you create in Month 1 can still generate calls in Month 12 and beyond.\n\nBoth have their place, but for plumbing businesses, SEO + a great website is the better long-term investment. You're building an asset that generates calls without ongoing ad spend.",
    keywords: ["google ads", "ppc", "advertising", "paid", "ads vs seo"]
  },
  {
    id: "seo-4",
    category: "SEO & Marketing",
    question: "Do you run Google Ads?",
    answer: "Our core focus is on organic growth — websites, SEO, and social media. We don't currently manage Google Ads campaigns. However, a well-built website makes your Google Ads much more effective if you decide to run them separately. Better landing pages = better Quality Score = lower cost per click = more leads for your ad budget.",
    keywords: ["google ads", "ppc", "run ads", "paid advertising"]
  },
  {
    id: "seo-5",
    category: "SEO & Marketing",
    question: "How important are Google reviews?",
    answer: "Extremely important. Google reviews directly impact your Map Pack ranking and whether someone clicks on your listing. For plumbing businesses:\n\n- 4.5+ star rating is the sweet spot\n- Responding to reviews (positive and negative) shows Google you're active\n- Recent reviews matter more than old ones\n- Review velocity (getting reviews consistently) helps rankings\n\nOur Review Automation add-on ($150/month) sends automated review requests after completed jobs so you build reviews on autopilot.",
    keywords: ["reviews", "google reviews", "stars", "ratings", "reputation"]
  },
  {
    id: "seo-6",
    category: "SEO & Marketing",
    question: "Will you help me get more reviews?",
    answer: "Yes — review generation is part of our strategy. For monthly plan clients, we include review generation guidance. If you want it fully automated, our Review Automation add-on ($150/month) sets up an automatic system that texts or emails your customers after a completed job asking for a review. It makes building your Google reviews completely hands-off.",
    keywords: ["more reviews", "get reviews", "review generation", "automation"]
  },

  // ============================================
  // 7. BILLING & CONTRACTS
  // ============================================
  {
    id: "billing-1",
    category: "Billing & Contracts",
    question: "Is there a contract?",
    answer: "The 12-Month Growth plan is a 12-month commitment — that's because SEO takes time to produce results, and we want you to see the full benefit. After Month 6, you can cancel with 60 days written notice.\n\nThe One-Time Website Build ($2,500) has no ongoing contract — you pay, we build, it's yours.\n\nThe SEO + Social Growth plan is month-to-month after an initial 3-month minimum.\n\nAll specific terms are outlined clearly in your proposal before you sign anything.",
    keywords: ["contract", "commitment", "cancel", "lock in", "term"]
  },
  {
    id: "billing-2",
    category: "Billing & Contracts",
    question: "Can I cancel my plan?",
    answer: "For the 12-Month Growth Contract: After Month 6, you can cancel with 60 days written notice. Early termination before Month 6 requires payment of remaining months at 50% of the monthly rate.\n\nFor the SEO + Social Growth plan: After the initial 3-month minimum, you can cancel with 30 days notice.\n\nWe're confident in our work, but we understand business realities. Our cancellation terms are fair — we just ask for enough time to properly transition.",
    keywords: ["cancel", "cancellation", "quit", "stop", "end"]
  },
  {
    id: "billing-3",
    category: "Billing & Contracts",
    question: "How do I pay?",
    answer: "All payments are processed securely through Stripe. For monthly plans, you'll be set up on automatic monthly billing. For the one-time website build, we'll send you an invoice/payment link. We accept all major credit cards. You'll get automatic receipts for every payment.",
    keywords: ["pay", "payment", "credit card", "invoice", "billing", "stripe"]
  },
  {
    id: "billing-4",
    category: "Billing & Contracts",
    question: "Do you offer refunds?",
    answer: "For the One-Time Website Build: No refunds after the design phase has been approved and development has begun.\n\nFor monthly services: No refunds for the current billing period, but you can cancel future billing according to the cancellation terms in your contract.\n\nWe put the terms in writing upfront so there are no surprises. Our goal is to deliver results that make you want to stay — not to lock you into something you're unhappy with.",
    keywords: ["refund", "money back", "guarantee"]
  },

  // ============================================
  // 8. SUPPORT & COMMUNICATION
  // ============================================
  {
    id: "support-1",
    category: "Support & Communication",
    question: "How do I communicate with you during the build?",
    answer: "We keep it simple — email and phone. You'll have direct access to Ryan throughout the process. No ticket systems, no waiting 3 days for a response from a random support person. When you send us feedback on your site, we typically respond within 24 hours and implement changes quickly.",
    keywords: ["communication", "contact", "support", "during", "reach"]
  },
  {
    id: "support-2",
    category: "Support & Communication",
    question: "What happens after my website launches?",
    answer: "That depends on your plan:\n\n- **One-Time Build:** You get 30 days of post-launch support for bug fixes and minor adjustments. After that, you can reach out for additional work at our hourly rate.\n- **12-Month Growth Plan:** You get ongoing support for the full 12 months. We continue adding content, optimizing for SEO, updating your site, and providing monthly reports.\n- **SEO + Social Growth:** Ongoing support and strategy as long as you're a client.\n\nWe don't build and disappear. Our monthly clients get continuous attention and improvement.",
    keywords: ["after launch", "support", "ongoing", "maintenance", "updates"]
  },
  {
    id: "support-3",
    category: "Support & Communication",
    question: "Do I get reports?",
    answer: "Yes — all monthly plan clients receive monthly performance reports that include:\n\n- Website traffic (visitors, page views, sources)\n- Search ranking changes for your target keywords\n- Google Business Profile metrics (views, calls, direction requests)\n- Content published that month\n- Recommendations for the coming month\n\nWe believe in transparency. You'll always know exactly what we're doing and what results it's producing.",
    keywords: ["reports", "reporting", "analytics", "metrics", "tracking"]
  },

  // ============================================
  // 9. COMPARISONS & OBJECTIONS
  // ============================================
  {
    id: "objection-1",
    category: "Comparisons & Objections",
    question: "I get enough work from word of mouth, why do I need a website?",
    answer: "Word of mouth is great — but it has a ceiling. What happens during slow season? What happens when a big referral source retires or moves? A website and SEO give you a consistent, predictable pipeline of calls that doesn't depend on anyone else. Think of it as a second truck that runs 24/7 without you doing anything. The best plumbing businesses have both word of mouth AND a strong online presence.",
    keywords: ["word of mouth", "referrals", "enough work", "don't need"]
  },
  {
    id: "objection-2",
    category: "Comparisons & Objections",
    question: "I tried a website before and it didn't work.",
    answer: "That's actually really common — and it's usually because the site was built by a general web designer who doesn't understand the plumbing industry. They make pretty sites, but they don't know that:\n\n- Emergency CTAs need to be above the fold\n- Service area pages are what actually drive local rankings\n- Plumbing customers are often in a panic and need to call NOW\n- The content needs to be written for homeowners, not plumbers\n\nOur founder is a licensed plumber who's built 250+ plumbing sites. The difference is night and day. We'd be happy to show you on a free strategy call what was wrong with your previous site and how we'd fix it.",
    keywords: ["tried before", "didn't work", "bad experience", "waste of money"]
  },
  {
    id: "objection-3",
    category: "Comparisons & Objections",
    question: "That's too expensive.",
    answer: "I understand — $1,000/month is real money. But let's look at the math: what does one plumbing job net you? For most plumbers, a standard service call brings in $300-$500. Bigger jobs — water heaters, repiping, sewer lines — are $1,000-$5,000+.\n\nYou need just 2-3 extra jobs per month to cover the investment. Our clients typically see much more than that. Compare that to Angi or HomeAdvisor where you're paying $30-80 per lead (shared with 5 other plumbers), and the math makes even more sense.\n\nWant to talk through the numbers for your specific business? Book a free strategy call and we'll be straight with you about whether it makes sense.",
    keywords: ["expensive", "too much", "can't afford", "budget", "cost"]
  },
  {
    id: "objection-4",
    category: "Comparisons & Objections",
    question: "Why not just use Yelp, Angi, or HomeAdvisor?",
    answer: "Those platforms charge you per lead ($30-$80 each), those leads are shared with 4-5 other plumbers, and the moment you stop paying, the leads stop coming. You're renting attention.\n\nWith your own website and SEO, customers find YOU directly. No lead fees, no competition on the same listing, and the investment compounds over time. Your site keeps working for you 24/7 without per-lead costs.\n\nThe smartest play: have your own website AND keep your Yelp/Angi profiles — but make your website the foundation, not the rental platforms.",
    keywords: ["yelp", "angi", "homeadvisor", "lead service", "thumbtack", "lead fees"]
  },
  {
    id: "objection-5",
    category: "Comparisons & Objections",
    question: "I need to think about it.",
    answer: "Totally fair — it's a business decision and you should take the time you need. Here's what I'd suggest: request a free website audit at onlyplumbingsites.com/audit. We'll send you a detailed look at your current online presence and what opportunities you're missing. No obligation, and it gives you real data to make your decision with. Then when you're ready, we're here.",
    keywords: ["think about it", "not sure", "decide", "later", "maybe"]
  },
  {
    id: "objection-6",
    category: "Comparisons & Objections",
    question: "My nephew/friend can build me a website.",
    answer: "They might be able to build you a website — but can they build you a plumbing website that ranks in local search and generates service calls? There's a big difference between making something that looks nice and making something that actually drives business.\n\nOur sites include service area page strategy, plumbing-specific schema markup, emergency CTA optimization, conversion-focused layouts, and 250+ plumbing websites of knowledge baked into every decision. It's specialized expertise, not just web design.",
    keywords: ["nephew", "friend", "someone else", "do it myself", "diy"]
  },
  {
    id: "objection-7",
    category: "Comparisons & Objections",
    question: "Can you do it cheaper?",
    answer: "I could, but I'd have to cut the parts that actually make the site work — like the SEO content, the service area pages, or the ongoing optimization. The website alone won't generate calls; it's the 12 months of strategic content and SEO that makes the phone ring.\n\nThat said, if the 12-month plan doesn't fit your budget right now, the One-Time Website Build at $2,500 is a solid starting point. You get a professional, conversion-optimized site, and you can add SEO later when you're ready.",
    keywords: ["cheaper", "lower price", "negotiate", "less", "deal"]
  },

  // ============================================
  // 10. INDUSTRY-SPECIFIC (PLUMBING)
  // ============================================
  {
    id: "industry-1",
    category: "Industry-Specific",
    question: "What types of plumbing businesses do you work with?",
    answer: "All types — residential, commercial, and specialty plumbing businesses. We've built sites for:\n\n- Residential service plumbers (drain cleaning, repairs, water heaters)\n- New construction plumbing contractors\n- Commercial plumbing companies\n- Specialty services (trenchless sewer, hydro jetting, gas line)\n- Emergency/24-hour plumbing services\n- Multi-location plumbing companies\n\nWhether you're a one-truck operation or a 50-truck fleet, our approach scales to fit your business.",
    keywords: ["types", "residential", "commercial", "specialty", "what kind"]
  },
  {
    id: "industry-2",
    category: "Industry-Specific",
    question: "I'm a new plumbing business. Is it too early for a website?",
    answer: "It's actually the perfect time. Your website is your digital storefront — it legitimizes your business and gives people confidence to call you. For new businesses especially:\n\n- It establishes credibility from day one\n- Service area pages start ranking while you're building word of mouth\n- It gives you something to put on your truck, business cards, and anywhere else\n- Customers search online before calling — even referrals Google you first\n\nStarting with a strong web presence from the beginning puts you years ahead of competitors who wait.",
    keywords: ["new business", "just started", "startup", "beginning", "too early"]
  },
  {
    id: "industry-3",
    category: "Industry-Specific",
    question: "I already have a website. Can you help?",
    answer: "Absolutely. A lot of our work is replacing outdated or underperforming plumbing websites. We can:\n\n1. **Audit your current site** (free) to identify what's not working\n2. **Rebuild it** with our proven plumbing-specific approach\n3. **Add SEO and social** to start driving more traffic and calls\n\nOr, if your current site is decent, our SEO + Social Growth plan ($1,500/month) can work alongside it to build your rankings and social presence without a full rebuild. Let's look at your site on a strategy call and figure out the best path.",
    keywords: ["already have", "existing website", "rebuild", "redesign", "update"]
  },
  {
    id: "industry-4",
    category: "Industry-Specific",
    question: "Do you work with HVAC or other trades?",
    answer: "No — we exclusively work with plumbing businesses. That's our whole thing. By staying 100% focused on plumbing, we've built deep expertise that generalist agencies simply can't match. Every website, every SEO strategy, every piece of content is specifically for the plumbing industry. That specialization is what makes our work so effective.",
    keywords: ["hvac", "electrical", "other trades", "general contractor", "roofing"]
  },
  {
    id: "industry-5",
    category: "Industry-Specific",
    question: "How many calls can I expect from my website?",
    answer: "It varies by market, competition, and how many service areas you cover. We don't make specific guarantees because every market is different. What we can tell you:\n\n- Plumbing websites with proper SEO typically generate 15-30+ calls per month in medium-sized markets\n- Service area pages are usually the biggest call drivers\n- Results compound over time as your content builds authority\n- Emergency plumbing searches have some of the highest conversion rates of any local search\n\nOn your strategy call, we can look at your specific market, check the competition, and give you a realistic range based on what we've seen with similar businesses.",
    keywords: ["how many calls", "leads", "expect", "calls per month", "volume"]
  },

  // ============================================
  // 11. GETTING STARTED
  // ============================================
  {
    id: "start-1",
    category: "Getting Started",
    question: "How do I get started?",
    answer: "Two easy ways:\n\n1. **Book a Free Strategy Call** — A 30-minute conversation where we learn about your business and recommend the right plan. Book at onlyplumbingsites.com/book.\n\n2. **Request a Free Website Audit** — We'll review your current online presence and send you a detailed breakdown within 24 hours. Request at onlyplumbingsites.com/audit.\n\nBoth are completely free, no obligation. Most plumbers start with an audit and then jump on a call once they see the opportunities.",
    keywords: ["get started", "sign up", "begin", "interested", "next steps"]
  },
  {
    id: "start-2",
    category: "Getting Started",
    question: "Do you have availability right now?",
    answer: "We take on a limited number of new clients each month to ensure quality. The best way to check availability is to book a strategy call at onlyplumbingsites.com/book. If we're near capacity, we'll let you know the earliest start date. Plumbers who book sooner get priority.",
    keywords: ["availability", "when can you start", "capacity", "waitlist"]
  },
  {
    id: "start-3",
    category: "Getting Started",
    question: "Can I see examples of your work?",
    answer: "Yes — check out our Case Studies page at onlyplumbingsites.com/case-studies for examples of plumbing websites we've built. We can also walk you through specific examples on a strategy call that match your type of business and market. With 250+ plumbing sites under our belt, chances are we've built something very similar to what you need.",
    keywords: ["examples", "portfolio", "samples", "previous work", "see"]
  },

  // ============================================
  // 12. ADD-ONS & EXTRAS
  // ============================================
  {
    id: "addon-1",
    category: "Add-Ons & Extras",
    question: "What is missed call text-back?",
    answer: "Missed Call Text-Back ($100/month) is a system that automatically sends a text message to anyone who calls your business and doesn't get an answer. The text says something like: 'Hey, sorry we missed your call! How can we help?'\n\nThis is huge for plumbers because:\n- You're often on a job and can't answer the phone\n- Customers in a plumbing emergency will call your competitor if you don't respond quickly\n- An immediate text keeps them engaged until you can call back\n\nIt typically saves 20-30% of calls that would otherwise go to a competitor.",
    keywords: ["missed call", "text back", "text-back", "missed calls", "auto text"]
  },
  {
    id: "addon-2",
    category: "Add-Ons & Extras",
    question: "What is review automation?",
    answer: "Review Automation ($150/month) is an automated system that sends review requests to your customers after completed jobs. Here's how it works:\n\n1. After a job is marked complete, the system sends a text/email to the customer\n2. It asks them to leave a review on Google\n3. If they had a negative experience, it routes them to a private feedback form instead (protecting your public rating)\n4. It follows up automatically if they don't respond\n\nConsistently building reviews is one of the biggest ranking factors for plumbing businesses in local search. This makes it completely hands-off.",
    keywords: ["review automation", "auto reviews", "get reviews", "review requests"]
  },
  {
    id: "addon-3",
    category: "Add-Ons & Extras",
    question: "What is the CRM + lead follow-up system?",
    answer: "The CRM + Lead Follow-Up System ($200/month) gives you a complete customer relationship management platform built for plumbing businesses. It includes:\n\n- All leads tracked in one place (website forms, phone calls, chat)\n- Automated follow-up sequences (so no lead falls through the cracks)\n- Pipeline tracking (from new lead → booked job → completed → review request)\n- Appointment scheduling and reminders\n- Text and email templates for common communications\n\nMost plumbing businesses lose 30-40% of leads because they don't follow up fast enough. This system makes sure every lead gets touched.",
    keywords: ["crm", "lead follow-up", "lead management", "pipeline", "follow up"]
  },
  {
    id: "addon-4",
    category: "Add-Ons & Extras",
    question: "What is the AI chat assistant?",
    answer: "The AI Chat Assistant ($150/month) is an intelligent chatbot on your website that:\n\n- Answers common plumbing questions 24/7\n- Captures lead information (name, phone, address, issue)\n- Can schedule appointments\n- Provides instant responses even at 2 AM when emergency searches peak\n- Learns about your specific services and service areas\n\nFor plumbing businesses, having someone 'available' 24/7 is a huge advantage. Emergency plumbing searches happen around the clock, and an AI chat assistant makes sure you never miss an opportunity.",
    keywords: ["ai chat", "chatbot", "chat assistant", "live chat", "24/7"]
  },

  // ============================================
  // BONUS: COMMON SMALL TALK / MISC
  // ============================================
  {
    id: "misc-1",
    category: "Miscellaneous",
    question: "Are you a real person or a bot?",
    answer: "I'm an AI assistant for Only Plumbing Sites. I can answer your questions about our services, pricing, and process. If you'd like to talk to Ryan directly, you can book a free strategy call at onlyplumbingsites.com/book or email us at hello@onlyplumbingsites.com.",
    keywords: ["real person", "human", "bot", "ai", "robot"]
  },
  {
    id: "misc-2",
    category: "Miscellaneous",
    question: "What are your hours?",
    answer: "Strategy calls are available Monday through Friday, 9:00 AM to 5:00 PM Central Time. Our AI assistant (that's me) is available 24/7 to answer questions. For urgent matters, email hello@onlyplumbingsites.com and we'll get back to you within 24 hours.",
    keywords: ["hours", "open", "available", "when", "schedule"]
  },
  {
    id: "misc-3",
    category: "Miscellaneous",
    question: "Do you have a phone number?",
    answer: "The best way to reach us is by booking a strategy call at onlyplumbingsites.com/book or emailing hello@onlyplumbingsites.com. On the strategy call, you'll get Ryan's direct attention for a full 30 minutes to discuss your business.",
    keywords: ["phone number", "call you", "telephone", "phone"]
  }
];

/**
 * Generates the full system prompt including all knowledge base entries
 * formatted for the OpenAI API.
 */
export function generateFullSystemPrompt(): string {
  const knowledgeSection = knowledgeBase
    .map(
      (entry) =>
        `Q: ${entry.question}\nA: ${entry.answer}`
    )
    .join("\n\n---\n\n");

  return `${SYSTEM_PROMPT}

=== KNOWLEDGE BASE ===
Use the following Q&A pairs to answer user questions. If a question doesn't match any entry below, use the general context provided above to form a helpful answer. Always try to guide the conversation toward booking a strategy call or requesting a free audit.

${knowledgeSection}`;
}
