"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollUp}
      aria-label="Back to top"
      className="fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-all hover:bg-orange lg:bottom-6"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
