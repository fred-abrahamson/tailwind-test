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
  Dot,
  Users,
  SquareArrowDown,
} from "lucide-react";

export const Sidebar = () => {
  const pathname = usePathname();

  const ICON_SIZE = 16;

  const orgNavItems = [
    {
      label: "Home",
      path: "/org-home",
      icon: <House size={ICON_SIZE} />,
    },
    {
      label: "Downloads",
      path: "/org-downloads",
      icon: <SquareArrowDown size={ICON_SIZE} />,
    },
    {
      label: "Members",
      path: "/org-members",
      icon: <Users size={ICON_SIZE} />,
    },
    {
      label: "Settings",
      path: "/org-settings",
      icon: <Cog size={ICON_SIZE} />,
    },
  ];

  const gameNavItems = [
    // Renamed from navItems for clarity
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
      label: "Products",
      path: "/products",
      icon: <ShoppingCart size={ICON_SIZE} />,
    },
    {
      label: "Release tracks",
      icon: <Rocket size={ICON_SIZE} />,
      children: [
        {
          label: "Production",
          path: "/production",
          icon: <Dot size={ICON_SIZE} className="text-green-500" />,
        },
        {
          label: "Open testing",
          path: "/open-testing",
          icon: <Dot size={ICON_SIZE} className="text-green-500" />,
        },
        {
          label: "Closed testing",
          path: "/closed-testing",
          icon: <Dot size={ICON_SIZE} className="text-green-500" />,
        },
      ],
    },
    {
      label: "Distribution",
      icon: <Globe size={ICON_SIZE} />,
      children: [
        {
          label: "Gamesite",
          path: "/gamesite",
          icon: <Dot size={ICON_SIZE} className="text-green-500" />,
        },
        {
          label: "Headless destination",
          path: "/custom-website",
          icon: <Dot size={ICON_SIZE} className="text-green-500" />,
        },
        {
          label: "Discord",
          path: "/discord",
          icon: <Dot size={ICON_SIZE} className="text-orange-500" />,
        },
        {
          label: "CrazyGames",
          path: "/crazygames",
          icon: <Dot size={ICON_SIZE} className="text-gray-500" />,
        },
        {
          label: "Xsolla Mall",
          path: "/xsolla",
          icon: <Dot size={ICON_SIZE} className="text-gray-500" />,
        },
        {
          label: "Yandex Games",
          path: "/yandex",
          icon: <Dot size={ICON_SIZE} className="text-gray-500" />,
        },
      ],
    },
    {
      label: "Analytics",
      path: "/analytics",
      icon: <ChartPie size={ICON_SIZE} />,
    },
    {
      label: "Crash log",
      path: "crash-log",
      icon: <ShieldAlert size={ICON_SIZE} />,
    },
    {
      label: "Finance reports",
      path: "/finance-reports",
      icon: <ReceiptText size={ICON_SIZE} />,
    },
    {
      label: "Capabilities",
      icon: <Layers size={ICON_SIZE} />,
      children: [
        {
          label: "Account linking",
          path: "/account-linking",
          icon: <Dot size={ICON_SIZE} className="text-green-500" />,
        },
        {
          label: "Rewarded ads",
          path: "/rewarded-ads",
          icon: <Dot size={ICON_SIZE} className="text-green-500" />,
        },
        {
          label: "Restrict regions",
          path: "/restricted-regions",
          icon: <Dot size={ICON_SIZE} className="text-green-500" />,
        },
        {
          label: "Player support",
          path: "/player-support",
          icon: <Dot size={ICON_SIZE} className="text-green-500" />,
        },
        {
          label: "Conversion API",
          path: "/conversion-api",
          icon: <Dot size={ICON_SIZE} className="text-gray-500" />,
        },
        {
          label: "Loading video",
          path: "/loading-video",
          icon: <Dot size={ICON_SIZE} className="text-green-500" />,
        },
        {
          label: "Customize control bar",
          path: "/control-bar",
          icon: <Dot size={ICON_SIZE} className="text-gray-500" />,
        },
        {
          label: "Display controls",
          path: "/game-controls",
          icon: <Dot size={ICON_SIZE} className="text-gray-500" />,
        },
      ],
    },
    { label: "Settings", path: "/settings", icon: <Cog size={ICON_SIZE} /> },
  ];

  // Determine which set of nav items to use
  const isOrgLevel = pathname.startsWith("/org");
  const currentNavItems = isOrgLevel ? orgNavItems : gameNavItems;

  return (
    <div className="fixed flex h-[100vh] w-[320px] flex-col pt-16">
      <div
        className="flex h-full flex-col overflow-y-scroll px-4 py-6"
        style={{ scrollbarWidth: "none" }}
      >
        {currentNavItems.map((item) => {
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
                <span
                  className={
                    item.path === pathname ? "opacity-80" : "opacity-40"
                  }
                >
                  {item.icon}
                </span>
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
                    {/* @ts-expect-error it's just a prototype */}
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
                          <span>{child.icon}</span>
                          <span className="w-full">{child.label}</span>
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
