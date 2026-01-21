"use client";

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

// CountUp component for animated numbers
function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, count, rounded]);

  return (
    <span>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

// Define the props for reusability
interface SocialProofProps {
  avatars: string[];
  value: string;
  label: string;
}

interface ActionProps {
  text: string;
  href: string;
  variant?: ButtonProps['variant'];
  className?: string;
  target?: string;
  rel?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  socialProof: SocialProofProps;
  images: string[];
  className?: string;
}

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const HeroSection = ({ title, subtitle, actions, socialProof, images, className }: HeroSectionProps) => {
  return (
    <section className={cn('w-full min-h-screen overflow-hidden bg-background flex items-center', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 py-12 sm:py-0">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p className="mt-4 sm:mt-6 max-w-md text-base sm:text-lg text-muted-foreground" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.div className="mt-6 sm:mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 lg:justify-start" variants={itemVariants}>
            {actions.map((action, index) => (
              <Button 
                key={index} 
                variant={action.variant} 
                size="lg" 
                className={cn("w-full sm:w-auto", action.className)}
                asChild
              >
                <a href={action.href} target={action.target} rel={action.rel}>
                  {action.text}
                </a>
              </Button>
            ))}
          </motion.div>
          <motion.div className="mt-8 sm:mt-12 flex items-center justify-center gap-4 lg:justify-start" variants={itemVariants}>
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {socialProof.avatars.map((avatar, index) => (
                <div
                  key={index}
                  className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white dark:ring-slate-900"
                  style={{ zIndex: socialProof.avatars.length - index }}
                >
                  <img
                    src={avatar}
                    alt={`User ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Stat Text */}
            <div>
              <p className="text-lg text-left font-bold text-foreground">
                {(() => {
                  const numericMatch = socialProof.value.match(/^([\d.]+)(.*)$/);
                  const numericValue = numericMatch ? parseFloat(numericMatch[1]) : null;
                  const suffix = numericMatch ? numericMatch[2] : socialProof.value;
                  return numericValue !== null ? (
                    <CountUp value={numericValue} suffix={suffix} />
                  ) : (
                    socialProof.value
                  );
                })()}
              </p>
              <p className="text-sm text-muted-foreground">{socialProof.label}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[400px] w-full sm:h-[500px] lg:h-[600px] hidden lg:block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Shapes */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-blue-200/50 dark:bg-blue-800/30"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-purple-200/50 dark:bg-purple-800/30"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '0.5s' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-green-200/50 dark:bg-green-800/30"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
          />

          {/* Images */}
          <motion.div
            className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-2xl bg-muted p-2 shadow-lg sm:h-72 sm:w-72"
            style={{ transformOrigin: 'bottom center' }}
            variants={imageVariants}
          >
            <img src={images[0]} alt="Service image 1" className="h-full w-full rounded-xl object-cover" />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/3 h-48 w-48 rounded-2xl bg-muted p-2 shadow-lg sm:h-64 sm:w-64"
            style={{ transformOrigin: 'left center' }}
            variants={imageVariants}
          >
            <img src={images[1]} alt="Service image 2" className="h-full w-full rounded-xl object-cover" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-40 w-40 rounded-2xl bg-muted p-2 shadow-lg sm:h-56 sm:w-56"
            style={{ transformOrigin: 'top right' }}
            variants={imageVariants}
          >
            <img src={images[2]} alt="Service image 3" className="h-full w-full rounded-xl object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
