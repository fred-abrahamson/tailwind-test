"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function RewardedAds() {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);
  const [hasAccess, setHasAccess] = React.useState<boolean>(false);

  return (
    <div className="flex h-full flex-col-reverse xl:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12 lg:border-r">
        <div>
          <div className="mb-4 text-sm opacity-70">Capabilities</div>
          <h1 className="mb-2 text-xl font-semibold">Xsolla payments</h1>
          <p className="mb-5 text-sm leading-6 opacity-80">
            Use Xsolla payments for in-game purchases. This feature need to be
            enabled by our support team. Request access and our support team
            will reach out.
          </p>
          <div className="flex gap-2">
            <Button
              variant={hasAccess ? "secondary" : "default"}
              onClick={() => setHasAccess(!hasAccess)}
              disabled={hasAccess}
            >
              {hasAccess ? "Request sent" : "Request access"}
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
          <h3 className="mb-2 font-semibold">Company ID / Publisher ID</h3>
          <p className="mb-4 text-sm opacity-70">
            Can be found in Xsolla's publisher portal.
          </p>
          <Input
            placeholder="123456"
            className="max-w-none"
            onChange={() => setHasChanges(true)}
            disabled={!hasAccess}
          />
        </section>
        <section className={cn("w-full py-4", !hasAccess && "opacity-60")}>
          <h3 className="mb-2 font-semibold">Project ID</h3>
          <p className="mb-4 text-sm opacity-70">
            Can be found in Xsolla's publisher portal.
          </p>
          <Input
            placeholder="123456"
            className="max-w-none"
            onChange={() => setHasChanges(true)}
            disabled={!hasAccess}
          />
        </section>
        <section className={cn("w-full py-4", !hasAccess && "opacity-60")}>
          <h3 className="mb-2 font-semibold">Webhook signing key</h3>
          <p className="mb-4 text-sm opacity-70">
            Can be found in Xsolla's publisher portal under Projects settings'
            Webhook tab. If regenerated, be sure to update this field.
          </p>
          <Input
            placeholder="Paste key..."
            type=""
            className="max-w-none"
            onChange={() => setHasChanges(true)}
            disabled={!hasAccess}
          />
        </section>
        <section className={cn("w-full py-4", !hasAccess && "opacity-60")}>
          <h3 className="mb-2 font-semibold">API key</h3>
          <p className="mb-4 text-sm opacity-70">
            Can be created in Xsolla's publisher portal under Projects settings'
            API keys tab.
          </p>
          <Input
            placeholder="Paste key..."
            type=""
            className="max-w-none"
            onChange={() => setHasChanges(true)}
            disabled={!hasAccess}
          />
          {hasChanges && (
            <div className="mt-8 flex justify-start gap-2">
              <Button>Save changes</Button>
            </div>
          )}
        </section>
      </div>
      <div className="top-16 h-full max-h-[320px] w-full p-4 lg:sticky lg:max-h-[100vh]">
        <div className="flex h-[calc(100vh_-_95px)] w-full justify-center overflow-hidden rounded-lg bg-[#a7b5ff] lg:items-center">
          <Image
            src="/xsolla-payment.png"
            height="0"
            width="0"
            alt="Account linking"
            className="h-auto w-[200%] object-cover"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
