const MainFooter = () => {
  return (
    <footer
      className={`pb-3 grid items-end h-12 text-[0.7rem] font-light text-neutral-400 text-center`}
    >
      copyright &copy; {new Date().getFullYear()}. fairdinkum. All rights
      reserved.
    </footer>
  );
};

export default MainFooter;
