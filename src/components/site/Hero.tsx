import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-plant.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const msg = encodeURIComponent("Hello AK Infra Ltd, I want an RMC quotation.");

  return (
    <section ref={ref} id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroImg} alt="AK Infra Ltd RMC plant in Veraval - Premium Ready Mix Concrete supplier" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </motion.div>

      {/* dust particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/40"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [-20, -120], opacity: [0, 0.6, 0] }}
            transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* content */}
      <motion.div style={{ opacity }} className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-24">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium tracking-wider text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            RELIABLE RMC SUPPLIER IN VERAVAL · EST. 2008
          </motion.div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] text-foreground">
            {"Strength You".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + i * 0.12, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="inline-block mr-4"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
              className="inline-block text-gradient-ember"
            >
              Can Build On.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.7 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            Professional Ready Mix Concrete supplier in Veraval offering consistent M20, M25, and M30 concrete grades with reliable delivery for residential, commercial, and infrastructure construction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:ember-glow transition-all"
            >
              Get Instant Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/917698079478?text=${msg}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold text-foreground hover:border-primary/50 transition-all"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4 fill-[#25D366]"><path d="M16 .4A15.6 15.6 0 0 0 2.6 24L.4 31.6 8.2 29.5A15.6 15.6 0 1 0 16 .4Z"/></svg>
              WhatsApp Us
            </a>
          </motion.div>

          {/* meta strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.1, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/40 max-w-3xl"
          >
            {[
              ["Venus CP 30", "Plant Type"],
              ["~30 m³/hr", "Capacity"],
              ["M20-M30", "Grades"],
              ["Veraval", "Service Area"],
            ].map(([n, l]) => (
              <div key={l} className="bg-background/60 backdrop-blur px-4 py-3">
                <div className="font-display text-xl font-bold text-primary">{n}</div>
                <div className="text-[11px] tracking-widest text-muted-foreground uppercase">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] tracking-[0.4em]">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
