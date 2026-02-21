import { Metadata } from "next";
import { Shield, Clock, CheckCircle, Phone, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a free 30-minute strategy call with a licensed plumber who builds plumbing websites. No sales pitch — just an honest conversation about growing your plumbing business online.",
};

const expectations = [
  {
    icon: Target,
    title: "Audit Your Online Presence",
    description: "We'll review your website, Google Business Profile, and local rankings.",
  },
  {
    icon: Users,
    title: "Understand Your Goals",
    description: "How many calls you want, what service areas matter, and where you're struggling.",
  },
  {
    icon: CheckCircle,
    title: "Get a Custom Plan",
    description: "Walk away with a clear action plan — whether you work with us or not.",
  },
];

const qualifiers = [
  "You own a plumbing company (1–10 trucks)",
  "You want more booked service calls",
  "Your website is outdated or nonexistent",
  "You're doing $500k–$5M/year (or want to be)",
  "You're ready to invest in growth",
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Clock className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                30 Minutes — Free — No Obligation
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Book Your Free{" "}
              <span className="text-orange">Strategy Call</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Talk directly with a licensed plumber who&apos;s built 250+
              plumbing websites. No agency runaround.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left sidebar: What to expect */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy">
                What to Expect
              </h2>
              <div className="mt-6 space-y-6">
                {expectations.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange/10">
                      <item.icon className="h-5 w-5 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Who this is for */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-navy">
                  This Call Is For You If:
                </h3>
                <ul className="mt-4 space-y-3">
                  {qualifiers.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust */}
              <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-orange" />
                  <div>
                    <p className="font-bold text-navy">Ryan Pietrzak</p>
                    <p className="text-sm text-slate-500">
                      Licensed Illinois Plumber &middot; 250+ Plumbing Websites Built
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: GHL Calendar Embed */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/W1dbJlvrGJ63xPRg9pZV"
                  style={{ width: "100%", height: "700px", border: "none" }}
                  scrolling="no"
                  title="Book a Free Strategy Session"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
