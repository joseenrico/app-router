"use client";

import { useState } from "react"; // Import useState
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

// Configure the Geist Sans font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure the Geist Mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const disableNavbar = ["/auth/login", "/register"]; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        
        {children}
      </body>
    </html>
  );
}
