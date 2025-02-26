"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact({ isDarkMode }: { isDarkMode: boolean }) {
  const contactLinks = [
    { name: "GitHub", url: "https://github.com/Eshetu21", icon: "/github.png" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/eshetu-tesema-538b962a6",
      icon: "/linkedin.png",
    },
    { name: "Telegram", url: "https://t.me/estar23", icon: "/telegram.png" },
    {
      name: "Email",
      url: "mailto:eshetutesema2@gmail.com?subject=Hello&body=I want to connect!",
      icon: "/email.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl mx-auto p-8 text-center rounded-lg shadow-md transition-all duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6">Feel free to reach out. {"I'd love to connect!"}</p>

      <div className="flex justify-center gap-6">
        {contactLinks.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center space-y-2 transition-transform"
          >
            <Image
              src={contact.icon}
              alt={contact.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span
              className={`text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {contact.name}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
