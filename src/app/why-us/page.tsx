import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Check,
  X,
  Shield,
  Wrench,
  Globe,
  Users,
  Clock,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Why Only Plumbing Sites — How We Compare to Other Plumbing Marketing Agencies",
  description:
    "See how Only Plumbing Sites compares to Scorpion, Plumbing Webmasters, Hook Agency, and other plumbing marketing companies. Built by a licensed plumber.",
};

const comparisonPoints = [
  {
    feature: "Built by a licensed plumber",
    us: true,
    them: false,
    note: "We understand the business from the truck seat — not just a marketing textbook.",
  },
  {
    feature: "Understands plumbing customer journey",
    us: true,
    them: false,
    note: "We know why a homeowner with a burst pipe at 2 AM behaves differently than someone shopping for a water heater.",
  },
  {
    feature: "Website tailored to your plumbing business",
    us: true,
    them: "Varies",
    note: "We use proven conversion frameworks built specifically for plumbing companies, then customize everything for your market, services, and brand.",
  },
  {
    feature: "Owns your website (you keep it if you leave)",
    us: true,
    them: false,
    note: "Most agencies hold your website hostage. We build it, you own it. Period.",
  },
  {
    feature: "No long-term contracts",
    us: true,
    them: false,
    note: "We earn your business every month. No 12-month minimums.",
  },
  {
    feature: "Direct access to the person building your site",
    us: true,
    them: false,
    note: "No account managers acting as middlemen. You talk directly to the person doing the work.",
  },
  {
    feature: "Plumbing-specific SEO strategy",
    us: true,
    them: "Varies",
    note: "We target the exact keywords homeowners use to find plumbers — not generic marketing terms.",
  },
  {
    feature: "Service area page strategy",
    us: true,
    them: "Varies",
    note: "We build dedicated pages for every city you serve. Most agencies create one page and call it done.",
  },
  {
    feature: "Transparent reporting",
    us: true,
    them: "Varies",
    note: "You see exactly where your money goes and what results it generates. No vanity metrics.",
  },
  {
    feature: "Works exclusively with plumbers",
    us: true,
    them: false,
    note: "We don't split attention between plumbers, HVAC, electricians, and dentists. Plumbing is all we do.",
  },
];

const agencyProblems = [
  {
    icon: AlertTriangle,
    title: "They Don't Understand Plumbing",
    description:
      "Most marketing agencies treat plumbing like any other home service. They don't understand emergency vs. scheduled work, seasonal demand, or why a drain cleaning lead is worth less than a repipe lead.",
  },
  {
    icon: Users,
    title: "You're One of 500 Clients",
    description:
      "Large agencies manage hundreds of clients with junior account managers. Your $2K/month gets divided across a dozen people who each spend 20 minutes on your account.",
  },
  {
    icon: Clock,
    title: "12-Month Contracts, 3-Month Results",
    description:
      "They lock you into a year-long contract, spend the first 3 months 'setting up,' and by month 6 you're still waiting for calls. By month 12 they blame the market.",
  },
  {
    icon: Globe,
    title: "Template Websites That All Look the Same",
    description:
      "Your 'custom' website is the same template they use for 50 other plumbers. Different logo, same layout, same stock photos, same zero personality.",
  },
];

const competitors = [
  {
    name: "Large National Agencies (Scorpion, iLocal, etc.)",
    pros: ["Big team", "Established brand"],
    cons: [
      "You're a number, not a partner",
      "Generic websites recycled across industries",
      "12+ month contracts",
      "Account managers who've never held a wrench",
      "$3,000-$10,000/month minimums",
    ],
  },
  {
    name: "Plumbing-Specific Agencies (Plumbing Webmasters, Hook, etc.)",
    pros: ["Industry knowledge", "Plumbing focus"],
    cons: [
      "Still not built by an actual plumber",
      "Often template-based",
      "May not own your website",
      "Long-term contracts common",
    ],
  },
  {
    name: "Freelancers / Your Nephew",
    pros: ["Cheap", "Quick turnaround"],
    cons: [
      "No plumbing industry knowledge",
      "No SEO strategy",
      "No conversion optimization",
      "Disappears when you need changes",
      "Website that looks good but doesn't generate calls",
    ],
  },
  {
    name: "DIY (Wix, Squarespace, GoDaddy)",
    pros: ["Low cost", "Full control"],
    cons: [
      "No SEO foundation",
      "Generic templates not built for plumbing",
      "Time you spend on marketing = time away from plumbing",
      "Missing critical conversion elements",
      "No local SEO strategy",
    ],
  },
];

