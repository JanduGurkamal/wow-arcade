"use client";

import { motion } from "framer-motion";
import { mockupDefaults } from "@/lib/images";
import { cn } from "@/lib/utils";
import type { CustomizerProduct } from "@/lib/data";

type ProductId = CustomizerProduct["id"];

export function ProductMockup({
  type,
  photoUrl,
}: {
  type: ProductId;
  photoUrl: string | null;
}) {
  const src = photoUrl ?? mockupDefaults[type];

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-beige to-pink/20">
      {/* Base scene when no user photo */}
      {!photoUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={mockupDefaults[type]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
      )}

      {type === "sticker" && (
        <StickerLayout src={src} isUserPhoto={!!photoUrl} />
      )}
      {type === "magnet" && <MagnetLayout src={src} />}
      {type === "keychain" && <KeychainLayout src={src} />}
      {type === "frame" && <FrameLayout src={src} />}
      {type === "canvas" && <CanvasLayout src={src} />}
    </div>
  );
}

function Photo({
  src,
  className,
  alt = "Your photo",
}: {
  src: string;
  className?: string;
  alt?: string;
}) {
  const isBlob = src.startsWith("blob:");

  if (isBlob) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={cn("h-full w-full object-cover", className)} />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={cn("h-full w-full object-cover", className)} />
  );
}

function StickerLayout({
  src,
  isUserPhoto,
}: {
  src: string;
  isUserPhoto: boolean;
}) {
  const slots = [
    "left-[8%] top-[10%] rotate-[-8deg]",
    "right-[8%] top-[12%] rotate-[6deg]",
    "left-[12%] bottom-[14%] rotate-[4deg]",
    "right-[10%] bottom-[12%] rotate-[-5deg]",
  ];

  return (
    <div className="absolute inset-0 p-4">
      {slots.map((pos, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute h-[28%] w-[28%] overflow-hidden rounded-2xl border-4 border-warm-white shadow-lg",
            pos
          )}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.06, type: "spring", stiffness: 280 }}
        >
          <Photo src={src} alt={`Sticker ${i + 1}`} />
          {isUserPhoto && (
            <span className="absolute bottom-1 right-1 rounded-md bg-warm-white/90 px-1 text-[8px] font-bold">
              ✨
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function MagnetLayout({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-10">
      <motion.div
        className="relative aspect-square w-[55%] overflow-hidden rounded-2xl border-4 border-warm-white/90 shadow-[0_12px_40px_rgba(92,74,66,0.2)]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(244,196,212,0.3) 100%)",
        }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        <Photo src={src} alt="Magnet preview" className="rounded-xl" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/60" />
      </motion.div>
    </div>
  );
}

function KeychainLayout({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="mb-1 h-10 w-4 rounded-full bg-gradient-to-b from-sand to-brown-soft shadow-inner" />
      <motion.div
        className="h-[42%] w-[42%] overflow-hidden rounded-full border-4 border-warm-white shadow-xl"
        initial={{ y: -8 }}
        animate={{ y: 0 }}
        transition={{ type: "spring" }}
      >
        <Photo src={src} alt="Keychain preview" />
      </motion.div>
    </div>
  );
}

function FrameLayout({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative h-[75%] w-[80%] rounded-sm bg-warm-white p-3 shadow-2xl">
        <div className="relative h-full w-full overflow-hidden rounded-sm bg-beige">
          <Photo src={src} alt="Frame preview" />
        </div>
      </div>
    </div>
  );
}

function CanvasLayout({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <motion.div
        className="relative h-[80%] w-[85%] overflow-hidden shadow-[8px_12px_0_rgba(92,74,66,0.12)]"
        initial={{ rotate: -1 }}
        animate={{ rotate: 0 }}
      >
        <Photo src={src} alt="Canvas preview" />
      </motion.div>
    </div>
  );
}
