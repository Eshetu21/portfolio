import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Job Portal",
      description:
        "An app built with Flutter and Laravel, allowing users to search for jobs.",
      technologies: ["Flutter", "Laravel", "MySQL", "Provider"],
      image: "/spotifyapp.png",
      link: "",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block mt-4 text-blue-500 font-medium hover:underline"
              >
                View Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
