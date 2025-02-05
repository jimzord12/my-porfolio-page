import Button from '@/components/Button';
import UpArrowRight from '@/assets/icons/arrow-up-right.svg';
import GrainBG from '@/components/GrainBG';

const myGmail = 'jimzordgtx@gmail.com';
const subject = 'Intresting Project Offer!';
const body = `Greetings Jim, I have an teresting project that I would like to discuss with you. Best Regards, [Your Name]`;
const fullUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myGmail}&su=${subject}&body=${body}`;

const ContactSection = () => {
  return (
    <div className='container mt-32' id='contact'>
      <div className='relative z-10 overflow-hidden rounded-3xl px-8 py-8 text-black md:px-10'>
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

          <Button
            className='min-w-max border border-gray-900 bg-gray-950 font-semibold text-white transition-all duration-500 hover:shadow-md hover:shadow-red-600 hover:invert md:mt-0 md:px-6 lg:mt-0'
            icon={UpArrowRight}
            link={fullUrl}
            target='_blank'
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
