import { motion } from "framer-motion";

/** Realistic mixer truck animation */
export function MixerTruck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chassis frame */}
      <line x1="40" y1="130" x2="360" y2="130" stroke="oklch(0.25 0.01 240)" strokeWidth="2" />
      
      {/* Cab (front) */}
      <rect x="320" y="60" width="50" height="70" rx="3" fill="oklch(0.65 0.22 55)" />
      <rect x="325" y="65" width="20" height="20" rx="2" fill="oklch(0.85 0.05 220)" opacity="0.8" />
      <rect x="350" y="65" width="15" height="20" rx="2" fill="oklch(0.85 0.05 220)" opacity="0.8" />
      <path d="M320 130 L315 140" stroke="oklch(0.25 0.01 240)" strokeWidth="2" />
      
      {/* Large rotating drum */}
      <motion.g animate={{ rotateZ: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "160px 80px" }}>
        {/* Drum body */}
        <ellipse cx="160" cy="80" rx="100" ry="45" fill="oklch(0.50 0.15 30)" stroke="oklch(0.30 0.08 30)" strokeWidth="2" />
        
        {/* Drum bands (horizontal lines) */}
        <line x1="65" y1="60" x2="255" y2="60" stroke="oklch(0.25 0.01 240)" strokeWidth="1.5" opacity="0.6" />
        <line x1="62" y1="80" x2="258" y2="80" stroke="oklch(0.25 0.01 240)" strokeWidth="1.5" opacity="0.6" />
        <line x1="65" y1="100" x2="255" y2="100" stroke="oklch(0.25 0.01 240)" strokeWidth="1.5" opacity="0.6" />
        
        {/* Spiral pattern on drum */}
        <path d="M75 65 Q160 45 245 65" stroke="oklch(0.30 0.08 30)" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M70 80 Q160 60 250 80" stroke="oklch(0.30 0.08 30)" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M75 95 Q160 115 245 95" stroke="oklch(0.30 0.08 30)" strokeWidth="2" fill="none" opacity="0.5" />
        
        {/* Front plate detail */}
        <circle cx="80" cy="80" r="3" fill="oklch(0.25 0.01 240)" opacity="0.7" />
        <circle cx="120" cy="70" r="3" fill="oklch(0.25 0.01 240)" opacity="0.7" />
        <circle cx="200" cy="70" r="3" fill="oklch(0.25 0.01 240)" opacity="0.7" />
        <circle cx="240" cy="80" r="3" fill="oklch(0.25 0.01 240)" opacity="0.7" />
      </motion.g>
      
      {/* Discharge chute/spout */}
      <path d="M260 110 L290 135" stroke="oklch(0.40 0.12 30)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="290" cy="135" r="5" fill="oklch(0.40 0.12 30)" />
      
      {/* Support legs/hydraulics */}
      <line x1="110" y1="130" x2="105" y2="155" stroke="oklch(0.40 0.08 240)" strokeWidth="2" opacity="0.7" />
      <line x1="210" y1="130" x2="215" y2="155" stroke="oklch(0.40 0.08 240)" strokeWidth="2" opacity="0.7" />
      
      {/* Front wheels (dual) */}
      <g>
        <circle cx="60" cy="140" r="16" fill="oklch(0.15 0.01 240)" />
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "60px 140px" }}
        >
          <circle cx="60" cy="140" r="11" fill="oklch(0.30 0.01 240)" />
          <circle cx="60" cy="140" r="3" fill="oklch(0.60 0.10 30)" />
          <line x1="50" y1="140" x2="70" y2="140" stroke="oklch(0.55 0.15 30)" strokeWidth="1" />
          <line x1="60" y1="129" x2="60" y2="151" stroke="oklch(0.55 0.15 30)" strokeWidth="1" />
          <path d="M55 135 L65 145" stroke="oklch(0.55 0.15 30)" strokeWidth="0.8" />
          <path d="M65 135 L55 145" stroke="oklch(0.55 0.15 30)" strokeWidth="0.8" />
        </motion.g>
      </g>
      
      {/* Rear dual wheels left */}
      <g>
        <circle cx="240" cy="145" r="15" fill="oklch(0.15 0.01 240)" />
        <circle cx="265" cy="145" r="15" fill="oklch(0.15 0.01 240)" />
        
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "240px 145px" }}
        >
          <circle cx="240" cy="145" r="10" fill="oklch(0.30 0.01 240)" />
          <circle cx="240" cy="145" r="2.5" fill="oklch(0.60 0.10 30)" />
          <line x1="230" y1="145" x2="250" y2="145" stroke="oklch(0.55 0.15 30)" strokeWidth="1" />
          <line x1="240" y1="135" x2="240" y2="155" stroke="oklch(0.55 0.15 30)" strokeWidth="1" />
        </motion.g>
        
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "265px 145px" }}
        >
          <circle cx="265" cy="145" r="10" fill="oklch(0.30 0.01 240)" />
          <circle cx="265" cy="145" r="2.5" fill="oklch(0.60 0.10 30)" />
          <line x1="255" y1="145" x2="275" y2="145" stroke="oklch(0.55 0.15 30)" strokeWidth="1" />
          <line x1="265" y1="135" x2="265" y2="155" stroke="oklch(0.55 0.15 30)" strokeWidth="1" />
        </motion.g>
      </g>
      
      {/* Concrete dust effect */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={290 + i * 8}
          cy={150}
          r={2 + i * 0.5}
          fill="oklch(0.60 0.08 30)"
          animate={{ opacity: [0.6, 0, 0.6], y: [0, -15, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      
      {/* Shadow */}
      <ellipse cx="200" cy="168" rx="140" ry="8" fill="oklch(0.30 0.01 240)" opacity="0.15" />
    </svg>
  );
}
