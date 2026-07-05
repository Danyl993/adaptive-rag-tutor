"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  GraduationCap,
  FileText,
  Brain,
  CircleHelp,
} from "lucide-react";

export default function ModeSelector() {

  const router = useRouter();
  const pathname = usePathname();

  const modes = [
    {
      name: "Learn",
      href: "/learn",
      icon: BookOpen,
    },
    {
      name: "Exam",
      href: "/exam",
      icon: GraduationCap,
    },
    {
      name: "Revision",
      href: "/revision",
      icon: FileText,
    },
    {
      name: "MCQ",
      href: "/mcq",
      icon: Brain,
    },
    {
      name: "Q&A",
      href: "/qa",
      icon: CircleHelp,
    },
  ];

  return (

    <div className="flex flex-wrap gap-3">

      {modes.map((mode) => {

        const Icon = mode.icon;

        const active = pathname === mode.href;

        return (

          <button
            key={mode.href}
            onClick={() => router.push(mode.href)}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition-all ${
              active
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Icon size={18} />
            {mode.name}
          </button>

        );

      })}

    </div>

  );

}