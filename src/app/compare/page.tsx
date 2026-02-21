import { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { competitors } from "@/data/competitors";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "How We Compare — Only Plumbing Sites vs Other Agencies",
  description:
    "See honest comparisons between Only Plumbing Sites and other plumbing marketing agencies. Built by a licensed plumber with 250+ sites.",
};

export default function ComparePage() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              How We <span className="text-orange">Compare</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Honest, side-by-side comparisons with other plumbing marketing
              agencies. We let the facts speak for themselves.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {competitors.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-md"
              >
                <div>
                  <h2 className="text-lg font-bold text-navy">
                    Only Plumbing Sites vs {comp.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">{comp.tagline}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-slate-300" />
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400">
              Want a more detailed comparison for your specific situation?
            </p>
            <Button
              asChild
              className="mt-4 bg-orange text-white hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-4 w-4" />
                Book Free Strategy Session
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
