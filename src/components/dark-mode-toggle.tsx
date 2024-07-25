"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";

export default function DarkModeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      className={`relative w-20 md:w-7 h-8 overflow-hidden`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <article
        className={`absolute ${
          theme === "dark" ? "top-0 hover:-top-3" : "-top-8 hover:-top-5"
        } flex flex-col items-center w-20 md:w-7 h-16 text-xl text-light md:text-dark dark:text-light transition-all" +
          " duration-500 ease-in-out`}
      >
        <button
          className={`flex md:justify-center items-center gap-2 w-20 md:w-7 h-8`}
        >
          <span>Light </span>
          <IconSunHigh />
        </button>
        <button
          className={`flex md:justify-center items-center gap-2 w-20 md:w-7 h-8`}
        >
          <span>Dark </span>
          <IconMoon />
        </button>
      </article>
    </section>
  );
}
