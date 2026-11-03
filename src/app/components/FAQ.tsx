import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from './ui/ScrollReveal';
import { APP_STORE_URL } from '../utils/appStore';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

const faqData: FAQItem[] = [
  {
    id: 'item-1',
    question: 'What is Bagel Muse and how does it redefine music listening?',
    answer:
      'Bagel Muse is an AI-powered music and lifestyle iOS app designed to turn passive listening into an active rhythm. It bridges your physical pacing (such as running cadence and workout heart rate) with song tempo (BPM), while using generative AI to create customized playlists and album art tailored to your daily moods.',
  },
  {
    id: 'item-2',
    question: 'How does Bagel Muse sync music to workout and running pace?',
    answer:
      'Bagel Muse aligns your workout cadence directly to the beats per minute (BPM) of your tracks. By synchronizing your stride rate and breathing rhythm with the tempo of the music, you can stay centered, reduce running fatigue, and lock effortlessly into your athletic flow state.',
  },
  {
    id: 'item-3',
    question: 'How does the AI mood playlist and album cover generator work?',
    answer:
      'Simply describe your current feeling, scene, or activity (e.g., "sunset marathon run" or "late-night deep focus"). Bagel Muse curates a matching soundtrack and generates unique, high-resolution aesthetic album art that perfectly captures the vibe, ready to save to your library or share with friends.',
  },
  {
    id: 'item-4',
    question: 'Do I need an Apple Music subscription to use Bagel Muse?',
    answer:
      'Bagel Muse integrates seamlessly with Apple Music global charts and trending hits, and also supports official YouTube tracks and music videos directly within your flow. You can enjoy top hit discovery and video playback with one tap.',
  },
  {
    id: 'item-5',
    question: 'Can I transform my daily photos into visual album art stories?',
    answer:
      'Yes! Bagel Muse lets you merge your daily photographs with your favorite songs to generate aesthetic album covers, lyric visual cards, and animated stories designed specifically for Instagram Stories, Moments, and lock screen wallpapers.',
  },
  {
    id: 'item-6',
    question: 'Where can I download Bagel Muse and is it free?',
    answer:
      'Bagel Muse is available for iOS (iPhone) on the Apple App Store (App ID: 6790411464). It is free to download and get started.',
    linkText: 'Download on the Apple App Store',
    linkHref: APP_STORE_URL,
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative flex w-full flex-col items-center justify-center py-28 z-10 border-t border-neutral-900 bg-black/60 backdrop-blur-sm"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950/70 text-xs font-medium text-neutral-400 mb-4 uppercase tracking-widest">
              Got Questions?
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4">
              Frequently Asked <span className="text-neutral-500">Questions</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-400 font-medium max-w-xl mx-auto">
              Everything you need to know about Bagel Muse, BPM rhythm syncing, and AI-curated music.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={0.08 * (index + 1)}
                className="w-full"
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-neutral-700 bg-neutral-900/70 shadow-[0_0_30px_rgba(255,255,255,0.03)]'
                      : 'border-neutral-800/80 bg-neutral-950/50 hover:border-neutral-700/80 hover:bg-neutral-900/40'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full text-left py-5 px-6 sm:px-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-2xl"
                  >
                    <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="shrink-0 text-neutral-400"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal border-t border-neutral-800/60 mt-1">
                          <p>{item.answer}</p>
                          {item.linkHref && item.linkText && (
                            <div className="mt-3">
                              <a
                                href={item.linkHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-white font-medium underline underline-offset-4 hover:text-neutral-300 transition-colors"
                              >
                                {item.linkText} &rarr;
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
