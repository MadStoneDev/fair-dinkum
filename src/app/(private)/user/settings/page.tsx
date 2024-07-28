"use client";

import React, { useState } from "react";
import SettingsNavigation from "@/components/settings-navigation";

export default function Settings() {
  // States
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <main
      className={`px-8 flex flex-col justify-start gap-4 transition-all duration-500 ease-in-out`}
    >
      <section>
        <h2 className={`text-2xl font-bold`}>Settings</h2>
        <h3 className={`text-sm text-gray/50 dark:text-light/30`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi
        </h3>
      </section>

      <section className={`grid grid-cols-7`}>
        {/* Navigation */}
        <SettingsNavigation
          className={`col-span-1`}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          availableTabs={["Profile", "Privacy", "Notifications"]}
        />

        <div
          className={`col-span-6 p-6 flex flex-col gap-8 bg-light dark:bg-light/15 rounded-r-3xl text-sm text-dark dark:text-light`}
        >
          {SETTINGS_ARTICLES[activeTab]}
        </div>
      </section>
    </main>
  );
}

const SETTINGS_ARTICLES: { [key: string]: React.JSX.Element } = {
  Profile: (
    <>
      <article
        className={`pb-6 grid grid-cols-5 items-stretch gap-10 border-b border-dark/10 dark:border-light/10`}
      >
        <div className={`col-span-4 flex flex-col gap-1`}>
          <p className={`font-medium`}>Username</p>
          <desc className={`mb-2 opacity-50`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            nisi
          </desc>
        </div>
        <div className={`grid-cols-1 flex flex-col justify-center items-end`}>
          <input type="text" placeholder="Username" />
        </div>
      </article>

      <article
        className={`pb-6 grid grid-cols-5 items-stretch gap-10 border-b border-dark/10 dark:border-light/10`}
      >
        <div className={`col-span-4 flex flex-col gap-1`}>
          <p className={`font-medium`}>Email</p>
          <desc className={`mb-2 opacity-50`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            nisi
          </desc>
        </div>
        <div className={`grid-cols-1 flex flex-col justify-center items-end`}>
          <input type="text" placeholder="Email" />
        </div>
      </article>

      <article className={`grid grid-cols-5 items-stretch gap-10`}>
        <div className={`col-span-4 flex flex-col gap-1`}>
          <p className={`font-medium`}>Password</p>
          <desc className={`mb-2 opacity-50`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            nisi
          </desc>
        </div>
      </article>
    </>
  ),

  Privacy: (
    <>
      <article
        className={`pb-6 grid grid-cols-5 items-stretch gap-10 border-b border-dark/10 dark:border-light/10`}
      >
        <div className={`col-span-4 flex flex-col gap-1`}>
          <p className={`font-medium`}>Password</p>
          <desc className={`mb-2 opacity-50`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            nisi
          </desc>
        </div>
      </article>
    </>
  ),

  Notifications: (
    <>
      <article
        className={`pb-6 grid grid-cols-5 items-stretch gap-10 border-b border-dark/10 dark:border-light/10`}
      >
        <div className={`col-span-4 flex flex-col gap-1`}>
          <p className={`font-medium`}>Password</p>
          <desc className={`mb-2 opacity-50`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            nisi
          </desc>
        </div>
      </article>
    </>
  ),
};
