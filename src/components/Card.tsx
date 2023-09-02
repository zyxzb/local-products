'use client';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Link from 'next/link';
import { AiFillHeart, AiOutlineDelete } from 'react-icons/ai';
import { CardProps } from '@/types';
import { formatFullDate } from '@/utils/helpers';
import { LazyImage } from '@/components';
import { useAddToFavorites } from '@/context/addToFavorites';
import { toast } from 'react-toastify';

const Card = ({ item, canDelete }: { item: CardProps; canDelete?: true }) => {
  const { title, location, _id, images, createdAt } = item;
  const { favoritesAds, setFavoritesAds } = useAddToFavorites();

  const cardImage = images.length
    ? String(images[0].fileUrl)
    : '/landWhite.png';

  const handleAddToFavorites = () => {
    const tempFavoriteAd = favoritesAds.filter((ad) => ad._id === _id);
    if (tempFavoriteAd.length > 0) {
      toast.info(`${title} juz istnieje w polubionych`);
    } else {
      setFavoritesAds([...favoritesAds, item]);
      toast.success(`Dodano: ${title} do polubionych`);
    }
  };

  const handleRemoveFromFavorites = () => {
    const tempFavoritesCard = favoritesAds.filter((ad) => ad._id !== _id);
    setFavoritesAds([...tempFavoritesCard]);
    toast.info(`${title} usunięto z polubionych`);
  };

  return (
    <Link href={`/ogloszenia/${_id}`}>
      <div className='bg-white rounded-md transition cursor-pointer h-[280px] sm:h-[360px] flex flex-col gap-4 p-3 group shadow hover:shadow-label'>
        <div className='relative w-full h-[65%]'>
          <LazyImage
            cardImage={cardImage}
            title={title}
            location={location}
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
              <span className='line-clamp-1'>{formatFullDate(createdAt)}</span>
            </div>
            <Tippy
              content={
                canDelete ? 'Usuń z polubionych' : 'Dodaj do polubionych'
              }
            >
              {canDelete ? (
                <button
                  type='button'
                  aria-label='remove from favorites'
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveFromFavorites();
                  }}
                  className='text-3xl text-darkColor hover:text-lightGreen self-end transition'
                >
                  <AiOutlineDelete />
                </button>
              ) : (
                <button
                  type='button'
                  aria-label='add to favorites'
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToFavorites();
                  }}
                  className='text-3xl text-darkColor hover:text-lightGreen self-end transition'
                >
                  <AiFillHeart />
                </button>
              )}
            </Tippy>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
