"use client";

import { useState } from "react";

import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import Navbar from "@/components/Navbar";
import { getMCQs } from "@/services/mcq";

export default function MCQPage() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");

  const [mcqs, setMcqs] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateMCQs() {

    try {

      setLoading(true);

      const data = await getMCQs(
        subject,
        unit
      );

      setMcqs(data.mcqs);

    } catch (err) {

      console.error(err);

      setMcqs(
`Unable to generate MCQs.

Please make sure:
• FastAPI backend is running
• Notes have been uploaded for this subject/unit`
      );

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

      <button
        onClick={generateMCQs}
        disabled={loading}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Generating..." : "Generate MCQs"}
      </button>

      <div className="mt-6 border border-gray-800 rounded p-4">

        <h2 className="font-bold mb-3">
          Generated Questions
        </h2>

        <pre className="whitespace-pre-wrap">

          {mcqs || `No MCQs generated yet.

Select a subject and unit, then click
"Generate MCQs".`}

        </pre>

      </div>

    </PageLayout>

  );

}