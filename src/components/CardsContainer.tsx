'use client';

import { SkeletonCard } from '@/components';
import dynamic from 'next/dynamic';
import { User } from '@prisma/client';

interface CardsContainerProps {
  data: any;
  canDelete?: true;
  currentUser?: User | null;
  onAction?: (id: string) => void;
}

const DynamicCard = dynamic(() => import('@/components/Card'), {
  loading: () => <SkeletonCard />,
  ssr: false,
});

const CardsContainer = ({
  data,
  canDelete,
  currentUser,
  onAction,
}: CardsContainerProps) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'>
      {data.map((item: any) => {
        return (
          <DynamicCard
            key={item.id}
            item={item}
            canDelete={canDelete}
            currentUser={currentUser}
            onAction={onAction}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
