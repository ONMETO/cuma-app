import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import appleLogo from '../../assets/apple_logo.svg';
import ScrollReveal from './ui/ScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

// Feature item data structure
interface Feature {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const featuresData: Feature[] = [
  {
    id: "pace",
    title: "Move to your own rhythm",
    description: "Sync your breathing and workout pace directly to the underlying beat of your tracks. Let BPM-guided timing help you stay centered, active, and in the zone.",
    images: [
      "https://images.unsplash.com/photo-1608682285597-156feb50eb4e?q=80&w=1080&auto=format&fit=crop"
    ]
  },
  {
    id: "mood-playlists",
    title: "Playlists and covers for every mood",
    description: "Turn any feeling into a matching playlist with custom album art in seconds. Our AI matches your vibe and styles your cover, instantly ready to save.",
    images: [
      "https://images.unsplash.com/photo-1744658841066-0691ab198343?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?q=80&w=1080&auto=format&fit=crop"
    ]
  },
  {
    id: "life-album-art",
    title: "Turn your life into album art",
    description: "Transform your daily moments into custom covers. Share your musical vibe directly to Instagram Stories, Moments, and beyond.",
    images: [
      "https://images.unsplash.com/photo-1735305741501-687208b7ec2d?q=80&w=1080&auto=format&fit=crop"
    ]
  },
  {
    id: "music-videos",
    title: "Music videos, right in your flow",
    description: "Connect directly to official YouTube tracks in one tap. Fuel your mood with high-energy visuals and top-chart hits.",
    images: [
      "https://images.unsplash.com/photo-1633966448341-4b8e20e6ddd6?q=80&w=1080&auto=format&fit=crop"
    ]
  },
  {
    id: "global-charts",
    title: "Global charts, straight to you",
    description: "Access daily top hits and global charts powered directly by Apple Music. Discover fresh tracks and stay connected to what's trending.",
    images: [
      "https://images.unsplash.com/photo-1761344175797-047f049c9b32?q=80&w=1080&auto=format&fit=crop"
    ]
  }
];

const FeatureRow = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  // Auto-play logic for carousel
  useEffect(() => {
    if (feature.images.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % feature.images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, feature.images.length]);

  // GSAP scroll-driven animation matching Option A
  useGSAP(() => {
    gsap.fromTo(
      rowRef.current?.querySelector('.feature-image-container'),
      {
        opacity: 0,
        scale: 0.92,
        y: 40
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 95%",
          end: "top 45%",
          scrub: 1
        }
      }
    );

    gsap.fromTo(
      rowRef.current?.querySelector('.feature-text-container'),
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1
        }
      }
    );
  }, { scope: rowRef });

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % feature.images.length);
  };

  const handleDotClick = (i: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex(i);
  };

  const showControls = feature.images.length > 1;

  return (
    <div 
      ref={rowRef}
      className="flex flex-col md:flex-row gap-8 md:gap-16 items-center w-full py-16 md:py-24 border-b border-neutral-900/50 last:border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Yellow Area (Left/Top) - Image Area */}
      <div className="feature-image-container w-full md:w-[55%] aspect-[4/3] relative rounded-[1.5rem] overflow-hidden bg-neutral-950 border border-neutral-800 shrink-0 select-none shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImgIndex}
            src={feature.images[currentImgIndex]}
            alt={`${feature.title} ${currentImgIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-103"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />

        {/* Carousel Navigation Controls (Shown only if images.length > 1) */}
        {showControls && (
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 text-white z-20 shadow-xl">
            {/* Pagination Dots */}
            <div className="flex gap-1.5">
              {feature.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => handleDotClick(i, e)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentImgIndex ? 'bg-white w-4' : 'bg-neutral-600 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
            {/* Vertical divider */}
            <div className="w-[1px] h-4 bg-neutral-800" />
            
            {/* Next arrow button */}
            <button
              onClick={handleNext}
              className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center transition-colors text-white cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Red Area (Right/Bottom) - Title/Description Area */}
      <div className="feature-text-container w-full md:w-[45%] flex flex-col justify-center">
        {/* Title */}
        <h3 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
          {feature.title}
        </h3>
        
        {/* Description */}
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-lg font-medium">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export const BentoFeatures = () => {
  return (
    <div id="features" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
      {/* Section Header */}
      <div className="mb-16">
        <ScrollReveal direction="left" delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 uppercase leading-[0.9]">
            AI-Powered <br />
            <span className="text-neutral-500">Music Experience.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-[30px] sm:text-[45px] md:text-[48px] lg:text-[70px] text-white font-black tracking-tighter leading-tight mb-8 text-center">
            Redefining listen, discover, and feel.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.5}>
          <p className="text-xl text-neutral-300 font-medium max-w-xl">
            By connecting your <span className="inline-flex items-center gap-1.5"><img src={appleLogo} alt="Apple" className="w-[1.1em] h-[1.1em] mb-0.5" /><span className="text-[#fa243c]">Apple Music</span></span> library, we use advanced AI models to help you expand your experience.
          </p>
        </ScrollReveal>
      </div>

      {/* Feature Rows */}
      <div className="flex flex-col">
        {featuresData.map((feature, index) => (
          <FeatureRow
            key={feature.id}
            feature={feature}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
