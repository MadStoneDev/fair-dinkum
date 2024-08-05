export default function AnsweredQuestion({ user }: { user: string }) {
  return (
    <article
      className={`relative flex flex-col lg:rounded-2xl bg-light/80 dark:bg-gray overflow-hidden`}
    >
      {/* Header */}
      <section className={`flex flex-col shadow-xl shadow-dark/20`}>
        <div className={`p-2 md:p-4 flex flex-row items-center gap-4 h-full`}>
          <div
            className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-accent`}
          ></div>
          <div className={`flex-grow flex flex-col justify-center h-full`}>
            <h4
              className={`md:mt-1 -mb-1 md:-mb-1 text-xs font-light text-dark/60 dark:text-light/50`}
            >
              Few moments ago
            </h4>
            <h3 className={`md:text-lg font-medium tracking-tighter`}>
              archer asked
            </h3>
          </div>
        </div>

        {/* Question */}
        <div className={`pt-0 px-4 pb-2 md:pb-4`}>
          <p
            className={`text-xs md:text-sm font-light text-dark dark:text-light/70`}
          >
            Do you want ants? Because that's how you get ants!
          </p>
        </div>
      </section>

      {/* Answer */}
      <div className={`px-4 py-2 md:pb-4 bg-dark/50`}>
        <div className={`mb-4 flex flex-col justify-center`}>
          <h4
            className={`mt-1 -mb-0.5 lg:-mb-1 text-xs font-light text-light/50`}
          >
            Few moments ago
          </h4>
          <h3
            className={`text-sm md:text-base lg:text-lg font-medium tracking-tighter text-light`}
          >
            you answered:
          </h3>
        </div>
        <p className={`text-xs md:text-sm text-light`}>Yayyyy!</p>
      </div>
    </article>
  );
}
