"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  Instagram,
  Youtube,
  Sparkles,
  Star,
  Zap,
  Facebook,
} from "lucide-react";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const TikTokIcon = ({ color = "#fff" }) => (
  <svg
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="1em"
    height="1em"
  >
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
  </svg>
);

const AnimatedHero: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Circle fade-in with enhanced animation
    if (circleRef.current) {
      tl.fromTo(
        circleRef.current,
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: "power3.out" }
      );
    }

    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { scale: 0, y: 200, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5"
      );
    }
  }, []);

  const socialLinks: SocialLink[] = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/singaporehobbymanoj?igsh=MTk5eGFyY2xuMTU1OA%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Singaporehobbymanoj",
      label: "YouTube",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1M6ZyRBomS/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@singaporehobbymanoj?_t=ZS-8yedTkX1fML&_r=1",
      label: "TikTok",
    },
  ];

  return (
    <div className="h-[80vh] md:min-h-screen  relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-black">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-400/30 to-amber-400/30 rounded-full blur-xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Radial Glow Effect */}
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/20 via-transparent to-transparent" />
      </div>

      {/* Enhanced Center Circle */}
      <div
        ref={circleRef}
        className="absolute rounded-full z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(251,146,60,0.8) 0%, rgba(234,88,12,0.6) 100%)",
          border: "2px solid rgba(251,146,60,0.3)",
          boxShadow: `
            0 0 50px rgba(251,146,60,0.4),
            0 0 100px rgba(251,146,60,0.2),
            inset 0 0 50px rgba(251,146,60,0.1)
          `,
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
          {/* Hero Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
            </motion.div>
            <span className="text-orange-300 font-bold text-sm tracking-wider">
              CONTENT CREATOR
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Star className="w-4 h-4 text-amber-400" />
            </motion.div>
          </motion.div>

          {/* Enhanced Text positioned above the circle */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-8 relative z-0">
            <motion.div
              className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-black leading-none tracking-tight flex flex-wrap justify-center items-center gap-2 sm:gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.span
                className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                MA
              </motion.span>
              <motion.span
                className="stroke-text-enhanced"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                NOJ KU
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                MAR
              </motion.span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Transforming Ideas into{" "}
              <span className="text-orange-400 font-bold">Viral Content</span>
            </motion.p>
          </div>

          {/* Character Image - Enhanced positioning */}
          <motion.div
            ref={imageRef}
            className="absolute z-25 top-[-28%] md:top-auto"
            style={{
              bottom: "calc(50% - 500px)",
              left: "",
              // transform: "translateX(-50%)",
            }}
            // whileHover={{ scale: 1.02, y: -10 }}
            // transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative z-30">
              {/* Glow Effect Behind Image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-orange-500/30 via-transparent to-transparent rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <img
                src="/img/main-manoj.png"
                alt="Manoj Kumar - Content Creator"
                className="h-[1000px] md:h-[800px] lg:h-[900px] w-full object-contain object-bottom relative z-50s"
                style={{
                  filter:
                    "drop-shadow(0 20px 40px rgba(0,0,0,0.4)) drop-shadow(0 0 20px rgba(251,146,60,0.3))",
                }}
              />

              {/* Floating Elements Around Image */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          {/* Copyright - Enhanced */}
          <motion.div
            className="text-gray-300 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1 hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="font-medium flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              Copyright © 2024 Manoj Kumar. All Rights Reserved
            </div>
            <div className="text-gray-400 text-xs mt-1">
              Privacy Policy | Terms | Contact
            </div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex gap-4 order-1 sm:order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className="group relative w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl flex items-center justify-center text-white hover:text-orange-400 transition-all duration-300 border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 + index * 0.1 }}
                  target="_blank"
                >
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  />

                  <Icon className="w-5 h-5 relative z-10" />

                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {social.label}
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .stroke-text-enhanced {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
          -webkit-text-fill-color: transparent;
          color: transparent;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 640px) {
          .stroke-text-enhanced {
            -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.8);
          }
        }

        .bg-radial-gradient {
          background: radial-gradient(
            circle at center,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </div>
  );
};

export default AnimatedHero;
