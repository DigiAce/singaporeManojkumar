import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  aspectRatio: number;
  poster?: string;
}

const UnfilteredCreativity: React.FC = () => {
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const mediaItems: MediaItem[] = [
    { id: "1", type: "image", src: "/img/5.jpeg", aspectRatio: 1.5 },
    { id: "2", type: "image", src: "/img/2.PNG", aspectRatio: 1.25 },
    { id: "3", type: "video", src: "/img/1.mp4", aspectRatio: 1.8 },
    { id: "4", type: "image", src: "/img/3.PNG", aspectRatio: 1.75 },
    { id: "5", type: "image", src: "/img/4.PNG", aspectRatio: 1.375 },
    { id: "6", type: "video", src: "/img/2.mp4", aspectRatio: 1.6 },
    { id: "7", type: "video", src: "/img/3.mp4", aspectRatio: 1.25 },
    {
      id: "8",
      type: "image",
      src: "/img/5.jpeg",
      aspectRatio: 1,
    },
    { id: "9", type: "video", src: "/img/4.mp4", aspectRatio: 1.625 },
    {
      id: "10",
      type: "image",
      src: "/img/1.PNG",
      aspectRatio: 1.4,
    },
    { id: "11", type: "video", src: "/img/5.mp4", aspectRatio: 1.3 },
    {
      id: "12",
      type: "image",
      src: "/img/5.jpeg",
      aspectRatio: 1.45,
    },
    { id: "13", type: "video", src: "/img/6.mp4", aspectRatio: 1.7 },
  ];

  const handleVideoInView = async (videoId: string, inView: boolean) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    try {
      if (inView) {
        video.load();
        video.currentTime = 0;

        if (video.readyState < 3) {
          await new Promise((resolve) => {
            const onCanPlay = () => {
              video.removeEventListener("canplay", onCanPlay);
              resolve(true);
            };
            video.addEventListener("canplay", onCanPlay);
          });
        }

        const playPromise = video.play();
        if (playPromise !== undefined) await playPromise;
      } else {
        video.pause();
        video.currentTime = 0;
      }
    } catch {
      video.controls = true;
    }
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-r from-orange-50 to-slate-50 py-20 px-4 relative"
      id="unfiltered-creativity"
    >
      {/* Header */}
      <div className="relative flex justify-center items-center h-[200px] mb-16">
        {/* Background Text like 'MANOJ' */}
        <h1 className="absolute text-[32px] md:text-[80px] lg:text-[100px] font-extrabold text-slate-300 opacity-40 select-none tracking-wider z-0">
          ACHIEVEMENTS
        </h1>
      </div>

      {/* Masonry Layout: Mixed Videos & Images */}
      <div className="max-w-7xl mx-auto bg-[linear-gradient(rgba(251,146,60,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.08)_1px,transparent_1px)] bg-[size:50px_50px]">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {mediaItems.map((item, index) => (
            <MediaCard
              key={item.id}
              item={item}
              index={index}
              onVideoInView={handleVideoInView}
              videoRef={(el) => {
                if (item.type === "video") {
                  videoRefs.current[item.id] = el;
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MediaCardProps {
  item: MediaItem;
  index: number;
  onVideoInView: (videoId: string, inView: boolean) => void;
  videoRef: (el: HTMLVideoElement | null) => void;
}

const MediaCard: React.FC<MediaCardProps> = ({
  item,
  index,
  onVideoInView,
  videoRef,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const videoInView = useInView(cardRef, { margin: "-50px" });

  useEffect(() => {
    if (item.type === "video") {
      onVideoInView(item.id, videoInView);
    }
  }, [videoInView, item]);

  return (
    <motion.div
      ref={cardRef}
      className="break-inside-avoid mb-6 group cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white">
        {item.type === "image" ? (
          <motion.img
            src={item.src}
            alt={`Creative work ${item.id}`}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: `1 / ${item.aspectRatio}` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <>
            <motion.video
              ref={videoRef}
              src={item.src}
              poster={item.poster}
              className="w-full h-auto object-cover"
              style={{ aspectRatio: `1 / ${item.aspectRatio}` }}
              muted
              loop
              playsInline
              preload="metadata"
              autoPlay
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute bottom-4 right-4">
              <motion.div
                className="w-3 h-3 bg-orange-600 rounded-full shadow-lg"
                animate={{
                  scale: videoInView ? [1, 1.3, 1] : 1,
                  opacity: videoInView ? [0.7, 1, 0.7] : 0.5,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </>
        )}

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </div>
    </motion.div>
  );
};

export default UnfilteredCreativity;
