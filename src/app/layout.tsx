import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Only Plumbing Sites — Plumbing Websites Built by a Licensed Plumber",
    template: "%s | Only Plumbing Sites",
  },
  description:
    "250+ plumbing websites built by a licensed plumber. Custom websites, local SEO, and marketing systems that generate booked service calls — not just traffic.",
  keywords: [
    "plumbing website design",
    "plumber website",
    "plumber SEO",
    "plumbing marketing",
    "plumber web design",
    "local SEO for plumbers",
  ],
  authors: [{ name: "Ryan Pietrzak" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onlyplumbingsites.com",
    siteName: "Only Plumbing Sites",
    title: "Plumbing Websites Built by a Licensed Plumber",
    description:
      "250+ plumbing websites built. Systems that generate booked service calls — not just traffic.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Websites Built by a Licensed Plumber",
    description:
      "250+ plumbing websites built. Systems that generate booked service calls — not just traffic.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
