import { LuBot, LuVenetianMask } from "react-icons/lu";
import { getTimeAgo } from "@/utils/DateUtils";
import Avatar from "@/components/Avatar";

const QUESTION_TYPES = {
  anonymous: <LuVenetianMask size={20} />,
  bot: <LuBot size={20} />,
};

export default function FeedList() {
  const now = new Date().getTime();

  return (
    <div className={`grid gap-4`}>
      {SAMPLE_DATA.map(({ id, author, postedAt, question, answer }, index) => (
        <article
          key={`${id}-${index}`}
          className={`p-6 sm:p-8 grid bg-white rounded-xl text-neutral-800 font-light overflow-hidden`}
        >
          <section className={`mb-8 flex items-start gap-6`}>
            <article className={`w-fit`}>
              <Avatar />
            </article>
            <div className={`grow grid gap-2 text-neutral-800`}>
              <h4 className={`font-light`}>
                <span className={`font-bold`}>{author}</span> answered the
                question{" "}
                <span className={`font-bold`}>{question.content!}</span>
              </h4>
              <p
                className={`font-light text-neutral-400`}
                style={{ fontSize: "0.7rem" }}
              >
                posted {getTimeAgo(postedAt, now)}
              </p>
            </div>
          </section>
          <section className={`font-light text-sm tracking-wide`}>
            <p className={``}>{answer}</p>
          </section>
        </article>
      ))}
    </div>
  );
}

const SAMPLE_DATA = [
  {
    id: 1,
    author: "sterling",
    postedAt: new Date().getTime(),
    question: {
      content: "What is your favourite holiday destination?",
      type: "anonymous",
    },
    answer:
      "I’d say that my absolute favourite place to holiday would be somewhere near the beach.",
  },
  {
    id: 2,
    author: "pam",
    postedAt: new Date().getTime() - 1000 * 60 * 60 * 4,
    question: { content: "What was your first dogs name?", type: "bot" },
    answer: "I have never had a pet dog.",
  },
  {
    id: 3,
    author: "cheryl",
    postedAt: new Date().getTime() - 1000 * 60 * 60 * 24,
    question: {
      content: "What is your favourite holiday destination?",
      type: "anonymous",
    },
    answer:
      "I’d say that my absolute favourite place to holiday would be somewhere near the beach.",
  },
  {
    id: 4,
    author: "sterling",
    postedAt: new Date().getTime() - 1000 * 60 * 30,
    question: {
      content: "What is your favourite holiday destination?",
      type: "anonymous",
    },
    answer:
      "I’d say that my absolute favourite place to holiday would be somewhere near the beach.",
  },
  {
    id: 4,
    author: "sterling",
    postedAt: new Date().getTime() - 1000 * 60 * 30,
    question: {
      content: "What is your favourite holiday destination?",
      type: "anonymous",
    },
    answer:
      "I’d say that my absolute favourite place to holiday would be somewhere near the beach.",
  },
];

const QUESTION_ICON = <LuBot size={20} />;
