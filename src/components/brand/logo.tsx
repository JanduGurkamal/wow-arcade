import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex flex-col items-start gap-0.5", className)}
      aria-label="WOW Arcade home"
    >
      <Image
        src="/wow-arcade-logo.svg"
        alt="WOW Arcade"
        width={160}
        height={56}
        priority
        className="h-10 w-auto sm:h-12 transition-opacity group-hover:opacity-85"
      />
      {showTagline && (
        <span className="font-hand text-lg text-coffee -mt-1 ml-1 opacity-80">
          handcrafted keepsakes
        </span>
      )}
    </Link>
  );
}
