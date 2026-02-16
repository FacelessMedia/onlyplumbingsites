import Link from "next/link";
import { Phone, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Generate More Plumbing Calls?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
          If you&apos;re serious about growing your plumbing business online,
          let&apos;s talk. Free strategy call with a licensed plumber who builds
          plumbing websites.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover sm:w-auto"
          >
            <Link href="/book">
              <Phone className="mr-2 h-5 w-5" />
              Book Strategy Call
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-slate-600 text-base font-semibold text-slate-300 hover:border-white hover:bg-transparent hover:text-white sm:w-auto"
          >
            <Link href="/audit">
              <FileSearch className="mr-2 h-5 w-5" />
              Get Free Audit
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
