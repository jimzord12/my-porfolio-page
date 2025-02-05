import Image from 'next/image';
// import memojiImage from '@/assets/images/memoji-computer.png';
import mySelfImage from '@/assets/images/final-version-porfolio-hero.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import StarIcon from '@/assets/icons/star.svg';
import HeroOrbit from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import GrainBG from '@/components/GrainBG';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='relative z-0 py-32 md:py-48 lg:py-60' id='hero'>
      <div className='absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        {/* Background Grain Image to make the Rings look good */}
        <GrainBG />

        {/* Rings */}
        <div className='hero-glow-ring size-[620px]' />
        <div className='hero-glow-ring size-[820px]' />
        <div className='hero-glow-ring size-[1020px]' />
        <div className='hero-glow-ring size-[1220px]' />

        {/* Stars */}
        <HeroOrbit
          size={800}
          rotation={-72}
          spinDurationSec='120s'
          selfSpinDurationSec='20s'
        >
          <StarIcon className='size-28 text-green-400' />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          spinDurationSec='85s'
          selfSpinDurationSec='10s'
        >
          <StarIcon className='size-12 text-green-400' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} spinDurationSec='75s'>
          <StarIcon className='size-8 text-green-400' />
        </HeroOrbit>

        {/* Sparkles */}
        <HeroOrbit size={710} rotation={144} spinDurationSec='90s'>
          <SparkleIcon className='size-14 opacity-25' />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} spinDurationSec='80s'>
          <SparkleIcon className='size-10 opacity-25' />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} spinDurationSec='72s'>
          <SparkleIcon className='size-8 opacity-25' />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={79} spinDurationSec='65s'>
          <SparkleIcon className='size-5 opacity-25' />
        </HeroOrbit>

        {/* Circles */}
        <HeroOrbit size={720} rotation={85} shouldSpin={false}>
          <div className='size-3 rounded-full bg-emerald-300/25' />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldSpin={false}>
          <div className='size-2 rounded-full bg-emerald-300/25' />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldSpin={false}>
          <div className='size-3 rounded-full bg-emerald-300/25' />
        </HeroOrbit>
      </div>

      <div className='container mx-auto flex flex-col items-center'>
        <div className='z-10 flex translate-y-8 flex-col items-center'>
          <Image
            src={mySelfImage}
            alt='Me'
            width={200}
            height={200}
            className='rounded-full border-2'
          />
        </div>
        <div className='z-20'>
          <div className='inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-slate-950 px-4 py-1.5 text-sm'>
            <div className='relative size-2.5 rounded-full bg-green-500'>
              <div className='absolute inset-0 size-2.5 animate-ping-large rounded-full bg-green-500' />
            </div>
            <span className='text-sm font-medium'>
              Available for new projects
            </span>
          </div>
        </div>

        <div className='mt-8 max-w-lg'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-center font-serif text-3xl tracking-wide md:text-5xl'>
              Building Exceptional
              <br />
              User Experiences
            </h1>
            <p className='text-center text-white/60 md:text-lg'>
              I specialize in transforming desings into functional,
              high-performing web applications. Let&apos;s discuss your next
              project.
            </p>
          </div>

          <div className='mt-[32.5px] flex flex-col items-center gap-4 md:flex-row md:justify-center'>
            <Link href='#projects'>
              <button className='group inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-6 transition-colors hover:bg-slate-500/50'>
                <span>Explore My Work</span>
                <ArrowDown className='size-4 group-hover:animate-bounce' />
              </button>
            </Link>
            <Link href='#contact'>
              <button className='group inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 transition-shadow duration-300 hover:shadow-intense-inset'>
                <span className='text-xl group-hover:animate-wiggle'>👋</span>
                <span className='font-bold text-gray-900'>
                  Let&apos;s Connect
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
