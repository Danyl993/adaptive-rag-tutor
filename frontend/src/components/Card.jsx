export default function Card({ title, children }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:border-blue-500 transition-colors duration-200">

      <h2 className="text-lg font-semibold mb-4">
        {title}
      </h2>

      {children}

    </div>
  );
}