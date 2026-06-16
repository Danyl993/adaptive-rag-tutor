export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="border-b border-gray-800 p-4">
        <h1 className="text-3xl font-bold">
          Adaptive RAG Tutor
        </h1>
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