import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingTiers } from "@/data/pricing";

export default function PricingPreview() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            No hidden fees. No long-term surprises. Pick what fits your plumbing
            business.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.slug}
              className={`relative flex flex-col rounded-2xl p-8 ${
                tier.highlighted
                  ? "border-2 border-orange bg-white shadow-xl shadow-orange/10"
                  : "border border-slate-700 bg-navy-light"
              }`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange px-4 py-1 text-xs font-semibold text-white hover:bg-orange">
                  {tier.badge}
                </Badge>
              )}

              <h3
                className={`text-xl font-bold ${
                  tier.highlighted ? "text-navy" : "text-white"
                }`}
              >
                {tier.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-extrabold ${
                    tier.highlighted ? "text-navy" : "text-white"
                  }`}
                >
                  {tier.priceLabel}
                </span>
                <span
                  className={`text-sm ${
                    tier.highlighted ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {tier.priceSuffix}
                </span>
              </div>

              <p
                className={`mt-3 text-sm leading-relaxed ${
                  tier.highlighted ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {tier.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.highlighted ? "text-orange" : "text-orange"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={`mt-8 w-full font-semibold ${
                  tier.highlighted
                    ? "bg-orange text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
                    : "border border-slate-600 bg-transparent text-white hover:border-white hover:bg-white/5"
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

        {/* Bottom link */}
        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            View full pricing details & comparison &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
