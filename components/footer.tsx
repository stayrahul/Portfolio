import Link from "next/link";

import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

// Define the Footer component.
const Footer = () => {
  return (
  
    <footer className="mb-6 px-4 text-center text-gray-500">
       <hr className="border-t border-gray-300 dark:border-white/20 mb-4" />

      <small className="mb-2 block text-md">
        {/* Display the copyright notice with dynamic years and owner name. */}
        &copy; {new Date().getFullYear()} <b>{OWNER_NAME.split(" ")[0]}♡Pidii</b> |
        All rights reserved |{" "}
        <Link
           href="tel:+9779822228722"
           className="font-semibold"
           target="_blank"
           rel="noreferrer noopener" 
           title="Call Me"
           >
           Call Me
         </Link>

      </small>
    </footer>
  );
};

// Export the Footer component.
export default Footer;
