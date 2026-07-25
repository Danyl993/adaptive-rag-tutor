"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LargeModeSelector() {

  const router = useRouter();
  const pathname = usePathname();

  const modes = [
    { name: "Learn", href: "/learn" },
    { name: "Exam", href: "/exam" },
    { name: "Revision", href: "/revision" },
    { name: "MCQ", href: "/mcq" },
    { name: "Q&A", href: "/qa" },
  ];

  return (
    <div className="mb-10 flex flex-wrap gap-8">

      {modes.map((mode) => {

        const active = pathname === mode.href;

        return (

          <button
            key={mode.href}
            onClick={() => {
              if (active) {
                window.location.reload();
              } else {
                router.push(mode.href);
              }
            }}
            className={`rounded-xl px-7 py-3 text-lg font-semibold transition ${
              active
                ? "border border-green-500 bg-green-600/20 text-green-300"
                : "border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {mode.name}
          </button>

        );

      })}

    </div>
  );

}