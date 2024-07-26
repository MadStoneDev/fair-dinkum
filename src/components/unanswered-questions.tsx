export default function UnansweredQuestions() {
  return (
    <article
      className={`relative flex flex-col bg-light dark:bg-light/15 md:rounded-2xl`}
    >
      {/* Header */}
      <div className={`p-4 flex flex-row gap-4 h-full`}>
        <div className={`w-12 aspect-square rounded-full bg-accent`}></div>
        <div className={`flex-grow flex flex-col justify-center h-full`}>
          <h4
            className={`mt-1 -mb-1 text-xs font-light text-dark/60 dark:text-light/50`}
          >
            Few moments ago
          </h4>
          <h3 className={`text-lg font-medium tracking-tighter`}>
            logged in user asked
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className={`pt-0 p-4 `}>
        <p className={`text-sm font-light text-dark dark:text-light/70`}>
          Some question that is really important and worthy of a long,
          meaningful and special answer?
        </p>
      </div>
    </article>
  );
}
