import { HomeBannerSection, HomeTextSection, NewAds } from '@/components';

const Home = async () => {
  return (
    <div>
      <HomeBannerSection />
      <NewAds />
      <HomeTextSection />
    </div>
  );
};
export default Home;
