import { Metadata } from "next";
import Link from "next/link";
import { Lock, Phone, ArrowRight, BarChart3, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Client Portal — Coming Soon",
  description:
    "A dedicated client portal for Only Plumbing Sites clients. Track your project progress, view reports, and communicate directly.",
};

const features = [
  {
    icon: BarChart3,
    title: "Live Dashboard",
    description: "See your keyword rankings, traffic, and lead count in real time.",
  },
  {
    icon: FileText,
    title: "Monthly Reports",
    description: "Access all your monthly reports and performance data in one place.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Message Ryan directly, request changes, and track project updates.",
  },
];

export default function PortalPage() {
  return (
    <>
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Lock className="mx-auto h-12 w-12 text-orange" />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Client Portal —{" "}
            <span className="text-orange">Coming Soon</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            A dedicated dashboard for current clients to track project progress,
            view reports, and communicate directly. This is being built now.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-slate-700 bg-navy-light p-5 text-center"
              >
                <f.icon className="mx-auto h-6 w-6 text-orange" />
                <h3 className="mt-3 text-sm font-bold text-white">{f.title}</h3>
                <p className="mt-1 text-xs text-slate-400">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-700 bg-navy-light p-6">
            <p className="text-sm font-medium text-slate-300">
              Already a client? Reach out directly at{" "}
              <a
                href="mailto:hello@onlyplumbingsites.com"
                className="font-semibold text-orange hover:text-orange-hover"
              >
                hello@onlyplumbingsites.com
              </a>{" "}
              for project updates, report requests, or anything you need.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange text-white shadow-lg shadow-orange/25 hover:bg-orange-hover"
            >
              <Link href="/book">
                <Phone className="mr-2 h-5 w-5" />
                Become a Client
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:border-white hover:bg-transparent hover:text-white"
            >
              <Link href="/about">
                Learn About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
