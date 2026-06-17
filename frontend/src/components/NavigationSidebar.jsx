export default function NavigationSidebar() {
  return (
    <div className="flex flex-col gap-3">
      <button className="bg-gray-800 p-2 rounded">Learn</button>
      <button className="bg-gray-800 p-2 rounded">Exam</button>
      <button className="bg-gray-800 p-2 rounded">Revision</button>
      <button className="bg-gray-800 p-2 rounded">MCQ</button>
      <button className="bg-gray-800 p-2 rounded">Q&A</button>
    </div>
  );
}