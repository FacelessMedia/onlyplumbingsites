import Link from "next/link";
import { Phone, FileSearch, Shield, Clock, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustStats = [
  { icon: Shield, label: "Licensed Since 2014" },
  { icon: Clock, label: "15+ Years in Plumbing" },
  { icon: Globe, label: "250+ Plumbing Websites" },
  { icon: Award, label: "Co-Owner ThePlumbingDirectory.com" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
            <Shield className="h-4 w-4 text-orange" />
            <span className="text-sm font-medium text-slate-300">
              Licensed Illinois Plumber Since 2014
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Plumbing Websites Built by a{" "}
            <span className="text-orange">Licensed Plumber.</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            250+ plumbing websites built. Systems that generate booked service
            calls — not just traffic.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="w-full bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover sm:w-auto"
            >
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Strategy Call
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-slate-600 text-base font-semibold text-slate-300 hover:border-white hover:bg-transparent hover:text-white sm:w-auto"
            >
              <Link href="/audit">
                <FileSearch className="mr-2 h-5 w-5" />
                Get Free Audit
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:mt-20 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-700/50 bg-navy-light/50 p-4 text-center"
            >
              <stat.icon className="h-5 w-5 text-orange" />
              <span className="text-sm font-medium leading-tight text-slate-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
