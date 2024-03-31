// Swipe Functions
import React, {useCallback} from "react";

const handleStart = (position: number) => {
    setTouchStartX(position);
    setPreviousTranslateX(translateX);
};

const handleMove = (distance: number) => {
    setSwipeDistance(distance);

    setTranslateX(previousTranslateX + distance);
};

const handleEnd = () => {
    const slidesMoved = Math.round(-swipeDistance / slidesWidth);
    let newCurrentIndex = Math.min(Math.max(0, currentIndex + slidesMoved));

    setCurrentIndex(newCurrentIndex);

    // Reset Touch and Swipe Distance States
    setTranslateX(-newCurrentIndex * (parentWidth / slideCount));
    setSwipeDistance(0);
};

const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setMouseDown(true);
    handleStart(e.clientX);
}, []);

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseDown) handleMove(e.clientX - touchStartX);
};

const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseDown) {
        e.preventDefault();

        handleEnd();
        setMouseDown(false);
    }
};