"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingFaq } from "@/data/pricing";

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Common Questions
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Straight answers from a plumber, not a salesperson.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="mt-12">
          {pricingFaq.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-slate-200"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-navy hover:text-orange hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-500">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
