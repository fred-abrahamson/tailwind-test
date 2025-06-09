"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus, Info } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

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
  const [hasAccess, setHasAccess] = React.useState<boolean>(false);

  return (
    <div className="flex h-full flex-col-reverse lg:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 border-t p-12 lg:min-w-[800px] lg:border-r lg:border-t-0">
        <div>
          <div className="mb-4 text-xs font-medium opacity-70">
            Distribution
          </div>
          <h1 className="mb-2 text-xl font-semibold">CrazyGames</h1>
          <p className="mb-5 text-sm leading-6 opacity-80">
            CrazyGames is a web-based gaming platform that offers a wide variety
            of free-to-play games across different genres. Bring your games to
            CrazyGames to reach a large audience and gain visibility without the
            need for downloads or installations.
          </p>
          <Button variant="secondary">Documentation</Button>
          <div className="mt-6 flex items-center gap-2 border-t pt-6 text-sm font-normal">
            <Info className="text-blue-400" size={18} /> We are currently
            reviewing your submission.
          </div>
        </div>
        <Separator />
        <section className="w-full py-4">
          <h3 className="mb-2 font-semibold">Download and Acceept agreement</h3>
          <p className="mb-4 text-sm opacity-70">
            Enter the Client ID (sometimes called Application ID) from the
            Discord Developer Portal. This identifies your application within
            Discord.
          </p>
          <div className="mb-6 flex items-center gap-3 text-sm font-medium">
            <Checkbox onCheckedChange={() => setHasChanges(true)} />
            <span>
              I accept the{" "}
              <Link
                href="https://files.crazygames.com/documents/developer_terms_20210211.pdf"
                className="underline"
              >
                Developer Portal Terms and Conditions
              </Link>
            </span>
          </div>
        </section>
        <section className="w-full py-4">
          <h3 className="mb-2 font-semibold">Game description</h3>
          <p className="mb-4 text-sm opacity-70">
            Provide a clear and concise description of your game. This helps
            users understand what to expect and improves visibility through
            search engines.
          </p>
          <Textarea
            placeholder="Placeholder..."
            className="min-h-48 max-w-none"
            onChange={() => setHasChanges(true)}
          />
        </section>
        <section className="w-full py-4">
          <h3 className="mb-2 font-semibold">Cover images</h3>
          <p className="mb-6 text-sm opacity-70">
            The cover images represent your game on CrazyGames' platform. They
            should be clear, professional, and visually appealing. Please
            provide three sizes: landscape (1920x1080), portrait (800x1200), and
            square (800x800). For more details, refer to our game cover
            guidelines.
          </p>
          <div className="flex gap-3">
            <div className="w-full max-w-56">
              <div className="mb-2 text-xs font-semibold text-muted-foreground">
                Square 1:1 <span className="text-orange-500">*</span>
              </div>
              <div className="flex aspect-[1/1] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed border-input bg-card p-4 text-muted-foreground transition hover:border-2 hover:border-solid hover:border-foreground hover:text-foreground">
                <Plus size={18} />
              </div>
            </div>
            <div className="w-full max-w-56">
              <div className="mb-2 text-xs font-semibold text-muted-foreground">
                Landscape 16:9 <span className="text-orange-500">*</span>
              </div>
              <div className="flex aspect-[16/9] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed border-input bg-card p-4 text-muted-foreground transition hover:border-2 hover:border-solid hover:border-foreground hover:text-foreground">
                <Plus size={18} />
              </div>
            </div>
            <div className="w-full max-w-56">
              <div className="mb-2 text-xs font-semibold text-muted-foreground">
                Porttrait 2:3 <span className="text-orange-500">*</span>
              </div>
              <div className="flex aspect-[2/3] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed border-input bg-card p-4 text-muted-foreground transition hover:border-2 hover:border-solid hover:border-foreground hover:text-foreground">
                <Plus size={18} />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-4">
          <h3 className="mb-2 font-semibold">Preview videos</h3>
          <p className="mb-6 text-sm opacity-70">
            {`Game videos are shown when players hover over your game cover. We may replace them with our own if necessary. For details, refer to our game video guidelines.`}
          </p>
          <div className="flex gap-3">
            <div className="w-full max-w-56">
              <div className="mb-2 text-xs font-semibold text-muted-foreground">
                Landscape 16:9 <span className="text-orange-500">*</span>
              </div>
              <div className="flex aspect-[16/9] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed border-input bg-card p-4 text-muted-foreground transition hover:border-2 hover:border-solid hover:border-foreground hover:text-foreground">
                <Plus size={18} />
              </div>
            </div>
            <div className="w-full max-w-56">
              <div className="mb-2 text-xs font-semibold text-muted-foreground">
                Porttrait 2:3
              </div>
              <div className="flex aspect-[2/3] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed border-input bg-card p-4 text-muted-foreground transition hover:border-2 hover:border-solid hover:border-foreground hover:text-foreground">
                <Plus size={18} />
              </div>
            </div>
          </div>
          {hasChanges && (
            <div className="mt-8 flex justify-start gap-2">
              <Button>Save changes</Button>
            </div>
          )}
        </section>
      </div>
      <div className="top-16 h-full max-h-[320px] w-full p-4 lg:sticky lg:max-h-[100vh]">
        <div className="flex h-[calc(100vh_-_95px)] w-full justify-center overflow-hidden rounded-lg lg:items-center">
          <Image
            src="/crazygames-cover.png"
            width={0}
            height={0}
            className="h-full w-auto object-cover"
            alt="CrazyGames"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
