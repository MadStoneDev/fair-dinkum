"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function InfoSidebar() {
  // Hooks
  const pathname = usePathname();

  return (
    <section
      className={`flex flex-col gap-2 font-light min-w-24 sm:min-w-32 md:min-w-auto w-24 sm:w-32 md:w-auto`}
    >
      <Link
        key={"Help Center Home"}
        href={"/help-center"}
        className={`p-2 text-sm ${
          pathname === "/help-center"
            ? "bg-accent text-white"
            : "hover:bg-accent hover:text-white"
        } transition-all duration-500 ease-in-out`}
      >
        Help Center Home
      </Link>
      <h3 className={`mt-6 text-sm font-bold`}>Support Articles</h3>
      {SUPPORT_ARTICLES.map((article) => (
        <Link
          key={article.title}
          href={article.href}
          className={`p-2 text-sm ${
            pathname === article.href
              ? "bg-accent text-white"
              : "hover:bg-accent hover:text-white"
          } transition-all duration-500 ease-in-out`}
        >
          {article.title}
        </Link>
      ))}

      <h3 className={`mt-6 text-sm font-bold`}>Info Articles</h3>
      {INFO_ARTICLES.map((article) => (
        <Link
          key={article.title}
          href={article.href}
          className={`p-2 text-sm ${
            pathname === article.href
              ? "bg-accent text-white"
              : "hover:bg-accent hover:text-white"
          } transition-all duration-500 ease-in-out`}
        >
          {article.title}
        </Link>
      ))}
    </section>
  );
}

const SUPPORT_ARTICLES = [
  {
    title: "Support Home",
    href: "/help-center/support",
  },
  {
    title: "FAQ",
    href: "/help-center/support/faq",
  },
  {
    title: "Contact Us",
    href: "/help-center/support/contact-us",
  },
  {
    title: "Submit a Ticket",
    href: "/help-center/support/submit-ticket",
  },
  {
    title: "Report a User",
    href: "/help-center/support/report-user",
  },
];

const INFO_ARTICLES = [
  {
    title: "Info Home",
    href: "/help-center/info",
  },
  {
    title: "Privacy Policy",
    href: "/help-center/info/privacy-policy",
  },
  {
    title: "Cookies Policy",
    href: "/help-center/info/cookie-policy",
  },
  {
    title: "Terms of Service",
    href: "/help-center/info/terms-of-service",
  },
  {
    title: "Guidelines",
    href: "/help-center/info/guidelines",
  },
  {
    title: "Guide for Guardians",
    href: "/help-center/info/guide-for-guardians",
  },
];
