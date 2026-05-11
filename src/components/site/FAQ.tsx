import { Reveal } from "./Reveal";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What concrete grades do you supply?",
    a: "We supply standard concrete grades including M10, M20, M25, and M30. These are ideal for residential, commercial, and infrastructure projects with custom mix designs available upon request."
  },
  {
    q: "Do you provide concrete delivery services in Veraval?",
    a: "Yes, AK Infra Ltd provides reliable concrete delivery services throughout Veraval and the Gir Somnath region. We maintain our own fleet of transit mixers to ensure timely delivery."
  },
  {
    q: "What makes your RMC plant reliable?",
    a: "Our Venus CP 30 batching plant utilizes computer-controlled batching for accurate mix proportions. We also conduct standard material testing to maintain consistent concrete quality."
  },
  {
    q: "Do you serve residential and commercial projects?",
    a: "Yes, we serve both residential and commercial projects in Veraval. From individual housing foundations to commercial buildings and local infrastructure, we deliver consistent concrete solutions."
  },
  {
    q: "How fast can you deliver concrete?",
    a: "We coordinate delivery schedules based on your project requirements. For the best service, we recommend scheduling your concrete delivery at least 24 hours in advance."
  }
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative py-32 px-6 bg-card/30">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="text-xs tracking-[0.4em] text-primary font-medium">— FREQUENTLY ASKED</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold">
            Common questions about <span className="text-gradient-ember">RMC services in Veraval.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-muted-foreground max-w-2xl">
            Get answers to your questions about Ready Mix Concrete delivery, grades, and commercial RMC solutions from AK Infra Ltd.
          </p>
        </Reveal>

        <div className="mt-16 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <motion.button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full text-left rounded-xl border border-border bg-background p-6 hover:border-primary/40 transition-all hover:bg-card/50"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground">{faq.q}</h3>
                    {active === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-sm text-muted-foreground leading-relaxed"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </div>
                  <motion.div
                    animate={{ rotate: active === i ? 180 : 0 }}
                    className="mt-1 flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </motion.div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-8 text-center">
            <h3 className="font-display text-2xl font-bold">Still have questions?</h3>
            <p className="mt-2 text-muted-foreground">
              Contact AK Infra Ltd directly for inquiries about concrete delivery, RMC plant services, or commercial projects.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:ember-glow transition-all"
            >
              Get a Quotation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
