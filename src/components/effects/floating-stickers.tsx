"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { stickerEmojis } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/** Hero-only decorations — must live inside a parent with `isolate` + `overflow-hidden` */
const stickers = [
  { left: "8%", top: "18%", emoji: stickerEmojis[0] },
  { left: "88%", top: "22%", emoji: stickerEmojis[1] },
  { left: "5%", top: "55%", emoji: stickerEmojis[2] },
  { left: "90%", top: "58%", emoji: stickerEmojis[3] },
  { left: "48%", top: "12%", emoji: stickerEmojis[4] },
];

export function FloatingStickers() {
  const reduced = usePrefersReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const handler = (e: MouseEvent) => {
      setOffset({
        x: (e.clientX - window.innerWidth / 2) * 0.012,
        y: (e.clientY - window.innerHeight / 2) * 0.012,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
      aria-hidden
    >
      {stickers.map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl"
          style={{ left: s.left, top: s.top }}
          animate={{
            x: offset.x,
            y: [0, -10, 0],
            rotate: [-8, 8, -8],
          }}
          transition={{
            y: { duration: 3.5 + i * 0.2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { type: "spring", stiffness: 60, damping: 18 },
          }}
        >
          <span className="glass-panel sticker-peel inline-flex rounded-2xl px-2.5 py-1.5 opacity-80 shadow-sm">
            {s.emoji}
          </span>
        </motion.span>
      ))}
    </div>
  );
}
