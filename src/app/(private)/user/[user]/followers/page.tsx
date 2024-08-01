import UserListCard from "@/components/user-list-card";

export default function UserFollowers({
  params,
}: {
  params: { user: string };
}) {
  return (
    <main className="px-3 md:px-8 mb-16 transition-all duration-500 ease-in-out">
      <h1 className={`text-base md:text-xl lg:text-2xl font-bold`}>
        {params.user}'s Trackers
      </h1>
      <section
        className={`mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 transition-all duration-500 ease-in-out`}
      >
        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          progress={60}
          level={3}
        />

        <UserListCard
          username={"theHalfman"}
          tagline={"A Lannister always pays his debts"}
          avatar={"/dummy/avatar_2.jpg"}
          cover={"/dummy/cover_2.jpg"}
          progress={90}
          level={7}
        />

        <UserListCard
          username={"aryaStark"}
          tagline={"The North remembers"}
          avatar={"/dummy/avatar_3.jpg"}
          cover={"/dummy/cover.jpg"}
          progress={0}
          level={12}
        />

        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar.jpg"}
          cover={"/dummy/cover_2.jpg"}
          progress={50}
          level={24}
        />

        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_2.jpg"}
          cover={"/dummy/cover.jpg"}
          progress={75}
          level={38}
        />

        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_2.jpg"}
          cover={"/dummy/cover_3.jpg"}
          progress={25}
          level={45}
        />
        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_3.jpg"}
          cover={"/dummy/cover_2.jpg"}
          progress={25}
          level={50}
        />
        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_3.jpg"}
          cover={"/dummy/cover_2.jpg"}
          progress={25}
          level={63}
        />
        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_3.jpg"}
          cover={"/dummy/cover_2.jpg"}
          progress={25}
          level={77}
        />
        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_3.jpg"}
          cover={"/dummy/cover_2.jpg"}
          progress={25}
          level={89}
        />
        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_3.jpg"}
          cover={"/dummy/cover_2.jpg"}
          progress={25}
          level={95}
        />
        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_3.jpg"}
          cover={"/dummy/cover_2.jpg"}
          progress={25}
          level={110}
        />
        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_3.jpg"}
          cover={"/dummy/cover_2.jpg"}
          progress={25}
          level={126}
        />
        <UserListCard
          username={"sterlingArcher"}
          tagline={"Welcome to the danger zone"}
          avatar={"/dummy/avatar_3.jpg"}
          cover={"/dummy/cover_2.jpg"}
          progress={25}
          level={152}
        />
      </section>
    </main>
  );
}
