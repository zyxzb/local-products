'use client';

import Link from 'next/link';
import { formatFullDate } from '@/utils/helpers';
import { LazyImage, CardButtons } from '@/components';
import { User, Listing } from '@prisma/client';

interface CardProps {
  item: Listing;
  canDelete?: true;
  currentUser?: User | null;
  onAction?: (id: string) => void;
}

const Card = async ({ item, canDelete, currentUser, onAction }: CardProps) => {
  const { title, location, id, images, createdAt } = item;

  const cardImage = images.length ? images[0] : '/landWhite.png';

  return (
    <Link href={`/ogloszenia/${id}`}>
      <div className='bg-white rounded-md transition cursor-pointer h-[280px] sm:h-[360px] flex flex-col gap-4 p-3 group shadow hover:shadow-label'>
        <div className='relative w-full h-[65%]'>
          <LazyImage
            cardImage={cardImage}
            title={title}
            classNames='object-cover group-hover:opacity-80 transition-opacity'
          />
        </div>
        <div className='flex flex-col justify-between h-[35%]'>
          <div>
            <h2 className='mb-2 text-md sm:text-lg line-clamp-2 '>
              <strong className='font-normal'>{title}</strong>
            </h2>
          </div>
          <div className='flex justify-between gap-4 items-center mt-auto'>
            <div className='text-xs flex flex-col opacity-70'>
              <span className='line-clamp-1'>{location}</span>
              <span className='line-clamp-1'>
                {formatFullDate(String(createdAt))}
              </span>
            </div>
            <CardButtons
              listingId={id}
              title={title}
              canDelete={canDelete}
              currentUser={currentUser}
              onAction={onAction}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
