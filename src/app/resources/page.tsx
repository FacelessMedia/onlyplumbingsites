import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  BarChart3,
  Globe,
  Calculator,
  Search,
  Star,
  FileText,
  ArrowRight,
  Wrench,
  BookMarked,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Resources for Plumbing Business Owners",
  description:
    "Free tools, guides, and resources to help plumbing companies grow. Website grader, ROI calculator, keyword database, glossary, and more.",
};

const sections = [
  {
    title: "Free Tools",
    items: [
      {
        title: "Website Grader",
        description: "Get an instant score on how well your plumbing website generates calls.",
        href: "/website-grader",
        icon: Globe,
      },
      {
        title: "ROI Calculator",
        description: "See projected revenue based on your marketing budget and average ticket.",
        href: "/roi-calculator",
        icon: Calculator,
      },
      {
        title: "Plumbing Keyword Database",
        description: "Browse 150+ plumbing keywords with volume, competition, and CPC data. Add your city for localized targets.",
        href: "/tools/plumbing-keywords",
        icon: Search,
      },
      {
        title: "Google Review Link Generator",
        description: "Search for your business, get your direct Google review link + SMS template + QR code.",
        href: "/tools/review-link-generator",
        icon: Star,
      },
      {
        title: "Citation Audit",
        description: "Scan your website for NAP data and get a prioritized directory checklist with deep links.",
        href: "/tools/citation-checker",
        icon: Search,
      },
      {
        title: "Budget Calculator",
        description: "See how to allocate your marketing budget across SEO, PPC, social, and reviews.",
        href: "/tools/budget-calculator",
        icon: DollarSign,
      },
    ],
  },
  {
    title: "Lead Magnets",
    items: [
      {
        title: "Free Growth Report",
        description: "Custom 12-month growth projection for your plumbing business.",
        href: "/growth-report",
        icon: BarChart3,
      },
      {
        title: "Free Book: The Little Plumber That Could",
        description: "Marketing insights and strategies for plumbing business owners.",
        href: "/book-download",
        icon: BookOpen,
      },
      {
        title: "Free Website Audit",
        description: "Get a professional review of your current plumbing website.",
        href: "/audit",
        icon: FileText,
      },
    ],
  },
  {
    title: "Learn",
    items: [
      {
        title: "Marketing Glossary",
        description: "31 marketing terms explained in plain English for plumbers.",
        href: "/glossary",
        icon: BookMarked,
      },
      {
        title: "Blog",
        description: "23+ articles on plumbing SEO, websites, and marketing strategies.",
        href: "/blog",
        icon: FileText,
      },
      {
        title: "Marketing Guides",
        description: "In-depth guides on plumbing marketing, SEO, websites, and business growth.",
        href: "/guides",
        icon: BookOpen,
      },
      {
        title: "How We Compare",
        description: "Side-by-side comparisons with other plumbing marketing agencies.",
        href: "/compare",
        icon: Wrench,
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Free <span className="text-orange">Resources</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Everything you need to understand, evaluate, and improve your
              plumbing company&apos;s online marketing — completely free.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.title} className="mb-16 last:mb-0">
              <h2 className="mb-6 text-xl font-bold text-navy">
                {section.title}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-orange/30 hover:shadow-md"
                  >
                    <div className="shrink-0 rounded-lg bg-orange/10 p-2.5">
                      <item.icon className="h-5 w-5 text-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-navy">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.description}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-orange transition-transform group-hover:translate-x-1">
                        View <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
