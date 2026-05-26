/**
 * Stable demo images via Picsum (seeded — reliable, no broken Unsplash IDs).
 * Replace with your CDN / product photography in production.
 */
const pic = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
  heroMobile: pic("wow-hero-mobile", 800, 1000),
  heroDesktop: pic("wow-hero-desk", 1000, 800),
  sticker: pic("wow-stickers", 800, 600),
  magnet: pic("wow-magnet", 800, 800),
  keychain: pic("wow-keychain", 800, 800),
  frame: pic("wow-frame", 800, 1000),
  canvas: pic("wow-canvas", 800, 1000),
  friends: pic("wow-friends", 800, 600),
  desk: pic("wow-desk-setup", 800, 600),
  gift: pic("wow-gift", 600, 600),
  journal: pic("wow-journal", 600, 800),
  ugc1: pic("wow-ugc-1", 600, 900),
  ugc2: pic("wow-ugc-2", 600, 900),
  ugc3: pic("wow-ugc-3", 600, 900),
  ugc4: pic("wow-ugc-4", 600, 900),
  ugc5: pic("wow-ugc-5", 600, 900),
  ugc6: pic("wow-ugc-6", 600, 900),
  gallery: [
    pic("wow-g-1", 600, 800),
    pic("wow-g-2", 600, 600),
    pic("wow-g-3", 600, 900),
    pic("wow-g-4", 600, 700),
    pic("wow-g-5", 600, 600),
    pic("wow-g-6", 600, 800),
    pic("wow-g-7", 600, 600),
    pic("wow-g-8", 600, 900),
  ],
} as const;

export const mockupDefaults = {
  sticker: images.sticker,
  magnet: images.magnet,
  keychain: images.keychain,
  frame: images.frame,
  canvas: images.canvas,
} as const;
