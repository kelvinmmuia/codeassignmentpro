import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Confidentiality Policy",
    description: "How CodeAssignment Pro protects client confidentiality.",
};

export default function ConfidentialityPage() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Confidentiality Policy
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Last updated: December 2025
                </p>

                <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Our Commitment to Confidentiality
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {SITE_CONFIG.name} understands that confidentiality is paramount for our clients. We have designed our service model specifically to protect your privacy and maintain strict confidentiality of all interactions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            No Account Required
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Unlike other platforms, we do not require you to create an account or register with personal details. You can communicate with us using any identifier you choose. This peer-to-peer approach ensures minimal data collection and maximum privacy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Project Information Protection
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            All project-related information is treated as strictly confidential:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Project requirements and specifications are never shared with third parties</li>
                            <li>Your institution name and personal details are not disclosed</li>
                            <li>Completed work is not resold, republished, or shared publicly</li>
                            <li>Communication history is kept private between you and the service provider</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            No Third-Party Sharing
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We do not sell, trade, or otherwise transfer your information to outside parties. This includes project details, communication records, or any identifying information. Your business with us remains strictly between you and our service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Secure Communication
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We use WhatsApp for communications, which provides end-to-end encryption. This ensures that your messages and shared files are protected during transmission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Data Deletion
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Upon request, we will permanently delete all project files, communications, and any other data associated with your engagement. You may request deletion at any time by contacting us via WhatsApp.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Anonymity Supported
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            You are not required to provide your real name or any identifying personal information. You may use any pseudonym or identifier of your choosing throughout our engagement.
                        </p>
                    </section>

                    <section className="border-t pt-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Contact
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            For confidentiality-related inquiries, please contact us via{" "}
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
