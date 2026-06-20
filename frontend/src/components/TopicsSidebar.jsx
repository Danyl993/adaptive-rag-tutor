"use client";

export default function TopicsSidebar() {
  const topics = [
    "Processes",
    "Threads",
    "Deadlocks",
    "Scheduling",
  ];

  function handleTopicClick(topic) {
    alert(`Selected Topic: ${topic}`);
  }

  return (
    <div className="border border-gray-800 rounded p-4">
      <h2 className="font-bold mb-2">
        Topics
      </h2>

      <div className="flex flex-col gap-2">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => handleTopicClick(topic)}
            className="text-left bg-gray-800 p-2 rounded"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}