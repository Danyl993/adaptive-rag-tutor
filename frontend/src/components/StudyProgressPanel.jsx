"use client";

import { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";

import { getProgress } from "@/services/progress";

export default function StudyProgressPanel() {

  const [progress, setProgress] = useState([]);

  useEffect(() => {

    async function loadProgress() {

      try {

        const data = await getProgress();

        setProgress(data.progress);

      } catch (err) {

        console.error(err);

      }

    }

    loadProgress();

  }, []);

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">

      <div className="mb-5 flex items-center gap-3">

        <BarChart3 className="text-green-400" size={22} />

        <h2 className="text-xl font-semibold">
          Study Progress
        </h2>

      </div>

      {progress.length === 0 ? (

        <p className="text-slate-400">
          No study progress yet.
        </p>

      ) : (

        <div className="space-y-3">

          {progress.map(([subject, count]) => (

            <div
              key={subject}
              className="rounded-lg bg-slate-800 p-3"
            >

              <div className="flex items-center justify-between">

                <span>{subject}</span>

                <span className="rounded-lg bg-green-600 px-2 py-1 text-sm text-white">
                  {count} Questions
                </span>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}