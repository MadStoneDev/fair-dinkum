import Link from "next/link";
import MainFooter from "@/components/MainFooter";
import React from "react";

export default function HomePage() {
  return (
    <main className={`grow grid place-content-center w-full`}>
      <img src={"/logo.png"} className={`w-52`} />
      <section
        className={`mt-2 pt-2 flex justify-center gap-4 border-t border-neutral-300 font-light text-neutral-500`}
      >
        {HOME_LINKS.map(({ label, path }, index) => (
          <Link
            key={index}
            href={path}
            className={`hover:text-amber-500 transition-all duration-300`}
          >
            {label}
          </Link>
        ))}
      </section>
      <MainFooter colour={""} />
    </main>
  );
}

const HOME_LINKS = [
  {
    label: "Login",
    path: "/auth/login",
  },
  {
    label: "Register",
    path: "/auth/register",
  },
];
