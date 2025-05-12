import React from 'react';

const ThankYouSection: React.FC = () => {
  return (
    <section id="thank-you" className="py-12 bg-transparent">
      <h1 className="text-center text-3xl font-semibold text-black dark:text-white mb-4">
        Thank You <span className="text-yellow-500 dark:text-yellow-400">for Visiting! 🫰</span>
      </h1>

      <div className="mt-8 mb-10 flex justify-center items-center w-full">
        <div className="flex flex-col gap-4 py-6 px-6 md:flex-row md:items-center md:justify-between 
                        bg-gray-100 dark:bg-slate-800 rounded-xl shadow-lg 
                        w-full max-w-3xl transition-colors duration-300">
          <div className="text-center md:text-center">
            <h2 className="text-xl font-bold text-black dark:text-white">
              I truly appreciate you taking the time to explore my website.
            </h2>
            <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-400">
              Your support and interest mean a lot to me!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
