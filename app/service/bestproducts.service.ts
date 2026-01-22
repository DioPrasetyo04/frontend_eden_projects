import { BestProducts } from "../types/productunggulan";

export async function getBestProducts(): Promise<BestProducts[]> {
  try {
    const res = await fetch("http://localhost:3001/productsUnggulan", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Best Products");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching coffin products:", error);
    return [];
  }
}
