import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lam7a - CMU-Q Student Magazine",
  description:
    "Lam7a is the official student magazine of CMU-Qatar, showcasing student stories, news, and creative works.",
  icons: {
    icon: "/favicon.ico", // Path to the favicon in public folder
  },
  keywords:
    "CMUQ, CMU, cmu, cmuq, cmu qatar, cmuq qatar, Student Magazine, Lam7a, Qatar, University, News, Stories",
};

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
