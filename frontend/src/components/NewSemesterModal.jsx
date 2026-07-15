"use client";

import { useState } from "react";

export default function NewSemesterModal({
  isOpen,
  onClose,
  onCreateSemester,
}) {

  const [step, setStep] = useState(1);

  const [semesterNumber, setSemesterNumber] = useState("");

  const [subjects, setSubjects] = useState([
    {
      name: "",
      units: 4,
    },
  ]);

  if (!isOpen) return null;

  function addSubject() {

    if (subjects.length >= 8) return;

    setSubjects([
      ...subjects,
      {
        name: "",
        units: 4,
      },
    ]);

  }

  function updateSubject(index, field, value) {

    const updated = [...subjects];

    updated[index][field] = value;

    setSubjects(updated);

  }

  function handleCreateSemester() {

    if (!semesterNumber) return;

    onCreateSemester({
      semester: `Semester ${semesterNumber}`,
      subjects,
    });

  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

        <h2 className="text-2xl font-bold">
          Create New Semester
        </h2>

        <p className="mt-2 text-slate-400">
          Configure your semester before you begin studying.
        </p>

        {step === 1 && (

          <div className="mt-8">

            <label className="mb-2 block text-sm font-medium">
              Semester Number
            </label>

            <input
              type="number"
              min="1"
              value={semesterNumber}
              onChange={(e) => setSemesterNumber(e.target.value)}
              placeholder="5"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
            />

            <p className="mt-4 text-sm text-slate-400">
              Maximum Subjects: 8
            </p>

            <div className="mt-8 flex justify-end gap-3">

              <button
                onClick={onClose}
                className="rounded-xl border border-slate-600 px-5 py-2"
              >
                Cancel
              </button>

              <button
                onClick={() => setStep(2)}
                className="rounded-xl bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-500"
              >
                Continue
              </button>

            </div>

          </div>

        )}

        {step === 2 && (

          <div className="mt-8">

            <div className="space-y-6">

              {subjects.map((subject, index) => (

                <div
                  key={index}
                  className="rounded-xl border border-slate-700 p-4"
                >

                  <h3 className="mb-4 font-semibold">
                    Subject {index + 1}
                  </h3>

                  <label className="mb-2 block text-sm">
                    Subject Name
                  </label>

                  <input
                    type="text"
                    value={subject.name}
                    onChange={(e) =>
                      updateSubject(
                        index,
                        "name",
                        e.target.value
                      )
                    }
                    className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
                  />

                  <label className="mb-2 block text-sm">
                    Number of Units
                  </label>

                  <input
                    type="number"
                    min="1"
                    max="8"
                    value={subject.units}
                    onChange={(e) =>
                      updateSubject(
                        index,
                        "units",
                        Number(e.target.value)
                      )
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
                  />

                </div>

              ))}

            </div>

            {subjects.length < 8 && (

              <button
                onClick={addSubject}
                className="mt-6 rounded-xl border border-cyan-500 bg-cyan-600/20 px-5 py-3 text-cyan-300 hover:bg-cyan-600 hover:text-white"
              >
                + Add Subject
              </button>

            )}

            <div className="mt-8 flex justify-between">

              <button
                onClick={() => setStep(1)}
                className="rounded-xl border border-slate-600 px-5 py-2"
              >
                Back
              </button>

              <button
                onClick={handleCreateSemester}
                className="rounded-xl bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-500"
              >
                Create Semester
              </button>

            </div>

          </div>

        )}

      </div>

    </div>

  );

}