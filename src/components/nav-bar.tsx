"use client";

import Link from "next/link";
import { useState } from "react";
import NavBarItem from "@/components/nav-bar-item";
import DarkModeToggle from "@/components/dark-mode-toggle";
import { IconHelpHexagon, IconPropeller } from "@tabler/icons-react";

export default function NavBar() {
  // States
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`p-8 flex flex-row items-center justify-between w-full`}>
      {/* Logo */}
      <p className={`font-bold text-lg`}>
        fair<span className={`font-light`}>Dinkum</span>
      </p>

      <button
        className={`block md:hidden ${
          isOpen
            ? "text-light dark:text-dark rotate-[540deg]"
            : "text-dark dark:text-light rotate-0"
        } z-50 transition-all duration-500 ease-in-out`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconPropeller size={26} />
      </button>

      <div
        className={`flex-grow absolute md:relative top-0 h-full ${
          isOpen ? "max-h-full p-8 md:p-0" : "max-h-0 px-8 py-0"
        } left-0 right-0 flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 bg-accent md:bg-transparent overflow-hidden z-40 transition-all duration-500 ease-in-out`}
      >
        {/* Navigation */}
        <ul
          className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-2 font-light text-light dark:text-dark md:text-dark md:dark:text-light text-xs`}
        >
          <div
            className={`hidden md:block ml-4 mr-2 bg-dark/20 dark:bg-light/20`}
            style={{
              width: "0.125rem",
              height: "1.5rem",
            }}
          ></div>
          <NavBarItem title={"Home"} href={"/"} />
          <NavBarItem title={"How's it work?"} href={"/about"} />
          <NavBarItem title={"Premium"} href={"/premium"} />
        </ul>

        <section
          className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-2`}
        >
          <DarkModeToggle />
          <Link
            href={`/help-center/`}
            className={`ml-1 flex items-center gap-2 font-light text-xl text-dark md:text-dark md:dark:text-light hover:text-accent transition-all duration-500 ease-in-out`}
          >
            <span>Info </span>
            <IconHelpHexagon size={28} />
          </Link>
          <div
            className={`hidden md:block mx-2 bg-dark/20 dark:bg-light/20`}
            style={{
              width: "0.125rem",
              height: "1.5rem",
            }}
          ></div>
          {/* Auth */}
          <Link
            // href={`/login`}
            href={`/`}
            className={`md:px-4 md:py-2 md:bg-accent rounded-full font-light text-dark text-xl md:text-xs w-max whitespace-nowrap`}
          >
            Get Started
          </Link>
        </section>
      </div>
    </nav>
  );
}
