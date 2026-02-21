import { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Phone,
  MapPin,
  Code2,
  Star,
  Zap,
  Shield,
  CheckCircle,
  Globe,
  TrendingUp,
  Target,
  Users,
  ArrowRight,
  Award,
  ChevronDown,
  Layers,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Plumbing Website Design — Web Design for Plumbers That Converts",
  description:
    "Custom plumbing website design built by a licensed plumber. Mobile-first, SEO-optimized websites for plumbers that generate calls. 250+ plumbing websites built nationwide.",
  keywords: [
    "plumbing web design",
    "web design for plumbers",
    "plumber website design",
    "websites for plumbers",
    "plumber website",
    "best plumbing websites",
    "plumbing website builder",
    "website design for plumbers",
  ],
};

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Over 70% of plumbing searches happen on mobile. Your site will look and work perfectly on every device — because that's where your customers are.",
  },
  {
    icon: Phone,
    title: "Emergency Click-to-Call CTAs",
    description:
      "One-tap calling from every page. Sticky phone buttons. Urgency-driven design that converts visitors into booked calls — not just pageviews.",
  },
  {
    icon: MapPin,
    title: "Service Area Page Structure",
    description:
      "Dedicated pages for every city you serve. This is how you show up when someone searches '[City] plumber' — and it's what most plumbing websites miss.",
  },
  {
    icon: Code2,
    title: "Schema Markup & Technical SEO",
    description:
      "LocalBusiness schema, service schema, FAQ schema, and proper technical setup so Google understands exactly what you do and where you do it.",
  },
  {
    icon: Star,
    title: "Review Integration",
    description:
      "Your best Google reviews displayed prominently throughout your site. Social proof that builds trust instantly and increases call conversion rates.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Load Times",
    description:
      "Built on Next.js with optimized images and clean code. Your site loads in under 2 seconds — because every second of delay costs you calls.",
  },
  {
    icon: Layers,
    title: "Service Pages That Convert",
    description:
      "Individual pages for drain cleaning, water heater repair, sewer lines, and every service you offer. Each one optimized to rank and convert for that specific search.",
  },
  {
    icon: ImageIcon,
    title: "Professional Photography Integration",
    description:
      "We showcase your trucks, team, and completed work throughout the site. Real photos build trust — stock photos kill it.",
  },
];

const stats = [
  { value: "250+", label: "Plumbing websites built" },
  { value: "<2s", label: "Average page load time" },
  { value: "70%+", label: "of plumbing searches are on mobile" },
  { value: "100%", label: "Custom — no templates" },
];

const websiteElements = [
  {
    title: "Homepage",
    desc: "Hero with your strongest value proposition, trust signals, services overview, service area map, testimonials, and a clear CTA.",
  },
  {
    title: "Service Pages",
    desc: "Individual pages for every service — drain cleaning, water heaters, sewer repair, etc. Each one is a ranking opportunity.",
  },
  {
    title: "Service Area Pages",
    desc: "Dedicated pages for every city and neighborhood you serve. This is how you win '[City] plumber' searches.",
  },
  {
    title: "About Page",
    desc: "Your story, your team, your licenses, your experience. Homeowners hire people they trust — this page builds that trust.",
  },
  {
    title: "Contact / Book Page",
    desc: "Multiple ways to reach you — phone, form, and scheduling. We make it dead simple for customers to take action.",
  },
  {
    title: "Blog / Resources",
    desc: "Fresh content that targets long-tail keywords and establishes you as the local plumbing authority. Each post is a new ranking opportunity.",
  },
];

