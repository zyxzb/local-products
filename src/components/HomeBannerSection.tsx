import Image from 'next/image';
import HeroImg from 'public/undraw_food.svg';
import CustomLink from './CustomLink';
import { BsPeople } from 'react-icons/bs';

const HomeBannerSection = () => {
  return (
    <section className='hero mb-20 lg:mb-0 lg:pb-20'>
      <div className='h-full flex flex-col'>
        <h1 className='leading-[50px] lg:leading-[70px] text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-b from-lightGreen to-darkColor bg-clip-text text-transparent pb-2 transition-opacity duration-500 '>
          Odkryj Lokalnych Producentów Żywnosci w Twojej Okolicy.
          <br />
          Wybierz Lokalnie.
        </h1>
        <CustomLink
          text='Dołacz do społecznosci'
          link='/twoje-konto/login'
          extraStyles='self-start mr-auto mt-6'
          icon={<BsPeople className='text-2xl' />}
        />
      </div>
      <div className='animate-move -z-10 sm:py-10'>
        <Image src={HeroImg} alt='hero-image' className='w-full h-[350px]' />
      </div>
    </section>
  );
};

export default HomeBannerSection;
