import { Metadata } from "next";
import Image from "next/image";
import { CONTACT, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Contact Us | Get a Free Quote",
    description:
        "Contact us via WhatsApp or email for a free quote on your programming or data analysis assignment.",
};

export default function ContactPage() {
    const whatsappMessage = encodeURIComponent(
        "Hi, I need help with a programming/data analysis assignment.\n\nService needed: \nDeadline: \nBrief description: "
    );

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have an assignment? Get a free quote within minutes. We respond
                        quickly on WhatsApp.
                    </p>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* WhatsApp */}
                        <a
                            href={`${CONTACT.whatsappLink}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center hover:border-green-400 transition-colors group"
                        >
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">WhatsApp</h2>
                            <p className="text-gray-600 mb-4">
                                Fastest response - usually within minutes
                            </p>
                            <span className="text-green-600 font-semibold">
                                Chat Now →
                            </span>
                        </a>

                        {/* Email */}
                        <a
                            href={`mailto:${CONTACT.email}?subject=Assignment Help Request&body=Hi,%0A%0AI need help with:%0A%0AService:%0ADeadline:%0ADetails:`}
                            className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors group"
                        >
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Email</h2>
                            <p className="text-gray-600 mb-4">
                                {CONTACT.email}
                            </p>
                            <span className="text-primary font-semibold">
                                Send Email →
                            </span>
                        </a>
                    </div>

                    {/* What to Include */}
                    <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            What to Include in Your Message
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                    1
                                </span>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Service Type</h3>
                                    <p className="text-gray-600 text-sm">
                                        Python, R, SQL, Data Analysis, ML, etc.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                    2
                                </span>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Deadline</h3>
                                    <p className="text-gray-600 text-sm">
                                        When do you need it completed?
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                    3
                                </span>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Requirements</h3>
                                    <p className="text-gray-600 text-sm">
                                        Share instructions, rubrics, or sample data
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                    4
                                </span>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Budget (Optional)</h3>
                                    <p className="text-gray-600 text-sm">
                                        Your expected budget range
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Quick Links */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Quick Links to Services
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {SERVICES.map((service) => (
                            <a
                                key={service.id}
                                href={`${CONTACT.whatsappLink}?text=${encodeURIComponent(`Hi, I need help with ${service.name}. My deadline is ___`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-gray-100 hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                <Image
                                    src={service.icons[0]}
                                    alt={service.name}
                                    width={24}
                                    height={24}
                                    unoptimized
                                />
                                <span className="font-medium">{service.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
