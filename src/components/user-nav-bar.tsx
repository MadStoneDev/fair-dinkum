import { IconMessageForward } from "@tabler/icons-react";

export default function UserNavBar() {
  return (
    <div
      className={`py-6 relative grid grid-cols-3 bg-light dark:bg-gray w-full lg:rounded-2xl text-center overflow-hidden`}
    >
      <div className={``}></div>
      <div
        className={`grid place-content-center border-l border-r border-dark/20 dark:border-light/20`}
      >
        <IconMessageForward
          size={32}
          strokeWidth={1.5}
          className={`cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out`}
        />
      </div>
      <div className={``}></div>
    </div>
  );
}
