// ============================================================
// Kiara's Quality Cleaning Service — editable site content.
// Change anything here and the whole site updates.
// ============================================================

import aboutDetail from "@/assets/gallery-detail-1.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import afterBathroom from "@/assets/after-bathroom.jpg";
import beforeBathroom from "@/assets/before-bathroom.jpg";
import galleryBathroom from "@/assets/gallery-bathroom-2.jpg";
import galleryBedroom from "@/assets/gallery-bedroom-1.jpg";
import galleryGarage from "@/assets/gallery-garage-1.jpg";
import galleryGym from "@/assets/gallery-gym-1.jpg";
import galleryKitchen from "@/assets/gallery-kitchen-1.jpg";
import galleryLaundry from "@/assets/gallery-laundry-1.jpg";
import galleryLiving from "@/assets/gallery-living-1.jpg";
import gallerySalon from "@/assets/gallery-salon-1.jpg";
import heroImage from "@/assets/hero-living.jpg";
import reelBathroomPoster from "@/assets/reel-bathroom-poster.jpg";
import reelBedroomPoster from "@/assets/reel-bedroom-poster.jpg";
// lovable-assets pointer: resolves to the served video URL
import reelKitchenPointer from "@/assets/reel-kitchen.mp4.asset.json";

type AssetPointer = { url: string };

export const site = {
  name: "Kiara's Quality Cleaning Service",
  shortName: "Kiara's",
  phone: "(423) 287-7090",
  phoneHref: "tel:+14232877090",
  tagline: "Professional • Reliable • Detail-Oriented",
  serviceArea: "Georgia & Chattanooga Area",
  bookingBadge: "Now Booking",
  offer: {
    name: "Welcome Clean",
    description:
      "Your first week of service free for first-time clients — experience the Kiara's standard before you commit.",
    note: "New clients only · Applies to recurring service plans",
  },
};

// ---------- About (edit freely — no invented history) ----------
export const about = {
  eyebrow: "Meet Your Cleaner",
  title: "Care You Can See in Every Corner",
  portrait: aboutPortrait,
  detail: aboutDetail,
  paragraphs: [
    "Kiara's Quality Cleaning Service was built on a simple belief: a spotless home is the foundation of a more beautiful life. Every visit is approached the same way — unhurried, thorough, and finished to a standard you can feel.",
    "From baseboards to ceiling corners, salon chairs to garage floors, we treat every space like it belongs to someone who deserves beautiful things. Because you do.",
  ],
  signature: "Kiara's Quality Cleaning Service",
  signatureRole: "Professional • Reliable • Detail-Oriented",
};

// ---------- Services ----------
export type Service = {
  name: string;
  description: string;
  icon: string; // lucide icon key
  note?: string;
};

export const services: Service[] = [
  {
    name: "Standard Cleaning",
    description:
      "The essential refresh — surfaces, floors, kitchen, and baths restored to a beautiful, lived-in-ready shine.",
    icon: "sparkles",
  },
  {
    name: "Deep Cleaning",
    description:
      "Walls, baseboards, and the details most services skip. A full reset for spaces that deserve more than a pass-through.",
    icon: "brush",
    note: "Walls · Baseboards & More",
  },
  {
    name: "Move-In / Move-Out",
    description:
      "Hand-back clean for landlords and a flawless welcome for the next chapter of your life.",
    icon: "truck",
  },
  {
    name: "Salon Cleaning",
    description:
      "Discreet, detailed care for stations, mirrors, and chairs — so your space reflects the experience you sell.",
    icon: "scissors",
  },
  {
    name: "Garage Cleaning",
    description:
      "Sweeping, degreasing, and clearing the space — the garage becomes the cleanest room in the house.",
    icon: "warehouse",
  },
  {
    name: "Personal Gym Cleaning",
    description:
      "Equipment sanitized, mirrors polished, floors detailed — a private gym that feels like a luxury studio.",
    icon: "dumbbell",
  },
  {
    name: "Weekly & Bi-Weekly Plans",
    description:
      "A recurring rhythm of spotless. Same day, same standard, every single visit.",
    icon: "calendar",
  },
  {
    name: "Laundry Services",
    description:
      "Pickup or drop-off — crisp, folded, and returned ready for the shelf.",
    icon: "shirt",
    note: "Pickup or Drop-Off",
  },
  {
    name: "Couch Cleaning",
    description:
      "Deep-cleaned upholstery, refreshed and revived — the sofa looks and feels new again.",
    icon: "sofa",
    note: "Starting at $100",
  },
  {
    name: "Caulking",
    description:
      "Showers and tubs re-caulked with a crisp, clean line — mildew gone for good.",
    icon: "droplets",
    note: "Showers & Tubs",
  },
  {
    name: "Small Hole Repair",
    description:
      "Wall patch-ups finished smooth and paint-ready. Little flaws, gone.",
    icon: "hammer",
    note: "Wall Patch-Ups",
  },
  {
    name: "Carpet Cleaning",
    description:
      "Steam-deep carpet cleaning that lifts the room — see pricing below.",
    icon: "layers",
  },
];

export const carpetPricing = {
  title: "Carpet Cleaning Pricing",
  note: "Whole-home refreshes available on request.",
  tiers: [
    { rooms: "1 Room", price: "$50" },
    { rooms: "2 Rooms", price: "$80" },
    { rooms: "3 or More Rooms", price: "$120" },
  ],
};

