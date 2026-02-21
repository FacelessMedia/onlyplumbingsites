import Link from "next/link";
import { Phone, Shield, Wrench, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    year: "2009",
    title: "Started in the Trade",
    description: "Began working on job sites, learning plumbing from the ground up.",
    icon: Wrench,
  },
  {
    year: "2014",
    title: "Licensed Plumber",
    description: "Earned my Illinois plumbing license. Understood the business inside and out.",
    icon: Shield,
  },
  {
    year: "2016+",
    title: "250+ Websites Built",
    description: "Started building websites for plumbing companies. Learned what converts and what doesn't.",
    icon: Globe,
  },
  {
    year: "Now",
    title: "Systems That Scale",
    description: "Combining plumbing knowledge with SEO, automation, and AI to build systems that generate calls.",
    icon: Cpu,
  },
];

export default function AuthorityStory() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      {/* Subtle grid pattern */}
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
          {/* Left: Story */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Built by Someone Who&apos;s Actually Done the Work
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              I&apos;m not a marketing agency that took on a plumbing client.
              I&apos;m a licensed plumber who learned how to build websites and
              marketing systems — because I saw what the industry was missing.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              I understand plumbing systems{" "}
              <span className="font-semibold text-orange">and</span> marketing
              systems. That&apos;s what makes this different.
            </p>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
              >
                <Link href="/about">
                  Read the Full Story
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative flex gap-4">
                  {/* Connector line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-5 top-12 h-full w-px bg-slate-700" />
                  )}

                  {/* Icon circle */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-navy-light">
                    <item.icon className="h-5 w-5 text-orange" />
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <span className="text-sm font-bold text-orange">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* License badge placeholder */}
            <div className="mt-10 rounded-xl border border-slate-700 bg-navy-light p-6 text-center">
              <Shield className="mx-auto h-10 w-10 text-orange" />
              <p className="mt-3 text-sm font-semibold text-white">
                Illinois Licensed Plumber
              </p>
              <p className="mt-1 text-xs text-slate-400">
                In the trade since 2009 &middot; Licensed 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
