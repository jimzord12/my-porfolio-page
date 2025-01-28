import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TechIcon from '@/components/TechIcon';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';

const toolboxItems = [
  { title: 'JavaScript', iconType: JavascriptIcon },
  { title: 'HTML5', iconType: HTMLIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'Chrome', iconType: ChromeIcon },
  { title: 'GitHub', iconType: GithubIcon },
];

export const AboutSection = () => {
  return (
    <div className='mt-36 pb-96'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me.'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <Card className='px-6 py-7'>
            <div>
              <div className='inline-flex items-center gap-1'>
                <StarIcon className='size-10 text-green-300' />
                <h3 className='font-serif text-3xl'>My Reads</h3>
              </div>
              <p className='secondary-text-color text-sm'>
                Explore the books shaping my perspectives.
              </p>
              <div className='-mb-24 mt-8 flex w-full justify-center'>
                <Image
                  src={bookImage}
                  alt='Book Cover'
                  className='size-40 h-auto'
                />
              </div>
            </div>
          </Card>
          <Card className='px-6 py-7'>
            <div>
              <div className='inline-flex items-center gap-1'>
                <StarIcon className='size-10 text-green-300' />
                <h3 className='font-serif text-3xl'>My Toolbox</h3>
              </div>
              <p className='secondary-text-color text-sm'>
                Explore the technologies and tools used to craft expeptional
                digital experiences.
              </p>
              <div>
                {toolboxItems.map((tool) => (
                  <div key={tool.title} className='flex'>
                    <TechIcon component={tool.iconType} />
                    <span>{tool.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card className='px-6 py-7'>
            <div>
              <div className='inline-flex items-center gap-1'>
                <StarIcon className='size-10 text-green-300' />
                <h3 className='font-serif text-3xl'>Beyond the Code</h3>
              </div>
              <p className='secondary-text-color text-sm'>
                Explore my interests and hobbies beyond the digital realm.
              </p>
            </div>
          </Card>
          <Card className='p-0'>
            <div className='flex h-full w-full'>
              <Image src={mapImage} alt='My Alley' />
              <div className='gradient-bg center-abs-obj absolute size-24 rounded-full border-4 border-sky-600/50'>
                <Image
                  src={smileMemoji}
                  alt='My Memoji'
                  className='object-contain'
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
