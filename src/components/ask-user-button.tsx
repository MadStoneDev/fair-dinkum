import { IconMessageForward } from "@tabler/icons-react";

export default function AskUserButton({ onClick }: { onClick?: () => void }) {
  // States

  return (
    <button
      className={`p-2 flex items-center justify-center gap-1 aspect-square bg-accent rounded-xl lg:rounded-2xl text-light font-medium shadow-md shadow-dark/60 hover:shadow-xl hover:shadow-dark/30 hover:scale-[103%] transition-all duration-500 ease-in-out`}
      onClick={onClick}
    >
      Ask
      <IconMessageForward size={24} />
    </button>
  );
}
