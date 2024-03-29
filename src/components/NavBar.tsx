import Link from "next/link";

const NavBar = () => {
  return (
    <nav
      className={`relative mx-auto p-4 flex justify-end items-center w-full`}
    >
      <section
        className={`absolute left-0 top-0 grid place-content-center w-full h-full`}
      >
        <h3 className={`font-light text-lg text-center`}>
          <Link
            href={"/"}
            className={`p-2 hover:bg-white hover:text-black shadow-neutral-500 hover:shadow-xl transition-all duration-300`}
          >
            fair<span className={`text-amber-500 font-medium`}>dinkum</span>
          </Link>
        </h3>
      </section>
      <section
        className={`flex items-center text-sm text-center font-light text-neutral-500`}
      >
        <Link
          href={"/auth/login"}
          className={`group relative p-2 hover:bg-white hover:text-black shadow-neutral-500 hover:shadow-xl transition-all duration-300`}
        >
          Log
          <span
            className={`group-hover:text-amber-500 group-hover:font-medium transition-all duration-300`}
          >
            in
          </span>
        </Link>
        <Link
          href={"/auth/login"}
          className={`group relative p-2 hover:bg-white hover:text-black shadow-neutral-500 hover:shadow-xl transition-all duration-300`}
        >
          Sign
          <span
            className={`group-hover:text-amber-500 group-hover:font-medium transition-all duration-300`}
          >
            up
          </span>
        </Link>
      </section>
    </nav>
  );
};

export default NavBar;
