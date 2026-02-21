import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Shield,
  CheckCircle,
  TrendingUp,
  MapPin,
  BarChart3,
  Target,
  DollarSign,
  Zap,
  ArrowRight,
  ChevronDown,
  Globe,
  Users,
  MousePointerClick,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title:
    "PPC for Plumbers — Google Ads Management for Plumbing Companies",
  description:
    "PPC advertising for plumbers managed by a licensed plumber. Google Ads, Local Service Ads, and paid search campaigns that generate booked plumbing calls — not wasted clicks.",
  keywords: [
    "ppc for plumbers",
    "plumber ppc",
    "google ads for plumbers",
    "plumber google ads",
    "local service ads for plumbers",
    "plumber advertising",
    "pay per click plumber",
    "plumbing google ads management",
  ],
};

const ppcServices = [
  {
    icon: Search,
    title: "Google Search Ads",
    description:
      "Show up at the top of Google when homeowners search for plumbing services in your area. We target high-intent keywords like 'emergency plumber near me' and 'drain cleaning [city]' that convert to booked calls.",
  },
  {
    icon: MapPin,
    title: "Google Local Service Ads (LSAs)",
    description:
      "The Google Guaranteed badge at the very top of search results. Pay per lead — not per click. We set up, optimize, and manage your LSA profile to maximize lead volume at the lowest cost.",
  },
  {
    icon: Target,
    title: "Geo-Targeted Campaigns",
    description:
      "Ads that only show to homeowners in your service area. No wasted spend on clicks from cities you don't serve. We set up precise radius and zip code targeting for every campaign.",
  },
  {
    icon: MousePointerClick,
    title: "Click-to-Call Campaigns",
    description:
      "Mobile-first call ads that let homeowners tap to call you directly from the search results. No website visit needed — just a phone call from a ready-to-book customer.",
  },
  {
    icon: DollarSign,
    title: "Budget Optimization",
    description:
      "We allocate your budget to the campaigns, keywords, and times of day that generate the most booked calls per dollar. No set-it-and-forget-it — active daily management.",
  },
  {
    icon: BarChart3,
    title: "Call Tracking & ROI Reporting",
    description:
      "Every call, form submission, and booked job is tracked back to the exact keyword and ad that generated it. You see your true cost per lead and ROI every month.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Plumbing PPC Audit",
    description:
      "We analyze your market, competitors' ad spend, keyword opportunity, and current campaigns (if any). We find where the money is and where it's being wasted.",
  },
  {
    step: "02",
    title: "Campaign Build",
    description:
      "Custom campaign structure built around your services, service areas, and budget. Separate campaigns for emergency services, scheduled maintenance, and specific high-margin services.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description:
      "We launch your campaigns and actively optimize daily — adjusting bids, pausing underperforming keywords, testing ad copy, and shifting budget to what's working.",
  },
  {
    step: "04",
    title: "Scale & Report",
    description:
      "Monthly reporting showing calls, cost per lead, and ROI. As we find winning combinations, we scale budget toward them for maximum profitable growth.",
  },
];

const stats = [
  { value: "65%", label: "of high-intent searches click on paid ads" },
  { value: "$15-50", label: "Typical cost per plumbing lead from PPC" },
  { value: "24hrs", label: "from campaign launch to first calls" },
  { value: "3-8x", label: "Average ROI on plumbing PPC campaigns" },
];

const adTypes = [
  {
    title: "Google Search Ads",
    desc: "Text ads at the top of Google search results. Best for targeting specific plumbing services + locations. You pay per click.",
    best: "High-intent service searches like 'emergency plumber near me'",
  },
  {
    title: "Google Local Service Ads",
    desc: "Google Guaranteed badge at the very top of search. Pay per lead, not per click. Google verifies your license and insurance.",
    best: "Maximum visibility + trust signal. Best ROI for most plumbers.",
  },
  {
    title: "Google Display / Remarketing",
    desc: "Banner ads shown to people who've already visited your website. Keeps your plumbing company top-of-mind until they're ready to book.",
    best: "Nurturing visitors who didn't call on their first visit.",
  },
];

