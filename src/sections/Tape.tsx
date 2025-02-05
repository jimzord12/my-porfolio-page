import StarIcon from '@/assets/icons/star.svg';
import { duplicateItemsBy } from '@/utils/helpers';

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
];

const TapeSection = () => {
  return (
    <div className='py-16'>
      <div className='gradient-bg -mx-1 -rotate-3'>
        <div className='tape-mask-edges flex'>
          <div className='flex flex-none animate-move-left gap-4 py-3 pr-4'>
            {duplicateItemsBy(words, 2).map((word, idx) => (
              <div
                key={`${word}-${idx}`}
                className='inline-flex items-center gap-4 text-sm font-extrabold uppercase text-black'
              >
                <span>{word}</span>
                <StarIcon className='size-6 -rotate-12' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;
