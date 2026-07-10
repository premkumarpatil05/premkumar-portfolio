import { TypeAnimation } from "react-type-animation";

export default function HeroText() {
  return (
    <>
      <p className="text-blue-400 text-lg mb-4">
        👋 Hello, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-black leading-tight">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Premkumar Patil
        </span>
      </h1>

      <div className="mt-6 text-xl md:text-3xl text-gray-300 h-12">
        <TypeAnimation
          sequence={[
            "Data Analyst",
            1500,
            "React Developer",
            1500,
            "SQL Developer",
            1500,
            "Power BI Enthusiast",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
    </>
  );
}