"use client"

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import BackgroundWrapper from "../src/components/background-wrapper";
import CursorWrapper from "../src/components/cursor-wrapper";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {/* Custom Motion Cursor */}
        <CursorWrapper />

        {/* Main Background Image */}
        <div
          className="fixed inset-0 z-[-10] bg-no-repeat"
          style={{
            backgroundImage: 'url(/background.jpg)',
            backgroundSize: 'auto',
          }}
        ></div>

        {/* Dark base overlay */}
        <div className="fixed inset-0 z-[-9] bg-black/80"></div>

        {/* Additional atmospheric gradient */}
        <div className="fixed inset-0 z-[-7] bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>

        {/* Subtle warm glow effect */}
        <div className="fixed inset-0 z-[-6] bg-gradient-radial from-accent/10 via-transparent to-background/60"></div>

        {/* Subtle grid pattern overlay */}
        <div className="fixed inset-0 z-[-5] opacity-[0.02] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Additional background effects */}
        <BackgroundWrapper />

        {/* Enhanced Header */}
        <Header />

        <main className="flex-grow">
          {children}
        </main>

        {/* Enhanced Footer */}
      <Footer />
    </>
  );
}
