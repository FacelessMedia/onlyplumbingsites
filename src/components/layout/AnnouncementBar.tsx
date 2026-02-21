"use client";

import { useState } from "react";
import Link from "next/link";
import { X, BookOpen } from "lucide-react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-orange px-4 py-2 text-center text-sm font-medium text-white">
      <Link
        href="/book-download"
        className="inline-flex items-center gap-2 hover:underline"
      >
        <BookOpen className="h-4 w-4" />
        Free plumbing marketing book — Download your copy now
        <span className="hidden sm:inline">&rarr;</span>
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-white/70 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
