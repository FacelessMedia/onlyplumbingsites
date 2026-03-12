import Link from "next/link";
import { ArrowRight, Globe, Search, Megaphone, PhoneCall } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Website Built to Convert",
    desc: "A plumbing website designed for one thing: turning visitors into booked service calls. Click-to-call, service area pages, emergency CTAs, fast mobile experience.",
    color: "bg-orange/10 text-orange",
  },
  {
    icon: Search,
    title: "Traffic That Converts",
    desc: "Local SEO, Google Business Profile optimization, and service area content that puts you in front of homeowners actively searching for a plumber.",
    color: "bg-steel-light/10 text-steel-light",
  },
  {
    icon: Megaphone,
    title: "Follow-Up System",
    desc: "Automated text-back, email sequences, and review requests so no lead falls through the cracks and every happy customer leaves a 5-star review.",
    color: "bg-success/10 text-success",
  },
  {
    icon: PhoneCall,
    title: "Consistent Booked Jobs",
    desc: "The result: a predictable pipeline of service calls. Not vanity metrics — real phone calls from real homeowners who need a plumber.",
    color: "bg-orange/10 text-orange",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            The System
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Your Plumbing Growth Engine
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Four integrated pillars that work together to keep your phone
            ringing. Not piecemeal tactics — a complete system.
          </p>
        </div>

        {/* Visual framework — 4 connected cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="relative">
              {/* Connector arrow (desktop only) */}
              {index < pillars.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                  <ArrowRight className="h-5 w-5 text-slate-300" />
                </div>
              )}

              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                {/* Step number + icon */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${pillar.color}`}>
                    <pillar.icon className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/call"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-orange transition-colors hover:text-orange-hover"
          >
            See how this system works for your market
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
