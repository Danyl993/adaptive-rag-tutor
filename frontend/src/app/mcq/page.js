"use client";

import { useState } from "react";

import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";

import { getMCQs } from "@/services/mcq";

export default function MCQPage() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");

  const [mcqs, setMcqs] = useState("");

  async function generateMCQs() {

    try {

      const data = await getMCQs(
        subject,
        unit
      );

      setMcqs(data.mcqs);

    } catch (err) {

      console.error(err);

      setMcqs("Failed to generate MCQs.");

    }

  }

  return (

    <PageLayout>

      <h1 className="text-3xl font-bold">
        MCQ Practice
      </h1>

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

      <button
        onClick={generateMCQs}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate MCQs
      </button>

      <div className="mt-6 border border-gray-800 rounded p-4">

        <h2 className="font-bold mb-3">
          Generated Questions
        </h2>

        <pre className="whitespace-pre-wrap">
          {mcqs}
        </pre>

      </div>

    </PageLayout>

  );

}