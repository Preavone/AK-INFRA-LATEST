import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Factory, Gauge, Cpu, FlaskConical, Truck, Building2 } from "lucide-react";

const capabilities = [
  {
    icon: Factory,
    title: "Venus CP 30 Batching Plant",
    desc: "Compact and efficient batching plant designed for consistent concrete production with reliable performance.",
  },
  {
    icon: Gauge,
    title: "~30 m³/hour Capacity",
    desc: "Steady production output suitable for residential, commercial, and infrastructure project requirements.",
  },
  {
    icon: Cpu,
    title: "Automated Batching Operations",
    desc: "Computer-controlled weighing and batching ensures accurate mix proportions for every batch produced.",
  },
  {
    icon: FlaskConical,
    title: "Consistent Concrete Quality",
    desc: "Standardised processes and material testing ensure uniform quality across all concrete grades supplied.",
  },
  {
    icon: Truck,
    title: "Efficient Dispatch System",
    desc: "Organised dispatch operations ensure concrete reaches the site within the required timeframe.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial Projects",
    desc: "Suitable for housing, commercial complexes, roads, and general infrastructure construction work.",
  },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="text-xs tracking-[0.4em] text-primary font-medium">— OUR PLANT INFRASTRUCTURE</span>
        </Reveal>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold max-w-2xl">
              Modern batching <span className="text-gradient-ember">infrastructure.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground max-w-md">
              Our Venus CP 30 batching plant provides reliable concrete production with automated operations, ensuring consistent quality for every project we serve.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40"
              >
                <div
                  className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--gradient-ember)" }}
                />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary group-hover:bg-primary/15 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