const faqItems = [
  {
    question: "How much does a plumbing website cost?",
    answer:
      "Our plumbing websites start at $2,497 for a complete custom build. This includes design, development, copywriting, SEO setup, service area pages, and everything you need to start generating calls. We also offer monthly plans that include the website plus ongoing SEO and content. Check our pricing page for full details.",
  },
  {
    question: "How long does it take to build a plumbing website?",
    answer:
      "Most plumbing websites are launched within 2-3 weeks. We've streamlined our process after building 250+ plumbing sites — we know exactly what works and can move fast without sacrificing quality. Rush builds are available if you need it sooner.",
  },
  {
    question: "Do I own my plumbing website?",
    answer:
      "Yes, 100%. You own your domain, your content, your design, and all your data. If you ever decide to leave, we hand everything over. No hostage situations, no proprietary platforms you can't take with you.",
  },
  {
    question: "What makes a plumbing website different from a regular business website?",
    answer:
      "Plumbing customers have specific behaviors — emergency searches at odd hours, mobile-first, location-driven, and urgency-motivated. A plumbing website needs click-to-call CTAs, service area pages, emergency service highlighting, proper plumbing schema markup, and content that speaks to homeowner pain points. Generic web designers don't know these nuances.",
  },
  {
    question: "Will my plumbing website rank on Google?",
    answer:
      "Every website we build is SEO-optimized from day one — proper page structure, schema markup, fast load times, mobile optimization, and keyword-targeted content. However, ranking is a process that takes time. For faster results, we recommend pairing your website with our ongoing SEO services or PPC advertising to drive immediate traffic while SEO builds.",
  },
  {
    question: "Can you redesign my existing plumbing website?",
    answer:
      "Absolutely. We regularly rebuild plumbing websites from Wix, Squarespace, GoDaddy, and WordPress onto our modern platform. We'll preserve your existing rankings and redirects while giving you a site that actually converts visitors into calls.",
  },
  {
    question: "What platform do you build plumbing websites on?",
    answer:
      "We build on Next.js — a modern framework used by companies like Netflix, Nike, and Uber. It's faster, more secure, and better for SEO than WordPress or any website builder. Your site loads in under 2 seconds and scores 90+ on Google's PageSpeed test.",
  },
];

