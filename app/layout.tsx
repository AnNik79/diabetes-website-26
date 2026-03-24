import type { Metadata } from "next";
import { inter, interDisplay } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioTransport",
  description: "AI-powered Diabetes Screening using your SmartPhone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
