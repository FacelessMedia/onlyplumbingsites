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
  Lock,
  Headphones,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ryan Pietrzak — licensed Illinois plumber, in the trade since 2009. 250+ plumbing websites built. This is a one-man operation, and I'm selective about who I work with.",
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
    year: "2009–2019",
    title: "The Side Hustle Years",
    description:
      "Every chance I got — lunch breaks, commutes, whenever the foreman allowed earbuds — I was listening to marketing and business YouTube playlists. I soaked up everything I could about building things online. Tried Amazon FBA, custom t-shirts, coffee mugs, dropshipping, affiliate marketing — you name it, I probably tried it. Some worked, most didn't. But every failure taught me something about marketing, sales, and building online businesses.",
    icon: Headphones,
  },
  {
    year: "2014",
    title: "Apprentice Plumbing License",
    description:
      "Earned my Illinois apprentice plumbing license. By this point I'd been on job sites for five years and understood how plumbing businesses actually run — dispatch, seasonal demand, emergency calls, customer trust.",
    icon: Shield,
  },
  {
    year: "2019",
    title: "Official Plumbing License",
    description:
      "Got my official Illinois plumbing license. A decade in the trade. But I'd also spent those years building a real understanding of digital marketing — and I finally realized something: I know plumbing AND I know websites. Why was I trying to sell random stuff online when I could combine both?",
    icon: Award,
  },
  {
    year: "2020",
    title: "The Power of Focus",
    description:
      "After years of scattered side projects, I learned the most important business lesson: focus. I stopped trying to build websites for everyone about everything. I picked the one industry I knew inside and out — plumbing — and went all in. That decision changed everything.",
    icon: Lightbulb,
  },
  {
    year: "2020",
    title: "Launched ThePlumbingDirectory.com",
    description:
      "Created ThePlumbingDirectory.com to be the all-in-one resource for everything plumbing. Want to find a plumber? It's there. Supply houses, faucet reviews, product recommendations, how-to guides, plumbing influencers, marketing help — all in one place. No selling your info to 5 different companies. No getting bombarded with calls from plumbers racing to the bottom on pricing. Just a real directory built by someone who actually knows the industry.",
    icon: Globe,
  },
  {
    year: "Now",
    title: "Only Plumbing Sites",
    description:
      "Combining 15+ years of trade experience with SEO, automation, and AI to build marketing systems for plumbing companies. This is a one-person operation — I'm intentionally selective about who I work with because I'd rather do great work for fewer clients than mediocre work for many.",
    icon: Cpu,
  },
];

const values = [
  {
    icon: Target,
    title: "Plumbing Only",
    description:
      "I don't work with HVAC companies, electricians, or landscapers. Plumbing is all I do. I still help people from church and friends with side projects, but professionally — it's plumbing or nothing.",
  },
  {
    icon: Lock,
    title: "Selective by Design",
    description:
      "I don't have a big team. I can't take every client, and I won't pretend I can. If your business needs more capacity than I can provide, I'll tell you — and point you in the right direction.",
  },
  {
    icon: Wrench,
    title: "Trade First",
    description:
      "Every decision I make comes from understanding the plumbing trade — not from marketing textbooks. I build for how plumbing businesses actually work because I've lived it.",
  },
  {
    icon: Users,
    title: "Local Market Focus",
    description:
      "I specialize in local plumbing companies. The national market is a different game. I can help national brands, but I'm honest — I wouldn't be the sole marketer on a project that big.",
  },
  {
    icon: Shield,
    title: "Honesty Over Hype",
    description:
      "I don't promise '10x your revenue.' Sometimes the best thing I can do is give you guidance and let you run with it, rather than take your money for services you don't need.",
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
              One Plumber. One Focus.{" "}
              <span className="text-orange">No Big Agency.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              I&apos;m not a marketing agency that took on a plumbing client.
              I&apos;m a licensed plumber who spent a decade learning marketing
              on job sites — and now I help plumbing companies grow online.
              Selectively.
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
                  I&apos;ve been in the plumbing trade since 2009. Got my
                  apprentice license in 2014, my official Illinois plumbing license
                  in 2019. I&apos;ve worked on everything from residential service
                  calls to large commercial projects.
                </p>
                <p>
                  The whole time I was turning wrenches, I was also teaching
                  myself marketing. Every chance I got — lunch breaks, drive time,
                  whenever the foreman let me wear earbuds — I was listening to
                  YouTube playlists about making money online. I tried everything:
                  Amazon FBA, custom t-shirts, coffee mugs, dropshipping, affiliate
                  marketing. Most of it didn&apos;t stick. But it taught me how
                  digital marketing actually works.
                </p>
                <p>
                  Then it clicked: I know plumbing. I know websites. I&apos;m an
                  extrovert who loves helping people. Why was I trying to sell
                  random stuff online when I could combine all of that? I learned
                  the power of focus — and I chose plumbing.
                </p>
                <p>
                  I also created{" "}
                  <a
                    href="https://theplumbingdirectory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-orange hover:text-orange-hover"
                  >
                    ThePlumbingDirectory.com
                  </a>{" "}
                  — an all-in-one resource for everything plumbing. Find a plumber,
                  supply houses, product reviews, how-to guides, marketing help —
                  all in one place. No selling your info to 5 companies. No getting
                  bombarded with calls from plumbers racing to the bottom on pricing.
                </p>
                <p className="font-semibold text-navy">
                  This is a one-person operation. I&apos;m intentionally selective
                  about who I work with. If I&apos;m not the right fit for your
                  business, I&apos;ll tell you — and I&apos;ll still try to point
                  you in the right direction.
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

      {/* Exclusivity callout */}
      <section className="border-y border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Lock className="mx-auto h-8 w-8 text-orange" />
          <h2 className="mt-4 text-xl font-bold text-navy">
            I Don&apos;t Take Every Client
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            I&apos;m one person, not a big agency. That means I can only work with
            a handful of plumbing companies at a time. Depending on your
            business, it might make more sense for me to give you a game plan and
            guidance rather than manage everything myself. Some companies are too
            big for a solo operation — and I&apos;d rather be honest about that
            upfront than overpromise and underdeliver. I focus on local plumbing
            companies. National brands are a different game, and while I can
            contribute to those projects, I wouldn&apos;t be the sole marketer.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 lg:py-20">
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
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            How I Operate
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
