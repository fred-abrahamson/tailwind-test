"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Builds", path: "/builds" },
    { label: "Releases", path: "/releases" },
    { label: "Logs", path: "/logs" },
    { label: "Analytics", path: "/analytics" },
    { label: "Capabilities", path: "/capabilities" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-[400px] p-8 h-[100vh] flex flex-col fixed">
      <div className="flex flex-col gap-2 h-full">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.path}
            className={cn(
              "px-4 py-2 rounded-md font-medium",
              item.path === pathname && "bg-muted"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="rounded-lg w-full shadow-lg py-5 px-6 bg-card border border-white/10">
        <div className="font-semibold mb-1">Some card</div>
        <p className="text-sm opacity-50">Some text.</p>
      </div>
    </div>
  );
}
