export default function Navbar() {
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl shadow-lg">
        
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Prem.dev
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer transition hover:text-cyan-400"
            >
              {link}
            </li>
          ))}
        </ul>

        <button className="rounded-xl bg-cyan-500 px-5 py-2 text-white hover:bg-cyan-400 transition">
          Hire Me
        </button>
      </nav>
    </header>
  );
}