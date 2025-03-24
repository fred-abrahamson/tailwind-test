"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import BuildDropdown from "@/components/build-dropdown";

import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

export default function Production() {
  const [checked, setChecked] = React.useState<boolean>(false);

  const builds = [
    {
      id: "100",
      message: "1.11.3-881-production",
      processed: false,
    },
    {
      id: "99",
      message: "1.11.3-881-production",
      processed: true,
    },
  ];

  return (
    <div>
      <div>
        <div className="mb-4 text-sm opacity-50">Capabilities</div>
        <h1 className="mb-2 text-xl font-semibold">Player support</h1>
        <p className="mb-6 text-sm leading-6 opacity-80">
          Prevent players from certain countries or regions from accessing your
          game. This affects distrubutions destinations like this.
        </p>
        <div className="flex gap-2">
          <Button variant="secondary">Copy URL</Button>
          <Button variant="secondary">Copy URL</Button>
        </div>
      </div>
      <Separator />
      <div className="flex h-full flex-col-reverse xl:flex-row">
        <div className="flex h-full w-full flex-col gap-6 p-12">
          <section className="max-w-[980px] py-4">
            <h3 className="mb-2 font-semibold">Release build</h3>
            <p className="mb-4 text-sm opacity-50">
              Enable Maintenance mode to temporarily disable the game for
              players in this release track. You may customize the message
              displayed on the maintenance screen.
            </p>
            <BuildDropdown list={builds} className="" />
          </section>
          <section className="max-w-[980px] py-4">
            <h3 className="mb-2 font-semibold">History</h3>
            <p className="mb-4 text-sm opacity-50">
              Previously published builds on this track.
            </p>
            <ul className="mb-4">
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
            </ul>
            <Button variant="secondary">View more</Button>
          </section>
          {checked && (
            <div className="mt-8 flex flex-col gap-4">
              <Input placeholder="Placeholder..." className="max-w-none" />
              <Textarea placeholder="Placeholder..." className="max-w-none" />
              <div className="mt-4 flex items-center justify-start gap-4">
                <Button>Save changes</Button>
                <span className="text-sm opacity-50">
                  Changes will instantly be live in the playable.
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="relative flex h-full max-w-96 overflow-hidden p-8">
          <section className="max-w-[980px] py-4">
            <h3 className="mb-2 font-semibold">Maintenance mode</h3>
            <p className="mb-4 text-sm opacity-50">
              Enable Maintenance mode to temporarily disable the game for
              players in this release track. You may customize the message
              displayed on the maintenance screen.
            </p>
            <div className="flex items-center gap-3 text-sm font-medium">
              <Checkbox
                onCheckedChange={() => {
                  setChecked(!checked);
                }}
              />
              Enable maintenance mode
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
