"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Phone,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  BookOpen,
  MapPin,
  Building2,
  Globe,
  Star,
  DollarSign,
  Search,
  Users,
  AlertOctagon,
  Lightbulb,
  Clock,
  TrendingUp,
  FileText,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ───────────────────────────────────────────
   METADATA (handled via generateMetadata below)
   ─────────────────────────────────────────── */

/* ───────────────────────────────────────────
   TABLE OF CONTENTS
   ─────────────────────────────────────────── */
const TOC = [
  { id: "what-are-citations", label: "What Are Local Citations?" },
  { id: "why-citations-matter", label: "Why Citations Matter for Plumbers" },
  { id: "types-of-citations", label: "Types of Citations (Structured vs Unstructured)" },
  { id: "nap-consistency", label: "NAP Consistency: The #1 Rule" },
  { id: "priority-citations", label: "The 18 Most Important Citations for Plumbers" },
  { id: "how-to-build", label: "How to Build & Fix Your Citations (Step-by-Step)" },
  { id: "common-mistakes", label: "7 Citation Mistakes Plumbers Make" },
  { id: "gbp-vs-website", label: "GBP vs Website: Finding & Fixing Mismatches" },
  { id: "yext-comparison", label: "Do You Need Yext? (Honest Breakdown)" },
  { id: "citation-audit", label: "How to Audit Your Citations (Free)" },
  { id: "diy-vs-hire", label: "DIY vs Hiring Someone: What Makes Sense" },
  { id: "citation-service", label: "Our Citation Cleanup Service" },
  { id: "faq", label: "FAQ" },
];

/* ───────────────────────────────────────────
   PRIORITY CITATIONS LIST
   ─────────────────────────────────────────── */
type PriorityCitation = {
  rank: number;
  name: string;
  url: string;
  category: string;
  categoryColor: string;
  why: string;
  impact: "critical" | "high" | "medium";
  claimUrl?: string;
  tips: string;
};

