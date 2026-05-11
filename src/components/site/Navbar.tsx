import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { LogoFull } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#grades", label: "Grades" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3 border-b border-border" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="text-foreground"><LogoFull /></a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+917698079478" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" /> +91 7698079478
          </a>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:ember-glow transition-all"
          >
            Get Quote
          </a>
        </div>
        <button onClick={() => setOpen((o) => !o)} className="lg:hidden text-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden glass-strong border-t border-border"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground hover:text-primary border-b border-border/40 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
              Get Instant Quote
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
