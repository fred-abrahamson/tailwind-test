"use client";

import * as React from "react";
import { ChevronDown, House } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ListItem = {
  id: string;
  message: string;
  icon?: string;
};

type DropdownProps = {
  list: ListItem[];
  className?: string;
  align?: "start" | "center" | "end";
};

export default function BuildDropdown({
  list,
  className,
  align = "start",
}: DropdownProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className={cn("h-auto w-auto gap-1 border border-input", className)}
        >
          <span>Release build</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[320px] rounded-lg p-0 shadow-lg"
        align={align}
      >
        <Command>
          <CommandList>
            <CommandEmpty>No builds found.</CommandEmpty>
            <CommandGroup>
              {list.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.id}
                  className="h-auto px-2 py-2"
                  onSelect={(currentValue: string) => {
                    console.log({ currentValue });
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <div className="font-medium">{item.message}</div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
