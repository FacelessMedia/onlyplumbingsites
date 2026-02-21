import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Calculator,
  Search,
  Star,
  ArrowRight,
  Wrench,
  DollarSign,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Plumbing Marketing Tools",
  description:
    "Free tools for plumbing business owners — website grader, ROI calculator, keyword database, and Google review link generator. No email required.",
};

const tools = [
  {
    title: "Website Grader",
    description:
      "Enter your website URL and get an instant score on how well your plumbing website is set up to generate calls.",
    href: "/website-grader",
    icon: Globe,
    tag: "Most Popular",
  },
  {
    title: "ROI Calculator",
    description:
      "See how much revenue a proper marketing system could generate based on your budget, ticket size, and close rate.",
    href: "/roi-calculator",
    icon: Calculator,
    tag: "New",
  },
  {
    title: "Plumbing Keyword Database",
    description:
      "Browse 50+ plumbing keywords with search volume estimates and competition levels. Find what homeowners actually search.",
    href: "/tools/plumbing-keywords",
    icon: Search,
    tag: null,
  },
  {
    title: "Google Review Link Generator",
    description:
      "Generate a direct link to your Google review page. Send it to customers to make leaving reviews effortless.",
    href: "/tools/review-link-generator",
    icon: Star,
    tag: null,
  },
  {
    title: "Budget Calculator",
    description:
      "Enter your monthly marketing budget and see exactly how to allocate it across SEO, PPC, social, and reviews for max ROI.",
    href: "/tools/budget-calculator",
    icon: DollarSign,
    tag: "New",
  },
  {
    title: "Citation Checker",
    description:
      "Check your NAP consistency across 250+ directories. Inconsistent citations kill your local SEO rankings.",
    href: "/tools/citation-checker",
    icon: Building2,
    tag: "New",
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Wrench className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                100% Free — No Email Required
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Free Plumbing Marketing{" "}
              <span className="text-orange">Tools</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Built by a licensed plumber for plumbing business owners. Use these
              tools to audit your marketing, find keywords, and grow your
              business.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg"
              >
                {tool.tag && (
                  <span className="absolute right-4 top-4 rounded-full bg-orange/10 px-2.5 py-0.5 text-xs font-semibold text-orange">
                    {tool.tag}
                  </span>
                )}
                <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3">
                  <tool.icon className="h-6 w-6 text-orange" />
                </div>
                <h2 className="text-lg font-bold text-navy">{tool.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {tool.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange transition-transform group-hover:translate-x-1">
                  Use Tool
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
