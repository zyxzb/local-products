import { notFound } from 'next/navigation';
import { CardsContainer } from '@/components';

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2}/api/ads`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

const AllAds = async () => {
  const data = await getData();

  return (
    <div>
      {data?.length > 4 && (
        <div className='mb-4'>
          <p>Znaleziono {data.length} ogłoszeń</p>
        </div>
      )}
      <CardsContainer data={data} />
    </div>
  );
};

export default AllAds;
