import React, { ElementType, PropsWithChildren } from 'react';
import { cn } from '@/utils/helpers';

type Props = {
  link?: string;
  icon?: ElementType;
  iconSize?: number;
  className?: string;
  target?: '_blank' | '_self';
};

const Button = ({
  children,
  icon,
  iconSize = 4,
  link,
  className,
  target = '_blank',
}: PropsWithChildren<Props>) => {
  const Icon = icon;
  return (
    <a
      href={link}
      target={target}
      rel='noreferrer'
      className={cn(
        'mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white p-4 px-6 font-bold text-gray-950 md:w-auto md:px-8 lg:mt-8',
        className
      )}
    >
      <span>{children}</span>
      <span>{Icon && <Icon className={`size-${iconSize}`} />}</span>
    </a>
  );
};

export default Button;
