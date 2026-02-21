import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Phone,
  Shield,
  CheckCircle,
  TrendingUp,
  MapPin,
  BarChart3,
  FileText,
  Globe,
  Star,
  ArrowRight,
  Zap,
  Target,
  Users,
  Award,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "SEO for Plumbers — Plumbing SEO Services That Generate Calls",
  description:
    "Plumbing SEO services built by a licensed plumber. We rank plumbing companies on Google with proven local SEO, content strategy, and technical optimization. 250+ plumbing websites ranked.",
  keywords: [
    "plumbing seo",
    "seo for plumbers",
    "plumber seo company",
    "plumber seo services",
    "plumbing marketing agency",
    "plumbing marketing",
    "plumber marketing company",
    "plumbing seo services",
    "plumber internet marketing",
    "plumbing digital marketing",
    "plumber digital marketing agency",
    "marketing for plumbers",
    "plumber marketing services",
    "plumber seo agency",
    "plumbing company marketing",
    "how to market a plumbing business",
  ],
};

const seoServices = [
  {
    icon: MapPin,
    title: "Local SEO & Google Map Pack",
    description:
      "Dominate the Google 3-pack for every city you serve. We optimize your Google Business Profile, build local citations, and create service area pages that rank.",
  },
  {
    icon: FileText,
    title: "On-Page SEO & Content Strategy",
    description:
      "Service pages, city pages, and blog content targeting the exact keywords homeowners search when they need a plumber. Every page is built to rank and convert.",
  },
  {
    icon: Globe,
    title: "Technical SEO & Site Speed",
    description:
      "Schema markup, Core Web Vitals optimization, mobile-first indexing, XML sitemaps, and crawl optimization. The foundation that makes everything else work.",
  },
  {
    icon: TrendingUp,
    title: "Link Building & Authority",
    description:
      "Local link building from plumbing associations, suppliers, and community organizations. Real backlinks that Google trusts — not spammy directory links.",
  },
  {
    icon: Star,
    title: "Review Generation & Management",
    description:
      "Systematic review collection from happy customers. We help you build a 5-star reputation that dominates the map pack and wins clicks.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Monthly reports showing rankings, traffic, calls, and ROI. You see exactly what we're doing and exactly what it's producing. No vanity metrics.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Plumbing SEO Audit",
    description:
      "We analyze your current rankings, website structure, Google Business Profile, competitors, and local market. We find every opportunity and every problem.",
  },
  {
    step: "02",
    title: "Keyword Strategy",
    description:
      "We identify the highest-value plumbing keywords for your market — emergency services, specific repairs, service area terms, and long-tail phrases that convert.",
  },
  {
    step: "03",
    title: "On-Page Optimization",
    description:
      "We optimize every page on your site — title tags, meta descriptions, headers, content, schema markup, and internal linking. Built for both Google and homeowners.",
  },
  {
    step: "04",
    title: "Content Creation",
    description:
      "Monthly blog posts, new service area pages, and FAQ content. Each piece targets specific keywords and is written by someone who understands plumbing.",
  },
  {
    step: "05",
    title: "Off-Page SEO & Links",
    description:
      "Local citations, directory listings, supplier links, and community partnerships. We build the authority signals Google needs to rank you above competitors.",
  },
  {
    step: "06",
    title: "Track, Report, Optimize",
    description:
      "Monthly performance reviews with clear data on rankings, traffic, and calls. We adjust the strategy based on what's working and where the next opportunities are.",
  },
];

const stats = [
  { value: "250+", label: "Plumbing websites built and ranked" },
  { value: "97%", label: "of consumers search online for local services" },
  { value: "3x", label: "More calls from page 1 vs. page 2 rankings" },
  { value: "46%", label: "of all Google searches have local intent" },
];

