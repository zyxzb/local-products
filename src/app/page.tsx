import { Metadata } from 'next';
import { Suspense } from 'react';

import {
  HomeBannerSection,
  DetailsSummary,
  Loader,
  TextHome,
  // Categories,
} from '@/components';
import NewAds from '@/components/NewAds';

import getInitialListings from '@/actions/getInitialListings';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.wybierzlokalnie.pl',
  },
};

export const revalidate = 60;

const Home = async () => {
  const data = await getInitialListings();

  return (
    <div className='flex flex-col gap-10 md:gap-20'>
      <HomeBannerSection />
      {/* <Categories /> */}
      <TextHome />
      <Suspense fallback={<Loader />}>
        <NewAds data={data} />
      </Suspense>
      <DetailsSummary />
    </div>
  );
};
export default Home;
