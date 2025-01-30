import grainImage from '@/assets/images/grain.jpg';

const GrainBG = () => {
  return (
    <div
      className='pointer-events-none absolute inset-0 -z-10 opacity-5'
      style={{ backgroundImage: `url(${grainImage.src})` }}
    />
  );
};

export default GrainBG;