const PRIORITY_CITATIONS: PriorityCitation[] = [
  {
    rank: 1,
    name: "Google Business Profile",
    url: "google.com/business",
    category: "Maps / Search",
    categoryColor: "bg-blue-100 text-blue-700",
    why: "This IS your local SEO. Your Map Pack ranking, reviews, hours, photos, posts — everything starts here. If you only fix one citation, make it this one.",
    impact: "critical",
    claimUrl: "https://business.google.com",
    tips: "Verify ownership, fill out EVERY field, add 20+ photos, post weekly, respond to every review within 24 hours. Your GBP name must match your legal business name exactly — don't stuff keywords.",
  },
  {
    rank: 2,
    name: "ThePlumbingDirectory.com",
    url: "theplumbingdirectory.com",
    category: "Plumbing-Specific",
    categoryColor: "bg-orange-100 text-orange-700",
    why: "The only directory built specifically for plumbing businesses. Unlike generalist directories that sell your leads to 5 competitors, this one connects homeowners directly to you — no lead selling, no bidding wars.",
    impact: "critical",
    claimUrl: "https://theplumbingdirectory.com",
    tips: "Claim your free listing, add all services you offer, upload real job photos, and make sure your NAP matches your GBP exactly.",
  },
  {
    rank: 3,
    name: "Yelp",
    url: "yelp.com",
    category: "Review Site",
    categoryColor: "bg-red-100 text-red-700",
    why: "Yelp listings appear in Apple Maps results, Siri searches, and Yelp's own high-authority search results. Google also indexes Yelp pages and they often rank on page 1.",
    impact: "critical",
    claimUrl: "https://biz.yelp.com",
    tips: "Claim your free listing (don't pay for ads). Add detailed service descriptions, real photos, and respond to every review. Your Yelp NAP must match your GBP exactly.",
  },
  {
    rank: 4,
    name: "Apple Maps (Apple Business Connect)",
    url: "maps.apple.com",
    category: "Maps / Navigation",
    categoryColor: "bg-blue-100 text-blue-700",
    why: "40%+ of US smartphone users are on iPhone. When they ask Siri for a plumber or search Maps, your listing comes from Apple Business Connect. Many plumbers ignore this entirely.",
    impact: "critical",
    claimUrl: "https://businessconnect.apple.com",
    tips: "Apple pulls data from various sources (including Yelp). Claim directly through Apple Business Connect to control your listing. Upload your logo, add hours, and verify your address.",
  },
  {
    rank: 5,
    name: "Bing Places",
    url: "bingplaces.com",
    category: "Maps / Search",
    categoryColor: "bg-blue-100 text-blue-700",
    why: "Bing powers Alexa, Cortana, and many smart home devices. It also feeds DuckDuckGo results. While Google dominates, Bing still handles 6-8% of US searches — that's thousands of potential calls.",
    impact: "high",
    claimUrl: "https://www.bingplaces.com",
    tips: "You can import your GBP directly into Bing Places — takes 5 minutes. Make sure the NAP matches perfectly.",
  },
  {
    rank: 6,
    name: "Facebook Business Page",
    url: "facebook.com",
    category: "Social Media",
    categoryColor: "bg-purple-100 text-purple-700",
    why: "Facebook is the #2 review platform after Google. Your Facebook business page ranks in Google searches, and many homeowners check your FB before calling.",
    impact: "critical",
    claimUrl: "https://www.facebook.com/pages/create",
    tips: "Use your exact legal business name (no keyword stuffing). Add your full address, phone, website, hours, and service area. Post 2-3x per week with job photos.",
  },
  {
    rank: 7,
    name: "Data Axle (InfoGroup)",
    url: "dataaxle.com",
    category: "Data Aggregator",
    categoryColor: "bg-slate-100 text-slate-700",
    why: "Data Axle is one of the 4 major data aggregators that feeds your business info to hundreds of directories. If your info is wrong here, it spreads everywhere.",
    impact: "critical",
    claimUrl: "https://www.dataaxle.com",
    tips: "Submit your correct NAP directly. This single submission can fix dozens of downstream citations automatically over 2-4 months.",
  },
  {
    rank: 8,
    name: "Neustar Localeze",
    url: "neustar.biz",
    category: "Data Aggregator",
    categoryColor: "bg-slate-100 text-slate-700",
    why: "Another major data aggregator. Feeds data to 911 services, GPS systems, mapping apps, and hundreds of online directories. Getting this right is foundational.",
    impact: "critical",
    claimUrl: "https://www.neustar.biz/resources/product-literature/localeze-listing-management",
    tips: "Submit directly through their listing management. Include your full NAP, business categories, hours, and website URL.",
  },
  {
    rank: 9,
    name: "Foursquare / Factual",
    url: "foursquare.com",
    category: "Data Aggregator",
    categoryColor: "bg-slate-100 text-slate-700",
    why: "Foursquare's data powers Uber, Samsung Maps, Snapchat, Twitter, and thousands of apps. When any of these apps show local business info, it often comes from Foursquare.",
    impact: "high",
    claimUrl: "https://foursquare.com/claim",
    tips: "Claim your business on Foursquare directly. Their data reaches places most plumbers never think about — ride-sharing apps, smart TV apps, etc.",
  },
  {
    rank: 10,
    name: "Acxiom",
    url: "acxiom.com",
    category: "Data Aggregator",
    categoryColor: "bg-slate-100 text-slate-700",
    why: "The 4th major data aggregator. Together with Data Axle, Localeze, and Foursquare, these 4 sources feed data to virtually every directory and app in the US.",
    impact: "high",
    tips: "Submit your data through their consumer portal or use a listing management tool that covers all 4 aggregators at once.",
  },
  {
    rank: 11,
    name: "HomeAdvisor / Angi",
    url: "angi.com",
    category: "Home Services",
    categoryColor: "bg-green-100 text-green-700",
    why: "Despite controversy over lead quality, HomeAdvisor/Angi pages rank extremely well in Google. Even if you don't buy leads, having a claimed profile with reviews helps SEO.",
    impact: "high",
    claimUrl: "https://www.angi.com",
    tips: "Claim your free profile (you don't need to buy leads). Add services, photos, and respond to reviews. Make sure your NAP is consistent with everything else.",
  },
  {
    rank: 12,
    name: "Better Business Bureau (BBB)",
    url: "bbb.org",
    category: "Trust / Authority",
    categoryColor: "bg-amber-100 text-amber-700",
    why: "BBB accreditation is a powerful trust signal. BBB pages rank very well in Google, and the .org backlink carries significant SEO authority.",
    impact: "high",
    claimUrl: "https://www.bbb.org/get-accredited",
    tips: "Accreditation costs $400-500/year but the trust signal is worth it for most plumbing companies. At minimum, claim your free profile and make sure the NAP is correct.",
  },
  {
    rank: 13,
    name: "Nextdoor Business",
    url: "nextdoor.com",
    category: "Social / Local",
    categoryColor: "bg-purple-100 text-purple-700",
    why: "Nextdoor is hyperlocal — neighbors recommend plumbers to neighbors. Having a claimed business page lets you appear in local recommendations and sponsor posts in your service area.",
    impact: "high",
    claimUrl: "https://business.nextdoor.com",
    tips: "Claim your business page, add your license info, and encourage happy customers to recommend you on Nextdoor. This platform drives high-quality referral-like leads.",
  },
  {
    rank: 14,
    name: "Yellow Pages (YP.com)",
    url: "yellowpages.com",
    category: "General Directory",
    categoryColor: "bg-yellow-100 text-yellow-700",
    why: "YP.com still has very high domain authority. Your listing feeds to DexKnows, Superpages, and other Thryv-owned directories. One submission covers multiple sites.",
    impact: "high",
    claimUrl: "https://www.yellowpages.com",
    tips: "Claim your free listing. Don't pay for their premium services — the free listing gives you the NAP citation and backlink you need.",
  },
  {
    rank: 15,
    name: "Thumbtack",
    url: "thumbtack.com",
    category: "Home Services",
    categoryColor: "bg-green-100 text-green-700",
    why: "Thumbtack pages rank well for 'plumber near me' and similar searches. Even if you don't actively use the platform for leads, the citation and backlink help.",
    impact: "medium",
    claimUrl: "https://www.thumbtack.com",
    tips: "Create a complete profile with services, photos, and pricing ranges. Collect reviews from past customers on the platform.",
  },
  {
    rank: 16,
    name: "LinkedIn Company Page",
    url: "linkedin.com",
    category: "Social Media",
    categoryColor: "bg-purple-100 text-purple-700",
    why: "LinkedIn company pages rank well in Google. It's also where commercial property managers and GCs look for contractors. If you do commercial plumbing, this is essential.",
    impact: "medium",
    claimUrl: "https://www.linkedin.com/company/setup/new/",
    tips: "Create a company page (not just a personal profile). Add your full NAP, services, and post project completions. This matters more for commercial plumbing.",
  },
  {
    rank: 17,
    name: "Manta",
    url: "manta.com",
    category: "General Directory",
    categoryColor: "bg-yellow-100 text-yellow-700",
    why: "Manta has high domain authority and your listing often appears in Google searches for your business name. Free listing provides a solid backlink.",
    impact: "medium",
    claimUrl: "https://www.manta.com/claim",
    tips: "Claim your free listing. Add complete business info and categorize correctly under 'Plumbing Contractors' or 'Plumbers.'",
  },
  {
    rank: 18,
    name: "Chamber of Commerce",
    url: "chamberofcommerce.com",
    category: "Trust / Authority",
    categoryColor: "bg-amber-100 text-amber-700",
    why: "Local chamber membership provides a high-authority .org or .com backlink from your city's chamber website. This is a strong local relevance signal.",
    impact: "medium",
    tips: "Join your local chamber of commerce (typically $200-500/year). Beyond the citation, you get networking, referrals, and a trust badge for your website.",
  },
];

