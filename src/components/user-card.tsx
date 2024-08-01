import Avatar from "@/components/avatar";
import {
  IconHelpHexagon,
  IconHexagon2,
  IconHexagonFilled,
  IconHexagonLetterU,
  IconMessage2Question,
  IconMoodPlus,
} from "@tabler/icons-react";
import Link from "next/link";

interface UserCardProps {
  username: string;
  tagline: string;
}

export default function UserCard({
  username = "username",
  tagline = "a short tagline",
}: UserCardProps) {
  return (
    <article className={`bg-light dark:bg-gray rounded-2xl overflow-hidden`}>
      <div className={`bg-accent w-full h-16`}></div>
      <div className={`mx-auto -mt-12 grid justify-center`}>
        <Avatar progress={50} />
      </div>
      <div className={`px-6 pt-4 pb-8 flex flex-col items-center gap-6`}>
        <section className={`text-center`}>
          <Link
            href={`/user/${username}`}
            className={`-mb-1 font-semibold text-lg hover:text-accent transition-all duration-500 ease-in-out`}
          >
            {username}
          </Link>
          <p className={`text-sm font-light opacity-60`}>
            {tagline.toLowerCase()}
          </p>
        </section>
        <section className={`grid grid-cols-3`}>
          <div
            className={`px-6 flex flex-col items-center border-r-[0.5px] border-dark/10 dark:border-light/20`}
          >
            <h3 className={`font-semibold text-xs md:text-sm`}>870</h3>
            <h4 className={`text-xs`}>Answers</h4>
          </div>

          <div
            className={`px-6 flex flex-col items-center border-r-[0.5px] border-dark/10 dark:border-light/20`}
          >
            <h3 className={`font-semibold text-xs md:text-sm`}>870</h3>
            <h4 className={`text-xs`}>Trackers</h4>
          </div>

          <div className={`px-6 flex flex-col items-center`}>
            <h3 className={`font-semibold text-xs md:text-sm`}>870</h3>
            <h4 className={`text-xs`}>Tracking</h4>
          </div>
        </section>
        <section className={`flex items-center`}>
          <IconHelpHexagon />
          <IconHexagonFilled />
          <IconHexagon2 />
          <IconHexagonLetterU />
        </section>
        <section className={`flex gap-2`}>
          <div className={`bg-rose-600 w-9 h-9 rounded-lg`}></div>
          <div className={`bg-amber-500 w-9 h-9 rounded-lg`}></div>
          <div className={`bg-emerald-500 w-9 h-9 rounded-lg`}></div>
          <div className={`bg-sky-500 w-9 h-9 rounded-lg`}></div>
        </section>
      </div>
      <section className={`relative grid grid-cols-2 w-full border-t-[0.5px]`}>
        <Link
          href={`/user/${username}/follow`}
          className={`p-4 grid place-content-center hover:bg-accent hover:text-light text-center transition-all duration-500 ease-in-out`}
        >
          <IconMoodPlus stroke={1.75} />
        </Link>
        <Link
          href={`/user/${username}/ask`}
          className={`p-4 grid place-content-center hover:bg-accent hover:text-light text-center transition-all duration-500 ease-in-out`}
        >
          <IconMessage2Question stroke={1.75} />
        </Link>
        <div
          className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[0.5px] bg-dark/10 dark:bg-light/20 h-[50%]`}
        ></div>
      </section>
    </article>
  );
}
