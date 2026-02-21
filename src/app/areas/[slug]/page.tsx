import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Globe,
  TrendingUp,
  Star,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceAreas } from "@/data/service-areas";
import FinalCTA from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return { title: "Area Not Found" };
  return {
    title: `Plumbing Marketing in ${area.city}, ${area.stateAbbr} — Websites & SEO`,
    description: `Custom plumbing websites and SEO for plumbing companies in ${area.city}, ${area.state}. Built by a licensed plumber. 250+ sites ranked nationwide.`,
  };
}

const services = [
  {
    title: "Custom Plumbing Website",
    description: "Mobile-first, conversion-optimized website designed specifically for plumbing companies in your market.",
  },
  {
    title: "Local SEO & Map Pack",
    description: "Dominate Google's local 3-pack for plumbing searches in your city and surrounding service areas.",
  },
  {
    title: "Google Business Profile Optimization",
    description: "Full GBP setup and optimization — categories, services, photos, posts, and review strategy.",
  },
  {
    title: "Service Area Pages",
    description: "Dedicated pages for every city and neighborhood you serve, targeting '[service] in [location]' searches.",
  },
  {
    title: "Content & Blog Strategy",
    description: "Plumbing-focused content targeting the questions homeowners ask before they call a plumber.",
  },
  {
    title: "Google Ads Management",
    description: "Targeted PPC campaigns for emergency and high-intent plumbing keywords in your service area.",
  },
];

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Plumbing Marketing in ${area.city}, ${area.stateAbbr}`,
    description: `Custom plumbing websites and SEO services for plumbing companies in ${area.city}, ${area.state}.`,
    provider: {
      "@type": "ProfessionalService",
      name: "Only Plumbing Sites",
      url: "https://onlyplumbingsites.com",
    },
    areaServed: {
      "@type": "City",
      name: area.city,
      containedInPlace: { "@type": "State", name: area.state },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <MapPin className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                {area.city}, {area.stateAbbr}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing Marketing in{" "}
              <span className="text-orange">{area.city}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Custom plumbing websites and SEO built by a licensed plumber. We
              help plumbing companies in {area.city} dominate Google and generate
              100-200+ calls per month.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-orange px-8 text-lg font-bold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-5 w-5" />
                  Get a Free {area.city} Market Analysis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Globe className="h-5 w-5 text-orange" />
            250+ Sites Built Nationwide
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <TrendingUp className="h-5 w-5 text-orange" />
            Page 1 Rankings in 50+ Cities
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Star className="h-5 w-5 text-orange" />
            Licensed Plumber &middot; In the Trade Since 2009
          </div>
        </div>
      </section>

      {/* Why local matters */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Why {area.city} Plumbing Companies Need Specialized Marketing
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              The {area.city} plumbing market is competitive. With a metro
              population of {area.population}+, there are hundreds of plumbing
              companies fighting for the same customers. Generic marketing
              won&apos;t cut it.
            </p>
            <p>
              Homeowners in {area.city} search for plumbers differently than in
              other markets. They use specific neighborhood names, they care
              about response times, and they check Google reviews before calling.
              Your marketing needs to account for all of this.
            </p>
            <p>
              That&apos;s why we build plumbing websites and SEO strategies
              specifically for the {area.city} market — targeting the exact
              keywords your potential customers use, optimizing for the
              neighborhoods you serve, and positioning you above your local
              competitors.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What We Do for {area.city} Plumbing Companies
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <CheckCircle className="h-6 w-6 text-orange" />
                <h3 className="mt-3 font-bold text-navy">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Shield className="mx-auto h-10 w-10 text-orange" />
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Ready to Dominate the {area.city} Plumbing Market?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Book a free strategy session and I&apos;ll show you exactly where
            you rank in {area.city}, who your top competitors are, and what it
            would take to outrank them.
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
              <Link href="/growth-report">
                Get Free Growth Report
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
