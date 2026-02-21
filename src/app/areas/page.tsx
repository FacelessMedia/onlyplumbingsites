import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";
import { serviceAreas } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Areas We Serve — Plumbing Marketing Nationwide",
  description:
    "Only Plumbing Sites serves plumbing companies across the United States. See the metro areas where we've built and ranked plumbing websites.",
};

type ServiceArea = (typeof serviceAreas)[number];

const stateGroups = serviceAreas.reduce<Record<string, ServiceArea[]>>(
  (acc, area) => {
    if (!acc[area.state]) acc[area.state] = [];
    acc[area.state].push(area);
    return acc;
  },
  {}
);

export default function AreasPage() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <MapPin className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Serving Plumbers Nationwide
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Areas We <span className="text-orange">Serve</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              We build and rank plumbing websites for companies across the
              country. Here are some of the metro areas where our clients
              dominate Google.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {Object.entries(stateGroups)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([state, areas]) => (
              <div key={state} className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-navy">{state}</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange/30 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 shrink-0 text-orange" />
                        <span className="text-sm font-medium text-navy">
                          {area.city}, {area.stateAbbr}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-300" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Don&apos;t See Your City?
          </h2>
          <p className="mt-4 text-slate-500">
            We serve plumbing companies in every US market. Book a free strategy
            session and we&apos;ll show you what we can do in your area.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-orange text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
          >
            <Link href="/book">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Strategy Session
            </Link>
          </Button>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
