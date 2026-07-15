"use client";

export default function ResetSemesterModal({
  isOpen,
  semester,
  onCancel,
  onConfirm,
}) {

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-md rounded-2xl border border-red-700 bg-slate-900 p-6 shadow-2xl">

        <h2 className="text-2xl font-bold text-red-400">
          Reset Semester
        </h2>

        <p className="mt-4 text-slate-300">
          This will permanently delete all data for:
        </p>

        <p className="mt-2 rounded-lg bg-slate-800 px-4 py-3 text-lg font-semibold">
          {semester}
        </p>

        <p className="mt-4 text-sm text-slate-400">
          Uploaded files, chats, notes, weak topics, progress and vector database
          will all be removed.
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onCancel}
            className="rounded-xl border border-slate-600 px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-500"
          >
            Continue
          </button>

        </div>

      </div>

    </div>

  );

}