/* ───────────────────────────────────────────
   COMMON MISTAKES
   ─────────────────────────────────────────── */
const MISTAKES = [
  {
    title: "Using a tracking phone number as your main number",
    description: "Call tracking is important, but if you use a different tracking number on every directory, Google sees 15 different phone numbers for your business. Use your main business number on all citations and track calls through your website or GBP instead.",
  },
  {
    title: "Keyword-stuffing your business name",
    description: 'Your GBP and citations should show your legal business name — not "ABC Plumbing | 24/7 Emergency Plumber | Drain Cleaning Dallas TX." Google has been suspending profiles for this. Use your real registered business name.',
  },
  {
    title: "Abbreviation inconsistency (St vs Street, Ste vs Suite)",
    description: "Google's algorithm is smart, but why make it guess? Pick one format and use it everywhere. If your GBP says '123 Main St, Suite 4,' every single citation should say exactly that — not '123 Main Street, Ste. 4.'",
  },
  {
    title: "Forgetting to update after moving or changing numbers",
    description: "This is the #1 cause of citation inconsistency. You changed your phone number 3 years ago, but your old number is still on 50+ directories. Every old listing is actively hurting your rankings.",
  },
  {
    title: "Creating duplicate listings on the same directory",
    description: "Having two Google Business Profiles, two Yelp listings, or two of anything confuses Google and splits your reviews. Search each major directory for duplicates and merge or remove the old ones.",
  },
  {
    title: "Ignoring data aggregators",
    description: "Most plumbers focus on directories they can see (Yelp, Google, Facebook) but ignore the 4 major data aggregators (Data Axle, Localeze, Foursquare, Acxiom) that feed data to hundreds of downstream sites. Fix the source, fix them all.",
  },
  {
    title: "Paying for Yext and thinking the job is done",
    description: "Yext syncs your listings — but only while you pay. The moment you cancel, all those listings revert to whatever they were before. You're renting corrections, not owning them. (More on this below.)",
  },
];

/* ───────────────────────────────────────────
   FAQ
   ─────────────────────────────────────────── */
