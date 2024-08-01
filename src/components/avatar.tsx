"use client";

import React from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`
  position: relative;
`;

const AvatarTrack = styled.div``;

const AvatarProgress = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: height 0.5s ease;
  z-index: 1;
`;

export default function Avatar({
  progress,
  size = 100,
  image = "",
}: {
  progress: number;
  size?: number;
  image?: string;
}) {
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
        <path
          d="M10860 400.506c2-1.176 4.6-1.176 6.6 0l25.6 14.78c2 1.176 3.3 3.35 3.3 5.702v29.561c0 2.352-1.3 4.526-3.3 5.702l-25.6 14.78c-2 1.176-4.6 1.176-6.6 0l-25.6-14.78c-2-1.176-3.3-3.35-3.3-5.702v-29.561c0-2.352 1.3-4.526 3.3-5.702l25.6-14.78Z"
          className={`fill-dark/50`}
          transform="translate(-14800.45 -540.296) scale(1.36703)"
        />

        {/* Inner Margin */}
        <path
          d="M10861.8 403.673a3.07 3.07 0 0 1 3 0l25.6 14.781c.9.523 1.4 1.489 1.4 2.534v29.561c0 1.046-.5 2.012-1.4 2.534l-25.6 14.781c-.9.523-2.1.523-3 0l-25.6-14.781c-.9-.522-1.4-1.488-1.4-2.534v-29.561c0-1.045.5-2.011 1.4-2.534l25.6-14.781Z"
          className={`fill-light dark:fill-gray`}
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
          className={`object-cover`}
          clipPath="url(#clipImage)"
          width={`100%`}
          height={`100%`}
        />
      </svg>

      {/*<AvatarProgress*/}
      {/*  className={`bg-accent`}*/}
      {/*  style={{*/}
      {/*    height: `${progress}%`,*/}
      {/*    clipPath: "url(#clipTrack)",*/}
      {/*  }}*/}
      {/*/>*/}
    </AvatarWrapper>
  );
}
