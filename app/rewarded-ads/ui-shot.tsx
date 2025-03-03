import { X, EllipsisVertical } from "lucide-react";
import Image from "next/image";

export const UIShot = () => {
  return (
    <div className="flex h-auto w-auto flex-col items-center justify-center gap-4 rounded-xl bg-[#fff] p-4 text-black shadow-xl">
      <div className="flex w-full items-center justify-between text-sm">
        <EllipsisVertical className="opacity-50" size={18} />
        <div className="flex items-center gap-2 text-sm">
          Reward in 4 seconds
          <X className="opacity-50" size={16} />
        </div>
      </div>
      <Image
        src="/ad.png"
        alt="Rewarded ad"
        unoptimized
        width={0}
        height={0}
        className="h-auto w-full"
      />
    </div>
  );
};
