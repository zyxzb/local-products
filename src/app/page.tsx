import {
  HomeBannerSection,
  HomeTextSection,
  NewAds,
  PageWrapper,
} from '@/components';
import { notFound } from 'next/navigation';

// const wait = async (delay: number) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// };

const getData = async () => {
  const res = await fetch(
    `${
      process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2
    }/api/ads/homePageAds`,
    { cache: 'no-store' },
  );

  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

const Home = async () => {
  const data = await getData();

  return (
    <PageWrapper>
      <div>
        <HomeBannerSection />
        <NewAds data={data} />
        <HomeTextSection />
      </div>
    </PageWrapper>
  );
};
export default Home;
