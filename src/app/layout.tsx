import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/gns5ybz.css" />
      </head>
      <body className={`flex flex-col h-dvh bg-neutral-100`}>
        <NavBar />
        <main
          className={`p-4 mx-auto flex-grow bg-white w-full max-w-3xl shadow-2xl shadow-neutral-400/60 overflow-y-auto`}
        >
          {children}
        </main>
        <MainFooter />
      </body>
    </html>
  );
}
