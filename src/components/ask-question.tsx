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
      <div className={`flex`}>
        <QuestionBlock
          contentEditable
          data-placeholder={`Example: What's your favourite movie?`}
          className={`p-4 min-w-full min-h-20 bg-transparent focus:ring-0 focus:border-0 focus:outline-none rounded-xl resize-none text-sm empty:font-light empty:italic text-dark dark:text-light empty:text-dark/60 empty:dark:text-light/70`}
        >
          {question}
        </QuestionBlock>
      </div>
    </article>
  );
}
