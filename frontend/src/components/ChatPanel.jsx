"use client";

import { useState } from "react";

import Message from "./Message";
import ChatInput from "./ChatInput";
import { explainBetter } from "@/services/explainBetter";
import { getContext } from "@/services/search";
import { explainSimpler } from "@/services/explain";
import ReactMarkdown from "react-markdown";

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

  const [sources, setSources] = useState([]);

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
      setSources(result.source || []);
    } catch (err) {

      console.error(err);
      setSources([]);
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

          <div className="leading-8 text-slate-300">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold text-white mb-6 mt-8 border-b border-slate-700 pb-2">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-cyan-400 mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold text-blue-300 mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-base text-slate-300 leading-8">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-white">
                    {children}
                  </strong>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc ml-6 space-y-2 mb-4">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal ml-6 space-y-2 mb-4">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-slate-300">
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-slate-400 my-4">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-slate-800 px-1 py-0.5 rounded text-green-400">
                    {children}
                  </code>
                ),
              }}
            >
              {displayText}
            </ReactMarkdown>
          </div>

          {sources.length > 0 && (

    <div className="mt-6 border-t border-slate-800 pt-4">

      <h3 className="mb-3 text-sm font-semibold text-slate-400">
        References
      </h3>

      <div className="space-y-2">

        {sources.map((source, index) => (

          <div
            key={index}
            className="rounded-lg bg-slate-900 p-3 text-sm text-slate-300"
          >
            📄 {source.file} — Page {source.page}
          </div>

        ))}

      </div>

    </div>

  )}

          

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