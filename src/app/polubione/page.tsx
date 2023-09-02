'use client';

import { PageTitle, CardsContainer, CustomLink } from '@/components';
import { useAddToFavorites } from '@/context/addToFavorites';

const Liked = () => {
  const { favoritesAds } = useAddToFavorites();

  return (
    <div>
      <PageTitle title='Polubione Ogłoszenia' />
      {favoritesAds.length > 0 ? (
        <CardsContainer data={favoritesAds} canDelete={true} />
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

export default Liked;
