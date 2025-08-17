"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Star,
  Users,
  Clock,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

function CreatorIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: Users,
      text: "Personal Mentorship",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      text: "Flexible Timing",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: CheckCircle,
      text: "Guaranteed Results",
      color: "from-orange-600 to-amber-600",
    },
  ];

  return (
    <section
      id="creator-intro"
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
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

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Personal Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Personal Profile Card */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image Placeholder */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-2xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(251,146,60,0.5)",
                        "0 0 40px rgba(251,146,60,0.8)",
                        "0 0 20px rgba(251,146,60,0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src="/img/solo.JPEG"
                      alt="Manoj Kumar"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </motion.div>

                  {/* Online Status */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>
                </div>

                {/* Personal Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Manoj Kumar
                  </h3>
                  <p className="text-orange-300 font-medium">
                    Content Creator & Mentor
                  </p>
                  {/* <div className="flex items-center justify-center gap-2 mt-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">
                      4.9/5 • 500+ Sessions
                    </span>
                  </div> */}
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center`}
                      >
                        <benefit.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">
                        {benefit.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-8 h-8 text-orange-400" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Call to Action */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.5 }}
              >
                <MessageCircle className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 font-medium text-sm">
                  EXCLUSIVE 1-ON-1
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.7 }}
              >
                <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  Ready to
                </span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.9 }}
                >
                  Transform?
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.1 }}
              >
                Get personalized guidance, proven strategies, and direct access
                to my content creation secrets.{" "}
                <motion.span
                  className="text-orange-400 font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  Limited spots available.
                </motion.span>
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 1.3 }}
              >
                <motion.button
                  className="group relative bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-6 px-12 rounded-2xl text-xl md:text-2xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(251,146,60,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Button Content */}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeG0td7pb273qQiXgLBwzokURBMHjKGpY5wnRVsnqIfAnsC6Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative flex items-center gap-4">
                      Book My Session
                      <motion.div
                        className="flex items-center gap-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </span>
                  </a>

                  {/* Floating Particles */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${15 + i * 10}%`,
                          top: `${20 + (i % 3) * 20}%`,
                        }}
                        animate={{
                          y: [-10, -25, -10],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              {/* <motion.div
                className="mt-8 flex items-center justify-center lg:justify-start gap-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Sessions Done</div>
                </div>
                <div className="w-px h-12 bg-gray-600" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
                <div className="w-px h-12 bg-gray-600" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24h</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatorIntro;
