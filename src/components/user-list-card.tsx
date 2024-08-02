import Avatar from "@/components/avatar";
import Link from "next/link";
import { IconMessage2Question, IconMoodPlus } from "@tabler/icons-react";
import { Footprints, Search } from "lucide-react";

interface UserListCardProps {
  username: string;
  tagline: string;
  avatar?: string;
  cover?: string;
  progress?: number;
  level?: number;
  trackers?: number;
  tracking?: number;
}

export default function UserListCard({
  username = "username",
  tagline = "a short tagline",
  avatar = "/dummy/avatar.jpg",
  cover = "/dummy/cover.jpg",
  progress = 0,
  level = 0,
  trackers = 0,
  tracking = 0,
}: UserListCardProps) {
  // Functions
  const normaliseTotal = (total: number) => {
    if (total > 999999) {
      return `${Math.round(total / 1000000)} M`;
    } else if (total > 9999) {
      return `${Math.ceil(total / 1000)} K`;
    } else {
      return total.toLocaleString();
    }
  };

  return (
    <article
      className={`flex flex-row flex-nowrap items-center bg-light dark:bg-gray rounded-xl overflow-hidden`}
    >
      {/* Cover Photo */}
      <div
        className={`relative bg-accent h-full w-12`}
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: `cover`,
        }}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full bg-accent/75`}
        ></div>
      </div>

      {/* Avatar */}
      <div className={`-ml-[25px] grid justify-center z-10`}>
        <Avatar
          progress={progress}
          level={level || 0}
          size={50}
          image={avatar}
        />
      </div>

      {/* Information */}
      <div
        className={`flex-grow pl-1.5 md:pl-2 py-4 flex justify-between items-center gap-6`}
      >
        <section className={`text-center`}>
          <Link
            href={`/user/${username}`}
            className={`-mb-1 p-1 font-semibold text-sm lg:text-lg hover:bg-accent transition-all duration-500 ease-in-out`}
          >
            {username}
          </Link>
        </section>

        {/* Stats */}
        <section className={`grid grid-cols-2`}>
          <div
            className={`px-4 flex flex-col gap-2 items-center border-r-[0.5px] border-dark/10 dark:border-light/20 w-20`}
          >
            <Footprints size={20} />
            <h3 className={`font-semibold text-xs`}>
              {normaliseTotal(trackers)}
            </h3>
          </div>

          <div className={`px-4 flex flex-col gap-2 items-center w-20`}>
            <Search size={20} />
            <h3 className={`font-semibold text-xs`}>
              {normaliseTotal(tracking)}
            </h3>
          </div>
        </section>
      </div>

      {/* Actions */}
      <section
        className={`relative grid grid-cols-1 h-full bg-accent border-l-[0.5px] border-dark/10 dark:border-light/20`}
      >
        <Link
          href={`/user/${username}/follow`}
          className={`px-2 lg:px-4 py-2 grid place-content-center hover:bg-light/20 text-center transition-all duration-500 ease-in-out`}
        >
          <IconMoodPlus stroke={1.75} width={22} />
        </Link>
        <Link
          href={`/user/${username}/ask`}
          className={`px-2 lg:px-4 py-2 grid place-content-center hover:bg-light/20 text-center transition-all duration-500 ease-in-out`}
        >
          <IconMessage2Question stroke={1.75} width={22} />
        </Link>
        <div
          className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[50%] h-[0.5px] bg-dark/10 dark:bg-light/20`}
        ></div>
      </section>
    </article>
  );
}
