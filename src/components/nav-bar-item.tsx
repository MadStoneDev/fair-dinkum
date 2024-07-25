"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarItem({
  title,
  href,
}: Readonly<{
  title: React.ReactNode;
  href: string;
}>) {
  // Hooks
  const pathname = usePathname();

  // States
  // Refs

  return (
    <li>
      <Link
        className={`md:px-5 py-2 ${
          pathname === href
            ? "md:bg-accent/40 md:dark:bg-light/80 text-light md:text-accent font-medium"
            : "text-dark md:text-dark md:dark:text-light hover:bg-accent/10 dark:hover:bg-light/20"
        } rounded-full text-xl md:text-xs transition-all duration-500 ease-in-out`}
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}
