export default function User({ params }: { params: { user: string } }) {
  // Params
  const { user } = params;

  return (
    <main className="p-8 grid grid-cols-8 gap-6 transition-all duration-500 ease-in-out">
      <section className={`col-span-3 flex flex-col gap-4`}>
        {/* New Question */}
        <article
          className={`relative flex flex-col border-2 border-dark dark:border-light rounded-2xl overflow-hidden`}
        >
          {/* Header */}
          <div
            className={`p-4 flex flex-row gap-4 h-full border-b border-dark/10 dark:border-light/10 bg-dark dark:bg-light text-light dark:text-dark`}
          >
            <div className={`flex-grow flex flex-col justify-center h-full`}>
              <h4 className={`mt-1 -mb-1.5 text-sm font-light opacity-60`}>
                Hi logged in user,
              </h4>
              <h3 className={`text-lg font-medium tracking-tighter`}>
                why not ask {user} a question:
              </h3>
            </div>
          </div>

          {/* Body */}
          <div className={`p-4 min-h-20`}>
            <p
              className={`text-sm font-light italic text-dark dark:text-light/70`}
            >
              Example: what's your favourite movie?
            </p>
          </div>
        </article>

        {/* Separator */}
        <div className={`h-px w-full bg-dark/10 dark:bg-light/10`}></div>

        {/* Question */}
        <article
          className={`relative flex flex-col bg-light/80 dark:bg-light/15 rounded-2xl`}
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
      </section>

      {/* User Info */}
      <section className={`col-span-2 flex flex-col items-center gap-1`}>
        <div className={`mb-3 w-32 aspect-square rounded-full bg-accent`}></div>
        <h1 className={`text-xl tracking-tight text-dark dark:text-light`}>
          {user}
        </h1>
        <p
          className={`mb-3 max-w-40 font-light tracking-tight text-sm text-center text-dark/50 dark:text-light/50`}
        >
          member at <span className={`font-bold`}>fair</span>Dinkum since
          August, 2024
        </p>
        <div className={`pb-10 flex flex-row gap-4`}>
          <h3 className={`py-2 font-bold`}>
            15<span className={`pl-2 font-light opacity-70`}>Followers</span>
          </h3>
          <div className={`w-0.5 h-full bg-dark/50 dark:bg-light/50`}></div>
          <h3 className={`py-2 font-bold`}>
            23<span className={`pl-2 font-light opacity-70`}>Following</span>
          </h3>
        </div>
        <p
          className={`max-w-52 text-sm font-light text-dark/50 dark:text-light/50 tracking-tighter text-center`}
        >
          this is a quick bio about this user and all of the things they want to
          tell us about themselves.
        </p>
      </section>

      {/* Right Column */}
      <section className={`col-span-3 flex flex-col gap-4`}>
        {/* Question */}
        <article
          className={`relative flex flex-col bg-light/80 dark:bg-light/15 rounded-2xl overflow-hidden`}
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
      </section>
    </main>
  );
}
