import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Refund Policy",
    description: "Refund policy for CodeAssignment Pro services.",
};

export default function RefundPage() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Refund Policy
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Last updated: December 2025
                </p>

                <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Our Commitment
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We are committed to delivering quality work that meets your requirements. If you are not satisfied with our service, we offer refunds under the following conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Full Refund Eligibility
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You may be eligible for a full refund if:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Work has not yet commenced on your project</li>
                            <li>We are unable to complete the project due to our limitations</li>
                            <li>The delivered work fundamentally fails to meet the agreed specifications</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Partial Refund Eligibility
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Partial refunds may be provided when:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>You cancel the project after work has begun</li>
                            <li>Significant portions of the work are unsatisfactory despite revision attempts</li>
                            <li>Delivery is substantially delayed due to our fault</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Partial refund amounts are calculated based on the percentage of work completed satisfactorily.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Non-Refundable Situations
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Refunds are not provided when:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Work has been delivered and meets the agreed requirements</li>
                            <li>You change requirements after work has been completed</li>
                            <li>Dissatisfaction is due to your institution&apos;s feedback rather than quality issues</li>
                            <li>You fail to provide necessary materials or feedback in a timely manner</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Refund Process
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            To request a refund, contact us via WhatsApp with your project details and reason for the request. Refund requests are reviewed within 48 hours. Approved refunds are processed through the original payment method within 5-7 business days.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Revision Alternative
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Before requesting a refund, we encourage you to request revisions. We offer reasonable revisions at no extra cost to ensure your satisfaction. Many concerns can be resolved through the revision process.
                        </p>
                    </section>

                    <section className="border-t pt-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Contact
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            For refund requests, please contact us via{" "}
                            <a
                                href={CONTACT.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                WhatsApp
                            </a>
                            .
                        </p>
                    </section>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-primary hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
