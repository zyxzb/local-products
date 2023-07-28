import { HomeBannerSection, HomeTextSection, NewAds } from '@/components';

const Home = async () => {
  return (
    <div className='flex flex-col gap-10 md:gap-20'>
      <HomeBannerSection />
      <h2 className='md:text-xl'>
        Aplikacja WybierzLokalnie.pl została stworzona z myślą o tych, którzy
        pragną być bardziej świadomymi konsumentami, wspierać lokalne
        gospodarstwa i cieszyć się najświeższymi, wysokiej jakości produktami.
      </h2>
      <NewAds />
      <HomeTextSection />
    </div>
  );
};
export default Home;
