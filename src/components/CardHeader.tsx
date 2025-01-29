import React from 'react';
import StarIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';

type Props = {
  title: string;
  description: string;
  className?: string;
};

const CardHeader = ({ title, description, className }: Props) => {
  return (
    <div className={twMerge('-mt-1 flex flex-col', className)}>
      <div className='inline-flex items-center gap-2'>
        <StarIcon className='size-9 text-green-300' />
        <h3 className='font-serif text-3xl'>{title}</h3>
      </div>
      <p className='secondary-text-color mt-2 text-sm lg:text-base'>
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
