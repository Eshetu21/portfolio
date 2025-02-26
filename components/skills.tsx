"use client";
import { motion } from "framer-motion";

const skills = [
  "Flutter",
  "Dart",
  "Laravel",
  "React",
  "Next.js",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Express.js",
  "C++",
  "PHP",
  "Firebase",
  "FastAPI",
  "MongoDB",
  "Supabase",
];

export default function Skills({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl mx-auto p-6 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      } rounded-lg shadow-md`}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className={`px-3 py-1 rounded-full text-center text-sm shadow-md ${
              isDarkMode ? "bg-gray-600" : "bg-black text-white"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
