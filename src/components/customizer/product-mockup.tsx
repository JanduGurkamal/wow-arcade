"use client";

import { mockupDefaults } from "@/lib/images";
import { cn } from "@/lib/utils";
import type { CustomizerProduct } from "@/lib/data";

type ProductId = CustomizerProduct["id"];

function Photo({
  src,
  className,
  alt = "Your photo",
}: {
  src: string;
  className?: string;
  alt?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={cn("h-full w-full object-cover", className)} />
  );
}

export function ProductMockup({
  type,
  photoUrl,
}: {
  type: ProductId;
  photoUrl: string | null;
}) {
  const src = photoUrl ?? mockupDefaults[type];

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-beige/40">
      {!photoUrl && (
        <Photo
          src={mockupDefaults[type]}
          alt=""
          className="absolute inset-0 opacity-30"
        />
      )}

      {type === "sticker" && (
        <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-3 p-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn(
                "polaroid w-[28%] rotate-[-2deg] p-1.5 pb-5",
                i === 1 && "rotate-[3deg] -translate-y-2",
                i === 2 && "rotate-[-1deg]"
              )}
            >
              <Photo src={src} alt={`Sticker ${i + 1}`} className="aspect-square" />
            </div>
          ))}
        </div>
      )}

      {type === "magnet" && (
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="relative w-[50%] overflow-hidden rounded-lg border border-border bg-card p-1 shadow-[var(--polaroid-shadow)]">
            <Photo src={src} alt="Magnet" className="aspect-square rounded" />
          </div>
        </div>
      )}

      {type === "keychain" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-2 h-8 w-2 rounded-full bg-sand" />
          <div className="h-[38%] w-[38%] overflow-hidden rounded-full border-2 border-card shadow-md">
            <Photo src={src} alt="Keychain" />
          </div>
        </div>
      )}

      {type === "frame" && (
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="w-[75%] border-[10px] border-card bg-card p-2 shadow-[var(--polaroid-shadow)]">
            <Photo src={src} alt="Frame" className="aspect-[4/5]" />
          </div>
        </div>
      )}

      {type === "canvas" && (
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="h-[78%] w-[82%] overflow-hidden shadow-[var(--polaroid-shadow)]">
            <Photo src={src} alt="Canvas" />
          </div>
        </div>
      )}
    </div>
  );
}
