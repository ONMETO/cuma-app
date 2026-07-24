import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const inter = "'Inter', sans-serif";
const serif = "'DM Serif Display', serif";

/* ── Images ─────────────────────────────────────────────── */
const IMG_COVER =
  "https://images.unsplash.com/photo-1634651756312-952daf31b7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBBSSUyMGRpZ2l0YWwlMjBhcnQlMjBuZW9uJTIwcHVycGxlfGVufDF8fHx8MTc3Mzc0MzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_SWIRL =
  "https://images.unsplash.com/photo-1635957644792-aba7dcc9f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50JTIwc3dpcmwlMjBkYXJrJTIwZmx1aWQlMjBjb2xvcmZ1bCUyMG1hY3JvfGVufDF8fHx8MTc3Mzc0MzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_VINYL =
  "https://images.unsplash.com/photo-1735305741501-687208b7ec2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMHR1cm50YWJsZSUyMGNsb3NlJTIwdXAlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzczNzQzMDEwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_RUNNER =
  "https://images.unsplash.com/photo-1766603065345-7fe49b302181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2lsaG91ZXR0ZSUyMHN1bnNldCUyMG1vdGlvbiUyMGJsdXIlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzM3NDMwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_HEADPHONES =
  "https://images.unsplash.com/photo-1761399715052-f1159304501a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwZGFyayUyMG11c2ljJTIwc3R1ZGlvJTIwbWluaW1hbCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzM3NDMwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_CONCERT =
  "https://images.unsplash.com/photo-1633966448341-4b8e20e6ddd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBuZW9uJTIwbGlnaHRzJTIwZGFyayUyMGNyb3dkJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczNzQzMDA4fDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_CITY =
  "https://images.unsplash.com/photo-1761344175797-047f049c9b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHQlMjBzdHJlZXQlMjBsaWdodHMlMjBib2tlaCUyMHJhaW4lMjByZWZsZWN0aW9ufGVufDF8fHx8MTc3Mzc0MzAwOHww&ixlib=rb-4.1.0&q=80&w=1080";

/* ── Feature data ───────────────────────────────────────── */
interface Feature {
  label: string;
  title: string;
  desc: string;
  image: string;
  accent: string; // Tailwind gradient for label pill bg
}

const features: Feature[] = [
  {
    label: "Breathe",
    title: "Move to your own rhythm",
    desc: "Sync your breathing and workout pace directly to the underlying beat of your tracks. Let BPM-guided timing help you stay centered, active, and in the zone.",
    image: IMG_RUNNER,
    accent: "from-emerald-600/40 to-teal-600/20",
  },
  {
    label: "Smart Playlists",
    title: "Playlists and covers for every mood",
    desc: "Turn any feeling into a matching playlist with custom album art in seconds. Our AI matches your vibe and styles your cover, instantly ready to save.",
    image: IMG_HEADPHONES,
    accent: "from-blue-600/40 to-indigo-600/20",
  },
  {
    label: "Cover Art",
    title: "Turn your life into album art",
    desc: "Transform your daily moments into custom covers. Share your musical vibe directly to Instagram Stories, Moments, and beyond.",
    image: IMG_COVER,
    accent: "from-violet-600/40 to-purple-600/20",
  },
  {
    label: "Music Videos",
    title: "Music videos, right in your flow",
    desc: "Connect directly to official YouTube tracks in one tap. Fuel your mood with high-energy visuals and top-chart hits.",
    image: IMG_CONCERT,
    accent: "from-amber-600/40 to-red-600/20",
  },
  {
    label: "Global Charts",
    title: "Global charts, straight to you",
    desc: "Access daily top hits and global charts powered directly by Apple Music. Discover fresh tracks and stay connected to what's trending.",
    image: IMG_CITY,
    accent: "from-sky-600/40 to-blue-600/20",
  },
];

