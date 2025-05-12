// Importing necessary components from the specified location ("@/components").
import {
  About,
  Contact,
  Education,
  Intro,
  Projects,
  SectionDivider,
  Skills,
} from "@/components";
import { Hobbies } from "@/components/Hobbies";
import { Lang } from "@/components/lang";
import SocialMediaSection from "@/components/SocialMediaSection";
import ThankYouSection from "@/components/ThankYouSection";

// This is the main component for the Home page.
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* The Intro component is displayed at the top of the page. */}
      <Intro />

      {/* A Vertical line or divider separating sections on the page. */}
      <SectionDivider />

      {/* The About component provides information about the author or user. */}
      <About />

      <Lang />

      {/* The Projects component displays information about projects. */}
      <Projects />

      {/* The Skills component shows the skills of the author or user. */}
      <Skills />


      {/* A Vertical line or divider separating sections on the page. */}
      <Hobbies />

      {/* The Education component displays educational background information. */}
      <Education />
      {/* A Vertical line or divider separating sections on the page. */}


      <SocialMediaSection />
      {/* A Vertical line or divider separating sections on the page. */}

      {/* The Contact component allows users to get in touch. */}
      <Contact />

      <ThankYouSection />



    </main>
  );
}
// This is the main component for the Home page.
// It serves as the entry point for the application and contains all the sections of the page.
// The component is structured to include various sections such as Intro, About, Projects, Skills, Education, and Contact.