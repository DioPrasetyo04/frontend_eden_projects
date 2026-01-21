import { HeroSlideData, HeroServiceData } from "../types/hero";

export async function getHeroSlides(): Promise<HeroSlideData[]> {
  try {
    const res = await fetch("http://localhost:3001/heroSlides", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch hero slides");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching hero slides:", error);
    return [];
  }
}

export async function getHeroServices(): Promise<HeroServiceData[]> {
    try {
      const res = await fetch("http://localhost:3001/heroServices", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch hero services");
      }
      return res.json();
    } catch (error) {
      console.error("Error fetching hero services:", error);
      return [];
    }
}
