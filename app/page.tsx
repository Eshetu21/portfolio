import WorkExperience from "@/components/work";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Eshetu Tesema</h1>
        <p className="text-gray-600 mt-2">
          Software Engineer | Flutter & Web Developer
        </p>
        <a
          href="mailto:eshetutesema2@gmail.com"
          className="mt-4 inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
        >
          Contact Me
        </a>
      </section>
      <section className="mt-12">
        <Skills />
      </section>
      <section className="mt-12">
        <WorkExperience />
      </section>

      <section className="mt-12">
        <Projects />
      </section>

      <section className="mt-12 mb-16">
        <Contact />
      </section>
    </div>
  );
}
