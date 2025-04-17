"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="h-full">
      <section className="flex h-full pb-12">
        <div className="flex h-full w-full flex-col items-start gap-6 border-input p-12">
          <div className="max-w-[940px]">
            <h1 className="mb-4 text-xl font-semibold">Overview</h1>
          </div>
          <Separator />
          <div className="w-full py-4">
            <h3 className="mb-2 font-semibold">Latest build</h3>
            <p className="mb-4 text-sm opacity-70">
              Enter webhook URL used to send game user allocation requests to
              your backend.
            </p>
            <Button>Testing link</Button>
          </div>
          <div className="w-full py-4">
            <h3 className="mb-2 font-semibold">Production build</h3>
            <p className="mb-4 text-sm opacity-70">
              Enter webhook URL used to send game user allocation requests to
              your backend.
            </p>
            <Button>Playable link</Button>
          </div>
          <div className="w-full py-4">
            <h3 className="mb-2 font-semibold">Crashes</h3>
            <p className="mb-4 text-sm opacity-70">
              Enter webhook URL used to send game user allocation requests to
              your backend.
            </p>
            <div>Counter</div>
          </div>
          <div className="w-full py-4">
            <h3 className="mb-2 font-semibold">Finance reports</h3>
            <p className="mb-4 text-sm opacity-70">
              Enter webhook URL used to send game user allocation requests to
              your backend.
            </p>
            <Button variant="secondary">Download link</Button>
          </div>
          <div className="w-full py-4">
            <h3 className="mb-2 font-semibold">Capabilities</h3>
            <p className="mb-4 text-sm opacity-70">
              Enter webhook URL used to send game user allocation requests to
              your backend.
            </p>
            <div>Checklist</div>
          </div>
        </div>
        <div className="h-full min-w-[400px] p-12">
          <div className="rounded-xl border bg-card p-8">
            Game logo, title and ID and link to settings that opens in a modal
          </div>
        </div>
      </section>
    </div>
  );
}
