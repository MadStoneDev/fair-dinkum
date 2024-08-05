import AskQuestion from "@/components/ask-question";
import UserProfileCard from "@/components/user-profile-card";
import AnsweredQuestion from "@/components/answered-question";

export default function User({ params }: { params: { user: string } }) {
  // Params
  const { user } = params;

  return (
    <div className="mx-auto mb-16 grid grid-cols-1 gap-6 w-full lg:max-w-3xl overflow-hidden transition-all duration-500 ease-in-out">
      {/* User Card */}
      <UserProfileCard />

      <section className={`grid grid-cols-1 gap-4 items-center w-full`}>
        {/* Profile Navigation */}
        {/*<div className={`grid grid-cols-1 gap-4`}></div>*/}

        {/* Feed */}
        <div className={`grid grid-cols-1 gap-6`}>
          <AnsweredQuestion user={user} />
          <AnsweredQuestion user={user} />
          <AnsweredQuestion user={user} />
          <AnsweredQuestion user={user} />
        </div>
      </section>
    </div>
  );
}
