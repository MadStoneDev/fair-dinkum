"use client";

import Link from "next/link";
import { Route } from "next";
import HomeCard from "@/components/home-card";
import { useEffect } from "react";

export default function NotFound() {
  return (
    <main className="p-8 transition-all duration-500 ease-in-out">
      {/* Main Content */}
      <h1 className={`font-bold text-4xl`}>Woah!</h1>
      <h3 className={`mb-4 text-xl font-bold`}>
        How on earth did you get here?
      </h3>
      <p className={`mb-4 text-sm font-light`}>
        I mean, <span className={`italic`}>of course</span> you're here!
        <br />I <span className={`italic`}>so</span> meant to send you here
        *cough*cough*{" "}
      </p>

      <p className={`mb-4 text-sm font-light`}>
        Now that you're here, let's now go somewhere else, aye?
      </p>

      <section
        className={`sm:pt-28 flex flex-col sm:flex-row flex-wrap gap-4 min-h-[200px] overflow-hidden`}
      >
        <HomeCard
          width={200}
          aspectRatio={1}
          hiddenTitle={"Learn"}
          hiddenDescription={"More"}
          className={`p-4 flex`}
        >
          <Link
            className={`px-3 py-2 self-end bg-dark rounded-full text-light text-xs sm:text-sm`}
            href={"/hows-it-work" as Route}
          >
            Learn
          </Link>
        </HomeCard>
        <HomeCard
          width={200}
          aspectRatio={1}
          hiddenTitle={"Explore"}
          hiddenDescription={"Premium"}
          className={`p-4 flex`}
        >
          <Link
            className={`px-3 py-2 self-end bg-dark rounded-full text-light text-xs sm:text-sm`}
            href={"/premium" as Route}
          >
            Explore
          </Link>
        </HomeCard>
        <HomeCard
          width={200}
          aspectRatio={1}
          hiddenTitle={"Return"}
          hiddenDescription={"Home"}
          className={`p-4 flex`}
        >
          <Link
            className={`px-3 py-2 self-end bg-dark rounded-full text-light text-xs sm:text-sm`}
            href={"/" as Route}
          >
            Go Now
          </Link>
        </HomeCard>
      </section>
    </main>
  );
}
