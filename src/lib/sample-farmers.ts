import type { Farmer } from "@/types/farmer";

export const sampleFarmers: Farmer[] = [
  {
    id: "karim-family-farm",
    farmName: "Karim Family Farm",
    personName: "Abdul Karim",
    location: "Savar, Dhaka",
    description:
      "Tomatoes, eggplant and cucumber from a sample family farm in Savar. The farmer maintains availability, packs orders and is responsible for product quality.",
    image: "/images/farmers/karim.jpg",
    alt: "Portrait of Abdul Karim, a sample farmer, standing in a green field",
  },
  {
    id: "minas-orchard",
    farmName: "Mina's Orchard",
    personName: "Mina Akter",
    location: "Dhamrai, Dhaka",
    description:
      "Guava, papaya and banana from a sample orchard in Dhamrai. Products from a different farmer need a separate order.",
    image: "/images/farmers/mina.jpg",
    alt: "Portrait of Mina Akter, a sample farmer, standing among fruit trees",
  },
];