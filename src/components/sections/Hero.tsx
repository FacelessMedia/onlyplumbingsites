import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Gradient orb */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Micro-label */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-orange">
            Plumbing-Only Marketing
          </p>

          {/* Headline — punchy, ServiceScalers-style */}
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            More Calls.{" "}
            <br className="hidden sm:block" />
            More Booked Jobs.{" "}
            <br className="hidden sm:block" />
            <span className="text-orange">Built by a Plumber.</span>
          </h1>

          {/* Subheadline — one line, high impact */}
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400 sm:text-xl">
            250+ plumbing websites. Systems that generate service calls — not
            just traffic.
          </p>

          {/* Single primary CTA + text link */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="w-full bg-orange px-8 text-base font-semibold text-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-hover hover:shadow-xl hover:shadow-orange/30 sm:w-auto"
            >
              <Link href="/call">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Strategy Call
              </Link>
            </Button>
            <Link
              href="/book-download"
              className="group inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              or download our free book
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Social proof nudge */}
          <p className="mt-8 text-xs text-slate-500">
            Licensed IL Plumber &middot; In the Trade Since 2009 &middot;
            Selective Clientele
          </p>
        </div>
      </div>
    </section>
  );
}
