export default function Skills() {
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

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Skills</h2>
      <div className="grid grid-cols-5 sm:grid-cols-5 gap-1">
        {skills.map((skill, index) => (
          <span
            key={index}
             className={`px-3 py-1 rounded-full text-center text-sm shadow-md ${
              isDarkMode ? "bg-gray-600" : "bg-black text-white"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
