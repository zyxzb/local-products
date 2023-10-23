import { PageTitle, UserInfo } from '@/components';
import { redirect } from 'next/navigation';
import { AccountProps } from '@/types';
import getCurrentUser from '@/actions/getCurrentUser';

// const getData = async (email: string) => {
//   const res = await fetch(
//     `${
//       process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2
//     }/api/twoje-konto/${email}`,
//     {
//       cache: 'no-store',
//     },
//   );

//   if (!res.ok) {
//     return notFound();
//   }
//   return res.json();
// };

const Account = async ({ params: { email } }: AccountProps) => {
  const currentUser = await getCurrentUser();
  const fixedEmail = email.replace('%40', '@');

  if (!currentUser) {
    redirect('/twoje-konto/login');
  }

  if (currentUser?.email !== fixedEmail) {
    redirect(`/twoje-konto/${currentUser?.email}`);
  }

  return (
    <>
      <PageTitle title='Twoje konto' />
      <div className='flex flex-col gap-10 md:gap-20'>
        <h2 className='text-xl sm:text-3xl'>
          Witaj, {currentUser?.name}! Poniżej znajdują się dodane przez Ciebie
          ogłoszenia.
        </h2>
        {/* <CardsContainer
         data={data} 
         /> */}
        <UserInfo />
      </div>
    </>
  );
};

export default Account;
