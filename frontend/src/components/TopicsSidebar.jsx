"use client";

import { useEffect, useState } from "react";
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

    <div className="border border-gray-800 rounded p-4">

      <h2 className="font-bold mb-4">
        Topics
      </h2>

      {topics.length === 0 ? (

        <p>No topics found.</p>

      ) : (

        <div className="flex flex-col gap-2">

          {topics.map((topic) => (

            <button
              key={topic}
              onClick={() => onTopicSelect(topic)}
              className="text-left bg-gray-800 hover:bg-blue-600 p-2 rounded transition"
            >
              {topic}
            </button>

          ))}

        </div>

      )}

    </div>

  );

}