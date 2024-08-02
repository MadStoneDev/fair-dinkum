"use client";

import React from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`
  position: relative;
`;

interface LevelColorsProps {
  [key: number]: {
    bg: string;
    text: string;
    fill: string;
  };
}

export default function Avatar({
  progress,
  level,
  size = 100,
  image = "",
}: {
  progress: number;
  level: number;
  size?: number;
  image?: string;
}) {
  const levelColors: LevelColorsProps = {
    1: { bg: "bg-light", text: "text-dark", fill: "fill-neutral-700" },
    5: { bg: "bg-neutral-500", text: "text-dark", fill: "fill-neutral-500" },
    10: { bg: "bg-lime-400", text: "text-dark", fill: "fill-lime-400" },
    20: { bg: "bg-emerald-400", text: "text-dark", fill: "fill-emerald-400" },
    30: { bg: "bg-teal-300", text: "text-dark", fill: "fill-teal-300" },
    40: { bg: "bg-sky-500", text: "text-light", fill: "fill-sky-500" },
    50: { bg: "bg-blue-600", text: "text-light", fill: "fill-blue-600" },
    60: { bg: "bg-indigo-700", text: "text-light", fill: "fill-indigo-700" },
    70: { bg: "bg-purple-600", text: "text-light", fill: "fill-purple-600" },
    80: { bg: "bg-fuchsia-800", text: "text-light", fill: "fill-fuchsia-800" },
    90: { bg: "bg-pink-500", text: "text-light", fill: "fill-pink-500" },
    100: { bg: "bg-rose-700", text: "text-light", fill: "fill-rose-700" },
    125: { bg: "bg-amber-500", text: "text-light", fill: "fill-amber-500" },
    150: { bg: "bg-yellow-400", text: "text-dark", fill: "fill-yellow-400" },
  };

  const getLevelColor = (level: number) => {
    return Object.keys(levelColors).reduce((acc, threshold) => {
      return level >= parseInt(threshold)
        ? levelColors[parseInt(threshold)]
        : acc;
    }, levelColors[1]);
  };

  return (
    <AvatarWrapper style={{ width: `${size}px` }}>
      <svg viewBox="0 0 100 111">
        {/* Margin */}
        <path
          d="M10857.8 396.705c3.4-1.96 7.6-1.96 11 0 6.9 3.986 18.7 10.794 25.6 14.78 3.4 1.96 5.5 5.583 5.5 9.503v29.561c0 3.92-2.1 7.543-5.5 9.503-6.9 3.987-18.7 10.794-25.6 14.78a11.02 11.02 0 0 1-11 0c-6.9-3.986-18.7-10.793-25.6-14.78-3.4-1.96-5.5-5.583-5.5-9.503v-29.561c0-3.92 2.1-7.543 5.5-9.503 6.9-3.986 18.7-10.794 25.6-14.78Z"
          className={`fill-light dark:fill-gray`}
          transform="translate(-14800.45 -540.296) scale(1.36703)"
        />

        {/* Track */}
        <defs>
          <clipPath id="clipTrack">
            <path
              d="M10860 400.506c2-1.176 4.6-1.176 6.6 0l25.6 14.78c2 1.176 3.3 3.35 3.3 5.702v29.561c0 2.352-1.3 4.526-3.3 5.702l-25.6 14.78c-2 1.176-4.6 1.176-6.6 0l-25.6-14.78c-2-1.176-3.3-3.35-3.3-5.702v-29.561c0-2.352 1.3-4.526 3.3-5.702l25.6-14.78Z"
              transform="translate(-14800.45 -540.296) scale(1.36703)"
            />
          </clipPath>
        </defs>

        <rect
          x="0"
          y="0"
          className={`fill-gray/40 dark:fill-light/60`}
          clipPath={"url(#clipTrack)"}
          width="100%"
          height="100%"
        />

        <rect
          x="0"
          y={`${100 - progress}%`}
          className={`${getLevelColor(level).fill}`}
          clipPath={"url(#clipTrack)"}
          width="100%"
          height="100%"
        />

        {/* Inner Margin */}
        <path
          d="M10861.8 403.673a3.07 3.07 0 0 1 3 0l25.6 14.781c.9.523 1.4 1.489 1.4 2.534v29.561c0 1.046-.5 2.012-1.4 2.534l-25.6 14.781c-.9.523-2.1.523-3 0l-25.6-14.781c-.9-.522-1.4-1.488-1.4-2.534v-29.561c0-1.045.5-2.011 1.4-2.534l25.6-14.781Z"
          className={`fill-light dark:fill-gray z-20`}
          transform="translate(-14800.45 -540.296) scale(1.36703)"
        />

        {/* Image */}
        <defs>
          <clipPath id="clipImage">
            <path
              d="M10860.4 409.586c1.8-1.045 4-1.045 5.8 0l18.3 10.557a5.852 5.852 0 0 1 2.9 5.068v21.115a5.85 5.85 0 0 1-2.9 5.068l-18.3 10.557a5.757 5.757 0 0 1-5.8 0l-18.3-10.557a5.85 5.85 0 0 1-2.9-5.068v-21.115c0-2.09 1.1-4.022 2.9-5.068l18.3-10.557Z"
              transform="translate(-14800.45 -540.296) scale(1.36703)"
            />
          </clipPath>
        </defs>

        <image
          xlinkHref={image}
          className={`object-cover z-20`}
          clipPath="url(#clipImage)"
          width={`100%`}
          height={`100%`}
        />
      </svg>

      {/* User Level */}
      <div
        className={`absolute bottom-0 right-0 grid place-content-center ${
          getLevelColor(level).bg
        } ${
          getLevelColor(level).text
        } w-5 aspect-square rounded-full font-semibold text-[0.6rem] text-dark shadow-lg shadow-black/50`}
      >
        {level || 0}
      </div>
    </AvatarWrapper>
  );
}
