import React from 'react';

type Props = {
  component: React.ElementType;
};

const TechIcon = (props: Props) => {
  const Component = props.component;
  return <Component className='gradient-bg size-10' />;
};

export default TechIcon;
