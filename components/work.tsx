import Image from "next/image";

export const work = [
  {
    company: "AASTU Software Engineers Association",
    href: "https://aastu.software",
    location: "AASTU",
    title: "Mobile App Developer",
    logoUrl: "/asea.jpg",
    start: "November 2024",
    end: "Present",
    description:
      "Designed and developed a Flutter-based multi-tenant logistics system, integrating real-time data synchronization and optimizing app performance. Collaborated with backend developers to implement Laravel-based APIs and enhance system scalability.",
  },
  {
    company: "Micro sun and solutions PLC",
    href: "https://www.mssethiopia.com",
    location: "Addis Ababa, Ethiopia",
    title: "Flutter and Laravel Developer",
    logoUrl: "/mss.jpg",
    start: "June 2024",
    end: "September 2024",
    description:
      "Developed cross-platform mobile applications using Flutter, ensuring pixel-perfect UI by converting Figma designs. Built and maintained backend services with Laravel and implemented REST API integrations",
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
      "Worked on web application development, following best practices in front-end technologies. Gained experience in Web architecture, integrated backend APIs into Web apps, and contributed to multiple web-based projects.",
  },
];

export default function WorkExperience() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Work Experience</h2>
      <div className="space-y-6">
        {work.map((job, index) => (
          <div
            key={index}
            className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md border"
          >
            <Image
              src={job.logoUrl}
              alt={job.company}
              width={60}
              height={60}
              className="rounded-full border p-2"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-700">
                {job.company} -{" "}
                <span className="text-gray-500">{job.location}</span>
              </p>
              <p className="text-sm text-gray-500">
                {job.start} - {job.end}
              </p>
              <p className="mt-2 text-gray-600">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
