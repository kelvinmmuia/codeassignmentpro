import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Pricing | Affordable Programming Help",
    description:
        "Transparent pricing for all programming and data analysis services. From $12. No hidden fees. First-time discount available.",
};

export default function PricingPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="discount-badge mb-4 inline-block">
                        20% OFF First Order
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the service and size that fits your needs. No hidden fees,
                        no surprises. Custom quotes available for complex projects.
                    </p>
                </div>
            </section>

            {/* Pricing Tables */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {SERVICES.map((service) => (
                            <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4 border-b flex items-center gap-4">
                                    <div className="flex gap-2 flex-wrap">
                                        {service.icons.map((icon, idx) => (
                                            <Image
                                                key={idx}
                                                src={icon}
                                                alt={service.name}
                                                width={32}
                                                height={32}
                                                unoptimized
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {service.name}
                                        </h2>
                                        <p className="text-gray-600">{service.shortDesc}</p>
                                    </div>
                                </div>

                                {/* Pricing Grid */}
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                        {service.pricing.map((tier, index) => (
                                            <div
                                                key={tier.size}
                                                className={`p-4 rounded-lg border-2 ${index === 2
                                                    ? "border-primary bg-primary/5"
                                                    : "border-gray-100"
                                                    }`}
                                            >
                                                {index === 2 && (
                                                    <span className="text-xs font-semibold text-primary uppercase">
                                                        Popular
                                                    </span>
                                                )}
                                                <div className="text-lg font-bold text-gray-900 mb-1">
                                                    {tier.size}
                                                </div>
                                                <div className="mb-2">
                                                    <span className="original-price">
                                                        ${tier.originalPrice}
                                                    </span>
                                                    <span className="text-2xl font-bold text-primary ml-2">
                                                        ${tier.price}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500">{tier.scope}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex justify-center">
                                        <Link
                                            href={`/services/${service.id}`}
                                            className="text-primary font-medium hover:underline"
                                        >
                                            Learn more about {service.name} →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment Info */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Payment Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                First-Time Customers
                            </h3>
                            <p className="text-gray-600">
                                Get a partial preview of your work before making any payment.
                                Pay only after you&apos;re satisfied with the quality.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                                Secure Payments
                            </h3>
                            <p className="text-gray-600">
                                We accept payments through BuyMeACoffee for secure, hassle-free
                                transactions. No account required.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                Money-Back Guarantee
                            </h3>
                            <p className="text-gray-600">
                                If we can&apos;t deliver what was promised, you get a full
                                refund. No questions asked.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                Milestone Payments
                            </h3>
                            <p className="text-gray-600">
                                For large projects, we offer milestone-based payments. Pay in
                                stages as work progresses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Need a Custom Quote?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Complex project? Multiple assignments? Contact us for personalized
                        pricing.
                    </p>
                    <a
                        href={`${CONTACT.whatsappLink}?text=${encodeURIComponent("Hi, I need a custom quote for my project.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
                    >
                        Get Custom Quote
                    </a>
                </div>
            </section>
        </>
    );
}
