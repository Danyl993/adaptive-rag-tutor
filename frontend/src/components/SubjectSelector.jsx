export default function SubjectSelector({
  subject,
  setSubject,
}) {
  return (
    <select
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="OS">Operating Systems</option>
      <option value="CN">Computer Networks</option>
      <option value="DBMS">DBMS</option>
    </select>
  );
}