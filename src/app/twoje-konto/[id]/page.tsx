import { PageTitle, UserInfo } from '@/components';
import { redirect } from 'next/navigation';
import { AccountProps } from '@/types';
import getCurrentUser from '@/actions/getCurrentUser';
import getAllListings from '@/actions/getAllListings';
import AccountClient from './AccountClient';

const Account = async ({ params: { id } }: AccountProps) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect('/twoje-konto/login');
  }
  const data = await getAllListings({ userId: currentUser.id });

  if (currentUser?.id !== id) {
    return redirect(`/twoje-konto/${currentUser.id}`);
  }

  return (
    <>
      <PageTitle title='Twoje konto' />
      <div className='flex flex-col gap-10 md:gap-20'>
        <h2 className='text-xl sm:text-3xl'>
          Witaj, {currentUser?.name}! Poniżej znajdują się dodane przez Ciebie
          ogłoszenia.
        </h2>
        <AccountClient data={data} currentUser={currentUser} canDelete />
        <UserInfo />
      </div>
    </>
  );
};

export default Account;
