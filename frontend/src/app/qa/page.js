"use client";

import { useState } from "react";

import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import Navbar from "@/components/Navbar";
import { askQuestion } from "@/services/qa";

export default function QAPage() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleAsk() {

    if (!question.trim()) return;

    try {

      setLoading(true);

      const data = await askQuestion(
        question,
        subject,
        unit
      );

      setAnswer(data.answer);

    } catch (err) {

      console.error(err);

      setAnswer("Failed to get an answer.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <PageLayout>
      <Navbar />

      <div className="mt-6">
        <SubjectSelector
          subject={subject}
          setSubject={setSubject}
        />
      </div>

      <div className="mt-4">
        <UnitSelector
          unit={unit}
          setUnit={setUnit}
        />
      </div>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        className="w-full mt-6 p-3 bg-gray-800 rounded"
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      <div className="mt-6 border border-gray-800 rounded p-4">

        <h2 className="font-bold mb-2">
          Answer
        </h2>

        <pre className="whitespace-pre-wrap">

          {answer || "Ask a question to begin."}

        </pre>

      </div>

    </PageLayout>

  );

}