const faqItems = [
  {
    question: "How much should a plumber spend on Google Ads?",
    answer:
      "Most plumbing companies start with $1,500-$3,000/month in ad spend (plus management fees). The right budget depends on your market size, competition, and growth goals. In a competitive metro area you may need $5,000+/month to dominate. In a smaller market, $1,000/month can generate significant calls. We'll recommend a budget during your free strategy call based on your specific market.",
  },
  {
    question: "What's the difference between Google Ads and Local Service Ads?",
    answer:
      "Google Search Ads appear below the LSA section — you pay per click (whether they call or not). Local Service Ads appear at the very top with a Google Guaranteed badge — you pay per lead (actual phone call or message). Most plumbing companies should run both. LSAs generate the cheapest leads, while Search Ads give you more control over which keywords you target.",
  },
  {
    question: "How fast will I get calls from PPC?",
    answer:
      "Most plumbing PPC campaigns start generating calls within 24-48 hours of launch. Unlike SEO which takes months to build, PPC delivers immediate visibility and leads. The first 2-4 weeks are an optimization period where we fine-tune targeting, but you'll be getting calls from day one.",
  },
  {
    question: "What's a good cost per lead for plumbing PPC?",
    answer:
      "For Google Search Ads, $25-$75 per lead is typical for plumbing companies depending on your market. Local Service Ads tend to run $15-$50 per lead. Emergency services and high-ticket repairs (sewer lines, water heaters) can justify higher CPL because the job value is much greater. We track and optimize for the lowest possible cost per booked job — not just cost per click.",
  },
  {
    question: "Why not just run Google Ads myself?",
    answer:
      "You can, but most plumbers who self-manage waste 40-60% of their budget on irrelevant clicks, broad match keywords, and poor targeting. Google makes it easy to spend money — they don't make it easy to spend it wisely. We know which plumbing keywords convert vs. which ones are tire-kickers, how to structure campaigns for emergency vs. scheduled services, and how to optimize bids by time of day and device. The management fee typically pays for itself in reduced waste alone.",
  },
  {
    question: "Should I do PPC or SEO for my plumbing company?",
    answer:
      "Both, ideally. PPC gives you instant leads from day one. SEO builds a compounding free traffic source over 3-12 months. The smartest strategy is to run PPC for immediate revenue while investing in SEO for long-term dominance. As your SEO rankings grow, you can reduce PPC spend on keywords you rank organically for. We offer both services and can build a combined strategy.",
  },
  {
    question: "Do you offer Google Ads management without a website?",
    answer:
      "We can run click-to-call campaigns without a website, but for maximum results you need a fast, mobile-optimized landing page. We build plumbing-specific landing pages designed to convert Google Ads traffic into calls. If you don't have a website yet, check out our plumbing website design service — we can build both simultaneously.",
  },
];

