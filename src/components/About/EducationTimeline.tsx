import {
  GraduationCap,
  School,
  BookOpen,
} from "lucide-react";

export default function EducationTimeline() {
  return (
    <div className="space-y-6">

      {/* B.Sc */}
      <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20">

        <div className="flex items-center gap-3">
          <GraduationCap className="text-cyan-400" />
          <h3 className="text-2xl font-bold text-cyan-400">
            B.Sc. Computer Science
          </h3>
        </div>

        <p className="mt-4 text-gray-300">
          Science Senior College, Shahada
        </p>

        <p className="text-gray-400">
          Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon
        </p>

        <div className="mt-5 space-y-2 text-gray-300">
          <p>CGPA : <strong>7.85 / 10</strong></p>
          <p>Percentage : <strong>66.14%</strong></p>
          <p>Graduated : <strong>2026</strong></p>
        </div>

      </div>

      {/* HSC */}

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20">

        <div className="flex items-center gap-3">
          <BookOpen className="text-cyan-400" />
          <h3 className="text-xl font-semibold">
            Higher Secondary (HSC)
          </h3>
        </div>

        <p className="mt-4 text-gray-400">
          Maharashtra State Board
        </p>

        <p className="text-gray-300">
          Percentage : <strong>64.00%</strong>
        </p>

        <p className="text-gray-300">
          Year : <strong>2023</strong>
        </p>

      </div>

      {/* SSC */}

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20">

        <div className="flex items-center gap-3">
          <School className="text-cyan-400" />
          <h3 className="text-xl font-semibold">
            Secondary (SSC)
          </h3>
        </div>

        <p className="mt-4 text-gray-400">
          Maharashtra State Board
        </p>

        <p className="text-gray-300">
          Percentage : <strong>82.40%</strong>
        </p>

        <p className="text-gray-300">
          Year : <strong>2021</strong>
        </p>

      </div>

    </div>
  );
}