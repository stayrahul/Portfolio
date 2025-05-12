import React from 'react';

type EducationItem = {
  id: number;
  degree: string;
  school: string;
  year: string;
  link?: string;
};

const educationList: EducationItem[] = [
  { 
    id: 1,
    degree: 'Class 11 — Science',
    school: 'Capital College and Research Centre, Kathmandu', 
    year: '(2024 - Present)',
    link: 'https://ccrc.edu.np'
  },
  { 
    id: 2,
    degree: 'Class 9 to Class 10',
    school: 'Adhunik Rastriya Secondary School, Hetauda', 
    year: '(Completed in 2024)',
    link: 'https://schooladhunik.edu.np'
  }
];

const Education: React.FC = () => {
  return (
    <section className="py-6 mt-8 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black dark:text-white">
        Education
      </h2>
      <div className="grid gap-6 px-6 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {educationList.map((edu) => (
          <div
            key={edu.id}
            className="group flex flex-col items-center justify-center p-6 min-h-[120px] w-full rounded-xl 
              border border-black/20 dark:border-white/20
              hover:border-cyan-400 hover:shadow-cyan-400 hover:shadow-md 
              hover:-translate-y-1 hover:scale-105 
              transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 text-center transition duration-300">
              {edu.degree}
            </h3>
            <p className="mt-1 text-sm text-gray-700 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-200 text-center transition duration-300">
              {edu.link ? (
                <a href={edu.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {edu.school}
                </a>
              ) : (
                edu.school
              )}
            </p>
            <p className="text-xs text-gray-600 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-100 text-center transition duration-300">
              {edu.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
