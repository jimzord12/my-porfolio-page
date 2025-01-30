import Button from '@/components/Button';
import UpArrowRight from '@/assets/icons/arrow-up-right.svg';
import GrainBG from '@/components/GrainBG';

export const ContactSection = () => {
  return (
    <div className='container mt-32 pb-96'>
      <div className='relative overflow-hidden rounded-3xl px-12 py-8 text-black'>
        <GrainBG />
        <div className='gradient-bg absolute inset-0 -z-20'></div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-center font-serif text-2xl'>
            Let&apos;s create something amazing together
          </h2>
          <p className='mt-2 text-center text-sm tracking-tight'>
            Ready to bring your next project to life?
            <br />
            Let&apos;s connect and discuss how I can help you achieve your
            goals.
          </p>

          <Button
            className='z-10 w-44 bg-gray-950 text-white'
            icon={UpArrowRight}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
