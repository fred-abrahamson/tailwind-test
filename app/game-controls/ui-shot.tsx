import { Gamepad } from "lucide-react";

export const ControlsUiShot = () => {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex h-auto w-auto min-w-[320px] flex-col justify-center gap-4 rounded-xl bg-[#111] px-3 py-4 shadow-xl">
        <div className="flex items-center justify-between gap-3 px-2 text-sm">
          Move
          <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold uppercase">
            WASD
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 px-2 text-sm">
          Jump
          <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold uppercase">
            Space
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 px-2 text-sm">
          Move
          <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold uppercase">
            Arrows
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 px-2 text-sm">
          Back / Close
          <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold uppercase">
            Esc
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 px-2 text-sm">
          Special
          <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold uppercase">
            Enter
          </div>
        </div>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111] text-white shadow-xl">
        <Gamepad size={22} className="opacity-80" />
      </div>
    </div>
  );
};

/*

    <div className="h-auto w-auto max-w-[400px]">
      <div className="flex flex-col items-center gap-1">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-foreground/30 text-xl font-medium backdrop-blur-lg">
          W
        </div>
        <div className="flex gap-1">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-foreground/30 text-xl font-medium backdrop-blur-lg">
            A
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-foreground/30 text-xl font-medium backdrop-blur-lg">
            S
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-foreground/30 text-xl font-medium backdrop-blur-lg">
            D
          </div>
        </div>
      </div>
    </div>

    */
