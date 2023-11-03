import getCurrentUser from '@/actions/getCurrentUser';
import getFavoritesListings from '@/actions/getFavoritesListings';
import { CardsContainer, CustomLink, PageTitle } from '@/components';

const Liked = async () => {
  const currentUser = await getCurrentUser();
  const data = await getFavoritesListings();

  if (!currentUser) {
    return (
      <>
        <PageTitle
          title='Zachowaj Polubione ogłoszenia'
          subtitle='Po zalogowaniu możesz dodawać i usuwać ulubione ogłoszenia. Twoje wybory będą dostępne na każdym urządzeniu'
        />
        <div className='text-center'>
          <CustomLink
            text='Logowanie/Rejestracja'
            link='/twoje-konto'
            extraStyles='max-w-max mx-auto'
          />
        </div>
      </>
    );
  }

  return (
    <>
      <PageTitle
        title='Polubione Ogłoszenia'
        subtitle='Twoje ulubione ogłoszenia będą dostępne na każdym urządzeniu po zalogowaniu. Dodawaj i usuwaj je według własnych preferencji.'
      />
      {data.length > 0 ? (
        <CardsContainer data={data} currentUser={currentUser} />
      ) : (
        <CustomLink
          text='Dodaj pierwsze ogłoszenie'
          link='/ogloszenia'
          extraStyles='max-w-max mx-auto'
        />
      )}
    </>
  );
};

export default Liked;
