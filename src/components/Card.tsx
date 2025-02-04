import React, { ComponentPropsWithoutRef } from 'react';
import GrainBG from './GrainBG';
import { twMerge } from 'tailwind-merge';

const Card = ({
  children,
  className,
  ...other
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        'relative z-0 overflow-hidden rounded-3xl bg-gray-800 p-8 outline outline-2 outline-slate-400/30',
        className,
      )}
      {...other}
    >
      <GrainBG />

      {/* <div className={twMerge(className)}> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default Card;
