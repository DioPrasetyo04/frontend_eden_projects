"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import CoffinCard from "./CoffinCard";
import { CoffinProduct } from "../types/coffin";
import "swiper/css";

interface CoffinSwiperProps {
  coffinProducts: CoffinProduct[];
}

export default function CoffinSwiper({ coffinProducts }: CoffinSwiperProps) {
  return (
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
  );
}
