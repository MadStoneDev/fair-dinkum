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
    <nav
      className={`flex flex-wrap md:flex-nowrap lg:flex-col gap-2 min-h-full ${className}`}
    >
      {availableTabs.map((tab) => (
        <div
          key={`settings-nav-${tab}`}
          className={`cursor-pointer p-2 md:p-3 ${
            activeTab === tab
              ? "bg-accent text-light"
              : "hover:bg-accent/10 dark:hover:bg-light/20"
          } lg:rounded-l-full text-xs md:text-sm transition-all duration-500 ease-in-out`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </nav>
  );
}
