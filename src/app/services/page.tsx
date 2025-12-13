import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Programming & Data Analysis Services",
    description:
        "Expert help with Python, R, SQL, data analysis, machine learning, and web development. View all our services and pricing.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Professional programming and data analysis help for students and
                        professionals. Fast, reliable, and affordable.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service) => (
                            <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="service-card bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-primary"
                            >
                                <div className="mb-4">
                                    <div className="flex gap-2 mb-4 flex-wrap">
                                        {service.icons.map((icon, idx) => (
                                            <Image
                                                key={idx}
                                                src={icon}
                                                alt={service.name}
                                                width={40}
                                                height={40}
                                                unoptimized
                                            />
                                        ))}
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                    {service.name}
                                </h2>
                                <p className="text-gray-600 mb-4">{service.shortDesc}</p>

                                {/* Keywords */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {service.keywords.slice(0, 3).map((kw, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                        >
                                            {kw}
                                        </span>
                                    ))}
                                </div>

                                {/* Pricing Preview */}
                                <div className="border-t pt-4 mt-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-sm text-gray-500">Starting at</span>
                                            <div className="flex items-center gap-2">
                                                <span className="original-price">
                                                    ${service.pricing[0].originalPrice}
                                                </span>
                                                <span className="text-2xl font-bold text-primary">
                                                    ${service.pricing[0].price}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-primary font-medium">
                                            View details →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Not Sure Which Service You Need?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Send us your assignment details and we&apos;ll recommend the best
                        approach and provide a custom quote.
                    </p>
                    <a
                        href={`${CONTACT.whatsappLink}?text=${encodeURIComponent("Hi, I have an assignment but I'm not sure which service I need. Can you help?")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Get Free Consultation
                    </a>
                </div>
            </section>
        </>
    );
}
