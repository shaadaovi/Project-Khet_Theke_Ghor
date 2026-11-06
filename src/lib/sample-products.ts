import type { Product } from "@/types/product";

export const sampleProducts: Product[] = [
  {
    id: "tomato",
    name: "Fresh tomato",
    farmName: "Karim Family Farm",
    location: "Savar",
    pricePerKg: 80,
    image: "/images/products/tomato.jpg",
    alt: "A woven basket of ripe red tomatoes",
    available: true,
  },
  {
    id: "eggplant",
    name: "Eggplant",
    farmName: "Karim Family Farm",
    location: "Savar",
    pricePerKg: 100,
    image: "/images/products/eggplant.jpg",
    alt: "A woven basket of purple eggplants",
    available: true,
  },
  {
    id: "cucumber",
    name: "Cucumber",
    farmName: "Karim Family Farm",
    location: "Savar",
    pricePerKg: 60,
    image: "/images/products/cucumber.jpg",
    alt: "A woven basket of green cucumbers",
    available: true,
  },
  {
    id: "guava",
    name: "Fresh guava",
    farmName: "Mina's Orchard",
    location: "Dhamrai",
    pricePerKg: 120,
    image: "/images/products/guava.jpg",
    alt: "A woven basket of guavas, one cut open",
    available: true,
  },
];