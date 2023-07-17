import { Card, PageTitle, PageWrapper } from '@/components';
import { CardProps } from '@/types';
import { notFound } from 'next/navigation';

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2}/api/ads`,
    {
      cache: 'no-store',
    },
  );

  console.log(res);

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

const Ads = async () => {
  const data = await getData();

  return (
    <PageWrapper>
      <PageTitle title='Lokalne ogłoszenia' />
      {data.length > 4 && (
        <div className='mb-4'>
          <p>Znaleziono {data.length} ogłoszeń</p>
        </div>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((item: CardProps) => {
          return (
            <Card
              key={item._id}
              item={item}
              extraStyles='shadow hover:shadow-label'
            />
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default Ads;
