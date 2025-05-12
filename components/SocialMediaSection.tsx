"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";


const SocialMediaSection = () => {
  const links = [
    { href: "https://facebook.com/stayrahul", icon: <FaFacebook size={27} />, label: "Facebook" },
    { href: "https://twitter.com/stayrahul", icon: <FaTwitter size={27} />, label: "Twitter" },
    { href: "https://www.youtube.com/@mb7gaming-1", icon: <FaYoutube size={27} />, label: "YouTube" },
    { href: "https://github.com/stayrahul", icon: <FaGithub size={27} />, label: "GitHub" },
    { href: "https://instagram.com/stayrahul", icon: <FaInstagram size={27} />, label: "Instagram" },
    { href: "https://wa.me/+9779822228722", icon: <FaWhatsapp size={27} />, label: "WhatsApp" },
    { href: "https://t.me/stayrahul", icon: <FaTelegram size={27} />, label: "Telegram" },
    { href: "https://tiktok.com/@rahulk_0", icon: <FaTiktok size={27} />, label: "TikTok" },
  ];


  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="social-media-section py-8 px-2 text-center relative z-10 my-16"
    >
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white sm:text-3xl md:text-4xl">
        Connect with Me
      </h2>
      <p className="text-base mb-6 text-gray-800 dark:text-gray-300 sm:text-lg md:text-xl">
        Follow me on social media:
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={item.label}
            className="w-14 h-14 sm:w-16 sm:h-16 flex justify-center items-center 
              rounded-full border border-black/20 dark:border-white/20 
              text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 
              hover:border-cyan-500 dark:hover:border-cyan-400 
              transition-all transform hover:scale-105"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default SocialMediaSection;