"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { UIShot } from "./ui-shot";

export default function RewardedAds() {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);

  return (
    <div className="flex h-full flex-col-reverse lg:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12 lg:border-r">
        <div>
          <div className="mb-4 text-sm opacity-70">Capabilities</div>
          <h1 className="mb-2 text-xl font-semibold">Rewarded ads</h1>
          <p className="mb-5 text-sm leading-6 opacity-80">
            Keep your players coming back for more by serving ads in exchange
            for valuable in-game rewards.
          </p>
          <Button variant="secondary">Documentation</Button>
        </div>
        <Separator />
        <section className="py-4">
          <h3 className="mb-2 font-semibold">Get started</h3>
          <p className="mb-4 text-sm opacity-70">
            When enabling this feature the Playable will load the Google Adsense
            script and ask the player for the necessary consent.
          </p>
          <div className="flex items-center gap-3 text-sm font-medium">
            <Checkbox onCheckedChange={() => setHasChanges(true)} />
            Load Ad script in playable
          </div>
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
      <div className="top-16 h-full max-h-[100vh] w-full p-4 lg:sticky lg:max-h-[320px]">
        <div className="relative flex h-[calc(100vh_-_95px)] w-full justify-center overflow-hidden rounded-lg lg:items-center">
          <div className="relative z-10">
            <UIShot />
          </div>
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
    </div>
  );
}
