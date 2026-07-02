"use client";

import { useState } from "react";

import Message from "./Message";
import ChatInput from "./ChatInput";

import { getContext } from "@/services/search";

export default function ChatPanel({
  subject,
  unit,
}) {

  const [message, setMessage] = useState(
    "Welcome to Adaptive RAG Tutor!"
  );

  const [context, setContext] = useState(
    "Ask a question to retrieve information from your uploaded study material."
  );

  async function handleQuestion(question) {

    try {

      const result = await getContext(
        question,
        subject,
        unit
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

  return (

    <div className="border border-gray-800 rounded p-4 h-full">

      <h2 className="font-bold mb-4">
        Chat
      </h2>

      <Message text={message} />

      <div className="mt-4 p-3 bg-gray-900 rounded">

        <h3 className="font-bold mb-2">
          Tutor Response
        </h3>

        <p className="whitespace-pre-wrap">
          {context}
        </p>

      </div>

      <ChatInput
        onSend={handleQuestion}
      />

    </div>

  );

}