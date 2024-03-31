import React from "react";
import MainFooter from "@/components/MainFooter";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`grid h-full min-h-dvh bg-neutral-200`}>
      {children}
      <MainFooter />
    </body>
  );
}
