"use client";

import { useState } from "react";

import Message from "./Message";
import ChatInput from "./ChatInput";
import { explainBetter } from "@/services/explainBetter";
import { getContext } from "@/services/search";
import { explainSimpler } from "@/services/explain";

export default function ChatPanel({
  subject,
  unit,
  lesson,
  selectedTopic,
}) {

  const [message, setMessage] = useState(
    "Welcome to Adaptive RAG Tutor!"
  );

  const [context, setContext] = useState(
    "Select a topic from the sidebar to begin learning."
  );

  async function handleQuestion(question) {

    try {

      const result = await getContext(
        question,
        subject,
        unit,
        selectedTopic,
        lesson
      );

      setMessage(question);

      setContext(result.answer);

    } catch (err) {

      console.error(err);

      setContext(
`Unable to retrieve study material.

Please check:
• FastAPI backend is running
• The correct Subject and Unit are selected
• Study material has been uploaded`
      );

    }

  }

  async function handleExplainSimpler() {

    if (!lesson) return;

    try {

      const result = await explainSimpler(lesson);

      setContext(result.lesson);

    } catch (err) {

      console.error(err);

    }

  }

  async function handleExplainBetter() {

  if (!lesson) return;

  try {

    const result = await explainBetter(lesson);

    setContext(result.lesson);

  } catch (err) {

    console.error(err);

  }

}

  const displayText =
    context !== "Select a topic from the sidebar to begin learning."
      ? context
      : lesson;

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          {selectedTopic
            ? selectedTopic
            : "AI Tutor"}
        </h2>

        <p className="mt-1 text-slate-400">
          Learn, ask doubts and continue the conversation.
        </p>

      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 min-h-[350px]">

        <Message text={message} />

        <div className="mt-5">

          <p className="whitespace-pre-wrap leading-8 text-slate-300">
            {displayText}
          </p>

        </div>

      </div>

      {lesson && (

        <div className="mt-5 flex flex-wrap gap-3">

          <button
            onClick={handleExplainSimpler}
            className="rounded-xl bg-green-600 px-5 py-2 font-medium text-white hover:bg-green-500"
          >
            Explain Simpler
          </button>

          <button
            onClick={handleExplainBetter}
            className="rounded-xl bg-purple-600 px-5 py-2 font-medium text-white hover:bg-purple-500"
          >
            Explain Better
          </button>

        </div>

      )}

      <ChatInput
        onSend={handleQuestion}
      />

    </div>

  );

}