const faqItems = [
  {
    question: "How long does plumbing SEO take to see results?",
    answer:
      "Most plumbing companies see measurable improvements in 3-4 months, with significant ranking gains by month 6. Local SEO (Google Maps) typically moves faster than organic rankings. The timeline depends on your current site authority, competition level in your market, and how aggressive we go with content and link building.",
  },
  {
    question: "How much does SEO for plumbers cost?",
    answer:
      "Our plumbing SEO services start at $997/month for local SEO and go up to $2,497/month for comprehensive campaigns including content creation, link building, and GBP management. Every plumber's market is different — we'll give you a custom quote based on your competition and goals during your free strategy call.",
  },
  {
    question: "What's the difference between SEO and PPC for plumbers?",
    answer:
      "SEO generates free organic traffic that compounds over time — the longer you do it, the more calls you get without increasing spend. PPC (Google Ads) gives you instant visibility but stops the moment you stop paying. Most successful plumbing companies use both: PPC for immediate leads while SEO builds long-term dominance. We offer both services.",
  },
  {
    question: "Do I need a new website for plumbing SEO to work?",
    answer:
      "Not always. If your current site is reasonably modern, mobile-friendly, and loads fast, we can optimize what you have. But if your site is outdated, slow, or built on a platform that limits SEO (like Wix or GoDaddy Website Builder), a new site will dramatically accelerate results. We build plumbing websites specifically designed for SEO performance.",
  },
  {
    question: "Why should I hire a plumber-owned SEO company?",
    answer:
      "Because generic marketing agencies don't understand plumbing. They don't know the difference between a sewer camera inspection and a hydro jetting service. They don't know which keywords actually generate emergency calls vs. tire-kickers. Ryan has been in the plumbing trade since 2009 — he builds SEO strategies based on real plumbing business knowledge, not guesswork.",
  },
  {
    question: "What plumbing keywords should I rank for?",
    answer:
      "The highest-value plumbing keywords combine your services with your service areas: '[City] plumber,' '[City] drain cleaning,' 'emergency plumber near me,' 'water heater repair [City].' We also target commercial intent terms, seasonal keywords, and long-tail phrases. During your audit, we'll show you exactly which keywords your competitors rank for and where your biggest opportunities are.",
  },
  {
    question: "How do you track plumbing SEO results?",
    answer:
      "We track keyword rankings (local pack and organic), Google Business Profile insights, website traffic from Google Analytics, phone calls via call tracking, form submissions, and your overall ROI. You get a clear monthly report showing exactly what moved and what we're focusing on next.",
  },
];

