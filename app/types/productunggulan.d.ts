export type BestProducts = {
  id: number;
  name: string;
  slug: string;
  price: string;
  rating: number;
  images?: ProductUnggulanImage[];
  category: string;
  benefits?: ProductUnggulanBenefit[];
};

export type BestProductImage = {
  id: number;
  image: string;
  alt: string;
};

export type BestProductBenefit = {
  id: number;
  icon: string;
  description: string;
};
