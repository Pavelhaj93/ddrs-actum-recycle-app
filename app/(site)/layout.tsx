import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Actum recycle App",
  description: "DDRS Actum recycle App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
