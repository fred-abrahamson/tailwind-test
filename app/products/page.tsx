"use client";
import { useState } from "react";
import { Search, X, CircleAlert, RefreshCcw, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    id: "1a25e9b4-baae-11ee-b790-738cac36f099",
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
    discord: false,
    xsolla: false,
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
    id: "1a25e9b4-baae-11ee-b790-738cac56f099",
    discord: false,
    xsolla: true,
  },
  {
    name: "Shipment of Gems",
    price: 15.99,
    id: "db932c8e-baad-11ee-ae65-3f5099a6f4e",
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
          <Search size={18} className="opacity-50" />
          <h1 className="font-semibold">Filter products...</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Add product</Button>
          <Button>Import products</Button>
        </div>
      </div>
      <section className="w-full">
        {showPrompt && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem className="border-b" value="Discord">
              <AccordionTrigger className="border-0 px-12 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <CircleAlert size={18} className="text-orange-500" />7 items
                  are missing Discord SKUs
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col">
                text
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        <div className="flex gap-8 border-b px-12 py-4 font-semibold">
          <div className="w-full text-xs text-muted-foreground">Product</div>
          <div className="w-full text-xs text-muted-foreground">Price</div>
          <div className="w-full text-xs text-muted-foreground">
            Connections
          </div>
        </div>
        <ul>
          {PRODUCTS.map((item) => (
            <li
              key={item.id}
              className="group flex cursor-pointer items-center gap-8 px-12 py-4 hover:bg-card"
            >
              <div className="flex w-full items-center gap-4">
                <Image
                  width={40}
                  height={40}
                  src="/product.png"
                  alt={item.name}
                  className="h-10 w-10"
                />
                <div className="flex flex-col gap-2 text-base">
                  <span className="text-sm font-semibold">{item.name}</span>
                  <div className="flex items-center gap-2 text-xs font-normal opacity-80">
                    {item.id}
                  </div>
                </div>
              </div>
              <div className="w-full text-xs font-semibold">
                <span className="rounded-sm bg-muted px-2 py-1.5">
                  ${item.price}
                </span>
              </div>
              <div className="flex w-full gap-2">
                {item.discord && (
                  <span className="rounded-sm bg-muted px-3 py-1.5 text-xs font-semibold">
                    Discord
                  </span>
                )}
                {item.xsolla && (
                  <span className="rounded-sm bg-muted px-3 py-1.5 text-xs font-semibold">
                    Xsolla
                  </span>
                )}
                {!item.discord && !item.xsolla && (
                  <span className="rounded-sm bg-muted px-3 py-1.5 text-xs font-semibold opacity-50">
                    Not synched
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
