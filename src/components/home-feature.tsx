"use client";

import { useEffect, useState, useRef } from "react";
import { Slider } from "@/components/ui/slider";
import HomeCard from "@/components/home-card";

export default function HomeFeature({ children }: any) {
  // States
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [clientWidth, setClientWidth] = useState<number>(0);
  const [highlighted, setHighlighted] = useState<number>(1);
  const [positions, setPositions] = useState<
    { element: HTMLElement; top: number }[]
  >([]);

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const targetX = 400;
  const leftRange = 100;
  const rightRange = 200;
  const maxOffset = -100;

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  // Functions
  const calculateTop = (
    xPosition: number,
    targetX: number,
    leftRange: number,
    rightRange: number,
    maxOffset: number,
  ): number => {
    if (xPosition >= targetX - leftRange && xPosition <= targetX) {
      const distance = Math.abs(xPosition - targetX);
      const ratio = 1 - distance / leftRange;
      return ratio * maxOffset;
    } else if (xPosition > targetX && xPosition <= targetX + rightRange) {
      const distance = Math.abs(xPosition - targetX);
      const ratio = 1 - distance / rightRange;
      return ratio * maxOffset;
    }

    return 0;
  };

  const handleScroll = () => {
    if (rowRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elements = rowRef.current.children;

      Array.from(elements).forEach((element: any, index: number) => {
        const rect = element.getBoundingClientRect();
        const xPosition = rect.left - containerRect.left;

        if (
          xPosition >= targetX - leftRange &&
          xPosition <= targetX + rightRange
        ) {
          setHighlighted(index);
        }
      });

      setScrollLeft(containerRef.current?.scrollLeft);
      setScrollWidth(rowRef.current?.scrollWidth);
      setClientWidth(containerRef.current?.clientWidth);
    }
  };

  // Hooks
  useEffect(() => {
    handleScroll();

    containerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [targetX, leftRange, rightRange, maxOffset]);

  useEffect(() => {
    positions.forEach(({ element, top }) => {
      element.style.transform = `translateY(${top}px)`;
    });
  }, [positions]);

  return (
    <div className="relative flex flex-col w-full">
      <section className={`absolute top-0 p-8 h-20 z-10`}>
        <h2 className={`text-2xl font-medium`}>G'day, Mate! Welcome!</h2>
        <h3 className={`text-sm text-gray/50 dark:text-light/30`}>
          Real questions. Real answers. It's{" "}
          <span className={`font-bold`}>fair</span>Dinkum!
        </h3>
      </section>
      <section
        ref={containerRef}
        className={`feature-scroll pt-28 w-full overflow-x-auto transition-all duration-500 ease-in-out overflow-y-hidden`}
        style={{
          whiteSpace: "nowrap",
          scrollSnapType: "x mandatory",
          scrollPaddingInlineStart: "2rem",
        }}
      >
        <section ref={rowRef} className={`px-8 flex gap-4 h-full`}>
          {DUMMY_DATA.map((data, index) => (
            <HomeCard
              key={`home-card-${index}`}
              highlighted={index === highlighted}
              responsive={true}
            />
          ))}
          <div className={`w-4 min-w-4 aspect-square`} />
        </section>
      </section>
      {/*<section className={`my-4 flex justify-center w-full`}>*/}
      {/*  <Slider*/}
      {/*    defaultValue={[sliderValue]}*/}
      {/*    onValueChange={handleSliderChange}*/}
      {/*    min={0}*/}
      {/*    max={100}*/}
      {/*    step={1}*/}
      {/*    className={`w-40`}*/}
      {/*    trackClassName={``}*/}
      {/*    thumbClassName={``}*/}
      {/*  />*/}
      {/*</section>*/}
    </div>
  );
}

const DUMMY_DATA: {
  children?: any;
  highlighted?: boolean;
  hiddenTitle?: string;
  hiddenDescription?: string;
  className?: string;
  styles?: any;
}[] = [{}, {}, {}, {}, {}, {}, {}];
