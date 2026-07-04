export default function UnitSelector({
  unit,
  setUnit,
}) {
  return (
    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
    >
      <option value="U1">Unit 1</option>
      <option value="U2">Unit 2</option>
      <option value="U3">Unit 3</option>
      <option value="U4">Unit 4</option>
      <option value="U5">Unit 5</option>
    </select>
  );
}