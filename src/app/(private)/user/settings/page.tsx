"use client";

import React, { useState } from "react";

import SettingsNavigation from "@/components/settings-navigation";
import SettingsProfile from "@/components/settings-profile";
import SettingsPrivacy from "@/components/settings-privacy";
import SettingsNotifications from "@/components/settings-notifications";
import SettingsAccount from "@/components/settings-account";

export default function Settings() {
  // States
  const [activeTab, setActiveTab] = useState("Profile");

  // Settings States
  const [askAnonymously, setAskAnonymously] = useState<boolean>(false);
  const [allowSensitiveQuestions, setAllowSensitiveQuestions] =
    useState<boolean>(false);
  const [allowSensitiveAnswers, setAllowSensitiveAnswers] =
    useState<boolean>(false);
  const [showAnswersTo, setShowAnswersTo] = useState<string>("everyone");
  const [openShowAnswersTo, setOpenShowAnswersTo] = useState<boolean>(false);
  const [unBlurSensitiveContent, setUnBlurSensitiveContent] =
    useState<boolean>(false);

  const stateProps = {
    askAnonymously,
    setAskAnonymously,
    allowSensitiveQuestions,
    setAllowSensitiveQuestions,
    allowSensitiveAnswers,
    setAllowSensitiveAnswers,
    showAnswersTo,
    setShowAnswersTo,
    openShowAnswersTo,
    setOpenShowAnswersTo,
    unBlurSensitiveContent: unBlurSensitiveContent,
    setUnBlurSensitiveContent: setUnBlurSensitiveContent,
  };

  const settingTabs = ["Profile", "Privacy", "Notifications", "Account"];

  return (
    <main
      className={`px-0 md:px-8 flex flex-col justify-start gap-4 transition-all duration-500 ease-in-out`}
    >
      <section className={`px-4 sm:px-8 md:px-0 mb-4`}>
        <h2 className={`text-2xl font-bold`}>Settings</h2>
        <h3 className={`text-sm text-gray/50 dark:text-light/30`}>
          Customise <span className={`font-bold`}>fair</span>Dinkum to suit you.
        </h3>
      </section>

      <section className={`flex flex-col lg:grid grid-cols-7`}>
        {/* Navigation */}
        <SettingsNavigation
          className={`px-4 sm:px-8 md:px-0 col-span-1`}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          availableTabs={settingTabs}
        />

        <div
          className={`px-4 sm:px-8 mb-16 col-span-6 py-6 flex flex-col gap-8 bg-light dark:bg-light/15 lg:rounded-r-3xl text-sm text-dark dark:text-light`}
        >
          {SETTINGS_ARTICLES[activeTab](stateProps)}
        </div>
      </section>

      <section
        className={`md:hidden flex flex-col lg:grid grid-cols-7`}
      ></section>
    </main>
  );
}

const SETTINGS_ARTICLES: { [key: string]: (props: any) => React.JSX.Element } =
  {
    Profile: () => <SettingsProfile />,
    Privacy: (props) => <SettingsPrivacy {...props} />,
    Notifications: () => <SettingsNotifications />,
    Account: () => <SettingsAccount />,
  };
