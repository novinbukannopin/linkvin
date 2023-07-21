"use client";

import "./globals.css";
import { Maven_Pro } from "next/font/google";

import { ThemeProvider } from "next-themes";

const inter = Maven_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Linky - Novin",
  description: "Created by Novin.",
  icon: {
    icons: "./favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
