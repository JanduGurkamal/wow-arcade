"use client";

import Link from "next/link";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function MobileStickyCta() {
  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 glass-panel p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.8 }}
    >
      <Button variant="pink" size="lg" className="w-full shadow-[var(--shadow-float)]" asChild>
        <Link href="#customize">
          <Upload className="h-5 w-5" />
          Upload your photos — it&apos;s free to preview
        </Link>
      </Button>
    </motion.div>
  );
}
