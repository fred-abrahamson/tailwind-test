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
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

export default function Production() {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div className="flex h-full flex-col-reverse lg:flex-row">
      <div className="flex h-full w-full flex-col gap-6 p-12">
        <div>
          <div className="mb-4 text-sm opacity-50">Release track</div>
          <h1 className="mb-2 text-xl font-semibold">Production</h1>
          <p className="mb-6 text-sm leading-6 opacity-80">
            Publish builds, view history and configure Playable settings.
          </p>
          <div className="flex gap-2">
            <Button>Release build</Button>
            <Button variant="secondary">Copy URL</Button>
          </div>
        </div>
        <Separator />
        <section className="py-4">
          <h3 className="mb-2 font-semibold">Maintenance mode</h3>
          <p className="mb-4 text-sm opacity-50">
            Enable Maintenance mode to temporarily disable the game for players
            in this release track. You may customize the message displayed on
            the maintenance screen.
          </p>
          <div className="flex items-center gap-3 text-sm font-medium">
            <Checkbox
              onCheckedChange={() => {
                setChecked(!checked);
              }}
            />
            Enable maintenance mode
          </div>
          {checked && (
            <div className="mt-8 flex flex-col gap-4">
              <Input
                placeholder="Placeholder..."
                className="max-w-none"
                onChange={() => setHasChanges(true)}
              />
              <Textarea
                placeholder="Placeholder..."
                className="max-w-none"
                onChange={() => setHasChanges(true)}
              />
              <div className="mt-4 flex items-center justify-start gap-4">
                <Button>Save changes</Button>
                <span className="text-sm opacity-50">
                  Changes will instantly be live in the playable.
                </span>
              </div>
            </div>
          )}
        </section>
        <Separator />
        <section className="py-4">
          <h3 className="mb-2 font-semibold">History</h3>
          <p className="mb-4 text-sm opacity-50">
            Previously published builds on this track.
          </p>
          <ul>
            <li className="flex items-center justify-between border-t border-border py-4">
              <div className="flex flex-col gap-1.5 text-sm font-medium">
                1.11.3-881-production
                <div className="flex gap-1.5 text-xs font-normal opacity-70">
                  <span>Build #200</span>
                  <span>·</span>
                  <span>4 days ago by Will_Pley</span>
                </div>
              </div>
              <div className="flex-shrink-0 text-xs font-semibold text-green-400">
                Live
              </div>
            </li>
            <li className="flex items-center justify-between border-t border-border py-4">
              <div className="flex flex-col gap-1.5 text-sm font-medium">
                1.11.3-881-production
                <div className="flex gap-1.5 text-xs font-normal opacity-70">
                  <span>Build #200</span>
                  <span>·</span>
                  <span>4 days ago by Will_Pley</span>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between border-t border-border py-4">
              <div className="flex flex-col gap-1.5 text-sm font-medium">
                1.11.3-881-production
                <div className="flex gap-1.5 text-xs font-normal opacity-70">
                  <span>Build #200</span>
                  <span>·</span>
                  <span>4 days ago by Will_Pley</span>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between border-t border-border py-4">
              <div className="flex flex-col gap-1.5 text-sm font-medium">
                1.11.3-881-production
                <div className="flex gap-1.5 text-xs font-normal opacity-70">
                  <span>Build #200</span>
                  <span>·</span>
                  <span>4 days ago by Will_Pley</span>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between border-t border-border py-4">
              <div className="flex flex-col gap-1.5 text-sm font-medium">
                1.11.3-881-production
                <div className="flex gap-1.5 text-xs font-normal opacity-70">
                  <span>Build #200</span>
                  <span>·</span>
                  <span>4 days ago by Will_Pley</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div className="relative flex h-full w-full max-w-xl justify-center overflow-hidden bg-muted p-16 lg:max-h-none lg:items-center"></div>
    </div>
  );
}
