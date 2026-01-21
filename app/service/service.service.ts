import { ServiceItem } from "../types/service";

export async function getServices(): Promise<ServiceItem[]> {
  try {
    const res = await fetch("http://localhost:3001/services", {
      cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch services");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}
