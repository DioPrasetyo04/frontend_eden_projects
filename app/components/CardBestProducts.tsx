"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  HiStar,
  HiCheck,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { getPropertiesArray } from "../utils/helpers";
import {
  BestProductBenefit,
  BestProductImage,
} from "../types/productunggulan";
import { BestProductInterface } from "../interface/productunggulan";

export default function CardBestProduct({ bestProducts }: BestProductInterface) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = getPropertiesArray<BestProductImage>(bestProducts.images, {
    getValue: (img) => img.image,
    fallback: "/images/placeholder.jpg",
  });

  const benefits = getPropertiesArray<BestProductBenefit>(
    bestProducts.benefits,
    {
      getValue: (benefit) => benefit.description,
      fallback: "",
    },
  );

  const currentImage = images[currentImageIndex];

  return (
    <div className="relative group w-[280px] sm:w-[320px]">
      {/* Shadow layer */}
      <div className="absolute inset-0 rounded-3xl bg-black/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative bg-white rounded-3xl border border-slate-100 shadow-md transition-all duration-500 ease-out transform-gpu will-change-transform group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col h-full">
        {/* Image */}
        <div className="relative h-52 w-full rounded-t-3xl bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
          {/* Rating */}
        {/* ⭐ Rating Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-full shadow-md">
          <HiStar className="w-8 h-8 text-yellow-400" />
          <span className="text-md font-bold text-slate-700">
            {bestProducts.rating ?? 5}
          </span>
        </div>


          {/* Premium */}
          <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            PREMIUM
          </div>

          <Image
            src={currentImage}
            alt={bestProducts.name}
            fill
            className="object-contain p-6 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentImageIndex((i) =>
                    i === 0 ? images.length - 1 : i - 1,
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
              >
                <HiChevronLeft />
              </button>

              <button
                onClick={() =>
                  setCurrentImageIndex((i) =>
                    (i + 1) % images.length,
                  )
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
              >
                <HiChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4 flex-1">
          <h3 className="text-2xl font-bold text-center text-slate-800 group-hover:text-blue-600 transition">
            {bestProducts.name}
          </h3>

          <ul className="space-y-2 flex-1">
            {benefits.map((b, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-slate-500"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <HiCheck className="w-3 h-3 text-white" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="text-center py-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {bestProducts.price}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 justify-center items-center text-center">
            <Link
              href={`/product/${bestProducts.slug}`}
              className="border border-slate-200 rounded-xl py-2 text-sm font-bold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition"
            >
              Lihat Detail
            </Link>

            <button className="rounded-xl py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition shadow">
              <PiWhatsappLogoFill className="inline w-5 h-5 mr-1" />
              Pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