export default function SEOForPlumbersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Shield className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Built by a Licensed Plumber &middot; In the Trade Since 2009
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              SEO for Plumbers That Actually{" "}
              <span className="text-orange">Generates Calls</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Not vanity rankings. Not empty traffic. We build plumbing SEO
              strategies that put your phone ringing — built by a licensed plumber
              who understands your business from the inside out.
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
                <Link href="/audit">Get Free SEO Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
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

      {/* What is Plumber SEO */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
                What Is Plumbing SEO and Why Does It Matter?
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Plumbing SEO (Search Engine Optimization) is the process of
                  optimizing your plumbing company&apos;s website and online presence
                  so you show up at the top of Google when homeowners search for
                  plumbing services in your area.
                </p>
                <p>
                  When someone searches &ldquo;emergency plumber near me&rdquo; or
                  &ldquo;drain cleaning in [your city],&rdquo; SEO determines whether
                  they find you or your competitor. The plumbing companies on page 1
                  get 95% of the clicks — everyone else gets the scraps.
                </p>
                <p>
                  Unlike{" "}
                  <Link
                    href="/services/ppc-for-plumbers"
                    className="font-medium text-orange underline decoration-orange/30 hover:decoration-orange"
                  >
                    PPC advertising
                  </Link>
                  , where you pay for every click, SEO builds a compounding asset.
                  The longer you invest in plumbing SEO, the more free traffic and
                  calls you generate — without increasing your spend.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-navy">
                Plumbing SEO at a Glance
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  {
                    icon: Target,
                    text: "Target keywords homeowners actually search",
                  },
                  {
                    icon: MapPin,
                    text: "Rank in Google Maps for your service areas",
                  },
                  {
                    icon: FileText,
                    text: "Create content that converts visitors to calls",
                  },
                  {
                    icon: TrendingUp,
                    text: "Build authority Google trusts over time",
                  },
                  { icon: Zap, text: "Compound results — more traffic, same cost" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-orange/10 p-1.5">
                      <item.icon className="h-4 w-4 text-orange" />
                    </div>
                    <p className="text-sm text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Plumbers Need SEO */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Why Plumbing Companies Need SEO in 2026
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              The way homeowners find plumbers has changed. Here&apos;s why SEO is
              the #1 investment for plumbing companies that want to grow.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            {[
              {
                title: "Your competitors are already doing it",
                desc: "The plumbing companies dominating your local market aren't just lucky — they've invested in SEO. Every month you wait, they build more authority that makes it harder for you to catch up.",
              },
              {
                title: "Google is the new Yellow Pages",
                desc: "97% of consumers search online before hiring a local service provider. If you're not on page 1, you're invisible to the majority of homeowners looking for a plumber right now.",
              },
              {
                title: "SEO leads are the highest quality",
                desc: "Someone searching 'emergency plumber near me' at 11 PM has their credit card ready. SEO leads have 14.6% close rate vs. 1.7% for outbound leads. These are people actively looking for your services.",
              },
              {
                title: "It compounds over time",
                desc: "Unlike PPC where you pay for every click, SEO builds permanent assets. Blog posts, service pages, and local rankings keep generating calls months and years after they're created.",
              },
              {
                title: "Google Maps drives the most calls",
                desc: "The Google Maps 3-pack appears above organic results for virtually every 'plumber near me' search. If you're not in the map pack for your service areas, you're leaving the highest-intent leads on the table.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-orange" />
                  <div>
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Our Plumbing SEO Services
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Everything you need to dominate Google in your local market —
              managed by a team that understands plumbing.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {seoServices.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3">
                  <service.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              How Our Plumbing SEO Process Works
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              A proven 6-step process that&apos;s ranked 250+ plumbing companies on
              Google.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item) => (
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
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Authority) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Why Choose a Plumber-Owned SEO Agency?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                Most plumbing marketing agencies are owned by marketers who have
                never touched a wrench. They don&apos;t understand your business,
                your customers, or your services. We&apos;re different.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Ryan has been in the plumbing trade since 2009 — licensed Illinois plumber",
                  "We know which services generate the highest margins and should be prioritized",
                  "We understand emergency vs. scheduled service search behavior",
                  "Our content is written in a plumber's voice, not generic marketing speak",
                  "We've built and ranked 250+ plumbing websites nationwide",
                  "We only work with plumbing companies — this is all we do",
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
                      Licensed Illinois plumber. In the trade since 2009.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-orange/10 p-2">
                    <Globe className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">250+ Plumbing Sites</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      More plumbing websites built and ranked than any boutique
                      agency.
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
                      We don&apos;t do HVAC. We don&apos;t do electrical. Plumbing is
                      all we do.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-orange/10 p-2">
                    <Users className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">
                      ThePlumbingDirectory.com
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      We built the largest plumbing business directory — a data
                      asset nobody else has.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Us vs. Generic Agencies */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Plumber SEO Company vs. Generic Marketing Agency
            </h2>
            <p className="mt-4 text-slate-500">
              Not all SEO companies are created equal. Here&apos;s what makes a
              plumbing-specific agency different.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 bg-navy text-center text-sm font-semibold text-white">
              <div className="p-4">Feature</div>
              <div className="border-x border-slate-700 p-4">
                Only Plumbing Sites
              </div>
              <div className="p-4">Generic Agency</div>
            </div>
            {[
              ["Industry knowledge", "Licensed plumber", "Google it first"],
              ["Content quality", "Written by a plumber", "Generic copy"],
              [
                "Keyword strategy",
                "Plumbing-specific data",
                "One-size-fits-all",
              ],
              ["Service page structure", "Emergency + scheduled", "Template"],
              [
                "Local SEO approach",
                "Service area expertise",
                "Basic GBP setup",
              ],
              [
                "Client focus",
                "Plumbing companies only",
                "Any business that pays",
              ],
              [
                "Competitor analysis",
                "Your local plumbing market",
                "Generic competitors",
              ],
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

      {/* Internal Link: Related Services */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Complete Digital Marketing for Plumbers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-500">
            SEO is the foundation. Combine it with these services for maximum
            growth.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Plumbing Websites",
                desc: "Custom websites built to convert plumbing searches into booked calls.",
                href: "/services/plumbing-websites",
                icon: Globe,
              },
              {
                title: "PPC for Plumbers",
                desc: "Google Ads management for instant lead generation while SEO builds.",
                href: "/services/ppc-for-plumbers",
                icon: Target,
              },
              {
                title: "Social Media",
                desc: "Daily GBP and Facebook posts that keep your business visible.",
                href: "/services/social-media-for-plumbers",
                icon: Users,
              },
              {
                title: "Local SEO",
                desc: "Google Maps domination for every city in your service area.",
                href: "/services/local-seo",
                icon: MapPin,
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

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Plumbing SEO FAQ
          </h2>
          <p className="mt-4 text-center text-slate-500">
            Common questions about SEO for plumbing companies.
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

      {/* CTA Before Final */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Ready to Rank Your Plumbing Company on Google?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Book a free strategy call with a licensed plumber who&apos;s ranked 250+
            plumbing companies. We&apos;ll audit your current SEO, show you where
            the opportunities are, and give you a clear plan to dominate your
            local market.
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
              <Link href="/audit">Get Free SEO Audit</Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
