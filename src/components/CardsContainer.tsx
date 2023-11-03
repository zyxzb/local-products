import dynamic from 'next/dynamic';
import { User, Listing } from '@prisma/client';

import { SkeletonCard } from '@/components';

interface CardsContainerProps {
  data: Listing[];
  canDelete?: true;
  currentUser?: User | null;
  disabledButtons?: boolean;
}

const DynamicCard = dynamic(() => import('@/components/Card'), {
  loading: () => <SkeletonCard />,
  ssr: true,
});

const CardsContainer = ({
  data,
  canDelete,
  currentUser,
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
            disabledButtons={disabledButtons}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
