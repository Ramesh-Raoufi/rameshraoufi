import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo, generateJsonLd } from "@/lib/site-data";
import { Navbar } from "@/components/Navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.summary,
  authors: [{ name: personalInfo.name }],
  keywords: [
    personalInfo.title,
    "Next.js",
    "Frontend Developer",
    "Tailwind CSS",
    "React",
  ],
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
    type: "profile",
    locale: "en_US",
    siteName: personalInfo.name,
  },
  metadataBase: new URL(
    "https://" +
      (personalInfo.portfolio.replace(/^https?:\/\//, "") || "example.com")
  ),
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
        />
      </head>
      <body className={`${geistMono.variable} antialiased font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
