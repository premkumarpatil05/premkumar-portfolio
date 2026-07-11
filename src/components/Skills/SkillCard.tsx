import { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
}

export default function SkillCard({
  icon,
  title,
}: SkillCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20">

      <div className="mb-4 text-cyan-400">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

    </div>
  );
}