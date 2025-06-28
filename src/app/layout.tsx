import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kareem Alkoul - Full Stack Developer",
  description: "Professional Full Stack Developer specializing in React, TypeScript, and modern web development. Based in Damascus, Syria.",
  keywords: "Full Stack Developer, Web Developer, React Developer, TypeScript, Damascus",
  openGraph: {
    title: "Kareem Alkoul - Full Stack Developer",
    description: "Professional Full Stack Developer specializing in React, TypeScript, and modern web development.",
    type: "website",
    locale: "en_US",
    url: "https://kareem-alkoul.vercel.app",
    images: [
      {
        url: "https://kareem-alkoul.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Kareem Alkoul - Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kareem Alkoul",
    "jobTitle": "Full Stack Developer",
    "url": "https://kareem-alkoul.vercel.app",
    "sameAs": [
      "https://github.com/kareem-alkoul",
      "https://linkedin.com/in/kareem-alkoul"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Damascus",
      "addressCountry": "Syria"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
