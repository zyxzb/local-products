'use client';

import { CardsContainer, CustomLink } from '@/components';
import { useAddToFavorites } from '@/context/addToFavorites';
import { CardProps } from '@/types';

const FavoritesAds = ({ ads }: { ads: CardProps[] }) => {
  const { favoritesAds } = useAddToFavorites();

  const findCommonIds = (ads: CardProps[], favoritesAds: CardProps[]) => {
    return ads.filter((el1) => favoritesAds.some((el2) => el2._id === el1._id));
  };

  const commonElements = findCommonIds(ads, favoritesAds);

  return (
    <div>
      {commonElements.length > 0 ? (
        <CardsContainer data={commonElements} canDelete={true} />
      ) : (
        <div className='text-center'>
          <h2 className='md:text-lg mb-4 md:mb-8'>
            Brak polubionych ogłoszeń. Dodaj pierwsze.
          </h2>
          <CustomLink
            text='Przeglądaj ogłoszenia'
            link='/ogloszenia'
            extraStyles='max-w-max mx-auto'
          />
        </div>
      )}
    </div>
  );
};

export default FavoritesAds;
