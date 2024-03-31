"use client";

import React, {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface SwiperProps {
  children: React.ReactNode;
  slidesPerView?: number;
  breakpoints?: Breakpoints;
  navigation?: {
    nextEl?: string;
    prevEl?: string;
  };
  className?: string;
}

interface BreakpointSettings {
  slidesPerView: number;
}

interface Breakpoints {
  [key: number]: BreakpointSettings;
}

export default function Swiper({
  children,
  slidesPerView = 4,
  className = ``,
  breakpoints = {},
  navigation = {},
}: SwiperProps) {
  // States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);

  const [slideCount, setSlideCount] = useState(slidesPerView);
  const [slidesWidth, setSlidesWidth] = useState(100 / slidesPerView);

  const [swipeDistance, setSwipeDistance] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [previousTranslateX, setPreviousTranslateX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  // Refs
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Constants
  const childrenCount = React.Children.count(children);
  const isAtEnd = currentIndex + slideCount >= childrenCount;

  // Slide Traversing Functions
  const goToNextSlide = () => {
    if (!isAtEnd) setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const goToPrevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Reset NextEl and PrevEl Disabled State
  const checkNavigation = () => {
    const nextElement = navigation?.nextEl
      ? document.querySelector(navigation.nextEl)
      : null;

    const prevElement = navigation?.prevEl
      ? document.querySelector(navigation.prevEl)
      : null;

    if (nextElement) {
      if (isAtEnd) {
        nextElement.classList.add("swiper-button-disabled");
        nextElement.removeEventListener("click", goToNextSlide);
      } else {
        nextElement.classList.remove("swiper-button-disabled");
        nextElement.addEventListener("click", goToNextSlide);
      }
    }

    if (prevElement) {
      if (currentIndex === 0) {
        prevElement.classList.add("swiper-button-disabled");
        prevElement.removeEventListener("click", goToPrevSlide);
      } else {
        prevElement.classList.remove("swiper-button-disabled");
        prevElement.addEventListener("click", goToPrevSlide);
      }
    }
  };

  // FOR SWIPE EVENTS
  // SEE TEMPSWIPER.TS

  // UseEffects
  // Verify Navigation
  useEffect(() => {
    checkNavigation();

    const nextElement = navigation?.nextEl
      ? document.querySelector(navigation.nextEl)
      : null;

    const prevElement = navigation?.prevEl
      ? document.querySelector(navigation.prevEl)
      : null;

    return () => {
      if (nextElement) nextElement.removeEventListener("click", goToNextSlide);
      if (prevElement) prevElement.removeEventListener("click", goToPrevSlide);
    };
  }, [currentIndex, slideCount]);

  // Resize Based on Breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      let matchBreakpoint = Object.keys(breakpoints).reduce(
        (prev, curr): number => {
          return width >= parseInt(curr, 10) ? parseInt(curr, 10) : prev;
        },
        0,
      );

      if (matchBreakpoint) {
        const newSlidesCount = breakpoints[matchBreakpoint].slidesPerView;

        setSlideCount(Math.min(Children.count(children), newSlidesCount));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  // Slide Width Calculation
  useEffect(() => {
    if (parentWidth && slideCount) setSlidesWidth(parentWidth / slideCount);
  }, [parentWidth, slideCount]);

  // Wrapper Sizing
  useEffect(() => {
    const wrapper = wrapperRef.current;
    let resizeObserver: ResizeObserver;

    const updateParentWidth = () => {
      if (wrapper) setParentWidth(wrapper.getBoundingClientRect().width);
    };

    if (wrapper && window.ResizeObserver) {
      resizeObserver = new window.ResizeObserver((entries) => {
        entries.forEach(updateParentWidth);
      });

      resizeObserver.observe(wrapper);
    } else {
      window.addEventListener("resize", updateParentWidth);
    }

    // Initial Update
    updateParentWidth();

    // Clean Up
    return () => {
      if (resizeObserver && wrapper) resizeObserver.unobserve(wrapper);
      else window.removeEventListener("resize", updateParentWidth);
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className={`relative ${className} w-full overflow-hidden`}
      style={{ width: "100%" }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full overflow-hidden`}
        style={{ width: `${slidesWidth * slideCount}px` }}
      >
        <div
          ref={innerRef}
          // onMouseDown={handleMouseDown}
          // onMouseMove={handleMouseMove}
          // onMouseUp={handleMouseUp}
          // onMouseLeave={handleMouseUp}
          className={`h-full`}
          style={{
            width: `${slidesWidth * Children.count(children)}px`,
            transform: `translateX(${
              -currentIndex * (parentWidth / slideCount)
            }px)`,
            transition: `transform 0.3s ease-in-out`,

            // transform: `translateX(${translateX}px)`,
            // transition:
            //   swipeDistance === 0 ? `transform 0.3s ease-in-out` : `none`,
          }}
        >
          {Children.map(children, (child, index) => (
            <article
              key={`swiper-child-${index}`}
              className={`inline-grid`}
              style={{ width: `${slidesWidth}px` }}
            >
              {child}
            </article>
          ))}
        </div>
        {!navigation?.nextEl && (
          <button className={``} onClick={goToNextSlide}>
            Next
          </button>
        )}
        {!navigation?.prevEl && (
          <button className={``} onClick={goToPrevSlide}>
            Prev
          </button>
        )}
      </div>
    </section>
  );
}
