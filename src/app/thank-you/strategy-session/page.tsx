import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Calendar,
  Video,
  FileText,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Strategy Session Booked!",
  description: "Your free strategy session is confirmed. Here's how to prepare.",
};

const prepChecklist = [
  "Have your current website URL ready (if you have one)",
  "Know which cities/areas you serve",
  "Think about your biggest marketing challenge",
  "Have a rough idea of your monthly marketing budget",
  "Be near a computer so we can screen-share",
];

export default function ThankYouStrategyPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-navy sm:text-4xl">
            You&apos;re All Set!
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Your free strategy session is booked. Check your email for the
            calendar invite and Zoom link.
          </p>
        </div>

        {/* What to expect */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-navy">
            What to Expect on Our Call
          </h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Video className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <div>
                <p className="font-medium text-navy">30-Minute Zoom Call</p>
                <p className="text-sm text-slate-500">
                  We&apos;ll meet on Zoom so I can share my screen and show you
                  your online presence in real-time.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <div>
                <p className="font-medium text-navy">
                  Live Audit of Your Online Presence
                </p>
                <p className="text-sm text-slate-500">
                  I&apos;ll pull up your Google rankings, website, and
                  competitors — and show you exactly where you stand.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <div>
                <p className="font-medium text-navy">
                  Custom Action Plan
                </p>
                <p className="text-sm text-slate-500">
                  You&apos;ll leave with 3 specific things you can do
                  immediately to start getting more calls — whether you work
                  with us or not.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prep checklist */}
        <div className="mt-8 rounded-xl border border-orange/20 bg-orange/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-navy">
            Prepare for Your Call
          </h2>
          <ul className="mt-4 space-y-3">
            {prepChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <span className="text-sm text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* While you wait */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-navy">While You Wait</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Link
              href="/book-download"
              className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 transition-colors hover:border-orange/30 hover:bg-orange/5"
            >
              <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <div>
                <p className="font-medium text-navy">Read Our Free Book</p>
                <p className="text-xs text-slate-500">
                  &ldquo;The Little Plumber That Could&rdquo; — marketing
                  insights for plumbing business owners.
                </p>
              </div>
            </Link>
            <Link
              href="/blog"
              className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 transition-colors hover:border-orange/30 hover:bg-orange/5"
            >
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <div>
                <p className="font-medium text-navy">Browse Our Blog</p>
                <p className="text-xs text-slate-500">
                  23 articles on plumbing SEO, websites, and marketing
                  strategies.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
