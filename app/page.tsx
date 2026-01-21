import HeroSection from "@/components/hero-section";
import ServiceCard from "./components/ServiceCard";
import CardPelayanan from "./components/CardPelayanan";
import { ServiceItem } from "@/app/types/service";
import CardLayananKedukaan from "./components/CardLayananKedukaan";
import { getLayananKedukaanData } from "./service/Layanankedukaan.service";
import { HeroServiceData, HeroSlideData } from "./types/hero";
import CoffinSwiper from "./components/CoffinSwiper";
import CoffinCard from "./components/CoffinCard";
import { getHeroSlides, getHeroServices } from "./service/hero.service";
import { getServices } from "./service/service.service";
import { getCoffinProducts } from "./service/coffin.service";
import { Users, Clock, Star } from "lucide-react";

export default async function Home() {
  // Fetch all data in parallel
  const [heroSlides, services, heroServices, paketDukas, coffinProducts] = await Promise.all([
    getHeroSlides(),
    getServices(),
    getHeroServices(),
    getLayananKedukaanData(),
    getCoffinProducts(),
  ]);

  return (
    <section className="min-h-screen bg-slate-50">
      <HeroSection
        title={
          <>
            Eden Layanan Kedukaan,
            <br />
            Membantu dan Melayani
          </>
        }
        subtitle="Jasa pemakaman profesional yang siap membantu Anda dengan penuh dedikasi dan penghormatan di saat-saat yang sulit."
        actions={[
          {
            text: "Lihat Layanan",
            href: "/layanan",
            variant: "default",
          },
          {
            text: "Hubungi Sekarang",
            href: "https://wa.me/6282211111415",
            variant: "outline",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        ]}
        stats={[
          {
            value: "1000+",
            label: "Keluarga Terbantu",
            icon: <Users className="h-5 w-5 text-muted-foreground" />,
          },
          {
            value: "24/7",
            label: "Siap Melayani",
            icon: <Clock className="h-5 w-5 text-muted-foreground" />,
          },
          {
            value: "5.0",
            label: "Rating Google",
            icon: <Star className="h-5 w-5 text-muted-foreground" />,
          },
        ]}
        images={[
          "https://images.unsplash.com/photo-1494972308805-463bc619d34e?q=80&w=2071&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop",
        ]}
      />


      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in-bottom">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-4">
            All Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Layanan Kedukaan Profesional
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami menyediakan layanan kedukaan lengkap dengan tim profesional
            yang siap membantu Anda 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </section>

      <section id="jasa-layanan-peti" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-16 animate-in-bottom">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-4">
            Koleksi Peti Jenazah
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Pilihan Peti Berkualitas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Berbagai pilihan peti jenazah dengan kualitas terbaik untuk penghormatan terakhir
          </p>
        </div>

        <CoffinSwiper coffinProducts={coffinProducts} />
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in-bottom">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-4">
            Benefit Pelayanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Benefit Pelayanan Kedukaan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami merincikan benefit pelayanan kedukaan yang lengkap dan melayani selama 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paketDukas.length > 0 ? (
            paketDukas.map((paketDuka) => (
              <CardLayananKedukaan key={paketDuka.id} product={paketDuka} />
            ))
          ) : (
             <div className="col-span-full text-center text-slate-500">
               Data tidak ditemukan atau gagal dimuat.
             </div>
          )}
        </div>

      </section>
    </section>
  );
}
