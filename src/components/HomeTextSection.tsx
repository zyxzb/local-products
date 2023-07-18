import { homeData } from '@/data/home-data';
import HomePargaraph from './HomeParagraph';

const HomeTextSection = () => {
  return (
    <section className='flex flex-col'>
      <h2 className='text-xl mb-10'>
        Aplikacja WybierzLokalnie.pl została stworzona z myślą o tych, którzy
        pragną być bardziej świadomymi konsumentami, wspierać lokalne
        gospodarstwa i cieszyć się najświeższymi, wysokiej jakości produktami.
      </h2>
      <h2 className='text-xl mb-10'>
        Poznaj kilka powodów, dla których warto korzystać z aplikacji
        WybierzLokalnie:
      </h2>
      {homeData.map((data, idx) => (
        <HomePargaraph key={idx} data={data} />
      ))}
    </section>
  );
};

export default HomeTextSection;
