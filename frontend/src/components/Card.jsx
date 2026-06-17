export default function Card({ title, children }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
      <h2 className="font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}