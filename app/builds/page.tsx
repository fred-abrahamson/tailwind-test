"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Play, Check, Loader, Rocket } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@/components/ui/dialog";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type BuildType = {
  value: string;
  number: number;
  releaseTrack: string | null;
  processing: number;
  size: number;
  message: string | null;
};

const BUILDS: BuildType[] = [
  {
    value: "e3d80124-b6e9-11ef-9db7-5b71cc6e09c2",
    number: 36,
    releaseTrack: null,
    processing: 20,
    size: 10.19,
    message: null,
  },
  {
    value: "36fd4c56-b6e5-11ef-b61f-3f066788534b",
    number: 35,
    releaseTrack: "Closed testing",
    processing: 100,
    size: 10.19,
    message: null,
  },
  {
    value: "9a2487d2-b3bf-11ef-a2e4-4370a17f3389",
    number: 34,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "test error",
  },
  {
    value: "8cc487fa-aca7-11ef-a93b-eb6881f43ccf",
    number: 33,
    releaseTrack: "Open testing",
    processing: 100,
    size: 10.19,
    message: "test mute videoplayer",
  },
  {
    value: "640c783e-ab28-11ef-ac94-2b900f3940ba",
    number: 32,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "attempt7",
  },
  {
    value: "821ce0fe-ab26-11ef-ac94-0fe74ef8592f",
    number: 31,
    releaseTrack: "Production",
    processing: 100,
    size: 10.19,
    message: "attempt6",
  },
  {
    value: "d519a72a-ab25-11ef-ac94-4745f1cb7642",
    number: 30,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "attempt5",
  },
  {
    value: "7436663c-ab25-11ef-ac94-4b7e686675b4",
    number: 29,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "attempt4",
  },
  {
    value: "dbcb7d6c-ab22-11ef-9710-33d0ad5c8473",
    number: 28,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "attempt3",
  },
  {
    value: "417fb4c6-ab22-11ef-9710-cf86f9a3c92c",
    number: 27,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "attempt2",
  },
  {
    value: "764d0d62-ab21-11ef-97a6-e79a7dda1f0b",
    number: 26,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "testing videos",
  },
  {
    value: "e798f370-8a31-11ef-b933-33e42da0249a",
    number: 25,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "dev test",
  },
  {
    value: "8d4e19da-4833-11ef-94bb-8f1c2792054f",
    number: 24,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "Factory July 2024 Update",
  },
  {
    value: "ab58629c-02fa-11ef-b3ee-dfd56ebeccef",
    number: 23,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "Production Release c.3.2.0.7f",
  },
  {
    value: "99f1f22a-fbed-11ee-80a1-cfd526425ea7",
    number: 22,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "APK file fix (Prod)",
  },
  {
    value: "c162a124-fbe8-11ee-91be-fb82a479e50a",
    number: 21,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "Final Test",
  },
  {
    value: "1685fb3a-fbe7-11ee-9863-27b980657315",
    number: 20,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "Test again",
  },
  {
    value: "d133c8de-fbe4-11ee-b5a2-c31ca3089c57",
    number: 19,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "Test upload",
  },
  {
    value: "56d9ec0e-f72e-11ee-86f0-03b4a39cfa54",
    number: 18,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "test 3",
  },
  {
    value: "4649b432-f72e-11ee-86f0-23b763dbc63f",
    number: 17,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "test 2",
  },
  {
    value: "dc293abe-f72d-11ee-86f0-23c8e37e0c8d",
    number: 16,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "Test Upload",
  },
  {
    value: "dff53fe8-e531-11ee-8ed0-634c004ae405",
    number: 15,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "all env",
  },
  {
    value: "42c15b9e-d190-11ee-9223-939aab8951b8",
    number: 14,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "Production Release v2",
  },
  {
    value: "c60c89d0-cf3b-11ee-a6f4-e79dc7b0b215",
    number: 13,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "Pre-production V.2.1",
  },
  {
    value: "bf8ee506-cf29-11ee-bcd8-bfaf808b70d7",
    number: 12,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "Will's emergency pley connect test (no iaps)",
  },
  {
    value: "9c86693e-badf-11ee-8bcd-5b704ae3c356",
    number: 11,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "bufgix4",
  },
  {
    value: "64842fa4-bade-11ee-8bcd-9fd12cfa8e0f",
    number: 10,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "bugfix3",
  },
  {
    value: "793ae3ee-badd-11ee-8bcd-37d516d481fe",
    number: 9,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "bugfix2",
  },
  {
    value: "56b11894-badc-11ee-8bcd-abda6c17eb34",
    number: 8,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "bugfix",
  },
  {
    value: "21c34bcc-bada-11ee-8bcd-67569d4188ac",
    number: 7,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "new pley sdk version",
  },
  {
    value: "9c56016c-bad1-11ee-8bcd-87d8d6c6e6d3",
    number: 6,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "purchased popup added",
  },
  {
    value: "0e342d98-baca-11ee-9fc4-8f67eb99150f",
    number: 5,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "entitlement consume test",
  },
  {
    value: "524605c8-bac6-11ee-ae6e-ef2f9e5081cc",
    number: 4,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "consuming bug fix",
  },
  {
    value: "f42f4d3c-bac0-11ee-8660-5bcc67631926",
    number: 3,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "store added",
  },
  {
    value: "6d4f260e-b9e2-11ee-949b-03cc8ab64e60",
    number: 2,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "splashscreen fix",
  },
  {
    value: "5d5681ee-b9e1-11ee-972c-1bd72807e4fb",
    number: 1,
    releaseTrack: null,
    processing: 100,
    size: 10.19,
    message: "gameprogress test",
  },
];

