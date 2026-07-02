"use client";

import { useState } from "react";

export default function ChatInput({ onSend }) {

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {

    if (!question.trim() || loading) return;

    try {

      setLoading(true);

      await onSend(question);

      setQuestion("");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="mt-4 flex gap-2">

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Ask a question..."
        disabled={loading}
        className="flex-1 bg-gray-800 p-2 rounded disabled:opacity-50"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-blue-600 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Thinking..." : "Send"}
      </button>

    </div>

  );

}