"use client";

import { useEffect, useState, useRef } from "react";

export default function HomeFeature({ children }: any) {
  // States
  const [indicatorLeft, setIndicatorLeft] = useState<number>(0);
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const [clientWidth, setClientWidth] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [startScrollLeft, setStartScrollLeft] = useState<number>(0);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [positions, setPositions] = useState<
    { element: HTMLElement; top: number }[]
  >([]);

  const targetX = 420;
  const leftRange = 100;
  const rightRange = 200;
  const maxOffset = -80;

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

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
    if (rowRef.current && containerRef.current && indicatorRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elements = rowRef.current.children;

      const newPositions = Array.from(elements).map((element: any) => {
        const rect = element.getBoundingClientRect();
        const xPosition = rect.left - containerRect.left;

        const translateTop = calculateTop(
          xPosition,
          targetX,
          leftRange,
          rightRange,
          maxOffset,
        );
        return { element, top: translateTop };
      });

      setPositions(newPositions);

      setScrollLeft(containerRef.current?.scrollLeft);
      setScrollWidth(rowRef.current?.scrollWidth);
      setClientWidth(containerRef.current?.clientWidth);

      setIndicatorLeft(
        (containerRef.current?.scrollLeft * indicatorRef.current?.clientWidth) /
          rowRef.current?.scrollWidth,
      );
      setIndicatorWidth(
        (containerRef.current?.clientWidth / rowRef.current?.scrollWidth) * 100,
      );
    }
  };

  const handlePointerDown = (e: PointerEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setStartScrollLeft(scrollLeft);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartX;
    const newScrollLeft =
      startScrollLeft + (deltaX / clientWidth) * scrollWidth;
    containerRef.current?.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Hooks
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
    } else {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    }
  }, [isDragging]);

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
    <div className="relative flex-grow flex flex-col w-full">
      <section className={`absolute mb-10 p-8 h-20`}>
        <h2 className={`text-2xl font-medium`}>G'day, Mate! Welcome!</h2>
        <h3 className={`text-sm text-gray/50 dark:text-light/30`}>
          Real questions. Real answers. It's{" "}
          <span className={`font-bold`}>fair</span>Dinkum!
        </h3>
      </section>
      <section
        ref={containerRef}
        className={`feature-scroll pl-8 pt-28 w-full overflow-x-auto`}
        style={{ whiteSpace: "nowrap" }}
      >
        <div
          ref={rowRef}
          className={`flex gap-4 h-full`}
          style={{ paddingRight: "2rem" }}
        >
          {children}
          <div className={`min-w-4 h-full`}></div>
        </div>
      </section>
      <section className={`my-4 flex justify-center w-full`}>
        <div
          ref={indicatorRef}
          className={`relative w-12 h-3 rounded-full bg-dark/30 dark:bg-light/20 transition-all duration-500 ease-in-out`}
        >
          <div
            className={`h-full bg-light rounded-full shadow-lg shadow-gray/30`}
            style={{
              width: `${indicatorWidth}%`,
              transform: `translateX(${indicatorLeft}px)`,
            }}
          ></div>
        </div>
      </section>
    </div>
  );
}
