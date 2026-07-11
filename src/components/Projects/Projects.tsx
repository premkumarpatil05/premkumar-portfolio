import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Sales Analysis",
      description:
        "Analyzed sales and customer data using SQL and MySQL to identify trends, top-selling products and revenue insights.",
      tech: ["SQL", "MySQL", "Data Analysis"],
      github:
        "https://github.com/premkumarpatil05/E-Commerce-Sales-Analysis-SQL",
      live: "",
      image: "https://placehold.co/600x400/111827/ffffff?text=SQL+Project",
    },

    {
  title: "B.Sc Department Website",
  description:
    "Responsive college department website built using HTML, CSS and JavaScript.",
  tech: ["HTML", "CSS", "JavaScript"],
  github:
    "https://github.com/premkumarpatil05/bsc-cs-department",
  live: "https://bsc-cs-department.vercel.app/",
  image: "https://placehold.co/600x400/111827/ffffff?text=Department+Website",
},

    {
      title: "Personal Portfolio",
      description:
        "Modern developer portfolio built using React, TypeScript and Tailwind CSS.",
      tech: ["React", "TypeScript", "Tailwind"],
      github:
        "https://github.com/premkumarpatil05/premkumar-portfolio",
      live: "#",
      image: "https://placehold.co/600x400/111827/ffffff?text=Portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#030712] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-400">
            Here are some projects I've worked on.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}