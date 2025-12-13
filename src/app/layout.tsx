import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    "Get expert help with Python, R, SQL, data analysis, machine learning, and web development assignments. 6+ years experience, 500+ projects delivered. Fast turnaround, affordable prices.",
  keywords: [
    "programming assignment help",
    "python assignment help",
    "data analysis help",
    "R programming help",
    "SQL assignment help",
    "machine learning assignment",
    "statistics homework help",
    "coding homework help",
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
      "Get expert help with Python, R, SQL, data analysis, and machine learning assignments. Fast, affordable, reliable.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Expert Programming Help`,
    description: "Expert programming and data analysis assignment help.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
