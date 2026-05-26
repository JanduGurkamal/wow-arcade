import { images } from "./images";

export type ProductCategory = {
  id: string;
  title: string;
  tagline: string;
  vibe: string;
  emoji: string;
  gradient: string;
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
  color?: string;
};

export type CustomizerProduct = {
  id: "sticker" | "magnet" | "keychain" | "frame" | "canvas";
  label: string;
  emoji: string;
};

export const customizerProducts: CustomizerProduct[] = [
  { id: "sticker", label: "Stickers", emoji: "✨" },
  { id: "magnet", label: "Magnets", emoji: "🧲" },
  { id: "keychain", label: "Keychains", emoji: "🔑" },
  { id: "frame", label: "Frames", emoji: "🖼️" },
  { id: "canvas", label: "Canvas", emoji: "🎨" },
];

export const categories: ProductCategory[] = [
  {
    id: "stickers",
    title: "Custom Stickers",
    tagline: "Peel, stick, slay",
    vibe: "playful",
    emoji: "✨",
    gradient: "from-pink-200/80 via-rose-100 to-cream",
    image: images.sticker,
    href: "#stickers",
  },
  {
    id: "magnets",
    title: "Fridge Magnets",
    tagline: "Your fridge, your gallery",
    vibe: "aesthetic",
    emoji: "🧲",
    gradient: "from-amber-100/90 via-cream to-pink-100/60",
    image: images.magnet,
    href: "#magnets",
  },
  {
    id: "keychains",
    title: "Keychains",
    tagline: "Carry your moments",
    vibe: "trendy",
    emoji: "🔑",
    gradient: "from-violet-100/70 via-cream to-peach-100",
    image: images.keychain,
    href: "#keychains",
  },
  {
    id: "frames",
    title: "Photo Frames",
    tagline: "Memories on display",
    vibe: "emotional",
    emoji: "🖼️",
    gradient: "from-rose-100/80 via-warm-white to-beige",
    image: images.frame,
    href: "#frames",
  },
  {
    id: "canvas",
    title: "Custom Canvas",
    tagline: "Wall-worthy moments",
    vibe: "premium",
    emoji: "🎨",
    gradient: "from-orange-100/60 via-cream to-pink-50",
    image: images.canvas,
    href: "#canvas",
  },
];

export const trendingProducts: Product[] = [
  {
    id: "1",
    name: "Mini Memory Sticker Pack",
    category: "Stickers",
    price: 12,
    tag: "Viral",
    color: "bg-pink-100",
    image: images.sticker,
  },
  {
    id: "2",
    name: "Acrylic Photo Magnet",
    category: "Magnets",
    price: 18,
    tag: "Bestseller",
    color: "bg-amber-50",
    image: images.magnet,
  },
  {
    id: "3",
    name: "Couple Keychain Duo",
    category: "Keychains",
    price: 24,
    tag: "Gift fave",
    color: "bg-violet-50",
    image: images.keychain,
  },
  {
    id: "4",
    name: "Soft Edge Photo Frame",
    category: "Frames",
    price: 32,
    color: "bg-rose-50",
    image: images.frame,
  },
];

export const ugcPosts = [
  {
    id: "1",
    user: "@maya.desk",
    caption: "my fridge is literally a scrapbook now 🥹",
    image: images.ugc1,
    likes: "12.4k",
  },
  {
    id: "2",
    user: "@couple.core",
    caption: "matching keychains >>>",
    image: images.ugc2,
    likes: "8.2k",
  },
  {
    id: "3",
    user: "@travel.journal",
    caption: "every trip gets a sticker now ✈️",
    image: images.ugc3,
    likes: "21k",
  },
  {
    id: "4",
    user: "@room.reset",
    caption: "canvas above my desk hits different",
    image: images.ugc4,
    likes: "5.6k",
  },
  {
    id: "5",
    user: "@gift.girl",
    caption: "best friend bday = custom magnets",
    image: images.ugc5,
    likes: "9.1k",
  },
  {
    id: "6",
    user: "@study.aesthetic",
    caption: "sticker bombing my laptop lol",
    image: images.ugc6,
    likes: "15k",
  },
];

export const galleryImages = images.gallery;

export const emotionalReasons = [
  {
    title: "Memories that stick",
    description:
      "Your camera roll is full of moments that deserve to live outside your phone.",
    emoji: "📸",
  },
  {
    title: "Gifts that feel personal",
    description:
      "For besties, partners, and the person who has everything—except your inside jokes.",
    emoji: "💌",
  },
  {
    title: "Travel, captured cute",
    description:
      "Turn trips into stickers, magnets, and desk treasures you'll actually use.",
    emoji: "✈️",
  },
  {
    title: "Your aesthetic, your rules",
    description:
      "Match your room, your journal, your vibe. Made uniquely for you.",
    emoji: "✨",
  },
];

export const floatingHeroProducts = [
  {
    label: "Sticker",
    image: images.sticker,
    className: "top-[12%] left-[4%] w-24 sm:w-32 rotate-[-12deg]",
    delay: 0,
  },
  {
    label: "Magnet",
    image: images.magnet,
    className: "top-[8%] right-[6%] w-28 sm:w-36 rotate-[8deg]",
    delay: 0.2,
  },
  {
    label: "Keychain",
    image: images.keychain,
    className: "bottom-[28%] left-[2%] w-20 sm:w-28 rotate-[6deg]",
    delay: 0.4,
  },
  {
    label: "Frame",
    image: images.frame,
    className: "bottom-[22%] right-[4%] w-24 sm:w-32 rotate-[-6deg]",
    delay: 0.15,
  },
];

export const stickerEmojis = ["✨", "💕", "⭐", "🌸", "📸", "🎀", "🫶", "💫"];
