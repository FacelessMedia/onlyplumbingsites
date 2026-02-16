import {
  Paintbrush,
  PhoneOff,
  MapPinOff,
  StarOff,
  UserX,
  LayoutTemplate,
} from "lucide-react";

const problems = [
  {
    icon: Paintbrush,
    title: "Built by Designers, Not Plumbers",
    description:
      "Most web designers don't understand emergency service dynamics, seasonal demand, or what makes a homeowner pick up the phone.",
  },
  {
    icon: PhoneOff,
    title: "No Emergency Call Optimization",
    description:
      "Your phone number is buried in the footer. No click-to-call. No urgency. Customers move on to the next plumber.",
  },
  {
    icon: MapPinOff,
    title: "No Service Area Strategy",
    description:
      "Without dedicated service area pages, you're invisible in the cities you actually serve. Google can't rank what doesn't exist.",
  },
  {
    icon: StarOff,
    title: "No Review Automation",
    description:
      "You're doing great work but nobody's seeing the reviews. No system to collect, display, or leverage them.",
  },
  {
    icon: UserX,
    title: "No Follow-Up Systems",
    description:
      "Leads come in and fall through the cracks. No automated text-back, no email follow-up, no rebooking sequence.",
  },
  {
    icon: LayoutTemplate,
    title: "No Conversion Structure",
    description:
      "Pretty website, zero strategy. No clear path from visitor to booked service call. Just a digital brochure collecting dust.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Why Most Plumbing Websites Don&apos;t Generate Calls
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            If your website isn&apos;t bringing in booked service calls every week,
            chances are it has at least one of these problems.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-orange/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3">
                <problem.icon className="h-6 w-6 text-orange" />
              </div>
              <h3 className="text-lg font-bold text-navy">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
