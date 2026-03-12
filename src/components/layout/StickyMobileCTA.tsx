"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, X } from "lucide-react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-orange/20 bg-navy/95 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-2 px-4 py-3">
        <Link
          href="/call"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-orange px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange/25 transition-colors hover:bg-orange-hover"
        >
          <Phone className="h-4 w-4" />
          Book Free Strategy Call
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-white"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
