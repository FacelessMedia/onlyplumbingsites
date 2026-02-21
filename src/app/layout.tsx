import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import CookieConsent from "@/components/layout/CookieConsent";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
      <head>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`,
              }}
            />
          </>
        )}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");`,
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Only Plumbing Sites",
              url: "https://onlyplumbingsites.com",
              description:
                "Plumbing websites, local SEO, and marketing systems built by a licensed plumber. 250+ plumbing websites built.",
              founder: {
                "@type": "Person",
                name: "Ryan Pietrzak",
                jobTitle: "Licensed Plumber & Founder",
              },
              areaServed: { "@type": "Country", name: "United States" },
              serviceType: [
                "Plumbing Website Design",
                "SEO for Plumbers",
                "PPC for Plumbers",
                "Local SEO",
                "Plumbing Lead Generation",
                "Social Media for Plumbers",
              ],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AnnouncementBar />
        <Navbar />
        <Breadcrumbs />
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
