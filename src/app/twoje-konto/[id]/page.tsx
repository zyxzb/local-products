import { CardsContainer, PageTitle, UserButtons } from '@/components';
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
    const name = currentUser?.name;
    return (
      <>
        <PageTitle
          title='Twoje konto'
          subtitle={`Witaj, ${name}! Poniżej znajdują się dodane przez Ciebie
            ogłoszenia.`}
        />
        <UserButtons data={data} />
        <div className='flex flex-col gap-10 md:gap-20'>
          <CardsContainer data={data} currentUser={currentUser} canDelete />
        </div>
      </>
    );
  }
};

export default Account;
