"use client";

export default function UnitSelector({
  units,
  unit,
  setUnit,
}) {

  return (

    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
    >

      {units.length === 0 ? (

        <option value="">
          No Units
        </option>

      ) : (

        units.map((item) => (

          <option
            key={item}
            value={item}
          >
            {item}
          </option>

        ))

      )}

    </select>

  );

}