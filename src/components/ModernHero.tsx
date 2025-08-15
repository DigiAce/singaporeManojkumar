import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ModernHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-orange-900">
      {/* Main Hero Content */}
      <div className="relative flex flex-col md:flex-row min-h-screen">
        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 md:py-0 md:w-1/2">
          <motion.p
            className="text-orange-500 text-xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hey, I&apos;m a
          </motion.p>

          <motion.h1
            className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Content
            <br />
            Creator
          </motion.h1>

          <motion.div
            className="mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div>
                <p className="text-orange-500 font-medium mb-2">#01</p>
                <h3 className="text-white text-lg">Content Strategy</h3>
              </div>
              <div>
                <p className="text-orange-500 font-medium mb-2">#02</p>
                <h3 className="text-white text-lg">Social Media Growth</h3>
              </div>
              <div>
                <p className="text-orange-500 font-medium mb-2">#03</p>
                <h3 className="text-white text-lg">Visual Storytelling</h3>
              </div>
              <div>
                <p className="text-orange-500 font-medium mb-2">#04</p>
                <h3 className="text-white text-lg">Brand Development</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="relative md:absolute md:right-0 md:top-0 md:bottom-0 md:w-3/5 overflow-hidden">
          {/* Image */}
          <div className="relative h-[50vh] md:h-full w-full">
            <div
              className="absolute inset-0 bg-gradient-to-t from-orange-900 via-transparent to-transparent md:bg-gradient-to-l z-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(30, 58, 138, 0) 0%, rgba(30, 58, 138, 0) 40%, rgba(30, 58, 138, 0.8) 100%)",
              }}
            ></div>
            <img
              src="/img/kar-bg.png"
              alt="Content Creator Portrait"
              className="object-cover h-full w-full object-center"
            />
          </div>

          {/* Right side text */}
          <motion.div
            className="absolute top-1/3 right-6 md:right-12 lg:right-20 max-w-xs z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-white text-2xl md:text-3xl font-medium mb-4">
              Great content should feel authentic.
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              From concept to creation, I build content that connects and
              converts.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ModernHero;