export default function Builds() {
  const [build, setBuild] = React.useState<BuildType | null>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [runAs, setRunAs] = React.useState<"guest" | "email" | "id">("guest");

  return (
    <div>
      <section className="border-b border-border">
        <div className="w-full border-b px-12 py-4">
          <h1 className="font-semibold">Builds</h1>
        </div>
        <ul>
          {BUILDS.map((item) => (
            <li
              key={item.value}
              className={cn(
                "group flex cursor-pointer items-center gap-8 px-12 py-4 hover:bg-muted",
                item.value === build?.value && "bg-muted",
                item.releaseTrack && "bg-muted",
                item.releaseTrack === "Production" && "bg-green-400/5",
              )}
              onClick={() => {
                setBuild(item);
                setIsOpen(true);
              }}
            >
              <div className="font-mono text-base text-sm">
                {item.number.toString().padStart(3, "0")}
              </div>

              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center group-hover:hidden">
                {item.processing < 100 ? (
                  <Loader size={18} className="block text-orange-300" />
                ) : (
                  <Check
                    size={18}
                    className="block text-green-300 group-hover:hidden"
                  />
                )}
              </div>

              <div className="hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-black group-hover:flex">
                <Play fill="#000" size={14} />
              </div>

              <div className="flex w-full flex-col gap-2 text-base">
                <span
                  className={cn(
                    "text-sm font-medium",
                    !item.message && "opacity-50",
                  )}
                >
                  {item.message || "No build message"}
                </span>
                <div className="flex items-center gap-2 text-xs font-normal opacity-80">
                  <span>{item.size}MB</span>·
                  <span>Uploaded 2 months ago by SeebATPley</span>
                </div>
              </div>

              {item.releaseTrack && (
                <div
                  className={cn(
                    "flex-shrink-0 text-xs font-semibold",
                    item.releaseTrack === "Production" && "text-green-400",
                  )}
                >
                  {item.releaseTrack}
                </div>
              )}
            </li>
          ))}
        </ul>
        <Drawer
          open={isOpen}
          onOpenChange={(e: boolean) => {
            setIsOpen(e);
            setBuild(null);
          }}
        >
          {build && (
            <DrawerContent className="w-[50%] min-w-[480px] max-w-[720px]">
              <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
                <VisuallyHidden>
                  <DialogTitle>Build {build.number}</DialogTitle>
                </VisuallyHidden>
                <div>
                  <div className="mb-4 text-sm opacity-50">
                    Build #{build.number}
                  </div>
                  <h1 className="mb-2 text-xl font-semibold">
                    {build.message || "No build message"}
                  </h1>
                  <p className="mb-6 text-sm leading-6 opacity-80">
                    Uploaded 2 months ago by SeebATPley
                  </p>
                </div>
                <Separator />
                <section className="py-2">
                  <h3 className="mb-2 font-semibold">Build message</h3>
                  <p className="mb-4 text-sm opacity-50">
                    Description of build used internally.
                  </p>
                  <Input
                    className="max-w-none"
                    defaultValue={build.message || undefined}
                  />
                </section>

                <section className="py-2">
                  <h3 className="mb-2 font-semibold">Run build</h3>
                  <p className="mb-4 text-sm opacity-50">
                    You can run a build as a specific user instead of playing
                    with your Pley account. Enter a user ID or an account email
                    below to run the build.
                  </p>
                  <div className="mb-6 flex gap-4">
                    <Select
                      defaultValue={runAs}
                      onValueChange={(e) => setRunAs(e)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guest">New guest user</SelectItem>
                        <SelectItem value="email">By user email</SelectItem>
                        <SelectItem value="id">By user ID</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="default">Run build</Button>
                  </div>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <span className="opacity-50">Run as </span>
                      <span className="cursor-pointer font-medium opacity-80 hover:underline hover:opacity-100">
                        Recent value
                      </span>
                    </li>
                    <li>
                      <span className="opacity-50">Run as </span>
                      <span className="cursor-pointer font-medium opacity-80 hover:underline hover:opacity-100">
                        Recent value
                      </span>
                    </li>
                    <li>
                      <span className="opacity-50">Run as </span>
                      <span className="cursor-pointer font-medium opacity-80 hover:underline hover:opacity-100">
                        Recent value
                      </span>
                    </li>
                  </ul>
                </section>

                <section className="py-2">
                  <h3 className="mb-2 font-semibold">Post-processing</h3>
                  <p className="mb-4 text-sm opacity-50">
                    Post-processing involves a series of automatic
                    optimizations, adjustments, and compression to ensure your
                    game runs seamlessly on the web in all web browsers. As
                    things change, the build processing pipeline is updated,
                    adding new optimizations, and stability features.
                  </p>
                  <Button variant="secondary">Re-process with 1.19.3</Button>
                </section>
              </div>
            </DrawerContent>
          )}
        </Drawer>
      </section>
    </div>
  );
}

{
  /* 
   <DrawerHeader className="border-b px-8 py-12 pb-2">
                <div>
                  <div className="mb-4 text-sm opacity-50">
                    Build #{build.number}
                  </div>
                  <h1 className="mb-2 text-xl font-semibold">
                    {build.message || "No build message"}
                  </h1>
                  <p className="mb-6 text-sm leading-6 opacity-80">
                    Uploaded 2 months ago by SeebATPley
                  </p>
                </div>
              </DrawerHeader>
              <div className="px-8">
                <section className="py-4">
                  <h3 className="mb-2 font-semibold">Run build</h3>
                  <p className="mb-4 text-sm opacity-50">
                    You can run a build as a specific user instead of playing
                    with your Pley account. Enter a user ID or an account email
                    below to run the build.
                  </p>
                  <div className="flex gap-4">
                    <Select defaultValue={runAs}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guest">New guest user</SelectItem>
                        <SelectItem value="email">By user email</SelectItem>
                        <SelectItem value="id">By user ID</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="default">Run build</Button>
                  </div>
                </section>

                <section className="border-b border-border py-8">
                  <h3 className="text-lg font-bold">Build description</h3>
                  <p className="mb-4 text-sm opacity-50">
                    Description of build used internally.
                  </p>
                  <Input
                    className="max-w-none"
                    defaultValue={build.message || undefined}
                  />
                </section>
                <section className="border-b border-border py-8">
                  <h3 className="text-lg font-bold">Post-processing</h3>
                  <p className="mb-4 text-sm opacity-50">
                    Post-processing involves a series of automatic
                    optimizations, adjustments, and compression to ensure your
                    game runs seamlessly on the web in all web browsers. As
                    things change, the build processing pipeline is updated,
                    adding new optimizations, and stability features.
                  </p>
                  <Button variant="default">Re-process with 1.19.3</Button>
                </section>
                <section className="border-b border-border py-8">
                  <h3 className="text-lg font-bold">Build description</h3>
                  <p className="mb-4 text-sm opacity-50">
                    Description of build used internally.
                  </p>
                  <Input
                    className="max-w-none"
                    defaultValue={build.message || undefined}
                  />
                </section>
                <section className="border-b border-border py-8">
                  <h3 className="text-lg font-bold">Post-processing</h3>
                  <p className="mb-4 text-sm opacity-50">
                    Post-processing involves a series of automatic
                    optimizations, adjustments, and compression to ensure your
                    game runs seamlessly on the web in all web browsers. As
                    things change, the build processing pipeline is updated,
                    adding new optimizations, and stability features.
                  </p>
                  <Button variant="default">Re-process with 1.19.3</Button>
                </section>
              </div>
              <DrawerFooter className="border-t">footer</DrawerFooter>
              */
}
