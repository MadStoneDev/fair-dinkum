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
      className={`relative w-full md:w-7 h-8 overflow-hidden`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <article
        className={`absolute ${
          theme === "dark" ? "top-0 md:hover:-top-3" : "-top-8 md:hover:-top-5"
        } flex flex-col items-center w-full md:w-7 h-16 text-xl font-light text-dark md:text-dark md:dark:text-light transition-all" +
          " duration-500 ease-in-out`}
      >
        <button
          className={`flex md:justify-center items-center gap-2 w-full md:w-7 h-8 whitespace-nowrap`}
        >
          <span className={`block md:hidden`}>Switch to Light </span>
          <IconSunHigh />
        </button>
        <button
          className={`flex md:justify-center items-center gap-2 w-full md:w-7 h-8 whitespace-nowrap`}
        >
          <span className={`block md:hidden`}>Switch to Dark </span>
          <IconMoon />
        </button>
      </article>
    </section>
  );
}
