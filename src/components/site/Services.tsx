import { Reveal } from "./Reveal";
import { Truck, Zap, MapPin, Building, Home, Briefcase, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Truck, title: "Ready Mix Concrete Supply", desc: "Consistent production of M20, M25, and M30 grades using our Venus CP 30 batching plant." },
  { icon: Zap, title: "Reliable Site Delivery", desc: "Coordinated dispatch with our transit mixers to ensure concrete arrives ready for pouring." },
  { icon: MapPin, title: "Local Projects", desc: "Serving Veraval and surrounding Gir Somnath areas with dedicated concrete supply." },
  { icon: Building, title: "Commercial Construction", desc: "Reliable concrete batching for commercial complexes, warehouses, and industrial sheds." },
  { icon: Home, title: "Residential Solutions", desc: "Quality concrete mixes suitable for foundations, columns, and slabs in housing projects." },
  { icon: Briefcase, title: "Infrastructure Support", desc: "Consistent material supply for local road works, bridges, and general infrastructure." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 bg-card/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <span className="text-xs tracking-[0.4em] text-primary font-medium">— RMC SOLUTIONS</span>
        </Reveal>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold max-w-2xl">
              Professional concrete <span className="text-gradient-ember">supply services.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground max-w-sm">
              From automated batching to site delivery — providing trusted solutions for local construction projects.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1">
                <div
                  className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--gradient-ember)" }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary group-hover:bg-primary/15 transition-colors">
                      <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-45" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-8 text-[10px] tracking-[0.3em] text-muted-foreground/60">0{i + 1}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
