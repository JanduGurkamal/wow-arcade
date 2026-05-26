"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { stickerEmojis } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const stickers = [
  { baseX: -120, baseY: -80, emoji: stickerEmojis[0] },
  { baseX: 130, baseY: -50, emoji: stickerEmojis[1] },
  { baseX: -140, baseY: 60, emoji: stickerEmojis[2] },
  { baseX: 150, baseY: 90, emoji: stickerEmojis[3] },
  { baseX: 0, baseY: -110, emoji: stickerEmojis[4] },
];

export function FloatingStickers() {
  const reduced = usePrefersReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const handler = (e: MouseEvent) => {
      setOffset({
        x: (e.clientX - window.innerWidth / 2) * 0.025,
        y: (e.clientY - window.innerHeight / 2) * 0.025,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] hidden lg:block"
      aria-hidden
    >
      {stickers.map((s, i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-[38%] text-2xl"
          animate={{
            x: s.baseX + offset.x,
            y: [s.baseY + offset.y, s.baseY + offset.y - 14, s.baseY + offset.y],
            rotate: [-10, 10, -10],
          }}
          transition={{
            y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { type: "spring", stiffness: 80, damping: 20 },
          }}
        >
          <span className="glass-panel sticker-peel inline-flex rounded-2xl px-2.5 py-1.5 shadow-md">
            {s.emoji}
          </span>
        </motion.span>
      ))}
    </div>
  );
}
