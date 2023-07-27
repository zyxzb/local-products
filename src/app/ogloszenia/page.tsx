import { Loader, Breadcrumbs } from '@/components';
import dynamic from 'next/dynamic';

const AllAdsDymanic = dynamic(() => import('@/components/AllAds'), {
  loading: () => <Loader />,
});

const Ads = async () => {
  return (
    <>
      <Breadcrumbs pageName='Ogłoszenia' />
      <AllAdsDymanic />
    </>
  );
};

export default Ads;
