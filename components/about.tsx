"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-12 max-w-[45rem] text-center leading-8 sm:mb-26 scroll-mt-26"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with the updated, concise information about the user. */}
      <p className="mb-2">
        I'm a Web Development Enthusiast student passionate about Web Development. I started coding out of curiosity and now I’m focused on building real-world projects. I’ve worked on personal projects like my website, diving into React, HTML/CSS, and JavaScript along the way.
      </p>

      {/* Display another paragraph about the user's interests and hobbies. */}
      <p>
        I love learning by doing and am always exploring new tools and technologies. If you're into tech or want to collaborate on a project, let's connect! 🚀
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
