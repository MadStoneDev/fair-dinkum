import React from "react";
import MainFooter from "@/components/MainFooter";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`grid grid-cols-1 md:grid-cols-2 h-dvh bg-neutral-100`}>
      <div className={`hidden md:block`}></div>
      <main
        className={`relative grid place-items-center min-h-full bg-amber-500`}
      >
        {children}
        <MainFooter colour={"text-white/80"} />
      </main>
    </body>
  );
}
