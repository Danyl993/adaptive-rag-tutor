"use client";

export default function Navbar() {
  return (
    <header className="mb-8 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-4 shadow-lg">

      <div>
        <h1 className="text-2xl font-bold">
          Adaptive RAG Tutor
        </h1>

        <p className="text-sm text-slate-400">
          AI-Powered Study Assistant
        </p>
      </div>

      <div className="flex items-center gap-4">

  <div className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2">
      <p className="text-xs text-slate-400">
        Current Semester
      </p>
      <p className="font-semibold">
        Semester 5
      </p>
    </div>

    <div className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2">
      <p className="text-xs text-slate-400">
        Status
      </p>
      <p className="font-semibold text-green-400">
        Ready
      </p>
    </div>

    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-lg font-bold text-white">
      D
    </div>

  </div>

    </header>
  );
}