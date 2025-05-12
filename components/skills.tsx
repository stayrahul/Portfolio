import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
  ];

  return (
    <section className="py-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-black dark:text-white">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center w-[250px] h-[100px] p-4 rounded-xl 
              border border-black/20 dark:border-white/20
              hover:border-cyan-400 hover:shadow-cyan-400 hover:shadow-lg 
              hover:-translate-y-1 hover:scale-105 
              transition-all duration-300 cursor-pointer mx-auto"
          >
            <div className="text-3xl text-black dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition duration-300 mb-1">
              {skill.icon}
            </div>
            <h3 className="text-sm font-medium text-black dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition duration-300">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
