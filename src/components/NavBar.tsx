"use client";

import { LuBadgeHelp, LuLayout, LuUserCircle, LuUsers2 } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <nav
      className={`mx-auto my-5 px-4 py-4 w-full md:max-w-7xl bg-white rounded-xl overflow-hidden`}
    >
      <div className={`flex w-fit`}>
        {NAV_LINKS.map(({ name, path, icon }, index) => (
          <article
            key={`nav-link-${index}`}
            className={`group relative inline-block w-32 h-10 border-r border-neutral-200 overflow-hidden`}
          >
            <Link
              href={path}
              className={`absolute top-0 group-hover:-top-10 grid place-content-center w-full transition-all duration-300 ease-in-out`}
            >
              <div
                className={`grid place-content-center h-10 text-neutral-400 opacity-100 group-hover:opacity-0 transition-all duration-150 ease-in-out`}
              >
                {icon}
              </div>
              <p
                className={`pt-1 grid place-content-center h-10 text-sm text-neutral-500 group-hover:text-neutral-800 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out`}
              >
                {name}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </nav>
  );
}

const NAV_LINKS = [
  {
    name: "Main Feed",
    path: "/",
    icon: <LuLayout size={26} />,
  },
  {
    name: "Communities",
    path: "/",
    icon: <LuUsers2 size={26} />,
  },
  {
    name: "Asks",
    path: "/",
    icon: <LuBadgeHelp size={26} />,
  },
  {
    name: "Account",
    path: "/",
    icon: <LuUserCircle size={26} />,
  },
];
