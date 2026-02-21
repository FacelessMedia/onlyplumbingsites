"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExitIntent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("exit-intent-shown")) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exit-intent-shown", "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    }

    // Delay attaching so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={() => setShow(false)}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange/10">
            <BookOpen className="h-7 w-7 text-orange" />
          </div>
          <h3 className="text-xl font-bold text-navy">
            Wait — Before You Go!
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Grab a free copy of <strong>&ldquo;The Little Plumber That Could&rdquo;</strong> — 
            the short, funny book that shows plumbing business owners exactly how
            to get more calls from the internet.
          </p>
          <div className="mt-6 space-y-3">
            <Button
              asChild
              className="w-full bg-orange text-white hover:bg-orange-hover"
            >
              <Link href="/book-download">
                <Download className="mr-2 h-4 w-4" />
                Get the Free Book
              </Link>
            </Button>
            <button
              onClick={() => setShow(false)}
              className="w-full text-sm text-slate-400 hover:text-slate-600"
            >
              No thanks, I&apos;ll figure it out myself
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
