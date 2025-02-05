import React, { ElementType } from 'react';
import TechIcon from './TechIcon';
import { twMerge } from 'tailwind-merge';
import { duplicateItemsBy } from '@/utils/helpers';
import clsx from 'clsx';

type ToolboxItem = {
  title: string;
  iconType: ElementType;
};

type Props = {
  items: ToolboxItem[];
  className?: string;
  moveDirection: 'right' | 'left';
};

const ToolBoxItems = ({ items, className, moveDirection }: Props) => {
  return (
    <div className={twMerge('tape-mask-edges flex', className)}>
      <div
        className={clsx(
          'flex flex-none gap-6 py-0.5 pr-6',
          moveDirection === 'right'
            ? 'animate-move-right '
            : 'animate-move-left',
        )}
      >
        {duplicateItemsBy(items).map((tool, idx) => (
          <div
            key={`${tool.title}-${idx}`}
            className='inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10'
          >
            <TechIcon component={tool.iconType} />
            <span>{tool.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolBoxItems;
