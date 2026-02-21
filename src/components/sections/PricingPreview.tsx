import Link from "next/link";
import { Phone, CheckCircle, FileSearch, BarChart3, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Get a Free Custom Growth Plan for Your Plumbing Business
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Every plumbing business is different. Instead of generic pricing
              packages, we build custom strategies based on your market,
              competition, and goals. Book a free 30-minute strategy session and
              walk away with a clear action plan.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: FileSearch, text: "Full audit of your online presence" },
                { icon: BarChart3, text: "Competitor gap analysis for your market" },
                { icon: TrendingUp, text: "12-month revenue growth projection" },
                { icon: Target, text: "Custom action plan you can keep" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 shrink-0 text-orange" />
                  <span className="text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Strategy Session
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: What to Expect Card */}
          <div className="rounded-2xl border border-slate-700 bg-navy-light p-8 lg:p-10">
            <h3 className="text-xl font-bold text-white">
              What to Expect on Your Call
            </h3>
            <div className="mt-6 space-y-5">
              {[
                "We review your current website, rankings, and Google presence",
                "We show you what your top local competitors are doing",
                "We project how many calls a proper strategy could generate",
                "We give you a step-by-step plan — whether you hire us or not",
                "No pressure, no obligation — just an honest conversation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <span className="text-sm leading-relaxed text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg bg-orange/10 px-4 py-3">
              <p className="text-center text-sm font-medium text-orange">
                30 minutes &middot; Free &middot; No obligation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
