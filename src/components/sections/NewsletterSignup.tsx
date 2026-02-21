"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const honeypot = (document.getElementById("_hp_news") as HTMLInputElement)
      ?.value;
    await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, _honeypot: honeypot || "" }),
    });
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-green-50 p-4">
        <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
        <p className="text-sm font-medium text-green-700">
          You&apos;re in! Check your inbox for a welcome email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p className="text-sm font-semibold text-navy">
        Get Weekly Plumbing Marketing Tips
      </p>
      <p className="text-xs text-slate-500">
        Join 500+ plumbing business owners. No spam, unsubscribe anytime.
      </p>
      <input
        type="text"
        id="_hp_news"
        name="_hp_news"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 text-sm"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="shrink-0 bg-orange text-white hover:bg-orange-hover"
          size="sm"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>
    </form>
  );
}
