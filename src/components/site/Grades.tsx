import { Reveal } from "./Reveal";
import { useState } from "react";
import { motion } from "framer-motion";

const grades = [
  { name: "M10", strength: "10 N/mm²", use: "PCC, leveling courses, non-structural fills.", spec: ["Cement: 220 kg/m³", "W/C: 0.62", "Slump: 50–75mm"] },
  { name: "M20", strength: "20 N/mm²", use: "Slabs, beams, columns of standard residential builds.", spec: ["Cement: 320 kg/m³", "W/C: 0.55", "Slump: 75–100mm"] },
  { name: "M25", strength: "25 N/mm²", use: "RCC for residential & light commercial structures.", spec: ["Cement: 360 kg/m³", "W/C: 0.50", "Slump: 100–125mm"] },
  { name: "M30+", strength: "30+ N/mm²", use: "High-rise, infrastructure, bridges and industrial.", spec: ["Cement: 400+ kg/m³", "W/C: 0.45", "Slump: 125–150mm"] },
];

export function Grades() {
  const [active, setActive] = useState(0);
  return (
    <section id="grades" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="text-xs tracking-[0.4em] text-primary font-medium">— CONCRETE GRADES</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold max-w-3xl">
            Concrete Grades Available. <br/><span className="text-gradient-ember">M20, M25, M30 Supplier.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            {grades.map((g, i) => (
              <motion.button
                key={g.name}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                className={`w-full text-left rounded-xl border p-6 transition-all ${
                  active === i
                    ? "border-primary/60 bg-primary/5 ember-glow"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-3xl font-bold text-foreground">{g.name}</div>
                    <div className="text-xs tracking-widest text-muted-foreground mt-1">{g.strength}</div>
                  </div>
                  <div className={`h-10 w-10 rounded-full border-2 flex items-center justify-center transition-colors ${active === i ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="lg:col-span-7">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-background p-10 h-full min-h-[400px]"
            >
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl" style={{ background: "var(--gradient-ember)", opacity: 0.15 }} />
              <div className="relative">
                <div className="font-display text-[8rem] font-bold leading-none text-gradient-ember opacity-90">{grades[active].name}</div>
                <p className="mt-4 text-lg text-foreground max-w-md">{grades[active].use}</p>
                <div className="mt-10 grid sm:grid-cols-3 gap-4">
                  {grades[active].spec.map((s) => (
                    <div key={s} className="glass rounded-lg p-4">
                      <div className="text-xs tracking-widest text-muted-foreground">SPEC</div>
                      <div className="mt-1 text-sm font-medium text-foreground">{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
