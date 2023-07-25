import { Loader, PageTitle } from '@/components';
import dynamic from 'next/dynamic';

const AllAdsDymanic = dynamic(() => import('@/components/AllAds'), {
  loading: () => <Loader />,
});

const Ads = async () => {
  return (
    <>
      <PageTitle title='Lokalne ogłoszenia' />
      <AllAdsDymanic />
    </>
  );
};

export default Ads;
