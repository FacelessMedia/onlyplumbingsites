import { Shield, Award, Clock, Wrench } from "lucide-react";

const badges = [
  { icon: Wrench, label: "Licensed Plumber", sub: "Since 2014" },
  { icon: Shield, label: "250+ Sites Built", sub: "Plumbing Only" },
  { icon: Award, label: "You Own Your Site", sub: "No Hostage Games" },
  { icon: Clock, label: "24hr Response", sub: "On All Inquiries" },
];

export default function TrustBadgeBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange/10">
                <b.icon className="h-5 w-5 text-orange" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy">{b.label}</p>
                <p className="text-xs text-slate-400">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
