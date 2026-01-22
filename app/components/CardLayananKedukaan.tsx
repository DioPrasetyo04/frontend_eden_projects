"use client";

import Image from "next/image";
import { LayananKedukaanProduct } from "../interface/layananKedukaan";
import Link from "next/link";
import { HiCheck } from "react-icons/hi";

const CardLayananKedukaan = ({ product }: LayananKedukaanProduct) => {
  return (
    <div className="group relative w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-500 flex flex-col transform hover:-translate-y-2">
      {/* Image Container with Gradient Overlay */}
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Image with hover effects */}
        <div className="relative w-full h-full transition-all duration-700 ease-out group-hover:scale-110">
          <Image
            src={product.images}
            alt={product.name}
            fill
            className="object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Decorative Corner Accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Title with animated underline effect */}
        <div className="relative">
          <h3 className="text-lg font-bold text-slate-800 leading-tight text-center group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-16 transition-all duration-500" />
        </div>

        {/* Benefits Checklist with staggered animation */}
        <ul className="space-y-2 flex-1 mt-2">
          {product.benefits.map((benefit, index) => (
            <li
              key={benefit.id}
              className="flex items-start gap-2 text-sm text-slate-600 transition-all duration-300 group-hover:translate-x-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="mt-0.5 min-w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-sm shadow-emerald-500/30 transition-transform duration-300 group-hover:scale-110">
                <HiCheck className="w-3 h-3 text-white" />
              </div>
              <span className="leading-tight">{benefit.description}</span>
            </li>
          ))}
        </ul>

        {/* Action Button with gradient hover */}
        <div className="flex items-center justify-center mt-4 pt-3 border-t border-slate-100">
          <Link
            href={`/LayananKedukaan/${product.slug}`}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 text-slate-600 text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 hover:border-transparent hover:text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Lihat Detail</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Animated border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default CardLayananKedukaan;
