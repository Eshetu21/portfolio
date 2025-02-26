import Image from "next/image";

interface WorkProps {
  isDarkMode?: boolean;
}

export const work = [
  {
    company: "AASTU Software Engineers Association",
    href: "https://aastu.software",
    location: "AASTU",
    title: "Mobile App Developer",
    logoUrl: "/asea.jpg",
    start: "Nov 2024",
    end: "Present",
    description:
      "Designed and developed a Flutter-based multi-tenant logistics system, integrating real-time data synchronization and optimizing app performance.",
  },
  {
    company: "Micro sun and solutions PLC",
    href: "https://www.mssethiopia.com",
    location: "Addis Ababa, Ethiopia",
    title: "Flutter and Laravel Developer",
    logoUrl: "/mss.jpg",
    start: "June 2024",
    end: "Sept 2024",
    description:
      "Developed cross-platform mobile applications using Flutter, ensuring pixel-perfect UI by converting Figma designs.",
  },
  {
    company: "Prodigy InfoTech",
    href: "https://prodigyinfotech.dev/",
    location: "Remote",
    title: "Web Developer Intern",
    logoUrl: "/pro.svg",
    start: "Dec 2023",
    end: "Feb 2024",
    description:
      "Worked on web application development, following best practices in front-end technologies.",
  },
];

export default function WorkExperience({ isDarkMode }: WorkProps) {
  return (
    <div
      className={`max-w-3xl mx-auto p-4 ${isDarkMode} ?"text-white":"text-gray-900" `}
    >
      <h2 className="text-xl font-bold text-center mb-4">Work Experience</h2>
      <div className="space-y-3">
        {work.map((job, index) => (
          <div
            key={index}
            className={`p-4 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-md border flex flex-col items-start`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={job.logoUrl}
                alt={job.company}
                width={50}
                height={50}
                className="rounded-full border p-1"
              />
              <h3 className="text-lg font-semibold">{job.title}</h3>
            </div>
            <p className="text-gray-700 text-sm mt-1">
              <a
                href={job.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode ? "text-white" : "text-violet-700"
                } hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 px-0.5 py-1 rounded-md transition-all duration-300`}
              >
                {job.company}
              </a>{" "}
              -{" "}
              <span
                className={`${isDarkMode ? "text-white" : "text-gray-500"}`}
              >
                {job.location}
              </span>
            </p>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-gray-500"
              } text-xs`}
            >
              {job.start} - {job.end}
            </p>
            <p
              className={`mt-2 ${
                isDarkMode ? "text-white" : "text-gray-600"
              } text-sm text-left`}
            >
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
