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
      className={`relative w-7 h-8 overflow-hidden`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <article
        className={`absolute ${
          theme === "dark" ? "top-0 hover:-top-3" : "-top-8 hover:-top-5"
        } flex flex-col items-center w-7 h-16 text-dark dark:text-light transition-all" +
          " duration-300 ease-in-out`}
      >
        <button className={`flex justify-center items-center w-7 h-8`}>
          <IconSunHigh />
        </button>
        <button className={`flex justify-center items-center w-7 h-8`}>
          <IconMoon />
        </button>
      </article>
    </section>
  );
}
