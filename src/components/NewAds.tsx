import { notFound } from 'next/navigation';
import { CardsContainer } from '@/components';

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

const NewAds = async () => {
  const data = await getData();

  return (
    <div className='mb-10'>
      <h2 className='text-xl mb-10'>Ostatnio dodane ogłoszenia</h2>
      <CardsContainer data={data} />
    </div>
  );
};

export default NewAds;
