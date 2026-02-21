"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const labelMap: Record<string, string> = {
  services: "Services",
  "seo-for-plumbers": "SEO for Plumbers",
  "plumbing-websites": "Plumbing Websites",
  "local-seo": "Local SEO",
  "ppc-for-plumbers": "PPC for Plumbers",
  "plumbing-lead-generation": "Lead Generation",
  "social-posting": "SEO + Social Growth",
  blog: "Blog",
  about: "About",
  contact: "Contact",
  "case-studies": "Results",
  "why-us": "Why Us",
  glossary: "Glossary",
  "website-grader": "Website Grader",
  portfolio: "Portfolio",
  "roi-calculator": "ROI Calculator",
  pricing: "Strategy Session",
  book: "Book a Call",
  "book-download": "Free Book",
  "growth-report": "Growth Report",
  audit: "Free Audit",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  lp: "Landing Pages",
  "plumbing-website": "Plumbing Website",
  "thank-you": "Thank You",
  "strategy-session": "Strategy Session",
  compare: "Compare",
  guides: "Guides",
  tools: "Tools",
  areas: "Areas We Serve",
  referral: "Referral Program",
  "citation-checker": "Citation Audit",
  "review-link-generator": "Review Link Generator",
  "plumbing-keywords": "Keyword Database",
  "budget-calculator": "Budget Calculator",
  resources: "Resources",
  partners: "Partners",
  podcast: "Podcast",
  portal: "Client Portal",
  stats: "Industry Stats",
  "local-citations-for-plumbers": "Local Citations Guide",
  "best-plumbing-websites": "Best Plumbing Websites",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    label: labelMap[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    href: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://onlyplumbingsites.com" },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        item: `https://onlyplumbingsites.com${c.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-100 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-1 transition-colors hover:text-navy"
              >
                <Home className="h-3 w-3" />
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                {crumb.isLast ? (
                  <span className="font-medium text-navy">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-navy"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
