import { getHeroSlides, getHeroServices } from "./service/hero.service";
import { getServices } from "./service/service.service";
import { getLayananKedukaanData } from "./service/Layanankedukaan.service";
import { getCoffinProducts } from "./service/coffin.service";
import { getBestProducts } from "./service/bestproducts.service";
import { getSponsors } from "./service/sponsor.service";
import HomeClient from "./HomeClient";

export default async function Home() {
  const [
    heroSlides,
    services,
    heroServices,
    paketDukas,
    coffinProducts,
    bestProducts,
    sponsors,
  ] = await Promise.all([
    getHeroSlides(),
    getServices(),
    getHeroServices(),
    getLayananKedukaanData(),
    getCoffinProducts(),
    getBestProducts(),
    getSponsors(),
  ]);

  return (
    <HomeClient
      heroSlides={heroSlides}
      services={services}
      heroServices={heroServices}
      paketDukas={paketDukas}
      coffinProducts={coffinProducts}
      bestProducts={bestProducts}
      sponsors={sponsors}
    />
  );
}
