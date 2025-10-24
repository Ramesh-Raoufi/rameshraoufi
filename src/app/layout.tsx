import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo, generateJsonLd } from "@/lib/site-data";
import { Navbar } from "@/components/Navbar";

const FALLBACK_PORTFOLIO_URL = "https://rameshraoufi.me";
const sanitizedPortfolioUrl =
  personalInfo.portfolio && /^https?:\/\//.test(personalInfo.portfolio)
    ? personalInfo.portfolio
    : FALLBACK_PORTFOLIO_URL;
const metadataBaseUrl = new URL(sanitizedPortfolioUrl);
const ogImagePath = "/profile.jpg";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.summary,
  applicationName: personalInfo.shortName,
  referrer: "origin-when-cross-origin",
  creator: personalInfo.name,
  publisher: personalInfo.name,
  category: "technology",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  authors: [{ name: personalInfo.name }],
  keywords: [
    personalInfo.name,
    personalInfo.shortName,
    personalInfo.title,
    personalInfo.location,
    "Next.js",
    "Frontend Developer",
    "Tailwind CSS",
    "React",
    "UI Engineer",
    "Design Systems",
    ...personalInfo.languages,
  ],
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
    url: sanitizedPortfolioUrl,
    type: "profile",
    locale: "en_US",
    siteName: personalInfo.name,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: `${personalInfo.shortName} portrait`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  metadataBase: metadataBaseUrl,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#05070f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = JSON.stringify(
    generateJsonLd(metadataBaseUrl.toString())
  );

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </head>
      <body className={`${geistMono.variable} antialiased font-sans`}>
        <a
          href="#main-content"
          className="pointer-events-auto fixed left-4 top-4 z-[60] -translate-y-full rounded-full bg-[color:var(--foreground)] px-4 py-2 text-sm font-medium text-[color:var(--background)] shadow-lg transition focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
        >
          Skip to main content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
