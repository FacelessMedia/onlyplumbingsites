import { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  Phone,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Users,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Partner With Us — Plumbing Industry Partnerships",
  description:
    "Partner with Only Plumbing Sites. We work with plumbing suppliers, software companies, franchises, and industry organizations to help plumbing businesses grow.",
};

const partnerTypes = [
  {
    icon: Globe,
    title: "Plumbing Suppliers & Distributors",
    description:
      "We send plumbers your way for product purchases. You send plumbers our way for marketing. Mutual referrals, no cost.",
    benefits: [
      "Co-branded content opportunities",
      "Featured in our supplier recommendations",
      "Referral exchange program",
    ],
  },
  {
    icon: Users,
    title: "Plumbing Franchises & Groups",
    description:
      "We offer volume discounts for franchise groups. Every location gets a website tailored to their market — not a generic page with the city name swapped out.",
    benefits: [
      "Volume pricing for multiple locations",
      "Consistent branding across all sites",
      "Centralized reporting dashboard",
    ],
  },
  {
    icon: DollarSign,
    title: "Software & SaaS Companies",
    description:
      "If your software serves plumbing companies (dispatching, invoicing, CRM), let's create content together and cross-promote.",
    benefits: [
      "Integration partnerships",
      "Co-authored blog content",
      "Joint webinars and resources",
    ],
  },
  {
    icon: Handshake,
    title: "Industry Associations",
    description:
      "We support plumbing trade associations with educational content, member discounts, and speaking engagements.",
    benefits: [
      "Member-exclusive pricing",
      "Educational workshops",
      "Conference sponsorships",
    ],
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Handshake className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Partnership Opportunities
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s <span className="text-orange">Grow Together</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              We partner with companies and organizations that serve the plumbing
              industry. If helping plumbing businesses succeed is part of your
              mission, we should talk.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-xl border border-slate-200 p-6 transition-all hover:border-orange/30 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-orange/10 p-2.5">
                    <type.icon className="h-6 w-6 text-orange" />
                  </div>
                  <h2 className="text-lg font-bold text-navy">{type.title}</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {type.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {type.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-orange" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Interested in Partnering?
          </h2>
          <p className="mt-4 text-slate-300">
            Reach out and tell us about your company and what a partnership could
            look like. We respond to every inquiry within 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange px-8 text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us About Partnerships
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:border-white hover:bg-transparent hover:text-white"
            >
              <Link href="/referral">
                Join Our Referral Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
