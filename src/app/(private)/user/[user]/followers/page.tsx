import UserListCard from "@/components/user-list-card";

export default function UserFollowers({
  params,
}: {
  params: { user: string };
}) {
  return (
    // <main className="px-8 mb-16 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-6 transition-all duration-500 ease-in-out">
    <main className="px-2 md:px-8 mb-16 transition-all duration-500 ease-in-out">
      <h1 className={`text-2xl font-bold`}>{params.user}'s Trackers</h1>
      <section
        className={`mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3 transition-all duration-500 ease-in-out`}
      >
        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
        />

        <UserListCard
          username={"theHalfman"}
          tagline={"A Lannister always pays his debts"}
          avatar={"/dummy/avatar_2.jpg"}
          cover={"/dummy/cover_2.jpg"}
        />

        <UserListCard
          username={"aryaStark"}
          tagline={"The North remembers"}
          avatar={"/dummy/avatar_3.jpg"}
          cover={"/dummy/cover.jpg"}
        />

        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar.jpg"}
          cover={"/dummy/cover_2.jpg"}
        />

        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_2.jpg"}
          cover={"/dummy/cover.jpg"}
        />

        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_2.jpg"}
          cover={"/dummy/cover_3.jpg"}
        />
      </section>
    </main>
  );
}
