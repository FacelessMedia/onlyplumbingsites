import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Citations for Plumbers: The Complete Guide (2026)",
  description:
    "The most comprehensive guide to local citations for plumbing businesses. Includes the 18 most important citations, step-by-step fix instructions, Yext comparison, and a free citation checker tool.",
  openGraph: {
    title: "Local Citations for Plumbers: The Complete Guide",
    description:
      "How to build, audit, and fix your citations to rank higher in Google's Map Pack. 18 priority citations, step-by-step instructions, and honest Yext breakdown.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
