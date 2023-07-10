import { HomeBannerSection, HomeTextSection, PageWrapper } from '@/components';

const wait = async (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const Home = async () => {
  // add latest announcements later
  const data = await wait(2000);

  return (
    <PageWrapper>
      <div>
        <HomeBannerSection />
        <HomeTextSection />
      </div>
    </PageWrapper>
  );
};
export default Home;
