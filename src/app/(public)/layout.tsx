import React from "react";
import MainFooter from "@/components/MainFooter";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`flex h-dvh bg-neutral-100`}>
      {children}
      <MainFooter />
    </body>
  );
}
