import { CoffinProduct } from "../types/coffin";

export async function getCoffinProducts(): Promise<CoffinProduct[]> {
  try {
    const res = await fetch("http://localhost:3001/coffinProducts", {
      cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch coffin products");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching coffin products:", error);
    return [];
  }
}
