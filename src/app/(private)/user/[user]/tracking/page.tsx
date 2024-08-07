import UserListCard from "@/components/user-list-card";
import { dummyTrackers } from "@/data/dummy-trackers";

export default function TrackingPage({ params }: { params: { user: string } }) {
  return (
    <main className="mx-auto mb-16 w-full lg:max-w-3xl transition-all duration-500 ease-in-out">
      <h1 className={`text-base md:text-xl lg:text-2xl font-bold`}>
        {params.user}'s Trackers
      </h1>
      <section
        className={`mt-4 lg:mt-8 grid grid-cols-1 gap-3 transition-all duration-500 ease-in-out`}
      >
        {dummyTrackers.map((tracker) => (
          <UserListCard
            key={tracker.id}
            username={tracker.username}
            tagline={tracker.tagline}
            avatar={tracker.avatar}
            cover={tracker.cover}
            progress={tracker.progress}
            level={tracker.level}
            trackers={tracker.trackers}
            tracking={tracker.tracking}
          />
        ))}
      </section>
    </main>
  );
}
