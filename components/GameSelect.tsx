"use client";

import * as React from "react";
import { ChevronDown, Settings } from "lucide-react";
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

type GameSelectProps = {
  selected: string | null;
};

export default function GameSelect({ selected }: GameSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selected);

  const games = [
    {
      id: "1",
      name: "Autogun Heroes",
      icon: "https://cdn.prod.website-files.com/6654610133720f7ba4c85bef/6704f7b2325229f9626e2daa_autogun-webclip.png",
    },
    {
      id: "2",
      name: "Big Rig Racing",
      icon: "https://cdn.prod.website-files.com/660c043520241fca576d87fa/660c070c372df734557c6a1d_game-logo.webp",
    },
  ];

  let selectedItem = games.find((game) => game.id === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-full h-auto border"
        >
          {selectedItem ? (
            <div className="flex w-full items-center gap-2">
              <Image
                className="rounded-md h-6 w-6"
                height={24}
                width={24}
                src={selectedItem.icon}
                alt={selectedItem.name}
              />
              <div>{selectedItem.name}</div>
            </div>
          ) : (
            <span>Go to game</span>
          )}
          <Settings />
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0 shadow-lg" align="start">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {games.map((game) => (
                <CommandItem
                  key={game.id}
                  value={game.id}
                  className="h-auto py-2 px-2"
                  onSelect={(currentValue) => {
                    console.log({ currentValue, value });
                    setValue(
                      currentValue === game.id ? game.id : currentValue.id
                    );
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      className="rounded-md h-6 w-6"
                      height={24}
                      width={24}
                      src={game.icon}
                      alt={game.name}
                    />
                    <div className="font-medium">{game.name}</div>
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
