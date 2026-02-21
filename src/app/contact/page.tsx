"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Clock, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please include a message"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@onlyplumbingsites.com",
    href: "mailto:hello@onlyplumbingsites.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Based in Illinois. Serving plumbers nationwide.",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 9:00 AM – 5:00 PM CT",
    href: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    const honeypot = (document.getElementById("_honeypot") as HTMLInputElement)
      ?.value;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, _honeypot: honeypot || "" }),
    });
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Get in <span className="text-orange">Touch</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Have a question? Want to chat about your plumbing business? Reach
              out — no sales pitch, just a real conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy">
                Contact Information
              </h2>
              <p className="mt-4 text-slate-500">
                Prefer to talk? Book a{" "}
                <a
                  href="/book"
                  className="font-medium text-orange hover:text-orange-hover"
                >
                  free strategy call
                </a>{" "}
                or reach out directly below.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange/10">
                      <info.icon className="h-5 w-5 text-orange" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-slate-500 transition-colors hover:text-orange"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-500">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-navy">Quick Links</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="/book"
                      className="text-sm text-orange hover:text-orange-hover"
                    >
                      Book a Free Strategy Call &rarr;
                    </a>
                  </li>
                  <li>
                    <a
                      href="/audit"
                      className="text-sm text-orange hover:text-orange-hover"
                    >
                      Request a Free Website Audit &rarr;
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="text-sm text-orange hover:text-orange-hover"
                    >
                      View Pricing &rarr;
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center rounded-xl border border-green-200 bg-green-50 p-10 text-center">
                  <CheckCircle className="h-12 w-12 text-success" />
                  <h3 className="mt-4 text-2xl font-bold text-navy">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-slate-500">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
                >
                  <h3 className="text-xl font-bold text-navy">
                    Send Us a Message
                  </h3>

                  {/* Honeypot - hidden from humans, bots fill it */}
                  <input
                    type="text"
                    id="_honeypot"
                    name="_honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  <div className="mt-6 space-y-5">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your name"
                        className="mt-1"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="you@company.com"
                        className="mt-1"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="(312) 555-1234"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="How can we help?"
                        className="mt-1"
                        rows={5}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange text-base font-semibold text-white hover:bg-orange-hover"
                      size="lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
