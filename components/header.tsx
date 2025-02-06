import Dropdown from "@/components/dropdown";
import { ChevronLeft, CircleHelp, ScrollText, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const games = [
  {
    id: "1",
    name: "Autogun Heroes",
    icon: "https://cdn.prod.website-files.com/6654610133720f7ba4c85bef/6704f7b2325229f9626e2daa_autogun-webclip.png",
  },
  {
    id: "2",
    name: "Big Rig Racing",
    icon: "https://cdn.prod.website-files.com/660c043520241fca576d87fa/660c070c372df734557c6a1d_game-logo.webp",
  },
];

const orgs = [
  {
    id: "1",
    name: "Nitro Games",
    icon: "https://cdn.prod.website-files.com/6654610133720f7ba4c85bef/6704f7b2325229f9626e2daa_autogun-webclip.png",
  },
  {
    id: "2",
    name: "Enixan",
  },
  {
    id: "3",
    name: "Tilting Point",
    icon: "https://cdn.prod.website-files.com/660c043520241fca576d87fa/660c070c372df734557c6a1d_game-logo.webp",
  },
  {
    id: "4",
    name: "Mobirate",
    icon: "https://cdn.prod.website-files.com/660c043520241fca576d87fa/660c070c372df734557c6a1d_game-logo.webp",
  },
  {
    id: "5",
    name: "Savy Soda",
    icon: "https://cdn.prod.website-files.com/660c043520241fca576d87fa/660c070c372df734557c6a1d_game-logo.webp",
  },
  {
    id: "6",
    name: "Pixel Federation",
    icon: "https://cdn.prod.website-files.com/660c043520241fca576d87fa/660c070c372df734557c6a1d_game-logo.webp",
  },
];

export const Header = () => {
  return (
    <div className="text-sn fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-background px-8">
      <div className="w-full">
        <div className="max-w-content inline-flex items-center gap-2">
          <Button size="icon" variant="secondary" className="h-8 w-8">
            <ChevronLeft size={18} />
          </Button>
          <Dropdown
            list={orgs}
            selected={"1"}
            showArrow={false}
            className="h-9 px-3 pr-4"
          />
        </div>
      </div>
      <div className="w-full text-center">
        <Dropdown
          list={games}
          selected={"1"}
          showArrow={false}
          className="h-9 px-3 pr-4"
          align="center"
        />
      </div>
      <div className="w-full text-right">
        <div className="max-w-content inline-flex items-center gap-6">
          <div className="flex gap-2 border-r px-4">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <CircleHelp size={24} />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Wrench size={24} />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <ScrollText size={24} />
            </Button>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 bg-orange-900 text-xs"
          >
            FA
          </Button>
        </div>
      </div>
    </div>
  );
};
