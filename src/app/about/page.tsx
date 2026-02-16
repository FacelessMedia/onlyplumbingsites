import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Wrench,
  Globe,
  Cpu,
  Phone,
  Award,
  Users,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ryan Pietrzak — licensed Illinois plumber since 2014, in the trade since 2009. 250+ plumbing websites built. Co-owner of ThePlumbingDirectory.com.",
};

const timeline = [
  {
    year: "2009",
    title: "Started in the Plumbing Trade",
    description:
      "Began working on job sites in Illinois. Learned the trade from the ground up — residential, commercial, new construction, service work. Understood the business from the truck seat.",
    icon: Wrench,
  },
  {
    year: "2014",
    title: "Earned My Plumbing License",
    description:
      "Got my Illinois plumbing license. By this point, I understood not just how to do the work — but how plumbing businesses actually run. Dispatch, seasonal demand, emergency calls, customer trust.",
    icon: Shield,
  },
  {
    year: "2016",
    title: "Started Building Plumbing Websites",
    description:
      "Saw how bad most plumbing websites were — built by designers who never held a wrench. Started building sites for other plumbers. The results were immediate because I understood the customer journey.",
    icon: Globe,
  },
  {
    year: "2020",
    title: "Launched ThePlumbingDirectory.com",
    description:
      "Co-founded the largest plumbing business directory online. This gave me data on what homeowners actually search for and how they find plumbers — invaluable insights that inform every site I build.",
    icon: Award,
  },
  {
    year: "2024",
    title: "250+ Plumbing Websites Built",
    description:
      "Hit 250+ plumbing websites across the country. By now, I know exactly what works: which pages convert, where to place CTAs, how to structure service areas, and what makes the phone ring.",
    icon: Users,
  },
  {
    year: "Now",
    title: "Only Plumbing Sites",
    description:
      "Combining 15+ years of trade experience with SEO, automation, and AI to build complete marketing systems for plumbing companies. Not just websites — systems that generate booked service calls.",
    icon: Cpu,
  },
];

const values = [
  {
    icon: Target,
    title: "Plumbing Only",
    description:
      "We don't work with HVAC companies, electricians, or landscapers. Plumbing is all we do. That focus makes us better at it than anyone else.",
  },
  {
    icon: Wrench,
    title: "Trade First",
    description:
      "Every decision we make comes from understanding the plumbing trade — not from marketing textbooks. We build for how plumbing businesses actually work.",
  },
  {
    icon: Shield,
    title: "Proof Over Hype",
    description:
      "We don't promise '10x your revenue.' We build systems, show you the data, and let results speak. If it's not working, we'll tell you — and fix it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built by Someone Who&apos;s{" "}
              <span className="text-orange">Actually Done the Work</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              I&apos;m not a marketing agency that took on a plumbing client.
              I&apos;m a licensed plumber who learned how to build marketing
              systems — because the industry needed it.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Photo placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <Shield className="h-16 w-16 text-orange" />
                  <p className="mt-4 text-lg font-bold text-navy">
                    Ryan Pietrzak
                  </p>
                  <p className="text-sm text-slate-500">
                    Licensed Illinois Plumber
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Headshot photo coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Ryan Pietrzak
              </h2>
              <p className="mt-1 text-lg font-medium text-orange">
                Licensed Plumber &middot; Founder of Only Plumbing Sites
              </p>

              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  I&apos;ve been in the plumbing trade since 2009. I got my Illinois
                  plumbing license in 2014. I&apos;ve worked on everything from
                  residential service calls to large commercial projects.
                </p>
                <p>
                  Somewhere along the way, I realized that most plumbing companies
                  were getting screwed by their website and marketing. Designers
                  who didn&apos;t understand the business were charging thousands
                  for sites that didn&apos;t generate a single call.
                </p>
                <p>
                  So I started building plumbing websites myself. 250+ later, I
                  know exactly what converts: emergency CTAs that are impossible to
                  miss, service area pages that actually rank, and systems that
                  follow up with every lead automatically.
                </p>
                <p>
                  I also co-founded{" "}
                  <a
                    href="https://theplumbingdirectory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-orange hover:text-orange-hover"
                  >
                    ThePlumbingDirectory.com
                  </a>{" "}
                  — which gives me real data on how homeowners find and choose
                  plumbing companies.
                </p>
                <p className="font-semibold text-navy">
                  I understand plumbing systems and marketing systems. That&apos;s
                  what makes this different.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange text-white hover:bg-orange-hover"
                >
                  <Link href="/book">
                    <Phone className="mr-2 h-5 w-5" />
                    Book a Call With Ryan
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            The Journey
          </h2>

          <div className="mt-12 space-y-10">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative flex gap-6">
                {index < timeline.length - 1 && (
                  <div className="absolute left-5 top-14 h-full w-px bg-slate-200" />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-orange bg-white">
                  <item.icon className="h-5 w-5 text-orange" />
                </div>
                <div className="pb-2">
                  <span className="text-sm font-bold text-orange">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange/10">
                  <value.icon className="h-7 w-7 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
