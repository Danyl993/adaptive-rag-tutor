"use client";

export default function SubjectSelector({
  subjects,
  subject,
  setSubject,
}) {

  return (

    <select
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-lg font-medium text-white focus:border-blue-500 focus:outline-none"
    >

      {subjects.length === 0 ? (

        <option value="">
          No Subjects
        </option>

      ) : (

        subjects.map((item, index) => (

          <option
            key={index}
            value={item.name}
          >
            {item.name}
          </option>

        ))

      )}

    </select>

  );

}