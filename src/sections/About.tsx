import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import CardHeader from '@/components/CardHeader';
import ToolBoxItems from '@/components/ToolBoxItems';

const toolboxItems = [
  { title: 'JavaScript', iconType: JavascriptIcon },
  { title: 'HTML5', iconType: HTMLIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'Chrome', iconType: ChromeIcon },
  { title: 'GitHub', iconType: GithubIcon },
];

const hobbies = [
  {
    title: 'Coding',
    emoji: '💻',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Biking',
    emoji: '🏍️',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Music',
    emoji: '🎶',
    left: '45%',
    top: '70%',
  },
];

export const AboutSection = () => {
  return (
    <div className='mt-36 lg:py-16'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me.'
        />
        <div className='mt-20 flex flex-col gap-8'>
          {/*  */}
          {/* My Reads */}
          <div className='flex flex-col gap-8 md:grid md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] px-6 py-7 md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspectives.'
              />

              <div className='mx-auto mt-8 w-40'>
                <Image src={bookImage} alt='Book Cover' />
              </div>
            </Card>
            {/*  */}
            {/* My Toolbox */}
            <Card className='h-[320px] p-0 md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='My Toolbox'
                description='Explore the technologies and tools used to craft expeptional
                  digital experiences.'
                className='px-6 pt-6'
              />

              <ToolBoxItems items={toolboxItems} className='mt-6' />
              <ToolBoxItems
                items={[...toolboxItems].reverse()}
                className='mt-6'
              />
            </Card>
          </div>
          {/*  */}
          {/* Beyond the Code */}
          <div className='flex flex-col gap-8 md:grid md:grid-cols-5 lg:md:grid-cols-3'>
            <Card className='flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Beyond the Code'
                description='Explore my interests and hobbies beyond the digital realm.'
                className='px-6 py-6'
              />
              <div className='relative flex-1'>
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className='gradient-bg absolute inline-flex w-fit items-center justify-center gap-2 rounded-full px-6 py-1'
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                  >
                    <span className='font-semibold text-gray-950'>
                      {hobby.title}
                    </span>
                    <span className='text-xl'>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            {/*  */}
            {/* My Location on Map */}
            <Card className='h-[320px] p-0 md:col-span-2 lg:col-span-1'>
              <Image
                src={mapImage}
                alt='My Alley'
                className='h-full w-full object-cover object-left-top'
              />
              <div className='gradient-bg center-abs-obj absolute rounded-full border-4 border-sky-600/75'>
                <Image
                  src={smileMemoji}
                  alt='My Memoji'
                  className='size-20 object-contain'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
