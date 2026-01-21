"use client";

import { motion } from "framer-motion";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
}

export default function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  return (
    <motion.span 
      className={`relative inline-block pb-3 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        {text}
      </span>
      <motion.span
        className="absolute bottom-0 left-0 h-1.5 bg-blue-600 rounded-full"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.5, 
          ease: "easeOut" 
        }}
      />
    </motion.span>
  );
}
