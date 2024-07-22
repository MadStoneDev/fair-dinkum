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
        className={`px-5 py-2 ${
          pathname === href
            ? "bg-accent/40 dark:bg-light/80 text-accent font-medium"
            : "text-dark dark:text-light hover:bg-accent/10 dark:hover:bg-light/20"
        } rounded-full text-xs transition-all duration-300 ease-in-out`}
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}
