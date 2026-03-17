import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star } from "lucide-react";

const inter = "'Inter', sans-serif";
const serif = "'DM Serif Display', serif";

const reviews = [
  {
    name: "Sarah K.",
    role: "Music Producer",
    text: "I stopped using Canva for album art. Melo just gets it—every cover feels like it was made by someone who actually listened to the track.",
    stars: 5,
    gradient: "from-violet-500/20 to-blue-500/20",
  },
  {
    name: "张晨",
    role: "Runner / Podcaster",
    text: "The breathing guide during my runs is subtle and brilliant. I don't even notice it working until I check my heart rate afterwards. My pace got way more consistent.",
    stars: 5,
    gradient: "from-amber-500/20 to-rose-500/20",
  },
  {
    name: "Alex Rivera",
    role: "Photographer",
    text: "The wallpaper feature is addictive. Every morning I generate a new one from whatever I was listening to the night before. My lock screen hasn't repeated in months.",
    stars: 5,
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    name: "Yuki T.",
    role: "Designer",
    text: "Motion sharing changed how I post on IG. Instead of a static screenshot of Now Playing, I share these gorgeous animated loops. Engagement went through the roof.",
    stars: 5,
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    name: "米雪",
    role: "Music Enthusiast",
    text: "Found my favorite jazz artist through the Nearby feature at a coffee shop. That serendipity is something no algorithm can replicate.",
    stars: 5,
    gradient: "from-sky-500/20 to-indigo-500/20",
  },
  {
    name: "Marcus W.",
    role: "Playlist Curator",
    text: "I said 'something for 2am coding sessions' and it built a perfect playlist in seconds. Then imported it straight into Apple Music. Witchcraft.",
    stars: 5,
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

function ReviewCard({ review, index }: { review: typeof reviews[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative p-7 rounded-2xl border border-white/[0.04] bg-gradient-to-br ${review.gradient} backdrop-blur-sm hover:border-white/[0.08] transition-all duration-500`}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} size={12} className="fill-white/40 text-white/40" />
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-white/70 mb-7"
        style={{ fontFamily: inter, fontSize: 14, lineHeight: 1.75, fontWeight: 300 }}
      >
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center">
          <span className="text-white/60" style={{ fontFamily: inter, fontSize: 12, fontWeight: 600 }}>
            {review.name[0]}
          </span>
        </div>
        <div>
          <div className="text-white/80" style={{ fontFamily: inter, fontSize: 13, fontWeight: 500 }}>
            {review.name}
          </div>
          <div className="text-white/35" style={{ fontFamily: inter, fontSize: 11 }}>
            {review.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="reviews" className="relative py-32 sm:py-44">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 sm:mb-20"
        >
          <div>
            <span
              className="text-white/40 uppercase tracking-[0.15em] block mb-5"
              style={{ fontFamily: inter, fontSize: 11, fontWeight: 500 }}
            >
              Wall of love
            </span>
            <h2
              className="text-white"
              style={{
                fontFamily: serif,
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              People seem to{" "}
              <span className="italic text-white/40">like it</span>
            </h2>
          </div>
          <p
            className="text-white/40 max-w-xs lg:text-right"
            style={{ fontFamily: inter, fontSize: 14, lineHeight: 1.6, fontWeight: 300 }}
          >
            960K+ users. 4.8 stars on the App Store. Here's what some of them said.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}