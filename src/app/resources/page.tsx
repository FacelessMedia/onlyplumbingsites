import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Star,
  FileText,
  ArrowRight,
  Phone,
  BookMarked,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Resources for Plumbing Business Owners",
  description:
    "Free tools, guides, and resources to help plumbing companies grow. Keyword database, citation checker, glossary, and more.",
};

const sections = [
  {
    title: "Free Tools",
    items: [
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
    ],
  },
  {
    title: "Free Offers",
    items: [
      {
        title: "Free Strategy Call",
        description: "I\u2019ll analyze your marketing, show you where you stand, and give you a custom plan to grow.",
        href: "/call",
        icon: Phone,
      },
      {
        title: "Book Waitlist: The Little Plumber That Could",
        description: "Coming soon — join the waitlist and get a free copy when it launches.",
        href: "/book-download",
        icon: BookOpen,
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
