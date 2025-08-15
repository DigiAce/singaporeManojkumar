import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Play,
  Users,
  Clock,
  Star,
  Zap,
  ArrowRight,
  Bell,
} from "lucide-react";

const CoursesHero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden py-2 mt-0 md:mt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-32 left-20 w-24 h-24 bg-gradient-to-r from-orange-300/20 to-amber-300/20 rounded-full blur-xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-60 right-32 w-32 h-32 bg-gradient-to-r from-slate-300/20 to-orange-300/20 rounded-full blur-xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
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
          className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-r from-amber-300/20 to-slate-300/20 rounded-full blur-xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Decorative Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3,
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-2 -left-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-6 h-6 text-orange-400" />
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Play className="w-5 h-5 text-amber-500" />
              </motion.div>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            <span className="text-slate-900">Master Content Creation</span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.7,
              }}
            >
              Courses
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-slate-900 font-semibold leading-relaxed mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.9,
            }}
          >
            Comprehensive courses designed to transform you into a successful
            content creator
          </motion.p>

          {/* Supporting Text */}
          <motion.p
            className="text-base md:text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.1,
            }}
          >
            Learn the proven strategies, techniques, and insider secrets that
            have helped thousands of creators build massive followings across
            Instagram, TikTok, and YouTube.
          </motion.p>

          {/* Coming Soon Badge */}
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full px-8 py-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.3,
            }}
          >
            <motion.div
              className="w-3 h-3 bg-orange-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-slate-900 font-bold text-lg">
              Coming Soon
            </span>
          </motion.div>

          {/* Notify Me Button */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.5,
            }}
            className="mb-16"
          >
            <motion.button
              className="group relative bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 overflow-hidden"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <span className="relative flex items-center gap-3">
                <Bell className="w-5 h-5" />
                Notify Me When Available
                <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div> */}

          {/* Course Features Preview */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            {[
              {
                icon: Play,
                title: "Video Lessons",
                description: "Step-by-step tutorials",
                color: "from-orange-500 to-amber-500",
              },
              {
                icon: Users,
                title: "Community Access",
                description: "Connect with creators",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: Zap,
                title: "Live Sessions",
                description: "Interactive workshops",
                color: "from-orange-500 to-amber-500",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 hover:bg-white/80 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Elements */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CoursesHero;
