import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

const HeroOrbit = ({
  children,
  size,
  rotation,
  spinDurationSec = '60s',
  selfSpinDurationSec = '20s',
  shouldSpin = true,
  spinDelaySec = '0s',
}: PropsWithChildren<{
  size: number;
  rotation: number;
  selfSpinDurationSec?: string;
  spinDurationSec?: string;
  spinDelaySec?: string;
  shouldSpin?: boolean;
}>) => {
  return (
    <div className='center-abs-obj absolute'>
      <div
        className={clsx(shouldSpin && 'animate-spin')}
        style={{
          animationDuration: spinDurationSec,
          animationDelay: spinDelaySec,
        }}
      >
        <div
          className='flex items-start justify-start'
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className='inline-flex'
            style={{
              transform: `rotate(${rotation * -1}deg)`,
            }}
          >
            <div
              className='animate-spin'
              style={{
                animationDuration: selfSpinDurationSec,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
