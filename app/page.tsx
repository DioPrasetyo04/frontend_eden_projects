"use client";

import HeroCarousel from "./components/HeroCarousel";
import ServiceCard from "./components/ServiceCard";
import CardPelayanan, { CardColor } from "./components/CardPelayanan";
import CoffinCard, { CoffinProduct } from "./components/CoffinCard";
import { ServiceItem } from "@/app/types/service";
import { 
  PiAmbulanceFill, 
PiUserGearFill,   
  PiSyringeFill, 
  PiHouseLineFill, 
  PiFlowerLotusFill, 
  PiCameraFill, 
  PiMotorcycleFill, 
  PiCrossFill, 
  PiFireFill, 
  PiAirplaneTiltFill, 
  PiClipboardTextFill,
} from "react-icons/pi";
import { GiCoffin } from "react-icons/gi";

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

export default function Home() {
  const heroSlides = [
    {
      image: "/images/logos/logo-pemakaman.jpg",
      subtitle: "Explore Innovation",
    },
    {
      image: "/images/logos/logo-pemakaman.jpg",
      subtitle: "Technology Forward",
    },
    {
      image: "/images/logos/logo-pemakaman.jpg",
      subtitle: "Build Tomorrow",
    },
  ];

  const coffinProducts: CoffinProduct[] = [
    {
      id: "1",
      name: "Memphis Luxury",
      price: "Rp 20.950.000",
      images: [
        "/images/products/white-luxury.png",
        "/images/products/classic-white.png", 
        "/images/products/dark-wood.png"
      ],
      category: "Luxury",
      rating: 5,
      slug: "memphis-luxury",
      benefits: [
        "Balur putih finishing high-gloss",
        "Ornamen emas zinc alloy anti-karat",
        "Interior velvet premium",
        "Bantal adjustable & bed system",
      ],
    },
    {
      id: "2",
      name: "Nobel Classic",
      price: "Rp 17.950.000",
      images: [
        "/images/products/classic-white.png",
        "/images/products/white-luxury.png",
      ],
      category: "Signature",
      rating: 5,
      slug: "nobel-classic",
      benefits: [
        "Desain klasik Amerika / Western",
        "Aksen gold corner elegan",
        "Konstruksi hardwood solid",
        "Interior kain satin lembut",
      ],
    },
    {
      id: "3",
      name: "Conrad Wood",
      price: "Rp 15.500.000",
      images: [
        "/images/products/dark-wood.png",
        "/images/products/classic-white.png",
      ],
      category: "Premium",
      rating: 5,
      slug: "conrad-wood",
      benefits: [
        "Kayu mahoni solid pilihan",
        "Finishing dark walnut gloss",
        "Interior crepe premium",
        "Handle metal kokoh",
      ],
    },
    {
      id: "4",
      name: "Brigid White",
      price: "Rp 12.500.000",
      images: [
        "/images/products/classic-white.png", 
        "/images/products/white-luxury.png",
      ],
      category: "Signature",
      rating: 4,
      slug: "brigid-white",
      benefits: [
        "Metal steel 18-gauge tebal",
        "Finishing powder coating putih",
        "Desain minimalis modern",
        "Harga ekonomis & terjangkau",
      ],
    },
  ];

  const services: ServiceItem[] = [
    { id: "1", title: "Mobil Jenazah", icon: PiAmbulanceFill, href: "/layanan/mobil-jenazah" },
    { id: "2", title: "Perapihan Jenazah", icon: PiUserGearFill, href: "/layanan/perapihan-jenazah" },
    { id: "3", title: "Formalin Jenazah", icon: PiSyringeFill, href: "/layanan/formalin-jenazah" },
    { id: "4", title: "Ruang Duka", icon: PiHouseLineFill, href: "/layanan/ruang-duka" },
    { id: "5", title: "Peti Jenazah", icon: GiCoffin, href: "/layanan/peti-jenazah" }, // Using GiCoffin if PiPackage doesn't fit
    { id: "6", title: "Rangkaian Bunga", icon: PiFlowerLotusFill, href: "/layanan/rangkaian-bunga" },
    { id: "7", title: "Foto & Video", icon: PiCameraFill, href: "/layanan/foto-video" },
    { id: "8", title: "Voorijder / Patwal", icon: PiMotorcycleFill, href: "/layanan/voorijder" },
    { id: "9", title: "Tanah Makam", icon: PiCrossFill, href: "/layanan/tanah-makam" },
    { id: "10", title: "Kremasi", icon: PiFireFill, href: "/layanan/kremasi" },
    { id: "11", title: "Cargo Jenazah", icon: PiAirplaneTiltFill, href: "/layanan/cargo-jenazah" },
    { id: "12", title: "Konsultasi Kedukaan", icon: PiClipboardTextFill, href: "/layanan/konsultasi" },
  ];

  const heroServices: {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: CardColor;
    delay: number;
    className?: string;
  }[] = [
    {
      title: "Jasa Pemakaman",
      description: "Layanan pemakaman lengkap & profesional",
      color: "blue",
      delay: 3,
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
    },
    {
      title: "Mobil Jenazah",
      description: "Transportasi cepat & aman",
      color: "purple",
      delay: 4,
      className: "mt-8",
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 9l1.5-4.5h11L19 9H5z" />
        </svg>
      ),
    },
    {
      title: "Proteksi Kedukaan",
      description: "Perlindungan mulai Rp 35.000/bulan",
      color: "emerald",
      delay: 5,
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: "Peti Jenazah",
      description: "Berbagai pilihan berkualitas",
      color: "indigo",
      delay: 6,
      className: "mt-8",
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50">
      <section className="font-poppins text-white overflow-hidden">
        <div className="relative w-full">
          <HeroCarousel
            slides={heroSlides}
            title="Untuk Mereka, Jika Hari Itu Tiba"
            className="w-full"
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32 pointer-events-auto">
              <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center">
                <div className="space-y-6 py-16 sm:py-20 lg:py-24">
                  <div className="animate-in-up delay-1">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-500 border border-blue-400 rounded-full text-white text-sm font-medium backdrop-blur-md hover:bg-blue-500/30 transition-all duration-300">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Layanan 24 Jam Terpercaya
                    </div>
                  </div>

                  <div className="animate-in-up delay-2 space-y-3">
                    <h1 className="text-5xl sm:text-6xl lg:text-4xl font-black leading-tight tracking-tight">
                      Eden Layanan Kedukaan,
                    </h1>
                    <h2 className="text-5xl sm:text-6xl lg:text-4xl font-black bg-linear-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
                      Membantu dan melayani
                    </h2>
                  </div>

                  <p className="animate-in-up delay-3 text-base sm:text-lg text-slate-200 max-w-lg leading-relaxed">
                    jasa pemakaman profesional yang siap
                    membantu Anda dengan penuh dedikasi dan penghormatan di
                    saat-saat yang sulit.
                  </p>

                  <div className="animate-in-up delay-4 flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href="/layanan"
                      className="group inline-flex items-center justify-center px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-lg shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <svg
                        className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Lihat Layanan
                    </a>
                    <a
                      href="https://wa.me/6282211111415"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center px-8 py-3 bg-white/15 hover:bg-white/25 text-white font-bold rounded-lg border border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-green-400 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Hubungi Sekarang
                    </a>
                  </div>

                  <div className="animate-in-up delay-5 grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
                    <div className="text-center sm:text-left">
                      <div className="text-2xl sm:text-3xl font-black text-blue-300 mb-1">
                        1000+
                      </div>
                      <div className="text-slate-300/70 text-xs sm:text-sm font-medium">
                        Keluarga Terbantu
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                        24/7
                      </div>
                      <div className="text-slate-300/70 text-xs sm:text-sm font-medium">
                        Siap Melayani
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-2xl sm:text-3xl font-black text-cyan-300 mb-1">
                        5.0
                      </div>
                      <div className="text-slate-300/70 text-xs sm:text-sm font-medium">
                        Rating Google
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:grid grid-cols-2 gap-6 auto-rows-max pr-4 xl:pr-8">
                  {heroServices.map((service, index) => (
                    <div key={index} className={service.className}>
                      <CardPelayanan
                        title={service.title}
                        description={service.description}
                        color={service.color}
                        delay={service.delay}
                        svg={service.icon}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        <div className="w-full relative">
          <Swiper
            spaceBetween={24}
            slidesPerView={"auto"}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="pb-12"
          >
            {coffinProducts.map((product) => (
              <SwiperSlide key={product.id} className="!w-auto">
                <CoffinCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
}
