const items = ["READY MIX CONCRETE", "INFRASTRUCTURE", "M10 — M50 GRADES", "AUTOMATED BATCHING", "CONCRETE PUMPING", "ON-TIME DELIVERY"];
export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/40 py-6">
      <div className="marquee flex gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-3xl font-bold tracking-tight text-foreground/80 flex items-center gap-12">
            {t} <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
