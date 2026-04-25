import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: 'Krittika Tiwari | Software Developer',
  description:
    'Portfolio of Krittika Tiwari — Software Developer skilled in React, Next.js, Node.js and AI/ML. Building scalable apps and efficient APIs.',
  keywords: ['Software Developer', 'React', 'Next.js', 'Node.js', 'Portfolio', 'Krittika Tiwari'],
  authors: [{ name: 'Krittika Tiwari' }],
  openGraph: {
    title: 'Krittika Tiwari | Software Developer',
    description: 'Software Developer skilled in React, Next.js & Node.js — building scalable apps, efficient APIs, and exploring AI/ML.',
    url: 'https://krittikatiwari.vercel.app',
    siteName: 'Krittika Tiwari',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krittika Tiwari | Software Developer',
    description: 'Software Developer skilled in React, Next.js & Node.js.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>{children}</body>
    </html>
  );
}
