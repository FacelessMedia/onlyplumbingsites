import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MidPageCTA() {
  return (
    <section className="bg-orange/5 py-12 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange">
          You got this far...
        </p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Let&apos;s See What Your Website Is Missing
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
          Get a free, no-obligation audit of your plumbing website. I&apos;ll
          show you exactly what&apos;s costing you calls — and how to fix it.
        </p>
        <Link
          href="/call"
          className="group mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-light hover:shadow-lg"
        >
          Schedule Free Strategy Call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
