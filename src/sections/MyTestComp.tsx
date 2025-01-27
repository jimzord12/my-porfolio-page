import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
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
  // {
  //   company: "Innovative Co",
  //   year: "2021",
  //   title: "Light Saas Landing Page",
  //   results: [
  //     { title: "Boosted sales by 20%" },
  //     { title: "Expanded customer reach by 35%" },
  //     { title: "Increased brand awareness by 15%" },
  //   ],
  //   link: "https://youtu.be/7hi5zwO75yc",
  //   image: lightSaasLandingPage,
  // },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
];

export const MyTestComp = () => {
  return (
    <section className="pb-16 lg:mx-auto lg:max-w-5xl lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        {/* Cards */}
        <div className="mt-10 flex flex-col gap-[81.5px] md:mt-[82px]">
          {portfolioProjects.map((project, idx) => (
            <>
              <Card
                key={`${project.title}-${idx}`}
                className="flex w-full justify-between"
                // className="w-full lg:grid lg:grid-cols-2"
              >
                <div className="h-[100px] w-[200px] rounded-xl bg-sky-400 text-center">
                  01
                </div>
                <div className="h-[100px] w-[200px] rounded-xl bg-amber-500 text-center">
                  02
                </div>
              </Card>

              <Card
                key={`${project.title}-${idx + 1}`}
                // className="flex w-full justify-between"
                className="grid grid-cols-2 gap-4"
              >
                <div className="h-[100px] w-[200px] rounded-xl bg-sky-400 text-center">
                  01
                </div>
                <div className="h-[100px] w-[200px] rounded-xl bg-amber-500 text-center">
                  02
                </div>
              </Card>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
