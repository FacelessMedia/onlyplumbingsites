import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Plumbing Marketing Glossary — Terms Every Plumber Should Know",
  description:
    "A plain-English glossary of digital marketing terms for plumbing business owners. SEO, PPC, CTR, CPC, and more — explained without the jargon.",
};

const glossaryTerms = [
  {
    term: "SEO (Search Engine Optimization)",
    definition:
      "The process of optimizing your website to rank higher in Google search results. For plumbers, this means showing up when homeowners search 'plumber near me' or 'water heater repair [city].'",
    related: "/services/seo-for-plumbers",
  },
  {
    term: "Local SEO",
    definition:
      "A subset of SEO focused on ranking in location-based searches and the Google Map Pack. Critical for plumbers since nearly all your customers are local.",
    related: "/services/local-seo",
  },
  {
    term: "Google Business Profile (GBP)",
    definition:
      "Your free business listing on Google (formerly Google My Business). It powers your appearance in Google Maps and the Map Pack — the 3-pack of local businesses that shows above organic results.",
    related: "/services/local-seo",
  },
  {
    term: "Map Pack (Local 3-Pack)",
    definition:
      "The top 3 local business results shown on Google Maps when someone searches for a service. For plumbers, appearing in the Map Pack can generate 30-50% of all your inbound calls.",
    related: "/services/local-seo",
  },
  {
    term: "PPC (Pay-Per-Click)",
    definition:
      "Online advertising where you pay each time someone clicks your ad. Google Ads is the most common PPC platform for plumbers. You bid on keywords and pay per click.",
    related: "/services/ppc-for-plumbers",
  },
  {
    term: "Google Ads (formerly AdWords)",
    definition:
      "Google's advertising platform. Plumbing companies use it to show ads at the top of search results for keywords like 'emergency plumber' or 'drain cleaning near me.'",
    related: "/services/ppc-for-plumbers",
  },
  {
    term: "Google Local Service Ads (LSAs)",
    definition:
      "Google's 'Google Guaranteed' ads that appear above regular search ads. You pay per lead (not per click), and they show your reviews, hours, and a 'Google Guaranteed' badge.",
    related: "/services/ppc-for-plumbers",
  },
  {
    term: "CPC (Cost Per Click)",
    definition:
      "How much you pay each time someone clicks your ad. For plumbing keywords, CPCs typically range from $5-$50+ depending on the service and location.",
    related: "/services/ppc-for-plumbers",
  },
  {
    term: "CTR (Click-Through Rate)",
    definition:
      "The percentage of people who see your listing or ad and actually click on it. A 3-5% CTR is average for plumbing ads; 5-10% is good.",
  },
  {
    term: "Conversion Rate",
    definition:
      "The percentage of website visitors who take a desired action (call, form fill, booking). A good plumbing website converts 5-15% of visitors into calls.",
  },
  {
    term: "CTA (Call to Action)",
    definition:
      "A button or link that tells visitors what to do next — 'Call Now,' 'Book Online,' 'Get Free Estimate.' Strong CTAs are the difference between a website that generates calls and one that doesn't.",
  },
  {
    term: "Landing Page",
    definition:
      "A standalone page designed for a single purpose — usually to capture a lead or drive a phone call. Used in advertising campaigns where you send paid traffic to a focused page.",
  },
  {
    term: "Service Area Pages",
    definition:
      "Individual pages on your website for each city or area you serve. Example: 'Plumber in Springfield, IL.' Critical for ranking in multiple cities.",
    related: "/blog/service-area-pages-seo-strategy-plumbers",
  },
  {
    term: "Keywords",
    definition:
      "The words and phrases people type into Google. For plumbers, important keywords include 'plumber near me,' 'water heater repair,' 'emergency plumber [city],' etc.",
    related: "/blog/plumber-keywords",
  },
  {
    term: "Long-Tail Keywords",
    definition:
      "Longer, more specific search phrases like 'tankless water heater installation cost in [city].' They have lower volume but higher conversion rates because the searcher has clear intent.",
    related: "/blog/plumber-keywords",
  },
  {
    term: "Organic Traffic",
    definition:
      "Visitors who find your website through unpaid search results (not ads). Organic traffic is 'free' but requires SEO investment to achieve.",
  },
  {
    term: "Backlinks",
    definition:
      "Links from other websites pointing to yours. Google treats these as 'votes of confidence.' More quality backlinks = higher rankings.",
  },
  {
    term: "Domain Authority (DA)",
    definition:
      "A score (1-100) that predicts how well a website will rank on Google. New plumbing websites typically start at DA 1-5; established ones reach DA 20-40+.",
  },
  {
    term: "NAP (Name, Address, Phone)",
    definition:
      "Your business name, address, and phone number. Consistency of NAP across all online directories is critical for local SEO rankings.",
  },
  {
    term: "Citations",
    definition:
      "Mentions of your business name, address, and phone number on other websites (Yelp, BBB, Angi, etc.). Consistent citations improve your local SEO rankings.",
  },
  {
    term: "Schema Markup (Structured Data)",
    definition:
      "Code added to your website that helps Google understand your content. For plumbers, this includes business type, services offered, service area, reviews, and operating hours.",
  },
  {
    term: "Core Web Vitals",
    definition:
      "Google's metrics for measuring website user experience — loading speed (LCP), interactivity (INP), and visual stability (CLS). Poor scores can hurt rankings.",
  },
  {
    term: "Bounce Rate",
    definition:
      "The percentage of visitors who leave your site after viewing only one page. A high bounce rate (70%+) usually means your site isn't relevant or isn't loading fast enough.",
  },
  {
    term: "Retargeting / Remarketing",
    definition:
      "Showing ads to people who already visited your website. If someone checked your 'drain cleaning' page but didn't call, you can show them ads later reminding them.",
  },
  {
    term: "Impression",
    definition:
      "One view of your ad or search listing. If your Google listing appears in 1,000 searches, that's 1,000 impressions — regardless of whether anyone clicked.",
  },
  {
    term: "ROI (Return on Investment)",
    definition:
      "How much revenue you earn compared to what you spend. If you spend $2,000/month on marketing and generate $20,000 in new jobs, your ROI is 10x.",
  },
  {
    term: "Lead Magnet",
    definition:
      "A free resource offered in exchange for contact information. Examples: free website audit, plumbing business growth report, downloadable guide.",
  },
  {
    term: "CRM (Customer Relationship Management)",
    definition:
      "Software that manages your leads and customer interactions. GoHighLevel, ServiceTitan, and Housecall Pro are popular CRMs for plumbing companies.",
  },
  {
    term: "Responsive Design",
    definition:
      "A website that automatically adjusts its layout for different screen sizes (phone, tablet, desktop). Over 60% of plumbing searches happen on mobile — responsive design is non-negotiable.",
  },
  {
    term: "Above the Fold",
    definition:
      "The content visitors see before scrolling. For plumbing websites, your phone number, main CTA, and value proposition should all be above the fold.",
  },
  {
    term: "A/B Testing",
    definition:
      "Running two versions of a page or ad to see which performs better. Example: testing 'Call Now' vs 'Book Online' to see which CTA generates more calls.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing Marketing{" "}
              <span className="text-orange">Glossary</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              {glossaryTerms.length} marketing terms explained in plain English — no
              jargon, no fluff. Built for plumbing business owners who want to
              understand what their marketing agency is (or should be) doing.
            </p>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {glossaryTerms.map((item) => (
              <div
                key={item.term}
                id={item.term
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/-+$/, "")}
                className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/20 hover:shadow-sm"
              >
                <h2 className="text-lg font-bold text-navy">{item.term}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.definition}
                </p>
                {item.related && (
                  <Link
                    href={item.related}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange hover:text-orange-hover"
                  >
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
