"use client";
import Image from "next/image";

const devices = [
  {
    name: "MacBook Air M2",
    description: "Apple Silicon laptop, ideal for development and creative workflows.",
    image: "/gallery/mac.svg", // Replace with your actual image path
  },
  {
    name: "Realme GT Master Edition",
    description: "Performance-oriented Android phone, great for testing and daily use.",
    image: "/gallery/phone.svg", // Replace with your actual image path
  },
];

const Devices = () => {
  return (
    <section className="py-10 mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-black dark:text-white">
        My Devices
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 max-w-4xl mx-auto">
        {devices.map((device, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-6 rounded-xl border border-black/10 dark:border-white/10 hover:shadow-md hover:scale-105 transition duration-300 bg-white dark:bg-white/5"
          >
            <div className="w-full h-48 mb-4 relative">
              <Image
                src={device.image}
                alt={device.name}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-cyan-500 transition">
              {device.name}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {device.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Devices;
