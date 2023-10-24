import getCurrentUser from '@/actions/getCurrentUser';
import getFavoritesListings from '@/actions/getFavoritesListings';
import { CardsContainer, CustomLink, PageTitle } from '@/components';

const Liked = async () => {
  const currentUser = await getCurrentUser();
  const data = await getFavoritesListings();

  return (
    <div>
      <PageTitle title='Polubione Ogłoszenia' />
      {!currentUser ? (
        <div className='text-center'>
          <h2 className='md:text-lg mb-4 md:mb-8'>
            Zaloguj się aby widzieć polubione ogłoszenia
          </h2>
          <CustomLink
            text='Logowanie/Rejestracja'
            link='/twoje-konto/login'
            extraStyles='max-w-max mx-auto'
          />
        </div>
      ) : data.length > 0 ? (
        <CardsContainer data={data} currentUser={currentUser} />
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