export default function PPCForPlumbersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Plumbing PPC Managed by a Licensed Plumber
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              PPC for Plumbers That{" "}
              <span className="text-orange">Books Jobs</span>
              {" "}— Not Just Clicks
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Google Ads and Local Service Ads managed by someone who understands
              plumbing. We turn your ad spend into booked service calls — not
              wasted clicks on tire-kickers and DIYers.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Strategy Call
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-base text-slate-300 hover:border-white hover:bg-transparent hover:text-white"
              >
                <Link href="/pricing">Book Free Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-orange sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Plumbing PPC */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
                What Is PPC for Plumbers?
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  PPC (Pay-Per-Click) advertising puts your plumbing company at the
                  top of Google the moment a homeowner searches for plumbing services.
                  Unlike{" "}
                  <Link
                    href="/services/seo-for-plumbers"
                    className="font-medium text-orange underline decoration-orange/30 hover:decoration-orange"
                  >
                    SEO
                  </Link>
                  , which takes months to build, PPC delivers calls from day one.
                </p>
                <p>
                  The problem? Most plumbing companies waste 40-60% of their Google
                  Ads budget on irrelevant clicks. Keywords like &ldquo;plumbing
                  jobs&rdquo; (job seekers), &ldquo;plumbing code&rdquo; (DIYers), and
                  broad match terms eat your budget without generating a single call.
                </p>
                <p>
                  We manage plumbing PPC differently because we know which keywords
                  actually lead to booked jobs. A licensed plumber managing your ads
                  means every dollar is targeted at homeowners who need a plumber right
                  now.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-navy">
                PPC vs. SEO for Plumbers
              </h3>
              <div className="mt-6 space-y-5">
                {[
                  {
                    label: "PPC (Google Ads)",
                    points: [
                      "Calls within 24 hours",
                      "Pay per click/lead",
                      "Stop paying = stop showing",
                      "Full keyword control",
                    ],
                  },
                  {
                    label: "SEO (Organic Rankings)",
                    points: [
                      "Results in 3-6 months",
                      "Free traffic once ranked",
                      "Compounds over time",
                      "Builds permanent authority",
                    ],
                  },
                ].map((group) => (
                  <div key={group.label}>
                    <p className="font-bold text-navy">{group.label}</p>
                    <ul className="mt-2 space-y-1.5">
                      {group.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p className="text-sm font-medium text-slate-500">
                  Best strategy: Run both.{" "}
                  <Link
                    href="/services/seo-for-plumbers"
                    className="text-orange hover:underline"
                  >
                    Learn about our SEO services →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Ads */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Types of Google Ads for Plumbers
            </h2>
            <p className="mt-4 text-slate-500">
              Different ad types serve different goals. We build campaigns using
              the right mix for your market and budget.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {adTypes.map((ad) => (
              <div
                key={ad.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-navy">{ad.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {ad.desc}
                </p>
                <div className="mt-4 rounded-lg bg-orange/5 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                    Best for
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{ad.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              What&apos;s Included in Our Plumbing PPC Services
            </h2>
            <p className="mt-4 text-slate-500">
              End-to-end Google Ads management for plumbing companies.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ppcServices.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3">
                  <service.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Benefits of PPC for Plumbing Companies
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {[
              {
                title: "Instant visibility — calls from day one",
                desc: "No waiting 6 months for SEO to kick in. Your ads go live and the phone starts ringing immediately.",
              },
              {
                title: "Only pay when someone takes action",
                desc: "With Search Ads you pay per click. With LSAs you pay per lead. You never pay for impressions that don't convert.",
              },
              {
                title: "Target exactly who you want",
                desc: "Specific services, specific cities, specific times of day. Show ads only to homeowners in your service area searching for what you do.",
              },
              {
                title: "Measurable ROI on every dollar",
                desc: "Every call and lead is tracked back to the exact keyword and ad. You know exactly what your cost per booked job is.",
              },
              {
                title: "Scale up or down instantly",
                desc: "Slow season? Reduce budget. Ready to grow? Increase it. PPC gives you complete control over your lead flow.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-orange" />
                  <div>
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              How We Launch Your Plumbing PPC Campaign
            </h2>
            <p className="mt-4 text-slate-400">
              A proven 4-step process that turns ad spend into booked jobs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-700 bg-navy-light p-6"
              >
                <span className="text-3xl font-extrabold text-orange/30">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drawbacks / Honesty Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            The Honest Truth About PPC for Plumbers
          </h2>
          <p className="mt-4 text-center text-slate-500">
            PPC isn&apos;t perfect. Here&apos;s what you should know before
            investing.
          </p>
          <div className="mt-10 space-y-6">
            {[
              {
                title: "It costs money every month",
                desc: "Unlike SEO where rankings are 'free' once earned, PPC requires ongoing ad spend. Stop paying, stop showing. That's why we recommend building SEO alongside PPC.",
              },
              {
                title: "Competition drives up costs",
                desc: "In competitive metro areas, plumbing keywords can cost $20-50+ per click. Proper management and negative keyword lists are essential to avoid waste.",
              },
              {
                title: "Bad management burns budget fast",
                desc: "Self-managed or poorly managed Google Ads accounts routinely waste 40-60% of budget. This is why plumbing-specific expertise matters.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="mt-1 rounded-lg bg-slate-100 p-2">
                  <Zap className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-orange/20 bg-orange/5 p-6 text-center">
            <p className="font-medium text-navy">
              The best plumbing marketing strategy combines PPC for immediate leads
              with{" "}
              <Link
                href="/services/seo-for-plumbers"
                className="text-orange underline decoration-orange/30 hover:decoration-orange"
              >
                SEO for long-term growth
              </Link>
              . As your organic rankings improve, you reduce ad spend on keywords you
              rank for naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services (Interlinking) */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Pair PPC With These Services for Maximum ROI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-500">
            PPC drives instant calls. These services multiply the impact.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "SEO for Plumbers",
                desc: "Build free organic traffic that compounds while PPC drives immediate calls.",
                href: "/services/seo-for-plumbers",
                icon: TrendingUp,
              },
              {
                title: "Plumbing Websites",
                desc: "A fast, conversion-optimized landing page is critical for PPC success.",
                href: "/services/plumbing-websites",
                icon: Globe,
              },
              {
                title: "Local SEO",
                desc: "Dominate the map pack alongside your paid ads for maximum visibility.",
                href: "/services/local-seo",
                icon: MapPin,
              },
              {
                title: "Social Media",
                desc: "Retarget ad visitors on Facebook and keep your brand visible between searches.",
                href: "/services/social-posting",
                icon: Users,
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-lg bg-orange/10 p-2.5">
                  <service.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="font-bold text-navy">{service.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{service.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange">
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Plumbing PPC & Google Ads FAQ
          </h2>
          <p className="mt-4 text-center text-slate-500">
            Common questions about pay-per-click advertising for plumbing
            companies.
          </p>
          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-bold text-navy hover:text-orange">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Ready to Generate Plumbing Calls With Google Ads?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Book a free strategy call. We&apos;ll analyze your market, estimate
            your cost per lead, and build a PPC plan that fits your budget and
            growth goals.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Strategy Call
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-600 hover:border-orange hover:text-orange"
            >
              <Link href="/pricing">Book Free Strategy Session</Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
