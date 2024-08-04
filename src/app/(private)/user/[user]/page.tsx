import AskQuestion from "@/components/ask-question";
import UserProfileCard from "@/components/user-profile-card";
import AnsweredQuestions from "@/components/answered-questions";

export default function User({ params }: { params: { user: string } }) {
  // Params
  const { user } = params;

  return (
    <main className="px-0 md:px-4 lg:px-8 mx-auto mb-16 grid grid-cols-1 gap-6 w-full max-w-4xl overflow-hidden transition-all duration-500 ease-in-out">
      {/* User Card */}
      <UserProfileCard />

      <section
        className={`grid grid-cols-1 gap-4 items-center w-full rounded-2xl overflow-hidden`}
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
