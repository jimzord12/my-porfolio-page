import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import GrainBG from "@/components/GrainBG";
import CheckIcon from "@/assets/icons/check-circle.svg";
import UpArrowRight from "@/assets/icons/arrow-up-right.svg";
import { div } from "motion/react-client";

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
    <section className="pb-16 lg:mx-auto lg:max-w-5xl lg:py-24">
      <div className="container">
        <div className="flex flex-col justify-center">
          <p className="gradient-text md:text-md text-center font-semibold uppercase tracking-widest">
            Real-world Results
          </p>
        </div>

        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="secondary-text-color mx-auto mt-4 max-w-md text-center md:text-lg lg:text-xl">
          See how I transformed concepts into engaging digital experiences.
        </p>

        {/* Cards */}
        <div className="mt-10 flex flex-col gap-[81.5px] md:mt-[82px]">
          {portfolioProjects.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className="relative z-0 overflow-hidden rounded-3xl bg-gray-400/10 px-8 pt-8 outline outline-2 outline-slate-400/35 md:px-10 md:pt-12 lg:px-16 lg:py-14"
            >
              <GrainBG />

              <div className="flex">
                <div className="w-1/2 flex-1">
                  <div className="gradient-text inline-flex gap-2 text-sm font-extrabold uppercase tracking-widest">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:mt-4 md:text-4xl">
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
                    <button className="md: mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-bold text-gray-950 md:w-auto md:px-8">
                      View Live Site
                      <UpArrowRight className="size-4" />
                    </button>
                  </a>
                </div>

                <Image
                  className="-mb-4 mt-8 md:-mb-1 lg:w-1/2 lg:flex-1"
                  src={project.image}
                  alt={project.title + "-" + project.year}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
