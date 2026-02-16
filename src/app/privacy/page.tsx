import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Only Plumbing Sites.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: February 15, 2026
        </p>

        <div className="mt-10 space-y-8 text-slate-600">
          <div>
            <h2 className="text-xl font-bold text-navy">1. Information We Collect</h2>
            <p className="mt-3">
              When you use our website or submit a form, we may collect the following
              information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Name and contact information (email, phone number)</li>
              <li>Business name and website URL</li>
              <li>City and service area</li>
              <li>Information you voluntarily provide in form submissions</li>
              <li>Usage data (pages visited, time on site) via analytics tools</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">2. How We Use Your Information</h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Deliver website audits and strategy recommendations</li>
              <li>Send appointment confirmations and reminders</li>
              <li>Improve our website and services</li>
              <li>Send relevant marketing communications (with your consent)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">3. Information Sharing</h2>
            <p className="mt-3">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with trusted service providers
              who assist us in operating our business (e.g., CRM platform, email
              service), subject to confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">4. Data Security</h2>
            <p className="mt-3">
              We implement reasonable security measures to protect your personal
              information. However, no method of transmission over the internet is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">5. Cookies & Analytics</h2>
            <p className="mt-3">
              We use cookies and similar technologies to analyze website traffic and
              improve your experience. This may include Google Analytics and Vercel
              Analytics. You can control cookie settings through your browser.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">6. Your Rights</h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request that we stop processing your data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">7. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, contact us at:{" "}
              <a
                href="mailto:hello@onlyplumbingsites.com"
                className="font-medium text-orange hover:text-orange-hover"
              >
                hello@onlyplumbingsites.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
