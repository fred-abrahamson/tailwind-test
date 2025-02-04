"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Rocket,
  House,
  Box,
  ShoppingCart,
  ChartPie,
  Blocks,
  ReceiptText,
  Cog,
  LayoutGrid,
  ShieldAlert,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const ICON_SIZE = 16;

  const navItems = [
    {
      label: "Home",
      path: "/",
      icon: <House size={ICON_SIZE} />,
    },
    {
      label: "Builds",
      path: "/builds",
      icon: <Box size={ICON_SIZE} />,
    },
    {
      label: "Release tracks",
      icon: <Rocket size={ICON_SIZE} />,
      children: [
        { label: "Production", path: "/production" },
        { label: "Open testing", path: "/open-testing" },
        { label: "Closed testing", path: "/closed-testing" },
      ],
    },
    {
      label: "Distribution",
      icon: <LayoutGrid size={ICON_SIZE} />,
      children: [
        { label: "Websites", path: "/websites" },
        { label: "Discord", path: "/discord" },
        { label: "CrazyGames", path: "/crazygames" },
        { label: "Xsolla Mall", path: "/xsolla" },
      ],
    },
    {
      label: "Products",
      path: "/products",
      icon: <ShoppingCart size={ICON_SIZE} />,
    },
    {
      label: "Capabilities",
      icon: <Blocks size={ICON_SIZE} />,
      children: [
        { label: "Account linking", path: "/account-linking" },
        { label: "Rewarded ads", path: "/rewarded-ads" },
        { label: "Restricted regions", path: "/restricted-regions" },
        { label: "Player support", path: "/player-support" },
        { label: "Custom authentication", path: "/custom-authentication" },
        { label: "Game controls", path: "/game-controls" },
      ],
    },
    {
      label: "Analytics",
      path: "/analytics",
      icon: <ChartPie size={ICON_SIZE} />,
    },
    {
      label: "Finance reports",
      path: "/finance-reports",
      icon: <ReceiptText size={ICON_SIZE} />,
    },
    {
      label: "Crash log",
      path: "crash-log",
      icon: <ShieldAlert size={ICON_SIZE} />,
    },
    { label: "Settings", path: "/settings", icon: <Cog size={ICON_SIZE} /> },
  ];

  return (
    <div className="w-[320px] h-[100vh] flex flex-col fixed pt-16">
      <div className="flex flex-col py-6 px-4 h-full">
        {navItems.map((item) => {
          if (item.path) {
            return (
              <Link
                href={item.path}
                key={item.path}
                className={cn(
                  "px-4 py-3 rounded-md font-medium text-sm flex items-center gap-4",
                  item.path === pathname && "bg-muted"
                )}
              >
                <span className="opacity-40">{item.icon}</span>
                {item.label}
              </Link>
            );
          } else {
            return (
              <Accordion
                key={item.label}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={item.label} className="border-0">
                  <AccordionTrigger className="border-0 px-4 py-3 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <span className="opacity-40">{item.icon}</span>
                      {item.label}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col">
                    {item.children?.map((child) => {
                      return (
                        <Link
                          href={child.path}
                          key={child.path}
                          className={cn(
                            "px-4 py-3 rounded-md text-sm flex items-center gap-4",
                            child.path === pathname && "bg-muted"
                          )}
                        >
                          <span className="opacity-0">{item.icon}</span>
                          {child.label}
                        </Link>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          }
        })}
      </div>
      <div className="p-4 border-t">
        <div className="rounded-lg w-full shadow-lg py-5 px-6 bg-card border border-white/10">
          <div className="font-semibold mb-1">Some card</div>
          <p className="text-sm opacity-50">Some text.</p>
        </div>
      </div>
    </div>
  );
}
