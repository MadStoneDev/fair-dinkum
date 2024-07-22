import NavBarItem from "@/components/nav-bar-item";
import DarkModeToggle from "@/components/dark-mode-toggle";

export default function NavBar() {
  return (
    <nav className={`p-8 flex flex-row items-center justify-between w-full`}>
      {/* Logo */}
      <p className={`font-bold text-lg`}>
        fair<span className={`font-light`}>Dinkum</span>
      </p>
      {/* Navigation */}
      <ul className={`flex gap-2 font-light text-dark dark:text-light text-xs`}>
        <NavBarItem title={"Home"} href={"/"} />
        <NavBarItem title={"How's it work?"} href={"/about"} />
        <NavBarItem title={"Premium"} href={"/premium"} />
      </ul>

      <section className={`flex items-center gap-2`}>
        <DarkModeToggle />
        <div
          className={`bg-light/20`}
          style={{
            width: "0.125rem",
            height: "1.25rem",
          }}
        ></div>
        {/* Auth */}
        <button
          className={`px-4 py-2 bg-accent rounded-full text-light text-xs`}
        >
          Get Started
        </button>
      </section>
    </nav>
  );
}
