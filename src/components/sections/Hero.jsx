import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import NoticeBoard from "../NoticeBoard";

const CAROUSEL_IMAGES = [
  "/Assets/C1.JPG",
  "/Assets/C2.JPG",
  "/Assets/C3.JPG",
  "/Assets/C4.JPG",
];

const STATS = [
  { value: "23", sup: "yrs", label: "Since Inception" },
  { value: "96", sup: "%", label: "Placement Rate" },
  { value: "18k", sup: "+", label: "Alumni Worldwide" },
  { value: "42", sup: "", label: "Industry Partners" },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-bg text-text relative overflow-hidden min-h-screen flex items-center">
      {/* Full Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-5 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-[600px] lg:min-h-[700px]">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/80 font-bold">Excellence in Engineering</span>
            </div>

            <h1 className="font-serif text-[clamp(48px,10vw,90px)] leading-[1.1] tracking-tight mb-8 text-white font-bold drop-shadow-lg">
              <span className="block">Excellence in</span>
              <span className="block text-accent">Engineering</span>
              <span className="block">Education</span>
            </h1>

            <p className="text-[16px] lg:text-[18px] leading-relaxed max-w-[500px] text-white/85 mb-10 font-light drop-shadow">
              Shaping the next generation of <span className="font-serif italic text-yellow-300">engineers and innovators</span> with world-class education and industry excellence.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <a href="#admissions" className="bg-accent text-black px-8 py-[14px] text-[14px] font-bold tracking-wide rounded-full inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-accent/60 transition-all hover:scale-105 uppercase">
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="text-white px-8 py-[14px] text-[14px] font-semibold border-2 border-white rounded-full hover:bg-white/10 transition-all uppercase backdrop-blur-sm">
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {/* Right - News Card (Glass morphism) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <NoticeBoard variant="dark" limit={3} showViewAll={true} />
          </motion.div>
        </div>
      </div>

      {/* Image Navigation Dots - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all ${
              index === currentImageIndex 
                ? "bg-accent w-8 h-2.5" 
                : "bg-white/40 hover:bg-white/70 w-2.5 h-2.5"
            } rounded-full`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
