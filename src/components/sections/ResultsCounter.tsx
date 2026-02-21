"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Phone, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Globe, value: 250, suffix: "+", label: "Plumbing Websites Built" },
  { icon: TrendingUp, value: 15, suffix: "+", label: "Years in the Trade" },
  { icon: Phone, value: 10000, suffix: "+", label: "Calls Generated for Clients" },
  { icon: Award, value: 50, suffix: "+", label: "Cities Served Nationwide" },
];

function useCountUp(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    }
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [target, duration, trigger]);

  return count;
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  visible,
}: {
  icon: typeof Globe;
  value: number;
  suffix: string;
  label: string;
  visible: boolean;
}) {
  const count = useCountUp(value, 2000, visible);

  return (
    <div className="text-center">
      <Icon className="mx-auto h-8 w-8 text-orange" />
      <p className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">
        {count.toLocaleString()}
        <span className="text-orange">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}

export default function ResultsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
          The Numbers Speak for Themselves
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
