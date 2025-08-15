"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Instagram, Youtube, Linkedin, Twitter, Star } from "lucide-react";

type SocialLink = {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

const HeroMobile = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (circleRef.current) {
      tl.fromTo(
        circleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }

    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { scale: 0, y: 50, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3"
      );
    }
  }, []);

  const socialLinks: SocialLink[] = [
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <div className="h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-black">
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

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-24 px-6 min-h-screen">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:text-orange-400 transition-all duration-300 border border-white/20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>

        {/* Content Creator Badge */}
        <motion.div
          className="bg-gradient-to-r from-orange-800/80 to-amber-700/80 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-8 flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-amber-200 font-bold text-sm tracking-wider">
            CONTENT CREATOR
          </span>
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        </motion.div>

        {/* Name */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
            <span className="text-amber-400">MANOJ </span>
            {/* <span className="name-outline text-amber-400"></span> */}
            <span className="text-amber-400">KUMAR</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-gray-300 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Transforming Ideas into{" "}
          <span className="text-amber-400 font-medium">Viral Content</span>
        </motion.p>

        {/* Circle Background for Image */}
        <div
          ref={circleRef}
          className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(249,115,22,0.9) 0%, rgba(194,65,12,0.8) 100%)",
              boxShadow: "0 0 40px rgba(249,115,22,0.4)",
            }}
          />
        </div>
        {/* Content Creator Image */}

        <motion.div
          ref={imageRef}
          className="relative top-[-290px] z-10 flex justify-center"
        >
          <img
            src="/img/main-manoj.png"
            alt="Manoj Kumar"
            className="h-[700px] w-auto object-contain"
            style={{
              filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.3))",
            }}
          />
        </motion.div>

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

      {/* Custom Styles */}
      <style>{`
        .name-outline {
          -webkit-text-stroke: 1px white;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default HeroMobile;
