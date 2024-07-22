import "./globals.css";

import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";

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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
