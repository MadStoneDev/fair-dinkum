"use client";

import { useEffect, useState, useRef } from "react";

export default function HomeCard({
  children,
  width = 350,
  height = null,
  aspectRatio = 3 / 4,
  highlighted = false,
  hiddenTitle = "Cool Username",
  hiddenDescription = "user's tagline",
  className,
  styles,
}: {
  children?: any;
  width?: number;
  height?: number | null;
  aspectRatio?: number;
  highlighted?: boolean;
  hiddenTitle?: string;
  hiddenDescription?: string;
  className?: string;
  styles?: any;
}) {
  // States
  const [isActive, setIsActive] = useState<boolean>(false);

  // Refs
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Hooks
  useEffect(() => {
    if (isActive && !highlighted) {
      timerRef.current = setTimeout(() => {
        setIsActive(false);
      }, 2000);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
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
      className={`relative bg-light rounded-[2rem] transition-all duration-500 ease-in-out ${className}`}
      style={{
        width: `${width}px`,
        minWidth: `${width}px`,
        height: `${height}px`,
        aspectRatio: aspectRatio,
        transform: `translateY(${isActive ? "-100px" : "0"})`,
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
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
