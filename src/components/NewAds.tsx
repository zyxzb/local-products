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
    <section>
      <p className='mb-4 text-sm md:text-base'>Ostatnio dodane ogłoszenia</p>
      <CardsContainer data={data} />
    </section>
  );
};

export default NewAds;
