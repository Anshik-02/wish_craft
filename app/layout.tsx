import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Patrick_Hand } from "next/font/google";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-caveat",
});

export const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick-hand",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wish-craft-19.vercel.app"),
  title: {
    default: "Wish Craft | Personalize Your Birthday Wishes",
    template: "%s | Wish Craft"
  },
  description: "Create and share beautifully personalized birthday greeting cards and interactive websites with ease. Make your loved ones feel special with Wish Craft.",
  keywords: ["birthday", "wishes", "greeting cards", "personalized", "celebration", "wish craft"],
  authors: [{ name: "Wish Craft Team" }],
  creator: "Wish Craft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wish-craft-19.vercel.app",
    siteName: "Wish Craft",
    title: "Wish Craft | Personalized Birthday Cards",
    description: "Create and share beautifully personalized birthday greeting cards and interactive websites.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wish Craft - Create Personalized Birthday Cards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wish Craft | Personalized Birthday Cards",
    description: "Create and share beautifully personalized birthday greeting cards and interactive websites.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased ${patrick.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
