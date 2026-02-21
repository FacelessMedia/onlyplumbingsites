"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, BookOpen, BarChart3, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  { label: "SEO for Plumbers", href: "/services/seo-for-plumbers" },
  { label: "Plumbing Websites", href: "/services/plumbing-websites" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "PPC for Plumbers", href: "/services/ppc-for-plumbers" },
  { label: "Lead Generation", href: "/services/plumbing-lead-generation" },
  { label: "SEO + Social Growth", href: "/services/social-posting" },
];

const resourceLinks = [
  { label: "Free Book Download", href: "/book-download", icon: BookOpen, desc: "The Little Plumber That Could" },
  { label: "Free Growth Report", href: "/growth-report", icon: BarChart3, desc: "Your 12-month growth projection" },
  { label: "Free Website Audit", href: "/audit", icon: FileSearch, desc: "See where your site stands" },
];

const navLinks = [
  { label: "Free Strategy Session", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="Only Plumbing Sites"
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-800 transition-colors hover:text-orange"
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-orange/5 hover:text-orange"
                >
                  All Services
                </Link>
                <div className="my-1 border-t border-slate-100" />
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-orange/5 hover:text-orange"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-800 transition-colors hover:text-orange"
            >
              {link.label}
            </Link>
          ))}

          {/* Resources Dropdown */}
          <div ref={resourcesRef} className="relative">
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-800 transition-colors hover:text-orange"
            >
              Free Resources
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>
            {resourcesOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-start gap-3 px-4 py-2.5 transition-colors hover:bg-orange/5"
                  >
                    <link.icon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    <div>
                      <p className="text-sm font-medium text-navy">{link.label}</p>
                      <p className="text-xs text-slate-400">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/audit" className="text-sm font-medium text-slate-500 transition-colors hover:text-orange">
            Free Audit
          </Link>
          <Button asChild className="bg-orange text-white hover:bg-orange-hover">
            <Link href="/book">
              <Phone className="mr-2 h-4 w-4" />
              Book Strategy Call
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-navy" />
          ) : (
            <Menu className="h-6 w-6 text-navy" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {/* Mobile Services Section */}
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-800 transition-colors hover:bg-slate-50 hover:text-orange"
            >
              All Services
            </Link>
            <div className="ml-3 flex flex-col gap-0.5 border-l-2 border-orange/20 pl-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-orange"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-800 transition-colors hover:bg-slate-50 hover:text-orange"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Resources */}
            <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Free Resources
            </p>
            {resourceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-orange"
              >
                <link.icon className="h-4 w-4 text-orange" />
                {link.label}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-4">
              <Button asChild variant="outline" className="w-full border-orange text-orange hover:bg-orange hover:text-white">
                <Link href="/audit" onClick={() => setMobileOpen(false)}>
                  Get Free Audit
                </Link>
              </Button>
              <Button asChild className="w-full bg-orange text-white hover:bg-orange-hover">
                <Link href="/book" onClick={() => setMobileOpen(false)}>
                  <Phone className="mr-2 h-4 w-4" />
                  Book Strategy Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