// ---------- Why choose ----------
export const whyChoose = [
  {
    title: "Reliability You Can Set By",
    description:
      "Scheduled days, dependable arrival, no chasing us down. Your routine, kept.",
    icon: "clock",
  },
  {
    title: "Obsessive Attention to Detail",
    description:
      "Corners, edges, grout lines, and the places eyes don't land but standards do.",
    icon: "search",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Morning, midday, or evening — weekly or bi-weekly plans that bend to your life.",
    icon: "calendar",
  },
  {
    title: "Professional Service, Always",
    description:
      "Respectful, discreet, and polished in your home — every visit, every time.",
    icon: "badge",
  },
  {
    title: "Your Satisfaction, the Standard",
    description:
      "We clean until the space earns its own reflection. That is the only finish line.",
    icon: "heart",
  },
];

// ---------- Gallery (masonry) ----------
export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export const gallery: GalleryImage[] = [
  { src: galleryKitchen, alt: "Spotless luxury kitchen", caption: "Kitchen, gleaming" },
  { src: galleryLiving, alt: "Immaculate living room", caption: "Living room, refreshed" },
  { src: galleryBedroom, alt: "Serene cleaned bedroom", caption: "Bedroom, reset" },
  { src: galleryBathroom, alt: "Polished bathroom", caption: "Bathroom, polished" },
  { src: gallerySalon, alt: "Spotless salon interior", caption: "Salon, guest-ready" },
  { src: galleryGarage, alt: "Deep cleaned garage", caption: "Garage, cleared" },
  { src: galleryGym, alt: "Sanitized personal gym", caption: "Private gym, sanitized" },
  { src: galleryLaundry, alt: "Fresh organized laundry room", caption: "Laundry, crisp" },
];

// ---------- Before / After ----------
export const beforeAfter = {
  before: beforeBathroom,
  after: afterBathroom,
  beforeLabel: "Before",
  afterLabel: "After",
  caption: "A bathroom returned to its first day.",
};

// ---------- Reels — exactly 3 ----------
export type Reel = {
  title: string;
  subtitle: string;
  poster: string;
  // Put your own video URL here (mp4 link, or leave "" to show the styled
  // placeholder frame until a video is ready).
  videoUrl: string;
};

export const reels: Reel[] = [
  {
    title: "Kitchen",
    subtitle: "The full transformation",
    poster: galleryKitchen,
    videoUrl: (reelKitchenPointer as AssetPointer).url,
  },
  {
    title: "Bathroom",
    subtitle: "Grout to glass, renewed",
    poster: reelBathroomPoster,
    videoUrl: "", // add your bathroom reel video URL here
  },
  {
    title: "Bedroom",
    subtitle: "Serene, every visit",
    poster: reelBedroomPoster,
    videoUrl: "", // add your bedroom reel video URL here
  },
];

// ---------- Testimonials (placeholders — replace with real reviews) ----------
export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Replace with a real customer's words — what they noticed first, and why they'll book again.",
    name: "Customer Name",
    location: "City, GA",
    placeholder: true,
  },
  {
    quote: "Replace with a real customer's words — a detail you caught that other cleaners never did.",
    name: "Customer Name",
    location: "City, TN",
    placeholder: true,
  },
  {
    quote: "Replace with a real customer's words — how it felt to walk back into the space.",
    name: "Customer Name",
    location: "City, GA",
    placeholder: true,
  },
];

// ---------- Service area (verified cities only) ----------
export type MapLocation = {
  name: string;
  state: string;
  coords: [number, number];
};

export const serviceArea = {
  title: "Service Area",
  region: "Georgia & Chattanooga Area",
  description:
    "Proudly serving the Chattanooga region and communities across Northwest Georgia.",
  center: [34.95, -85.15] as [number, number],
  zoom: 7,
  locations: [
    { name: "Chattanooga", state: "TN", coords: [35.0456, -85.3097] },
    { name: "Hixson", state: "TN", coords: [35.192, -85.228] },
    { name: "Ooltewah", state: "TN", coords: [35.0923, -85.1216] },
    { name: "Cleveland", state: "TN", coords: [35.1595, -84.8766] },
    { name: "Ringgold", state: "GA", coords: [34.9159, -85.111] },
    { name: "Rossville", state: "GA", coords: [34.8587, -85.291] },
    { name: "Dalton", state: "GA", coords: [34.7698, -84.9702] },
    { name: "LaFayette", state: "GA", coords: [34.7045, -85.2833] },
    { name: "Calhoun", state: "GA", coords: [34.5026, -84.9511] },
    { name: "Rome", state: "GA", coords: [34.257, -85.1647] },
    { name: "Cartersville", state: "GA", coords: [34.1472, -84.8015] },
  ] as MapLocation[],
};

// ---------- Payments ----------
export const payments = [
  { name: "Tap to Pay", detail: "Contactless card payment", icon: "nfc" },
  { name: "Cash App", detail: "Fast mobile payment", icon: "cash" },
  { name: "Venmo", detail: "Pay in the app", icon: "venmo" },
  { name: "Chime", detail: "Bank transfer made easy", icon: "chime" },
  { name: "Email & Text Invoices", detail: "Invoice by inbox or SMS", icon: "invoice" },
];

// ---------- Estimate form service options ----------
export const serviceOptions = [
  ...services.map((s) => s.name),
  "Something Else",
];
