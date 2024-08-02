import AskQuestion from "@/components/ask-question";
import UnansweredQuestions from "@/components/unanswered-questions";
import AnsweredQuestions from "@/components/answered-questions";
import Link from "next/link";
import Avatar from "@/components/avatar";
import { Footprints } from "lucide-react";
import { IconMessageForward } from "@tabler/icons-react";

export default function User({ params }: { params: { user: string } }) {
  // Params
  const { user } = params;

  return (
    <main className="px-0 md:px-4 lg:px-8 mb-16 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden transition-all duration-500 ease-in-out">
      {/* User Card */}
      <section
        className={`col-span-1 flex flex-col items-center bg-light dark:bg-gray w-full h-min md:rounded-2xl overflow-hidden`}
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
        <article
          className={`p-8 grid grid-cols-2 gap-4 w-full max-w-md text-sm`}
        >
          <button
            className={`p-2 flex items-center justify-center gap-1 bg-white border border-accent rounded-xl font-medium text-accent`}
          >
            Track
            <Footprints size={18} />
          </button>
          <button
            className={`p-2 flex items-center justify-center gap-1 bg-accent rounded-xl text-light`}
          >
            Ask
            <IconMessageForward size={24} />
          </button>
        </article>
      </section>

      <section
        className={`col-span-2 grid grid-cols-1 gap-4 items-center w-full rounded-2xl overflow-hidden`}
      >
        {/* Profile Navigation */}
        {/*<div className={`grid grid-cols-1 gap-4`}></div>*/}

        {/* Feed */}
        <div className={`grid grid-cols-1 gap-4`}>
          {/* Ask a New Question */}
          <AskQuestion user={user} />

          <AnsweredQuestions user={user} />
          <AnsweredQuestions user={user} />
          <AnsweredQuestions user={user} />
          <AnsweredQuestions user={user} />
        </div>
      </section>
    </main>
  );
}
