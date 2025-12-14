import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Discount Policy",
    description: "Discount policies and offers at CodeAssignment Pro.",
};

export default function DiscountPage() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Discount Policy
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Last updated: December 2024
                </p>

                <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Fair Pricing Commitment
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            At {SITE_CONFIG.name}, we believe in fair and transparent pricing. Our peer-to-peer model eliminates middleman fees, meaning you already receive better value compared to traditional platforms where up to 80% of your payment goes to the platform rather than the expert.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Returning Client Discount
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Returning clients are eligible for discounts on subsequent projects. The discount percentage is discussed on a case-by-case basis depending on project complexity and history. Simply mention that you are a returning client when inquiring about a new project.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Bulk Project Discount
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Clients with multiple projects or ongoing work may qualify for bulk pricing. If you have several assignments or anticipate regular assistance throughout a semester or project period, inquire about a custom rate.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Referral Appreciation
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We appreciate referrals. If you refer a new client who completes a project with us, you may be eligible for a discount on your next project. Contact us to learn more about our referral appreciation program.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            How to Request a Discount
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            To inquire about available discounts, simply mention your situation when contacting us via WhatsApp. Include relevant details such as whether you are a returning client, have multiple projects, or were referred by someone.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Terms and Conditions
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Discounts cannot be combined unless explicitly stated</li>
                            <li>Discount eligibility is determined at our discretion</li>
                            <li>Rush orders may not be eligible for certain discounts</li>
                            <li>Discounts apply to future projects, not retroactively</li>
                        </ul>
                    </section>

                    <section className="border-t pt-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Contact
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            For discount inquiries, please contact us via{" "}
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
