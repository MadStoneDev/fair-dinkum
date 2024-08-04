"use client";

import { FormEvent, useState } from "react";
import styled from "styled-components";
import { IconMessageForward } from "@tabler/icons-react";

const QuestionBlock = styled.span``;

export default function AskQuestion({ user }: { user: string }) {
  // States
  const [question, setQuestion] = useState("");

  return (
    <article
      className={`mb-4 relative flex flex-col dark:border-light md:rounded-2xl overflow-hidden`}
    >
      {/* Header */}
      <div
        className={`px-2 md:px-4 py-4 flex flex-row gap-4 h-full border-b border-dark/10 dark:border-light/10 bg-dark dark:bg-gray text-light`}
      >
        <div className={`flex-grow flex flex-col justify-center h-full`}>
          <h4
            className={`md:mt-1 -mb-0.5 md:-mb-1 text-xs lg:text-sm font-light opacity-60 dark:opacity-40`}
          >
            Hi logged in user,
          </h4>
          <h3 className={`md:text-lg md:font-medium tracking-tighter`}>
            why not ask {user} a question:
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className={`relative flex`}>
        <QuestionBlock
          contentEditable
          data-placeholder={`Example: What's your favourite movie?`}
          className={`px-2 md:px-4 pt-4 pb-10 border min-w-full min-h-24 bg-light focus:ring-0 focus:border-0 focus:outline-none lg:rounded-b-xl resize-none text-sm empty:font-light empty:italic empty:text-dark/60 ${
            question.length > 0 ? "text-dark" : "text-dark/60"
          } overflow-hidden`}
          onInput={(e: FormEvent) => {
            setQuestion(e.currentTarget.innerHTML);
          }}
        />
        <span
          className={`pointer-events-none cursor-text absolute top-0 left-0 px-2 md:px-4 pt-4 text-dark/60 italic text-sm`}
        >
          Example: What's your favourite movie?
        </span>
        <button
          className={`pl-1.5 pt-1.5 pb-1 pr-1 absolute bottom-0 right-0 bg-dark dark:bg-dark/85 hover:bg-accent hover:dark:bg-accent rounded-tl-xl text-light transition-all duration-500 ease-in-out`}
          onClick={() => console.log(question)}
        >
          <IconMessageForward size={26} strokeWidth={1.5} />
        </button>
      </div>
    </article>
  );
}
