import { Shield, Zap, BarChart3, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Wrench,
    label: "Built by a Plumber",
    desc: "Licensed IL plumber since 2014 — I understand your business because I've done the work.",
  },
  {
    icon: Shield,
    label: "You Own Everything",
    desc: "Your website, your content, your data. No hostage games, no vendor lock-in. Ever.",
  },
  {
    icon: Zap,
    label: "Fast Execution",
    desc: "Sites launch in weeks, not months. SEO campaigns start generating calls within 90 days.",
  },
  {
    icon: BarChart3,
    label: "Data-Driven Results",
    desc: "Every dollar tracked. Transparent reporting on calls, rankings, and ROI — no vanity metrics.",
  },
];

export default function TrustBadgeBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.label} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10">
                <p.icon className="h-5 w-5 text-orange" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy">{p.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
