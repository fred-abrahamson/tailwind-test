import Image from "next/image";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export const AccountLinkingUIShot = () => {
  return (
    <div className="flex h-auto w-auto max-w-[400px] flex-col items-center justify-center rounded-xl bg-[#111] p-12 pb-10 text-center shadow-xl">
      <div className="mb-6">
        <h1 className="mb-1 text-xl font-semibold">Link mobile progress</h1>
        <p className="text-sm opacity-80">
          Open your camera app and scan the code to proceed. Make sure you have
          the mobile game installed.
        </p>
      </div>
      <Image
        src="/qr-code.svg"
        width={200}
        height={200}
        alt="Link account"
        className="mb-4 rounded-lg"
      />
      <div className="mb-8 text-xs font-medium opacity-80">
        Code expires in 04:32
      </div>
      <Collapsible className="w-full rounded-lg border px-4 py-2 text-center">
        <CollapsibleTrigger asChild className="cursor-pointer">
          <h4 className="text-sm font-semibold">Need help?</h4>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ol className="mt-2 space-y-4 py-2 text-left">
            <li className="text-sm">
              1. Install the mobile game on your phone.
            </li>
            <li className="text-sm">
              2. Scan the QR code using your phone camera.
            </li>
            <li className="text-sm">
              3. Let the mobile game open and wait for it to close.
            </li>
            <li className="text-sm">
              4. Sign up or log in on this page to create a web account.
            </li>
            <li className="text-sm">
              5. Wait for the game to load on this page and start playing!
            </li>
          </ol>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
