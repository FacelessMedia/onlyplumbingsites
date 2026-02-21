import Link from "next/link";
import { Phone, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContentUpgrade() {
  return (
    <div className="my-10 rounded-xl border-2 border-orange/20 bg-orange/5 p-6 sm:p-8">
      <h3 className="text-lg font-bold text-navy">
        Want a Custom Plan for Your Plumbing Business?
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Stop guessing. Get a free growth report that shows your current
        rankings, competitor gaps, and a 12-month projection of what your
        marketing could generate.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button
          asChild
          className="bg-orange text-white hover:bg-orange-hover"
        >
          <Link href="/growth-report">
            <BarChart3 className="mr-2 h-4 w-4" />
            Get Free Growth Report
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-orange/30 text-orange hover:bg-orange hover:text-white"
        >
          <Link href="/book">
            <Phone className="mr-2 h-4 w-4" />
            Book Strategy Session
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
