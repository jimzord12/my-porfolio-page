import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import { Fragment } from 'react';

const testimonials = [
  {
    name: 'Alex Turner',
    position: 'Marketing Manager @ TechStartups',
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: 'Olivia Green',
    position: 'Head of Design @ GreenLeaf',
    text: 'Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Daniel White',
    position: 'CEO @ InnovateCo',
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: 'Emily Carter',
    position: 'Product Manager @ GlobalTech',
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: 'Michael Brown',
    position: 'Director of IT @ MegaCorp',
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className='mt-16 lg:mt-32'>
      <div className=''>
        <SectionHeader
          eyebrow='Happy Clients'
          title='What Clients Say about Me'
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className='-my-4 mt-12 flex overflow-x-clip p-1 py-4 [mask-image:linear-gradient(to_right,transparent,black_25%,black_90%,transparent)] lg:mt-20'>
          <div
            className='animate-move-left flex flex-none snap-x snap-proximity gap-8 pr-8 hover:[animation-play-state:paused]'
            style={{ animationDuration: '60s' }}
          >
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={`testemonials-${idx}`}>
                  {testimonials.map((t) => (
                    <Card
                      key={t.name}
                      className='max-w-xs snap-center py-5 shadow-md shadow-white/20 transition-transform duration-300 hover:rotate-3 odd:hover:-rotate-3 md:max-w-md md:px-5 md:py-8 md:pb-12 lg:px-8'
                    >
                      <div className='inline-flex items-center gap-4'>
                        <div className='size-14 shrink-0 content-center rounded-full bg-gray-600/50'>
                          <Image
                            src={t.avatar}
                            alt={t.name}
                            className='max-h-full'
                          />
                        </div>
                        <div>
                          <div className=''>{t.name}</div>
                          <div className='secondary-text-color text-sm font-light'>
                            {t.position}
                          </div>
                        </div>
                      </div>
                      <p className='mt-4 text-sm font-light md:mt-4 md:text-base'>
                        {t.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
