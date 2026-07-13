"use client";

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
      icon: MessageSquare,
    },
    {
      name: "Saved Notes",
      icon: NotebookPen,
    },
    {
      name: "Study Progress",
      icon: BarChart3,
    },
    {
      name: "Weak Topics",
      icon: Target,
    },
    {
      name: "Uploaded Files",
      icon: FolderOpen,
    },
  ];

  return (
    <aside className="flex-1 w-full rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-4 shadow-xl">

      <h2 className="mb-6 text-xl font-bold">
        Study Tools
      </h2>

      <div className="flex flex-col gap-2">

        {items.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );

        })}

      </div>

    </aside>
  );
}