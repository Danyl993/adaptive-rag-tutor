"use client";

import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { getTopics } from "@/services/topics";

export default function TopicsSidebar({
  subject,
  unit,
  onTopicSelect,
}) {

  const [topics, setTopics] = useState([]);

  useEffect(() => {

    async function loadTopics() {

      try {

        const data = await getTopics(
          subject,
          unit
        );

        setTopics(data.topics);

      } catch (err) {

        console.error(err);

      }

    }

    loadTopics();

  }, [subject, unit]);

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">

      <div className="mb-5 flex items-center gap-3">

        <BookOpen className="text-blue-500" size={22} />

        <h2 className="text-xl font-semibold">
          Topics
        </h2>

      </div>

      {topics.length === 0 ? (

        <p className="text-slate-400">
          No topics found.
        </p>

      ) : (

        <div className="space-y-3">

          {topics.map((topic) => (

            <button
              key={topic}
              onClick={() => onTopicSelect(topic)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800/60 p-3 text-left text-slate-200 transition-all hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              {topic}
            </button>

          ))}

        </div>

      )}

    </div>

  );

}