import { Download } from "lucide-react";
import EducationTimeline from "./EducationTimeline";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#030712] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-20 text-center">
          <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold">
            About Me
          </p>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>

            <h2 className="text-5xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Premkumar Patil
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">
              I'm a Computer Science graduate passionate about building
              modern web applications and solving real-world problems
              using SQL, Power BI and React.

              <br /><br />

              I enjoy learning new technologies,
              creating practical projects and continuously
              improving my development skills.
            </p>

            <button className="mt-10 flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30">
              <Download size={20} />
              Download Resume
            </button>

          </div>

          {/* Right */}
          <EducationTimeline />

        </div>

      </div>
    </section>
  );
}