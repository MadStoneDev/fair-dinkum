import Avatar from "@/components/avatar";

import { IconMessageForward } from "@tabler/icons-react";
import TrackUserButton from "@/components/track-user-button";

export default function UserProfileCard() {
  return (
    <section
      className={`flex flex-col items-center bg-light dark:bg-gray w-full h-min lg:rounded-2xl text-center overflow-hidden`}
    >
      {/* Header */}
      <article
        className={`w-full h-32`}
        style={{
          backgroundImage: `url(/dummy/cover.jpg)`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
        }}
      ></article>

      {/* Avatar */}
      <article className={`-mt-[85px] grid place-content-center`}>
        <Avatar
          username={"username"}
          progress={60}
          level={80}
          image={"/dummy/avatar.jpg"}
          size={"large"}
        />
      </article>

      {/* Information */}
      <article className={`my-4 grid place-content-center`}>
        <h1 className={`font-semibold text-2xl text-dark dark:text-light`}>
          username
        </h1>
        <h3 className={`text-base opacity-50`}>a cool tagline</h3>
      </article>

      {/* Stats */}
      <section className={`mt-6 mb-4 grid grid-cols-3`}>
        {/* Answers */}
        <div
          className={`px-6 flex flex-col items-center border-r-[0.5px] border-dark/10 dark:border-light/20`}
        >
          <h3 className={`font-semibold text-xs md:text-sm`}>870</h3>
          <h4 className={`text-xs`}>Answers</h4>
        </div>

        {/* Trackers */}
        <div
          className={`px-6 flex flex-col items-center border-r-[0.5px] border-dark/10 dark:border-light/20`}
        >
          <h3 className={`font-semibold text-xs md:text-sm`}>870</h3>
          <h4 className={`text-xs`}>Trackers</h4>
        </div>

        {/* Tracking */}
        <div className={`px-6 flex flex-col items-center`}>
          <h3 className={`font-semibold text-xs md:text-sm`}>870</h3>
          <h4 className={`text-xs`}>Tracking</h4>
        </div>
      </section>

      {/* Badges - Sprint#3 or Sprint#4 */}

      {/* Links - Sprint#2 or Sprint#3 */}

      {/* Actions */}
      <article className={`p-8 grid grid-cols-2 gap-4 w-full max-w-xs text-sm`}>
        <TrackUserButton />
        <button
          className={`p-2 flex items-center justify-center gap-1 aspect-square bg-accent rounded-xl text-light font-medium shadow-md shadow-dark/60 hover:shadow-xl hover:shadow-dark/30 hover:scale-[103%] transition-all duration-500 ease-in-out`}
        >
          Ask
          <IconMessageForward size={24} />
        </button>
      </article>
    </section>
  );
}
