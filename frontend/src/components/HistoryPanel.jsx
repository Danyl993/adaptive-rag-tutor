"use client";

import { useEffect, useState } from "react";
import { History } from "lucide-react";
import { getHistory } from "@/services/history";

export default function HistoryPanel() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    async function loadHistory() {

      try {

        const data = await getHistory();

        setHistory(data.history);

      } catch (err) {

        console.error(err);

      }

    }

    loadHistory();

  }, []);

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">

      <div className="mb-5 flex items-center gap-3">

        <History className="text-blue-500" size={22} />

        <h2 className="text-xl font-semibold">
          Conversation History
        </h2>

      </div>

      {history.length === 0 ? (

        <p className="text-slate-400">
          No previous conversations yet.
        </p>

      ) : (

        <div className="space-y-4">

          {history.map((item) => (

            <div
              key={item[0]}
              className="rounded-xl border border-slate-700 bg-slate-800/60 p-4"
            >

              <p className="font-semibold text-blue-400">
                Q: {item[1]}
              </p>

              <p className="mt-3 text-slate-300">
                {item[2]}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}