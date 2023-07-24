import { PageTitle } from '@/components';
import { AllAds } from '@/components';

const Ads = async () => {
  return (
    <>
      <PageTitle title='Lokalne ogłoszenia' />
      <AllAds />
    </>
  );
};

export default Ads;
