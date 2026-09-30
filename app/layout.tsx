import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Bastian Krohg is a PhD candidate at the University of Oslo working on robotics for humanitarian mine action.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bastiankrohg.com"),
  title: {
    default: "Bastian Krohg — Robotics for humanitarian mine action",
    template: "%s — Bastian Krohg",
  },
  description,
  openGraph: {
    title: "Bastian Krohg",
    description,
    url: "/",
    siteName: "Bastian Krohg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
