"use client";

import { useState } from "react";

import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";

import { getRevisionData } from "@/services/revision";

export default function RevisionPage() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");

  const [notes, setNotes] = useState("");

  async function generateRevision() {

    try {

      const data = await getRevisionData(
        subject,
        unit
      );

      setNotes(data.notes);

    } catch (err) {

      console.error(err);

      setNotes("Failed to generate revision notes.");

    }

  }

  return (

    <PageLayout>

      <h1 className="text-3xl font-bold">
        Revision Mode
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
        onClick={generateRevision}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Revision Notes
      </button>

      <div className="mt-6 border border-gray-800 rounded p-4">

        <h2 className="font-bold mb-3">
          Revision Notes
        </h2>

        <pre className="whitespace-pre-wrap">
          {notes}
        </pre>

      </div>

    </PageLayout>

  );

}