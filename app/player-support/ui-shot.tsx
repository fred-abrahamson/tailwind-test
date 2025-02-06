import { CircleHelp, ChevronRight } from "lucide-react";

export const PlayerSupportUIShot = () => {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex h-auto w-auto flex-col justify-center gap-2 rounded-xl bg-[#111] px-3 py-4 shadow-xl">
        <h4 className="px-4 py-2 text-sm font-semibold">Contact support</h4>
        <div className="flex min-w-[240px] items-center justify-between rounded-lg px-4 py-2 text-sm font-medium opacity-80">
          Login
          <ChevronRight size={14} />
        </div>
        <div className="flex min-w-[240px] items-center justify-between rounded-lg px-4 py-2 text-sm font-medium opacity-80">
          Payments
          <ChevronRight size={14} />
        </div>
        <div className="flex min-w-[240px] items-center justify-between rounded-lg bg-muted px-4 py-2 text-sm font-medium">
          Gameplay
          <ChevronRight size={14} />
        </div>
        <div className="flex min-w-[240px] items-center justify-between rounded-lg px-4 py-2 text-sm font-medium opacity-80">
          Other
          <ChevronRight size={14} />
        </div>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111] text-white shadow-xl">
        <CircleHelp size={20} className="opacity-80" />
      </div>
    </div>
  );
};
