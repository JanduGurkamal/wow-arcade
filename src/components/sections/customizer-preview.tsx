"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ImagePlus, Sparkles, Wand2, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProductMockup } from "@/components/customizer/product-mockup";
import { customizerProducts } from "@/lib/data";
import { cn } from "@/lib/utils";

const ACCEPT = "image/jpeg,image/png,image/webp,image/heic,image/heif";

export function CustomizerPreviewSection() {
  const [active, setActive] =
    useState<(typeof customizerProducts)[number]["id"]>("sticker");
  const [dragging, setDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const applyFile = useCallback((file: File | null) => {
    setError(null);
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image (JPG, PNG, or WebP).");
      return;
    }

    if (file.size > 12 * 1024 * 1024) {
      setError("Image must be under 12MB.");
      return;
    }

    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(file);
    });
    setFileName(file.name);
  }, []);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const clearPhoto = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setFileName(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) applyFile(file);
    },
    [applyFile]
  );

  return (
    <section
      id="customize"
      className="relative z-10 scroll-mt-20 py-16 sm:py-24"
      aria-labelledby="customize-heading"
    >
      <Container>
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">
            Your photos → real products
          </p>
          <h2
            id="customize-heading"
            className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl"
          >
            Upload. Preview. Obsess.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-brown-soft sm:text-base">
            Your photos deserve more than your camera roll. Drag a pic and see
            it on stickers, magnets, keychains &amp; more.
          </p>
        </Reveal>

        <Reveal className="mt-10" delay={0.1}>
          <div className="overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
            <div className="flex w-max gap-2 sm:mx-auto sm:w-fit sm:flex-wrap sm:justify-center">
              {customizerProducts.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                    active === p.id
                      ? "bg-ink text-warm-white shadow-[var(--shadow-float)] scale-105"
                      : "glass-panel text-ink hover:bg-pink/30"
                  )}
                >
                  <span>{p.emoji}</span>
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal delay={0.15}>
            <input
              ref={inputRef}
              type="file"
              accept={ACCEPT}
              className="sr-only"
              onChange={(e) => applyFile(e.target.files?.[0] ?? null)}
            />
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              className={cn(
                "relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border-2 border-dashed p-6 transition-all duration-300 sm:min-h-[360px] sm:p-8",
                dragging
                  ? "border-pink-deep bg-pink/25 scale-[1.01]"
                  : "border-pink/50 bg-gradient-to-br from-pink/20 via-cream to-lavender/30",
                previewUrl && "border-solid border-pink-deep/40"
              )}
            >
              {previewUrl ? (
                <>
                  <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-3xl border-4 border-warm-white shadow-lg sm:h-48 sm:w-48">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewUrl}
                      alt="Your upload preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="max-w-[220px] truncate text-center text-sm font-semibold text-ink">
                    {fileName}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-pink-deep">
                    <Sparkles className="h-4 w-4" />
                    Ready — see mockup →
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="mt-4 gap-1"
                    onClick={clearPhoto}
                  >
                    <X className="h-4 w-4" />
                    Remove photo
                  </Button>
                </>
              ) : (
                <>
                  <motion.div
                    animate={
                      dragging ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
                    }
                    className="rounded-full bg-warm-white p-5 shadow-lg"
                  >
                    <ImagePlus
                      className="h-10 w-10 text-pink-deep"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <p className="mt-4 text-center font-semibold text-ink">
                    Drop your memory here
                  </p>
                  <p className="mt-1 text-center text-sm text-muted">
                    or tap to upload — JPG, PNG, WebP
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6"
                    onClick={() => inputRef.current?.click()}
                  >
                    Choose photo
                  </Button>
                </>
              )}
              {error && (
                <p className="mt-3 text-center text-sm font-medium text-pink-deep">
                  {error}
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sticker-shadow sm:p-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted">
                  Live mockup
                </span>
                <span className="flex items-center gap-1 rounded-full bg-pink/30 px-2 py-1 text-[10px] font-bold text-ink">
                  <Wand2 className="h-3 w-3" />
                  {previewUrl ? "Your photo" : "Demo preview"}
                </span>
              </div>

              <motion.div
                key={`${active}-${previewUrl ?? "demo"}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
              >
                <ProductMockup type={active} photoUrl={previewUrl} />
              </motion.div>

              <p className="mt-4 text-center text-sm text-brown-soft">
                {previewUrl
                  ? "This is how your upload looks on this product."
                  : "Upload a photo to see your design here."}
              </p>
              <MagneticButton
                variant="pink"
                className="mt-4 w-full"
                size="lg"
                type="button"
                onClick={() => {
                  if (!previewUrl) inputRef.current?.click();
                }}
              >
                {previewUrl ? "Add to cart" : "Upload to customize"}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
