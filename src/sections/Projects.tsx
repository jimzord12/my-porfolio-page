import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import UpArrowRight from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:mx-auto lg:mb-8 lg:max-w-5xl lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        {/* Cards */}
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, idx) => (
            <Card
              key={`${project.title}-${idx}`}
              className="md:px-10 md:pt-12 lg:gap-16 lg:px-20 lg:pb-0 lg:pt-16"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16">
                <section className="lg:pb-16">
                  <div className="gradient-text inline-flex gap-2 text-sm font-extrabold uppercase tracking-widest">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:mt-4 md:text-4xl lg:text-wrap">
                    {project.title}
                  </h3>
                  <hr className="border-y- mt-4 opacity-10 md:mt-5" />
                  <ul className="mt-4 flex flex-col items-start gap-4 md:mt-6">
                    {project.results.map((result) => (
                      <li
                        key={`${result.title}-${idx}`}
                        className="secondary-text-color inline-flex items-center gap-2 text-sm md:text-base"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link}>
                    <button className="md: mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-bold text-gray-950 md:w-auto md:px-8 lg:mt-8">
                      View Live Site
                      <UpArrowRight className="size-4" />
                    </button>
                  </a>
                </section>

                <section className="-mb-12 mt-8 md:-mb-8 lg:relative lg:-mb-0 lg:-mt-0">
                  <Image
                    className="lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title + "-" + project.year}
                  />
                </section>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
