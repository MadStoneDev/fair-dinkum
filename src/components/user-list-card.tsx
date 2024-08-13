import Avatar from "@/components/avatar";
import Link from "next/link";
import { IconMessage2Question, IconMoodPlus } from "@tabler/icons-react";
import { Footprints, Lasso, Search } from "lucide-react";
import { normaliseTotal } from "@/utils/general";
import { User } from "@/lib/types";

export default function UserListCard({
  username = "username",
  avatar = "/dummy/avatar.jpg",
  cover = "/dummy/cover.jpg",
  progress = 0,
  level = 0,
  trackers = 0,
  tracking = 0,
}: User) {
  return (
    <article
      className={`flex flex-row flex-nowrap items-center bg-light dark:bg-gray md:rounded-xl overflow-hidden`}
    >
      {/* Cover Photo */}
      <div
        className={`relative bg-accent h-full w-8 sm:w-12`}
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: `cover`,
        }}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gray/75 dark:bg-light/70`}
        ></div>
      </div>

      {/* Avatar */}
      <div className={`-ml-[25px] grid justify-center z-10`}>
        <Avatar
          username={username}
          progress={progress}
          image={avatar}
          level={level || 0}
          size={"small"}
        />
      </div>

      {/* Information */}
      <div
        className={`flex-grow pl-1.5 md:pl-2 py-4 flex justify-between items-center`}
      >
        <section
          className={`text-left w-1/2 whitespace-nowrap overflow-hidden overflow-ellipsis`}
        >
          <Link
            href={`/user/${username}`}
            className={`-mb-1 p-1 font-semibold text-sm md:text-base xl:text-lg hover:bg-accent hover:text-light transition-all duration-500 ease-in-out`}
          >
            {username}
          </Link>
        </section>

        {/* Stats */}
        <section className={`grid grid-cols-2 min-w-32 sm:min-w-40`}>
          <Link
            href={`/user/${username}/trackers`}
            className={`px-2 md:px-4 flex flex-col gap-1 md:gap-2 items-center border-r-[0.5px] border-dark/10 dark:border-light/20 w-16 sm:w-20`}
            title="Trackers"
          >
            <article className={`grid place-content-center w-6 h-6`}>
              <Footprints size={20} className={`w-4 sm:w-auto`} />
            </article>
            <h3 className={`font-semibold text-[0.7rem] md:text-xs`}>
              {normaliseTotal(trackers)}
            </h3>
          </Link>

          <Link
            href={`/user/${username}/tracking`}
            className={`px-2 md:px-4 flex flex-col gap-1 md:gap-2 items-center w-16 sm:w-20`}
            title="Tracking"
          >
            <article className={`grid place-content-center w-6 h-6`}>
              <Lasso size={20} className={`w-4 sm:w-auto`} />
            </article>
            <h3 className={`font-semibold text-[0.7rem] md:text-xs`}>
              {normaliseTotal(tracking)}
            </h3>
          </Link>
        </section>
      </div>

      {/* Actions */}
      <section
        className={`hidden sm:grid relative grid-cols-1 w-10 h-full bg-accent border-l-[0.5px] border-dark/10 dark:border-light/20`}
      >
        <Link
          href={`/user/${username}/follow`}
          className={`px-2 py-2 grid place-content-center hover:bg-light/20 text-light text-center transition-all duration-500 ease-in-out`}
        >
          <IconMoodPlus stroke={1.75} width={22} />
        </Link>
        <Link
          href={`/user/${username}/ask`}
          className={`px-2 py-2 grid place-content-center hover:bg-light/20 text-light text-center transition-all duration-500 ease-in-out`}
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
