"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-ivory/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <Button variant="sage" size="lg" className="w-full" asChild>
        <Link href="#customize">Begin your keepsake</Link>
      </Button>
    </div>
  );
}
