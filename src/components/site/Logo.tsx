import { motion } from "framer-motion";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* hex frame */}
      <path
        d="M32 3 L57 17.5 L57 46.5 L32 61 L7 46.5 L7 17.5 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        className="text-primary"
      />
      {/* mixer drum (rotating) */}
      <g className="drum-spin" style={{ transformOrigin: "32px 32px" }}>
        <ellipse cx="32" cy="32" rx="14" ry="9" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <path d="M22 26 L42 38 M22 38 L42 26 M32 23 L32 41" stroke="currentColor" strokeWidth="1.2" className="text-primary" opacity="0.8" />
      </g>
    </svg>
  );
}

export function LogoFull({ animated = false }: { animated?: boolean }) {
  const Wrap = animated ? motion.div : "div";
  return (
    <Wrap
      {...(animated && {
        initial: { opacity: 0, x: -12 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
      })}
      className="flex items-center gap-3"
    >
      <LogoMark />
      <div className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-wider text-foreground">AK INFRA</span>
        <span className="text-[10px] font-medium tracking-[0.35em] text-primary">LTD · RMC</span>
      </div>
    </Wrap>
  );
}
