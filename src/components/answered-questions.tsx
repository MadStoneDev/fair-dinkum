export default function AnsweredQuestions({ user }: { user: string }) {
  return (
    <article
      className={`relative flex flex-col bg-light/80 dark:bg-light/15 border-2 border-accent rounded-2xl overflow-hidden`}
    >
      {/* Header */}
      <div className={`p-4 flex flex-row gap-4 h-full`}>
        <div className={`w-12 aspect-square rounded-full bg-accent`}></div>
        <div className={`flex-grow flex flex-col justify-center h-full`}>
          <h4
            className={`mt-1 -mb-1.5 text-xs font-light text-dark/60 dark:text-light/50`}
          >
            Few moments ago
          </h4>
          <h3 className={`text-lg font-medium tracking-tighter`}>
            archer asked
          </h3>
        </div>
      </div>

      {/* Question */}
      <div className={`pt-0 p-4 `}>
        <p className={`text-sm font-light text-dark dark:text-light/70`}>
          Do you want ants? Because that's how you get ants!
        </p>
      </div>

      {/* Answer */}
      <div className={`p-4 bg-accent`}>
        <div className={`mb-4 flex flex-col justify-center`}>
          <h4 className={`mt-1 -mb-1.5 text-xs font-light text-light/50`}>
            Few moments ago
          </h4>
          <h3 className={`text-lg font-medium tracking-tighter text-light`}>
            {user} answered:
          </h3>
        </div>
        <p className={`text-sm text-light`}>Yayyyy!</p>
      </div>
    </article>
  );
}
