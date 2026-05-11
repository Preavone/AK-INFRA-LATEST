import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative text-primary"
          >
            <LogoMark className="h-24 w-24" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-col items-center"
          >
            <div className="font-display text-2xl font-bold tracking-[0.3em] text-foreground">AK INFRA</div>
            <div className="mt-1 text-[10px] tracking-[0.5em] text-primary">LOADING STRENGTH</div>
          </motion.div>
          <div className="mt-8 h-px w-48 overflow-hidden bg-border">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
