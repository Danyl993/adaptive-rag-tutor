"use client";

import { useEffect, useState } from "react";
import {
    getSemesters,
    createSemester,
    deleteSemester,
  } from "@/services/semester";
import API from "@/services/api";
import NavigationSidebar from "@/components/NavigationSidebar";
import ModeSelector from "@/components/ModeSelector";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import Navbar from "@/components/Navbar";
import PageLayout from "@/components/PageLayout";
import NewSemesterModal from "@/components/NewSemesterModal";
import ResetSemesterModal from "@/components/ResetSemesterModal";

export default function Home() {

  const [subject, setSubject] = useState("");
  const [unit, setUnit] = useState("");

  const [semesters, setSemesters] = useState([]);

  const [currentSemester, setCurrentSemester] = useState("");
  useEffect(() => {

    localStorage.setItem(
      "currentSemester",
      currentSemester
    );

  }, [currentSemester]);
  const [showNewSemesterModal, setShowNewSemesterModal] = useState(false);
  const [showResetSemesterModal, setShowResetSemesterModal] = useState(false);

  async function testBackend() {

    try {

      const res = await API.get("/");

      alert(JSON.stringify(res.data));

    } catch {

      alert("Backend connection failed");

    }

  }

  async function loadSemesters() {

    try {

      const data = await getSemesters();

      if (data.length > 0) {

        setSemesters(data);


      }

    } catch (error) {

      console.error(error);

    }

  }


  async function handleCreateSemester(data) {

    try {

      await createSemester(data);

      await loadSemesters();

      setCurrentSemester(data.semester);

      if (data.subjects.length > 0) {

        setSubject(data.subjects[0].name);
        setUnit("U1");

      }

      setShowNewSemesterModal(false);

    } catch (error) {

      console.error(error);
      alert("Failed to create semester.");

    }

  }

  const selectedSemester = semesters.find(
    (item) => item.semester === currentSemester
  );

  useEffect(() => {

    if (
      selectedSemester &&
      selectedSemester.subjects.length > 0
    ) {

      setSubject(selectedSemester.subjects[0].name);
      setUnit("U1");

    } else {

      setSubject("");
      setUnit("");

    }

  }, [currentSemester, semesters]);

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

    loadSemesters();

  }, []);

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
                onClick={() => setShowResetSemesterModal(true)}
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

      <ResetSemesterModal
        isOpen={showResetSemesterModal}
        semester={currentSemester}
        onCancel={() => setShowResetSemesterModal(false)}
        onConfirm={handleResetSemester}
      />

    </PageLayout>

  );

  async function handleResetSemester() {

    if (semesters.length === 1) {

      alert("At least one semester must exist.");
      setShowResetSemesterModal(false);
      return;

    }

    try {

      await deleteSemester(currentSemester);

      await loadSemesters();

      setShowResetSemesterModal(false);

    } catch (error) {

      console.error(error);
      alert("Failed to delete semester.");

    }

  }

}