export default function PlumbingWebsitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                250+ Plumbing Websites Built by a Licensed Plumber
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Plumbing Web Design That{" "}
              <span className="text-orange">Generates Calls</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Not a template. Not a generic business website. A custom-built
              plumbing website designed by a licensed plumber who knows exactly what
              makes homeowners pick up the phone.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Strategy Call
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-base text-slate-300 hover:border-white hover:bg-transparent hover:text-white"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-orange sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
                Your Website Is Your 24/7 Salesperson
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  When a homeowner has a burst pipe at 2 AM, they&apos;re searching
                  on their phone. If your site doesn&apos;t load fast, look
                  professional, and make it dead simple to call you — they&apos;re
                  calling your competitor.
                </p>
                <p>
                  Most plumbing websites are built by designers who don&apos;t
                  understand plumbing. They look nice but don&apos;t convert. They
                  don&apos;t have emergency CTAs in the right places. They don&apos;t
                  have service area pages. They don&apos;t have the{" "}
                  <Link
                    href="/services/seo-for-plumbers"
                    className="font-medium text-orange underline decoration-orange/30 hover:decoration-orange"
                  >
                    SEO structure
                  </Link>{" "}
                  needed to rank.
                </p>
                <p>
                  We build plumbing websites differently — because we are plumbers.
                  Every site is built around how homeowners actually search for and
                  hire plumbing companies.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-navy">
                What the Best Plumber Websites Have in Common
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  "Mobile-first design (70%+ of searches are on phones)",
                  "Click-to-call buttons visible on every page",
                  "Individual service pages for each offering",
                  "Dedicated pages for every city/service area",
                  "Google reviews integrated for social proof",
                  "Fast load times (under 3 seconds)",
                  "Clear pricing or 'free estimate' messaging",
                  "Schema markup for rich Google results",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <p className="text-sm text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              What&apos;s Included in Every Plumbing Website
            </h2>
            <p className="mt-4 text-slate-500">
              Every website we build comes loaded with the features plumbing
              companies need to generate calls and rank on Google.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3">
                  <feature.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Structure */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Key Elements of a High-Converting Plumbing Website
            </h2>
            <p className="mt-4 text-slate-500">
              Every page on your plumbing website serves a purpose. Here&apos;s what
              we build for you.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {websiteElements.map((el, i) => (
              <div
                key={el.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <span className="text-2xl font-extrabold text-orange/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy">{el.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {el.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              How We Build Your Plumbing Website
            </h2>
            <p className="mt-4 text-slate-400">
              A proven process refined over 250+ plumbing website builds.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We learn your services, service areas, competitive advantages, and goals. We audit your current online presence.",
              },
              {
                step: "02",
                title: "Strategy & Design",
                desc: "We design your site around your market, services, and the keywords that matter most in your area.",
              },
              {
                step: "03",
                title: "Build & Optimize",
                desc: "We build every page with SEO-optimized copy, proper schema markup, fast load times, and conversion elements.",
              },
              {
                step: "04",
                title: "Launch & Grow",
                desc: "We launch your site, set up analytics, and connect it to your ongoing SEO and marketing strategy.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-700 bg-navy-light p-6"
              >
                <span className="text-3xl font-extrabold text-orange/30">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why a Plumber-Built Website */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Why Choose a Plumber to Build Your Website?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                Generic web designers build websites that look good. We build
                plumbing websites that generate calls. There&apos;s a massive
                difference.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "We know which services to feature based on margin and demand",
                  "We understand emergency vs. scheduled service page structure",
                  "We build service area pages that actually rank — not generic templates",
                  "We know what a homeowner looks for before calling a plumber",
                  "We structure CTAs around how dispatch and booking actually work",
                  "We pair every website with an SEO strategy for long-term growth",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <p className="text-slate-600">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-orange text-white hover:bg-orange-hover"
                >
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-orange/10 p-2">
                    <Award className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Licensed Plumber</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Illinois licensed since 2014. In the trade since 2009. We
                      speak your language.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-orange/10 p-2">
                    <Globe className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">250+ Sites Built</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      More plumbing websites than any boutique agency. We know
                      what works.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-orange/10 p-2">
                    <Zap className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Modern Tech Stack</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Next.js, not WordPress. Faster, more secure, and better
                      SEO performance out of the box.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-orange/10 p-2">
                    <Target className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Plumbing Only</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      We don&apos;t do HVAC. We don&apos;t do electrical. 100%
                      focused on plumbing companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Us vs Generic */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Plumber Website vs. Generic Website Builder
            </h2>
            <p className="mt-4 text-slate-500">
              Wix, Squarespace, and GoDaddy can build a website. But can they
              build a plumbing website that ranks and converts?
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 bg-navy text-center text-sm font-semibold text-white">
              <div className="p-4">Feature</div>
              <div className="border-x border-slate-700 p-4">
                Only Plumbing Sites
              </div>
              <div className="p-4">DIY / Generic</div>
            </div>
            {[
              ["Plumbing industry expertise", "Licensed plumber", "None"],
              ["Emergency CTAs", "Optimized placement", "Basic contact form"],
              ["Service area pages", "Built for each city", "One generic page"],
              ["Schema markup", "Plumbing-specific", "Basic or none"],
              ["Page speed", "Under 2 seconds", "3-8+ seconds"],
              ["SEO structure", "Built for rankings", "Afterthought"],
              ["Mobile optimization", "Plumber-tested UX", "Generic responsive"],
              ["Ongoing support", "Plumbing-focused team", "Generic helpdesk"],
            ].map(([feature, us, them]) => (
              <div
                key={feature}
                className="grid grid-cols-3 border-t border-slate-100 text-sm"
              >
                <div className="p-4 font-medium text-navy">{feature}</div>
                <div className="border-x border-slate-100 bg-orange/5 p-4 text-center font-medium text-orange">
                  {us}
                </div>
                <div className="p-4 text-center text-slate-400">{them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services (Interlinking) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Pair Your Website With These Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-500">
            A great website is the foundation. These services turn it into a
            lead-generating machine.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SEO for Plumbers",
                desc: "Rank your new website on Google for the plumbing keywords that matter in your market.",
                href: "/services/seo-for-plumbers",
                icon: TrendingUp,
              },
              {
                title: "PPC for Plumbers",
                desc: "Drive immediate calls with Google Ads while your SEO rankings build over time.",
                href: "/services/ppc-for-plumbers",
                icon: Target,
              },
              {
                title: "Social Media & GBP",
                desc: "Daily Google Business Profile and Facebook posts that keep your business visible.",
                href: "/services/social-posting",
                icon: Users,
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-lg bg-orange/10 p-2.5">
                  <service.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="font-bold text-navy">{service.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{service.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange">
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Plumber Web Design FAQ
          </h2>
          <p className="mt-4 text-center text-slate-500">
            Common questions about plumbing website design and development.
          </p>
          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-bold text-navy hover:text-orange">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Ready for a Plumbing Website That Actually Works?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Book a free strategy call with a licensed plumber who&apos;s built
            250+ plumbing websites. We&apos;ll review your current site, show you
            what&apos;s missing, and give you a clear plan for a website that
            generates calls.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Strategy Call
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-600 hover:border-orange hover:text-orange"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
