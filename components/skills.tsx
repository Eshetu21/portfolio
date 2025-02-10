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
            className=" bg-black text-white font-thin rounded-full text-center"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
