// components/Languages.tsx

export const Lang = () => {
  const languages = [
    { language: "English", proficiency: "Intermediate" },
    { language: "Nepali", proficiency: "Fluent" },
    { language: "Bhojpuri", proficiency: "Fluent" },
    { language: "Hindi", proficiency: "Intermediate" },
  ];

  return (
    <section className="py-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-black dark:text-white">
        Languages
      </h2>
      <div className="grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-6 min-h-[80px] w-full rounded-xl 
              border border-black/20 dark:border-white/20
              hover:border-cyan-400 hover:shadow-cyan-400 hover:shadow-md 
              hover:-translate-y-1 hover:scale-105 
              transition-all duration-300 cursor-pointer mb-6"
          >
            <h3 className="text-base font-semibold text-black dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition duration-300">
              {lang.language}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition duration-300">
              Proficiency: {lang.proficiency}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
