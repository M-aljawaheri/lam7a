"use client";
import Head from "next/head";
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
      <Head>
        <title>Lam7a - CMU-Qatar Student Magazine</title>
        <meta
          name="description"
          content="Lam7a is the official student magazine of CMU-Qatar, showcasing student stories, news, and creative works."
        />
        <meta
          name="keywords"
          content="CMUQ, Student Magazine, Lam7a, Qatar, University, News, Stories"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
