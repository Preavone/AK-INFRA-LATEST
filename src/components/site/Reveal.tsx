import { motion, type HTMLMotionProps } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  y = 30,
  ...rest
}: { children: React.ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
