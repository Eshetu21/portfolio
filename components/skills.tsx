export default function Skills() {
  const skills = [
    "Flutter",
    "Dart",
    "Laravel",
    "C++",
    "JavaScript",
    "PHP",
    "TypeScript",
    "Firebase",
    "Express.js",
    "FastAPI",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Supabase",
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="grid grid-cols-5 sm:grid-cols-5 gap-1">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-2 bg-black text-white font-medium rounded-full text-center"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
