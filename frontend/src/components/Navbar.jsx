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

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-slate-800 px-4 py-2 text-sm">
          Semester 5
        </div>

        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
          D
        </div>

      </div>

    </header>
  );
}