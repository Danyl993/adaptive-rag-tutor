export default function UnitSelector({
  unit,
  setUnit,
}) {
  return (
    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      className="bg-gray-800 text-white px-3 py-2 rounded"
    >
      <option value="U1">Unit 1</option>
      <option value="U2">Unit 2</option>
      <option value="U3">Unit 3</option>
      <option value="U4">Unit 4</option>
      <option value="U5">Unit 5</option>
    </select>
  );
}