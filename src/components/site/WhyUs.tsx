import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Clock, Cpu, Leaf, Beaker, Truck } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "Consistent Quality", desc: "Standardised processes and material testing ensure reliable concrete for every batch." },
  { icon: Clock, title: "Timely Delivery", desc: "Organised dispatch and reliable transit mixers ensure your concrete arrives when needed." },
  { icon: Cpu, title: "Automated Plant", desc: "Our Venus CP 30 features computer-controlled batching for accurate mix proportions." },
  { icon: Beaker, title: "Custom Mixes", desc: "We can adjust mix designs based on specific project requirements and engineer specifications." },
  { icon: Truck, title: "Local Fleet", desc: "Dedicated transit mixers servicing Veraval and the surrounding Gir Somnath region." },
  { icon: Leaf, title: "Efficient Operations", desc: "Optimised plant workflow minimizes waste and ensures smooth production cycles." },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="why" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <Reveal><span className="text-xs tracking-[0.4em] text-primary font-medium">— WHY AK INFRA</span></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold max-w-3xl">
            Why choose <span className="text-gradient-ember">AK Infra.</span>
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          {/* timeline line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          <div className="space-y-12">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} className="relative">
                <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""} items-start gap-6`}>
                  <div className="hidden lg:block lg:w-1/2" />
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 mt-3 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  <div className="pl-16 lg:pl-0 lg:w-1/2">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`glass rounded-2xl p-6 ${i % 2 === 1 ? "lg:mr-12" : "lg:ml-12"}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                          <p.icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold">{p.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
