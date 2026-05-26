"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ImagePlus, Sparkles, X } from "lucide-react";
import { ProductMockup } from "@/components/customizer/product-mockup";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { customizerProducts } from "@/lib/data";
import { cn } from "@/lib/utils";

const ACCEPT = "image/jpeg,image/png,image/webp";

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
      setError("Please choose a JPG, PNG, or WebP image.");
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
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <section
      id="customize"
      className="scroll-mt-24 bg-cream/40 py-20 sm:py-28"
      aria-labelledby="customize-heading"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-2xl text-coffee">start here</p>
          <h2
            id="customize-heading"
            className="mt-2 font-display text-3xl font-medium text-mocha sm:text-4xl"
          >
            Upload a memory, see it come to life
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-taupe sm:text-base">
            Your photos deserve more than a camera roll. Choose a keepsake and
            preview how we&apos;ll craft it by hand.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap justify-center gap-2">
            {customizerProducts.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(p.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm transition-all duration-300",
                  active === p.id
                    ? "bg-mocha text-ivory shadow-[var(--paper-shadow)]"
                    : "border border-border bg-card text-coffee hover:bg-beige"
                )}
              >
                {p.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={0.1}>
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
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                applyFile(e.dataTransfer.files?.[0] ?? null);
              }}
              className={cn(
                "paper-card flex min-h-[300px] flex-col items-center justify-center rounded-3xl border-2 border-dashed p-8 transition-colors",
                dragging ? "border-sage bg-sage-light/20" : "border-sand",
                previewUrl && "border-sage/40"
              )}
            >
              {previewUrl ? (
                <>
                  <div className="polaroid w-44 rotate-[-2deg] sm:w-52">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewUrl}
                      alt="Your upload"
                      className="aspect-square w-full object-cover"
                    />
                    <p className="mt-2 truncate text-center text-xs text-taupe">
                      {fileName}
                    </p>
                  </div>
                  <p className="mt-4 flex items-center gap-1 text-sm text-coffee">
                    <Sparkles className="h-4 w-4 text-sage" strokeWidth={1.5} />
                    Ready for preview
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="mt-3"
                    onClick={clearPhoto}
                  >
                    <X className="h-4 w-4" />
                    Remove
                  </Button>
                </>
              ) : (
                <>
                  <div className="rounded-full bg-blush p-4">
                    <ImagePlus className="h-8 w-8 text-coffee" strokeWidth={1.25} />
                  </div>
                  <p className="mt-4 font-display text-xl text-mocha">
                    Drop your photograph here
                  </p>
                  <p className="mt-1 text-sm text-taupe">or browse from your device</p>
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
                <p className="mt-3 text-sm text-coffee">{error}</p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="paper-card rounded-3xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-coffee">
                Studio preview
              </p>
              <motion.div
                key={`${active}-${previewUrl ?? "demo"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                <ProductMockup type={active} photoUrl={previewUrl} />
              </motion.div>
              <p className="mt-4 text-center text-sm text-taupe">
                {previewUrl
                  ? "Hand-finished preview — your final piece may include subtle borders and polish."
                  : "Upload a photo to see your keepsake."}
              </p>
              <Button
                variant="sage"
                className="mt-6 w-full"
                size="lg"
                onClick={() => !previewUrl && inputRef.current?.click()}
              >
                {previewUrl ? "Continue to order" : "Upload to preview"}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
