import { CardsContainer, PageTitle, UserInfo } from '@/components';
import { redirect } from 'next/navigation';
import getCurrentUser from '@/actions/getCurrentUser';
import getAllListings from '@/actions/getAllListings';

interface AccountProps {
  params: {
    id: string;
  };
}

const Account = async ({ params: { id } }: AccountProps) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect('/twoje-konto');
  }

  const data = await getAllListings({ userId: currentUser.id });

  if (currentUser.id === id) {
    return (
      <>
        <PageTitle title='Twoje konto' />
        <div className='flex flex-col gap-10 md:gap-20'>
          <h2 className='text-xl sm:text-3xl'>
            Witaj, {currentUser?.name}! Poniżej znajdują się dodane przez Ciebie
            ogłoszenia.
          </h2>
          <CardsContainer data={data} currentUser={currentUser} canDelete />
          <UserInfo />
        </div>
      </>
    );
  }
};

export default Account;
