import UserListCard from "@/components/user-list-card";
import { dummyUsers } from "@/data/dummy-users";

export default function TrackingPage({ params }: { params: { user: string } }) {
  return (
    <main className="px-8 mb-16 w-full transition-all duration-500 ease-in-out">
      <h1 className={`text-base md:text-xl lg:text-2xl font-bold`}>
        {params.user}'s Trackers
      </h1>
      <section
        className={`mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 transition-all duration-500 ease-in-out`}
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
