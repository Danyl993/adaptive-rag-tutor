"use client";

import API from "@/services/api";

export default function Home() {
  async function testBackend() {
    try {
      const res = await API.get("/");
      alert(JSON.stringify(res.data));
    } catch {
      alert("Backend connection failed");
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="border-b border-gray-800 p-4">
        <h1 className="text-3xl font-bold">
          Adaptive RAG Tutor
        </h1>
      </div>

      <div className="p-4">
        <button
          onClick={testBackend}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Test Backend
        </button>
      </div>

      <div className="grid grid-cols-12 h-[90vh]">
        <div className="col-span-2 border-r border-gray-800 p-4">
          Topics
        </div>

        <div className="col-span-8 p-4">
          Chat Area
        </div>

        <div className="col-span-2 border-l border-gray-800 p-4">
          Sources
        </div>
      </div>
    </main>
  );
}