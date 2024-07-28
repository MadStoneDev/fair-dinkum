export default function HowsItWork() {
  return (
    <main className={`py-8 flex flex-col gap-4`}>
      <section
        className={`p-16 flex flex-col items-center gap-2 w-full bg-light text-center`}
      >
        <h1
          className={`mb-2 text-4xl font-bold tracking-tight text-dark dark:text-light`}
        >
          Thank you for your choosing
          <span className={`ml-1 bg-light text-accent`}>fair</span>
          <span className={`px-1  bg-accent text-light`}>Dinkum</span>
        </h1>
        <p
          className={`max-w-4xl text-lg font-light tracking-tight text-dark/50 dark:text-light/50 text-center`}
        >
          It means a great deal that you've visited and decided to use our
          platform.
        </p>
      </section>
      <section
        className={`p-8 flex flex-col items-center gap-2 w-full text-center font-light`}
      >
        <p className={``}>
          <span className={`font-bold`}>fair</span>Dinkum is a secure platform
          for anonymous and non-anonymous questions.
        </p>
      </section>
    </main>
  );
}
