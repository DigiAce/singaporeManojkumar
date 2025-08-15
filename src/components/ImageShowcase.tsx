import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
}

const ImageShowcase: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sample media items - you can replace these with your actual images/videos
  const mediaItems: MediaItem[] = [
    {
      id: "1",
      type: "image",
      src: "/img/1.PNG",
      title: "Mountain Landscape",
      description: "Breathtaking mountain views at golden hour",
    },
    {
      id: "2",
      type: "image",
      src: "/img/2.PNG",
      title: "Ocean Waves",
      description: "Serene ocean waves meeting the shore",
    },
    {
      id: "3",
      type: "image",
      src: "/img/3.PNG",
      title: "Forest Path",
      description: "A mystical path through ancient woods",
    },
    {
      id: "4",
      type: "video",
      src: "/img/4.PNG",
      title: "Nature Documentary",
      description: "Beautiful nature scenes in motion",
    },
  ];

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-slate-50 py-20 px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent mb-4">
              Visual Stories
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Immerse yourself in a curated collection of stunning visuals that
            tell extraordinary stories
          </motion.p>
        </motion.div>

        {/* Main Showcase */}
        <motion.div variants={itemVariants} className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Display */}
            <motion.div
              className="relative group"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                  >
                    {mediaItems[selectedIndex].type === "image" ? (
                      <img
                        src={mediaItems[selectedIndex].src}
                        alt={mediaItems[selectedIndex].title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    )}

                    {/* Overlay Controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 right-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsFullscreen(true)}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Maximize2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full opacity-15"
                animate={{
                  rotate: -360,
                  y: [-5, 5, -5],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            </motion.div>

            {/* Content Panel */}
            <motion.div variants={itemVariants} className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <motion.h3
                      className="text-4xl font-bold text-slate-800"
                      layoutId="title"
                    >
                      {mediaItems[selectedIndex].title}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-slate-600 leading-relaxed"
                      layoutId="description"
                    >
                      {mediaItems[selectedIndex].description}
                    </motion.p>
                  </div>

                  <motion.div
                    className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {mediaItems[selectedIndex].type === "video" ? (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Play Video
                      </>
                    ) : (
                      <>
                        <Maximize2 className="w-5 h-5 mr-2" />
                        View Full Size
                      </>
                    )}
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Thumbnail Navigation */}
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {mediaItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setSelectedIndex(index)}
                    className={`flex-shrink-0 relative overflow-hidden rounded-xl transition-all duration-300 ${
                      index === selectedIndex
                        ? "ring-4 ring-orange-600 ring-offset-2"
                        : "hover:ring-2 hover:ring-orange-300 hover:ring-offset-1"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-20 h-16 bg-slate-200">
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    {index === selectedIndex && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-orange-600/20"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Images" },
            { number: "50+", label: "Videos" },
            { number: "4K", label: "Quality" },
            { number: "24/7", label: "Access" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={mediaItems[selectedIndex].src}
                alt={mediaItems[selectedIndex].title}
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageShowcase;
