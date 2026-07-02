export default function UnitSelector({
  unit,
  setUnit,
}) {
  return (
    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="U1">Unit 1</option>
      <option value="U2">Unit 2</option>
      <option value="U3">Unit 3</option>
      <option value="U4">Unit 4</option>
      <option value="U5">Unit 5</option>
    </select>
  );
}