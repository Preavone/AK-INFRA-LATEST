import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) { setTouch(true); return; }
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  if (touch) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[500px] w-[500px] rounded-full blur-3xl transition-transform duration-300"
      style={{
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
        background: "radial-gradient(circle, oklch(0.74 0.18 55 / 0.10) 0%, transparent 60%)",
      }}
    />
  );
}
