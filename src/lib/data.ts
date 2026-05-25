export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  tag?: string;
  description: string;
};

export const collections = [
  {
    id: "magnets",
    title: "Acrylic Magnets",
    subtitle: "Memories that hold",
    description:
      "Crystal-clear acrylic frames your favorite moments—designed for refrigerators that feel like galleries.",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80&auto=format&fit=crop",
    href: "#magnets",
  },
  {
    id: "framed",
    title: "Framed Artwork",
    subtitle: "Gallery at home",
    description:
      "Museum-quality frames with archival prints—each piece curated for calm, modern interiors.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80&auto=format&fit=crop",
    href: "#framed",
  },
  {
    id: "travel",
    title: "Travel & Places",
    subtitle: "Wander, then display",
    description:
      "Location-inspired decor that turns your journeys into daily reminders of where you've been.",
    image:
      "https://images.unsplash.com/photo-1616046229474-9901c5536a45?w=1200&q=80&auto=format&fit=crop",
    href: "#travel",
  },
] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Coastal Morning Magnet Set",
    category: "Magnets",
    price: 48,
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80&auto=format&fit=crop",
    description: "Set of 4 acrylic photo magnets with soft matte edges.",
  },
  {
    id: "2",
    name: "Kyoto Garden Print",
    category: "Framed Art",
    price: 189,
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1618221197210-5fe3f9c2b0c0?w=800&q=80&auto=format&fit=crop",
    description: "Archival giclée print in natural oak frame, 18×24 in.",
  },
  {
    id: "3",
    name: "Paris Map Keepsake",
    category: "Travel",
    price: 72,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef936a0e8?w=800&q=80&auto=format&fit=crop",
    description: "Personalized city map on premium cotton paper.",
  },
  {
    id: "4",
    name: "Family Portrait Magnet",
    category: "Personalized",
    price: 34,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80&auto=format&fit=crop",
    description: "Upload your photo—we craft, polish, and ship within 5 days.",
  },
];

export const testimonials = [
  {
    id: "1",
    quote:
      "The magnets arrived in packaging so beautiful I almost didn't want to open it. They look like tiny art pieces on our fridge.",
    author: "Elena M.",
    location: "Portland, OR",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "We ordered a framed print for our nursery. The quality rivals pieces we've seen in boutique hotels—soft tones, perfect framing.",
    author: "James & Priya K.",
    location: "Austin, TX",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Gifted the travel map keepsake to my parents for their anniversary. They cried. Worth every penny.",
    author: "Sofia R.",
    location: "Brooklyn, NY",
    rating: 5,
  },
] as const;

export const galleryImages = [
  "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616046229474-9901c5536a45?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502672260266-1c1ef936a0e8?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221197210-5fe3f9c2b0c0?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80&auto=format&fit=crop",
] as const;

export const trustPoints = [
  {
    title: "Hand-finished",
    description:
      "Every magnet is polished by hand. Every frame is inspected twice before it leaves our studio.",
  },
  {
    title: "Archival quality",
    description:
      "Fade-resistant inks and museum-grade materials—built to live with you for decades.",
  },
  {
    title: "Thoughtful packaging",
    description:
      "Unboxing should feel like receiving a gift. Recycled luxury materials, zero plastic fuss.",
  },
  {
    title: "Made with care",
    description:
      "Small-batch production means attention to detail big retailers simply cannot match.",
  },
] as const;
