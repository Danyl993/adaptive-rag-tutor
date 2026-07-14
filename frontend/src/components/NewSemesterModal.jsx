"use client";

export default function NewSemesterModal({
  isOpen,
  onClose,
}) {

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

        <h2 className="text-2xl font-bold">
          Create New Semester
        </h2>

        <p className="mt-2 text-slate-400">
          Configure your semester before you begin studying.
        </p>

        <div className="mt-6 space-y-4">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Semester Name
            </label>

            <input
              type="text"
              placeholder="Semester 5"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Number of Subjects (Max 5)
            </label>

            <input
              type="number"
              min="1"
              max="5"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
            />

          </div>

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-600 px-5 py-2"
          >
            Cancel
          </button>

          <button
            className="rounded-xl bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-500"
          >
            Continue
          </button>

        </div>

      </div>

    </div>

  );

}