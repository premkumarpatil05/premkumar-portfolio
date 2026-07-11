interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20">

      {/* Project Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-cyan-400 px-4 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-purple-400 px-4 py-2 text-purple-400 transition hover:bg-purple-400 hover:text-black"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>
    </div>
  );
}