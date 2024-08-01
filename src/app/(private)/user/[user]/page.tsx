import AskQuestion from "@/components/ask-question";
import UnansweredQuestions from "@/components/unanswered-questions";
import AnsweredQuestions from "@/components/answered-questions";
import Link from "next/link";

export default function User({ params }: { params: { user: string } }) {
  // Params
  const { user } = params;

  return (
    <main className="mb-16 grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-0 transition-all duration-500 ease-in-out">
      <section
        className={`md:pl-8 col-span-3 hidden xl:flex flex-col gap-6 overflow-y-auto`}
      >
        {/* Ask a New Question */}
        <AskQuestion user={user} />

        <h2
          className={`mt-2 pr-10 pb-2 w-max border-b border-dark/15 dark:border-light/15 text-lg font-bold tracking-tight text-accent`}
        >
          You asked {user}
        </h2>
        <p className={`text-sm italic font-light opacity-50`}>
          You haven't asked {user} any questions yet.
        </p>
        {/* Unanswered Question */}
        <UnansweredQuestions />
        <UnansweredQuestions />
        <UnansweredQuestions />
        <UnansweredQuestions />
        <UnansweredQuestions />
        <UnansweredQuestions />
      </section>

      {/* User Info */}
      <section
        className={`px-4 sm:px-6 md:px-8 col-span-4 lg:col-span-2 relative flex justify-center`}
      >
        <div
          className={`mb-6 sm:mb-10 lg:fixed flex flex-col items-center gap-1`}
        >
          <div
            className={`mb-3 w-32 aspect-square rounded-full bg-accent`}
          ></div>
          <h1 className={`text-xl tracking-tight text-dark dark:text-light`}>
            {user}
          </h1>
          <p
            className={`mb-3 max-w-40 font-light tracking-tight text-sm text-center text-dark/50 dark:text-light/50`}
          >
            member at <span className={`font-bold`}>fair</span>Dinkum since
            August, 2024
          </p>
          <div className={`pb-10 flex flex-row gap-4`}>
            <Link
              className={`py-2 font-semibold hover:text-accent`}
              href={`/user/${user}/followers`}
            >
              15<span className={`pl-1 font-light opacity-70`}>Followers</span>
            </Link>
            <div
              className={`w-0.5 min-h-full bg-dark/50 dark:bg-light/50`}
            ></div>
            <Link
              className={`py-2 font-semibold hover:text-accent`}
              href={`/user/${user}/following`}
            >
              23<span className={`pl-1 font-light opacity-70`}>Following</span>
            </Link>
          </div>
          <p
            className={`max-w-52 text-sm font-light text-dark/50 dark:text-light/50 tracking-tighter text-center`}
          >
            this is a quick bio about this user and all of the things they want
            to tell us about themselves.
          </p>
        </div>
      </section>

      {/* Right Column */}
      <section
        className={`p-0 md:pl-8 lg:pl-0 md:pr-8 col-span-4 xl:col-span-3 flex flex-col gap-4 md:gap-6`}
      >
        <div className={`md:py-8 xl:hidden col-span-4`}>
          <AskQuestion user={user} />
        </div>
        <h2
          className={`mx-4 md:pr-10 pb-2 lg:w-max border-b border-dark/15 dark:border-light/15 md:text-lg font-bold tracking-tight text-accent`}
        >
          Answered Questions
        </h2>
        {/* Answered Question */}
        <AnsweredQuestions user={user} />
        <AnsweredQuestions user={user} />
        <AnsweredQuestions user={user} />
        <AnsweredQuestions user={user} />
      </section>
    </main>
  );
}
