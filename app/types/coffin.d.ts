import { StaticImageData } from "next/image";

export type CoffinProduct = {
  id: string;
  name: string;
  price: string;
  images: (string | StaticImageData)[];
  category: string;
  rating: number;
  slug: string;
  benefits: string[];
};
