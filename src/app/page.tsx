import Image from 'next/image';
import HeroImg from 'public/undraw_food.svg';
import { homeData } from '@/data/home-data';
import { CustomLink } from '@/components';
import { BsPeople } from 'react-icons/bs';

const Home = () => {
  return (
    <div>
      <div className='hero lg:pb-20'>
        <div className='h-full flex flex-col'>
          <h1 className='leading-[50px] lg:leading-[70px] text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-b from-lightGreen to-darkColor bg-clip-text text-transparent pb-2'>
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
      </div>
      <section className='flex flex-col'>
        <h2 className='text-xl mb-10'>
          Aplikacja WybierzLokalnie.pl została stworzona z myślą o tych, którzy
          pragną być bardziej świadomymi konsumentami, wspierać lokalne
          gospodarstwa i cieszyć się najświeższymi, wysokiej jakości produktami.
        </h2>
        <h3 className='text-lg mb-10'>
          Zapraszamy do odkrycia kilku powodów, dla których warto rozpocząć
          korzystanie z naszej strony:
        </h3>
        {homeData.map((data, idx) => {
          const { header, content } = data;
          return (
            <p key={idx} className='mb-10'>
              <strong>{header}</strong>
              <br />
              {content}
            </p>
          );
        })}
      </section>
    </div>
  );
};
export default Home;
