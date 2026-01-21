
import { LayananKedukaan } from "../types/layanankedukaan";

export const DB_URL = process.env.NEXT_PUBLIC_DB_JSON;

export const getLayananKedukaanData = async (): Promise<LayananKedukaan[]> => {
  try {
    const res = await fetch("http://localhost:3001/layanankedukaan", {
      cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data || []; // API returns the array directly now
  } catch (error) {
    console.error("Error fetching layanan kedukaan data:", error);
    return [];
  }
};