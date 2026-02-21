import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  services: [
    { label: "SEO for Plumbers", href: "/services/seo-for-plumbers" },
    { label: "Plumbing Websites", href: "/services/plumbing-websites" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "PPC for Plumbers", href: "/services/ppc-for-plumbers" },
    { label: "SEO + Social", href: "/services/social-posting" },
    { label: "Free Strategy Session", href: "/pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Why Us", href: "/why-us" },
    { label: "Results", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Free Book Download", href: "/book-download" },
    { label: "Free Growth Report", href: "/growth-report" },
    { label: "Free Website Audit", href: "/audit" },
    { label: "Book Strategy Session", href: "/book" },
    { label: "Marketing Glossary", href: "/glossary" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpeg"
                alt="Only Plumbing Sites"
                width={160}
                height={42}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Plumbing websites built by a licensed plumber. 250+ sites built for
              plumbing companies nationwide.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 text-orange" />
                <span>Based in Illinois. Serving plumbers nationwide.</span>
              </div>
              <a
                href="mailto:hello@onlyplumbingsites.com"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-orange" />
                <span>hello@onlyplumbingsites.com</span>
              </a>
            </div>
            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-navy-light px-3 py-1 text-xs font-medium text-slate-300">
                Licensed Plumber Since 2014
              </span>
              <a
                href="https://theplumbingdirectory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-navy-light px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:text-white"
              >
                ThePlumbingDirectory.com
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Free Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Ready to Grow?
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Book a free strategy call with a licensed plumber who builds
              plumbing websites.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-lg bg-orange px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
              >
                <Phone className="mr-2 h-4 w-4" />
                Book Strategy Call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Only Plumbing Sites. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
