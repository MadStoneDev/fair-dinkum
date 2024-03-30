import Link from "next/link";
import Logo from "@/components/Logo";
import Avatar from "@/components/Avatar";

const Header = () => {
  return (
    <header
      className={`p-4 flex justify-between items-center w-full bg-neutral-800`}
    >
      {/* Logo */}
      <Link href={"/"}>
        <Logo className={`w-24`} fairClassName={`fill-white`} />
      </Link>

      {/* Account */}
      <Avatar size={40} />
    </header>
  );
};

export default Header;
