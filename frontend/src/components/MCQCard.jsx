"use client";

import { useState } from "react";

export default function MCQCard({ mcqs = [] }) {

  const [revealed, setRevealed] = useState({});

  if (!mcqs.length) {
    return (
      <p className="text-slate-400">
        Generate MCQs to start practicing.
      </p>
    );
  }

  return (
    <div className="space-y-6">

      {mcqs.map((mcq, index) => (

        <div
          key={index}
          className="rounded-xl border border-slate-700 p-4"
        >

          <h3 className="font-semibold mb-3">
            Q{index + 1}. {mcq.question}
          </h3>

          <div className="space-y-2">

            <p>A. {mcq.options.A}</p>
            <p>B. {mcq.options.B}</p>
            <p>C. {mcq.options.C}</p>
            <p>D. {mcq.options.D}</p>

          </div>

          <button
            className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
            onClick={() =>
              setRevealed({
                ...revealed,
                [index]: !revealed[index]
              })
            }
          >
            {revealed[index] ? "Hide Answer" : "Show Answer"}
          </button>

          {revealed[index] && (

            <div className="mt-4 rounded bg-slate-800 p-3">

              <p>
                <strong>Answer:</strong> {mcq.answer}
              </p>

              <p className="mt-2">
                <strong>Explanation:</strong> {mcq.explanation}
              </p>

            </div>

          )}

        </div>

      ))}

    </div>
  );
}