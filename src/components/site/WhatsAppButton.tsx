import { motion } from "framer-motion";

export function WhatsAppButton() {
  const msg = encodeURIComponent("Hello AK Infra Ltd, I want an RMC quotation.");
  return (
    <motion.a
      href={`https://wa.me/917698079478?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor">
        <path d="M16 .4A15.6 15.6 0 0 0 2.6 24L.4 31.6 8.2 29.5A15.6 15.6 0 1 0 16 .4Zm0 28.6a13 13 0 0 1-6.6-1.8l-.5-.3-4.6 1.3 1.3-4.5-.3-.5A13 13 0 1 1 16 29Zm7.4-9.7c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-2.4-1.2-4-2.1-5.6-4.8-.4-.7.4-.7 1.2-2.3.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.7c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.1 1.3 3.6 1.5 3.9c.2.3 2.6 4 6.4 5.6 2.4 1 3.3 1.1 4.5.9.7-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9 0-.2-.3-.3-.7-.5Z" />
      </svg>
    </motion.a>
  );
}
