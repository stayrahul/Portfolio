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

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={projectRef}
      className="group mb-4 sm:mb-6 last:mb-0"
    >
      <div className="bg-gray-100 max-w-[36rem] sm:group-even:pl-6 border border-black/5 overflow-hidden sm:pr-6 relative sm:h-[16rem] rounded-md hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-6 px-4 sm:pl-8 sm:pr-2 sm:pt-8 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[15rem]">
          <h3 className="text-xl font-semibold">{title}</h3>

          <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap mt-3 gap-2 sm:mt-auto">
            {tags.map((tag, i) => (
              <li
                key={`${title}-tags-${i}`}
                className="bg-black/[0.7] px-2 py-[2px] text-[0.65rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={projectUrl}
          target="_blank"
          rel="noreferrer noopener"
          title={`Visit Project: ${title}`}
          className="group/project"
        >
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-6 -right-32 w-[22rem]
            rounded-t-lg shadow-2xl group-even:right-[initial] 
            group-even:-left-32 group-hover:-translate-x-2
            group-hover:translate-y-2 group-hover:-rotate-2

            group-focus/project:-translate-x-2
            group-focus/project:translate-y-2 group-focus/project:-rotate-2
            group-even:group-focus/project:translate-x-2
            group-even:group-focus/project:translate-y-2 group-even:group-focus/project:rotate-2

            group-focus/project:scale-[1.03]
            group-even:group-hover:translate-x-2
            group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2

            group-hover:scale-[1.03] transition"
          />
        </Link>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-20">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {PROJECTS_DATA.map((project, i) => (
          <Project key={`project-${i}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
