import { Metadata } from "next";
import Link from "next/link";
import { Check, X, Phone, MessageSquare, Star, Bot, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingTiers, pricingFaq } from "@/data/pricing";
import { addOns } from "@/data/services";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for plumbing websites, local SEO, and marketing systems. No hidden fees. Pick what fits your plumbing business.",
};

const comparisonFeatures = [
  { name: "Custom Plumbing Website", tiers: [true, true, false] },
  { name: "Mobile-First Design", tiers: [true, true, false] },
  { name: "Emergency Click-to-Call CTAs", tiers: [true, true, false] },
  { name: "Service Area Pages", tiers: ["Up to 10", "Expanding monthly", false] },
  { name: "Schema Markup & Technical SEO", tiers: [true, true, false] },
  { name: "Google Business Profile Optimization", tiers: ["Guide only", true, true] },
  { name: "Monthly Blog Content", tiers: [false, "4 posts/mo", true] },
  { name: "Service Area Expansion", tiers: [false, "2 pages/mo", true] },
  { name: "Daily GBP Posts", tiers: [false, false, true] },
  { name: "Daily Facebook Posts", tiers: [false, false, true] },
  { name: "Review Integration Setup", tiers: [false, true, true] },
  { name: "Monthly Performance Reports", tiers: [false, true, true] },
  { name: "Priority Support", tiers: [false, true, false] },
  { name: "Post-Launch Support", tiers: ["30 days", "12 months", "Ongoing"] },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Pricing That Makes Sense{" "}
              <span className="text-orange">for Plumbers</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              No hidden fees. No long-term surprises. Invest in what actually
              generates plumbing calls.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.slug}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  tier.highlighted
                    ? "border-2 border-orange bg-white shadow-xl shadow-orange/10"
                    : "border border-slate-200 bg-white"
                }`}
              >
                {tier.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange px-4 py-1 text-xs font-semibold text-white hover:bg-orange">
                    {tier.badge}
                  </Badge>
                )}

                <h3 className="text-xl font-bold text-navy">{tier.name}</h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-navy">
                    {tier.priceLabel}
                  </span>
                  <span className="text-sm text-slate-500">
                    {tier.priceSuffix}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {tier.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className={`mt-8 w-full font-semibold ${
                    tier.highlighted
                      ? "bg-orange text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
                      : "bg-navy text-white hover:bg-navy-light"
                  }`}
                >
                  <Link href={tier.ctaHref}>
                    <Phone className="mr-2 h-4 w-4" />
                    {tier.cta}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Feature Comparison
          </h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-4 pr-4 text-left text-sm font-semibold text-navy">
                    Feature
                  </th>
                  {pricingTiers.map((tier) => (
                    <th
                      key={tier.slug}
                      className="pb-4 text-center text-sm font-semibold text-navy"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr
                    key={feature.name}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="py-3 pr-4 text-sm text-slate-600">
                      {feature.name}
                    </td>
                    {feature.tiers.map((value, j) => (
                      <td key={j} className="py-3 text-center">
                        {value === true ? (
                          <Check className="mx-auto h-5 w-5 text-orange" />
                        ) : value === false ? (
                          <X className="mx-auto h-5 w-5 text-slate-300" />
                        ) : (
                          <span className="text-sm font-medium text-slate-600">
                            {value}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Optional Add-Ons
            </h2>
            <p className="mt-3 text-slate-500">
              Bolt these onto any plan to supercharge your lead generation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange/10">
                  <addon.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy">{addon.title}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {addon.description}
                </p>
                <p className="mt-4 text-2xl font-bold text-navy">
                  +${addon.price}
                  <span className="text-sm font-normal text-slate-500">
                    /month
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </>
  );
}
