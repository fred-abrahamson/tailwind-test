import {
  ChevronLeft,
  Maximize,
  Volume2,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const ControlBarShot = () => {
  return (
    <div className="z-10 flex h-full max-h-[480px] w-full items-end justify-end overflow-hidden rounded-lg bg-muted shadow-lg">
      <div className="flex w-full justify-between bg-[#111] p-4 shadow-lg">
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
