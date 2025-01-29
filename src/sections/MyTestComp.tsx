import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { ReactElement } from 'react';
import CardHeader from '@/components/CardHeader';

const portfolioProjects = [
  {
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
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
    <section className='pb-16 lg:mx-auto lg:max-w-5xl lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />

        {/* Cards */}
        <div className='mt-10 flex flex-col gap-[81.5px] md:mt-[82px]'>
          {portfolioProjects.map((project, idx) => (
            <>
              <CardHeader title='Flexbox' description='' />
              <Card
                key={`${project.title}-${idx}`}
                className='flex w-full justify-between'
                // className="w-full lg:grid lg:grid-cols-2"
              >
                <Box num='01' color='bg-sky-400' />
                <Box num='02' color='bg-amber-500' />
              </Card>

              <CardHeader title='Grid' description='' />
              <Card
                key={`${project.title}-${idx + 1}`}
                // className="flex w-full justify-between"
                className='grid grid-cols-2 gap-4'
              >
                <Box num='01' color='bg-sky-400' />
                <Box num='02' color='bg-amber-500' />
              </Card>

              <CardHeader
                title='Flexbox - Long Tape with Overflow'
                description=''
              />
              <Card className='flex w-[100px] overflow-x-auto'>
                {/* <div className='flex w-[1500px]'> */}
                {/* <div className='flex w-max'> */}
                <Box num='01' color='bg-sky-400' />
                <Box num='02' color='bg-amber-500' />
                <Box num='03' color='bg-red-400' />
                <Box num='04' color='bg-emerald-500' />
                <Box num='05' color='bg-fuchsia-400' />
                <Box num='06' color='bg-cyan-500' />
                <Box num='07' color='bg-violet-800' />
                <Box num='08' color='bg-amber-800' />
                {/* </div> */}
              </Card>
            </>
          ))}
        </div>
        <div className='mt-24'>
          <div className='flex overflow-x-auto rounded-xl border bg-slate-500/30 p-4'>
            <Box num='01' color='bg-sky-400' />
            <Box num='02' color='bg-amber-500' />
            <Box num='03' color='bg-red-400' />
            <Box num='04' color='bg-emerald-500' />
            <Box num='05' color='bg-fuchsia-400' />
            <Box num='06' color='bg-cyan-500' />
            <Box num='07' color='bg-violet-800' />
            <Box num='08' color='bg-amber-800' />
          </div>
        </div>
      </div>
    </section>
  );
};

const Box = ({
  num,
  color,
  size = { x: 200, y: 100 },
}: {
  num: string;
  color: string;
  size?: { x: number; y: number };
}): ReactElement => (
  <div
    className={`flex flex-none h-[${size.y}px] w-[${size.x}px] items-center justify-center rounded-xl ${color} text-center text-2xl font-bold`}
  >
    {num}
  </div>
);
