"use client";

import { useEffect, useState } from "react";
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

    <div className="border border-gray-800 rounded-lg p-4 bg-gray-900">

      <h2 className="text-lg font-semibold mb-4">
        Conversation History
      </h2>

      {history.length === 0 ? (

        <p className="text-gray-400">
          No previous conversations yet.
        </p>

      ) : (

        <div className="space-y-4">

          {history.map((item) => (

            <div
              key={item[0]}
              className="border border-gray-700 rounded-lg p-3"
            >

              <p className="font-semibold text-blue-400">
                Q: {item[1]}
              </p>

              <p className="mt-2 text-gray-300">
                {item[2]}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}