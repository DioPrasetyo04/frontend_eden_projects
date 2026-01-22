"use client";

import ServiceCard from "./components/ServiceCard";
import CardLayananKedukaan from "./components/CardLayananKedukaan";
import AnimatedHeadline from "./components/AnimatedHeadline";
import CardBestProduct from "./components/CardBestProducts";
import SponsorSection from "./components/SponsorSection";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroSection from "./components/hero-section";

export default function HomeClient({
  heroSlides,
  services,
  heroServices,
  paketDukas,
  coffinProducts,
  bestProducts,
  sponsors,
}: any) {
  return (
    <section className="min-h-screen bg-slate-50">
      <HeroSection
        title={
          <>
            <AnimatedHeadline text="Layanan Kedukaan" />
            <br />
            Kami menyediakan segala kebutuhan anda
          </>
        }
        subtitle="Layanan pemakaman 24/7 yang profesional dan terpercaya."
        actions={[
          {
            text: "Jelajahi Layanan",
            href: "/layanan",
            variant: "default",
          },
          {
            text: "💬 Konsultasi Gratis",
            href: "https://wa.me/6282211111415",
            variant: "outline",
          },
        ]}
        images={[
          "https://images.unsplash.com/photo-1494972308805-463bc619d34e",
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        ]}

        socialProof={{
            avatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
            ],
            value: "1000+",
            label: "keluarga terbantu",
        }}
        />

      {/* SERVICES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in-bottom">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-2xl font-bold rounded-full mb-4">
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
          {services.map((service: any) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </section>

      {/* BEST PRODUCTS */}
        <section
        id="jasa-layanan-peti"
        className="relative px-5 mt-[60px]"
        >
            <div className="text-center mb-16 animate-in-bottom">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-3xl font-bold rounded-full mb-4">
            Products Berkualitas
          </span>
          <h2 className="sm:text-md md:text-lg text-xl font-bold text-slate-900 mb-4">
            Koleksi Produk ini tersedia selama 24/7 dan sangat berkualitas yang kami punya
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Berbagai pilihan terbaik untuk penghormatan terakhir
          </p>
        </div>
        
  <Swiper
  spaceBetween={16}
  slidesPerView="auto"
  grabCursor={true}
  touchStartPreventDefault={false}
  className="!overflow-visible pb-10 touch-pan-x"
>
  {bestProducts.map((product: any) => (
    <SwiperSlide
      key={product.id}
      className="!w-[280px] sm:!w-[320px]"
    >
      <CardBestProduct bestProducts={product} />
    </SwiperSlide>
  ))}
</Swiper>

        </section>



      {/* BENEFITS */}
      <section className="py-24 max-w-7xl mx-auto px-4">
         <div className="text-center mb-16 animate-in-bottom">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-xl font-bold rounded-full mb-4">
            Benefit Pelayanan Kami
          </span>
          <h2 className="text-2xl sm:text-3 xl font-bold text-slate-900 mb-4">
            Benefit Pelayanan Kedukaan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami merincikan benefit pelayanan kedukaan yang lengkap dan melayani selama 24/7
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paketDukas.map((paket: any) => (
            <CardLayananKedukaan key={paket.id} product={paket} />
          ))}
        </div>
      </section>

      {/* sponsors */}
      <SponsorSection sponsors={sponsors} />
    </section>
  );
}
