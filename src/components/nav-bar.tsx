"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import NavBarItem from "@/components/nav-bar-item";
import DarkModeToggle from "@/components/dark-mode-toggle";

import { currentUser } from "@/data/current-user";

import { IconHelpHexagon, IconPropeller } from "@tabler/icons-react";
import { dummyUsers } from "@/data/dummy-users";

export default function NavBar() {
  // Hooks
  const pathname = usePathname();

  // States
  const [isOpen, setIsOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  // Functions
  const isPublicRoute = () => {
    const publicRoutes: string[] = [
      "/hows-it-work",
      "/premium",
      "/help-center",
    ];
    return (
      pathname === "/" ||
      publicRoutes.some((route) => pathname.startsWith(route))
    );
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  // Effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-4 fixed top-0 left-0 right-0 px-8 ${
        shrink ? "md:py-4" : "md:py-8"
      } flex flex-row items-center justify-between w-full bg-neutral-100 dark:bg-dark ${
        isPublicRoute() ? "" : ""
      } transition-all duration-500 ease-in-out z-50`}
    >
      {/* Logo */}
      <Link
        href={`/`}
        className={`font-bold text-lg hover:text-accent transition-all duration-500 ease-in-out`}
      >
        fair<span className={`font-light`}>Dinkum</span>
      </Link>

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
        className={`px-8 md:pr-0 flex-grow absolute md:relative top-0 h-screen ${
          isOpen ? "max-h-screen py-8 md:py-0" : "max-h-0 py-0"
        } md:max-h-full left-0 right-0 flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 bg-accent md:bg-transparent overflow-hidden z-40 transition-all duration-500 ease-in-out`}
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
          <NavBarItem title={"Home"} href={"/"} onClick={closeMenu} />
          <NavBarItem
            title={"How's it work?"}
            href={"/hows-it-work"}
            onClick={closeMenu}
          />
          {/*<NavBarItem title={"Premium"} href={"/premium"} onClick={closeMenu} />*/}
        </ul>

        <section
          className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-2`}
        >
          <DarkModeToggle />
          <Link
            href={`/help-center/`}
            className={`ml-1 flex items-center gap-2 font-light text-xl text-dark md:text-dark md:dark:text-light md:hover:text-accent transition-all duration-500 ease-in-out`}
            onClick={closeMenu}
          >
            <span className={`block md:hidden`}>Info </span>
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
            href={`/login`}
            className={`md:px-4 md:py-2 md:bg-accent rounded-full font-light text-dark md:text-light text-xl md:text-xs w-max whitespace-nowrap`}
            onClick={closeMenu}
          >
            Get Started
          </Link>
          <Link
            href={`/user/${
              dummyUsers.find((account) => account.user_id === currentUser)!
                .username
            }`}
            className={`md:px-4 md:py-2 md:bg-accent rounded-full font-light text-dark md:text-light text-xl md:text-xs w-max whitespace-nowrap`}
            onClick={closeMenu}
          >
            My Profile
          </Link>
        </section>
      </div>
    </nav>
  );
}
