"use client";
import { useState } from "react";
import { Check, X, ChevronRight, RefreshCcw, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type ProductType = {
  name: string;
  price: number;
  id: string;
  discord: boolean;
  xsolla: boolean;
};

const PRODUCTS: ProductType[] = [
  {
    name: "Team Make Medal",
    price: 399.99,
    id: "team-make-medal",
    discord: true,
    xsolla: true,
  },
  {
    name: "Time-skip 60 seconds",
    price: 0.99,
    id: "timeskip60",
    discord: true,
    xsolla: true,
  },
  {
    name: "Time-skip 180 seconds",
    price: 1.99,
    id: "timeskip180",
    discord: false,
    xsolla: true,
  },
  {
    name: "Pouch of Gems",
    price: 0.99,
    id: "pouchofgems",
    discord: true,
    xsolla: true,
  },
  {
    name: "Bag of Gems",
    price: 0.49,
    id: "bagofgems",
    discord: true,
    xsolla: true,
  },
  {
    name: "Box of Gems",
    price: 3.99,
    id: "boxofgems",
    discord: true,
    xsolla: true,
  },
  {
    name: "Create of Gems",
    price: 7.99,
    id: "createofgems",
    discord: true,
    xsolla: true,
  },
  {
    name: "Shipment of Gems",
    price: 15.99,
    id: "shipmentofgems",
    discord: false,
    xsolla: true,
  },
  {
    name: "Plethora of Gems",
    price: 29.99,
    id: "plethoraofgems",
    discord: false,
    xsolla: true,
  },
  {
    name: "Plethora of Gems",
    price: 29.99,
    id: "1a25e9b4-baae-11ee-b790-738cac36f099",
    discord: false,
    xsolla: true,
  },
  {
    name: "Shipment of Gems",
    price: 15.99,
    id: "db932c8e-baad-11ee-ae65-3f5099fa6f4e",
    discord: false,
    xsolla: true,
  },
];
export default function Products() {
  const [showPrompt, setShowPrompt] = useState<boolean>(true);
  return (
    <div>
      <div className="flex w-full items-center justify-between border-b px-12 py-4">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold">Products</h1>
          <ChevronRight size={16} className="opacity-50" />
          <div className="font-semibold">Filters</div>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Add product</Button>
          <Button>Import products</Button>
        </div>
      </div>
      <section className="border-b">
        {showPrompt && (
          <div className="flex items-center justify-between border-b bg-muted px-12 py-8">
            <div>
              <h3 className="mb-2 font-semibold">
                7 products are missing Discord SKUs
              </h3>
              <p className="text-sm opacity-80">
                {`Add the SKUs in Discord’s Developer portal or update the SKU to
            match the product name.`}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                onClick={() => setShowPrompt(false)}
              >
                <Filter />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={() => setShowPrompt(false)}
              >
                <RefreshCcw />
              </Button>
              <Button variant="secondary">Automatch</Button>
            </div>
          </div>
        )}
        <ul className="py-4">
          {PRODUCTS.map((item) => (
            <li
              key={item.id}
              className="group flex cursor-pointer items-center gap-8 px-12 py-4 hover:bg-muted"
            >
              <div className="flex w-full items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-muted" />
                <div className="flex flex-col gap-2 text-base">
                  <span className="text-sm font-semibold">{item.name}</span>
                  <div className="flex items-center gap-2 text-xs font-normal opacity-80">
                    <span>${item.price}</span>·<span>{item.id}</span>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-end gap-2">
                {item.discord && (
                  <Image
                    src="/discord-icon.png"
                    alt="Discord"
                    width={24}
                    height={24}
                    className="rounded-sm"
                  />
                )}
                {item.xsolla && (
                  <Image
                    src="/xsolla-icon.png"
                    alt="Xsolla"
                    width={24}
                    height={24}
                    className="rounded-sm"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
