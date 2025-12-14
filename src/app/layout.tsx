import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, CONTACT } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Expert Programming & Data Analysis Help`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Get expert help with Python, R, SQL, data analysis, machine learning, and web development assignments. Direct peer-to-peer service with no middlemen. No signup required. 6+ years experience, 500+ projects delivered.",
  keywords: [
    "programming assignment help",
    "python assignment help",
    "data analysis help",
    "R programming help",
    "SQL assignment help",
    "machine learning assignment",
    "statistics homework help",
    "coding homework help",
    "affordable programming help",
    "no signup assignment help",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Expert Programming & Data Analysis Help`,
    description:
      "Direct peer-to-peer programming help. No middlemen, no signup, no hidden fees. Get expert help with Python, R, SQL, and more. Fast, affordable, reliable.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeAssignment Pro - Expert Programming Help",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Expert Programming Help`,
    description:
      "Direct peer-to-peer programming help. No middlemen, no signup. Expert assistance with Python, R, SQL, data analysis & more.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

// JSON-LD Structured Data for SEO and Google Ads
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_CONFIG.name,
  description:
    "Expert programming and data analysis assignment help. Direct peer-to-peer service with no middlemen, no signup required.",
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/icon.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT.whatsapp,
    contactType: "customer service",
    availableLanguage: ["English"],
    areaServed: "Worldwide",
  },
  sameAs: [CONTACT.buymeacoffee],
  priceRange: "$12 - $250+",
  serviceType: [
    "Python Programming",
    "Data Analysis",
    "R Programming",
    "SQL Database",
    "Machine Learning",
    "Web Development",
  ],
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Programming & Data Analysis Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Python Programming Help",
          description: "Scripts, automation, data processing, ML models",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Analysis Help",
          description: "Excel, statistics, visualization, dashboards",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "R Programming Help",
          description: "Statistics, ggplot, Shiny apps, research",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
