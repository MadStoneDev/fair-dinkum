"use client";

import { useEffect, useState } from "react";

export default function HomeCard({
  children,
  highlighted = false,
  hiddenTitle = "Cool Username",
  hiddenDescription = "user's tagline",
  className,
  styles,
}: {
  children?: any;
  highlighted?: boolean;
  hiddenTitle?: string;
  hiddenDescription?: string;
  className?: string;
  styles?: any;
}) {
  // States
  const [isActive, setIsActive] = useState<boolean>(false);

  // Hooks
  useEffect(() => {
    if (isActive && !highlighted) {
      setTimeout(() => {
        setIsActive(false);
      }, 2000);
    }
  }, [isActive]);

  useEffect(() => {
    if (highlighted) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [highlighted]);

  return (
    <article
      className={`relative min-w-[350px] bg-light rounded-[2rem] transition-all duration-300 ease-in-out ${className}`}
      style={{
        transform: `translateY(${isActive ? "-100px" : "0"})`,
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        aspectRatio: "3/4",
        ...styles,
      }}
      onClick={() => setIsActive(!isActive)}
    >
      {children}
      <div className={`absolute bottom-0 py-4 translate-y-full`}>
        <h3 className="text-3xl tracking-tighter text-dark dark:text-light">
          {hiddenTitle}
        </h3>
        <h4
          className={`-mt-1 text-2xl font-light text-gray/30 dark:text-light/30`}
        >
          {hiddenDescription}
        </h4>
      </div>
    </article>
  );
}
