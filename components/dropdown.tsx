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
  name: string;
  icon?: string;
};

type DropdownProps = {
  list: ListItem[];
  selected: string | null;
  showArrow?: boolean;
  className?: string;
  align?: "start" | "center" | "end";
};

export default function Dropdown({
  selected,
  list,
  showArrow = true,
  className,
  align = "start",
}: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selected);

  const selectedItem = list.find((item) => item.id === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className={cn("h-auto gap-1 bg-transparent p-0", className)}
        >
          {selectedItem ? (
            <div>{selectedItem.name}</div>
          ) : (
            <span>Go to game</span>
          )}
          {showArrow && <ChevronDown className="opacity-80" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[320px] rounded-lg p-0 shadow-lg"
        align={align}
      >
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {list.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.id}
                  className="h-auto px-2 py-2"
                  onSelect={(currentValue: string) => {
                    console.log({ currentValue });
                    setValue(currentValue === item.id ? item.id : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    {item.icon ? (
                      <Image
                        className="h-6 w-6 rounded-md"
                        height={24}
                        width={24}
                        src={item.icon}
                        alt={item.name}
                      />
                    ) : (
                      <div className="flex h-6 w-6 items-center justify-center">
                        <House />
                      </div>
                    )}
                    <div className="font-medium">{item.name}</div>
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
