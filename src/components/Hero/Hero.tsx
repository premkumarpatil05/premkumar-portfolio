import { motion } from "framer-motion";
import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] flex items-center">

      {/* Blue Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full -top-40 -left-40"></div>

      {/* Purple Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full bottom-0 right-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <HeroText />

          <div className="mt-10 flex gap-5 flex-wrap justify-center lg:justify-start">
            <button className="px-7 py-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-blue-500">
              View Projects
            </button>

            <button className="px-7 py-3 rounded-xl border border-gray-400 text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              Download Resume
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroVisual />
        </motion.div>

      </div>

    </section>
  );
}