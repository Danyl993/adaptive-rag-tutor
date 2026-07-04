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

    <div className="mt-6 flex gap-3">

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Ask a follow-up question..."
        disabled={loading}
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none disabled:opacity-50"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Send"}
      </button>

    </div>

  );

}