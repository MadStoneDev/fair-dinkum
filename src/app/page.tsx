import NavBarItem from "@/components/nav-bar-item";
import DarkModeToggle from "@/components/dark-mode-toggle";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-light dark:bg-dark transition-all duration-300 ease-in-out">
      <NavBar />
    </main>
  );
}