export default function WhyUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Wrench className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                The Only Marketing Agency Run by a Licensed Plumber
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why Plumbers Choose Us{" "}
              <span className="text-orange">Over Every Other Agency</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Tired of agencies that don&apos;t understand your business? We&apos;re
              the only plumbing marketing company built by a licensed plumber
              who&apos;s actually been in the trade since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem With Other Agencies */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            The Problem With Most Plumbing Marketing Agencies
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {agencyProblems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-xl border border-red-100 bg-red-50/50 p-6"
              >
                <problem.icon className="h-6 w-6 text-red-400" />
                <h3 className="mt-3 text-lg font-bold text-navy">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            How We Compare
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="pb-4 pr-4 text-left text-sm font-semibold text-navy">
                    Feature
                  </th>
                  <th className="pb-4 text-center text-sm font-semibold text-orange">
                    Only Plumbing Sites
                  </th>
                  <th className="pb-4 text-center text-sm font-semibold text-slate-400">
                    Other Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point, i) => (
                  <tr
                    key={point.feature}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="py-4 pr-4">
                      <p className="text-sm font-medium text-navy">
                        {point.feature}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        {point.note}
                      </p>
                    </td>
                    <td className="py-4 text-center">
                      {point.us === true ? (
                        <Check className="mx-auto h-5 w-5 text-orange" />
                      ) : (
                        <span className="text-sm text-slate-500">
                          {String(point.us)}
                        </span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {point.them === false ? (
                        <X className="mx-auto h-5 w-5 text-slate-300" />
                      ) : (
                        <span className="text-xs text-slate-400">
                          {String(point.them)}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Competitor Breakdown */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Your Options (And Why Most Fall Short)
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {competitors.map((comp) => (
              <div
                key={comp.name}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-navy">{comp.name}</h3>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-600">
                      Pros
                    </p>
                    {comp.pros.map((pro) => (
                      <p key={pro} className="flex items-start gap-1.5 text-xs text-slate-500">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-green-400" />
                        {pro}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-red-500">
                      Cons
                    </p>
                    {comp.cons.map((con) => (
                      <p key={con} className="flex items-start gap-1.5 text-xs text-slate-500">
                        <X className="mt-0.5 h-3 w-3 shrink-0 text-red-300" />
                        {con}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ryan */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange/10">
              <Shield className="h-10 w-10 text-orange" />
            </div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Why Ryan Pietrzak Is Different
            </h2>
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              I&apos;ve been in the plumbing trade since <strong>2009</strong>.
              Licensed in Illinois since <strong>2014</strong>. I&apos;ve dispatched
              trucks, run service calls, dealt with after-hours emergencies, and
              built a plumbing business from the ground up.
            </p>
            <p>
              When I started building websites for plumbers, the results were
              immediate — because I understood the customer journey that no
              agency could. I know why a homeowner with a slab leak searches
              differently than someone who needs a faucet installed. I know that
              &ldquo;emergency plumber&rdquo; traffic converts 10x better than
              &ldquo;plumbing company.&rdquo;
            </p>
            <p>
              <strong>250+ plumbing websites later</strong>, I can tell you that
              most plumbing marketing fails for one reason: the person building
              it has never been in the trade. They don&apos;t understand the
              urgency, the seasonality, or the trust signals that make a
              homeowner pick up the phone.
            </p>
            <p>
              That&apos;s why I built Only Plumbing Sites. One niche. One focus.
              Plumbing companies that want to grow.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Strategy Session
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
