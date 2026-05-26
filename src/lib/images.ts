/**
 * Demo photography — warm, soft tones. Replace with your product shots.
 */
const pic = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/wow-${seed}/${w}/${h}`;

export const images = {
  heroMobile: pic("memory-board", 800, 1000),
  heroDesktop: pic("studio-desk", 1000, 800),
  sticker: pic("stickers-journal", 800, 600),
  magnet: pic("fridge-magnet", 800, 800),
  keychain: pic("keychain-gift", 800, 800),
  frame: pic("photo-frame", 800, 1000),
  canvas: pic("wall-canvas", 800, 1000),
  friends: pic("friends-memory", 800, 600),
  desk: pic("cozy-desk", 800, 600),
  gift: pic("gift-wrap", 600, 600),
  journal: pic("scrapbook", 600, 800),
  ugc1: pic("ugc-fridge", 600, 900),
  ugc2: pic("ugc-keys", 600, 900),
  ugc3: pic("ugc-travel", 600, 900),
  ugc4: pic("ugc-wall", 600, 900),
  ugc5: pic("ugc-gift", 600, 900),
  ugc6: pic("ugc-desk", 600, 900),
  gallery: [
    pic("g1", 600, 800),
    pic("g2", 600, 600),
    pic("g3", 600, 900),
    pic("g4", 600, 700),
    pic("g5", 600, 600),
    pic("g6", 600, 800),
    pic("g7", 600, 600),
    pic("g8", 600, 900),
  ],
} as const;

export const mockupDefaults = {
  sticker: images.sticker,
  magnet: images.magnet,
  keychain: images.keychain,
  frame: images.frame,
  canvas: images.canvas,
} as const;
