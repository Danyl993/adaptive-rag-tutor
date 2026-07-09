"use client";

import { useEffect, useState } from "react";
import { Target } from "lucide-react";

import { getWeakTopics } from "@/services/weakTopics";

export default function WeakTopicsPanel() {

  const [topics, setTopics] = useState([]);

  useEffect(() => {

    async function loadWeakTopics() {

        try {

        const data = await getWeakTopics();

        setTopics(data.weak_topics);

        } catch (err) {

        console.error(err);

        }

    }

    loadWeakTopics();

    const interval = setInterval(loadWeakTopics, 5000);

    return () => clearInterval(interval);

    }, []);

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">

      <div className="mb-5 flex items-center gap-3">

        <Target className="text-red-400" size={22} />

        <h2 className="text-xl font-semibold">
          Weak Topics
        </h2>

      </div>

      {topics.length === 0 ? (

        <p className="text-slate-400">
          No weak topics yet.
        </p>

      ) : (

        <div className="space-y-3">

          {topics.map(([topic, count]) => (

            <div
              key={topic}
              className="flex items-center justify-between rounded-lg bg-slate-800 p-3"
            >

              <span>{topic}</span>

              <span className="rounded-lg bg-red-500 px-2 py-1 text-sm text-white">
                {count}
              </span>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}