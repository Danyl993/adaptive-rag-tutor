"use client";

import { useRouter } from "next/navigation";

export default function ModeSelector() {
  const router = useRouter();

  return (
    <div className="flex gap-3">
      <button
        onClick={() => router.push("/learn")}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Learn
      </button>

      <button
        onClick={() => router.push("/exam")}
        className="bg-gray-800 px-4 py-2 rounded"
      >
        Exam
      </button>

      <button
        onClick={() => router.push("/revision")}
        className="bg-gray-800 px-4 py-2 rounded"
      >
        Revision
      </button>
    </div>
  );
}