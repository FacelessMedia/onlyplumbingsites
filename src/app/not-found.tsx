import Link from "next/link";
import { Phone, ArrowRight, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-navy py-24 lg:py-36">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-8xl font-extrabold text-orange">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          This Page Doesn&apos;t Exist
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          But your plumbing marketing should. Let&apos;s fix that.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full bg-orange text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-hover sm:w-auto"
          >
            <Link href="/book">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Strategy Session
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-slate-600 text-base text-slate-300 hover:border-white hover:bg-transparent hover:text-white sm:w-auto"
          >
            <Link href="/blog">
              <Search className="mr-2 h-5 w-5" />
              Browse Our Blog
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Free Growth Report", href: "/growth-report", icon: ArrowRight },
            { label: "Free Book Download", href: "/book-download", icon: BookOpen },
            { label: "Free Website Audit", href: "/audit", icon: Search },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-lg border border-slate-700 bg-navy-light p-4 text-sm font-medium text-slate-300 transition-all hover:border-orange/50 hover:text-white"
            >
              <item.icon className="mx-auto mb-2 h-5 w-5 text-orange" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
