import "./globals.css";

import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";
import NavBar from "@/components/nav-bar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "fairDinkum | Real Questions. Real Answers.",
  description: "It's real. It's genuine. It's fairDinkum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`relative flex flex-col gap-6 min-h-screen bg-neutral-100 dark:bg-dark`}
      >
        <ThemeProvider>
          {/* Nav Bar */}
          <NavBar />

          {children}

          {/* Footer */}
          <footer className="absolute bottom-0 py-3 flex items-center justify-center w-full text-center text-[0.7rem] font-light text-dark/30 dark:text-light/30">
            Copyright &copy; 2024{" "}
            <Link
              href="https://madstone.dev"
              className={`ml-1 px-1 hover:bg-accent hover:text-light transition-all duration-300 ease-in-out`}
            >
              MadStoneDev
            </Link>
            . All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
