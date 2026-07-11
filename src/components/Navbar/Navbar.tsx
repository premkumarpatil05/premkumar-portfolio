import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-5 flex w-[95%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl shadow-xl">

        {/* Logo */}
        <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-3xl font-black text-transparent">
          PK
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li
              key={link}
              className="group relative cursor-pointer text-gray-300 transition-colors duration-300 hover:text-cyan-400"
            >
              {link}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Hire Me Button (Desktop Only) */}
          <button className="hidden md:block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40">
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-auto mt-3 w-[95%] rounded-2xl border border-white/10 bg-[#0b1120]/90 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col p-4">
            {links.map((link) => (
              <li
                key={link}
                className="cursor-pointer rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/10 hover:text-cyan-400"
              >
                {link}
              </li>
            ))}

            <button className="mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white">
              Hire Me
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}