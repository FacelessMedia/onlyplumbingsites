"use client";

import { useState } from "react";
import { Star, Copy, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ReviewLinkGeneratorPage() {
  const [placeId, setPlaceId] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [copied, setCopied] = useState(false);

  const reviewLink = placeId
    ? `https://search.google.com/local/writereview?placeid=${placeId}`
    : "";

  const searchLink = businessName
    ? `https://www.google.com/maps/search/${encodeURIComponent(businessName)}`
    : "";

  function copyLink() {
    if (reviewLink) {
      navigator.clipboard.writeText(reviewLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Star className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Free Tool
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Google Review Link{" "}
              <span className="text-orange">Generator</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Generate a direct link to your Google review page. Send it to
              customers to make leaving reviews effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Tool */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Step 1: Find Place ID */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                  1
                </span>
                Find Your Google Place ID
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Search for your business on Google Maps, then copy your Place ID
                from the URL.
              </p>
              <div className="mt-4 space-y-3">
                <div>
                  <Label htmlFor="business">Your Business Name</Label>
                  <Input
                    id="business"
                    placeholder="ABC Plumbing Chicago"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                {businessName && (
                  <a
                    href={searchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-orange hover:text-orange-hover"
                  >
                    Search on Google Maps
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-medium text-navy">
                    How to find your Place ID:
                  </p>
                  <ol className="mt-2 space-y-1 text-xs text-slate-500">
                    <li>
                      1. Go to{" "}
                      <a
                        href="https://developers.google.com/maps/documentation/places/web-service/place-id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange underline"
                      >
                        Google&apos;s Place ID Finder
                      </a>
                    </li>
                    <li>2. Search for your business name</li>
                    <li>3. Click on your business in the results</li>
                    <li>4. Copy the Place ID (starts with &ldquo;ChIJ&rdquo;)</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 2: Generate Link */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                  2
                </span>
                Enter Your Place ID
              </h2>
              <div className="mt-4">
                <Label htmlFor="placeid">Google Place ID</Label>
                <Input
                  id="placeid"
                  placeholder="ChIJ7cv00DwsDogRAMDACa2m4K8"
                  value={placeId}
                  onChange={(e) => setPlaceId(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Step 3: Your Link */}
            {reviewLink && (
              <div className="rounded-xl border-2 border-orange/30 bg-orange/5 p-6 sm:p-8">
                <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <Star className="h-5 w-5 text-orange" />
                  Your Review Link
                </h2>
                <div className="mt-4 flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={reviewLink}
                    className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600"
                  />
                  <Button
                    onClick={copyLink}
                    variant="outline"
                    className="shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="mr-1 h-4 w-4 text-green-500" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="mr-1 h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  Send this link to customers via text or email after completing
                  a job. They&apos;ll go directly to your Google review form.
                </p>
              </div>
            )}

            {/* Tips */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-navy">
                Tips for Getting More Reviews
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <strong>Ask within 24 hours</strong> — the experience is
                  still fresh.
                </li>
                <li>
                  <strong>Use SMS, not just email</strong> — text messages have
                  98% open rates vs 20% for email.
                </li>
                <li>
                  <strong>Make it personal</strong> — &ldquo;Hey [Name], it was
                  great working on your water heater today. Would you mind
                  leaving us a quick review?&rdquo;
                </li>
                <li>
                  <strong>Respond to every review</strong> — shows future
                  customers you care.
                </li>
                <li>
                  <strong>Never offer incentives</strong> — Google prohibits
                  paying for reviews.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
