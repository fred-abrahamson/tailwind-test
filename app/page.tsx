"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const frameworks = [
    {
      value: "1331978461102735380",
      label: "Shipment of Gems",
      description: "1331978461102735380",
      connected: false,
    },
    {
      value: "1330913777960489100",
      label: "Test",
      description: "1330913777960489100",
      connected: false,
    },
    {
      value: "1318158142118563860",
      label: "World Fund Deluxe",
      description: "1318158142118563860",
      connected: false,
    },
    {
      value: "1329387893353091122",
      label: "World Fund Deluxe",
      description: "1329387893353091122",
      connected: false,
    },
    {
      value: "1328741315520892938",
      label: "Shipment of Gems",
      description: "1328741315520892938",
      connected: false,
    },
    {
      value: "1328742840297193553",
      label: "Plethora of Gems",
      description: "1328742840297193553",
      connected: true,
    },
    {
      value: "1328743150977552405",
      label: "Bag of Gems",
      description: "1328743150977552405",
      connected: false,
    },
    {
      value: "1328743357501014027",
      label: "Box of Gems",
      description: "1328743357501014027",
      connected: true,
    },
    {
      value: "1328743655862829116",
      label: "Time-skip 180 seconds",
      description: "1328743655862829116",
      connected: true,
    },
    {
      value: "1328743802403426385",
      label: "Create of Gems",
      description: "1328743802403426385",
      connected: true,
    },
    {
      value: "1328744369137651812",
      label: "Pouch of Gems",
      description: "1328744369137651812",
      connected: false,
    },
    {
      value: "1328744622020755467",
      label: "Team Make Medal",
      description: "1328744622020755467",
      connected: false,
    },
    {
      value: "1328746606476132442",
      label: "Test Free",
      description: "1328746606476132442",
      connected: false,
    },
    {
      value: "1328743029007450164",
      label: "Time-skip 60 seconds",
      description: "1328743029007450164",
      connected: false,
    },
  ];

  let selectedItem = frameworks.find((framework) => framework.value === value);

  return (
    <div>
      <section className="p-12 border-b border-border">
        <div className="max-w-[1240px]">
          <h1 className="text-lg font-bold mb-4">Button</h1>
          <div className="flex gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
      </section>
      <section className="p-12 border-b border-border">
        <div className="max-w-[1240px]">
          <h1 className="text-lg font-bold mb-4">Dropdown</h1>
          <div className="flex flex-col gap-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="secondary"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full max-w-[480px] justify-between"
                >
                  {selectedItem ? (
                    `${selectedItem.label} (${selectedItem.value})`
                  ) : (
                    <span className="font-normal opacity-50">
                      Select SKU...
                    </span>
                  )}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[480px] p-0 shadow-lg" align="start">
                <Command>
                  <CommandInput
                    placeholder="Search framework..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          className="pr-4"
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <div className="flex flex-col gap-1">
                            <div className="font-medium">{framework.label}</div>
                            <div className="text-xs opacity-50">
                              {framework.value}
                            </div>
                          </div>

                          {framework.connected ? (
                            <Check className="ml-auto text-green-500" />
                          ) : (
                            <X className="ml-auto text-red-500" />
                          )}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </section>
      <section className="p-12 border-b border-border">
        <div className="max-w-[1240px]">
          <div className="mb-8 max-w-[720px]">
            <h1 className="text-lg font-bold mb-1">Text Input</h1>
            <p className="leading-6 opacity-70 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Label>Label</Label>
              <Input placeholder="Placeholder..." />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Label</Label>
              <Input placeholder="Placeholder..." />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Label</Label>
              <Input placeholder="Placeholder..." />
            </div>
            <div className="flex gap-2">
              <Button variant="default">Save</Button>
              <Button variant="outline">Other action</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 border-b border-border">
        <div className="max-w-[1240px]">
          <h1 className="text-lg font-bold mb-4">Textarea</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Label>Label</Label>
              <Textarea placeholder="Placeholder..." />
            </div>
            <div className="flex gap-2">
              <Button variant="default">Save</Button>
              <Button variant="outline">Other action</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
