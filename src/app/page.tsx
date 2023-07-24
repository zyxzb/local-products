import {
  HomeBannerSection,
  HomeTextSection,
  NewAds,
  // PageWrapper,
} from '@/components';

const Home = async () => {
  return (
    // <PageWrapper>
    <div>
      <HomeBannerSection />
      <NewAds />
      <HomeTextSection />
    </div>
    // </PageWrapper>
  );
};
export default Home;
