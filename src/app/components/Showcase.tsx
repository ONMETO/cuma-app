import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const inter = "'Inter', sans-serif";
const serif = "'DM Serif Display', serif";

const IMG_PHONE =
  "https://images.unsplash.com/photo-1602343451695-90da3daf5950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc2NyZWVuJTIwZ2xvdyUyMGRhcmslMjBoYW5kJTIwaG9sZGluZ3xlbnwxfHx8fDE3NzM3NDI0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const steps = [
  { num: "01", title: "Pick a song", desc: "From Apple Music or your local library." },
  { num: "02", title: "Choose an action", desc: "Cover art, wallpaper, motion share, breathe, or playlist." },
  { num: "03", title: "Generate & refine", desc: "Done in seconds. Adjust style, palette, and framing." },
  { num: "04", title: "Save or share", desc: "Set as wallpaper, post to socials, or keep it for yourself." },
];

function Step({ step, index }: { step: typeof steps[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group flex gap-6 items-start"
    >
      <span
        className="shrink-0 text-white/20 group-hover:text-white/35 transition-colors"
        style={{ fontFamily: serif, fontSize: 32, lineHeight: 1 }}
      >
        {step.num}
      </span>
      <div className="pt-1">
        <h4 className="text-white/90 mb-1" style={{ fontFamily: inter, fontSize: 16, fontWeight: 500 }}>
          {step.title}
        </h4>
        <p className="text-white/50" style={{ fontFamily: inter, fontSize: 14, lineHeight: 1.6, fontWeight: 300 }}>
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="how" ref={sectionRef} className="relative py-32 sm:py-44 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-900/[0.06] blur-[200px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Visual */}
          <motion.div style={{ y: imgY }} className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[260px] sm:w-[300px] rounded-[40px] overflow-hidden border-[5px] border-white/[0.06] bg-[#111] shadow-2xl shadow-black/40">
                <img
                  src={IMG_PHONE}
                  alt="Melo app"
                  className="w-full aspect-[9/19] object-cover"
                />
              </div>

              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -right-8 sm:-right-12 top-20 px-4 py-3 rounded-xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
                    <span className="text-white" style={{ fontSize: 13 }}>♬</span>
                  </div>
                  <div>
                    <div className="text-white/70" style={{ fontFamily: inter, fontSize: 12, fontWeight: 500 }}>
                      Cover generated
                    </div>
                    <div className="text-white/25" style={{ fontFamily: inter, fontSize: 11 }}>
                      just now
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Nearby badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -left-6 sm:-left-10 bottom-28 px-4 py-2.5 rounded-xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1.5">
                    {["from-rose-500 to-orange-500", "from-sky-500 to-blue-500", "from-emerald-500 to-green-500"].map((g, i) => (
                      <div key={i} className={`w-5 h-5 rounded-full bg-gradient-to-br ${g} border-2 border-[#111]`} />
                    ))}
                  </div>
                  <span className="text-white/30" style={{ fontFamily: inter, fontSize: 11 }}>
                    12 nearby
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="order-1 lg:order-2">
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-white/40 uppercase tracking-[0.15em] block mb-5"
                style={{ fontFamily: inter, fontSize: 11, fontWeight: 500 }}
              >
                How it works
              </span>
              <h2
                className="text-white/95 mb-14"
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                No tutorial{" "}
                <em className="not-italic text-white/45">needed</em>
              </h2>
            </motion.div>

            <div className="space-y-10">
              {steps.map((s, i) => (
                <Step key={s.num} step={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}