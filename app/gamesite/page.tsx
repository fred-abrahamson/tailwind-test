"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Layers, Share2, Settings2, Palette, Images } from "lucide-react";

const MAPPINGS = [
  {
    prefix: "/autogunassets",
    target: "autogun-prod-assets-ipv6.p1.autogunheroestech.com",
  },
  { prefix: "/googleanalytics", target: "region1.google-analytics.com" },
  { prefix: "/firebasewebconfig", target: "firebase.googleapis.com" },
];

export default function PlayerSupport() {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);
  const [hasAccess, setHasAccess] = React.useState<boolean>(false);

  return (
    <div className="flex h-full flex-col">
      <div className="w-full border-b p-12">
        <div className="mb-4 text-xs font-medium opacity-70">Distribution</div>
        <h1 className="mb-2 text-xl font-semibold">Gamesite</h1>
        <p className="mb-5 text-sm leading-6 opacity-80">
          Allow your game to be run as a Discord activity. This feature needs to
          be manually enabled by the Pley team. Contact us to request access.
        </p>
        <div className="flex gap-2">
          <Button variant="default">Autofill with AI</Button>
          <Button variant="secondary">Open site</Button>
        </div>
      </div>
      <div className="border-b p-4">
        <div className="flex h-full max-h-[480px] w-full justify-center overflow-hidden rounded-lg bg-[#7A7DF0] p-4">
          <Image
            src="/discord.jpg"
            width={0}
            height={0}
            className="relative z-10 h-auto w-auto object-contain"
            alt="Discord"
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="relative flex h-full w-[320px] flex-col gap-6 border-r p-4">
          <section className="sticky top-16 w-full py-4">
            <div className="w-full">
              <div className="flex cursor-pointer items-center gap-3 rounded-md bg-muted px-4 py-3 text-sm">
                <Settings2 size={18} className="opacity-50" /> General
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-3 text-sm hover:bg-muted">
                <Palette size={18} className="opacity-50" /> Theme
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-3 text-sm hover:bg-muted">
                <Images size={18} className="opacity-50" /> Content
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-3 text-sm hover:bg-muted">
                <Layers size={18} className="opacity-50" /> Cards
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-3 text-sm hover:bg-muted">
                <Share2 size={18} className="opacity-50" /> Links
              </div>
            </div>
          </section>
        </div>
        <div className="w-full">
          <div className="m-x-auto flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
            <section className="py-4">
              <h3 className="mb-2 font-semibold">Status</h3>
              <p className="mb-4 text-sm opacity-70">
                When enabling this feature the Playable will load the Google
                Adsense script and ask the player for the necessary consent.
              </p>
              <div className="flex items-center gap-3 text-sm font-medium">
                <Checkbox onCheckedChange={() => setHasChanges(true)} />
                Set gamesite live
              </div>
            </section>
            <section className="w-full py-4">
              <h3 className="mb-2 font-semibold">Domain</h3>
              <p className="mb-4 text-sm opacity-70">
                Enter the Client ID (sometimes called Application ID) from the
                Discord Developer Portal. This identifies your application
                within Discord.
              </p>
              <Input
                placeholder="Placeholder..."
                className="max-w-none"
                onChange={() => setHasChanges(true)}
              />
            </section>
            <section className="w-full py-4">
              <h3 className="mb-2 font-semibold">FAQs</h3>
              <p className="mb-4 text-sm opacity-70">
                Enter the Client Secret from the Discord Developer Portal. Keep
                this secure to protect your application.
              </p>
              <Input
                placeholder="Placeholder..."
                className="max-w-none"
                onChange={() => setHasChanges(true)}
              />
            </section>
            <section className="w-full py-4">
              <h3 className="mb-2 font-semibold">About text</h3>
              <p className="mb-2 text-sm opacity-70">
                {`To connect your Discord bot to our platform, paste your bot token
            below. You can find it in the Discords Developer Portal under your
            app's Bot settings. Note that resetting your bot token will break
            existing integrations.`}
              </p>
              <p className="mb-4 text-sm opacity-70">
                Enter the Bot Token generated in the Discord Developer Portal.
                Keep this token secure to maintain bot functionality and account
                safety.
              </p>
              <Input
                placeholder="Placeholder..."
                className="max-w-none"
                onChange={() => setHasChanges(true)}
              />
            </section>
            <section className="w-full py-4">
              <h3 className="mb-2 font-semibold">FAQs</h3>
              <p className="mb-4 text-sm opacity-70">
                Enter the Client Secret from the Discord Developer Portal. Keep
                this secure to protect your application.
              </p>
              <Input
                placeholder="Placeholder..."
                className="max-w-none"
                onChange={() => setHasChanges(true)}
              />
            </section>
            <section className="w-full py-4">
              <h3 className="mb-2 font-semibold">Screenshots</h3>
              <p className="mb-4 text-sm opacity-70">
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
            <section className="w-full py-4">
              <h3 className="mb-2 font-semibold">FAQs</h3>
              <p className="mb-4 text-sm opacity-70">
                Enter the Client Secret from the Discord Developer Portal. Keep
                this secure to protect your application.
              </p>
              <Input
                placeholder="Placeholder..."
                className="max-w-none"
                onChange={() => setHasChanges(true)}
              />
            </section>
            <section className="w-full py-4">
              <h3 className="mb-2 font-semibold">Cards</h3>
              <p className="mb-4 text-sm opacity-70">
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
            <section className="w-full py-4">
              <h3 className="mb-2 font-semibold">Social links</h3>
              <p className="mb-4 text-sm opacity-70">
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
            <section className="w-full py-4">
              <h3 className="mb-2 font-semibold">Legal links</h3>
              <p className="mb-4 text-sm opacity-70">
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
            <section className="w-full py-4">
              <h3 className="mb-2 font-semibold">App store links</h3>
              <p className="mb-4 text-sm opacity-70">
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
        </div>
      </div>
    </div>
  );
}
