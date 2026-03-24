import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  BookOpen,
  Phone,
  Share2,
  ArrowRight,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "You're on the Waitlist!",
  description:
    "You're on the waitlist for 'The Little Plumber That Couldn't.' We'll send you a free copy as soon as it launches.",
};

const chapters = [
  "Ch 1: \"I Get Enough Work From Word of Mouth\"",
  "Ch 2: \"My Nephew Built My Website\"",
  "Ch 3: \"I Tried Google Ads Once\"",
  "Ch 4: \"My Competitor Has 300 Reviews\"",
];

export default function ThankYouBookPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-navy sm:text-4xl">
            You&apos;re on the Waitlist!
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            We&apos;ll email you a free copy of &ldquo;The Little Plumber
            That Could<s>n&apos;t</s>&rdquo; the moment it launches.
          </p>
        </div>

        {/* Chapter preview */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-navy">
            <BookOpen className="h-5 w-5 text-orange" />
            Start With These Chapters
          </h2>
          <ul className="mt-4 space-y-3">
            {chapters.map((ch) => (
              <li
                key={ch}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-orange" />
                {ch}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            8 chapters total. Most plumbers finish it in one sitting.
          </p>
        </div>

        {/* Share */}
        <div className="mt-8 rounded-xl border border-slate-200 p-6 text-center">
          <Share2 className="mx-auto h-6 w-6 text-slate-400" />
          <p className="mt-2 text-sm font-medium text-navy">
            Know another plumber who needs this?
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Share the book download page with them:
          </p>
          <div className="mt-3 flex justify-center gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://onlyplumbingsites.com/book-download")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-500 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              Facebook
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://onlyplumbingsites.com/book-download")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-500 transition-colors hover:border-blue-400 hover:text-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Next step */}
        <div className="mt-8 rounded-xl bg-navy p-6 text-center sm:p-8">
          <Wrench className="mx-auto h-8 w-8 text-orange" />
          <h2 className="mt-4 text-xl font-bold text-white">
            Can&apos;t Wait? Let&apos;s Talk Now.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Book a free strategy session and we&apos;ll review your online
            presence and build you a custom growth plan — tailored to your
            plumbing business.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="bg-orange text-white hover:bg-orange-hover"
            >
              <Link href="/call">
                <Phone className="mr-2 h-4 w-4" />
                Book Free Strategy Session
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-600 text-navy hover:border-white hover:bg-transparent hover:text-white"
            >
              <Link href="/tools">
                Explore Free Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
