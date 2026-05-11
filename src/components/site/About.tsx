import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { Building2, Truck, Award, HardHat } from "lucide-react";

const stats = [
  { icon: Building2, label: "Plant Capacity", value: 30, suffix: "m³/hr" },
  { icon: Truck, label: "Transit Mixers", value: 5, suffix: "+" },
  { icon: Award, label: "Years Experience", value: 15, suffix: "+" },
  { icon: HardHat, label: "Skilled Staff", value: 25, suffix: "+" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-end mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs tracking-[0.4em] text-primary font-medium">— ABOUT AK INFRA</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold leading-[1.05]">
                Trusted Ready Mix Concrete Supplier <br />
                in <span className="text-gradient-ember">Veraval.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                AK Infra Ltd is a Veraval-based ready mix concrete supplier equipped with a Venus CP 30 batching plant, focused on quality concrete production and timely delivery for residential, commercial, and infrastructure projects across Gir Somnath. We maintain a reliable fleet of transit mixers and ensure consistent concrete quality through standard operational procedures and quality checks.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="group relative h-full bg-card p-8 hover:bg-secondary transition-colors">
                <s.icon className="h-7 w-7 text-primary mb-6" strokeWidth={1.5} />
                <div className="font-display text-4xl sm:text-5xl font-bold text-foreground">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs tracking-widest text-muted-foreground uppercase">{s.label}</div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
