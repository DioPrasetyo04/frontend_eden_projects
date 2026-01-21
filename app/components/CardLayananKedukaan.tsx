import Image from "next/image";
import { LayananKedukaanProduct } from "../interface/layananKedukaan";
import Link from "next/link";
import { HiCheck } from "react-icons/hi";

const CardLayananKedukaan = ({ product }: LayananKedukaanProduct) => {
  return (
    <div className="group relative w-[200px] h-auto bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 flex flex-col items-center h-full">
      <div className="relative w-full h-full transition-all duration-500 filter grayscale group-hover:grayscale-0 group-active:grayscale-0">
        <img
          src={product.images}
          alt={product.name}
          className="object-contain p-6 w-[120px] flex items-center justify-center mx-auto"
        />
      </div>

      <div className="p-6 flex flex-col gap-4 w-full flex-1 pt-2">
        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-800 font-serif leading-tight text-center mt-2">
          {product.name}
        </h3>

        {/* Benefits Checklist */}
        <ul className="space-y-2 flex-1">
          {product.benefits.map((benefit) => (
            <li
              key={benefit.id}
              className="flex items-start gap-2 text-sm text-slate-500"
            >
              <div className="mt-0.5 min-w-4">
                <HiCheck className="w-4 h-4 text-emerald-500" />
              </div>
              <span className="leading-tight">{benefit.description}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons (Split Layout) */}
        <div className="flex items-center justify-center text-center mt-auto">
          <Link
            href={`/LayananKedukaan/${product.slug}`}
            className="flex items-center justify-center px-4 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            Lihat Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardLayananKedukaan;
