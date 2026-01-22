"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Sponsor } from "../interface/sponsor";

interface SponsorSectionProps {
  sponsors: Sponsor[];
}

export default function SponsorSection({ sponsors }: SponsorSectionProps) {

  return (
    <section className="py-24 bg-white overflow-hidden">
        <div className="text-center mb-16 animate-in-bottom">
          <span className="px-4 py-2 text-black text-3xl font-bold rounded-full mb-4">
            Sponsor Kerja Sama
          </span>
        </div>

      <div className="flex flex-col gap-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // Moves to Right
          }}
          className="w-full !ease-linear"
        >
          {sponsors.map((sponsor, index) => (
             <SwiperSlide key={`r1-${sponsor.id}-${index}`} className="!w-auto">
              <div className="w-[200px] h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
           {sponsors.map((sponsor, index) => (
             <SwiperSlide key={`r1-dup-${sponsor.id}-${index}`} className="!w-auto">
              <div className="w-[200px] h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 2: Move Right to Left */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false, // Moves to Left (Standard)
          }}
          className="w-full !ease-linear"
        >
          {sponsors.map((sponsor, index) => (
             <SwiperSlide key={`r2-${sponsor.id}-${index}`} className="!w-auto">
              <div className="w-[200px] h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
           {sponsors.map((sponsor, index) => (
             <SwiperSlide key={`r2-dup-${sponsor.id}-${index}`} className="!w-auto">
              <div className="w-[200px] h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 3: Move Left to Right */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className="w-full !ease-linear"
        >
           {sponsors.map((sponsor, index) => (
             <SwiperSlide key={`r3-${sponsor.id}-${index}`} className="!w-auto">
              <div className="w-[200px] h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
           {sponsors.map((sponsor, index) => (
             <SwiperSlide key={`r3-dup-${sponsor.id}-${index}`} className="!w-auto">
              <div className="w-[200px] h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 4: Move Right to Left */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          className="w-full !ease-linear"
        >
           {sponsors.map((sponsor, index) => (
             <SwiperSlide key={`r4-${sponsor.id}-${index}`} className="!w-auto">
              <div className="w-[200px] h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
           {sponsors.map((sponsor, index) => (
             <SwiperSlide key={`r4-dup-${sponsor.id}-${index}`} className="!w-auto">
              <div className="w-[200px] h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
