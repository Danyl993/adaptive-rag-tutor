"use client";

export default function SemesterSwitcher({
  semesters,
  currentSemester,
  onSelectSemester,
}) {

  return (

    <div className="absolute right-0 top-16 z-50 w-56 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl">

      <h3 className="mb-3 text-sm font-semibold text-slate-400">
        Select Semester
      </h3>

      <div className="flex flex-col gap-2">

        {semesters.map((semester) => (

          <button
            key={semester}
            onClick={() => onSelectSemester(semester)}
            className={`rounded-xl px-4 py-3 text-left transition ${
              semester === currentSemester
                ? "bg-cyan-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {semester}
          </button>

        ))}

      </div>

    </div>

  );

}