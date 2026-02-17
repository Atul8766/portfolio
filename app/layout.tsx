import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Atul | Fullstack Developer Portfolio",
  description:
    "Fullstack Developer specializing in Shopify apps, scalable SaaS systems, backend architecture, and production-grade web platforms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
