"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ControlsUiShot } from "./ui-shot";

export type Control = { key: string; text: string };

const CONTROLS = [
  {
    key: "space",
    text: "Jump",
  },
  {
    key: "wasd",
    text: "Move",
  },
  {
    key: "Arrows",
    text: "Move",
  },
  {
    key: "Esc",
    text: "Back / Close",
  },
  {
    key: "Enter",
    text: "Special",
  },
];
export default function GameControls() {
  const [key, setKey] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<Control[]>(CONTROLS);

  return (
    <div className="flex h-full flex-col-reverse xl:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
        <div>
          <div className="mb-4 text-sm opacity-70">Capabilities</div>
          <h1 className="mb-2 text-xl font-semibold">Display controls</h1>
          <p className="mb-6 text-sm leading-6 opacity-80">
            {`Allow your players to fully leverage the web playing experience. Add
            your game's keyboard control scheme and they will be displayed in
            the web playable.`}
          </p>
          <div className="flex justify-between gap-2">
            <Input
              placeholder="Add key..."
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
            <Input
              placeholder="Add text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              disabled={!key || !text}
              onClick={() => {
                const newItem = { key, text };
                setItems([...items, newItem]);
                setKey("");
                setText("");
              }}
            >
              Add control
            </Button>
          </div>
        </div>
        <section>
          <ul className="border-t">
            {items.map((item: Control, index: number) => {
              return (
                <li
                  key={index}
                  className="flex items-center justify-between border-b py-3 text-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold uppercase">
                      {item.key}
                    </div>
                    {item.text}
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                      const newList = items.filter((i) => i.key !== item.key);
                      setItems(newList);
                    }}
                  >
                    <X size={16} />
                  </Button>
                </li>
              );
            })}
          </ul>
          {items.length !== CONTROLS.length && (
            <div className="mt-8 flex items-center justify-start gap-4">
              <Button>Save changes</Button>
              <span className="text-sm opacity-50">
                Changes will instantly be live in the playable.
              </span>
            </div>
          )}
        </section>
      </div>
      <div className="relative flex h-full w-full justify-center overflow-hidden bg-muted p-16 xl:max-h-none xl:items-center">
        <div className="relative z-10">
          <ControlsUiShot items={items} />
        </div>
        <Image
          src="/restricted-regions.webp"
          height="0"
          width="0"
          alt="Account linking"
          unoptimized
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
