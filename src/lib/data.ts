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
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d426f9b7b?w=800&q=80&auto=format&fit=crop",
    href: "#stickers",
  },
  {
    id: "magnets",
    title: "Fridge Magnets",
    tagline: "Your fridge, your gallery",
    vibe: "aesthetic",
    emoji: "🧲",
    gradient: "from-amber-100/90 via-cream to-pink-100/60",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80&auto=format&fit=crop",
    href: "#magnets",
  },
  {
    id: "keychains",
    title: "Keychains",
    tagline: "Carry your moments",
    vibe: "trendy",
    emoji: "🔑",
    gradient: "from-violet-100/70 via-cream to-peach-100",
    image:
      "https://images.unsplash.com/photo-1606107557195-0a7c8dc4bf1e?w=800&q=80&auto=format&fit=crop",
    href: "#keychains",
  },
  {
    id: "frames",
    title: "Photo Frames",
    tagline: "Memories on display",
    vibe: "emotional",
    emoji: "🖼️",
    gradient: "from-rose-100/80 via-warm-white to-beige",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80&auto=format&fit=crop",
    href: "#frames",
  },
  {
    id: "canvas",
    title: "Custom Canvas",
    tagline: "Wall-worthy moments",
    vibe: "premium",
    emoji: "🎨",
    gradient: "from-orange-100/60 via-cream to-pink-50",
    image:
      "https://images.unsplash.com/photo-1618221197210-5fe3f9c2b0c0?w=800&q=80&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d426f9b7b?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Acrylic Photo Magnet",
    category: "Magnets",
    price: 18,
    tag: "Bestseller",
    color: "bg-amber-50",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Couple Keychain Duo",
    category: "Keychains",
    price: 24,
    tag: "Gift fave",
    color: "bg-violet-50",
    image:
      "https://images.unsplash.com/photo-1606107557195-0a7c8dc4bf1e?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Soft Edge Photo Frame",
    category: "Frames",
    price: 32,
    color: "bg-rose-50",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80&auto=format&fit=crop",
  },
];

export const ugcPosts = [
  {
    id: "1",
    user: "@maya.desk",
    caption: "my fridge is literally a scrapbook now 🥹",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80&auto=format&fit=crop",
    likes: "12.4k",
  },
  {
    id: "2",
    user: "@couple.core",
    caption: "matching keychains >>>",
    image:
      "https://images.unsplash.com/photo-1606107557195-0a7c8dc4bf1e?w=600&q=80&auto=format&fit=crop",
    likes: "8.2k",
  },
  {
    id: "3",
    user: "@travel.journal",
    caption: "every trip gets a sticker now ✈️",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d426f9b7b?w=600&q=80&auto=format&fit=crop",
    likes: "21k",
  },
  {
    id: "4",
    user: "@room.reset",
    caption: "canvas above my desk hits different",
    image:
      "https://images.unsplash.com/photo-1618221197210-5fe3f9c2b0c0?w=600&q=80&auto=format&fit=crop",
    likes: "5.6k",
  },
  {
    id: "5",
    user: "@gift.girl",
    caption: "best friend bday = custom magnets",
    image:
      "https://images.unsplash.com/photo-1513885535758-46798b2630a6?w=600&q=80&auto=format&fit=crop",
    likes: "9.1k",
  },
  {
    id: "6",
    user: "@study.aesthetic",
    caption: "sticker bombing my laptop lol",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80&auto=format&fit=crop",
    likes: "15k",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1611532736597-de2d426f9b7b?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606107557195-0a7c8dc4bf1e?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513885535758-46798b2630a6?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221197210-5fe3f9c2b0c0?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop",
];

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
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d426f9b7b?w=400&q=80&auto=format&fit=crop",
    className: "top-[12%] left-[4%] w-24 sm:w-32 rotate-[-12deg]",
    delay: 0,
  },
  {
    label: "Magnet",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&q=80&auto=format&fit=crop",
    className: "top-[8%] right-[6%] w-28 sm:w-36 rotate-[8deg]",
    delay: 0.2,
  },
  {
    label: "Keychain",
    image:
      "https://images.unsplash.com/photo-1606107557195-0a7c8dc4bf1e?w=400&q=80&auto=format&fit=crop",
    className: "bottom-[28%] left-[2%] w-20 sm:w-28 rotate-[6deg]",
    delay: 0.4,
  },
  {
    label: "Frame",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80&auto=format&fit=crop",
    className: "bottom-[22%] right-[4%] w-24 sm:w-32 rotate-[-6deg]",
    delay: 0.15,
  },
];

export const stickerEmojis = ["✨", "💕", "⭐", "🌸", "📸", "🎀", "🫶", "💫"];
