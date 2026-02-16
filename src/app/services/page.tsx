import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Plumbing websites, local SEO, and social media marketing — built exclusively for plumbing companies by a licensed plumber.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Everything Your Plumbing Business Needs{" "}
              <span className="text-orange">to Grow Online</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Websites, SEO, and marketing systems built exclusively for plumbing
              companies — by someone who understands the trade.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange/10">
                    <service.icon className="h-7 w-7 text-orange" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-orange transition-colors hover:text-orange-hover"
                  >
                    Learn More About {service.title.split(" ")[0]}{" "}
                    {service.title.split(" ")[1]}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div
                  className={`rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:p-12 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-slate-200" />
                  </div>
                  <p className="mt-6 text-center text-sm text-slate-400">
                    Portfolio screenshots and examples coming soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
