import React from "react";

export default function SettingsBlock({
  className,
  blockTitle,
  blockDesc = "",
  blockInfo = "",
  action,
}: {
  className?: string;
  blockTitle: string;
  blockDesc?: string;
  blockInfo?: any;
  action?: React.JSX.Element;
}) {
  return (
    <article
      className={`grid grid-cols-1 md:grid-cols-5 items-stretch gap-3 lg:gap-10 ${className}`}
    >
      <div className={`col-span-4 flex flex-col gap-1`}>
        <p className={`font-semibold text-sm lg:text-base uppercase`}>
          {blockTitle}
        </p>
        <p className={`mb-4 max-w-lg text-xs lg:text-base opacity-50`}>
          {blockDesc}
        </p>
        {blockInfo ? (
          <p className={`text-sm font-medium text-dark/80 dark:text-light/80`}>
            {blockInfo}
          </p>
        ) : null}
      </div>
      <div
        className={`grid-cols-5 md:grid-cols-1 flex flex-col justify-center items-start md:items-end`}
      >
        {action}
      </div>
    </article>
  );
}
