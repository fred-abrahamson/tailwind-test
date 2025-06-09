"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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
            Distribution
          </div>
          <h1 className="mb-2 text-xl font-semibold">Discord</h1>
          <p className="mb-5 text-sm leading-6 opacity-80">
            Allow your game to be run as a Discord activity. This feature needs
            to be manually enabled by the Pley team. Request access and our
            support team will reach out.
          </p>
          <div className="flex gap-2">
            <Button
              variant={hasAccess ? "secondary" : "default"}
              onClick={() => setHasAccess(!hasAccess)}
              disabled={hasAccess}
            >
              {hasAccess ? "Pending request" : "Request access"}
            </Button>
            <Button variant="secondary">Documentation</Button>
          </div>
          {hasAccess && (
            <div className="mt-6 flex items-center gap-2 border-t pt-6 text-sm font-normal">
              <Info className="text-blue-400" size={18} /> We are currently
              reviewing your access request.
            </div>
          )}
        </div>
        <Separator />
        <section className={cn("w-full py-4", !hasAccess && "opacity-60")}>
          <h3 className="mb-2 font-semibold">Client ID / Application ID</h3>
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
          <h3 className="mb-2 font-semibold">Public key</h3>
          <p className="mb-4 text-sm opacity-70">
            Enter the application's public key (also from the Discord Developer
            Portal). This allows us to validate discord communication about your
            game.
          </p>
          <Input
            placeholder="Placeholder..."
            className="max-w-none"
            onChange={() => setHasChanges(true)}
            disabled={!hasAccess}
          />
        </section>
        <section className={cn("w-full py-4", !hasAccess && "opacity-60")}>
          <h3 className="mb-2 font-semibold">Client secret</h3>
          <p className="mb-4 text-sm opacity-70">
            Enter the Client Secret from the Discord Developer Portal. Keep this
            secure to protect your application.
          </p>
          <Input
            placeholder="Placeholder..."
            className="max-w-none"
            onChange={() => setHasChanges(true)}
            disabled={!hasAccess}
          />
        </section>
        <section className={cn("w-full py-4", !hasAccess && "opacity-60")}>
          <h3 className="mb-2 font-semibold">Bot token</h3>
          <p className="mb-2 text-sm opacity-70">
            {`To connect your Discord bot to our platform, paste your bot token
            below. You can find it in the Discords Developer Portal under your
            app's Bot settings. Note that resetting your bot token will break
            existing integrations.`}
          </p>
          <p className="mb-4 text-sm opacity-70">
            Enter the Bot Token generated in the Discord Developer Portal. Keep
            this token secure to maintain bot functionality and account safety.
          </p>
          <Input
            placeholder="Placeholder..."
            className="max-w-none"
            onChange={() => setHasChanges(true)}
            disabled={!hasAccess}
          />
        </section>
        <section className={cn("w-full py-4", !hasAccess && "opacity-60")}>
          <h3 className="mb-2 font-semibold">URL mappings</h3>
          <p className="mb-4 text-sm opacity-70">
            {`Match your URL mappings here to those specified in Discord's
            Developer Portal to ensure seamless integration. Refer to Discord’s
            URL Mapping Guide for details.`}
          </p>
          <div className="flex justify-between gap-2">
            <Input placeholder="Prefix..." disabled={!hasAccess} />
            <Input placeholder="Target..." disabled={!hasAccess} />
            <Button variant="secondary">Add mapping</Button>
          </div>
          <ul className="my-4 w-full border-t">
            {MAPPINGS.map((mapping, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b border-border py-4"
              >
                <div className="flex flex-col gap-1.5 text-sm font-medium">
                  {mapping.prefix}
                  <span className="text-xs font-normal opacity-70">
                    {mapping.target}
                  </span>
                </div>

                <Button size="icon" variant="ghost">
                  <X size={16} />
                </Button>
              </li>
            ))}
          </ul>
          {hasChanges && (
            <div className="mt-8 flex justify-start gap-2">
              <Button>Save changes</Button>
            </div>
          )}
        </section>
      </div>
      <div className="top-16 h-full max-h-[320px] w-full border-b border-l-0 p-4 lg:sticky lg:max-h-[100vh] lg:border-b-0 lg:border-l">
        <div className="flex h-full w-full justify-center overflow-hidden rounded-lg bg-[#7A7DF0] lg:h-[calc(100vh_-_95px)] lg:items-center">
          <Image
            src="/discord.jpg"
            width={0}
            height={0}
            className="relative z-10 h-auto w-full"
            alt="Discord"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
