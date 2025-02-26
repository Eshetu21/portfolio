"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import WorkExperience from "@/components/work";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-2xl mx-auto p-4">
        <button
          onClick={toggleTheme}
          className={`fixed top-4 right-4 p-2 rounded-full ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
          } hover:opacity-80 transition-opacity`}
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
        <div className="flex items-center justify-start space-x-6">
          <Image
            src={"/profile.jpg"}
            alt={"Profile"}
            width={120}
            height={120}
            className="rounded-full shadow-lg"
          />
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              Eshetu Tesema
            </motion.h1>
            <p
              className={`mt-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Software Engineer | Mobile and Web Developer
            </p>
            <p
              className={`mt-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Hello! My name is Eshetu, and I build mobile and web applications.
              I am passionate about creating user-friendly and scalable
              solutions that make an impact. Always eager to learn and explore
              new technologies, I strive to develop efficient and high-quality
              applications.
            </p>
          </div>
        </div>
        <section className="mt-8">
          <Skills isDarkMode={isDarkMode} />
        </section>

        <section className="mt-8">
          <WorkExperience isDarkMode={isDarkMode} />
        </section>

        <section className="mt-8">
          <Projects isDarkMode={isDarkMode} />
        </section>

        <section className="mt-8">
          <Contact isDarkMode={isDarkMode} />
        </section>
      </div>
    </div>
  );
}