/* ── Poster card component ──────────────────────────────── */
function PosterCard({
  feature,
  index,
  className = "",
  textSize = "normal",
}: {
  feature: Feature;
  index: number;
  className?: string;
  textSize?: "normal" | "large" | "wide";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl overflow-hidden cursor-default ${className}`}
      style={{ border: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Full-bleed image */}
      <img
        src={feature.image}
        alt={feature.label}
        className="absolute inset-0 w-full h-full object-cover opacity-80 scale-100 group-hover:opacity-95 group-hover:scale-[1.04] transition-all duration-700 ease-out"
      />

      {/* Gradient veil — heavier at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

      {/* Optional colour tint on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Label chip — top-left */}
      <div className="absolute top-5 left-5">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.10] backdrop-blur-md border border-white/[0.12] text-white/80 uppercase tracking-[0.12em]"
          style={{ fontFamily: inter, fontSize: 10, fontWeight: 500 }}
        >
          {feature.label}
        </span>
      </div>

      {/* Content — bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
        <h3
          className="text-white whitespace-pre-line"
          style={{
            fontFamily: serif,
            fontSize:
              textSize === "large"
                ? "clamp(26px, 2.8vw, 36px)"
                : textSize === "wide"
                ? "clamp(22px, 2.4vw, 30px)"
                : "clamp(18px, 1.8vw, 22px)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
          }}
        >
          {feature.title}
        </h3>
        <p
          className="text-white/60 mt-3 max-w-sm"
          style={{ fontFamily: inter, fontSize: 13, lineHeight: 1.65, fontWeight: 300 }}
        >
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Section ────────────────────────────────────────────── */
export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section id="features" className="relative py-32 sm:py-44">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* ── Section header ── */}
        <motion.div
          ref={sectionRef}
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span
                className="text-white/40 uppercase tracking-[0.16em] block mb-5"
                style={{ fontFamily: inter, fontSize: 11, fontWeight: 500 }}
              >
                Features
              </span>
              <h2
                className="text-white"
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(36px, 5vw, 58px)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                }}
              >
                Seven ways to experience{" "}
                <em className="not-italic text-white/45">your music</em>
              </h2>
            </div>
            <p
              className="text-white/45 max-w-sm lg:text-right"
              style={{ fontFamily: inter, fontSize: 15, lineHeight: 1.65, fontWeight: 300 }}
            >
              Not a feature dump — each one is designed to make a single song
              feel more like yours.
            </p>
          </div>
        </motion.div>

        {/* ─────────────────────────────────────────────────────
            BENTO GRID
            Desktop: 3 columns, explicit row heights
            Row A (2 rows tall): Cover Art [2 cols] | Wallpapers [1 col, row 1]
                                                    | Motion Share [1 col, row 2]
            Row B: Breathe | Smart Playlists | Music Videos
            Row C: Nearby [3 cols]
        ──────────────────────────────────────────────────── */}

        {/* Mobile: simple vertical stack */}
        <div className="flex flex-col gap-4 md:hidden">
          {features.map((f, i) => (
            <PosterCard
              key={f.label}
              feature={f}
              index={i}
              className="h-[360px]"
            />
          ))}
        </div>

        {/* Desktop grid */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "300px 300px 220px",
          }}
        >
          {/* Feature 1 — 2 cols × 2 rows */}
          <PosterCard
            feature={features[0]}
            index={0}
            textSize="large"
            className="col-span-2 row-span-2"
          />

          {/* Feature 2 — 1 col, row 1 */}
          <PosterCard feature={features[1]} index={1} className="col-span-1" />

          {/* Feature 3 — 1 col, row 2 */}
          <PosterCard feature={features[2]} index={2} className="col-span-1" />

          {/* Feature 4 — 1 col, row 3 */}
          <PosterCard feature={features[3]} index={3} className="col-span-1" />

          {/* Feature 5 — 2 cols, row 3 */}
          <PosterCard
            feature={features[4]}
            index={4}
            textSize="wide"
            className="col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
