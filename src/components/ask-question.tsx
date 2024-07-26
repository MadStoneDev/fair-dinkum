"use client";

import { useState } from "react";
import styled from "styled-components";

const QuestionBlock = styled.span`
  &:empty::before {
    content: attr(data-placeholder);
  }
`;

export default function AskQuestion({ user }: { user: string }) {
  // States
  const [question, setQuestion] = useState("");

  return (
    <article
      className={`mb-4 relative flex flex-col border-2 border-dark dark:border-light md:rounded-2xl overflow-hidden`}
    >
      {/* Header */}
      <div
        className={`px-2 md:px-4 py-4 flex flex-row gap-4 h-full border-b border-dark/10 dark:border-light/10 bg-dark dark:bg-light text-light dark:text-dark`}
      >
        <div className={`flex-grow flex flex-col justify-center h-full`}>
          <h4
            className={`md:mt-1 -mb-0.5 md:-mb-1.5 text-xs lg:text-sm font-light opacity-60`}
          >
            Hi logged in user,
          </h4>
          <h3 className={`md:text-lg md:font-medium tracking-tighter`}>
            why not ask {user} a question:
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className={`flex`}>
        <QuestionBlock
          contentEditable
          data-placeholder={`Example: What's your favourite movie?`}
          className={`px-2 md:px-4 py-4 min-w-full min-h-20 bg-transparent focus:ring-0 focus:border-0 focus:outline-none rounded-xl resize-none text-sm empty:font-light empty:italic text-dark dark:text-light empty:text-dark/60 empty:dark:text-light/70`}
        >
          {question}
        </QuestionBlock>
      </div>
    </article>
  );
}
