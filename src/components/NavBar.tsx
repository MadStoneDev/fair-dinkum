"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LuBadgeCheck,
  LuBadgeHelp,
  LuGlobe2,
  LuLayout,
  LuMessageSquare,
  LuSettings,
  LuUserCircle,
  LuUsers2,
} from "react-icons/lu";
import Swiper from "@/components/Swiper";

export default function NavBar() {
  const pathName = usePathname();

  return (
    <nav
      className={`relative mx-auto my-2 px-8 w-full md:max-w-7xl bg-white rounded-xl shadow-xl shadow-neutral-300 overflow-hidden`}
    >
      <div
        className={`absolute left-8 top-1/2 -translate-y-1/2 h-6 w-[1px] bg-neutral-300`}
      ></div>

      <Swiper
        className={`h-20`}
        slidesPerView={2}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          520: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 5,
          },
          780: {
            slidesPerView: 6,
          },
          900: {
            slidesPerView: 7,
          },
        }}
      >
        {NAV_LINKS.map(({ name, path, icon }, index) => (
          <article
            key={`nav-link-${index}`}
            className={`group relative h-20 border-y-[6px] border-transparent hover:border-b-amber-500 overflow-hidden transition-all duration-300`}
          >
            <Link
              href={path}
              className={`absolute top-0 group-hover:-top-6 pt-6 grid place-content-center w-full text-center transition-all duration-300 ease-in-out`}
            >
              <div
                className={`grid place-content-center h-6 ${
                  pathName === path ? "text-neutral-800" : "text-neutral-400/60"
                } opacity-100 group-hover:opacity-0 transition-all duration-150 ease-in-out`}
              >
                {icon}
              </div>
              <p
                className={`pt-1 grid place-content-center h-6 text-xs sm:text-sm text-neutral-500 group-hover:text-neutral-800 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out`}
              >
                {name}
              </p>
            </Link>
            <div
              className={`absolute right-0 top-1/2 -translate-y-1/2 h-6 w-[1px] bg-neutral-300`}
            ></div>
          </article>
        ))}
      </Swiper>

      <div
        className={`cursor-pointer group swiper-button-next absolute right-0 top-0 grid place-content-center w-8 h-full hover:bg-neutral-100 transition-all duration-300 ease-in-out`}
      >
        <div
          className={`w-2.5 h-2.5 border-r-2 border-b-2 rounded-sm border-neutral-300 group-hover:border-neutral-800 -rotate-45 transition-all duration-300 ease-in-out`}
        ></div>
      </div>
      <div
        className={`cursor-pointer group swiper-button-prev absolute left-0 top-0 grid place-content-center w-8 h-full hover:bg-neutral-100 transition-all duration-300 ease-in-out`}
      >
        <div
          className={`w-2.5 h-2.5 border-b-2 border-l-2 rounded-sm border-neutral-300 group-hover:border-neutral-800 rotate-45 transition-all duration-300 ease-in-out`}
        ></div>
      </div>
    </nav>
  );
}

const NAV_LINKS = [
  {
    name: "Main Feed",
    path: "/",
    icon: <LuLayout size={22} />,
  },
  // {
  //   name: "Global Feed",
  //   path: "/global",
  //   icon: <LuGlobe2 size={22} />,
  // },
  // {
  //   name: "Communities",
  //   path: "/communities",
  //   icon: <LuUsers2 size={22} />,
  // },
  {
    name: "Asks",
    path: "/asks",
    icon: <LuBadgeHelp size={22} />,
  },
  {
    name: "Answers",
    path: "/answers",
    icon: <LuBadgeCheck size={22} />,
  },
  {
    name: "My Profile",
    path: "/me",
    icon: <LuUserCircle size={22} />,
  },
  {
    name: "Settings",
    path: "/me/settings",
    icon: <LuSettings size={22} />,
  },
];
