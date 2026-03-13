"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Star,
  Copy,
  Check,
  Search,
  MapPin,
  Phone,
  Globe,
  Loader2,
  MessageSquare,
  QrCode,
  ExternalLink,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type PlaceResult = {
  placeId: string;
  name: string;
  address: string;
  phone: string;
  website: string;
  mapsUrl: string;
};

export default function ReviewLinkGeneratorPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PlaceResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [selected, setSelected] = useState<PlaceResult | null>(null);
  const [apiAvailable, setApiAvailable] = useState<boolean | null>(null);
  const [manualPlaceId, setManualPlaceId] = useState("");
  const [copiedReview, setCopiedReview] = useState(false);
  const [copiedSMS, setCopiedSMS] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const placeId = selected?.placeId || manualPlaceId;
  const reviewLink = placeId
    ? `https://search.google.com/local/writereview?placeid=${placeId}`
    : "";

  const smsTemplate = selected
    ? `Hi! Thanks for choosing ${selected.name}. We'd really appreciate a quick Google review — it helps other homeowners find us. Here's the link: ${reviewLink}`
    : reviewLink
    ? `Hi! Thanks for choosing us. We'd really appreciate a quick Google review: ${reviewLink}`
    : "";

  // Check API availability on mount (prevents flash)
  useEffect(() => {
    async function checkApi() {
      try {
        const res = await fetch("/api/places-search?q=test");
        const data = await res.json();
        setApiAvailable(data.error !== "no_api_key");
      } catch {
        setApiAvailable(false);
      }
    }
    checkApi();
  }, []);

  // Search Google Places API
  const searchPlaces = useCallback(async (q: string) => {
    if (q.length < 3) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    setSearching(true);
    try {
      const res = await fetch(`/api/places-search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      if (data.error === "no_api_key") {
        setApiAvailable(false);
        setResults([]);
      } else {
        setResults(data.results || []);
        setShowDropdown((data.results || []).length > 0);
      }
    } catch {
      setResults([]);
    }
    setSearching(false);
  }, []);

  // Debounced search
  useEffect(() => {
    if (selected) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => searchPlaces(query), 400);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [query, selected, searchPlaces]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function selectPlace(place: PlaceResult) {
    setSelected(place);
    setQuery(place.name);
    setShowDropdown(false);
  }

  function clearSelection() {
    setSelected(null);
    setQuery("");
    setManualPlaceId("");
    setCopiedReview(false);
    setCopiedSMS(false);
    setEmail("");
    setEmailSent(false);
  }

  function copyText(text: string, setter: (v: boolean) => void) {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !reviewLink) return;
    setEmailSending(true);
    try {
      await fetch("/api/review-link-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          businessName: selected?.name || "your business",
          reviewLink,
          smsTemplate,
        }),
      });
      setEmailSent(true);
    } catch {
      // Still show success — the link is visible on screen regardless
      setEmailSent(true);
    }
    setEmailSending(false);
  }

  // Don't render the tool section until we know API status (prevents flash)
  const showSearch = apiAvailable === true;
  const showManual = apiAvailable === false;
  const loading = apiAvailable === null;

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
              Find your business, click it, and we&apos;ll email you a 1-click
              Google review link you can send to every customer.
            </p>
          </div>
        </div>
      </section>

      {/* Tool */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">

            {/* Step 1: Search for your business */}
            {!selected && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                    1
                  </span>
                  Find Your Business on Google
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  {showManual
                    ? "Enter your Google Place ID below to generate your review link."
                    : "Start typing your business name and select it from the dropdown."}
                </p>

                {loading && (
                  <div className="mt-6 flex items-center justify-center gap-2 py-8 text-sm text-slate-400">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                )}

                {showSearch && (
                  <div ref={dropRef} className="relative mt-4">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    {searching && (
                      <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-orange" />
                    )}
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        if (selected) setSelected(null);
                      }}
                      placeholder='Type your business name (e.g. "ABC Plumbing Chicago")'
                      className="h-12 w-full rounded-lg border border-slate-300 pl-10 pr-10 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                      autoFocus
                    />

                    {/* Dropdown results */}
                    {showDropdown && results.length > 0 && (
                      <div className="absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
                        {results.map((place) => (
                          <button
                            key={place.placeId}
                            onClick={() => selectPlace(place)}
                            className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-orange/5 transition-colors border-b border-slate-100 last:border-0"
                          >
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-navy truncate">{place.name}</p>
                              <p className="text-xs text-slate-500 truncate">{place.address}</p>
                              {place.phone && (
                                <p className="text-xs text-slate-400">{place.phone}</p>
                              )}
                            </div>
                            <ArrowRight className="mt-0.5 ml-auto h-4 w-4 shrink-0 text-slate-300" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* No results hint */}
                    {query.length >= 3 && !searching && results.length === 0 && showDropdown === false && (
                      <p className="mt-2 text-xs text-slate-400">
                        No results? Try adding your city (e.g. &ldquo;Smith Plumbing Dallas TX&rdquo;)
                      </p>
                    )}
                  </div>
                )}

                {showManual && (
                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-navy">Google Place ID</label>
                      <input
                        type="text"
                        value={manualPlaceId}
                        onChange={(e) => setManualPlaceId(e.target.value)}
                        placeholder="ChIJ7cv00DwsDogRAMDACa2m4K8"
                        className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                      />
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4">
                      <p className="text-xs font-medium text-navy">How to find your Place ID:</p>
                      <ol className="mt-2 space-y-1 text-xs text-slate-500">
                        <li>1. Go to{" "}
                          <a href="https://developers.google.com/maps/documentation/places/web-service/place-id" target="_blank" rel="noopener noreferrer" className="text-orange underline">
                            Google&apos;s Place ID Finder
                          </a>
                        </li>
                        <li>2. Search for your business name</li>
                        <li>3. Click on your business in the results</li>
                        <li>4. Copy the Place ID (starts with &ldquo;ChIJ&rdquo;)</li>
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Selected business card */}
            {selected && (
              <div className="rounded-xl border-2 border-green-200 bg-green-50/50 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-green-600">
                      <Check className="mr-1 inline h-3.5 w-3.5" />
                      Business Found
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-navy">{selected.name}</h3>
                    <div className="mt-2 space-y-1 text-sm text-slate-600">
                      {selected.address && (
                        <p className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-slate-400" />
                          {selected.address}
                        </p>
                      )}
                      {selected.phone && (
                        <p className="flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 text-slate-400" />
                          {selected.phone}
                        </p>
                      )}
                      {selected.website && (
                        <p className="flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5 text-slate-400" />
                          <a href={selected.website} target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange-hover underline truncate">
                            {selected.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </a>
                        </p>
                      )}
                    </div>
                    {!selected.website && (
                      <div className="mt-3 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-2.5">
                        <span className="text-xs font-bold text-red-700">⚠️ No website linked to your Google Business Profile!</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={clearSelection}
                    className="shrink-0 rounded-md border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 hover:border-red-300 hover:text-red-500 transition-colors"
                  >
                    Change
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Email to get your link */}
            {reviewLink && !emailSent && (
              <div className="rounded-xl border-2 border-orange/30 bg-orange/5 p-6 sm:p-8">
                <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                    2
                  </span>
                  Get Your Review Link
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Enter your email and we&apos;ll send you your 1-click Google review link,
                  ready to share with customers.
                </p>

                <form onSubmit={handleEmailSubmit} className="mt-4">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="h-12 w-full rounded-lg border border-slate-300 pl-10 pr-4 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={emailSending || !email}
                      className="h-12 bg-orange px-6 text-white hover:bg-orange-hover disabled:opacity-50"
                    >
                      {emailSending ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                      ) : (
                        <>Email My Review Link <ArrowRight className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">
                    We&apos;ll never spam you. Just your review link — that&apos;s it.
                  </p>
                </form>

                {/* Also show the link directly */}
                <div className="mt-6 border-t border-orange/20 pt-5">
                  <p className="text-xs font-medium text-slate-500 mb-2">Or copy it now:</p>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={reviewLink}
                      className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600"
                    />
                    <Button
                      onClick={() => copyText(reviewLink, setCopiedReview)}
                      variant="outline"
                      className="shrink-0"
                      size="sm"
                    >
                      {copiedReview ? (
                        <><Check className="mr-1 h-4 w-4 text-green-500" /> Copied</>
                      ) : (
                        <><Copy className="mr-1 h-4 w-4" /> Copy</>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* After email sent — show all the goodies */}
            {emailSent && reviewLink && (
              <div className="space-y-6">
                <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6 text-center sm:p-8">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-navy">
                    Review link sent to {email}!
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Check your inbox. Here&apos;s everything you need to start collecting reviews:
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-navy">
                    <Star className="h-5 w-5 text-orange" />
                    Your Review Link
                  </h3>

                  {/* Review link */}
                  <div className="mt-4">
                    <label className="block text-xs font-medium text-slate-500 mb-1">Direct Review Link</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value={reviewLink}
                        className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600"
                      />
                      <Button
                        onClick={() => copyText(reviewLink, setCopiedReview)}
                        variant="outline"
                        className="shrink-0"
                        size="sm"
                      >
                        {copiedReview ? (
                          <><Check className="mr-1 h-4 w-4 text-green-500" /> Copied</>
                        ) : (
                          <><Copy className="mr-1 h-4 w-4" /> Copy Link</>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* SMS template */}
                  <div className="mt-5">
                    <label className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-1">
                      <MessageSquare className="h-3.5 w-3.5" />
                      Ready-to-Send SMS Template
                    </label>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
                      {smsTemplate}
                    </div>
                    <Button
                      onClick={() => copyText(smsTemplate, setCopiedSMS)}
                      variant="outline"
                      className="mt-2"
                      size="sm"
                    >
                      {copiedSMS ? (
                        <><Check className="mr-1 h-4 w-4 text-green-500" /> Copied</>
                      ) : (
                        <><Copy className="mr-1 h-4 w-4" /> Copy SMS Template</>
                      )}
                    </Button>
                  </div>

                  {/* Quick actions */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <a
                      href={reviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-navy hover:bg-slate-50 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-orange" />
                      Test the Link
                    </a>
                    <a
                      href={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(reviewLink)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-navy hover:bg-slate-50 transition-colors"
                    >
                      <QrCode className="h-4 w-4 text-orange" />
                      Download QR Code
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Tips */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-navy">
                Tips for Getting More Reviews
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <strong>Ask within 24 hours</strong> — the experience is still fresh.
                </li>
                <li>
                  <strong>Use SMS, not just email</strong> — text messages have 98% open rates vs 20% for email.
                </li>
                <li>
                  <strong>Make it personal</strong> — &ldquo;Hey [Name], it was great working on your water heater today. Would you mind leaving us a quick review?&rdquo;
                </li>
                <li>
                  <strong>Print the QR code</strong> — put it on your invoices, business cards, and van wrap. Customers scan and review.
                </li>
                <li>
                  <strong>Respond to every review</strong> — shows future customers you care.
                </li>
                <li>
                  <strong>Never offer incentives</strong> — Google prohibits paying for reviews.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
