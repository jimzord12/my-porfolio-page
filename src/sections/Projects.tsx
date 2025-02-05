import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import Image from 'next/image';
import CheckIcon from '@/assets/icons/check-circle.svg';
import UpArrowRight from '@/assets/icons/arrow-up-right.svg';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import GitHubIcon from '@/assets/icons/techLogos/github.svg';
import Link from 'next/link';

const portfolioProjects = [
  {
    company: 'UNIWA - LCIIS',
    year: '2022 - 2024',
    title: 'Online Web3 Game',
    results: [
      { title: '4.5/5 Rating from 268 Users' },
      { title: 'User-friendly & Responsive UI' },
      {
        title: 'Performant (web workers, code splitting, memoization and more)',
      },
    ],
    link: 'https://genera-game-v3-new-graphics.vercel.app/',
    github:
      'https://github.com/jimzord12/Card-Game-Isolated-Testing/tree/main/card-game-isolated-testing',
    image: darkSaasLandingPage,
  },
  {
    company: 'UNIWA - LCIIS',
    year: '2023 - 2024',
    title: 'Rewarding Tool',
    results: [
      { title: 'Captivating User Interface' },
      { title: 'Seamless Blockchain Interactions' },
      { title: 'Microservices Interactions' },
    ],
    link: 'https://genera-rewarding-tool.netlify.app/rewards-page#available-rewards-section',
    github:
      'https://github.com/jimzord12/RewardingTool-Frontend-Deploy/tree/final_version',
    image: lightSaasLandingPage,
  },
  {
    company: 'UNIWA - LCIIS',
    year: '2024',
    title: 'Social Web3 Forum',
    results: [
      { title: 'Simply & Intuitive UI' },
      { title: 'Built by extending a WordPress site' },
      { title: 'All the Content was personally created' },
    ],
    link: 'https://life-genera.eu/social-forum-v2/',
    github: 'https://github.com/jimzord12/SocialForum-WP-Frontend-Deploy',
    image: lightSaasLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className='pb-16 lg:mx-auto lg:mb-8 lg:max-w-5xl lg:py-24'>
      <div className='container' id='projects'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />
        {/* Cards */}
        <div className='mt-10 flex flex-col gap-20 md:mt-20'>
          {portfolioProjects.map((project, idx) => (
            <Card
              key={`${project.title}-${idx}`}
              className={
                'shadow-intense-layered sticky md:px-10 md:pt-12 lg:gap-16 lg:px-20 lg:pb-0 lg:pt-16'
              }
              style={{
                top: 64 + idx * 30,
              }}
            >
              <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-16'>
                <section className='lg:pb-16'>
                  <div className='gradient-text inline-flex gap-2 text-sm font-extrabold uppercase tracking-widest'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='mt-2 font-serif text-2xl md:mt-4 md:text-4xl lg:text-wrap'>
                    {project.title}
                  </h3>
                  <hr className='border-y- mt-4 opacity-10 md:mt-5' />
                  <ul className='mt-4 flex flex-col items-start gap-4 md:mt-6'>
                    {project.results.map((result) => (
                      <li
                        key={`${result.title}-${idx}`}
                        className='secondary-text-color inline-flex items-center gap-2 text-sm md:text-base'
                      >
                        <CheckIcon className='size-5 shrink-0 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className='mt-8 flex items-center justify-between md:justify-start md:gap-8'>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-bold text-gray-950 md:w-auto md:px-8'>
                        View Live Site
                        <UpArrowRight className='size-4' />
                      </button>
                    </a>
                    <Link href={project.github} passHref legacyBehavior>
                      <a target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon className='size-12 min-w-10 rounded-xl border bg-white p-1.5 text-gray-950 transition-all duration-500 hover:invert' />
                      </a>
                    </Link>
                  </div>
                </section>

                <section className='-mb-12 mt-8 md:-mb-8 lg:relative lg:-mb-0 lg:-mt-0'>
                  <Image
                    className='lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                    src={project.image}
                    alt={project.title + '-' + project.year}
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
