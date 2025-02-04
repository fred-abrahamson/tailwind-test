"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { X, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="h-full">
      <section className="flex h-full pb-12">
        <div className="w-full flex flex-col gap-6 p-12 h-full border-input items-start">
          <div className="max-w-[940px]">
            <h1 className="text-xl mb-4 font-semibold">Overview</h1>
          </div>
          <Separator />
          <div className="w-full py-4">
            <h3 className="font-semibold mb-2">Latest build</h3>
            <p className="text-sm opacity-50 mb-4">
              Enter webhook URL used to send game user allocation requests to
              your backend.
            </p>
            <Button>Testing link</Button>
          </div>
          <div className="w-full py-4">
            <h3 className="font-semibold mb-2">Production build</h3>
            <p className="text-sm opacity-50 mb-4">
              Enter webhook URL used to send game user allocation requests to
              your backend.
            </p>
            <Button>Playable link</Button>
          </div>
          <div className="w-full py-4">
            <h3 className="font-semibold mb-2">Crashes</h3>
            <p className="text-sm opacity-50 mb-4">
              Enter webhook URL used to send game user allocation requests to
              your backend.
            </p>
            <div>Counter</div>
          </div>
          <div className="w-full py-4">
            <h3 className="font-semibold mb-2">Finance reports</h3>
            <p className="text-sm opacity-50 mb-4">
              Enter webhook URL used to send game user allocation requests to
              your backend.
            </p>
            <Button variant="secondary">Download link</Button>
          </div>
          <div className="w-full py-4">
            <h3 className="font-semibold mb-2">Capabilities</h3>
            <p className="text-sm opacity-50 mb-4">
              Enter webhook URL used to send game user allocation requests to
              your backend.
            </p>
            <div>Checklist</div>
          </div>
        </div>
        <div className="min-w-[400px] h-full p-12">
          <div className="bg-card border rounded-xl p-8">
            Game logo, title and ID and link to settings that opens in a modal
          </div>
        </div>
      </section>
    </div>
  );
}
