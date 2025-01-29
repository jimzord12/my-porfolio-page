import React from 'react';

type Props = {
  component: React.ElementType;
};

const TechIcon = (props: Props) => {
  const Component = props.component;
  return (
    <>
      <svg className='absolute size-0'>
        <linearGradient id='tech-icon-gradient'>
          <stop offset='0%' stopColor='rgb(74 222 128)' />
          <stop offset='100%' stopColor='rgb(14 165 233)' />
        </linearGradient>
      </svg>
      <Component
        className='size-10'
        style={{ fill: 'url(#tech-icon-gradient)' }}
      />
    </>
  );
};

export default TechIcon;
