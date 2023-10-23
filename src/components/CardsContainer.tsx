'use client';

import { SkeletonCard } from '@/components';
import { CardProps } from '@/types';
import dynamic from 'next/dynamic';

const DynamicCard = dynamic(() => import('@/components/Card'), {
  loading: () => <SkeletonCard />,
  ssr: false,
});

const CardsContainer = ({
  data,
  canDelete,
}: {
  data: any;
  canDelete?: true;
}) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'>
      {data.map((item: any) => {
        return <DynamicCard key={item.id} item={item} canDelete={canDelete} />;
      })}
    </div>
  );
};

export default CardsContainer;
