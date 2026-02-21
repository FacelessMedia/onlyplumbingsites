"use client";

import { useState } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

type TOCItem = { id: string; text: string };

export default function TableOfContents({ headings }: { headings: TOCItem[] }) {
  const [open, setOpen] = useState(true);

  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="my-8 rounded-xl border border-slate-200 bg-slate-50 p-5"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="flex items-center gap-2 text-sm font-bold text-navy">
          <List className="h-4 w-4 text-orange" />
          Table of Contents
        </span>
        {open ? (
          <ChevronUp className="h-4 w-4 text-slate-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-400" />
        )}
      </button>
      {open && (
        <ol className="mt-3 space-y-1.5 border-l-2 border-orange/20 pl-4">
          {headings.map((h, i) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className="text-sm text-slate-600 transition-colors hover:text-orange"
              >
                {i + 1}. {h.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