const FAQ = [
  {
    q: "How many citations does a plumbing business need?",
    a: "Quality matters more than quantity. Focus on getting the top 18-25 citations correct and consistent first (the ones listed in our priority list above). After that, building out to 50-80 quality citations is ideal for most local plumbing companies. Going beyond 100 has diminishing returns.",
  },
  {
    q: "How long does it take for citation changes to affect rankings?",
    a: "Google recrawls directories on different schedules. Changes to your GBP are usually reflected within days. Data aggregator changes can take 2-4 months to fully propagate to all downstream directories. Most plumbers see measurable ranking improvements within 60-90 days of a full citation cleanup.",
  },
  {
    q: "Can I build citations myself or do I need to hire someone?",
    a: "You absolutely can do it yourself — that's why we wrote this guide. It's tedious but not technically difficult. A full citation audit and cleanup typically takes 15-25 hours of work. If your time is worth more than $30/hour doing plumbing jobs, it usually makes more sense to hire someone. We offer a one-time citation cleanup service if you'd rather not do it yourself.",
  },
  {
    q: "What's the difference between a citation and a backlink?",
    a: "A citation is any mention of your business NAP (Name, Address, Phone) online — it doesn't need to link to your website. A backlink is a clickable link from another website to yours. Many citations include backlinks, which makes them doubly valuable. But even citations without links (called 'unstructured citations') help your local SEO.",
  },
  {
    q: "Do citations still matter in 2026?",
    a: "Yes. Google's own documentation lists 'prominence' as a local ranking factor, and citations are a major component of prominence. However, their relative importance has decreased compared to reviews and GBP optimization. Think of citations as foundational — you need them correct, but they alone won't put you in the Map Pack. They work alongside reviews, proximity, and GBP signals.",
  },
  {
    q: "Should I use the same phone number on every citation?",
    a: "Yes — use your primary business phone number on every citation, your GBP, and your website. If you need call tracking, use a tracking number only on your website (where you control it) and keep your real number consistent across all directories.",
  },
  {
    q: "What happens to my citations if I move my business?",
    a: "You need to update every single citation with your new address. This is one of the most common causes of ranking drops after a move. Start with your GBP and the 4 data aggregators, then work through the priority list. Use our free Citation Checker to find which sites still show your old address.",
  },
  {
    q: "Is it worth joining the BBB for the citation?",
    a: "The BBB citation alone isn't worth $400-500/year. But the combination of citation + .org backlink + trust badge for your website + consumer trust signal makes it worthwhile for most plumbing companies doing over $500K/year in revenue. Smaller companies should focus on free citations first.",
  },
];

/* ───────────────────────────────────────────
   REUSABLE COMPONENTS
   ─────────────────────────────────────────── */

function TOCSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-orange" />
          <span className="font-bold text-navy">Table of Contents</span>
          <span className="text-xs text-slate-400">({TOC.length} sections)</span>
        </div>
        <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-200 px-5 py-4">
          <ol className="space-y-2">
            {TOC.map((item, idx) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-orange transition-colors"
                >
                  <span className="shrink-0 text-xs font-bold text-slate-400">{idx + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-extrabold text-navy sm:text-3xl">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold text-navy">{children}</h3>;
}

function Callout({ type, children }: { type: "tip" | "warning" | "important"; children: React.ReactNode }) {
  const styles = {
    tip: { bg: "bg-green-50 border-green-200", icon: <Lightbulb className="h-5 w-5 text-green-600" />, label: "Pro Tip", labelColor: "text-green-700" },
    warning: { bg: "bg-red-50 border-red-200", icon: <AlertOctagon className="h-5 w-5 text-red-600" />, label: "Warning", labelColor: "text-red-700" },
    important: { bg: "bg-orange-50 border-orange-200", icon: <AlertTriangle className="h-5 w-5 text-orange" />, label: "Important", labelColor: "text-orange-700" },
  };
  const s = styles[type];
  return (
    <div className={`rounded-lg border ${s.bg} p-4`}>
      <div className="flex gap-3">
        <div className="shrink-0 pt-0.5">{s.icon}</div>
        <div>
          <p className={`text-xs font-bold uppercase tracking-wider ${s.labelColor}`}>{s.label}</p>
          <div className="mt-1 text-sm leading-relaxed text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-4 text-left">
        <span className="pr-4 font-medium text-navy">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm leading-relaxed text-slate-600">{a}</p>}
    </div>
  );
}

/* ───────────────────────────────────────────
   EMAIL REPORT CTA
   ─────────────────────────────────────────── */
function EmailReportCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "citation-guide" }),
      });
    } catch { /* fail silently */ }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <CheckCircle className="mx-auto h-8 w-8 text-green-500" />
        <p className="mt-2 font-bold text-green-700">You&apos;re in!</p>
        <p className="mt-1 text-sm text-green-600">Check your inbox for your citation checklist and action plan.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-orange/30 bg-orange/5 p-6">
      <div className="flex items-start gap-3">
        <Mail className="mt-1 h-6 w-6 shrink-0 text-orange" />
        <div>
          <p className="font-bold text-navy">Get the Free Citation Action Plan</p>
          <p className="mt-1 text-sm text-slate-600">
            Enter your email and we&apos;ll send you a printable checklist of all 18 priority citations,
            step-by-step claim instructions, and a NAP consistency template you can fill in.
          </p>
          <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourplumbingco.com"
              required
              className="h-9 flex-1 rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
            />
            <Button type="submit" className="bg-orange text-white hover:bg-orange-hover" size="sm">
              Send It
            </Button>
          </form>
          <p className="mt-2 text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────
   MAIN PAGE
   ─────────────────────────────────────────── */
