import { CardProps } from '@/types';
import Card from './Card';
import { notFound } from 'next/navigation';

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
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'>
        {data.map((item: CardProps) => {
          return <Card key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default NewAds;
