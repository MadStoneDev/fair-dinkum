﻿import Avatar from "@/components/avatar";
import Link from "next/link";
import {
  IconHelpHexagon,
  IconHexagon2,
  IconHexagonFilled,
  IconHexagonLetterU,
  IconMessage2Question,
  IconMoodPlus,
} from "@tabler/icons-react";

interface UserListCardProps {
  username: string;
  tagline: string;
}

export default function UserListCard({
  username = "username",
  tagline = "a short tagline",
}: UserListCardProps) {
  return (
    <article
      className={`flex flex-row flex-nowrap items-center bg-light dark:bg-gray rounded-xl overflow-hidden`}
    >
      <div className={`bg-accent h-full w-12`}></div>
      <div className={`-ml-[25px] grid justify-center`}>
        <Avatar progress={50} size={50} />
      </div>
      <div
        className={`flex-grow pl-2 py-4 flex justify-between items-center gap-6`}
      >
        <section className={`text-center`}>
          <Link
            href={`/user/${username}`}
            className={`-mb-1 font-semibold text-lg hover:text-accent transition-all duration-500 ease-in-out`}
          >
            {username}
          </Link>
        </section>
        <section className={`grid grid-cols-2`}>
          <div
            className={`px-4 flex flex-col items-center border-r-[0.5px] border-dark/10 dark:border-light/20`}
          >
            <h3 className={`font-semibold text-xs md:text-sm`}>870</h3>
            <h4 className={`text-xs`}>Trackers</h4>
          </div>

          <div className={`px-4 flex flex-col items-center`}>
            <h3 className={`font-semibold text-xs md:text-sm`}>870</h3>
            <h4 className={`text-xs`}>Tracking</h4>
          </div>
        </section>
      </div>
      <section
        className={`relative grid grid-cols-1 h-full border-l-[0.5px] border-dark/10 dark:border-light/20`}
      >
        <Link
          href={`/user/${username}/follow`}
          className={`px-4 py-2 grid place-content-center hover:bg-accent hover:text-light text-center transition-all duration-500 ease-in-out`}
        >
          <IconMoodPlus stroke={1.75} width={22} />
        </Link>
        <Link
          href={`/user/${username}/ask`}
          className={`px-4 py-2 grid place-content-center hover:bg-accent hover:text-light text-center transition-all duration-500 ease-in-out`}
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
