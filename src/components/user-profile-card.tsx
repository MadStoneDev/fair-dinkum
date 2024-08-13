import React from "react";
import Link from "next/link";

import Avatar from "@/components/avatar";
import { normaliseTotal } from "@/utils/general";
import TrackUserButton from "@/components/track-user-button";

import { Footprints, Lasso, MessageCircle, Search } from "lucide-react";
import { User } from "@/lib/types";
import {
  IconMessageLanguage,
  IconPencil,
  IconSettings,
} from "@tabler/icons-react";
import { currentUser } from "@/data/current-user";

export default function UserProfileCard({ user }: { user: User }) {
  // States
  // const [bgPosition, setBgPosition] = useState("50% 50%");

  // Refs
  // const cardRef = useRef<HTMLDivElement>(null);
  // const animationFrameRef = useRef<number | null>(null);
  // const currentX = useRef<number>(50);
  // const currentY = useRef<number>(50);

  // Functions
  // const handleMouseMove = (event: React.MouseEvent) => {
  //   if (!cardRef.current) return;
  //
  //   const rect = cardRef.current.getBoundingClientRect();
  //   const xPos = ((event.clientX - rect.left) / rect.width) * 100;
  //   const yPos = ((event.clientY - rect.top) / rect.height) * 100;
  //   currentX.current = xPos;
  //   currentY.current = yPos;
  //
  //   setBgPosition(`${xPos}% ${yPos}%`);
  // };
  //
  // const interpolateToCenter = () => {
  //   const targetX = 50;
  //   const targetY = 50;
  //
  //   const step = () => {
  //     const deltaX = targetX - currentX.current;
  //     const deltaY = targetY - currentY.current;
  //
  //     if (Math.abs(deltaX) < 0.1 && Math.abs(deltaY) < 0.1) {
  //       setBgPosition(`50% 50%`);
  //       animationFrameRef.current = null;
  //       return;
  //     }
  //
  //     currentX.current += deltaX / 10;
  //     currentY.current += deltaY / 10;
  //
  //     setBgPosition(`${currentX.current}% ${currentY.current}%`);
  //     animationFrameRef.current = requestAnimationFrame(step);
  //   };
  //
  //   if (animationFrameRef.current === null) {
  //     animationFrameRef.current = requestAnimationFrame(step);
  //   }
  // };
  //
  // const handleMouseLeave = () => {
  //   if (animationFrameRef.current !== null) {
  //     cancelAnimationFrame(animationFrameRef.current);
  //     animationFrameRef.current = null;
  //   }
  //
  //   interpolateToCenter();
  // };
  //
  // const handleMouseOver = () => {
  //   if (animationFrameRef.current !== null) {
  //     cancelAnimationFrame(animationFrameRef.current);
  //     animationFrameRef.current = null;
  //   }
  // };

  return (
    <section
      // ref={cardRef}
      className={`pb-4 relative flex flex-col items-center bg-light dark:bg-gray w-full h-min lg:rounded-2xl text-center overflow-hidden`}
      // onMouseMove={handleMouseMove}
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseLeave}
    >
      {/* User Tools */}
      {user.user_id === currentUser && (
        <article
          className={`p-2 absolute top-[150px] md:top-[250px] right-0 flex items-stretch gap-3 md:gap-4 transition-all duration-500 ease-in-out`}
        >
          <Link
            href={`/user/edit-profile}`}
            className={`px-1 md:px-2 py-1 rounded-full hover:bg-accent hover:text-light hover:dark:text-dark transition-all duration-500 ease-in-out`}
          >
            <div className={`flex items-center gap-1 h-full`}>
              <span className={`hidden md:block text-xs`}>Edit Profile</span>
              <IconPencil size={20} />
            </div>
          </Link>
          <Link
            href={`/user/settings}`}
            className={`px-1 md:px-2 py-1 rounded-full hover:bg-accent hover:text-light hover:dark:text-dark transition-all duration-500 ease-in-out`}
          >
            <div className={`flex items-center gap-1 h-full`}>
              <span className={`hidden md:block text-xs`}>Settings</span>
              <IconSettings size={22} />
            </div>
          </Link>
        </article>
      )}

      {/* Header */}
      <article
        className={`w-full h-[150px] md:h-[250px] transition-all duration-500 ease-in-out`}
        style={{
          backgroundImage: `url(${user.cover})`,
          // backgroundSize: `110%`,
          backgroundSize: `cover`,
          // backgroundPosition: bgPosition,
          backgroundPosition: `50% 50%`,
          backgroundRepeat: `no-repeat`,
          transition: `none`,
        }}
      ></article>

      {/* Avatar */}
      <article className={`-mt-[85px] grid place-content-center`}>
        <Avatar
          username={user.username}
          progress={user.progress}
          level={user.level}
          image={user.avatar}
          size={"large"}
        />
      </article>

      {/* Information */}
      <article className={`my-4 grid place-content-center`}>
        <h1 className={`font-semibold text-2xl text-dark dark:text-light`}>
          {user.username}
        </h1>
        <h3 className={`text-base opacity-50`}>{user.tagline}</h3>
      </article>

      {/* Stats */}
      <div className={`mt-6 mb-4 grid grid-cols-3`}>
        {/* Answers */}
        <section className={`grid`}>
          <article
            className={`px-4 flex flex-col gap-1 justify-center items-center border-r-[0.5px] border-dark/10 dark:border-light/20 w-20`}
          >
            <IconMessageLanguage
              size={30}
              strokeWidth={1.75}
              className={`h-8`}
            />
            <h3 className={`font-semibold text-xs md:text-sm`}>
              {normaliseTotal(60)}
            </h3>
          </article>
        </section>

        {/* Stats */}
        {/* Trackers */}
        <section className={`flex flex-col`}>
          <Link
            href={`/user/${user.username}/trackers`}
            className={`px-4 flex flex-col gap-1 justify-center items-center border-r-[0.5px] border-dark/10 dark:border-light/20 w-20 hover:text-accent transition-all duration-500 ease-in-out`}
          >
            <Footprints size={24} strokeWidth={2.25} className={`h-8`} />
            <h3 className={`font-semibold text-xs md:text-sm`}>
              {normaliseTotal(user.trackers)}
            </h3>
          </Link>
        </section>

        {/* Tracking */}
        <section className={`flex flex-col`}>
          <Link
            href={`/user/${user.username}/tracking`}
            className={`px-4 flex flex-col gap-1 justify-center items-center w-20 hover:text-accent transition-all duration-500 ease-in-out`}
          >
            <Lasso size={24} strokeWidth={2.25} className={`h-8`} />
            <h3 className={`font-semibold text-xs md:text-sm`}>
              {normaliseTotal(user.tracking)}
            </h3>
          </Link>
        </section>
      </div>

      {/* Badges - Sprint#3 or Sprint#4 */}

      {/* Links - Sprint#2 or Sprint#3 */}

      {/* Actions */}
      <article className={`p-4 grid grid-cols-1 gap-4 w-[200px] text-sm`}>
        <TrackUserButton />
      </article>
    </section>
  );
}
