import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  BarChart3,
  Phone,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Growth Report Requested!",
  description:
    "Your free plumbing business growth report is on its way. Here's what happens next.",
};

export default function ThankYouGrowthReportPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-navy sm:text-4xl">
            Your Growth Report Is Being Built!
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            We&apos;re pulling data on your plumbing business right now.
            Here&apos;s what happens next.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-12 space-y-6">
          <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">
              1
            </div>
            <div>
              <p className="font-bold text-navy">
                We Analyze Your Online Presence
              </p>
              <p className="mt-1 text-sm text-slate-500">
                We pull your current Google rankings, review your website, and
                analyze your top competitors in your service area.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">
              2
            </div>
            <div>
              <p className="font-bold text-navy">
                We Build Your Custom Report
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Your report includes: current rankings, competitor gaps,
                12-month growth projection, and specific recommendations.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">
              3
            </div>
            <div>
              <p className="font-bold text-navy">
                We Email You the Report
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Expect your personalized growth report within 24-48 hours.
                Check your inbox (and spam folder, just in case).
              </p>
            </div>
          </div>
        </div>

        {/* Upsell */}
        <div className="mt-10 rounded-xl bg-navy p-6 text-center sm:p-8">
          <BarChart3 className="mx-auto h-8 w-8 text-orange" />
          <h2 className="mt-4 text-xl font-bold text-white">
            Want to Walk Through Your Report Together?
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Book a free 30-minute strategy session and I&apos;ll walk you
            through every page of your report — plus give you a custom action
            plan.
          </p>
          <Button
            asChild
            className="mt-6 bg-orange text-white hover:bg-orange-hover"
          >
            <Link href="/book">
              <Phone className="mr-2 h-4 w-4" />
              Book Free Strategy Session
            </Link>
          </Button>
        </div>

        {/* While you wait */}
        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-slate-400">While you wait:</p>
          <div className="mt-3 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-download"
              className="inline-flex items-center gap-1 text-sm text-orange hover:text-orange-hover"
            >
              <BookOpen className="h-4 w-4" />
              Download our free book
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-orange hover:text-orange-hover"
            >
              <ArrowRight className="h-4 w-4" />
              Read our blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
