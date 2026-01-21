import HeroCarousel from "./components/HeroCarousel";
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
                        iconPath={service.iconPath} // Changed to iconPath
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
