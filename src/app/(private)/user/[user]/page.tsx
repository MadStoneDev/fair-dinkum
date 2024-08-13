import UserProfileCard from "@/components/user-profile-card";
import AnsweredQuestion from "@/components/answered-question";
import UserNavBar from "@/components/user-nav-bar";
import { dummyUsers } from "@/data/dummy-users";
import NotFound from "@/app/not-found";
import AskQuestion from "@/components/ask-question";

export default function User({ params }: { params: { user: string } }) {
  // Params
  const { user } = params;
  const thisUser = dummyUsers.find((account) => account.username === user);

  return !thisUser ? (
    <NotFound />
  ) : (
    <div className="mx-auto mb-16 grid grid-cols-1 gap-6 w-full lg:max-w-4xl overflow-hidden transition-all duration-500 ease-in-out">
      {/* User Card */}
      <UserProfileCard user={thisUser} />

      {/* User Navigation */}
      {/*<UserNavBar />*/}

      <AskQuestion user={thisUser} />

      {/* Feed */}
      <section className={`grid grid-cols-1 gap-4 items-center w-full`}>
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
