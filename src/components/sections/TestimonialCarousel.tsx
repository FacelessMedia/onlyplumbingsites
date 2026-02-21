"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Before working with Ryan, we were getting maybe 10 calls a month from our website. Within 6 months, we were averaging 150+. The difference is that he actually understands the plumbing business.",
    name: "Plumbing Company Owner",
    location: "Chicago, IL",
    result: "10 → 150+ calls/month",
    stars: 5,
  },
  {
    quote:
      "Every other agency we talked to treated us like just another home service company. Ryan knew our business because he's been in it. Our website finally converts visitors into booked calls.",
    name: "Plumbing Business Owner",
    location: "Houston, TX",
    result: "3x increase in booked jobs",
    stars: 5,
  },
  {
    quote:
      "We went from invisible on Google to top 3 in the Map Pack for 12 cities in our service area. The ROI on our marketing spend has been unreal.",
    name: "Plumbing Company Owner",
    location: "Phoenix, AZ",
    result: "Top 3 Map Pack in 12 cities",
    stars: 5,
  },
  {
    quote:
      "I was paying $3,000/month to an agency that couldn't even explain what they were doing. Ryan showed me exactly where my money goes and the results speak for themselves.",
    name: "Plumbing Business Owner",
    location: "Atlanta, GA",
    result: "$500K+ in new revenue",
    stars: 5,
  },
  {
    quote:
      "The website Ryan built for us looks incredible and actually generates calls. We own it outright — no hostage situations like our last agency. That alone is worth it.",
    name: "Plumbing Company Owner",
    location: "Denver, CO",
    result: "200+ calls/month from organic",
    stars: 5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  function prev() {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setCurrent((c) => (c + 1) % testimonials.length);
  }

  const t = testimonials[current];

  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
          What Plumbing Companies Say
        </h2>

        <div
          className="relative mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <Quote className="h-8 w-8 text-orange/30" />

            <p className="mt-4 text-lg leading-relaxed text-slate-700 sm:text-xl">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-orange text-orange"
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm font-medium text-navy">
                  {t.name}
                </p>
                <p className="text-xs text-slate-400">{t.location}</p>
              </div>
              <div className="rounded-lg bg-orange/10 px-4 py-2">
                <p className="text-sm font-bold text-orange">{t.result}</p>
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 shadow-sm transition-colors hover:bg-slate-50 sm:-left-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 text-slate-500" />
          </button>
          <button
            onClick={next}
            className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 shadow-sm transition-colors hover:bg-slate-50 sm:-right-5"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 text-slate-500" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-6 bg-orange"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          These represent typical results. Real client names available upon
          request.
        </p>
      </div>
    </section>
  );
}
