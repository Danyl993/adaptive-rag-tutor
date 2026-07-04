"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  GraduationCap,
  FileText,
  CircleHelp,
  Brain,
} from "lucide-react";

export default function NavigationSidebar() {

  const pathname = usePathname();

  const links = [
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

    <aside className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-4 shadow-xl">

      <h2 className="mb-6 text-xl font-bold">
        Navigation
      </h2>

      <div className="flex flex-col gap-2">

        {links.map((link) => {

          const Icon = link.icon;

          const active = pathname === link.href;

          return (

            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >

              <Icon size={20} />

              <span>
                {link.name}
              </span>

            </Link>

          );

        })}

      </div>

    </aside>

  );

}