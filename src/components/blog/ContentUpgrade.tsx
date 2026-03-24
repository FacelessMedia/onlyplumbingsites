import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContentUpgrade() {
  return (
    <div className="my-10 rounded-xl border-2 border-orange/20 bg-orange/5 p-6 sm:p-8">
      <h3 className="text-lg font-bold text-navy">
        Want a Custom Plan for Your Plumbing Business?
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Stop guessing. Book a free strategy call and I&apos;ll analyze your
        current marketing, show you where the opportunities are, and give
        you a custom plan to grow — no strings attached.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button
          asChild
          className="bg-orange text-white hover:bg-orange-hover"
        >
          <Link href="/call">
            <Phone className="mr-2 h-4 w-4" />
            Book Free Strategy Call
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
