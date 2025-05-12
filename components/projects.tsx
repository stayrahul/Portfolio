"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { PROJECTS_DATA } from "@/constants";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

type ProjectProps = (typeof PROJECTS_DATA)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) => {
  const projectRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={projectRef}
      className="group mb-8 sm:mb-12 last:mb-0"
    >
      <Link
        href={projectUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="block"
      >
        <div className="bg-gray-100 max-w-3xl sm:group-even:pl-8 border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[18rem] rounded-xl hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-6 pb-8 px-5 sm:pl-10 sm:pr-5 sm:pt-8 sm:max-w-[52%] flex flex-col h-full sm:group-even:ml-[17rem]">
            <h3 className="text-2xl font-semibold text-black dark:text-white group-hover:text-cyan-500 transition">
              {title}
            </h3>

            <p className="mt-2 text-base leading-relaxed text-gray-700 dark:text-white/75">
              {description}
            </p>

            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, i) => (
                <li
                  key={`${title}-tags-${i}`}
                  className="bg-black/[0.7] px-2.5 py-0.5 text-[0.7rem] uppercase tracking-wide text-white rounded-full dark:text-white/75"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-8 -right-32 w-[24rem]
            rounded-xl shadow-2xl group-even:right-[initial] 
            group-even:-left-32 group-hover:-translate-x-2
            group-hover:translate-y-2 group-hover:-rotate-2

            group-focus:-translate-x-2 group-focus:translate-y-2 group-focus:-rotate-2
            group-even:group-focus:translate-x-2
            group-even:group-focus:translate-y-2 group-even:group-focus:rotate-2

            group-focus:scale-[1.03]
            group-even:group-hover:translate-x-2
            group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2

            group-hover:scale-[1.03] transition"
          />
        </div>
      </Link>
    </motion.article>
  );
};

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-24">
      <SectionHeading>My Projects</SectionHeading>
      <div className="space-y-10">
        {PROJECTS_DATA.map((project, i) => (
          <Project key={`project-${i}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
