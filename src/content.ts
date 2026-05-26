export type Category = {
  name: string;
  count: string;
  image: string;
};

export type PackingListGroup = "trending" | "saved";

export type PackingList = {
  slug: string;
  title: string;
  meta: string;
  tags: string;
  image: string;
  group: PackingListGroup;
};

export type PostSection = {
  title: string;
  items: string[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  destination: string;
  season: string;
  duration: string;
  bag: string;
  style: string;
  sections: PostSection[];
  forgotten: string[];
};

export const categories: Category[] = [
  {
    name: "Beach",
    count: "12 lists",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Europe",
    count: "9 lists",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ski",
    count: "7 lists",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Business Travel",
    count: "8 lists",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Disney",
    count: "6 lists",
    image: "https://images.unsplash.com/photo-1590144662036-33bf0ebd2c7f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Girls Trip",
    count: "10 lists",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Carry-On Only",
    count: "14 lists",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "National Parks",
    count: "11 lists",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
];

export const packingLists: PackingList[] = [
  {
    slug: "italy-spring-10-days",
    title: "10 Days in Italy in the Spring",
    meta: "Destination guide",
    tags: "italy europe spring city walking",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    group: "trending",
  },
  {
    slug: "hawaii-vacation",
    title: "Hawaii Vacation Packing List",
    meta: "Beach trip",
    tags: "hawaii beach tropical vacation",
    image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=900&q=80",
    group: "trending",
  },
  {
    slug: "ski-trip-essentials",
    title: "Ski Trip Essentials",
    meta: "Cold weather",
    tags: "ski snow winter mountain layers",
    image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=900&q=80",
    group: "trending",
  },
  {
    slug: "new-york-weekend",
    title: "New York City Weekend",
    meta: "Long weekend",
    tags: "new york city weekend carry on",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=900&q=80",
    group: "trending",
  },
  {
    slug: "bachelorette-weekend",
    title: "Bachelorette Weekend",
    meta: "Event packing",
    tags: "girls trip bachelorette party weekend",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=900&q=80",
    group: "saved",
  },
  {
    slug: "family-beach-house",
    title: "Family Beach House Week",
    meta: "Family travel",
    tags: "family beach kids rental house",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
    group: "saved",
  },
  {
    slug: "european-carry-on-capsule",
    title: "European Carry-On Capsule",
    meta: "Carry-on only",
    tags: "europe capsule wardrobe carry on",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80",
    group: "saved",
  },
  {
    slug: "national-park-road-trip",
    title: "National Park Road Trip",
    meta: "Outdoors",
    tags: "national parks road trip hiking camping",
    image: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=900&q=80",
    group: "saved",
  },
];

export const posts: Post[] = [
  {
    slug: "europe-summer-7-day",
    title: "7 Day Europe Summer Packing List",
    description:
      "A printable 7 day Europe summer packing checklist with clothing, shoes, toiletries, documents, electronics, and easy-to-forget items.",
    heroImage:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    destination: "Europe",
    season: "Summer",
    duration: "7 Days",
    bag: "Carry-On Only",
    style: "Casual + Chic",
    sections: [
      {
        title: "Clothing",
        items: ["5 Tops", "2 Dresses", "2 Pairs of Jeans", "1 Light Jacket", "1 Sweater", "Undergarments"],
      },
      {
        title: "Shoes",
        items: ["White Sneakers", "Sandals", "Flats"],
      },
      {
        title: "Toiletries",
        items: ["Toothbrush", "Skincare", "Sunscreen", "Makeup", "Hair Essentials"],
      },
      {
        title: "Electronics",
        items: ["Phone + Charger", "Portable Charger", "Camera", "Universal Adapter"],
      },
      {
        title: "Documents",
        items: ["Passport", "ID", "Credit Cards", "Travel Insurance"],
      },
      {
        title: "Miscellaneous",
        items: ["Water Bottle", "Sunglasses", "Reusable Tote", "Snacks"],
      },
    ],
    forgotten: ["Lint Roller", "Band-Aids", "Safety Pins", "Tide Pen"],
  },
];

