import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex justify-center items-center"
    >
      <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl shadow-2xl shadow-cyan-500/20">

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-2xl"></div>

        {/* Laptop */}
        <span className="relative z-10 text-8xl">💻</span>

      </div>
    </motion.div>
  );
}