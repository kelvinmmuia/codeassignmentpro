import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How CodeAssignment Pro protects your privacy and handles your information.",
};

export default function PrivacyPage() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Privacy Policy
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Last updated: December 2025
                </p>

                <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Our Commitment to Privacy
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            At {SITE_CONFIG.name}, protecting your privacy is our top priority. We operate on a peer-to-peer basis specifically to minimize data collection and ensure your information remains confidential. We do not require account registration, and we do not store payment information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Information We Collect
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We collect only the minimum information necessary to provide our services:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Project requirements and specifications you share with us</li>
                            <li>Communication history via WhatsApp for service delivery</li>
                            <li>Payment confirmation details (not card numbers or bank details)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Information We Do Not Collect
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>We do not require or store your real name</li>
                            <li>We do not require account creation or registration</li>
                            <li>We do not store credit card or bank account details</li>
                            <li>We do not collect or store institutional credentials</li>
                            <li>We do not track your browsing history across sites</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            How We Use Your Information
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Information you provide is used solely for:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                            <li>Delivering the requested services</li>
                            <li>Communicating about project progress and requirements</li>
                            <li>Providing revisions and support</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Data Retention
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Project files and communications are retained only as long as necessary to complete the service and provide reasonable follow-up support. Upon request, we will delete all project-related data and communications.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Third-Party Services
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We use WhatsApp for communication and various payment platforms for transactions. These services have their own privacy policies. We recommend reviewing them for complete information on how they handle your data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Your Rights
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                            <li>Request deletion of your data at any time</li>
                            <li>Request information about what data we hold</li>
                            <li>Communicate anonymously using any identifier you choose</li>
                        </ul>
                    </section>

                    <section className="border-t pt-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Contact
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            For privacy-related inquiries, please contact us via{" "}
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
