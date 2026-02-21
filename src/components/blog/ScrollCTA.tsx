"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BarChart3, X } from "lucide-react";

export default function ScrollCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    function handleScroll() {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setVisible(scrollPercent > 60);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-orange/20 bg-white/95 shadow-lg backdrop-blur-sm lg:bottom-4 lg:left-auto lg:right-4 lg:max-w-sm lg:rounded-xl lg:border">
      <div className="flex items-center gap-3 px-4 py-3">
        <BarChart3 className="h-8 w-8 shrink-0 text-orange" />
        <div className="flex-1">
          <p className="text-sm font-bold text-navy">
            Want a custom growth plan?
          </p>
          <p className="text-xs text-slate-500">
            Free report with rankings, competitor gaps & revenue projection.
          </p>
        </div>
        <Link
          href="/growth-report"
          className="shrink-0 rounded-lg bg-orange px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-orange/90"
        >
          Get Report
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 p-1 text-slate-400 hover:text-slate-600"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
