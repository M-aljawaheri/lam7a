"use client";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
