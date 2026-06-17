export default function ModeSelector() {
  return (
    <div className="flex gap-3">
      <button className="bg-blue-600 px-4 py-2 rounded">
        Learn
      </button>

      <button className="bg-gray-800 px-4 py-2 rounded">
        Exam
      </button>

      <button className="bg-gray-800 px-4 py-2 rounded">
        Revision
      </button>
    </div>
  );
}