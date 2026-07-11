import {
  Code2,
  Database,
  BarChart3,
  GitBranch,
  FileCode,
  Braces,
  Terminal,
  Monitor,
} from "lucide-react";

import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#030712] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            My Tech Stack
          </h2>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <SkillCard
            icon={<FileCode size={34} />}
            title="HTML5"
          />

          <SkillCard
            icon={<Braces size={34} />}
            title="CSS3"
          />

          <SkillCard
            icon={<Code2 size={34} />}
            title="JavaScript"
          />

          <SkillCard
            icon={<Monitor size={34} />}
            title="React + TypeScript"
          />

          <SkillCard
            icon={<Database size={34} />}
            title="SQL"
          />

          <SkillCard
            icon={<Database size={34} />}
            title="MySQL"
          />

          <SkillCard
            icon={<BarChart3 size={34} />}
            title="Power BI"
          />

          <SkillCard
            icon={<Terminal size={34} />}
            title="Python"
          />

          <SkillCard
            icon={<Terminal size={34} />}
            title="Java (Basic)"
          />

          <SkillCard
            icon={<Terminal size={34} />}
            title="C / C++"
          />

          <SkillCard
            icon={<GitBranch size={34} />}
            title="Git & GitHub"
          />

          <SkillCard
            icon={<Monitor size={34} />}
            title="VS Code"
          />

        </div>

      </div>
    </section>
  );
}