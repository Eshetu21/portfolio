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

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto p-6">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`fixed top-4 right-4 p-3 rounded-full shadow-md transition-colors ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
          }`}
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-6"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold">Eshetu Tesema</h1>
            <p className={`${isDarkMode ? "text-white" : "text-gray-600"}`}>
              Software Engineer | Mobile & Web Developer
            </p>
            <p className={`${isDarkMode ? "text-white" : "text-gray-600"}`}>
              Hello! My name is Eshetu, I am a passionate developer specializing
              in both mobile and web applications. With expertise in Flutter, I
              build scalable and high-performance mobile applications that
              provide seamless user experiences.
            </p>
          </div>
        </motion.div>
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

