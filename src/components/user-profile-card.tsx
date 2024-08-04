import Avatar from "@/components/avatar";
import { Footprints } from "lucide-react";
import { IconMessageForward } from "@tabler/icons-react";

export default function UserProfileCard() {
  return (
    <section
      className={`flex flex-col items-center bg-light dark:bg-gray w-full h-min md:rounded-2xl overflow-hidden`}
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
      <article className={`p-4 grid place-content-center`}>
        <h1 className={`font-semibold text-2xl text-dark dark:text-light`}>
          username
        </h1>
        <h3>a cool tagline</h3>
      </article>

      {/* Stats */}

      {/* Badges */}

      {/* Links */}

      {/* Actions */}
      <article className={`p-8 grid grid-cols-2 gap-4 w-full max-w-xs text-sm`}>
        <button
          className={`p-2 flex items-center justify-center gap-1 aspect-square bg-light rounded-xl text-dark shadow-lg shadow-dark/60 hover:shadow-xl hover:shadow-dark/30 hover:scale-[103%] transition-all duration-500 ease-in-out`}
        >
          Track
          <Footprints size={18} />
        </button>
        <button
          className={`p-2 flex items-center justify-center gap-1 aspect-square bg-accent rounded-xl text-light shadow-lg shadow-dark/60 hover:shadow-xl hover:shadow-dark/30 hover:scale-[103%] transition-all duration-500 ease-in-out`}
        >
          Ask
          <IconMessageForward size={24} />
        </button>
      </article>
    </section>
  );
}
