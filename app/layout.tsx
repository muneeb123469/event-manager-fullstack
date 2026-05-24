import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NeonAuthUIProvider, UserButton } from "@neondatabase/auth/react";
import { authClient } from "@/lib/auth/client";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Event Planner",
  description: "Create events, share invite links, track RSVPs in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans",
        notoSans.variable,
        playfairDisplayHeading.variable,
      )}
    >
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]`}
      >
        <NeonAuthUIProvider
          authClient={authClient as any}
          defaultTheme="dark"
          emailOTP
        >
          <header className="border-b border-[var(--border)] px-6 py-4">
            <div className="mx-auto flex max-w-5xl items-center justify-between">
              <Link href="/" className="text-lg font-semibold">
                Event Planner
              </Link>
              <nav className="flex items-center gap-4">
                <Link
                  href="/dashboard"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                >
                  Dashboard
                </Link>
                <Link
                  href="/account/settings"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                >
                  Account
                </Link>
                <UserButton size="default" />
              </nav>
            </div>
          </header>
          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-8">
            {children}
          </main>
        </NeonAuthUIProvider>
      </body>
    </html>
  );
}
