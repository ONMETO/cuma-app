import React from 'react';
import { motion } from 'motion/react';
import { Music, ImageIcon, PlaySquare, Activity, Compass } from 'lucide-react';
import { cn } from '../utils/cn';

const FeatureCard = ({
  className,
  title,
  description,
  icon: Icon,
  imageSrc,
  large = false,
}: {
  className?: string;
  title: string;
  description: string;
  icon: any;
  imageSrc?: string;
  large?: boolean;
}) => (
  <motion.div
    whileHover={{ scale: 0.98 }}
    transition={{ duration: 0.3 }}
    className={cn(
      "group relative overflow-hidden bg-neutral-950 border border-neutral-800 rounded-[2rem] p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors",
      className
    )}
  >
    {imageSrc && (
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-all duration-700 ease-out z-0">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10" />
    
    <div className="relative z-20 flex justify-between items-start w-full">
      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 text-white shadow-lg">
        <Icon className="w-6 h-6" />
      </div>
      {large && (
        <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">Featured</span>
      )}
    </div>

    <div className="relative z-20 mt-16">
      <h3 className={cn("text-white font-bold mb-3 tracking-tight", large ? "text-4xl lg:text-5xl" : "text-2xl")}>
        {title}
      </h3>
      <p className={cn("text-neutral-300 font-medium leading-relaxed drop-shadow-md", large ? "text-lg max-w-md" : "text-base")}>
        {description}
      </p>
    </div>
  </motion.div>
);

export const BentoFeatures = () => {
  return (
    <div id="features" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
          Crafted for<br />
          <span className="text-neutral-500">the obsessed.</span>
        </h2>
        <p className="text-xl text-neutral-300 font-medium max-w-xl">
          Experience a suite of features designed to transform how you interact with music. No distractions, just pure rhythm.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
        {/* Item 1: AI Covers */}
        <FeatureCard 
          className="md:col-span-2 md:row-span-2"
          large
          title="AI Generation."
          description="Create stunning custom covers and personalized playlists tailored entirely to your current mood, generated in seconds by our advanced AI model."
          icon={Music}
          imageSrc="https://images.unsplash.com/photo-1744658841066-0691ab198343?q=80&w=1080&auto=format&fit=crop"
        />
        
        {/* Item 2: Wallpaper */}
        <FeatureCard 
          className="md:col-span-1 md:row-span-1"
          title="Wallpaper Conversion."
          description="Turn any album artwork into a stunning, high-resolution device wallpaper with a single tap."
          icon={ImageIcon}
          imageSrc="https://images.unsplash.com/photo-1607699265032-3eafa2806ae6?q=80&w=1080&auto=format&fit=crop"
        />

        {/* Item 3: GIF Sharing */}
        <FeatureCard 
          className="md:col-span-1 md:row-span-1"
          title="GIF Sharing."
          description="Share your favorite lyrical moments effortlessly as beautiful, dynamic animated GIFs."
          icon={PlaySquare}
        />

        {/* Item 4: Nearby */}
        <FeatureCard 
          className="md:col-span-2 md:row-span-1"
          title="Nearby Discovery."
          description="Discover what people around you are listening to in real-time. Connect through shared musical tastes in your vicinity."
          icon={Compass}
        />

        {/* Item 5: Sports Breathing */}
        <FeatureCard 
          className="md:col-span-1 md:row-span-1"
          title="Pace Rhythm."
          description="Synchronize your breathing and workout pace directly to the underlying beat of your tracks."
          icon={Activity}
          imageSrc="https://images.unsplash.com/photo-1608682285597-156feb50eb4e?q=80&w=1080&auto=format&fit=crop"
        />
      </div>
    </div>
  );
};
