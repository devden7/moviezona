import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieZona",
  description: "consuming API from TMDB for NextJs 14 practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} background-dark_white`}>
        <ThemeProvider>
          <Navbar />
          <main className="text-black_white background-dark_white">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
