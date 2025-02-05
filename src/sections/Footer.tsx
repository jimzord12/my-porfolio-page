import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const currentYear = new Date().getFullYear();
const footerLinks = [
  {
    title: 'YouTube',
    href: 'https://www.youtube.com/@jimzordstam6338',
  },
  // {
  //   title: 'Twitter',
  //   href: '#',
  // },
  // {
  //   title: 'Instagram',
  //   href: '#',
  // },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dstamatakis96/',
  },
];
const Footer = () => {
  return (
    <footer className='relative z-0 mt-16 overflow-x-clip'>
      <div className='container'>
        <div className='absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]' />
        <div className='flex flex-col items-center justify-between border-t border-white/15 py-6 text-sm md:flex-col-reverse md:gap-6 lg:flex-row'>
          <div className='text-white/40'>
            &copy; {currentYear}. All rights reserved.
          </div>
          <div className='mt-8 md:mt-0'>
            <nav className='flex flex-col gap-8 md:flex-row'>
              {footerLinks.map(({ title, href }) => (
                <a key={title} href={href} target='_blank' rel='noreferrer'>
                  <div className='inline-flex items-center gap-1.5 hover:underline'>
                    <span className=''>{title}</span>
                    <ArrowUpRightIcon className='size-4' />
                  </div>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {/* Using Custom Box-Shadow */}
      {/* <div className='shadow-footer cursor-pointer rounded-full shadow-green-300/30 hover:shadow-red-500' />
       */}
    </footer>
  );
};

export default Footer;
