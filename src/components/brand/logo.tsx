import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  showTagline = false,
  size = "header",
}: {
  className?: string;
  showTagline?: boolean;
  size?: "header" | "footer";
}) {
  const dim =
    size === "footer"
      ? "h-16 w-16 sm:h-20 sm:w-20"
      : "h-12 w-12 sm:h-14 sm:w-14";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="WOW Arcade home"
    >
      <Image
        src="/wow-arcade-logo.png"
        alt="WOW Arcade"
        width={200}
        height={200}
        priority={size === "header"}
        className={cn(
          dim,
          "object-contain transition-opacity group-hover:opacity-90"
        )}
      />
      {showTagline && (
        <span className="hidden font-hand text-xl text-coffee opacity-90 sm:inline">
          handcrafted keepsakes
        </span>
      )}
    </Link>
  );
}
