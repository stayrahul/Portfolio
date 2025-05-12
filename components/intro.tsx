// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

// Define the Intro component.
const Intro = () => {
  // Use the 'useSectionInView' hook to track section visibility.
  const { ref } = useSectionInView("Home", 0.5);
  // Use the 'useActiveSectionContext' to manage active sections and clicks.
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.svg"
              alt={`${OWNER_NAME.split(" ")[0]} portrait`}
              width={220}
              height={220}
              quality={100}
              priority={true}
              className="rounded-full border-4 border-blue-500 shadow-2xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-0 blur-lg transition duration-500 group-hover:opacity-70" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute text-2xl bottom-0 right-0"
          >
            🫶
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <b className="font-bold">Hi, I&apos;m <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold text-xl md:text-5xl lg:text-6xl">
            Rahul Kushwaha
          </span>.</b>{" "}
         a creative developer and ambitious student crafting beautiful digital experiences.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2 justify-center items-center"
      >
        <div className="flex gap-2 flex-col sm:flex-row text-lg font-medium">
         

          <Link
            href={EXTRA_LINKS.resume}
            target="_blank"
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition borderBlack dark:bg-white/10"
          >
            My Resume
           
          </Link>
        </div>
        <div className="flex gap-2 text-lg font-medium">       
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
