"use client";

import { ServiceItem } from "@/app/types/service";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <Link href={service.href} className="block h-full">
      <div className="group relative h-full bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center overflow-hidden">
        {/* Hover Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-y-6 w-full">
          {/* Icon Container */}
          <div className="text-slate-700 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
            <Icon size={80} strokeWidth={1} />
          </div>

          {/* Title */}
          <h3 className="text-slate-800 font-bold text-lg group-hover:text-blue-700 transition-colors duration-300">
            {service.title}
          </h3>
        </div>

        {/* Footer / Action */}
        <div className="relative z-10 w-full mt-6 pt-4 border-t border-slate-100 group-hover:border-blue-100 transition-colors duration-300">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-blue-600 transition-all duration-300">
                <span>Lihat Detail</span>
                <HiArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
