"use client";
import Image from "next/image";

const images = Array.from({ length: 12 }, (_, i) => `/gallery/image${i + 1}.png`);

const Gallery = () => {
  return (
    <section className="py-6 mb-16">
      <h2 className="text-4xl md:text-4xl font-semibold text-center mb-6 text-black dark:text-white">
        Gallery
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center h-55"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={220}   
              height={300}
              className="rounded-xl object-fill" // Apply object-fill to make images fill the box
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
