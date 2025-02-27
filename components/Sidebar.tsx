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
  Layers,
  ReceiptText,
  Cog,
  Globe,
  ShieldAlert,
} from "lucide-react";

export const Sidebar = () => {
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
    {
      label: "Distribution",
      icon: <Globe size={ICON_SIZE} />,
      children: [
        { label: "Gamesite", path: "/gamesite" },
        { label: "Custom website", path: "/websites" },
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
      icon: <Layers size={ICON_SIZE} />,
      children: [
        { label: "Account linking", path: "/account-linking" },
        { label: "Rewarded ads", path: "/rewarded-ads" },
        { label: "Restrict regions", path: "/restricted-regions" },
        { label: "Player support", path: "/player-support" },
        { label: "Game resolution", path: "/game-resolution" },
        { label: "Customize control bar", path: "/control-bar" },
        { label: "Display controls", path: "/game-controls" },
        { label: "Website authentication", path: "/custom-authentication" },
      ],
    },
    { label: "Settings", path: "/settings", icon: <Cog size={ICON_SIZE} /> },
  ];

  return (
    <div className="fixed flex h-[100vh] w-[320px] flex-col pt-16">
      <div
        className="flex h-full flex-col overflow-y-scroll px-4 py-6"
        style={{ scrollbarWidth: "none" }}
      >
        {navItems.map((item) => {
          if (item.path) {
            return (
              <Link
                href={item.path}
                key={item.path}
                className={cn(
                  "flex items-center gap-4 rounded-md px-4 py-3 text-sm font-medium",
                  item.path === pathname && "bg-muted",
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
                            "flex items-center gap-4 rounded-md px-4 py-3 text-sm",
                            child.path === pathname && "bg-muted",
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
      <div className="flex items-center justify-center border-t p-6">
        Announments
      </div>
    </div>
  );
};
