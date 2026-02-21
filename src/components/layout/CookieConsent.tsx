"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-4 shadow-lg sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm sm:rounded-xl sm:border">
      <p className="text-sm font-medium text-navy">We value your privacy</p>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">
        We use cookies to analyze site traffic and improve your experience. See
        our{" "}
        <Link href="/privacy" className="text-orange underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={accept}
          className="rounded-lg bg-orange px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange/90"
        >
          Accept All
        </button>
        <button
          onClick={decline}
          className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500 transition-colors hover:bg-slate-50"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
