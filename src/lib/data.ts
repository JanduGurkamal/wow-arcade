import { images } from "./images";

export type ProductCategory = {
  id: string;
  title: string;
  tagline: string;
  vibe: string;
  image: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  tag?: string;
};

export type CustomizerProduct = {
  id: "sticker" | "magnet" | "keychain" | "frame" | "canvas";
  label: string;
};

export const customizerProducts: CustomizerProduct[] = [
  { id: "sticker", label: "Stickers" },
  { id: "magnet", label: "Magnets" },
  { id: "keychain", label: "Keychains" },
  { id: "frame", label: "Frames" },
  { id: "canvas", label: "Canvas" },
];

export const categories: ProductCategory[] = [
  {
    id: "stickers",
    title: "Custom Stickers",
    tagline: "For journals, laptops & love letters",
    vibe: "scrapbook",
    image: images.sticker,
    href: "#stickers",
  },
  {
    id: "magnets",
    title: "Fridge Magnets",
    tagline: "A quiet gallery of everyday joy",
    vibe: "collectible",
    image: images.magnet,
    href: "#magnets",
  },
  {
    id: "keychains",
    title: "Keychains",
    tagline: "Carry a little piece of home",
    vibe: "keepsake",
    image: images.keychain,
    href: "#keychains",
  },
  {
    id: "frames",
    title: "Photo Frames",
    tagline: "Moments worth displaying softly",
    vibe: "emotional",
    image: images.frame,
    href: "#frames",
  },
  {
    id: "canvas",
    title: "Custom Canvas",
    tagline: "Wall art from your own story",
    vibe: "premium",
    image: images.canvas,
    href: "#canvas",
  },
];

export const trendingProducts: Product[] = [
  {
    id: "1",
    name: "Memory Sticker Sheet",
    category: "Stickers",
    price: 12,
    tag: "Studio favorite",
    image: images.sticker,
  },
  {
    id: "2",
    name: "Acrylic Photo Magnet",
    category: "Magnets",
    price: 18,
    tag: "Bestseller",
    image: images.magnet,
  },
  {
    id: "3",
    name: "Keepsake Keychain",
    category: "Keychains",
    price: 24,
    image: images.keychain,
  },
  {
    id: "4",
    name: "Soft Edge Frame",
    category: "Frames",
    price: 32,
    image: images.frame,
  },
];

export const ugcPosts = [
  {
    id: "1",
    user: "Maya",
    caption: "Our fridge became a little memory board.",
    image: images.ugc1,
  },
  {
    id: "2",
    user: "James & Priya",
    caption: "Matching keychains for our anniversary.",
    image: images.ugc2,
  },
  {
    id: "3",
    user: "Sofia",
    caption: "Every trip earns a sticker in my journal.",
    image: images.ugc3,
  },
  {
    id: "4",
    user: "Elena",
    caption: "The canvas above my desk feels like home.",
    image: images.ugc4,
  },
];

export const galleryImages = images.gallery;

export const emotionalReasons = [
  {
    title: "Memories that stay",
    description:
      "Your camera roll holds chapters of your life — we help them live in your home.",
  },
  {
    title: "Gifts with heart",
    description:
      "For birthdays, long-distance love, and the friend who feels like family.",
  },
  {
    title: "Travel, gently kept",
    description:
      "Cities, coastlines, and Sunday mornings — preserved in tactile form.",
  },
  {
    title: "Crafted for you alone",
    description:
      "Each piece is made to order in our studio, never mass-produced.",
  },
];

export const floatingHeroProducts = [
  { label: "Sticker", image: images.sticker },
  { label: "Magnet", image: images.magnet },
  { label: "Keychain", image: images.keychain },
  { label: "Frame", image: images.frame },
];
