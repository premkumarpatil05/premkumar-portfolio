export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#030712] text-white">
      <div className="text-center">
        <p className="text-blue-400 text-lg mb-3">
          👋 Welcome to my Portfolio
        </p>

        <h1 className="text-6xl font-bold">
          Premkumar Patil
        </h1>

        <h2 className="text-2xl text-gray-400 mt-4">
          Data Analyst | Web Developer
        </h2>

        <div className="mt-10 flex justify-center gap-5">
          <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-black transition">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}