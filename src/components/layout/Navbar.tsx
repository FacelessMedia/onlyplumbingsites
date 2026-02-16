"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-xl font-extrabold tracking-tight text-navy">
              ONLY
            </span>
            <span className="text-xl font-medium tracking-tight text-slate-500">
              PLUMBING
            </span>
            <span className="text-xl font-medium tracking-tight text-slate-500">
              SITES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-800 transition-colors hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
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
