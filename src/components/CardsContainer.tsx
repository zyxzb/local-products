'use client';

import { SkeletonCard } from '@/components';
import dynamic from 'next/dynamic';
import { User, Listing } from '@prisma/client';

interface CardsContainerProps {
  data: Listing[];
  canDelete?: true;
  currentUser?: User | null;
  disabledButtons?: boolean;
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
  disabledButtons,
}: CardsContainerProps) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'>
      {data.map((item: Listing) => {
        return (
          <DynamicCard
            key={item.id}
            item={item}
            canDelete={canDelete}
            currentUser={currentUser}
            onAction={onAction}
            disabledButtons={disabledButtons}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
