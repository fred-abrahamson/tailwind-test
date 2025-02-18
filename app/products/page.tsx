"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Play, ShoppingCart, LoaderCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

type ProductType = {
  name: string;
  price: number;
  id: string;
  matched: boolean;
};

const PRODUCTS: ProductType[] = [
  {
    name: "Team Make Medal",
    price: 399.99,
    id: "team-make-medal",
    matched: true,
  },
  {
    name: "Time-skip 60 seconds",
    price: 0.99,
    id: "timeskip60",
    matched: true,
  },
  {
    name: "Time-skip 180 seconds",
    price: 1.99,
    id: "timeskip180",
    matched: false,
  },
  {
    name: "Pouch of Gems",
    price: 0.99,
    id: "pouchofgems",
    matched: true,
  },
  {
    name: "Bag of Gems",
    price: 0.49,
    id: "bagofgems",
    matched: true,
  },
  {
    name: "Box of Gems",
    price: 3.99,
    id: "boxofgems",
    matched: true,
  },
  {
    name: "Create of Gems",
    price: 7.99,
    id: "createofgems",
    matched: true,
  },
  {
    name: "Shipment of Gems",
    price: 15.99,
    id: "shipmentofgems",
    matched: false,
  },
  {
    name: "Plethora of Gems",
    price: 29.99,
    id: "plethoraofgems",
    matched: false,
  },
  {
    name: "Plethora of Gems",
    price: 29.99,
    id: "1a25e9b4-baae-11ee-b790-738cac36f099",
    matched: false,
  },
  {
    name: "Shipment of Gems",
    price: 15.99,
    id: "db932c8e-baad-11ee-ae65-3f5099fa6f4e",
    matched: false,
  },
];
export default function Products() {
  const [build, setBuild] = React.useState<BuildType | null>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [runAs, setRunAs] = React.useState<"guest" | "email" | "id">("guest");

  return (
    <div>
      <div className="flex w-full items-center justify-between border-b px-12 py-4">
        <h1 className="font-semibold">Products / Filters</h1>
        <Button>Add product</Button>
      </div>
      <section className="border-b border-border">
        <ul className="py-4">
          {PRODUCTS.map((item) => (
            <li
              key={item.id}
              className="group flex cursor-pointer items-center gap-8 px-12 py-4 hover:bg-muted"
              onClick={() => {
                setBuild(item);
                setIsOpen(true);
              }}
            >
              <div className="flex w-full items-center gap-4">
                <div className="flex flex-col gap-2 text-base">
                  <span className="text-sm font-semibold">{item.name}</span>
                  <div className="flex items-center gap-2 text-xs font-normal opacity-80">
                    <span>${item.price}</span>·<span>{item.id}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center gap-1">
                <Badge variant="outline">is matched</Badge>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
