import React from "react";

export default function SettingsBlock({
  className,
  blockTitle,
  blockDesc = "",
  blockInfo,
  action,
}: {
  className?: string;
  blockTitle: string;
  blockDesc?: string;
  blockInfo?: React.JSX.Element;
  action?: React.JSX.Element;
}) {
  return (
    <article
      className={`pb-6 grid grid-cols-5 items-stretch gap-10 border-b border-dark/10 dark:border-light/10 ${className}`}
    >
      <div className={`col-span-4 flex flex-col gap-1`}>
        <p className={`font-medium`}>{blockTitle}</p>
        <desc className={`mb-2 opacity-50`}>{blockDesc}</desc>
        {blockInfo}
      </div>
      <div className={`grid-cols-1 flex flex-col justify-center items-end`}>
        {action}
      </div>
    </article>
  );
}
