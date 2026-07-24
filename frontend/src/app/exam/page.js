"use client";

import { useState } from "react";

import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import Navbar from "@/components/Navbar";
import { getExamData } from "@/services/exam";
import { useEffect } from "react";
import { getSemesters } from "@/services/semester";

export default function ExamPage() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");
  const [semesters, setSemesters] = useState([]);
  const [currentSemester, setCurrentSemester] = useState("");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function loadSemesters() {

      try {

        const data = await getSemesters();

        setSemesters(data);

        if (data.length > 0) {
          setCurrentSemester(data[0].semester);
        }

      } catch (err) {

        console.error(err);

      }

    }

    loadSemesters();

  }, []);

  const selectedSemester = semesters.find(
    (item) => item.semester === currentSemester
  );

  const selectedSubject = selectedSemester?.subjects?.find(
    (item) => item.name === subject
  );

  const availableUnits = selectedSubject
    ? Array.from(
        { length: selectedSubject.units },
        (_, index) => `U${index + 1}`
      )
    : [];

  useEffect(() => {

    if (
      selectedSemester &&
      selectedSemester.subjects.length > 0
    ) {
      setSubject(selectedSemester.subjects[0].name);
      setUnit("U1");
    }

  }, [currentSemester, semesters]);

  async function startExamMode() {

    try {

      setLoading(true);

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
`Unable to start Exam Mode.

Please make sure:
• FastAPI backend is running
• Study material has been uploaded
• Subject and Unit are selected`
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <PageLayout>
      <Navbar
        semesters={semesters}
        currentSemester={currentSemester}
        onSelectSemester={setCurrentSemester}
      />

      <div className="mt-6">

        <SubjectSelector
          subjects={selectedSemester?.subjects || []}
          subject={subject}
          setSubject={setSubject}
        />

      </div>

      <div className="mt-4">

        <UnitSelector
          units={availableUnits}
          unit={unit}
          setUnit={setUnit}
        />

      </div>

      <button
        onClick={startExamMode}
        disabled={loading}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Loading..." : "Start Exam Mode"}
      </button>

      <div className="mt-6 border border-gray-800 rounded p-4">

        <h2 className="font-bold mb-3">
          Exam Response
        </h2>

        <pre className="whitespace-pre-wrap">

          {result || `Exam mode is ready.

Select a subject and unit, then click
"Start Exam Mode".`}

        </pre>

      </div>

    </PageLayout>

  );

}