import { LuBot, LuSiren } from "react-icons/lu";
import { getTimeAgo } from "@/utils/DateUtils";

export default function Home() {
  const now = new Date().getTime();

  return (
    <section className={`grid gap-6`}>
      {SAMPLE_DATA.map(({ id, author, postedAt, question, answer }, index) => (
        <article
          key={`${id}-${index}`}
          className={`grid border-2 border-amber-500 rounded-xl text-neutral-800 font-light overflow-hidden`}
        >
          <section
            className={`p-4 flex items-center gap-2 border-b border-neutral-200 bg-amber-500 text-sm text-neutral-50`}
          >
            {QUESTION_ICON}
            <h6 className={`pt-1`}>{question}</h6>
          </section>
          <section className={`px-4 pt-4 flex items-start gap-4`}>
            <div className={`w-11 bg-amber-500 aspect-square`}></div>
            <div>
              <h4 className={`font-bold`}>{author}</h4>
              <p
                className={`-mt-0.5 font-light text-neutral-400`}
                style={{ fontSize: "0.7rem" }}
              >
                posted {getTimeAgo(postedAt, now)}
              </p>
            </div>
          </section>
          <section className={`p-4 pt-6 grid gap-4 font-light`}>
            <p className={`text-xs`}>{answer}</p>
          </section>
        </article>
      ))}
      <section>
        <div
          className={`grid place-content-center far bg-rose-600 h-40 overflow-hidden`}
          style={{
            aspectRatio: "cos(30deg)",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <div className={`w-72 h-72 bg-amber-500`}></div>
        </div>
      </section>
    </section>
  );
}

const SAMPLE_DATA = [
  {
    id: 1,
    author: "sterling",
    postedAt: new Date().getTime(),
    question: "What is your favourite holiday destination?",
    answer:
      "I’d say that my absolute favourite place to holiday would be somewhere near the beach.",
  },
  {
    id: 2,
    author: "pam",
    postedAt: new Date().getTime() - 1000 * 60 * 60 * 4,
    question: "What was your first dogs name?",
    answer: "I have never had a pet dog.",
  },
  {
    id: 3,
    author: "cheryl",
    postedAt: new Date().getTime() - 1000 * 60 * 60 * 24,
    question: "What is your favourite holiday destination?",
    answer:
      "I’d say that my absolute favourite place to holiday would be somewhere near the beach.",
  },
  {
    id: 4,
    author: "sterling",
    postedAt: new Date().getTime() - 1000 * 60 * 30,
    question: "What is your favourite holiday destination?",
    answer:
      "I’d say that my absolute favourite place to holiday would be somewhere near the beach.",
  },
];

const QUESTION_ICON = <LuBot size={20} />;
