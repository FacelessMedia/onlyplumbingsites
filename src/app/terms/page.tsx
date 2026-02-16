import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Only Plumbing Sites.",
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: February 15, 2026
        </p>

        <div className="mt-10 space-y-8 text-slate-600">
          <div>
            <h2 className="text-xl font-bold text-navy">1. Services</h2>
            <p className="mt-3">
              Only Plumbing Sites provides website design, development, local SEO,
              social media management, and related marketing services exclusively
              for plumbing companies. Services are provided as described in the
              agreed-upon proposal or contract.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">2. Pricing & Payment</h2>
            <p className="mt-3">
              All prices are as quoted in your proposal. Recurring services are
              billed monthly via Stripe. One-time services are billed upon project
              completion or as specified in your contract. Late payments may result
              in service suspension.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">3. 12-Month Contracts</h2>
            <p className="mt-3">
              The 12-Month Growth plan is a 12-month commitment. After month 6,
              you may cancel with 60 days written notice. Early termination before
              month 6 requires payment of remaining months at 50% of the monthly
              rate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">4. Website Ownership</h2>
            <p className="mt-3">
              Upon full payment, you own the website content and design created for
              your business. We retain the right to showcase the work in our
              portfolio unless otherwise agreed. Third-party assets (stock photos,
              fonts, plugins) are subject to their respective licenses.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">5. Client Responsibilities</h2>
            <p className="mt-3">
              You are responsible for providing accurate business information,
              timely feedback during the build process, and access to necessary
              accounts (Google Business Profile, domain registrar, etc.). Delays in
              providing required materials may affect project timelines.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">6. Revisions</h2>
            <p className="mt-3">
              Website builds include up to 2 rounds of revisions. Additional
              revisions beyond the included rounds may incur additional charges.
              Ongoing service plans include reasonable monthly updates as part of
              the service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">7. Limitation of Liability</h2>
            <p className="mt-3">
              Only Plumbing Sites is not liable for any indirect, incidental, or
              consequential damages arising from the use of our services. We do not
              guarantee specific rankings, traffic numbers, or call volumes, as
              these depend on many factors outside our control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">8. Refund Policy</h2>
            <p className="mt-3">
              One-time website builds: No refunds after the design phase has been
              approved and development has begun. Monthly services: No refunds for
              the current billing period, but you may cancel future billing as
              described in section 3.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">9. Changes to Terms</h2>
            <p className="mt-3">
              We reserve the right to update these terms at any time. Changes will
              be posted on this page with an updated date. Continued use of our
              services constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">10. Contact</h2>
            <p className="mt-3">
              Questions about these terms? Contact us at:{" "}
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
