import {
  ashort,
  kogias,
  koukouli,
  leligkou,
  xevgenis,
} from '@/assets/images/uniwaTeam';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import { Fragment } from 'react';

const testimonials = [
  {
    name: 'Eleni Aikaterini Leligkou',
    position: 'Project Manager @ LCIIS Lab',
    text: 'Dimitris has been an essential part of our team, leading the development of our Web3 platform. His expertise in Next.js, React, and blockchain technologies has helped us build a scalable and user-friendly ecosystem for the GENERA project.',
    avatar: leligkou,
  },
  {
    name: 'Dimitrios Kogias',
    position: 'Team Leader @ LCIIS Lab',
    text: "Dimitris's full-stack expertise has been instrumental in bringing our vision to life. Over the past two years, he has successfully developed and deployed multiple decentralized applications, showcasing his deep knowledge of Web3 and backend systems.",
    avatar: kogias,
  },
  {
    name: 'Andrew Ronald',
    position: 'Senior Backend Developer & Researcher @ LCIIS Lab',
    text: 'Dimitris has a strong ability to integrate blockchain technology with modern web development. His work on the Online Web3 Education Game and the Rewarding Tool has provided an engaging and seamless user experience, making the GENERA project a success.',
    avatar: ashort,
  },
  {
    name: 'Maria Koukouli',
    position: 'Project Manager Assistant @ LCIIS Lab',
    text: "Dimitris's attention to detail and problem-solving skills have been crucial in the development of our decentralized applications. His work on the Social Forum and its integration with WordPress has helped foster a strong online community for our project.",
    avatar: koukouli,
  },
  {
    name: 'Michael Xevgenis',
    position: 'Senior Cloud DevOps & Researcher @ LCIIS Lab',
    text: 'Dimitris is not only an exceptional full-stack developer but also a proactive team player. His ability to work across multiple technologies, from React to Docker, has ensured the smooth deployment and scalability of our Web3 platform.',
    avatar: xevgenis,
  },
];

const TestimonialsSection = () => {
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
            className='flex flex-none animate-move-left snap-x snap-proximity gap-8 pr-8 hover:[animation-play-state:paused]'
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

export default TestimonialsSection;
