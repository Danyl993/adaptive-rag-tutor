"use client";

import { useState } from "react";

import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import Navbar from "@/components/Navbar";
import { getExamData } from "@/services/exam";
import { useEffect } from "react";
import { getSemesters } from "@/services/semester";
import ChatPanel from "@/components/ChatPanel";
import UploadPanel from "@/components/UploadPanel";
import WeakTopicsPanel from "@/components/WeakTopicsPanel";
import StudyProgressPanel from "@/components/StudyProgressPanel";
import LargeModeSelector from "@/components/LargeModeSelector";

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

      setResult(data.revision);

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

      <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

        <Navbar
          semesters={semesters}
          currentSemester={currentSemester}
          onSelectSemester={setCurrentSemester}
        />

      </div>

      <div className="grid grid-cols-12 gap-6 mb-6">

        <div className="col-span-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

            <h2 className="mb-2 text-xl font-bold">
              Exam Actions
            </h2>

            <p className="mb-5 text-sm text-slate-400">
              Exam Mode
            </p>

            <div className="flex flex-col gap-3">

              <button
                onClick={startExamMode}
                disabled={loading}
                className="rounded-xl bg-blue-600 px-4 py-3 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Generating..." : "Exam Revision"}
              </button>

              <button className="rounded-xl bg-slate-800 px-4 py-3">
                2 Marks
              </button>

              <button className="rounded-xl bg-slate-800 px-4 py-3">
                5 Marks
              </button>

              <button className="rounded-xl bg-slate-800 px-4 py-3">
                10 Marks
              </button>

              <button className="rounded-xl bg-slate-800 px-4 py-3">
                Mock Test
              </button>

            </div>

          </div>

        </div>

        <div className="col-span-9">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

            <LargeModeSelector />

            <div className="grid grid-cols-2 gap-8">

              <SubjectSelector
                subjects={selectedSemester?.subjects || []}
                subject={subject}
                setSubject={setSubject}
              />

              <UnitSelector
                units={availableUnits}
                unit={unit}
                setUnit={setUnit}
              />

            </div>

            <div className="mt-6">

              <h2 className="mb-4 text-xl font-bold">
                Exam Output
              </h2>

              <ChatPanel
                subject={subject}
                unit={unit}
                lesson={
                  loading
                    ? "Generating..."
                    : result ||
                      "Select a subject and unit, then click 'Exam Revision' to generate exam notes."
                }
                selectedTopic="Exam Revision"
              />

            </div>


          </div>

        </div>

      </div>

      
    </PageLayout>

  );}