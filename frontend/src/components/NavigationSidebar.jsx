"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationSidebar() {

  const pathname = usePathname();

  const links = [
    { name: "Learn", href: "/learn" },
    { name: "Exam", href: "/exam" },
    { name: "Revision", href: "/revision" },
    { name: "MCQ", href: "/mcq" },
    { name: "Q&A", href: "/qa" },
  ];

  return (

    <div className="flex flex-col gap-3">

      {links.map((link) => (

        <Link
          key={link.href}
          href={link.href}
          className={`rounded-lg px-4 py-3 transition-colors duration-200 ${
            pathname === link.href
              ? "bg-blue-600 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          {link.name}
        </Link>

      ))}

    </div>

  );

}