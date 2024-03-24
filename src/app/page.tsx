import Image from "next/image";

export default function Home() {
  return (
    <section className={`grid gap-6`}>
      {SAMPLE_DATA.map(({ id, author, postedAt, question, answer }, index) => (
        <article
          key={`${id}-${index}`}
          className={`grid border-2 border-amber-500 text-neutral-800 font-light`}
        >
          <section
            className={`p-4 flex items-center gap-2 border-b border-neutral-200 bg-amber-500 text-sm text-neutral-50`}
          >
            {QUESTION_ICON}
            <h6>{question}</h6>
          </section>
          <section className={`px-4 pt-4 flex items-start gap-4`}>
            <div className={`w-11 bg-amber-500 aspect-square`}></div>
            <div>
              <h4 className={`font-bold`}>{author}</h4>
              <p
                className={`-mt-0.5 font-light text-neutral-400`}
                style={{ fontSize: "0.7rem" }}
              >
                posted {postedAt.toString()}
              </p>
            </div>
          </section>
          <section className={`p-4 pt-6 grid gap-4 font-light text-sm`}>
            <p className={``}>{answer}</p>
          </section>
        </article>
      ))}
    </section>
  );
}

const SAMPLE_DATA = [
  {
    id: 1,
    author: "sterling",
    postedAt: new Date(),
    question: "What is your favourite holiday destination?",
    answer:
      "I’d say that my absolute favourite place to holiday would be somewhere near the beach.",
  },
  {
    id: 2,
    author: "pam",
    postedAt: new Date(),
    question: "What was your first dogs name?",
    answer: "I have never had a pet dog.",
  },
  {
    id: 3,
    author: "cheryl",
    postedAt: new Date(),
    question: "What is your favourite holiday destination?",
    answer:
      "I’d say that my absolute favourite place to holiday would be somewhere near the beach.",
  },
  {
    id: 4,
    author: "sterling",
    postedAt: new Date(),
    question: "What is your favourite holiday destination?",
    answer:
      "I’d say that my absolute favourite place to holiday would be somewhere near the beach.",
  },
];

const QUESTION_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 aspect-square"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
    />
  </svg>
);
