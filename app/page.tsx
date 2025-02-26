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
    <div className="max-w-2xl mx-auto p-4 text-center">
      <div className="flex items-center justify-start space-x-6">
        <Image
          src={"/profile.jpg"}
          alt={"Profile"}
          width={120}
          height={120}
          className="rounded-full"
        />
        <div className="text-left">
          <h1 className="text-2xl font-bold">Eshetu Tesema</h1>
          <p className="text-gray-600 mt-2">
            Software Engineer | Mobile and Web Developer
          </p>
          <p className="text-gray-600 mt-2">
            Hello! My name is Eshetu, I build mobile and web applications. I am
            passionate about creating user-friendly and scalable solutions that
            make an impact. Always eager to learn and explore new technologies,
            I strive to develop efficient and high-quality applications.
          </p>
        </div>
      </div>
      <section className="mt-6">
        <Skills isDarkMode />
      </section>
      <section className="mt-6">
        <WorkExperience isDarkMode />
      </section>
      <section className="mt-6">
        <Projects isDarkMode />
      </section>
      <section className="mt-6">
        <Contact isDarkMode />
      </section>
    </div>
  );
}
