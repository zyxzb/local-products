'use client';

import { SkeletonCard } from '@/components';
import { CardProps } from '@/types';
import dynamic from 'next/dynamic';

const DynamicCard = dynamic(() => import('@/components/Card'), {
  loading: () => <SkeletonCard />,
  ssr: false,
});

const CardsContainer = ({ data }: { data: CardProps[] }) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'>
      {data.map((item: CardProps) => {
        return <DynamicCard key={item._id} item={item} />;
      })}
    </div>
  );
};

export default CardsContainer;
