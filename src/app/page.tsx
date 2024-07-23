import NavBar from "@/components/nav-bar";
import HomeCard from "@/components/home-card";
import HomeFeature from "@/components/home-feature";

export default function Home() {
  return (
    <main className="flex-col items-center justify-start gap-6 transition-all duration-300 ease-in-out">
      {/* Main Content */}
      <HomeFeature />
    </main>
  );
}
