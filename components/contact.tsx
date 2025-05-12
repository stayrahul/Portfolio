"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

import { EXTRA_LINKS } from "@/constants";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xovdkqad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success("Thank you! Your message has been sent.");
      setForm({ name: "", email: "", message: "" });
      setSubmitted(true);
    } else {
      toast.error("Oops! Something went wrong.");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="px-6 sm:px-12 py-24 mb-28 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-xl sm:text-2xl text-gray-700 dark:text-white/80 max-w-2xl mx-auto mt-4 mb-12">
        Feel free to email me at{" "}
        <Link className="underline font-semibold" href={`mailto:${EXTRA_LINKS.email}`}>
          email
        </Link>{" "}
        or fill out the form below.
      </p>

      <div className="bg-white dark:bg-white/5 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 max-w-2xl mx-auto p-6 sm:p-16">
        <form
          className="flex flex-col gap-6 dark:text-black text-lg"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="h-16 px-6 rounded-2xl text-lg border border-gray-300 dark:border-white/20 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 outline-none focus:ring-4 focus:ring-cyan-500 transition"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="h-16 px-6 rounded-2xl text-lg border border-gray-300 dark:border-white/20 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 outline-none focus:ring-4 focus:ring-cyan-500 transition"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            className="h-72 px-6 py-4 rounded-2xl text-lg border border-gray-300 dark:border-white/20 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 outline-none focus:ring-4 focus:ring-cyan-500 transition"
            required
          />

          {/* Submit button: black in light mode, cyan in dark mode */}
          <button
            type="submit"
           className="group mt-6 flex items-center justify-center gap-3 h-16 text-xl px-10 
            bg-grey-500 text-black font-bold rounded-full
            hover:bg-grey-600
            dark:bg-white/10 dark:hover:bg-white/10
            dark:text-white
            transition transform hover:scale-105 active:scale-95"

          >
            Submit
            <FaPaperPlane className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          {submitted && (
            <p className="text-green-500 text-lg pt-4 animate-bounce text-center">
              Thank you! Your message has been submitted 🚀
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
