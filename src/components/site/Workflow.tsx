import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Search, Settings2, Activity, Truck, MapPin, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Raw Material Quality Inspection",
    desc: "We test aggregates, cement, and admixtures to ensure they meet quality standards before production begins.",
  },
  {
    icon: Settings2,
    title: "Automated Batching Process",
    desc: "Our Venus CP 30 plant uses computer-controlled batching to accurately measure and combine materials.",
  },
  {
    icon: Activity,
    title: "Concrete Mixing & Monitoring",
    desc: "The mixing process is carefully monitored to achieve the desired slump, consistency, and workability.",
  },
  {
    icon: Truck,
    title: "Transit Mixer Dispatch",
    desc: "Freshly mixed concrete is loaded into our transit mixers, maintaining agitation to prevent setting during transport.",
  },
  {
    icon: MapPin,
    title: "Timely Site Delivery",
    desc: "We coordinate with site teams to ensure the concrete arrives when needed for uninterrupted pouring.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance Checks",
    desc: "We conduct periodic testing and provide quality documentation for the concrete delivered to your site.",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative py-32 px-6 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="text-xs tracking-[0.4em] text-primary font-medium">— HOW WE OPERATE</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
              Reliable concrete production and <span className="text-gradient-ember">delivery process.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-border -z-10" />
          
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative group">
                <div className="bg-background border border-border p-8 rounded-2xl h-full hover:border-primary/40 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <step.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="text-[10px] tracking-[0.3em] text-muted-foreground/60 mb-3">STEP {i + 1}</div>
                  <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
