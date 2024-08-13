import UserListCard from "@/components/user-list-card";
import { dummyUsers } from "@/data/dummy-users";
import NotFound from "@/app/not-found";

export default function TrackerPage({ params }: { params: { user: string } }) {
  // Params
  const { user } = params;
  const thisUser = dummyUsers.find((account) => account.username === user);

  return !thisUser ? (
    <NotFound />
  ) : (
    <main className="md:px-8 mb-16 w-full transition-all duration-500 ease-in-out">
      <h1 className={`px-4 md:px-0 text-base md:text-xl lg:text-2xl font-bold`}>
        <span className={`text-accent`}>{thisUser.username}</span>'s Trackers
      </h1>
      <section
        className={`mt-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 transition-all duration-500 ease-in-out`}
      >
        {dummyUsers.map((tracker) => (
          <UserListCard
            key={tracker.id}
            user_id={tracker.user_id}
            username={tracker.username}
            tagline={tracker.tagline}
            email={tracker.email}
            avatar={tracker.avatar}
            cover={tracker.cover}
            progress={tracker.progress}
            level={tracker.level}
            trackers={tracker.trackers}
            tracking={tracker.tracking}
            role={tracker.role}
          />
        ))}
      </section>
    </main>
  );
}
