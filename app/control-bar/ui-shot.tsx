import {
  ChevronLeft,
  Maximize,
  Volume2,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { type Position, type Color } from "./page";
import { cn } from "@/lib/utils";

type Props = {
  position: Position;
  color: Color;
};

export const ControlBarShot = ({ position, color }: Props) => {
  return (
    <div
      className={cn(
        "z-10 flex h-full max-h-[480px] w-full overflow-hidden rounded-lg bg-muted shadow-lg",
        position === "bottom" && "items-end",
        position === "top" && "items-start",
      )}
    >
      <div
        className={cn(
          "flex w-full justify-between p-4",
          `bg-[${color}]`,
          position === "hidden" && "hidden",
          position === "bottom" && "border-t",
          position === "top" && "border-b",
        )}
      >
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft />
          </Button>
          <Separator orientation="vertical" />
          <div className="flex gap-2">
            <Button>Sign up</Button>
            <Button variant="secondary">Log in</Button>
          </div>
        </div>
        <div className="flex items-center gap-6 pr-4">
          <HelpCircle size={18} />
          <Settings size={18} />
          <Volume2 size={18} />
          <Maximize size={18} />
        </div>
      </div>
    </div>
  );
};
