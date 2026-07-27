"use client";

import { useState } from "react";

import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { getSemesters } from "@/services/semester";
import ChatPanel from "@/components/ChatPanel";
import LargeModeSelector from "@/components/LargeModeSelector";

export default function QAPage() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");
  const [semesters, setSemesters] = useState([]);
  const [currentSemester, setCurrentSemester] = useState("");

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
              Q&A
            </h2>

            <p className="mb-5 text-sm text-slate-400">
              Ask questions from your uploaded notes.
            </p>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-300">

              Select a subject and unit, then use the chat panel on the right to ask questions about your uploaded notes.

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
                Ask Questions
              </h2>

              <ChatPanel
                subject={subject}
                unit={unit}
                lesson=""
                selectedTopic="Q&A"
              />

            </div>


          </div>

        </div>

      </div>

      
    </PageLayout>

  );}