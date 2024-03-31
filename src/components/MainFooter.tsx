import Link from "next/link";

const MainFooter = ({ colour = "" }: { colour?: string }) => {
  return (
    <footer
      className={`self-end py-3 w-full text-[0.7rem] font-light ${
        colour ? colour : "text-neutral-400"
      } text-center`}
    >
      copyright &copy; {new Date().getFullYear()}.{" "}
      <Link href={"/"}>FairDinkum</Link>. All rights reserved.
    </footer>
  );
};

export default MainFooter;
