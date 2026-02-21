"use client";

import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";

export default function SocialShare({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const [copied, setCopied] = useState(false);
  const url = `https://onlyplumbingsites.com/blog/${slug}`;
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function copyLink() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        Share
      </span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-slate-200 p-2 text-slate-400 transition-colors hover:border-blue-300 hover:text-blue-600"
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-slate-200 p-2 text-slate-400 transition-colors hover:border-sky-300 hover:text-sky-500"
        aria-label="Share on X"
      >
        <Twitter className="h-4 w-4" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-slate-200 p-2 text-slate-400 transition-colors hover:border-blue-400 hover:text-blue-700"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <button
        onClick={copyLink}
        className="rounded-lg border border-slate-200 p-2 text-slate-400 transition-colors hover:border-orange/50 hover:text-orange"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
