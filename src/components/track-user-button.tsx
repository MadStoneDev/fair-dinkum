"use client";

import { useState } from "react";
import { Footprints } from "lucide-react";

export default function TrackUserButton({ action }: { action?: () => void }) {
  // States
  const [isTracking, setIsTracking] = useState(false);

  return (
    <button
      className={`p-2 flex items-center justify-center gap-1 aspect-square ${
        isTracking
          ? "bg-neutral-100 dark:bg-dark text-dark/50 dark:text-light/50 shadow-inner shadow-dark/20 hover:scale-[97%]"
          : "bg-dark dark:bg-light shadow-md shadow-dark/60 hover:shadow-xl hover:shadow-dark/30 text-light dark:text-dark hover:scale-[103%]"
      } rounded-xl font-medium transition-all duration-500 ease-in-out`}
      onClick={() => {
        action?.();
        setIsTracking(!isTracking);
      }}
    >
      {isTracking ? (
        "Stop Tracking"
      ) : (
        <>
          Track
          <Footprints size={18} />
        </>
      )}
    </button>
  );
}
