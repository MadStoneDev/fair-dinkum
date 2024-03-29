import type { Metadata } from "next";

import React from "react";

import "./globals.css";
import MainFooter from "@/components/MainFooter";

export const metadata: Metadata = {
  title: "Fair Dinkum | ",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/gns5ybz.css" />
      </head>
      {children}
    </html>
  );
}
