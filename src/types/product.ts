export type Product = {
  id: string;
  name: string;
  farmName: string;
  location: string;
  pricePerKg: number; // price in taka for 1 kg
  image: string;
  alt: string;
  available: boolean;
};