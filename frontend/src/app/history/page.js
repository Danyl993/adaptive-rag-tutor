"use client";

import { useEffect, useState } from "react";

import PageLayout from "@/components/PageLayout";
import Navbar from "@/components/Navbar";
import { getSemesters } from "@/services/semester";
import { getHistory } from "@/services/history";

export default function HistoryPage() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    async function loadHistory() {

      try {

        const data = await getHistory();
        setHistory(data);

      } catch (err) {

        console.error(err);

      }

    }

    loadHistory();

  }, []);

    const [semesters, setSemesters] = useState([]);
    const [currentSemester, setCurrentSemester] = useState("");

    useEffect(() => {
    async function loadSemesters() {

        try {

            const data = await getSemesters();

            setSemesters(data);

            if (data.length > 0) {
            setCurrentSemester(data[0].semester);
            }

        } catch (err) {

            console.error(err);

        }

        }

    loadSemesters();
    }, []);

  return (

    <PageLayout>

        <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

            <Navbar
                semesters={semesters}
                currentSemester={currentSemester}
                onSelectSemester={setCurrentSemester}
            />

        </div>

      <h1 className="text-3xl font-bold mb-6">
        Recent Chats
      </h1>

      {history.length === 0 ? (

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-slate-400">
          No chat history found.
        </div>

      ) : (

        <div className="space-y-4">

          {history.map((item) => (

            <div
              key={item.id}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >

              <p className="text-sm text-slate-400 mb-2">
                {item.created_at}
              </p>

              <p className="font-semibold mb-2">
                Question
              </p>

              <p className="mb-4">
                {item.question}
              </p>

              <p className="font-semibold mb-2">
                Answer
              </p>

              <p className="whitespace-pre-wrap">
                {item.answer}
              </p>

            </div>

          ))}

        </div>

      )}

    </PageLayout>

  );

}