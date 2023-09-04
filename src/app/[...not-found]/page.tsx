import { CustomLink } from '@/components';
import Image from 'next/image';
import ErrorImg from 'public/error.svg';

const notFound = () => {
  return (
    <div className='text-center'>
      <Image
        src={ErrorImg}
        alt='hero-image'
        className='w-full h-[300px] mb-4 md:mb-8'
      />
      <h2 className='md:text-lg mb-4 md:mb-8'>
        404 - Strona, której szukasz jest niedostępna.
      </h2>
      <CustomLink
        link='/'
        text='Wróć na strone główną'
        extraStyles='max-w-max mx-auto'
      />
    </div>
  );
};

export default notFound;
