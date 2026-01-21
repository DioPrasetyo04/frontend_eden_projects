"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiStar, HiArrowRight, HiCheck, HiShoppingCart, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { PiWhatsappLogoFill } from "react-icons/pi";

export type CoffinProduct = {
  id: string;
  name: string;
  price: string;
  images: (string | StaticImageData)[];
  category: string;
  rating: number;
  slug: string;
  benefits: string[];
};

interface CoffinCardProps {
  product: CoffinProduct;
}

export default function CoffinCard({ product }: CoffinCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="group relative w-[280px] sm:w-[320px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 flex flex-col items-center h-full">
      {/* Image Container */}
      <div className="relative h-52 w-full bg-slate-50 overflow-hidden">
        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-slate-100 shadow-sm">
           <HiStar className="w-4 h-4 text-yellow-500" />
           <span className="text-xs font-bold text-slate-700">{product.rating}.0</span>
        </div>
        <div className="absolute top-4 right-4 z-20 bg-slate-900/5 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 tracking-wide uppercase border border-white/20">
            {product.category}
        </div>

        {/* Image Gallery */}
        <div className="relative w-full h-full transition-all duration-500 filter grayscale group-hover:grayscale-0 group-active:grayscale-0">
          <Image
            src={product.images[currentImageIndex]}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>

        {/* Navigation Arrows (Visible on Hover if multiple images) */}
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white/80 shadow-md text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white/80 shadow-md text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
              {product.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-slate-800' : 'bg-slate-300'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 w-full flex-1 pt-2">
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-800 font-serif leading-tight text-center mt-2">
          {product.name}
        </h3>

        {/* Benefits Checklist */}
        <ul className="space-y-2 flex-1">
          {product.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-500">
              <div className="mt-0.5 min-w-4">
                <HiCheck className="w-4 h-4 text-emerald-500" />
              </div>
              <span className="leading-tight">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Price with Animation */}
        <div className="text-center py-2">
            <div className="inline-block relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                {product.price}
                </span>
            </div>
        </div>

        {/* Action Buttons (Split Layout) */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
           <Link
            href={`/product/${product.slug}`}
            className="flex items-center justify-center px-4 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            Lihat Detail
          </Link>
          
          <button
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
             <PiWhatsappLogoFill className="w-5 h-5" />
             <span>Pesan</span>
          </button>
        </div>
      </div>
    </div>
  );
}
