"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { X, Lock, Plus } from "lucide-react";

type Category = {
  url: string | null;
  label: string;
};

const CATEGORIES: Category[] = [
  {
    url: null,
    label: "Login",
  },
  {
    url: null,
    label: "Payments",
  },
  {
    url: "https://portal.pixelfederation.com/en/trainstation2/support",
    label: "Gameplay",
  },
];
export default function PlayerSupport() {
  const [label, setLabel] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);

  return (
    <div className="flex h-full flex-col-reverse lg:flex-row">
      <div className="flex h-full w-full max-w-[940px] flex-col gap-6 p-12">
        <div>
          <div className="mb-4 text-sm opacity-50">Capabilities</div>
          <h1 className="mb-2 text-xl font-semibold">Player support</h1>
          <p className="mb-6 text-sm leading-6 opacity-80">
            Prevent players from certain countries or regions from accessing
            your game. This affects distrubutions destinations like this.
          </p>
          <div className="flex justify-between gap-2">
            <Input
              placeholder="Label..."
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
              }}
            />
            <Input
              placeholder="Support URL..."
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                let newCategory = {
                  label,
                  url,
                };
                setCategories([...categories, newCategory]);
                setLabel("");
                setUrl("");
              }}
              disabled={!label || !url}
            >
              Add category
            </Button>
          </div>
        </div>
        <section>
          <ul className="border-t">
            {categories.map((category) => {
              return (
                <li
                  key={category.label}
                  className="flex items-center justify-between border-b border-border py-3"
                >
                  <div className="flex flex-col gap-1.5 text-sm font-medium">
                    {category.label}
                    <span className="text-xs font-normal opacity-70">
                      {category.url ? category.url : "Managed by Pley"}
                    </span>
                  </div>

                  {category.url ? (
                    <Button size="icon" variant="ghost">
                      <X size={16} />
                    </Button>
                  ) : (
                    <Button size="icon" disabled variant="ghost">
                      <Lock size={16} />
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
          {categories.length > CATEGORIES.length && (
            <div className="mt-8 flex items-center justify-start gap-4">
              <Button>Save changes</Button>
              <span className="text-sm opacity-50">
                Changes will instantly be live in the playable.
              </span>
            </div>
          )}
        </section>
      </div>
      <div className="lg:max-h-auto relative flex h-full max-h-[320px] w-full justify-center overflow-hidden bg-muted p-16 lg:max-h-none lg:items-center">
        <div className="relative z-10 h-[80%] max-h-[480px] min-h-[480px] w-[80%] max-w-[640px] rounded-xl bg-[#111] p-12 shadow-lg">
          UI Shot
        </div>
        <Image
          src="/player-support.webp"
          height="0"
          width="0"
          alt="Account linking"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
