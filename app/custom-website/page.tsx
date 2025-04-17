"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PlayerSupport() {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);

  return (
    <div className="flex h-full flex-col-reverse xl:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
        <div>
          <div className="mb-4 text-xs font-medium opacity-70">
            Distribution
          </div>
          <h1 className="mb-2 text-xl font-semibold">Headless destination</h1>
          <p className="mb-5 text-sm leading-6 opacity-80">
            Integrating your existing user system with Pley allows your users to
            access games without creating separate accounts. By issuing Pley
            Access Tokens and initializing the Pley Web SDK, you can connect
            your authentication system with Pley’s services. Implementing the
            Allocate Game User webhook ensures user progress is properly managed
            across platforms.
          </p>
          <Button variant="secondary">Documentation</Button>
        </div>
        <Separator />
        <section className="w-full py-4">
          <h3 className="mb-2 font-semibold">Webhook URL</h3>
          <p className="mb-4 text-sm opacity-70">
            Enter webhook URL used to send game user allocation requests to your
            backend.
          </p>
          <Input
            placeholder="Placeholder..."
            className="max-w-none"
            onChange={() => setHasChanges(true)}
          />
        </section>
        <section className="w-full py-4">
          <h3 className="mb-2 font-semibold">Webhook signing key</h3>
          <p className="mb-4 text-sm opacity-70">
            Enter webhook signing key used to sign webhook requests.
          </p>
          <Textarea
            placeholder="Placeholder..."
            className="mb-4 max-w-none"
            onChange={() => setHasChanges(true)}
          />
          <Button variant="secondary">Generate</Button>
        </section>
        <section className="w-full py-4">
          <h3 className="mb-2 font-semibold">Allowed parent websites</h3>
          <p className="mb-4 text-sm opacity-70">
            Specify on which websites your game is allowed to run on.
          </p>
          <div className="flex justify-between gap-2">
            <Input placeholder="Enter URL..." />
            <Button variant="secondary">Add domain</Button>
          </div>
          <ul className="my-4 w-full border-t">
            <li className="flex items-center justify-between border-b py-3 text-sm">
              https://your-domain.com
              <Button size="icon" variant="ghost">
                <X size={16} />
              </Button>
            </li>
            <li className="flex items-center justify-between border-b py-3 text-sm">
              https://studio-domain.com
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
      <div className="relative flex h-full w-full justify-center overflow-hidden bg-muted p-16 xl:max-h-none xl:items-center">
        <div className="relative z-10 h-[80%] max-h-[480px] min-h-[480px] w-[80%] max-w-[640px] rounded-xl bg-[#111] p-12 shadow-lg">
          UI Shot
        </div>
        <Image
          src="/account-linking.webp"
          height="0"
          width="0"
          alt="Account linking"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
