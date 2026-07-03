"use client";

import { useState } from "react";

import Message from "./Message";
import ChatInput from "./ChatInput";

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

  const displayText =
    context !== "Select a topic from the sidebar to begin learning."
      ? context
      : lesson;

  return (

    <div className="border border-gray-800 rounded p-4 h-full">

      <h2 className="font-bold mb-4">
        Chat
      </h2>

      <Message text={message} />

      <div className="mt-4 p-3 bg-gray-900 rounded">

        <h3 className="font-bold mb-2">
          {selectedTopic
            ? `Learning: ${selectedTopic}`
            : "Tutor Response"}
        </h3>

        <p className="whitespace-pre-wrap">
          {displayText}
        </p>

      </div>

      {lesson && (

        <button
          onClick={handleExplainSimpler}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Explain Simpler
        </button>

      )}

      <ChatInput
        onSend={handleQuestion}
      />

    </div>

  );

}