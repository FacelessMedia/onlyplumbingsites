"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, BookOpen, Globe } from "lucide-react";
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
  { label: "All Free Tools", href: "/tools", icon: Globe, desc: "Keyword database, review links & more" },
];

const navLinks = [
  { label: "Free Strategy Session", href: "/call" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
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
          <Button asChild className="bg-orange text-white hover:bg-orange-hover">
            <Link href="/call">
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

      {/* Mobile Menu — clean, grouped layout */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col px-4 py-4">
            {/* Primary CTA — always first */}
            <div className="mb-4 flex flex-col gap-2">
              <Button asChild className="w-full bg-orange text-white hover:bg-orange-hover">
                <Link href="/call" onClick={() => setMobileOpen(false)}>
                  <Phone className="mr-2 h-4 w-4" />
                  Book Strategy Call
                </Link>
              </Button>
            </div>

            {/* Main nav links */}
            <div className="space-y-0.5">
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-slate-800 transition-colors hover:bg-slate-50 hover:text-orange"
              >
                Services
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-800 transition-colors hover:bg-slate-50 hover:text-orange"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Resources — compact */}
            <div className="mt-4 border-t border-slate-100 pt-4">
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Free Resources
              </p>
              <div className="grid grid-cols-2 gap-1">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-orange"
                  >
                    <link.icon className="h-3.5 w-3.5 shrink-0 text-orange" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
