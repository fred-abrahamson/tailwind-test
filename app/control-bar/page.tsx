"use client";
import * as React from "react";
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

export default function ControlBar() {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);

  return (
    <div className="flex h-full flex-col-reverse lg:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
        <div>
          <div className="mb-4 text-sm opacity-50">Capabilities</div>
          <h1 className="mb-2 text-xl font-semibold">Customize control bar</h1>
          <p className="mb-6 text-sm leading-6 opacity-80">
            {`Customize the Playable's control bar.`}
          </p>
        </div>
        <Separator />
        <section className="py-4">
          <h3 className="mb-2 font-semibold">Position</h3>
          <p className="mb-4 text-sm opacity-50">
            Choose where the control bar should be placed.
          </p>
          <Select defaultValue={"bottom"}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bottom">Bottom</SelectItem>
              <SelectItem value="top">Top</SelectItem>
              <SelectItem value="hidden">Hidden</SelectItem>
            </SelectContent>
          </Select>
        </section>
        <section className="py-4">
          <h3 className="mb-2 font-semibold">Home page URL</h3>
          <p className="mb-4 text-sm opacity-50">
            Add a back button to the control bar to allow users to navigate from
            the Playable back to a page on your website.
          </p>
          <Input
            className="max-w-none"
            placeholder="Enter URL..."
            onChange={() => setHasChanges(true)}
          />
        </section>
        <section className="py-4">
          <h3 className="mb-2 font-semibold">Background color</h3>
          <p className="mb-4 text-sm opacity-50">
            Set a background color for the control bar to match your game.
          </p>
          <Select defaultValue={"black"}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="black">Black</SelectItem>
              <SelectItem value="green">Dark green</SelectItem>
              <SelectItem value="blue">Dark blue</SelectItem>
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
      <div className="relative flex h-full w-full justify-center overflow-hidden bg-muted p-8 lg:max-h-none lg:items-center">
        <ControlBarShot />
        <Image
          src="/rewarded-ads.webp"
          height="0"
          width="0"
          alt="Account linking"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
