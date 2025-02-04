import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';

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

// const hash = async (data: string) => {
//   const encoder = new TextEncoder();
//   const encodedData = encoder.encode(data);

//   const hashBuffer = await crypto.subtle.digest("SHA-256", encodedData);

//   return Array.from(new Uint8Array(hashBuffer))
//     .map((byte) => byte.toString(16).padStart(2, "0"))
//     .join("");
// };

export const TapeSection = () => {
  // const [hashes, setHashes] = useState<string[] | null>(null);

  // useEffect(() => {
  //   const computeHashes = async () => {
  //     const hashedWords = await Promise.all(words.map((word) => hash(word)));
  //     setHashes(hashedWords);
  //   };
  //   computeHashes();
  // }, []);

  return (
    <div className='py-16'>
      <div className='gradient-bg -mx-1 -rotate-3'>
        <div className='tape-mask-edges flex'>
          <div className='animate-move-left flex flex-none gap-4 py-3 pr-4'>
            {[
              ...new Array(2).fill(0).map((_, index) => (
                <Fragment key={`tape-arr-${index}`}>
                  {words.map((word) => (
                    <div
                      key={word}
                      className='inline-flex items-center gap-4 text-sm font-extrabold uppercase text-black'
                    >
                      <span>{word}</span>
                      <StarIcon className='size-6 -rotate-12' />
                    </div>
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
