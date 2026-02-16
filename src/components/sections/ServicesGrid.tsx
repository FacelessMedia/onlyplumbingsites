import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            What We Build
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Everything your plumbing business needs to dominate online — built by
            someone who understands the trade.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-orange/30 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange/10">
                <service.icon className="h-6 w-6 text-orange" />
              </div>

              <h3 className="text-xl font-bold text-navy">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-orange transition-colors hover:text-orange-hover"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
