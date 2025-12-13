import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, CONTACT, FAQ_ITEMS } from "@/lib/constants";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return SERVICES.map((service) => ({
        slug: service.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.id === slug);

    if (!service) {
        return { title: "Service Not Found" };
    }

    return {
        title: `${service.name} Help | Expert Assistance`,
        description: `Professional ${service.name.toLowerCase()} help. ${service.shortDesc}. Fast turnaround, affordable prices, 6+ years experience.`,
        keywords: service.keywords,
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    const whatsappMessage = encodeURIComponent(
        `Hi, I need help with ${service.name}. My deadline is ___`
    );

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="flex gap-3 mb-4 flex-wrap">
                                {service.icons.map((icon, idx) => (
                                    <Image
                                        key={idx}
                                        src={icon}
                                        alt={service.name}
                                        width={56}
                                        height={56}
                                        unoptimized
                                    />
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                {service.name} Help
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">{service.shortDesc}</p>

                            {/* Keywords as tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {service.keywords.map((kw, i) => (
                                    <span
                                        key={i}
                                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {kw}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={`${CONTACT.whatsappLink}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Get Free Quote
                            </a>
                        </div>

                        {/* Pricing Card */}
                        <div className="w-full lg:w-96 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-gray-900">Pricing</h2>
                                <span className="discount-badge">Save up to 25%</span>
                            </div>

                            <div className="space-y-3">
                                {service.pricing.map((tier) => (
                                    <div
                                        key={tier.size}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                    >
                                        <div>
                                            <span className="font-semibold text-gray-900">
                                                {tier.size}
                                            </span>
                                            <p className="text-sm text-gray-500">{tier.scope}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="original-price block">
                                                ${tier.originalPrice}
                                            </span>
                                            <span className="text-xl font-bold text-primary">
                                                ${tier.price}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-gray-500 mt-4 text-center">
                                Custom quotes available for complex projects
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        What&apos;s Included
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Complete Solution", desc: "Fully working code or analysis" },
                            { title: "Documentation", desc: "Detailed comments & explanations" },
                            { title: "Unlimited Revisions", desc: "Until you're satisfied" },
                            { title: "24/7 Support", desc: "Quick responses on WhatsApp" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {FAQ_ITEMS.slice(0, 4).map((item, index) => (
                            <details
                                key={index}
                                className="bg-white rounded-lg border border-gray-200 p-4 group"
                            >
                                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                                    {item.question}
                                    <span className="text-primary group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>
                                <p className="mt-4 text-gray-600">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Other Services
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {SERVICES.filter((s) => s.id !== slug).map((s) => (
                            <Link
                                key={s.id}
                                href={`/services/${s.id}`}
                                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-center mb-2">
                                    <Image
                                        src={s.icons[0]}
                                        alt={s.name}
                                        width={32}
                                        height={32}
                                        unoptimized
                                    />
                                </div>
                                <span className="font-medium text-gray-900 text-sm">{s.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
