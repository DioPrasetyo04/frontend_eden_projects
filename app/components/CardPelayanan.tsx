import React from "react";

export type CardColor = "blue" | "purple" | "emerald" | "indigo";

export type CardPelayananProps = {
  title: string;
  description: string;
  iconPath: string; // Changed from svg: React.ReactNode
  color?: CardColor;
  delay?: number;
};


const colorStyles = {
  blue: {
    bg: "from-blue-600 to-blue-700",
    border: "border-blue-500 hover:border-blue-400",
    hoverBg: "hover:from-blue-500 hover:to-blue-600",
    shadow: "hover:shadow-blue-500/50",
    iconBg: "bg-linear-to-br from-blue-500 to-blue-600",
    iconShadow: "shadow-blue-500/40",
  },
  purple: {
    bg: "from-purple-600 to-purple-700",
    border: "border-purple-500 hover:border-purple-400",
    hoverBg: "hover:from-purple-500 hover:to-purple-600",
    shadow: "hover:shadow-purple-500/50",
    iconBg: "bg-linear-to-br from-purple-500 to-purple-600",
    iconShadow: "shadow-purple-500/40",
  },
  emerald: {
    bg: "from-emerald-600 to-emerald-700",
    border: "border-emerald-500 hover:border-emerald-400",
    hoverBg: "hover:from-emerald-500 hover:to-emerald-600",
    shadow: "hover:shadow-emerald-500/50",
    iconBg: "bg-linear-to-br from-emerald-500/10 to-emerald-600/5", // Kept original distinctive style for emerald
    iconShadow: "shadow-emerald-500/40",
  },
  indigo: {
    bg: "from-indigo-600 to-indigo-700",
    border: "border-indigo-500 hover:border-indigo-400",
    hoverBg: "hover:from-indigo-500 hover:to-indigo-600",
    shadow: "hover:shadow-indigo-500/50",
    iconBg: "bg-linear-to-br from-indigo-300/10 to-indigo-400/15", // Kept original distinctive style for indigo
    iconShadow: "shadow-indigo-500/40",
  },
};


const CardPelayanan = ({ 
  title, 
  description, 
  iconPath, // Changed from svg to iconPath
  color = "blue",
  delay = 3 
}: CardPelayananProps & { iconPath?: string }) => { // Extended props temporarily or update type definition
  const styles = colorStyles[color];

  return (
    <div className={`animate-in-right delay-${delay}`}>
      <div className={`group bg-gradient-to-br ${styles.bg} backdrop-blur-xl rounded-2xl p-6 border ${styles.border} ${styles.hoverBg} transition-all duration-500 hover:shadow-2xl ${styles.shadow} cursor-pointer h-full`}>
        <div className={`w-14 h-14 ${styles.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg ${styles.iconShadow}`}>
           {/* Render SVG using path */}
           <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d={iconPath} />
           </svg>
        </div>
        <h3 className="text-white font-bold mb-2 text-base">{title}</h3>
        <p className="text-slate-300/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardPelayanan;
