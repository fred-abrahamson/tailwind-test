"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const MAPPINGS = [
  {
    prefix: "/autogunassets",
    target: "autogun-prod-assets-ipv6.p1.autogunheroestech.com",
  },
  { prefix: "/googleanalytics", target: "region1.google-analytics.com" },
  { prefix: "/firebasewebconfig", target: "firebase.googleapis.com" },
  { prefix: "/sentry", target: "o1064059.ingest.sentry.io" },
  { prefix: "/airbridge", target: "core.airbridge.io" },
  {
    prefix: "/gameserver",
    target: "autogun-prod.p1.autogunheroestech.com:9380",
  },
  { prefix: "/airbridgesdk", target: "sdk.airbridge.io" },
  { prefix: "/firebaseauth", target: "firebaseinstallations.googleapis.com" },
];

export default function PlayerSupport() {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);
  const [hasAccess, setHasAccess] = React.useState<boolean>(true);

  return (
    <div className="flex h-full flex-col-reverse lg:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-medium opacity-70">
            Capabilities
          </div>
          <h1 className="mb-2 text-xl font-semibold">Conversion API</h1>
          <p className="mb-5 text-sm leading-6 opacity-80">
            Create a connection between your website to Meta systems to optimize
            ad targeting, decrease cost per result and measure outcomes.
          </p>
        </div>
        <Separator />
        <section className={cn("w-full py-4", !hasAccess && "opacity-60")}>
          <h3 className="mb-2 font-semibold">Secret / Pixel</h3>
          <p className="mb-4 text-sm opacity-70">
            Enter the Client ID (sometimes called Application ID) from the
            Discord Developer Portal. This identifies your application within
            Discord.
          </p>
          <Input
            placeholder="Placeholder..."
            className="max-w-none"
            onChange={() => setHasChanges(true)}
            disabled={!hasAccess}
          />
        </section>
        <section className={cn("w-full py-4", !hasAccess && "opacity-60")}>
          <h3 className="mb-2 font-semibold">Access token</h3>
          <p className="mb-4 text-sm opacity-70">
            Enter the application's public key (also from the Discord Developer
            Portal). This allows us to validate discord communication about your
            game.
          </p>

          <Textarea
            placeholder="Placeholder..."
            className="min-h-48 max-w-none"
            onChange={() => setHasChanges(true)}
          />
          {hasChanges && (
            <div className="mt-8 flex justify-start gap-2">
              <Button>Save changes</Button>
            </div>
          )}
        </section>
      </div>
      <div className="top-16 h-full max-h-[320px] w-full border-b border-l-0 p-4 lg:sticky lg:max-h-[100vh] lg:border-b-0 lg:border-l">
        <div className="flex h-full w-full justify-center overflow-hidden rounded-lg bg-[#1877F2] lg:h-[calc(100vh_-_95px)] lg:items-center">
          Facebook Ads
        </div>
      </div>
    </div>
  );
}
