import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import appleLogo from "../../assets/apple_logo.svg";

const inter = "'Inter', sans-serif";
const serif = "'DM Serif Display', serif";

const IMG_NEON =
  "https://images.unsplash.com/photo-1764574694130-6c5ca88f38dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHQlMjBhYnN0cmFjdCUyMGZsdWlkJTIwYXJ0JTIwZGFya3xlbnwxfHx8fDE3NzM3NDI0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function DownloadCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="download" className="relative py-32 sm:py-44 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img src={IMG_NEON} alt="" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-[#08080c]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08080c]/80 via-transparent to-[#08080c]/80" />
          </div>

          <div className="relative z-10 px-8 sm:px-16 py-20 sm:py-28 flex flex-col items-center text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a78bfa] to-[#ec4899] flex items-center justify-center mb-10 shadow-lg shadow-violet-900/30"
            >
              <span className="text-white" style={{ fontFamily: serif, fontSize: 28 }}>
                M
              </span>
            </motion.div>

            <h2
              className="text-white max-w-lg"
              style={{
                fontFamily: serif,
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to{" "}
              <span className="italic text-white/50">start?</span>
            </h2>

            <p
              className="text-white/55 max-w-md mt-6 mb-10"
              style={{ fontFamily: inter, fontSize: 16, lineHeight: 1.65, fontWeight: 300 }}
            >
              Free download. No ads. Premium features available
              via subscription. Requires iOS 16+.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#"
                className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#08080c] hover:shadow-lg hover:shadow-white/10 transition-all"
                style={{ fontFamily: inter, fontSize: 15, fontWeight: 500 }}
              >
                <img src={appleLogo} alt="Apple" className="w-[18px] h-[18px]" />
                Download on the App Store
                <ArrowUpRight size={15} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            <p className="text-white/30 mt-8" style={{ fontFamily: inter, fontSize: 12 }}>
              Free to use · No credit card required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}