export default function LocalCitationsGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <BookOpen className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Comprehensive Guide &middot; 25 min read
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Local Citations for Plumbers:{" "}
              <span className="text-orange">The Complete Guide</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              How to build, audit, and fix your citations to rank higher in Google&apos;s Map Pack.
              Includes the 18 most important citations for plumbing businesses, step-by-step instructions,
              and an honest breakdown of whether you need Yext (spoiler: you probably don&apos;t).
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> Updated Feb 2026</span>
              <span className="flex items-center gap-1"><FileText className="h-4 w-4" /> 4,000+ words</span>
              <span className="flex items-center gap-1"><Shield className="h-4 w-4" /> Written by a Licensed Plumber</span>
            </div>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild className="bg-orange text-white hover:bg-orange-hover">
                <Link href="/tools/citation-checker">
                  <Building2 className="mr-2 h-4 w-4" />
                  Check My Citations Free
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:border-white hover:bg-transparent hover:text-white">
                <a href="#priority-citations">
                  See Priority List
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <TOCSection />

          {/* ─── SECTION 1: WHAT ARE CITATIONS ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="what-are-citations">What Are Local Citations?</SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              A <strong className="text-navy">local citation</strong> is any online mention of your plumbing business&apos;s
              <strong className="text-navy"> Name, Address, and Phone Number (NAP)</strong>. That&apos;s it. It&apos;s that simple.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Your Google Business Profile listing? That&apos;s a citation. Your Yelp page? Citation. Your listing on YellowPages.com?
              Citation. Even a mention of your business name and phone number in a local news article — that counts too.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Google uses citations to <strong className="text-navy">verify that your business is real, legitimate, and located where you say it is</strong>.
              The more consistent citations you have across trusted websites, the more confident Google is that your business
              information is accurate — and the higher it ranks you in local search results.
            </p>
            <Callout type="tip">
              Think of citations like references on a job application. The more credible people who confirm
              the same information about you, the more trustworthy you appear. If 50 websites all show the
              same name, address, and phone number for your plumbing business, Google trusts that information
              is correct.
            </Callout>
          </div>

          {/* ─── SECTION 2: WHY CITATIONS MATTER ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="why-citations-matter">Why Citations Matter for Plumbers</SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              For plumbing businesses specifically, citations play a critical role in how you appear in <strong className="text-navy">Google&apos;s Map Pack</strong> — the
              3 local results that appear at the top of the page when someone searches &ldquo;plumber near me&rdquo; or &ldquo;emergency plumber [city].&rdquo;
            </p>

            <SubHeading>Google&apos;s 3 Local Ranking Factors</SubHeading>
            <p className="text-slate-600 leading-relaxed">Google ranks local businesses based on three factors:</p>
            <div className="space-y-3">
              {[
                { icon: MapPin, title: "Proximity", desc: "How close is the business to the searcher? (You can't control this.)" },
                { icon: Star, title: "Relevance", desc: "How well does the business match the search query? (Optimized by your GBP categories, services, and content.)" },
                { icon: TrendingUp, title: "Prominence", desc: "How well-known and trusted is the business online? (This is where citations directly help.)" },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3 rounded-lg bg-slate-50 p-4">
                  <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <p className="font-bold text-navy">{f.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-navy">Citations are a direct prominence signal.</strong> When Google sees your business
              consistently listed across hundreds of trusted websites with the exact same NAP information,
              it increases your prominence score — which directly impacts your Map Pack ranking.
            </p>

            <SubHeading>Why This Matters Even More for Plumbers</SubHeading>
            <p className="text-slate-600 leading-relaxed">
              Plumbing is a <strong className="text-navy">hyperlocal, emergency-driven business</strong>. When a homeowner has a burst pipe
              at 2 AM, they&apos;re searching on their phone and calling the first plumber they see in the Map Pack.
              You don&apos;t have time for them to scroll to page 2. Citation consistency is one of the factors
              that determines whether you&apos;re in those top 3 spots or buried below the fold.
            </p>
          </div>

          {/* ─── SECTION 3: TYPES OF CITATIONS ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="types-of-citations">Types of Citations (Structured vs Unstructured)</SectionHeading>

            <SubHeading>Structured Citations</SubHeading>
            <p className="text-slate-600 leading-relaxed">
              These are formal business listings on directories where your information appears in a consistent,
              structured format — a dedicated business profile page with fields for name, address, phone,
              website, hours, etc.
            </p>
            <p className="text-sm text-slate-500">
              <strong>Examples:</strong> Google Business Profile, Yelp, Yellow Pages, BBB, HomeAdvisor, ThePlumbingDirectory.com
            </p>

            <SubHeading>Unstructured Citations</SubHeading>
            <p className="text-slate-600 leading-relaxed">
              These are mentions of your NAP anywhere online that aren&apos;t in a formal directory listing —
              blog posts, news articles, event listings, PDF documents, social media mentions, etc.
            </p>
            <p className="text-sm text-slate-500">
              <strong>Examples:</strong> Local news article mentioning your business, a blog post reviewing your service,
              a sponsor mention on a charity event page, a local Facebook group recommendation.
            </p>

            <Callout type="important">
              Both types of citations help your SEO, but <strong>structured citations are more impactful</strong> because
              Google can clearly parse the data. Focus on getting your structured citations right first,
              then build unstructured citations through local PR, sponsorships, and community involvement.
            </Callout>
          </div>

          {/* ─── SECTION 4: NAP CONSISTENCY ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="nap-consistency">NAP Consistency: The #1 Rule</SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              If there&apos;s one thing you take away from this entire guide, let it be this:
            </p>
            <div className="rounded-xl bg-navy p-6 text-center">
              <p className="text-lg font-extrabold text-white">
                Your Name, Address, and Phone Number must be{" "}
                <span className="text-orange">exactly identical</span> everywhere online.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Not similar. Not close enough. <em>Exactly the same.</em>
              </p>
            </div>

            <SubHeading>What &ldquo;Exactly Identical&rdquo; Means</SubHeading>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-2 pr-4 text-left font-bold text-navy">Element</th>
                    <th className="py-2 pr-4 text-left font-bold text-green-700">Consistent ✓</th>
                    <th className="py-2 text-left font-bold text-red-700">Inconsistent ✗</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-medium">Business Name</td>
                    <td className="py-2 pr-4 text-green-700">ABC Plumbing LLC</td>
                    <td className="py-2 text-red-700">ABC Plumbing / ABC Plumbing Services / A.B.C. Plumbing</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-medium">Address</td>
                    <td className="py-2 pr-4 text-green-700">123 Main St, Suite 4</td>
                    <td className="py-2 text-red-700">123 Main Street, Ste 4 / 123 Main St #4</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-medium">Phone</td>
                    <td className="py-2 pr-4 text-green-700">(555) 123-4567</td>
                    <td className="py-2 text-red-700">555-123-4567 / 5551234567 / (555) 123-4568 (old #)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout type="warning">
              <strong>The #1 mistake we see:</strong> Plumbers who changed their phone number or moved their
              business but never updated their old citations. If Google finds your old phone number on 30
              websites and your new number on 20, it doesn&apos;t know which is correct — so it trusts neither.
              Use our <Link href="/tools/citation-checker" className="font-medium text-orange hover:text-orange-hover">free Citation Checker</Link> to
              find inconsistencies.
            </Callout>
          </div>

          {/* ─── SECTION 5: PRIORITY CITATIONS ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="priority-citations">The 18 Most Important Citations for Plumbers</SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              Out of 250+ directories we track, these are the ones that actually move the needle for plumbing businesses.
              They&apos;re ranked by impact on your local SEO — fix these first, in this order.
            </p>

            <div className="space-y-4">
              {PRIORITY_CITATIONS.map((c) => (
                <div key={c.rank} className="rounded-xl border border-slate-200 overflow-hidden">
                  <div className="flex items-start gap-4 p-5">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                      c.impact === "critical" ? "bg-red-500" : c.impact === "high" ? "bg-orange" : "bg-blue-500"
                    }`}>
                      {c.rank}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-navy">{c.name}</h3>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${c.categoryColor}`}>
                          {c.category}
                        </span>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-bold uppercase ${
                          c.impact === "critical" ? "bg-red-100 text-red-700" : c.impact === "high" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"
                        }`}>
                          {c.impact}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.why}</p>
                      <div className="mt-3 rounded-lg bg-slate-50 p-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">How to Claim & Optimize</p>
                        <p className="mt-1 text-sm text-slate-600">{c.tips}</p>
                      </div>
                      {c.claimUrl && (
                        <a
                          href={c.claimUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-orange hover:text-orange-hover transition-colors"
                        >
                          Claim Your Listing <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <EmailReportCTA />
          </div>

          {/* ─── SECTION 6: HOW TO BUILD & FIX ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="how-to-build">How to Build &amp; Fix Your Citations (Step-by-Step)</SectionHeading>

            <p className="text-slate-600 leading-relaxed">
              Here&apos;s the exact process to audit and fix your citations. This is the same process we use for our clients.
            </p>

            {[
              { step: 1, title: "Lock in your canonical NAP", desc: "Before you touch a single directory, decide on the EXACT version of your business name, address, and phone number you'll use everywhere. Write it down. This is your 'canonical NAP' — the single source of truth." },
              { step: 2, title: "Fix your Google Business Profile first", desc: "Your GBP is the most important citation. Make sure your NAP matches your canonical version perfectly. While you're there, fill out every field, add 20+ photos, and verify your listing if you haven't already." },
              { step: 3, title: "Submit to the 4 data aggregators", desc: "Submit your correct NAP to Data Axle, Localeze, Foursquare, and Acxiom. These feed data to hundreds of downstream directories. Fix the source and many smaller directories will self-correct over 2-4 months." },
              { step: 4, title: "Claim and fix the priority citations", desc: "Work through the priority list above (#1-18). Claim each listing, update the NAP to your canonical version, and fill out every available field. This takes 2-3 hours but has the biggest impact." },
              { step: 5, title: "Run a citation audit", desc: "Use our free Citation Checker to find additional directories where you're listed. Look for old phone numbers, wrong addresses, duplicate listings, and inconsistent business names." },
              { step: 6, title: "Clean up duplicates and errors", desc: "For each inconsistent listing you find: log in and update it, or contact the directory to request a correction. For duplicates, request removal of the old/incorrect listing." },
              { step: 7, title: "Build new citations on missing directories", desc: "After cleaning up existing listings, create new profiles on directories where you're not listed yet. Focus on plumbing-specific and home services directories first." },
              { step: 8, title: "Monitor quarterly", desc: "Run a citation audit every 3 months to catch new inconsistencies. Directories sometimes pull in wrong data from other sources, creating new errors over time." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">
                  {s.step}
                </div>
                <div className="pb-4">
                  <p className="font-bold text-navy">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ─── SECTION 7: COMMON MISTAKES ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="common-mistakes">7 Citation Mistakes Plumbers Make</SectionHeading>
            <div className="space-y-4">
              {MISTAKES.map((m, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <div>
                    <p className="font-bold text-navy">{m.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── SECTION 8: GBP VS WEBSITE ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="gbp-vs-website">GBP vs Website: Finding &amp; Fixing Mismatches</SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              The single most damaging citation issue is a <strong className="text-navy">mismatch between your Google Business Profile and your website</strong>.
              These are the two most authoritative sources of your business information, and if they disagree, Google doesn&apos;t know what to trust.
            </p>

            <SubHeading>Common GBP vs Website Mismatches</SubHeading>
            <div className="space-y-2">
              {[
                "Business name on website includes 'LLC' but GBP doesn't (or vice versa)",
                "Website shows a tracking phone number while GBP shows the main line",
                "Address uses abbreviations differently (St vs Street, Ste vs Suite)",
                "Website lists a PO Box but GBP shows a physical address",
                "Hours on the website are different from GBP hours",
                "Website shows services not listed in GBP categories",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>

            <Callout type="important">
              Our <Link href="/tools/citation-checker" className="font-medium text-orange hover:text-orange-hover">Citation Checker</Link> automatically
              extracts your NAP from your website HTML and compares it against the GBP information you provide.
              If there&apos;s a mismatch, it flags it immediately so you can fix it.
            </Callout>
          </div>

          {/* ─── SECTION 9: YEXT COMPARISON ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="yext-comparison">Do You Need Yext? (Honest Breakdown)</SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-navy">Yext</strong> is the most well-known citation management service. They charge{" "}
              <strong className="text-navy">$499/year (basic) to $999+/year (premium)</strong> to sync your business info across
              their network of 75+ directories. Let&apos;s break down whether it&apos;s worth it.
            </p>

            <SubHeading>How Yext Works</SubHeading>
            <p className="text-slate-600 leading-relaxed">
              Yext connects to directories via API and pushes your correct NAP to all of them simultaneously.
              If you change your phone number, you update it once in Yext and it propagates everywhere.
              Sounds great, right?
            </p>

            <SubHeading>The Problem With Yext</SubHeading>
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
              <p className="font-bold text-red-700 text-lg">When you stop paying Yext, all your listings revert.</p>
              <p className="mt-2 text-sm text-red-600 leading-relaxed">
                Yext doesn&apos;t actually &ldquo;fix&rdquo; your listings — it overlays correct information on top of them
                via API. The moment you cancel your subscription, directories revert to whatever data they had before.
                You&apos;re renting corrections, not buying them.
              </p>
            </div>

            <SubHeading>Yext vs Manual Fix vs Our Service</SubHeading>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="py-3 pr-4 text-left font-bold text-navy"></th>
                    <th className="py-3 pr-4 text-left font-bold text-slate-500">Yext</th>
                    <th className="py-3 pr-4 text-left font-bold text-slate-500">DIY (Manual)</th>
                    <th className="py-3 text-left font-bold text-orange">Our Service</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  {[
                    ["Cost", "$499-999/year (forever)", "Free (just your time)", "One-time fee"],
                    ["Time investment", "30 min setup", "15-25 hours", "You do nothing"],
                    ["Directories covered", "75+ (via API overlay)", "As many as you want", "250+ (manually claimed)"],
                    ["You own the listings?", "No — reverts when you cancel", "Yes — permanent", "Yes — permanent"],
                    ["Year 2 cost", "$499-999 again", "$0 (already done)", "$0 (already done)"],
                    ["5-year total cost", "$2,495 - $4,995", "$0", "One-time fee only"],
                    ["Handles duplicates?", "No", "If you find them", "Yes"],
                    ["Plumbing-specific dirs?", "No (generalist network)", "If you know them", "Yes (ThePlumbingDirectory.com + others)"],
                  ].map(([feature, yext, diy, ours]) => (
                    <tr key={feature} className="border-b border-slate-100">
                      <td className="py-2 pr-4 font-medium text-navy">{feature}</td>
                      <td className="py-2 pr-4">{yext}</td>
                      <td className="py-2 pr-4">{diy}</td>
                      <td className="py-2 font-medium text-navy">{ours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout type="tip">
              <strong>Our take:</strong> If you have more money than time and need an instant fix while you sort things out,
              Yext is fine short-term. But for a permanent solution that you own, either do it yourself using this guide
              or hire someone (like us) to do it once. You&apos;ll save thousands over the life of your business.
            </Callout>
          </div>

          {/* ─── SECTION 10: CITATION AUDIT ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="citation-audit">How to Audit Your Citations (Free)</SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              We built a free tool specifically for this. Our <strong className="text-navy">Citation Checker</strong> scans 250+
              directories, compares your website NAP against your GBP, and shows you exactly which listings
              are consistent, inconsistent, or missing — segmented by category.
            </p>
            <div className="rounded-xl bg-navy p-6 text-center">
              <Building2 className="mx-auto h-8 w-8 text-orange" />
              <p className="mt-3 text-lg font-bold text-white">Run Your Free Citation Audit</p>
              <p className="mt-2 text-sm text-slate-300">
                Enter your business info and get a full report in under 30 seconds. No email required.
              </p>
              <Button asChild className="mt-4 bg-orange text-white hover:bg-orange-hover">
                <Link href="/tools/citation-checker">
                  Check My Citations Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* ─── SECTION 11: DIY VS HIRE ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="diy-vs-hire">DIY vs Hiring Someone: What Makes Sense</SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              Here&apos;s the honest math. Building and fixing citations is not technically difficult — it&apos;s just tedious.
              The question is whether your time is better spent on plumbing jobs.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50/50 p-5">
                <h3 className="font-bold text-green-700">Do It Yourself If...</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />You enjoy this kind of detail work</li>
                  <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />You have a slow season coming up</li>
                  <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Your budget is tight right now</li>
                  <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />You want to learn the process</li>
                  <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />You have 15-25 spare hours</li>
                </ul>
              </div>
              <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-5">
                <h3 className="font-bold text-orange-700">Hire Someone If...</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />Your time is worth $50+/hour on jobs</li>
                  <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />You&apos;ve been putting this off for months</li>
                  <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />You want it done right the first time</li>
                  <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />You recently moved or changed numbers</li>
                  <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />You&apos;d rather focus on plumbing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ─── SECTION 12: OUR SERVICE ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="citation-service">Our Citation Cleanup Service</SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              Don&apos;t want to spend 20+ hours fixing citations yourself? We&apos;ll do it for you.
              <strong className="text-navy"> One-time fee. You own everything. No recurring charges.</strong>
            </p>

            <div className="rounded-xl border-2 border-orange bg-white p-6 sm:p-8">
              <div className="text-center">
                <p className="text-sm font-medium text-orange">One-Time Citation Cleanup</p>
                <p className="mt-2 text-4xl font-extrabold text-navy">Contact for Pricing</p>
                <p className="mt-1 text-sm text-slate-500">One-time fee. No monthly charges. No recurring subscriptions.</p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Full citation audit across 250+ directories",
                  "Claim & optimize all 18 priority citations",
                  "Submit to all 4 major data aggregators",
                  "Fix all NAP inconsistencies found",
                  "Remove duplicate listings",
                  "GBP vs website NAP alignment check",
                  "Plumbing-specific directory submissions (ThePlumbingDirectory.com included)",
                  "Detailed report of all changes made",
                  "90-day follow-up audit to verify propagation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button asChild size="lg" className="bg-orange text-white hover:bg-orange-hover">
                  <Link href="/book">
                    <Phone className="mr-2 h-5 w-5" />
                    Book a Call to Discuss
                  </Link>
                </Button>
                <p className="mt-3 text-xs text-slate-400">
                  Compare: Yext charges $499-999/year and you lose everything when you cancel.
                  Our one-time service pays for itself in year 1 and saves you thousands long-term.
                </p>
              </div>
            </div>
          </div>

          {/* ─── SECTION 13: FAQ ─── */}
          <div className="mt-16 space-y-6">
            <SectionHeading id="faq">Frequently Asked Questions</SectionHeading>
            <div className="rounded-xl border border-slate-200">
              {FAQ.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>

          {/* ─── FINAL CTA ─── */}
          <div className="mt-16 space-y-6">
            <div className="rounded-xl bg-navy p-8 text-center">
              <Shield className="mx-auto h-8 w-8 text-orange" />
              <h2 className="mt-4 text-xl font-bold text-white">
                Ready to Fix Your Citations?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-slate-300">
                Start with our free Citation Checker to see where you stand. Then either follow this guide
                to fix them yourself, or let us handle it with a one-time cleanup service.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button asChild className="bg-orange text-white hover:bg-orange-hover">
                  <Link href="/tools/citation-checker">
                    <Building2 className="mr-2 h-4 w-4" />
                    Check My Citations Free
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:border-white hover:bg-transparent hover:text-white">
                  <Link href="/book">
                    <Phone className="mr-2 h-4 w-4" />
                    Book a Strategy Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
