import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full -top-40 -left-40"></div>

      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full bottom-0 right-0"></div>

      <div className="relative text-center text-white px-6">
        <HeroText />

        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <button className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 duration-300 shadow-lg shadow-blue-500/30">
            View Projects
          </button>

          <button className="px-7 py-3 rounded-xl border border-gray-400 hover:bg-white hover:text-black duration-300">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}