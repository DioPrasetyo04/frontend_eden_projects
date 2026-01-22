
import { Sponsor } from "../interface/sponsor";

export const getSponsors = async (): Promise<Sponsor[]> => {
  try {
    const res = await fetch("http://localhost:3001/sponsors", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch sponsors");
    return res.json();
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    return [];
  }
};
