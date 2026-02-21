"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white p-2 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] lg:hidden">
      <div className="flex gap-2">
        <Link
          href="tel:+1"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-navy py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </Link>
        <Link
          href="/book"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-orange py-3 text-sm font-semibold text-white"
        >
          <Calendar className="h-4 w-4" />
          Book Free Session
        </Link>
      </div>
    </div>
  );
}
