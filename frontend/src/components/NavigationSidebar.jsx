"use client";

import Link from "next/link";
import {
  MessageSquare,
  NotebookPen,
  BarChart3,
  Target,
  FolderOpen,
} from "lucide-react";

export default function NavigationSidebar() {

  const items = [
    {
      name: "Recent Chats",
      description: "Continue previous conversations",
      icon: MessageSquare,
      link: "/history",
    },
    {
      name: "Saved Notes",
      description: "Quick revision material",
      icon: NotebookPen,
      link: "/revision",
    },
    {
      name: "Study Progress",
      description: "Track your learning",
      icon: BarChart3,
      link: "/progress",
    },
    {
      name: "Weak Topics",
      description: "Focus on difficult concepts",
      icon: Target,
      link: "/weak-topics",
    },
   {
      name: "Uploaded Files",
      description: "Manage study resources",
      icon: FolderOpen,
      link: "/files",
    },
  ];
  return (
    <aside className="flex-1 w-full rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-4 shadow-xl">

      <h2 className="mb-6 text-xl font-bold">
        Study Tools
      </h2>

      <div className="flex flex-col gap-2">

        {items.map((item) => {

          const content = (
            <>
            <div className="flex items-start gap-3">
              <item.icon className="h-5 w-5" />

              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            </div>
            </>
          );

          return item.link ? (
            <Link
              key={item.name}
              href={item.link}
              className="..."
            >
              {content}
            </Link>
          ) : (
            <button
              key={item.name}
              className="..."
            >
              {content}
            </button>
          );

        })}

      </div>

    </aside>
  );
}