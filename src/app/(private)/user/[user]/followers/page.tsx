import {
  IconHelpHexagon,
  IconHexagon2,
  IconHexagonFilled,
  IconHexagonLetterU,
  IconMessage2Question,
  IconMoodPlus,
} from "@tabler/icons-react";
import Avatar from "@/components/avatar";
import UserCard from "@/components/user-card";

export default function UserFollowers({
  params,
}: {
  params: { user: string };
}) {
  return (
    <main className="px-8 mb-16 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-6 transition-all duration-500 ease-in-out">
      <UserCard
        username={"sterlingArcher"}
        tagline={"Welcome to the danger zone"}
      />

      <UserCard
        username={"theHalfman"}
        tagline={"A Lannister always pays his debts"}
      />

      <UserCard username={"aryaStark"} tagline={"The North remembers"} />

      <UserCard
        username={"sterlingArcher"}
        tagline={"Welcome to the danger zone"}
      />

      <UserCard
        username={"sterlingArcher"}
        tagline={"Welcome to the danger zone"}
      />

      <UserCard
        username={"sterlingArcher"}
        tagline={"Welcome to the danger zone"}
      />
    </main>
  );
}
