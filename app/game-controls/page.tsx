"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, ArrowUp } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function GameControls() {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);

  return (
    <div className="flex h-full flex-col-reverse lg:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
        <div>
          <div className="mb-4 text-sm opacity-50">Capabilities</div>
          <h1 className="mb-2 text-xl font-semibold">Game controls</h1>
          <p className="mb-6 text-sm leading-6 opacity-80">
            Allow your players to fully leverage the web playing experience. Add
            your game's keyboard control scheme and they will be displayed in
            the web playable.
          </p>
          <div className="flex justify-between gap-2">
            <Input
              placeholder="Add key..."
              onChange={() => setHasChanges(true)}
            />
            <Input
              placeholder="Add instruction..."
              onChange={() => setHasChanges(true)}
            />
            <Button disabled={!hasChanges}>Add control</Button>
          </div>
        </div>
        <section>
          <ul className="border-t">
            <li className="flex items-center justify-between border-b py-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold">
                  SPACE
                </div>
                Jump
              </div>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center justify-between border-b py-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold">
                    WASD
                  </div>
                </div>
                Move
              </div>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center justify-between border-b py-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold">
                    Arrows
                  </div>
                </div>
                Move
              </div>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center justify-between border-b py-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold">
                  ESC
                </div>
                Back / Close
              </div>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center justify-between border-b py-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold">
                  P
                </div>
                Pause
              </div>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center justify-between border-b py-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold">
                  ENTER
                </div>
                Special
              </div>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
          </ul>
          {hasChanges && (
            <div className="mt-8 flex items-center justify-start gap-4">
              <Button>Save changes</Button>
              <span className="text-sm opacity-50">
                Changes will instantly be live in the playable.
              </span>
            </div>
          )}
        </section>
      </div>
      <div className="lg:max-h-auto relative flex h-full max-h-[320px] w-full justify-center overflow-hidden bg-muted p-16 lg:max-h-none lg:items-center">
        <div className="relative z-10 h-[80%] max-h-[480px] min-h-[480px] w-[80%] max-w-[640px] rounded-xl bg-[#111] p-12 shadow-lg">
          UI Shot
        </div>
        <Image
          src="/restricted-regions.webp"
          height="0"
          width="0"
          alt="Account linking"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
