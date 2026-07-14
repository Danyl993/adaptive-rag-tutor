"use client";

import { useState } from "react";

import API from "@/services/api";
import NavigationSidebar from "@/components/NavigationSidebar";
import ModeSelector from "@/components/ModeSelector";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import Navbar from "@/components/Navbar";
import PageLayout from "@/components/PageLayout";
import NewSemesterModal from "@/components/NewSemesterModal";

export default function Home() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");

  const [semesters, setSemesters] = useState([
    "Semester 5",
  ]);

  const [currentSemester, setCurrentSemester] = useState("Semester 5");

  const [showNewSemesterModal, setShowNewSemesterModal] = useState(false);

  async function testBackend() {

    try {

      const res = await API.get("/");

      alert(JSON.stringify(res.data));

    } catch {

      alert("Backend connection failed");

    }

  }

  function handleCreateSemester(semester) {

    if (!semesters.includes(semester)) {

      setSemesters(
        [...semesters, semester].sort(
          (a, b) =>
            Number(a.replace("Semester ", "")) -
            Number(b.replace("Semester ", ""))
        )
      );
    }

    setCurrentSemester(semester);

    setShowNewSemesterModal(false);

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

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-3 flex flex-col gap-6">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

            <h2 className="mb-2 text-xl font-bold">
              Quick Actions
            </h2>

            <p className="mb-5 text-sm text-slate-400">
              Manage your semester
            </p>

            <div className="flex flex-col gap-3">

              <button
                onClick={() => setShowNewSemesterModal(true)}
                className="rounded-xl border border-green-500 bg-green-600/20 px-4 py-3 text-left font-medium text-green-300 transition hover:bg-green-600 hover:text-white"
              >
                ➕ New Semester
              </button>

              <button
                className="rounded-xl border border-red-500 bg-red-600/20 px-4 py-3 text-left font-medium text-red-300 transition hover:bg-red-600 hover:text-white"
              >
                🗑 Reset Semester
              </button>

            </div>

          </div>

          <NavigationSidebar />

        </div>

        <div className="col-span-9">

          <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

            <ModeSelector />

            <div className="mt-5 grid grid-cols-2 gap-4">

              <SubjectSelector
                subject={subject}
                setSubject={setSubject}
              />

              <UnitSelector
                unit={unit}
                setUnit={setUnit}
              />

            </div>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-10 min-h-[360px] flex flex-col justify-center">

            <h2 className="text-5xl font-bold">
              Welcome 👋
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Choose a study mode to start learning, revise previous topics,
              practice MCQs, or ask questions using your uploaded study material.
            </p>

            <button
              onClick={testBackend}
              className="mt-8 w-fit rounded-xl bg-cyan-600 px-7 py-3 font-semibold text-white transition hover:bg-cyan-500"
            >
              Test Backend
            </button>

          </div>

        </div>

      </div>

      <NewSemesterModal
        isOpen={showNewSemesterModal}
        onClose={() => setShowNewSemesterModal(false)}
        onCreateSemester={handleCreateSemester}
      />

    </PageLayout>

  );

}