"use client";

import { useState } from "react";

import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { getSemesters } from "@/services/semester";
import LargeModeSelector from "@/components/LargeModeSelector";
import { getFiles } from "@/services/files";

export default function FilesPage() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");
  const [semesters, setSemesters] = useState([]);
  const [currentSemester, setCurrentSemester] = useState("");
  const [files, setFiles] = useState([]);
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

  async function loadFiles() {

    try {

        setLoading(true);

        const data = await getFiles(subject, unit);

        setFiles(data);

    } catch (err) {

        console.error(err);

        setFiles([]);

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
              Uploaded Files
            </h2>

            <p className="mb-5 text-sm text-slate-400">
              Browse uploaded study material
            </p>

            <div className="flex flex-col gap-3">

                <button
                    onClick={loadFiles}
                    disabled={loading}
                    className="rounded-xl bg-blue-600 px-4 py-3 text-white disabled:opacity-50"
                    >
                    {loading ? "Loading..." : "Load Files"}
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
                    Uploaded Files
              </h2>

              <div className="mt-6">

                <h2 className="mb-4 text-xl font-bold">
                    Uploaded Files
                </h2>

                {files.length === 0 ? (

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-slate-400">
                    No files found for this subject and unit.
                    </div>

                ) : (

                    <div className="space-y-4">

                    {files.map((file, index) => (

                        <div
                        key={index}
                        className="rounded-xl border border-slate-800 bg-slate-900 p-5"
                        >

                        <h3 className="font-semibold">
                            {file.name}
                        </h3>

                        <p className="text-sm text-slate-400 mt-2">
                            Type: {file.type}
                        </p>

                        <p className="text-sm text-slate-400">
                            Size: {(file.size / 1024).toFixed(2)} KB
                        </p>

                        </div>

                    ))}

                    </div>

                )}

                </div>

            </div>


          </div>

        </div>

      </div>

      
    </PageLayout>

  );}