import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description: "Terms and Conditions for using CodeAssignment Pro services.",
};

export default function TermsPage() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Terms and Conditions
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Last updated: December 2025
                </p>

                <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            1. Service Description
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {SITE_CONFIG.name} provides programming assistance, data analysis support, and research services for educational purposes. Our services are designed to help clients understand complex concepts and improve their skills through guided assistance and sample work.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            2. Intended Use
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            All materials provided through our services are intended for:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Educational reference and learning purposes</li>
                            <li>Research guidance and methodology examples</li>
                            <li>Understanding programming concepts and techniques</li>
                            <li>Personal skill development and practice</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Clients are responsible for ensuring their use of our services complies with their institution&apos;s academic integrity policies and applicable laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            3. Client Responsibilities
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            By using our services, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                            <li>Use delivered materials ethically and responsibly</li>
                            <li>Provide proper attribution where required</li>
                            <li>Not misrepresent the work as solely your own where prohibited</li>
                            <li>Comply with all applicable institutional policies</li>
                            <li>Provide accurate project requirements and deadlines</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            4. Payment Terms
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            All payments are made directly to the service provider via peer-to-peer payment methods. We do not store payment card details or process payments through our website. Payment is due upon agreement of project scope and may be structured as full payment upfront or partial payments based on project milestones.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            5. Revisions and Modifications
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We offer reasonable revisions to ensure client satisfaction. Revision requests must be submitted within 7 days of delivery and must align with the original project requirements. Additional work beyond the original scope may incur additional charges.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            6. Limitation of Liability
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To the maximum extent permitted by law:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>{SITE_CONFIG.name} provides services on an &quot;as is&quot; basis without warranties of any kind</li>
                            <li>We are not liable for any academic, professional, or personal consequences arising from the use or misuse of our services</li>
                            <li>Our total liability shall not exceed the amount paid for the specific service in question</li>
                            <li>We are not responsible for third-party actions, system failures, or circumstances beyond our control</li>
                            <li>Clients assume full responsibility for how they utilize delivered materials</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            7. Indemnification
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            You agree to indemnify and hold harmless {SITE_CONFIG.name}, its operators, and affiliates from any claims, damages, losses, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            8. Intellectual Property
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Upon full payment, clients receive a license to use the delivered work for personal educational purposes. The service provider retains the right to use anonymized portions of work for portfolio or demonstration purposes unless explicitly agreed otherwise.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            9. Termination
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Either party may terminate the service agreement at any time. Refunds for terminated projects will be processed according to our Refund Policy based on work completed at the time of termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            10. Governing Law
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            These terms shall be governed by and construed in accordance with applicable international commercial law. Any disputes shall be resolved through good-faith negotiation between the parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            11. Changes to Terms
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.
                        </p>
                    </section>

                    <section className="border-t pt-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Contact
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            For questions about these terms, please contact us via{" "}
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
