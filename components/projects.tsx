import Image from "next/image";

export default function Projects({ isDarkMode }: { isDarkMode: boolean }) {
  const projects = [
    {
      title: "Job Portal",
      description:
        "An app built with Flutter and Laravel, allowing users to search for jobs.",
      technologies: ["Flutter", "Laravel", "MySQL", "GetX"],
      image: "/job.png",
      link: "https://github.com/Eshetu21/job-app",
    },
{
      title: "Earthquake Mapper",
      description:
        "An android application designed to visualize recent earthquake data from an online earthquake API",
      technologies: ["Flutter", "Dart", "LocalStorage"],
      image: "/eq.png",
      link: "https://github.com/Eshetu21/earthquake-mapper",
    },
    {
      title: "Hate Speech Detector",
      description:
        "An open source web app that identifies and classifies text as toxic or non-toxic. The application includes a machine learning model.",
      technologies: ["Next.js", "Python", "FastAPI"],
      image: "/hate.png",
      link: "https://github.com/Eshetu21/ossp",
    },
    {
      title: "Real Time Chat System",
      description:
        "A real-time chat system using a microservices architecture.",
      technologies: [
        "Node.js",
        "MongoDB",
        "Next.js",
        "Express.js",
        "RabbitMQ",
        "WebSocket",
      ],
      image: "/chat.png",
      link: "https://github.com/Eshetu21/DS-CHAT",
    },
    {
      title: "Whiteboard Sharing",
      description:
        "A collaborative web application for real-time whiteboard sharing.",
      technologies: ["Next.js", "Node.js", "Supabase", "WebSockets"],
      image: "/wb.png",
      link: "https://github.com/Eshetu21/whiteboard-sharing",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg rounded-xl overflow-hidden text-sm transition-transform transform hover:scale-105`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={100}
              className="w-full h-[180px] object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p
                className={` ${
                  isDarkMode ? "text-white" : " text-gray-600"
                } mt-2 text-sm`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 ${
                      isDarkMode ? "bg-gray-600 " : "bg-black"
                    } text-white" text-white rounded-full text-xs`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className={`inline-block text-center mt-4 px-4 py-2 border text-xs font-medium rounded-full transition-colors duration-300
                   ${
                     isDarkMode
                       ? "bg-gray-600 text-white hover:bg-white hover:text-black"
                       : "bg-white text-black hover:bg-black hover:text-white"
                   }
                         `}
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
