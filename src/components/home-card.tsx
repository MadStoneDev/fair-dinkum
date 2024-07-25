"use client";

import { useEffect, useState, useRef, ReactNode, CSSProperties } from "react";
import styled from "styled-components";

interface HomeCardProps {
  children?: ReactNode;
  width?: number;
  height?: number | null;
  aspectRatio?: number;
  highlighted?: boolean;
  hiddenTitle?: string;
  hiddenDescription?: string;
  responsive?: boolean;
  className?: string;
  styles?: CSSProperties;
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const MainCard = styled.article.attrs<{ $responsive: Boolean }>(
  (props) => ({
    $responsive: props.$responsive || false,
  }),
)<HomeCardProps>`
  ${(props) =>
    props.$responsive
      ? `
    width: ${(2 * props.width!) / 3}px;
    min-width: ${(2 * props.width!) / 3}px;
    height: ${props.height ? props.height / 2 + "px" : "auto"};
      
    @media (min-width: ${breakpoints.sm}px) {
      
    }

    @media (min-width: ${breakpoints.md}px) {
      width: ${props.width}px;
      min-width: ${props.width}px;
      height: ${props.height ? props.height + "px" : "auto"};
    }

    @media (min-width: ${breakpoints.lg}px) {
    }

    @media (min-width: ${breakpoints.xl}px) {
    }

    @media (min-width: ${breakpoints[`2xl`]}px) {
    }
  `
      : `
  width: ${props.width}px;
  min-width: ${props.width}px;
  height: ${props.height ? props.height + "px" : "auto"};
  `}
}
`;

export default function HomeCard({
  children,
  width = 350,
  height = null,
  aspectRatio = 3 / 4,
  highlighted = false,
  hiddenTitle = "Cool Username",
  hiddenDescription = "user's tagline",
  responsive = false,
  className,
  styles,
}: HomeCardProps) {
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
    if (highlighted && window.innerWidth > breakpoints.md) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [highlighted]);

  useEffect(() => {}, []);

  return (
    <MainCard
      className={`relative bg-light rounded-[2rem] transition-all duration-500 ease-in-out ${className}`}
      style={{
        aspectRatio: aspectRatio,
        transform: `translateY(${isActive ? "-100px" : "0"})`,
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        ...styles,
      }}
      width={width}
      height={height}
      $responsive={responsive}
      onClick={() => setIsActive(!isActive)}
    >
      {children}
      <div className={`absolute bottom-0 py-4 translate-y-full`}>
        <h3 className="text-2xl sm:text-3xl tracking-tighter text-dark dark:text-light">
          {hiddenTitle}
        </h3>
        <h4
          className={`-mt-1 text-xl sm:text-2xl font-light text-gray/30 dark:text-light/30`}
        >
          {hiddenDescription}
        </h4>
      </div>
    </MainCard>
  );
}
