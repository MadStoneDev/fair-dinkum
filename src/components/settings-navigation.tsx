import { Dispatch, SetStateAction } from "react";

export default function SettingsNavigation({
  className,
  activeTab,
  setActiveTab,
  availableTabs,
}: {
  className?: string;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  availableTabs: string[];
}) {
  return (
    <nav className={`${className} flex flex-col gap-2`}>
      {availableTabs.map((tab) => (
        <div
          className={`cursor-pointer p-3 ${
            activeTab === tab
              ? "bg-accent text-light"
              : "hover:bg-accent/10 dark:hover:bg-light/20"
          } rounded-l-full text-sm transition-all duration-500 ease-in-out`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </nav>
  );
}
