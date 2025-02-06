"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function PlayerSupport() {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);
  const [hasAccess, setHasAccess] = React.useState<boolean>(false);

  return (
    <div className="flex h-full flex-col-reverse lg:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
        <div>
          <div className="mb-4 text-sm opacity-50">Distribution</div>
          <h1 className="mb-2 text-xl font-semibold">Discord</h1>
          <p className="mb-5 text-sm leading-6 opacity-80">
            Allow your game to be run as a Discord activiy. This feature needs
            to be manually enabled by the Pley team. Contact us to request
            access.
          </p>
          {hasAccess ? (
            <Button onClick={() => setHasAccess(false)} variant="secondary">
              Documentation
            </Button>
          ) : (
            <Button onClick={() => setHasAccess(true)}>Request access</Button>
          )}
        </div>
        <Separator />
        <section className={cn("w-full py-4", !hasAccess && "opacity-50")}>
          <h3 className="mb-2 font-semibold">Client ID / Application ID</h3>
          <p className="mb-4 text-sm opacity-50">
            Enter the Client ID (sometimes called Application ID) from the
            Discord Developer Portal. This identifies your application within
            Discord.
          </p>
          <Input
            placeholder="Placeholder..."
            className="max-w-none"
            onChange={() => setHasChanges(true)}
          />
        </section>
        <section className={cn("w-full py-4", !hasAccess && "opacity-50")}>
          <h3 className="mb-2 font-semibold">Client secret</h3>
          <p className="mb-4 text-sm opacity-50">
            Enter the Client Secret from the Discord Developer Portal. Keep this
            secure to protect your application.
          </p>
          <Input
            placeholder="Placeholder..."
            className="max-w-none"
            onChange={() => setHasChanges(true)}
          />
        </section>
        <section className={cn("w-full py-4", !hasAccess && "opacity-50")}>
          <h3 className="mb-2 font-semibold">Bot token</h3>
          <p className="mb-2 text-sm opacity-50">
            {`To connect your Discord bot to our platform, paste your bot token
            below. You can find it in the Discords Developer Portal under your
            app's Bot settings. Note that resetting your bot token will break
            existing integrations.`}
          </p>
          <p className="mb-4 text-sm opacity-50">
            Enter the Bot Token generated in the Discord Developer Portal. Keep
            this token secure to maintain bot functionality and account safety.
          </p>
          <Input
            placeholder="Placeholder..."
            className="max-w-none"
            onChange={() => setHasChanges(true)}
          />
        </section>
        <section className={cn("w-full py-4", !hasAccess && "opacity-50")}>
          <h3 className="mb-2 font-semibold">URL mappings</h3>
          <p className="mb-4 text-sm opacity-50">
            {`Match your URL mappings here to those specified in Discord's
            Developer Portal to ensure seamless integration. Refer to Discord’s
            URL Mapping Guide for details.`}
          </p>
          <div className="flex justify-between gap-2">
            <Input placeholder="Prefix..." />
            <Input placeholder="Target..." />
            <Button variant="secondary">Add mapping</Button>
          </div>
          <ul className="my-4 w-full border-t">
            <li className="flex items-center gap-2 border-b py-3 text-sm">
              <span>/autogunassets</span>
              <span className="w-full opacity-50">
                autogun-prod-assets-ipv6.p1.autogunheroestech.com
              </span>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center gap-2 border-b py-3 text-sm">
              <span>/googleanalytics</span>
              <span className="w-full opacity-50">
                region1.google-analytics.com
              </span>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center gap-2 border-b py-3 text-sm">
              <span>/firebasewebconfig</span>
              <span className="w-full opacity-50">firebase.googleapis.com</span>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center gap-2 border-b py-3 text-sm">
              <span>/sentry</span>
              <span className="w-full opacity-50">
                o1064059.ingest.sentry.io
              </span>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center gap-2 border-b py-3 text-sm">
              <span>/airbridge</span>
              <span className="w-full opacity-50">core.airbridge.io</span>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center gap-2 border-b py-3 text-sm">
              <span>/gameserver</span>
              <span className="w-full opacity-50">
                autogun-prod.p1.autogunheroestech.com:9380
              </span>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center gap-2 border-b py-3 text-sm">
              <span>/airbridgesdk</span>
              <span className="w-full opacity-50">sdk.airbridge.io</span>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center gap-2 border-b py-3 text-sm">
              <span>/firebaseauth</span>
              <span className="w-full opacity-50">
                firebaseinstallations.googleapis.com
              </span>
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
          </ul>
          {hasChanges && (
            <div className="mt-8 flex justify-start gap-2">
              <Button>Save changes</Button>
            </div>
          )}
        </section>
      </div>
      <div className="sticky top-0 flex h-full w-full justify-center overflow-hidden bg-[#7A7DF0] p-4 lg:max-h-[100vh] lg:items-center">
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
  );
}
