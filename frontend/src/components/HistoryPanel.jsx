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

    <div className="border border-gray-800 rounded p-4">

      <h2 className="font-bold mb-4">
        Conversation History
      </h2>

      {history.length === 0 ? (

        <p>No history found.</p>

      ) : (

        history.map((item) => (

          <div
            key={item[0]}
            className="mb-4 border-b border-gray-700 pb-3"
          >

            <p className="font-semibold">
              Q: {item[1]}
            </p>

            <p className="text-gray-300 mt-2">
              A: {item[2]}
            </p>

          </div>

        ))

      )}

    </div>

  );

}