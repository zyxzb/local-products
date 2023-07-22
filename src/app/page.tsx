import {
  HomeBannerSection,
  HomeTextSection,
  Loader,
  NewAds,
  PageWrapper,
} from '@/components';
import { Suspense } from 'react';

const Home = async () => {
  return (
    <PageWrapper>
      <div>
        <HomeBannerSection />
        {/* add skeleton for cards later*/}
        <Suspense
          fallback={
            <div className='h-[200px]'>
              <Loader />
            </div>
          }
        >
          <NewAds />
        </Suspense>
        <HomeTextSection />
      </div>
    </PageWrapper>
  );
};
export default Home;
