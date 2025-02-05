'use client';

import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import {
  BootstrapIcon,
  CssIcon,
  ChromeIcon,
  DockerIcon,
  EthereumIcom,
  ExpressIcon,
  GitHubIcon,
  JavascriptIcon,
  NextjsIcon,
  OpenAIIcon,
  ReactIcon,
  StorybookIcon,
  TailwindcssIcon,
  TypescriptIcon,
  ViteIcon,
  HTMLIcon,
} from '@/assets/icons/techLogos';
import mapImage from '@/assets/images/myMap.webp';
import smileMemoji from '@/assets/images/memoji-smile.png';
import CardHeader from '@/components/CardHeader';
import ToolBoxItems from '@/components/ToolBoxItems';
import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { cn } from '@/utils/helpers';

const toolboxItemsTop = [
  { title: 'JavaScript', iconType: JavascriptIcon },
  { title: 'HTML5', iconType: HTMLIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'Chrome', iconType: ChromeIcon },
  { title: 'GitHub', iconType: GitHubIcon },
  { title: 'Storybook', iconType: StorybookIcon },
  { title: 'TailwindCSS', iconType: TailwindcssIcon },
];

const toolboxItemsBottom = [
  { title: 'Bootstrap', iconType: BootstrapIcon },
  { title: 'Docker', iconType: DockerIcon },
  { title: 'Ethereum', iconType: EthereumIcom },
  { title: 'Express', iconType: ExpressIcon },
  { title: 'Nextjs', iconType: NextjsIcon },
  { title: 'OpenAI', iconType: OpenAIIcon },
  { title: 'Typescript', iconType: TypescriptIcon },
  { title: 'Vite', iconType: ViteIcon },
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

const AboutSection = () => {
  const constraitRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  return (
    <div className='mt-36 lg:py-16'>
      <div className='container' id='about'>
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

              <div className='mx-auto mt-8 w-40 transition-transform duration-500 hover:rotate-45 hover:scale-125'>
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

              <ToolBoxItems
                items={toolboxItemsTop}
                className='mt-6'
                moveDirection='right'
              />
              <ToolBoxItems
                items={toolboxItemsBottom}
                className='mt-6'
                moveDirection='left'
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
              <div className='relative flex-1' ref={constraitRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className={cn(
                      'gradient-bg absolute inline-flex w-fit items-center justify-center gap-2 rounded-full px-6 py-1',
                      isDragging ? 'cursor-grabbing' : 'cursor-grab',
                    )}
                    drag
                    dragConstraints={constraitRef}
                    onPointerDown={() => setIsDragging(true)} // Detects when the user starts dragging
                    onPointerUp={() => setIsDragging(false)} // Resets when the user releases the drag
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                  >
                    <span className='font-semibold text-gray-950'>
                      {hobby.title}
                    </span>
                    <span className='text-xl'>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            {/*  */}
            {/* My Location on Map */}
            <Card className='h-[320px] p-0 md:col-span-2 lg:col-span-1'>
              <Image
                src={mapImage}
                alt='My Alley'
                className='h-full w-full object-cover object-center'
              />
              <div className='center-abs-obj absolute'>
                <div className='gradient-bg h-16 w-16 animate-ping-large rounded-full border-2 border-sky-600/75' />
              </div>
              <div className='gradient-bg center-abs-obj absolute rounded-full border-2 border-sky-600/75'>
                <Image
                  src={smileMemoji}
                  alt='My Memoji'
                  className='size-20 object-contain'
                />
              </div>
              <div className='absolute inset-x-0 bottom-2 flex justify-center gap-4'>
                <span className='gradient-bg inline-flex w-fit items-center justify-center gap-2 rounded-full px-2 py-1 text-sm shadow-lg shadow-black/60'>
                  Greece, Athens
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
