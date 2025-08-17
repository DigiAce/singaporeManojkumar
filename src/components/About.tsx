import type React from "react";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Star,
  Target,
  Camera,
  Rocket,
  Smartphone,
  Video,
  TrendingUp,
  Users,
  Zap,
  MessageCircle,
} from "lucide-react";

const About: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    // {
    //   id: 1,
    //   title: "Creative Strategy",
    //   description:
    //     "Developing unique content strategies that captivate and engage your audience.",
    //   icon: "🎯",
    //   iconComponent: Target,
    //   gradient: "from-mobile-primary to-mobile-secondary",
    // },
    // {
    //   id: 2,
    //   title: "Visual Storytelling",
    //   description:
    //     "Crafting compelling visual narratives that resonate with your brand identity.",
    //   icon: "📸",
    //   iconComponent: Camera,
    //   gradient: "from-mobile-secondary to-mobile-accent",
    // },
    // {
    //   id: 3,
    //   title: "Growth Mastery",
    //   description:
    //     "Implementing proven techniques to accelerate your social media growth.",
    //   icon: "🚀",
    //   iconComponent: Rocket,
    //   gradient: "from-mobile-accent to-mobile-primary",
    // },
    {
      id: 1,
      title: "Mobile-First Content",
      description:
        "Creating thumb-stopping content optimized for mobile consumption and engagement.",
      icon: "📱",
      iconComponent: Smartphone,
      gradient: "from-mobile-primary to-mobile-accent",
    },
    {
      id: 2,
      title: "Viral Video Creation",
      description:
        "Producing short-form videos that capture attention and drive viral engagement.",
      icon: "🎬",
      iconComponent: Video,
      gradient: "from-mobile-secondary to-mobile-primary",
    },
    {
      id: 3,
      title: "Trend Mastery",
      description:
        "Staying ahead of trends and adapting content for maximum reach and impact.",
      icon: "📈",
      iconComponent: TrendingUp,
      gradient: "from-mobile-accent to-mobile-secondary",
    },
  ];

  // Enhanced bubble colors for each card
  const bubbleColors = [
    ["#FB923C", "#FBBF24", "#34D399", "#818CF8"], // Orange, Amber, Emerald, Indigo
    ["#EC4899", "#8B5CF6", "#3B82F6", "#10B981"], // Pink, Violet, Blue, Emerald
    ["#6366F1", "#8B5CF6", "#F43F5E", "#FBBF24"], // Indigo, Violet, Rose, Amber
    ["#FB923C", "#EAB308", "#22C55E", "#3B82F6"], // Mobile-focused colors
    ["#F97316", "#FBBF24", "#8B5CF6", "#EC4899"], // Video creation colors
    ["#EAB308", "#FB923C", "#10B981", "#6366F1"], // Trend colors
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-mobile-primary/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-mobile-secondary/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 bg-mobile-accent/20 rounded-full blur-xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-mobile-primary/10 backdrop-blur-sm border border-mobile-primary/20 rounded-full px-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-mobile-primary" />
              <span className="text-mobile-primary font-medium text-sm">
                MOBILE CONTENT MASTERY
              </span>
            </motion.div>

            {/* Main Heading with Gradient */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.h2
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-mobile-primary via-mobile-secondary to-mobile-accent text-transparent bg-clip-text">
                  Mobile Content
                </span>
              </motion.h2>
              {/* <motion.h2
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-mobile-primary via-mobile-secondary to-mobile-accent text-transparent bg-clip-text">
                  Creator
                </span>
              </motion.h2> */}
              <motion.h2
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-mobile-primary via-mobile-secondary to-mobile-accent bg-clip-text text-transparent">
                  Creator
                </span>
              </motion.h2>
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.p
              className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Transform your creative vision into thumb-stopping mobile content
              that drives engagement, builds communities, and accelerates growth
              across all platforms.
            </motion.p>

            {/* Enhanced Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className="relative p-6 rounded-2xl bg-card/80 backdrop-blur-lg border border-border/50 shadow-mobile overflow-hidden cursor-pointer group hover:shadow-glow"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 40, scale: 0.9 }
                  }
                  whileHover={{ scale: 1.05, y: -5 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  transition={{
                    duration: 0.8,
                    delay: 1.1 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {/* Multi-colored bubbles */}
                  <AnimatePresence>
                    {hoveredCard === index &&
                      bubbleColors[index].map((color, i) => (
                        <motion.div
                          key={`bubble-${i}`}
                          className="absolute rounded-full pointer-events-none"
                          style={{
                            backgroundColor: color,
                            width: "30px",
                            height: "30px",
                            top:
                              i === 0
                                ? "15%"
                                : i === 1
                                ? "65%"
                                : i === 2
                                ? "80%"
                                : "35%",
                            left:
                              i === 0
                                ? "15%"
                                : i === 1
                                ? "70%"
                                : i === 2
                                ? "25%"
                                : "75%",
                            zIndex: 1,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1.5, 2, 0],
                            opacity: [0, 0.7, 0.4, 0],
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                  </AnimatePresence>

                  {/* Card Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <card.iconComponent className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Card content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-card-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Floating Sparkle */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Star className="w-4 h-4 text-mobile-primary/60" />
                  </motion.div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-mobile-primary/5 to-mobile-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              {/* Phone Frame */}
              <motion.div
                className="relative w-80 h-[640px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl"
                whileHover={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 35px 70px -12px rgba(251, 146, 60, 0.6)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  ],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                {/* Phone Notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-full z-20"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-full z-30"></div>

                {/* Phone Screen */}
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-mobile-primary via-mobile-secondary to-mobile-accent rounded-[2.5rem] overflow-hidden relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{ duration: 1.2, delay: 0.8 }}
                >
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-4 pt-8 text-white text-sm font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-3 h-1 bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Video Content */}
                  <div className="px-4 pb-8 h-full flex flex-col">
                    {/* Video Player */}
                    <motion.div
                      className="relative bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden flex-1 mb-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0.9, opacity: 0 }
                      }
                      transition={{ duration: 1, delay: 1.2 }}
                    >
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src="/img/1.mp4" type="video/mp4" />
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-mobile-primary to-mobile-secondary">
                          <div className="text-center text-white">
                            <motion.div
                              className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm"
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.8, 1, 0.8],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                            </motion.div>
                            <p className="text-lg font-bold mb-1">
                              Mobile Content
                            </p>
                            <p className="text-xs opacity-90">
                              Creative Showcase
                            </p>
                          </div>
                        </div>
                      </video>

                      {/* Video UI Elements */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                            <span className="text-sm font-medium">
                              @manoj_creator
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="cursor-pointer"
                            >
                              <Users className="w-5 h-5 text-white" />
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="cursor-pointer"
                            >
                              <MessageCircle className="w-5 h-5 text-white" />
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="cursor-pointer"
                            >
                              <Zap className="w-5 h-5 text-white" />
                            </motion.div>
                          </div>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-1">
                          <motion.div
                            className="bg-white rounded-full h-1"
                            initial={{ width: "0%" }}
                            animate={{ width: "65%" }}
                            transition={{ duration: 2, delay: 1.5 }}
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Mobile Metrics */}
                    <motion.div
                      className="grid grid-cols-3 gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.8, delay: 1.4 }}
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-white">2.4M</div>
                        <div className="text-xs text-white/80">Views</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-white">156K</div>
                        <div className="text-xs text-white/80">Likes</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-white">
                          12.8K
                        </div>
                        <div className="text-xs text-white/80">Shares</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating UI Elements */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/60 rounded-full"
                      style={{
                        left: `${15 + i * 12}%`,
                        top: `${30 + (i % 3) * 15}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Phone Reflection */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[3rem] pointer-events-none"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Enhanced Decorative Elements */}
              <motion.div
                className="absolute -inset-12 bg-gradient-to-r from-mobile-primary/20 via-mobile-secondary/30 to-mobile-accent/20 rounded-full -z-10 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Orbiting Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-mobile-primary to-mobile-secondary rounded-full shadow-lg"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    rotate: [0, 360],
                    x: [0, Math.cos((i * 120 * Math.PI) / 180) * 200],
                    y: [0, Math.sin((i * 120 * Math.PI) / 180) * 200],
                  }}
                  transition={{
                    duration: 12 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
        {/* Call to Action Section */}
        <motion.div
          className="text-center mt-24 space-y-8 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Ready to Join the Content Creation Course?
            <br />
            <span className="text-mobile-primary">Click the Button Below</span>
          </motion.h3>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeG0td7pb273qQiXgLBwzokURBMHjKGpY5wnRVsnqIfAnsC6Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="bg-gradient-to-r from-mobile-primary via-mobile-secondary to-mobile-accent text-white font-bold py-4 px-8 rounded-full text-lg shadow-glow hover:scale-105 transition-all duration-300 mt-11"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              Join Now
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
