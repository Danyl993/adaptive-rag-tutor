export default function SubjectSelector({
  subject,
  setSubject,
}) {
  return (
    <select
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
    >
      <option value="OS">Operating Systems</option>
      <option value="CN">Computer Networks</option>
      <option value="DBMS">DBMS</option>
    </select>
  );
}