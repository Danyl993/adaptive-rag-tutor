"use client";

import { useState } from "react";

export default function ChatInput({ onSend }) {

  const [question, setQuestion] = useState("");

  function handleSend() {

    if (!question.trim()) return;

    onSend(question);

    setQuestion("");
  }

  return (
    <div className="mt-4 flex gap-2">

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        className="flex-1 bg-gray-800 p-2 rounded"
      />

      <button
        onClick={handleSend}
        className="bg-blue-600 px-4 rounded"
      >
        Send
      </button>

    </div>
  );
}