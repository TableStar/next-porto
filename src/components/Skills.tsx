import React from "react";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaReact size={110} />, label: "React" },
  { icon: <SiTypescript size={140} />, label: "TypeScript" },
];
const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381A5F_80%)] py-32">
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <div className="text-6xl font-bold mb-4">What I Do</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillIcons.map((skill, i) => (
            <div
              key={i}
              className="h-40 w-40 md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 roudned-xl"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
