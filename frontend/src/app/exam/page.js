"use client";

import { useState } from "react";

import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";

import { getExamData } from "@/services/exam";

export default function ExamPage() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");

  const [result, setResult] = useState("");

  async function startExamMode() {

    try {

      const data = await getExamData(
        subject,
        unit
      );

      setResult(
        JSON.stringify(
          data,
          null,
          2
        )
      );

    } catch (err) {

      console.error(err);

      setResult(
        "Failed to load exam mode."
      );

    }

  }

  return (

    <PageLayout>

      <h1 className="text-3xl font-bold">
        Exam Mode
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
        onClick={startExamMode}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Start Exam Mode
      </button>

      <div className="mt-6 border border-gray-800 rounded p-4">

        <h2 className="font-bold mb-3">
          Exam Response
        </h2>

        <pre className="whitespace-pre-wrap">
          {result}
        </pre>

      </div>

    </PageLayout>

  );

}