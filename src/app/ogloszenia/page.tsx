import { PageTitle, PageWrapper, SkeletonCard } from '@/components';
import { CardProps } from '@/types';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

const DynamicCard = dynamic(() => import('@/components/Card'), {
  loading: () => <SkeletonCard />,
  ssr: false,
});

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
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'>
        {data.map((item: CardProps) => {
          return <DynamicCard key={item._id} item={item} />;
        })}
      </div>
    </PageWrapper>
  );
};

export default Ads;
