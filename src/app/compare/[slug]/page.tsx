import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Check, X, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { competitors } from "@/data/competitors";
import FinalCTA from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comp = competitors.find((c) => c.slug === slug);
  if (!comp) return { title: "Comparison Not Found" };
  return {
    title: `Only Plumbing Sites vs ${comp.name} — Honest Comparison`,
    description: `See how Only Plumbing Sites compares to ${comp.name}. ${comp.tagline}. Built by a licensed plumber with 250+ plumbing websites.`,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = competitors.find((c) => c.slug === slug);

  if (!comp) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Honest Comparison
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Only Plumbing Sites vs{" "}
              <span className="text-orange">{comp.name}</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">{comp.tagline}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-slate-600">
            {comp.description}
          </p>

          {/* Pros/Cons of competitor */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-green-100 bg-green-50/50 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-green-600">
                {comp.name} Strengths
              </p>
              <ul className="mt-4 space-y-2">
                {comp.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-red-500">
                {comp.name} Limitations
              </p>
              <ul className="mt-4 space-y-2">
                {comp.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Feature Comparison
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="pb-4 pr-4 text-left text-sm font-semibold text-navy">
                    Feature
                  </th>
                  <th className="pb-4 text-center text-sm font-semibold text-orange">
                    Only Plumbing Sites
                  </th>
                  <th className="pb-4 text-center text-sm font-semibold text-slate-400">
                    {comp.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comp.features.map((f, i) => (
                  <tr
                    key={f.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="py-3.5 pr-4 text-sm font-medium text-navy">
                      {f.feature}
                    </td>
                    <td className="py-3.5 text-center">
                      {f.us === true ? (
                        <Check className="mx-auto h-5 w-5 text-orange" />
                      ) : (
                        <span className="text-sm text-slate-500">
                          {String(f.us)}
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 text-center">
                      {f.them === true ? (
                        <Check className="mx-auto h-5 w-5 text-slate-400" />
                      ) : f.them === false ? (
                        <X className="mx-auto h-5 w-5 text-slate-300" />
                      ) : (
                        <span className="text-xs text-slate-400">
                          {String(f.them)}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            See the Difference for Yourself
          </h2>
          <p className="mt-4 text-slate-300">
            Book a free strategy session and I&apos;ll show you exactly what we
            can do for your plumbing business — no pressure, no contracts, just a
            real conversation with a licensed plumber.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange px-8 text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Strategy Session
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:border-white hover:bg-transparent hover:text-white"
            >
              <Link href="/why-us">
                Why Us
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
