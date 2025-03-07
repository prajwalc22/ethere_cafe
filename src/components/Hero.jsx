import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  // Auto-play the video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle autoplay issues (often browsers require user interaction first)
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
          {/* Fallback image in case video doesn't load */}
          <img
            src="/images/pexels-adam-lukac-254247-773958.jpg"
            alt="Premium Coffee"
            className="w-full h-full object-cover object-center"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-primary-900/40"></div>
      </div>

      {/* Hero content */}
      <div className="container-custom relative z-10 text-white text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight mb-6">
            Experience the <br />
            <span className="text-gradient">Future of Coffee</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-100 max-w-2xl mx-auto mb-10">
            Indulge in our meticulously crafted premium brews and innovative
            flavors, where artisanal tradition meets futuristic craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary text-lg px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Menu
            </motion.button>
            <motion.button
              className="btn-outline bg-white/10 text-lg px-8 py-3 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Table
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
