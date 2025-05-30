"use client";
import * as React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function GameResolution() {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);

  return (
    <div className="flex h-full flex-col-reverse lg:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
        <div>
          <div className="mb-4 text-sm opacity-70">Capabilities</div>
          <h1 className="mb-2 text-xl font-semibold">Game resolution</h1>
          <p className="mb-5 text-sm leading-6 opacity-80">
            Optional feature description.
          </p>
          <Button variant="secondary">Documentation</Button>
        </div>
        <Separator />
        <section className="py-4">
          <div className="flex items-center gap-3 text-sm font-medium">
            <Checkbox onCheckedChange={() => setHasChanges(true)} />
            Enable feature
          </div>
          <p className="mt-4 text-sm opacity-50">
            How are changes affecting the game, what needs to be done by the
            developers in the game or on the website.
          </p>
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
      <div className="relative flex h-full w-full justify-center overflow-hidden bg-muted p-16 lg:max-h-none lg:items-center">
        <div className="relative z-10 h-[80%] max-h-[480px] min-h-[480px] w-[80%] max-w-[640px] rounded-xl bg-[#111] p-12 shadow-lg">
          UI Shot
        </div>
        <Image
          src="/rewarded-ads.webp"
          height="0"
          width="0"
          unoptimized
          alt="Account linking"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
