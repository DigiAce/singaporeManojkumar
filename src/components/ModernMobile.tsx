"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const HeroMobile = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-orange-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/img/kar-bg.png"
          alt="Content Creator Portrait"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 py-8">
        {/* Top Content */}
        <div className="flex-1 flex flex-col justify-center pt-20">
          {/* Intro Text */}
          <motion.p
            className="text-orange-400 text-lg mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hey, I'm a
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="text-white text-5xl sm:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Content
            <br />
            Creator
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            className="text-white text-xl sm:text-2xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Great content should feel authentic.
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            From concept to creation, I build content that connects and
            converts.
          </motion.p>
        </div>

        {/* Bottom Services Grid */}
        <motion.div
          className="grid grid-cols-2 gap-6 mt-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="space-y-2">
            <p className="text-orange-400 font-bold text-sm">#01</p>
            <h3 className="text-white text-base font-medium">
              Content Strategy
            </h3>
          </div>
          <div className="space-y-2">
            <p className="text-orange-400 font-bold text-sm">#02</p>
            <h3 className="text-white text-base font-medium">
              Social Media Growth
            </h3>
          </div>
          <div className="space-y-2">
            <p className="text-orange-400 font-bold text-sm">#03</p>
            <h3 className="text-white text-base font-medium">
              Visual Storytelling
            </h3>
          </div>
          <div className="space-y-2">
            <p className="text-orange-400 font-bold text-sm">#04</p>
            <h3 className="text-white text-base font-medium">
              Brand Development
            </h3>
          </div>
        </motion.div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/60 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroMobile;
