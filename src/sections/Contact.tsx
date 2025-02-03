import Button from '@/components/Button';
import UpArrowRight from '@/assets/icons/arrow-up-right.svg';
import GrainBG from '@/components/GrainBG';

export const ContactSection = () => {
  return (
    <div className='container mt-32'>
      <div className='relative z-0 overflow-hidden rounded-3xl px-8 py-8 text-black md:px-10'>
        <GrainBG />
        <div className='gradient-bg absolute inset-0 -z-20'></div>
        <div className='flex flex-col items-center justify-center md:flex-row md:gap-24'>
          <div className='md:flex md:flex-col md:justify-start'>
            <h2 className='text-center font-serif text-2xl md:text-start md:text-3xl'>
              Let&apos;s create something amazing together
            </h2>
            <p className='mt-2 text-center text-sm md:text-start md:text-base'>
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>

          {/* <Button
            className='min-w-44 bg-gray-950 font-semibold text-white md:mt-0 md:w-40 md:min-w-min md:px-0'
            icon={UpArrowRight}
          >
            Contact Me
          </Button> */}
          <Button
            className='min-w-max border border-gray-900 bg-gray-950 font-semibold text-white md:mt-0 md:px-6 lg:mt-0'
            icon={UpArrowRight}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
