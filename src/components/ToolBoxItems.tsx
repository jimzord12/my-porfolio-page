import React, { ElementType } from 'react';
import TechIcon from './TechIcon';
import { twMerge } from 'tailwind-merge';

type ToolboxItem = {
  title: string;
  iconType: ElementType;
};

type Props = {
  items: ToolboxItem[];
  className?: string;
};

const ToolBoxItems = ({ items, className }: Props) => {
  return (
    <div className={twMerge('tape-mask-edges flex', className)}>
      <div className='flex flex-none gap-6 py-0.5 pr-6'>
        {items.map((tool) => (
          <div
            key={tool.title}
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
