export default function SubjectSelector({
  subject,
  setSubject,
}) {
  return (
    <select
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      className="bg-gray-800 text-white px-3 py-2 rounded"
    >
      <option value="OS">Operating Systems</option>
      <option value="CN">Computer Networks</option>
      <option value="DBMS">DBMS</option>
    </select>
  );
}