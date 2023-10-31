import Image from 'next/image';
import HeroImg from 'public/undraw_food.svg';
import CustomLink from './CustomLink';
import { BsPeople } from 'react-icons/bs';

const HomeBannerSection = () => {
  return (
    <section className='grid grid-cols-banner'>
      <div className='h-full flex flex-col'>
        <span className='text-4xl lg:text-5xl xl:text-[55px] bg-gradient-to-b from-lightGreen to-darkColor bg-clip-text text-transparent pb-2 font-bold'>
          <h1>Lokalni Producenci Żywności</h1>
          w Twojej Okolicy.
          <br />
          Wybierz Świadomie.
          <br />
          Wybierz Lokalnie!
        </span>
        <CustomLink
          text='Dołacz do społecznosci'
          link='/twoje-konto'
          extraStyles='self-start mr-auto mt-6'
          icon={<BsPeople className='text-2xl' />}
        />
      </div>
      <div className='animate-move -z-10 sm:py-10'>
        <Image
          src={HeroImg}
          priority={true}
          alt='hero-image'
          className='w-full h-[350px]'
        />
      </div>
    </section>
  );
};

export default HomeBannerSection;
