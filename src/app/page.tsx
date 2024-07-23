import NavBar from "@/components/nav-bar";
import HomeCard from "@/components/home-card";
import HomeFeature from "@/components/home-feature";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-start gap-6 bg-neutral-100 dark:bg-dark transition-all duration-300 ease-in-out">
      {/* Nav Bar */}
      <NavBar />

      {/* Main Content */}
      <HomeFeature>
        <HomeCard />
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </HomeFeature>

      {/* Footer */}
      <footer className="py-3 flex flex-col items-center justify-center text-center text-[0.65rem] font-light text-dark/30 dark:text-light/30">
        Copyright &copy; 2024 MadStoneDev. All rights reserved.
      </footer>
    </main>
  );
}
