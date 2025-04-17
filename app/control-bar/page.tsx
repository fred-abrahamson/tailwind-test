"use client";
import { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ControlBarShot } from "./ui-shot";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type Position = "top" | "bottom" | "hidden";
export type Color = "#000000" | "#0b132b" | "#260701" | "#312244";

export default function ControlBar() {
  const [hasChanges, setHasChanges] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>("bottom");
  const [color, setColor] = useState<Color>("#000000");

  return (
    <div className="flex h-full flex-col-reverse xl:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
        <div>
          <div className="mb-4 text-sm opacity-70">Capabilities</div>
          <h1 className="mb-2 text-xl font-semibold">Customize control bar</h1>
          <p className="mb-6 text-sm leading-6 opacity-80">
            {`Customize the Playable's control bar.`}
          </p>
        </div>
        <Separator />
        <section className="py-4">
          <h3 className="mb-2 font-semibold">Position</h3>
          <p className="mb-4 text-sm opacity-70">
            Choose where the control bar should be placed.
          </p>
          <Select
            defaultValue={position}
            onValueChange={(e: Position) => setPosition(e)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bottom">Bottom</SelectItem>
              <SelectItem value="top">Top</SelectItem>
              <SelectItem value="hidden">Hidden</SelectItem>
            </SelectContent>
          </Select>
          {position === "hidden" && (
            <p className="mt-4 text-sm opacity-50">
              Build your own control bar using the{" "}
              <Link
                href="https://docs.pley.com/docs/integrate-playable"
                className="underline"
              >
                web SDK documentation
              </Link>
              .
            </p>
          )}
        </section>
        <section className={cn("py-4", position === "hidden" && "opacity-50")}>
          <h3 className="mb-2 font-semibold">Home page URL</h3>
          <p className="mb-4 text-sm opacity-70">
            Add a back button to the control bar to allow users to navigate from
            the Playable back to a page on your website.
          </p>
          <Input
            className="max-w-none"
            placeholder="Enter URL..."
            onChange={() => setHasChanges(true)}
            disabled={position === "hidden"}
          />
        </section>
        <section className={cn("py-4", position === "hidden" && "opacity-50")}>
          <h3 className="mb-2 font-semibold">Theme</h3>
          <p className="mb-4 text-sm opacity-70">
            Set a background color for the control bar to match your game.
          </p>
          <Select
            defaultValue={"#000000"}
            onValueChange={(e: Color) => setColor(e)}
            disabled={position === "hidden"}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="#000000">Alt 1</SelectItem>
              <SelectItem value="#0b132b">Alt 2</SelectItem>
              <SelectItem value="#260701">Alt 3</SelectItem>
              <SelectItem value="#312244">Alt 4</SelectItem>
            </SelectContent>
          </Select>
        </section>
        {hasChanges && (
          <div className="flex items-center justify-start gap-4 py-4">
            <Button>Save changes</Button>
            <span className="text-sm opacity-50">
              Changes will instantly be live in the playable.
            </span>
          </div>
        )}
      </div>
      <div className="relative flex h-full w-full justify-center overflow-hidden bg-muted p-8 xl:max-h-none xl:items-center">
        <ControlBarShot position={position} color={color} />
        <Image
          src="/rewarded-ads.webp"
          height="0"
          width="0"
          alt="Account linking"
          unoptimized
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
